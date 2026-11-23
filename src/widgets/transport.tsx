import { useMemo, useState } from 'react';
import { LineChart, Num, Slider, fmt, pct, range } from '../components/ui';
import { allocCost, bullwhip, northWest, steppingStoneStep, type Alloc } from '../lib/calc';

// ---------- 9.1 Milk runs ----------
export function MilkRun() {
  const [n, setN] = useState(4);
  const [d, setD] = useState(1000);
  const [cap, setCap] = useState(4000);
  const [truck, setTruck] = useState(1000);
  const [stop, setStop] = useState(100);
  const [value, setValue] = useState(100);
  const [h, setH] = useState(0.25);
  const hw = (value * h) / 52;
  // A: direct, full trucks
  const weeksFull = Math.max(1, cap / d);
  const A = { transport: (n * (truck + stop)) / weeksFull, inv: n * ((d * weeksFull) / 2) * hw };
  // B: direct, weekly (partially full)
  const trucksPerStore = Math.ceil(d / cap);
  const B = { transport: n * trucksPerStore * (truck + stop), inv: n * (d / 2) * hw };
  // C: milk run weekly
  const routes = Math.ceil((n * d) / cap);
  const C = { transport: routes * truck + n * stop, inv: n * (d / 2) * hw };
  const rows = [
    { name: `Direct, fulde biler (hver ${fmt(weeksFull, 1)}. uge)`, ...A },
    { name: 'Direct, ugentlig (delvist fyldte biler)', ...B },
    { name: `Milk run ugentlig (${routes} rute${routes > 1 ? 'r' : ''})`, ...C },
  ];
  const best = rows.reduce((b, r, i) => (r.transport + r.inv < rows[b].transport + rows[b].inv ? i : b), 0);
  return (
    <div>
      <div className="row">
        <Num label="Butikker" value={n} onChange={setN} />
        <Num label="Efterspørgsel/uge pr. butik" value={d} onChange={setD} />
        <Num label="Lastbilkapacitet" value={cap} onChange={setCap} />
        <Num label="Pris pr. tur" value={truck} onChange={setTruck} />
        <Num label="Pris pr. stop" value={stop} onChange={setStop} />
        <Num label="Varens værdi" value={value} onChange={setValue} />
        <Num label="h (år)" value={h} step={0.01} onChange={setH} />
      </div>
      <table>
        <thead><tr><th>Design</th><th className="num">Transport/uge</th><th className="num">Cycle inventory/uge</th><th className="num">I alt/uge</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i === best ? 'best' : ''}>
              <td>{r.name}</td><td className="num">{fmt(r.transport)}</td><td className="num">{fmt(r.inv)}</td><td className="num">{fmt(r.transport + r.inv)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="phase">Illustrativt eksempel med samme logik som kap. 14 (ikke bogens tal for Ex 14-1). Prøv at sætte efterspørgslen pr. butik til 4.000. Så er direct shipment med fulde biler bedst.</p>
    </div>
  );
}

