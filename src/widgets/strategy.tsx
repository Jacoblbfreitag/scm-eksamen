import { useState } from 'react';
import { Kpi, LineChart, Slider, fmt, pct, range } from '../components/ui';
import { dupont, facilityCurves, normInv } from '../lib/calc';

// ---------- 1.1 Strategic fit ----------
const NEEDS = [
  { k: 'qty', label: 'Udsving i ordrestørrelse' },
  { k: 'time', label: 'Krav om kort responstid' },
  { k: 'variety', label: 'Antal varianter' },
  { k: 'channels', label: 'Antal salgskanaler' },
  { k: 'innov', label: 'Innovationstakt' },
  { k: 'service', label: 'Ønsket service level' },
  { k: 'supply', label: 'Supply uncertainty' },
];
const PRESETS: Record<string, { needs: number[]; resp: number }> = {
  'Salt i supermarked': { needs: [1, 2, 1, 1, 0, 5, 1], resp: 2 },
  'Zara-modetøj': { needs: [6, 8, 8, 6, 10, 7, 4], resp: 9 },
  'Ny smartphone, effektiv kæde (misfit)': { needs: [7, 7, 6, 7, 9, 8, 7], resp: 2 },
  'Benzin med luksuslevering (misfit)': { needs: [2, 2, 1, 2, 0, 4, 2], resp: 9 },
};
export function StrategicFit() {
  const [needs, setNeeds] = useState(PRESETS['Salt i supermarked'].needs);
  const [resp, setResp] = useState(2);
  const iu = needs.reduce((a, b) => a + b, 0) / (needs.length * 10);
  const r = resp / 10;
  const gap = r - iu;
  const verdict = Math.abs(gap) < 0.15 ? 'I zonen: strategic fit' : gap > 0 ? 'Over zonen: for responsiv og dyr' : 'Under zonen: for effektiv, så der kommer stockouts og markdowns';
  const W = 420, H = 320, m = 40;
  const sx = (v: number) => m + v * (W - 2 * m);
  const sy = (v: number) => H - m - v * (H - 2 * m);
  return (
    <div>
      <div className="row">
        {Object.keys(PRESETS).map((p) => (
          <button key={p} className="btn ghost" onClick={() => { setNeeds(PRESETS[p].needs); setResp(PRESETS[p].resp); }}>
            {p}
          </button>
        ))}
      </div>
      <div className="grid2" style={{ marginTop: 12 }}>
        <div>
          <b>Kundebehov og forsyning (0 = lav, 10 = høj)</b>
          {NEEDS.map((n, i) => (
            <Slider key={n.k} label={n.label} value={needs[i]} min={0} max={10} onChange={(v) => setNeeds(needs.map((x, j) => (j === i ? v : x)))} />
          ))}
          <hr />
          <Slider label={<b>Kædens responsivitet</b>} value={resp} min={0} max={10} onChange={setResp} />
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%">
          <polygon points={`${sx(0)},${sy(0.15)} ${sx(0)},${sy(0)} ${sx(0.15)},${sy(0)} ${sx(1)},${sy(0.85)} ${sx(1)},${sy(1)} ${sx(0.85)},${sy(1)}`} fill="#e5f4ec" />
          <line x1={sx(0)} y1={sy(0)} x2={sx(1)} y2={sy(1)} stroke="#2a7d4f" strokeDasharray="5 4" />
          <line x1={m} y1={H - m} x2={W - m} y2={H - m} stroke="#5b6577" />
          <line x1={m} y1={H - m} x2={m} y2={m} stroke="#5b6577" />
          <text x={W / 2} y={H - 10} fontSize="12" textAnchor="middle">Implied uncertainty: sikker → usikker</text>
          <text x={14} y={H / 2} fontSize="12" textAnchor="middle" transform={`rotate(-90 14 ${H / 2})`}>Responsivitet: effektiv → responsiv</text>
          <text x={sx(0.62)} y={sy(0.5)} fontSize="12" fill="#2a7d4f">Zone of strategic fit</text>
          <circle cx={sx(iu)} cy={sy(r)} r={8} fill={Math.abs(gap) < 0.15 ? '#2a7d4f' : '#b23b3b'} />
        </svg>
      </div>
      <Kpi items={[{ l: 'Implied uncertainty', n: pct(iu, 0) }, { l: 'Responsivitet', n: pct(r, 0) }, { l: 'Vurdering', n: verdict, tone: Math.abs(gap) < 0.15 ? 'good' : 'bad' }]} />
    </div>
  );
}

