import { useEffect, useState } from 'react';
import { Kpi, LineChart, Slider, fmt, range } from '../components/ui';
import { load, save } from '../lib/storage';
import { breakEven, centerOfGravity, cplEvaluate, cplOptimum, factorRating, gravityCost, gravityIterate, multiCenterOfGravity, type GPoint } from '../lib/calc';

function useStored<T>(key: string, init: T): [T, (v: T) => void] {
  const [v, setV] = useState<T>(() => load(key, init));
  useEffect(() => save(key, v), [key, v]);
  return [v, setV];
}

// ---------- Generic scatter map ----------
function MapPlot(props: {
  pts: { x: number; y: number; w: number; label: string; color?: string }[];
  centres?: { x: number; y: number; label: string; color?: string }[];
  path?: { x: number; y: number }[];
  links?: [number, number][]; // point index -> centre index
}) {
  const W = 560, H = 380, m = 30;
  const xs = [...props.pts.map((p) => p.x), ...(props.centres ?? []).map((c) => c.x)];
  const ys = [...props.pts.map((p) => p.y), ...(props.centres ?? []).map((c) => c.y)];
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const pad = 0.08;
  const sx = (x: number) => m + ((x - x0) / (x1 - x0 || 1)) * (1 - 2 * pad) * (W - 2 * m) + pad * (W - 2 * m);
  const sy = (y: number) => H - m - (((y - y0) / (y1 - y0 || 1)) * (1 - 2 * pad) * (H - 2 * m) + pad * (H - 2 * m));
  const wMax = Math.max(...props.pts.map((p) => p.w), 1);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ background: '#fbfcfd', border: '1px solid var(--line)', borderRadius: 8 }}>
      {props.links?.map(([pi, ci], k) => {
        const p = props.pts[pi], c = props.centres![ci];
        return <line key={k} x1={sx(p.x)} y1={sy(p.y)} x2={sx(c.x)} y2={sy(c.y)} stroke="#c9d1dc" />;
      })}
      {!props.links &&
        props.centres?.map((c, ci) =>
          props.pts.map((p, pi) => <line key={`${ci}-${pi}`} x1={sx(p.x)} y1={sy(p.y)} x2={sx(c.x)} y2={sy(c.y)} stroke="#dfe4ea" />),
        )}
      {props.path && props.path.length > 1 && (
        <polyline fill="none" stroke="#d1762a" strokeWidth={1.5} strokeDasharray="3 3" points={props.path.map((p) => `${sx(p.x)},${sy(p.y)}`).join(' ')} />
      )}
      {props.pts.map((p, i) => (
        <g key={i}>
          <circle cx={sx(p.x)} cy={sy(p.y)} r={4 + 12 * Math.sqrt(p.w / wMax)} fill={p.color ?? '#1f5f8b'} fillOpacity={0.35} stroke={p.color ?? '#1f5f8b'} />
          <text x={sx(p.x) + 6} y={sy(p.y) - 6} fontSize="11">{p.label}</text>
        </g>
      ))}
      {props.centres?.map((c, i) => (
        <g key={i}>
          <rect x={sx(c.x) - 7} y={sy(c.y) - 7} width={14} height={14} fill={c.color ?? '#b23b3b'} transform={`rotate(45 ${sx(c.x)} ${sy(c.y)})`} />
          <text x={sx(c.x) + 10} y={sy(c.y) + 16} fontSize="12" fontWeight={700} fill={c.color ?? '#b23b3b'}>{c.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ---------- 4.2 Gravity model ----------
const SA: GPoint[] = [
  { name: 'Buffalo (S)', x: 700, y: 1200, D: 500, F: 0.9 },
  { name: 'Memphis (S)', x: 250, y: 600, D: 300, F: 0.95 },
  { name: 'St. Louis (S)', x: 225, y: 825, D: 700, F: 0.85 },
  { name: 'Atlanta', x: 600, y: 500, D: 225, F: 1.5 },
  { name: 'Boston', x: 1050, y: 1200, D: 150, F: 1.5 },
  { name: 'Jacksonville', x: 800, y: 300, D: 250, F: 1.5 },
  { name: 'Philadelphia', x: 925, y: 975, D: 175, F: 1.5 },
  { name: 'New York', x: 1000, y: 1080, D: 300, F: 1.5 },
];
export function Gravity() {
  const [pts, setPts] = useState(SA);
  const [step, setStep] = useState(0);
  const r = gravityIterate(pts);
  const shown = r.path.slice(0, Math.min(step + 1, r.path.length));
  const cur = shown[shown.length - 1];
  const upd = (i: number, k: keyof GPoint, v: number) => setPts(pts.map((p, j) => (j === i ? { ...p, [k]: v } : p)));
  return (
    <div>
      <div className="grid2">
        <MapPlot pts={pts.map((p) => ({ x: p.x, y: p.y, w: p.D * p.F, label: p.name, color: p.name.includes('(S)') ? '#2a7d4f' : '#1f5f8b' }))} centres={[{ x: cur.x, y: cur.y, label: `(${fmt(cur.x)}, ${fmt(cur.y)})` }]} path={shown} />
        <div>
          <Kpi items={[{ l: 'Iteration', n: `${shown.length - 1} / ${r.path.length - 1}` }, { l: 'x, y', n: `${fmt(cur.x)}, ${fmt(cur.y)}` }, { l: 'TC (5.5)', n: fmt(cur.tc) }]} />
          <div className="row">
            <button className="btn" onClick={() => setStep((s) => Math.min(s + 1, r.path.length - 1))}>Næste iteration</button>
            <button className="btn ghost" onClick={() => setStep(r.path.length - 1)}>Til optimum</button>
            <button className="btn ghost" onClick={() => setStep(0)}>Start</button>
            <button className="btn ghost" onClick={() => { setPts(SA); setStep(0); }}>Nulstil data</button>
          </div>
          <p className="phase">Startpunktet (iteration 0) er det vægtede gennemsnit Σ D·F·x / Σ D·F. Hver iteration bruger formel 5.6 med afstandene fra det forrige punkt. Grøn = kilder, blå = markeder. Cirklens størrelse viser D·F.</p>
        </div>
      </div>
      <table>
        <thead><tr><th>Punkt</th><th>x</th><th>y</th><th>D (ton)</th><th>F (rate)</th><th className="num">d_n</th><th className="num">D·F/d (vægt)</th></tr></thead>
        <tbody>
          {pts.map((p, i) => {
            const d = Math.hypot(cur.x - p.x, cur.y - p.y);
            return (
              <tr key={i}>
                <td>{p.name}</td>
                {(['x', 'y', 'D', 'F'] as const).map((k) => (
                  <td key={k}><input type="number" step="any" value={p[k]} onChange={(e) => { upd(i, k, Number(e.target.value)); setStep(0); }} /></td>
                ))}
                <td className="num">{fmt(d)}</td>
                <td className="num">{fmt((p.D * p.F) / d, 2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="phase">Koordinater og mængder er cirka som i bogens Steel Appliances-eksempel. Tjek dem mod din udgave. Prøv at flytte et marked eller øge D eller F, og se placeringen ændre sig. TC ved fx (500, 500): {fmt(gravityCost(pts, 500, 500))}.</p>
    </div>
  );
}

// ---------- 4.4 CPL ----------
const PLANTS = ['Nordamerika', 'Sydamerika', 'Europa', 'Asien'];
const MARKETS = ['N-Am', 'S-Am', 'Europa', 'Asien'];
export function Cpl() {
  const [f, setF] = useState([600, 450, 650, 500]);
  const [K, setK] = useState([20, 15, 20, 20]);
  const [D] = useState([12, 8, 14, 16]);
  const [c] = useState([
    [81, 92, 101, 130],
    [117, 77, 108, 98],
    [102, 105, 95, 119],
    [115, 125, 90, 59],
  ]);
  const [open, setOpen] = useState([true, true, true, true]);
  const r = cplEvaluate(open, f, K, D, c);
  const opt = cplOptimum(f, K, D, c);
  return (
    <div>
      <p>Lille eksempel (inspireret af SunOil, tallene er opdigtede): Efterspørgsel i mio. enheder, faste omkostninger i mio. $, variable omkostninger i $ pr. enhed (produktion + transport + told). Klik for at åbne og lukke fabrikker.</p>
      <table>
        <thead><tr><th>Fabrik</th><th>Åben (y)</th><th>Fast f</th><th>Kap. K</th>{MARKETS.map((m) => <th key={m} className="num">c → {m}</th>)}<th className="num">Produceret</th></tr></thead>
        <tbody>
          {PLANTS.map((p, i) => (
            <tr key={p}>
              <td>{p}</td>
              <td><input type="checkbox" checked={open[i]} onChange={() => setOpen(open.map((o, j) => (j === i ? !o : o)))} /></td>
              <td><input type="number" value={f[i]} onChange={(e) => setF(f.map((x, j) => (j === i ? Number(e.target.value) : x)))} /></td>
              <td><input type="number" value={K[i]} onChange={(e) => setK(K.map((x, j) => (j === i ? Number(e.target.value) : x)))} /></td>
              {c[i].map((v, j) => (
                <td key={j} className="num" style={{ background: r && r.x[i][j] > 0 ? '#e5f4ec' : undefined }}>
                  {v}{r && r.x[i][j] > 0 ? ` (${fmt(r.x[i][j], 1)})` : ''}
                </td>
              ))}
              <td className="num">{r ? fmt(r.x[i].reduce((a, b) => a + b, 0), 1) : '–'}</td>
            </tr>
          ))}
          <tr><td>Efterspørgsel D</td><td></td><td></td><td></td>{D.map((d, j) => <td key={j} className="num">{d}</td>)}<td></td></tr>
        </tbody>
      </table>
      {r ? (
        <Kpi items={[{ l: 'Faste omk. Σf·y', n: fmt(r.fixed) }, { l: 'Variable Σc·x', n: fmt(r.variable) }, { l: 'Total', n: fmt(r.total), tone: opt && Math.abs(opt.total - r.total) < 1e-6 ? 'good' : undefined }, { l: 'Optimum (alle kombinationer)', n: opt ? `${fmt(opt.total)}: ${PLANTS.filter((_, i) => opt.open[i]).join(', ')}` : '–' }]} />
      ) : (
        <div className="warn">Ikke nok kapacitet. Σ K·y &lt; Σ D, så modellen har ingen løsning (infeasible).</div>
      )}
      <button className="btn ghost" onClick={() => opt && setOpen(opt.open)}>Vis optimal løsning</button>
      <p className="phase">Givet hvilke fabrikker der er åbne, findes den billigste allokering x_ij (et transportproblem). Optimum findes ved at prøve alle 2⁴ − 1 kombinationer af y. En MIP-solver gør det smartere med branch-and-bound.</p>
    </div>
  );
}

// ---------- 5.1 Break-even ----------
export function BreakEven() {
  const [sites, setSites] = useState([
    { name: 'Akron', F: 30000, v: 75 },
    { name: 'Bowling Green', F: 60000, v: 45 },
    { name: 'Chicago', F: 110000, v: 25 },
  ]);
  const [Q, setQ] = useState(2000);
  const r = breakEven(sites, Q);
  const cols = ['var(--s1)', 'var(--s2)', 'var(--s3)'];
  const xs = range(0, 4000, 40);
  return (
    <div>
      <div className="grid2">
        <div>
          <table>
            <thead><tr><th>Lokalitet</th><th>Fast F</th><th>Variabel v</th><th className="num">TC ved Q</th></tr></thead>
            <tbody>
              {sites.map((s, i) => (
                <tr key={i} className={r.best.name === s.name ? 'best' : ''}>
                  <td>{s.name}</td>
                  <td><input type="number" value={s.F} onChange={(e) => setSites(sites.map((x, j) => (j === i ? { ...x, F: Number(e.target.value) } : x)))} /></td>
                  <td><input type="number" value={s.v} onChange={(e) => setSites(sites.map((x, j) => (j === i ? { ...x, v: Number(e.target.value) } : x)))} /></td>
                  <td className="num">{fmt(r.costs[i].TC)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Slider label="Forventet volumen Q" value={Q} min={0} max={4000} step={50} onChange={setQ} />
          <p>Skæringspunkter: {r.crossings.map((c) => `${c.a} = ${c.b} ved Q = ${fmt(c.q)}`).join(' · ')}</p>
          <p>Profit ved pris $120: {fmt(120 * Q - r.best.TC)} (i {r.best.name})</p>
        </div>
        <LineChart
          series={sites.map((s, i) => ({ name: s.name, color: cols[i], points: xs.map((x) => [x, s.F + s.v * x] as [number, number]) }))}
          markers={[{ x: Q, label: 'Q' }, ...r.crossings.filter((c) => c.q < 4000).map((c) => ({ x: c.q, color: '#9aa3b2' }))]}
          xLabel="Volumen (enheder/år)"
          yLabel="Totalomkostning"
          fmtY={(v) => fmt(v / 1000) + 'k'}
        />
      </div>
    </div>
  );
}

// ---------- 5.2 Factor rating ----------
export function FactorRating() {
  const [factors, setFactors] = useState([
    { name: 'Arbejdskraft (tilgængelighed, holdning)', w: 0.25, s: [70, 60] },
    { name: 'Personer pr. bil', w: 0.05, s: [50, 60] },
    { name: 'Indkomst pr. indbygger', w: 0.1, s: [85, 80] },
    { name: 'Skattestruktur', w: 0.39, s: [75, 70] },
    { name: 'Uddannelse og sundhed', w: 0.21, s: [60, 70] },
  ]);
  const sites = ['Frankrig', 'Danmark'];
  const wsum = factors.reduce((a, f) => a + f.w, 0);
  const scores = factorRating(factors.map((f) => f.w / wsum), sites.map((_, k) => factors.map((f) => f.s[k])));
  const best = scores.indexOf(Math.max(...scores));
  return (
    <div>
      <table>
        <thead><tr><th>Faktor</th><th>Vægt</th>{sites.map((s) => <th key={s}>{s}</th>)}{sites.map((s) => <th key={s} className="num">{s} vægtet</th>)}</tr></thead>
        <tbody>
          {factors.map((f, i) => (
            <tr key={i}>
              <td>{f.name}</td>
              <td><input type="number" step="0.01" value={f.w} onChange={(e) => setFactors(factors.map((x, j) => (j === i ? { ...x, w: Number(e.target.value) } : x)))} /></td>
              {f.s.map((v, k) => (
                <td key={k}><input type="number" value={v} onChange={(e) => setFactors(factors.map((x, j) => (j === i ? { ...x, s: x.s.map((y, l) => (l === k ? Number(e.target.value) : y)) } : x)))} /></td>
              ))}
              {f.s.map((v, k) => <td key={k} className="num">{fmt((v * f.w) / wsum, 2)}</td>)}
            </tr>
          ))}
          <tr className="best"><td>Sum</td><td>{fmt(wsum, 2)}</td><td></td><td></td>{scores.map((s, k) => <td key={k} className="num">{fmt(s, 2)}</td>)}</tr>
        </tbody>
      </table>
      {Math.abs(wsum - 1) > 1e-6 && <div className="warn">Vægtene summerer til {fmt(wsum, 2)}. De normaliseres automatisk til 1.</div>}
      <p>Anbefaling: <b>{sites[best]}</b> (forskel {fmt(Math.abs(scores[0] - scores[1]), 2)} point). Prøv at flytte vægt fra skat til uddannelse og sundhed, så Danmark vinder.</p>
    </div>
  );
}

// ---------- 5.3 / 12.1 Center of gravity ----------
interface CPoint { name: string; x: number; y: number; Q: number }
const QUAIN: CPoint[] = [
  { name: 'Chicago', x: 30, y: 120, Q: 2000 },
  { name: 'Pittsburgh', x: 90, y: 110, Q: 1000 },
  { name: 'New York', x: 130, y: 130, Q: 1000 },
  { name: 'Atlanta', x: 60, y: 40, Q: 2000 },
];
function CogEditor({ pts, setPts, k = 1 }: { pts: CPoint[]; setPts: (p: CPoint[]) => void; k?: number }) {
  const valid = pts.filter((p) => p.Q > 0);
  const single = valid.length ? centerOfGravity(valid) : { x: 0, y: 0 };
  const multi = k > 1 && valid.length >= k ? multiCenterOfGravity(valid, k) : null;
  const centres = multi ? multi.centres.map((c, i) => ({ ...c, label: `DW${i + 1} (${fmt(c.x, 1)}; ${fmt(c.y, 1)})` })) : [{ ...single, label: `(${fmt(single.x, 1)}; ${fmt(single.y, 1)})` }];
  const sumQ = valid.reduce((a, p) => a + p.Q, 0);
  return (
    <div>
      <div className="grid2">
        {valid.length ? (
          <MapPlot pts={valid.map((p) => ({ x: p.x, y: p.y, w: p.Q, label: p.name }))} centres={centres} links={multi ? multi.assign.map((a, i) => [i, a] as [number, number]) : undefined} />
        ) : (
          <div className="warn">Tilføj punkter med Q &gt; 0.</div>
        )}
        <div>
          <table>
            <thead><tr><th>Navn</th><th>x</th><th>y</th><th>Q</th><th></th></tr></thead>
            <tbody>
              {pts.map((p, i) => (
                <tr key={i}>
                  <td><input style={{ width: 110 }} value={p.name} onChange={(e) => setPts(pts.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)))} /></td>
                  {(['x', 'y', 'Q'] as const).map((key) => (
                    <td key={key}><input type="number" step="any" value={p[key]} onChange={(e) => setPts(pts.map((x, j) => (j === i ? { ...x, [key]: Number(e.target.value) } : x)))} /></td>
                  ))}
                  <td><button className="btn ghost" onClick={() => setPts(pts.filter((_, j) => j !== i))}>×</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn ghost" onClick={() => setPts([...pts, { name: `Punkt ${pts.length + 1}`, x: 0, y: 0, Q: 100 }])}>+ Tilføj punkt</button>
          {!multi && valid.length > 0 && (
            <div className="md" style={{ marginTop: 10, fontSize: '.88rem' }}>
              <div>C<sub>x</sub> = Σx·Q / ΣQ = {fmt(valid.reduce((a, p) => a + p.x * p.Q, 0))} / {fmt(sumQ)} = <b>{fmt(single.x, 2)}</b></div>
              <div>C<sub>y</sub> = Σy·Q / ΣQ = {fmt(valid.reduce((a, p) => a + p.y * p.Q, 0))} / {fmt(sumQ)} = <b>{fmt(single.y, 2)}</b></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export function Cog() {
  const [pts, setPts] = useState(QUAIN);
  return (
    <div>
      <CogEditor pts={pts} setPts={setPts} />
      <button className="btn ghost" onClick={() => setPts(QUAIN)}>Nulstil til Quain-eksemplet</button>
    </div>
  );
}
export function CogCase() {
  const [pts, setPts] = useStored<CPoint[]>('faulks-cog', [
    { name: 'Marked A', x: 10, y: 50, Q: 100 },
    { name: 'Marked B', x: 40, y: 60, Q: 200 },
    { name: 'Marked C', x: 30, y: 20, Q: 150 },
  ]);
  return (
    <div>
      <div className="warn">Indsæt Faulkswagon-casens markeder (koordinater og efterspørgsel) fra Excel-filen. Data gemmes i din browser.</div>
      <CogEditor pts={pts} setPts={setPts} />
    </div>
  );
}
export function MultiCog() {
  const [pts, setPts] = useStored<CPoint[]>('faulks-cog', QUAIN);
  const [k, setK] = useState(2);
  return (
    <div>
      <div className="warn">Gruppér markeder i k regioner (de nærmeste markeder tildeles samme DW) og find tyngdepunktet for hver. Bruger de samme data som 12.1. Indsæt casens tal.</div>
      <Slider label="Antal DW'er (k)" value={k} min={1} max={Math.max(1, Math.min(6, pts.length))} onChange={setK} />
      <CogEditor pts={pts} setPts={setPts} k={k} />
    </div>
  );
}