// ---------- 9.2 Stepping stone ----------
const COST = [
  [5, 4, 3],
  [8, 4, 3],
  [9, 7, 5],
];
const SUP = [100, 300, 300];
const DEM = [300, 200, 200];
const RN = ['Des Moines', 'Evansville', 'Fort Lauderdale'];
const CN = ['Albuquerque', 'Boston', 'Cleveland'];
export function SteppingStone() {
  const history = useMemo(() => {
    const h: { A: Alloc; info: ReturnType<typeof steppingStoneStep> | null }[] = [];
    let A = northWest(SUP, DEM);
    for (let k = 0; k < 10; k++) {
      const s = steppingStoneStep(A, COST);
      h.push({ A, info: s });
      if (s.done) break;
      A = s.A;
    }
    return h;
  }, []);
  const [k, setK] = useState(0);
  const [sel, setSel] = useState<string | null>(null);
  const cur = history[k];
  const idx = cur.info!.idx;
  const selected = idx.find((x) => `${x.i},${x.j}` === sel) ?? cur.info!.best;
  const onPath = (i: number, j: number) => selected?.path.findIndex(([a, b]) => a === i && b === j) ?? -1;
  return (
    <div>
      <div className="row">
        <button className="btn ghost" disabled={k === 0} onClick={() => { setK(k - 1); setSel(null); }}>← Forrige</button>
        <b>Iteration {k} · omkostning {fmt(allocCost(cur.A, COST))}</b>
        <button className="btn" disabled={k === history.length - 1} onClick={() => { setK(k + 1); setSel(null); }}>Næste →</button>
      </div>
      <table style={{ maxWidth: 640 }}>
        <thead><tr><th></th>{CN.map((c) => <th key={c}>{c}</th>)}<th className="num">Udbud</th></tr></thead>
        <tbody>
          {cur.A.map((row, i) => (
            <tr key={i}>
              <td><b>{RN[i]}</b></td>
              {row.map((q, j) => {
                const pi = onPath(i, j);
                const ix = idx.find((x) => x.i === i && x.j === j);
                return (
                  <td
                    key={j}
                    onClick={() => q === null && setSel(`${i},${j}`)}
                    style={{ cursor: q === null ? 'pointer' : 'default', background: pi >= 0 ? (pi % 2 === 0 ? '#e5f4ec' : '#f8e7e7') : undefined, position: 'relative' }}
                  >
                    <span style={{ position: 'absolute', right: 4, top: 2, fontSize: '.7rem', color: '#5b6577' }}>{COST[i][j]}</span>
                    {q !== null ? <b>{q}</b> : <span style={{ color: ix && ix.index < 0 ? 'var(--bad)' : '#5b6577' }}>[{ix ? (ix.index > 0 ? '+' : '') + ix.index : '?'}]</span>}
                    {pi >= 0 && <span style={{ marginLeft: 6, fontWeight: 700 }}>{pi % 2 === 0 ? '+' : '−'}</span>}
                  </td>
                );
              })}
              <td className="num">{SUP[i]}</td>
            </tr>
          ))}
          <tr><td>Efterspørgsel</td>{DEM.map((d, j) => <td key={j}>{d}</td>)}<td></td></tr>
        </tbody>
      </table>
      <p className="phase">Fede tal = allokering. [tal] = improvement index for tom celle (klik på den for at se dens sti). Lille tal = omkostning pr. enhed. Grøn = +, rød = −.</p>
      {selected && (
        <p>
          Sti for {RN[selected.i]} → {CN[selected.j]}: {selected.path.map(([a, b], n) => `${n % 2 === 0 ? '+' : '−'}${COST[a][b]}`).join(' ')} = <b>{selected.index}</b>
          {cur.info!.best && selected === cur.info!.best && <> → flyt min(−-celler) = <b>{cur.info!.moved}</b> enheder.</>}
        </p>
      )}
      {cur.info!.done && <div className="intuition">Alle improvement indices er ≥ 0, så løsningen er <b>optimal</b> med omkostning {fmt(allocCost(cur.A, COST))}.</div>}
    </div>
  );
}

// ---------- 9.3 TL vs LTL ----------
export function TlLtl() {
  const [F, setF] = useState(1200);
  const [cap, setCap] = useState(40);
  const [r, setR] = useState(60);
  const [D, setD] = useState(2000);
  const [value, setValue] = useState(20000);
  const [h, setH] = useState(0.2);
  const [Q, setQ] = useState(10);
  const xs = range(1, cap, 60);
  const be = F / r;
  const tl = { trips: D / cap, transport: (D / cap) * F, inv: (cap / 2) * value * h };
  const ltl = { transport: D * r, inv: (Q / 2) * value * h };
  return (
    <div>
      <div className="row">
        <Num label="TL-pris pr. bil" value={F} onChange={setF} />
        <Num label="Kapacitet (biler/enheder)" value={cap} onChange={setCap} />
        <Num label="LTL-rate pr. enhed" value={r} onChange={setR} />
      </div>
      <LineChart
        series={[
          { name: 'TL (fast pr. bil)', color: 'var(--s1)', points: xs.map((x) => [x, F] as [number, number]) },
          { name: 'LTL (pr. enhed)', color: 'var(--s2)', points: xs.map((x) => [x, r * x] as [number, number]) },
        ]}
        markers={be < cap ? [{ x: be, label: `break-even ${fmt(be, 1)}` }] : []}
        xLabel="Forsendelsesstørrelse"
        yLabel="Pris pr. forsendelse"
        height={240}
      />
      <h4>Årlig totalomkostning (transport + cycle inventory)</h4>
      <div className="row">
        <Num label="Årlig mængde D" value={D} onChange={setD} />
        <Num label="Værdi pr. enhed" value={value} onChange={setValue} />
        <Num label="h" value={h} step={0.01} onChange={setH} />
      </div>
      <Slider label="LTL-forsendelsesstørrelse" value={Q} min={1} max={cap} onChange={setQ} />
      <table>
        <thead><tr><th></th><th className="num">Transport</th><th className="num">Cycle inventory</th><th className="num">I alt</th></tr></thead>
        <tbody>
          <tr className={tl.transport + tl.inv < ltl.transport + ltl.inv ? 'best' : ''}><td>TL (fulde biler, Q = {cap})</td><td className="num">{fmt(tl.transport)}</td><td className="num">{fmt(tl.inv)}</td><td className="num">{fmt(tl.transport + tl.inv)}</td></tr>
          <tr className={tl.transport + tl.inv >= ltl.transport + ltl.inv ? 'best' : ''}><td>LTL (Q = {Q})</td><td className="num">{fmt(ltl.transport)}</td><td className="num">{fmt(ltl.inv)}</td><td className="num">{fmt(ltl.transport + ltl.inv)}</td></tr>
        </tbody>
      </table>
      <p className="phase">Illustrative tal. Indsæt Faulkswagon-casens rater. Ved dyre produkter (høj værdi) kan små LTL-forsendelser betale sig på grund af lavere lager.</p>
    </div>
  );
}