// ---------- 1.2 Allocation of uncertainty ----------
const SCEN = [
  { name: 'I: Detailhandleren absorberer', resp: [0, 0, 1], why: 'Stort lager i butikkerne. Producent og leverandør ser en jævn efterspørgsel og kan køre effektivt.' },
  { name: 'II: Producenten absorberer', resp: [0, 1, 0], why: 'Lille butikslager. Producenten har fleksibel kapacitet og hurtig omstilling (fx Zara).' },
  { name: 'III: Leverandøren absorberer', resp: [1, 0, 0], why: 'Leverandøren holder komponentlager eller fleksibel kapacitet. Producenten kører lean (fx vendor hubs ved Dell).' },
];
export function Allocation() {
  const [s, setS] = useState(0);
  const stages = ['Leverandør', 'Producent', 'Detail'];
  return (
    <div>
      <div className="row">
        {SCEN.map((x, i) => (
          <button key={i} className={'btn' + (i === s ? '' : ' ghost')} onClick={() => setS(i)}>{x.name}</button>
        ))}
      </div>
      {SCEN.map((x, i) => (
        <div key={i} style={{ display: 'flex', gap: 4, margin: '10px 0', opacity: i === s ? 1 : 0.35 }}>
          {stages.map((st, j) => (
            <div key={j} style={{ flex: 1, padding: '10px 8px', borderRadius: 6, textAlign: 'center', fontSize: '.85rem', color: x.resp[j] ? '#fff' : '#1d2433', background: x.resp[j] ? '#d1762a' : '#e6f0f7' }}>
              {st}<br />
              <b>{x.resp[j] ? 'Responsiv' : 'Effektiv'}</b>
            </div>
          ))}
        </div>
      ))}
      <p>{SCEN[s].why}</p>
      <p className="phase">Kunden oplever den <b>samme</b> samlede responsivitet i alle tre scenarier. Det, der varierer, er <i>hvem</i> der betaler for bufferen (lager, kapacitet eller tid).</p>
    </div>
  );
}