// ---------- 10 Bullwhip ----------
function seeded(n: number, mean: number, sd: number, seed = 7) {
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  return Array.from({ length: n }, (_, t) => {
    const u = Math.max(1e-9, rnd()), v = rnd();
    const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    return Math.max(0, mean + sd * z + (t > 30 ? 10 : 0));
  });
}
export function Bullwhip() {
  const [L, setL] = useState(2);
  const [window, setWindow] = useState(4);
  const [share, setShare] = useState(false);
  const [vmi, setVmi] = useState(false);
  const [sd, setSd] = useState(8);
  const demand = useMemo(() => seeded(60, 100, sd), [sd]);
  const stagesN = vmi ? 2 : 3;
  const r = bullwhip(demand, stagesN, L, window, share);
  const names = vmi ? ['Forbruger', 'Leverandør (VMI, ser POS)', 'Råvare'] : ['Forbruger', 'Detail', 'Grossist', 'Producent'];
  const cols = ['var(--ink)', 'var(--s1)', 'var(--s2)', 'var(--s5)'];
  return (
    <div>
      <div className="grid2">
        <div>
          <Slider label="Lead time L" value={L} min={0} max={6} onChange={setL} />
          <Slider label="Prognosevindue (perioder)" value={window} min={2} max={15} onChange={setWindow} />
          <Slider label="σ forbrugerefterspørgsel" value={sd} min={0} max={25} onChange={setSd} />
          <label className="row"><input type="checkbox" checked={share} onChange={(e) => setShare(e.target.checked)} /> Informationsdeling (alle prognosticerer ud fra POS-data)</label>
          <label className="row"><input type="checkbox" checked={vmi} onChange={(e) => setVmi(e.target.checked)} /> VMI/CRP (ét prognoseled fjernes)</label>
        </div>
        <table>
          <thead><tr><th>Led</th><th className="num">Varians i ordrer</th><th className="num">× forbruger</th></tr></thead>
          <tbody>
            {r.variances.map((v, i) => (
              <tr key={i}><td>{names[i]}</td><td className="num">{fmt(v, 0)}</td><td className="num">{fmt(v / r.variances[0], 1)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <LineChart series={r.orders.map((o, i) => ({ name: names[i], color: cols[i], points: o.map((y, t) => [t, y] as [number, number]) }))} xLabel="Periode" yLabel="Ordrer" height={260} />
      <p className="phase">Simpel simulering: Hvert led bruger en order-up-to-politik med glidende gennemsnit og safety stock. Uden informationsdeling forudsiger hvert led ud fra ordrerne fra leddet under, og variansen forstærkes. Efterspørgslen stiger med 10 % i periode 30. Variansforøgelse: {pct(r.variances[r.variances.length - 1] / r.variances[0] - 1, 0)}.</p>
    </div>
  );
}