// ---------- 2.1 / 2.2 DuPont ----------
function DuPontTable({ before, after }: { before: ReturnType<typeof dupont>; after: ReturnType<typeof dupont> }) {
  const rows: [string, (d: ReturnType<typeof dupont>) => string][] = [
    ['Net income', (d) => fmt(d.netIncome, 1)],
    ['Total assets', (d) => fmt(d.totalAssets, 0)],
    ['Profit margin (NI/Sales)', (d) => pct(d.margin)],
    ['Asset turnover (Sales/Assets)', (d) => fmt(d.turnover, 2)],
    ['Inventory turns (COGS/Inv)', (d) => fmt(d.inventoryTurns, 1)],
    ['ROA', (d) => pct(d.roa)],
  ];
  return (
    <table>
      <thead><tr><th></th><th className="num">Før</th><th className="num">Efter</th></tr></thead>
      <tbody>
        {rows.map(([l, f]) => (
          <tr key={l} className={l === 'ROA' ? (after.roa > before.roa ? 'best' : '') : ''}>
            <td>{l}</td><td className="num">{f(before)}</td><td className="num">{f(after)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const BASE = { sales: 1000, cogs: 600, sga: 250, taxRate: 0.25, inventory: 200, receivables: 150, ppe: 400, otherAssets: 50 };

export function DuPontChina() {
  const [labour, setLabour] = useState(80);
  const [transport, setTransport] = useState(30);
  const [ppe, setPpe] = useState(150);
  const [pipeline, setPipeline] = useState(40);
  const [extra, setExtra] = useState(0);
  const [salesUp, setSalesUp] = useState(0);
  const before = dupont(BASE);
  const s = BASE.sales * (1 + salesUp / 100);
  const after = dupont({
    ...BASE,
    sales: s,
    cogs: (BASE.cogs - labour) * (s / BASE.sales),
    sga: BASE.sga - transport + extra,
    ppe: BASE.ppe + ppe,
    inventory: BASE.inventory - pipeline,
  });
  return (
    <div className="grid2">
      <div>
        <Slider label="Lavere COGS (løn)" value={labour} min={0} max={150} onChange={setLabour} />
        <Slider label="Sparet transport" value={transport} min={-50} max={80} onChange={setTransport} />
        <Slider label="Ny PP&E (fabrik)" value={ppe} min={0} max={400} onChange={setPpe} />
        <Slider label="Mindre pipeline-lager" value={pipeline} min={-50} max={100} onChange={setPipeline} />
        <Slider label="Ekstra overhead (kvalitet, ledelse)" value={extra} min={0} max={100} onChange={setExtra} />
        <Slider label="Salgsvækst i Asien (%)" value={salesUp} min={0} max={20} onChange={setSalesUp} />
        <p className="phase">Udgangspunkt: Sales 1000, COGS 600, SG&A 250, skat 25 %, assets 800 (lager 200, PP&E 400).</p>
      </div>
      <div>
        <DuPontTable before={before} after={after} />
        <p>{after.roa > before.roa ? 'ROA stiger: Gevinsten på marginen er større end faldet i asset turnover.' : 'ROA falder: De ekstra aktiver (og omkostninger) vejer tungere end besparelsen.'}</p>
      </div>
    </div>
  );
}

export function DuPontSafety() {
  const [ss, setSs] = useState(80);
  const [factor, setFactor] = useState(2);
  const [h, setH] = useState(0.25);
  const [lift, setLift] = useState(3);
  const [cm, setCm] = useState(0.4);
  const base = { sales: 1000, cogs: 600, sga: 300, taxRate: 0, inventory: 200, receivables: 150, ppe: 400, otherAssets: 50 };
  const before = dupont(base);
  const addInv = ss * (factor - 1);
  const s = base.sales * (1 + lift / 100);
  const after = dupont({ ...base, sales: s, cogs: base.cogs * (s / base.sales), sga: base.sga + h * addInv - (s - base.sales) * (cm - 0.4) , inventory: base.inventory + addInv });
  const z0 = 1.28;
  const z1 = z0 * factor;
  return (
    <div className="grid2">
      <div>
        <Slider label="Nuværende safety stock" value={ss} min={10} max={150} onChange={setSs} />
        <Slider label="Faktor på ss" value={factor} min={1} max={3} step={0.1} onChange={setFactor} format={(v) => '×' + fmt(v, 1)} />
        <Slider label="Holding cost h" value={h} min={0.1} max={0.4} step={0.01} onChange={setH} format={(v) => pct(v, 0)} />
        <Slider label="Salgsløft fra færre stockouts (%)" value={lift} min={0} max={10} step={0.5} onChange={setLift} format={(v) => fmt(v, 1) + ' %'} />
        <Slider label="Dækningsbidrag pr. salgskrone" value={cm} min={0.4} max={0.8} step={0.01} onChange={setCm} format={(v) => pct(v, 0)} />
        <p className="phase">Service: z går fra {fmt(z0, 2)} (CSL ≈ 90 %) til {fmt(z1, 2)} (CSL ≈ {pct(cdf(z1), 1)}).</p>
      </div>
      <div>
        <DuPontTable before={before} after={after} />
        <p className="phase">For enkelhedens skyld er skatten sat til 0 her. Udgangspunktet er NI 100, assets 800 og ROA 12,5 %.</p>
      </div>
    </div>
  );
}
function cdf(z: number) {
  // inverse of normInv via bisection
  let lo = 0, hi = 1;
  for (let i = 0; i < 50; i++) { const mid = (lo + hi) / 2; if (normInv(mid) < z) lo = mid; else hi = mid; }
  return lo;
}

export function ServiceCurve() {
  const pts = range(0.5, 0.999, 60).map((c) => [c * 100, normInv(c)] as [number, number]);
  return (
    <div>
      <p>Hvor mange standardafvigelser safety stock (z) kræver hvert CSL? Kurven bliver stejlere og stejlere, så de sidste procentpoint er dyre.</p>
      <LineChart series={[{ name: 'z = ss/σL', color: 'var(--s1)', points: pts }]} xLabel="CSL (%)" yLabel="z" xMin={50} xMax={100} fmtY={(v) => fmt(v, 1)} />
    </div>
  );
}

// ---------- 2.3 Drivers ----------
const DRIVERS = ['Facilities', 'Inventory', 'Transportation', 'Information', 'Sourcing', 'Pricing'];
const CHOICES: Record<string, [string, string]> = {
  Facilities: ['Få store centrale faciliteter, høj udnyttelse', 'Mange faciliteter tæt på kunden, ledig kapacitet'],
  Inventory: ['Lavt lager, høje inventory turns', 'Højt lager og høj tilgængelighed'],
  Transportation: ['Store forsendelser, langsom og billig transportform (TL, skib)', 'Små, hyppige forsendelser, hurtig transportform (fly, pakke)'],
  Information: ['Deling af data for at fjerne spild og lager', 'Realtidsdata til hurtig reaktion på efterspørgsel'],
  Sourcing: ['Leverandører med laveste omkostning', 'Fleksible, hurtige leverandører tæt på'],
  Pricing: ['EDLP med jævn efterspørgsel', 'Differentieret pris, betaling for hastighed'],
};
const COMPANIES: Record<string, number[]> = {
  Walmart: [0, 0, 0, 0, 0, 0],
  Zara: [1, 0, 1, 1, 1, 1],
  'Amazon Prime': [1, 1, 1, 1, 0, 1],
  IKEA: [0, 0, 0, 0, 0, 0],
};
export function Drivers() {
  const [strategy, setStrategy] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const share = strategy.reduce((a, b) => a + b, 0) / 6;
  const mixed = share > 0 && share < 1;
  return (
    <div>
      <div className="row">
        {Object.keys(COMPANIES).map((c) => (
          <button key={c} className="btn ghost" onClick={() => setStrategy(COMPANIES[c])}>{c}</button>
        ))}
      </div>
      <table>
        <thead><tr><th>Driver</th><th>Effektiv</th><th>Responsiv</th></tr></thead>
        <tbody>
          {DRIVERS.map((d, i) => (
            <tr key={d}>
              <td><b>{d}</b><br /><span className="phase">{i < 3 ? 'logistisk' : 'tværfunktionel'}</span></td>
              {[0, 1].map((k) => (
                <td key={k} onClick={() => setStrategy(strategy.map((x, j) => (j === i ? k : x)))} style={{ cursor: 'pointer', background: strategy[i] === k ? (k ? '#fbe9db' : '#e6f0f7') : undefined, fontWeight: strategy[i] === k ? 600 : 400 }}>
                  {CHOICES[d][k]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>{mixed ? 'Blandet profil: Tjek om driverne trækker i samme retning. Det er fint, hvis det er bevidst (fx Amazon: responsiv levering, men centraliseret sourcing).' : share === 0 ? 'Rent effektiv profil, som passer til lav implied uncertainty (fx Walmart).' : 'Rent responsiv profil, som passer til høj implied uncertainty (fx mode).'}</p>
    </div>
  );
}

// ---------- 3.1 / 3.2 Network designs ----------
const DESIGNS = ['Retail storage, pickup', 'Mfg storage, direct shipping', 'Mfg + in-transit merge', 'Distributor + carrier', 'Distributor + last mile', 'Mfg/dist storage, pickup'];
const FACTORS: [string, number[]][] = [
  ['Response time', [1, 4, 4, 3, 2, 4]],
  ['Product variety', [4, 1, 1, 2, 3, 1]],
  ['Product availability', [4, 1, 1, 2, 3, 1]],
  ['Customer experience', [3, 4, 3, 2, 1, 5]],
  ['Inventory cost', [4, 1, 1, 2, 3, 1]],
  ['Transportation cost', [1, 4, 3, 2, 5, 1]],
  ['Facility & handling', [6, 1, 2, 3, 4, 5]],
];
export function NetworkDesigns() {
  const [w, setW] = useState([3, 2, 2, 2, 2, 2, 2]);
  const scores = DESIGNS.map((_, d) => FACTORS.reduce((a, [, r], f) => a + w[f] * (7 - r[d]), 0));
  const best = scores.indexOf(Math.max(...scores));
  return (
    <div>
      <p>Vægt hver faktor efter dit produkt og dine kunder (0 = ligegyldig, 5 = afgørende). Rangeringerne (1 = bedst) er cirka som i Chopra og Meindls tabel. <b>Tjek dem mod bogen.</b></p>
      <div className="row">
        <button className="btn ghost" onClick={() => setW([0, 5, 5, 1, 5, 1, 3])}>Lav efterspørgsel, høj værdi (fx specialkomponent)</button>
        <button className="btn ghost" onClick={() => setW([5, 1, 2, 5, 1, 1, 1])}>Dagligvarer til travle kunder</button>
        <button className="btn ghost" onClick={() => setW([2, 1, 2, 0, 3, 5, 4])}>Priskunde</button>
      </div>
      <table>
        <thead>
          <tr><th>Faktor</th><th>Vægt</th>{DESIGNS.map((d) => <th key={d} style={{ fontSize: '.75rem' }}>{d}</th>)}</tr>
        </thead>
        <tbody>
          {FACTORS.map(([f, r], i) => (
            <tr key={f}>
              <td>{f}</td>
              <td><input type="range" min={0} max={5} value={w[i]} onChange={(e) => setW(w.map((x, j) => (j === i ? Number(e.target.value) : x)))} /></td>
              {r.map((v, d) => <td key={d} className="num" style={{ background: v <= 2 ? '#e5f4ec' : v >= 5 ? '#f8e7e7' : undefined }}>{v}</td>)}
            </tr>
          ))}
          <tr className="best">
            <td>Score</td><td></td>
            {scores.map((s, d) => <td key={d} className="num" style={{ outline: d === best ? '2px solid var(--good)' : undefined }}>{s}</td>)}
          </tr>
        </tbody>
      </table>
      <p>Bedste match: <b>{DESIGNS[best]}</b>.</p>
    </div>
  );
}

// ---------- 3.3 Number of facilities ----------
export function Facilities() {
  const [n, setN] = useState(4);
  const xs = range(1, 20, 38);
  const c = xs.map((x) => ({ x, ...facilityCurves(x) }));
  const tot = c.map((p) => p.total);
  const optN = c[tot.indexOf(Math.min(...tot))].x;
  const cur = facilityCurves(n);
  return (
    <div>
      <Slider label="Antal faciliteter" value={n} min={1} max={20} onChange={setN} />
      <div className="grid2">
        <LineChart
          series={[
            { name: 'Lager', color: 'var(--s1)', points: c.map((p) => [p.x, p.inventory]) },
            { name: 'Transport', color: 'var(--s2)', points: c.map((p) => [p.x, p.transport]) },
            { name: 'Faciliteter', color: 'var(--s3)', points: c.map((p) => [p.x, p.facility]) },
            { name: 'Total', color: 'var(--ink)', points: c.map((p) => [p.x, p.total]) },
          ]}
          markers={[{ x: n, label: 'valgt' }, { x: optN, label: 'min. total', color: 'var(--good)' }]}
          xLabel="Antal faciliteter"
          yLabel="Omkostning (illustrativ)"
          height={280}
        />
        <LineChart series={[{ name: 'Responstid', color: 'var(--s4)', points: c.map((p) => [p.x, p.response]) }]} markers={[{ x: n }]} xLabel="Antal faciliteter" yLabel="Timer" height={280} />
      </div>
      <Kpi items={[{ l: 'Lager (√n)', n: fmt(cur.inventory) }, { l: 'Transport', n: fmt(cur.transport) }, { l: 'Faciliteter', n: fmt(cur.facility) }, { l: 'Total', n: fmt(cur.total) }, { l: 'Responstid', n: fmt(cur.response, 1) + ' t' }]} />
      <p className="phase">Kurverne er illustrative: lager ∝ √n (square-root law), facility ∝ n, outbound ∝ 1/√n, inbound stiger med n. Formen er det vigtige.</p>
    </div>
  );
}
