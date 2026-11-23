import { useState } from 'react';
import { Kpi, LineChart, Num, Slider, fmt, pct, range } from '../components/ui';
import {
  aggregationWithCapacity,
  allUnitDiscount,
  fillRate,
  jointOrdering,
  lotSizeCoordination,
  marginalUnitDiscount,
  newsvendor,
  normPdf,
  safetyStockContinuous,
  safetyStockPeriodic,
  separateOrdering,
  volumeCoordination,
  type PriceBreak,
} from '../lib/calc';

// ---------- 6.1 Joint ordering ----------
export function JointOrdering() {
  const [D, setD] = useState([12000, 1200, 120]);
  const [S, setS] = useState(4000);
  const [s, setSmall] = useState(1000);
  const [C, setC] = useState(500);
  const [h, setH] = useState(0.2);
  const items = D.map((d) => ({ D: d, C, s }));
  const sep = separateOrdering(items, S, h);
  const joint = jointOrdering(items, S, h);
  const names = ['Litepro', 'Medpro', 'Heavypro'];
  return (
    <div>
      <div className="row">
        {names.map((n, i) => <Num key={n} label={`D ${n}`} value={D[i]} onChange={(v) => setD(D.map((x, j) => (j === i ? v : x)))} />)}
        <Num label="S (lastbil)" value={S} onChange={setS} />
        <Num label="s (pr. model)" value={s} onChange={setSmall} />
        <Num label="C" value={C} onChange={setC} />
        <Num label="h" value={h} step={0.01} onChange={setH} />
      </div>
      <table>
        <thead><tr><th></th>{names.map((n) => <th key={n} className="num">{n}</th>)}<th className="num">I alt</th></tr></thead>
        <tbody>
          <tr><td colSpan={5}><b>Separat (Ex 11-3)</b>: hver ordre koster S + s = {fmt(S + s)}</td></tr>
          <tr><td>Q</td>{sep.per.map((p, i) => <td key={i} className="num">{fmt(p.Q)}</td>)}<td></td></tr>
          <tr><td>Ordrer/år</td>{sep.per.map((p, i) => <td key={i} className="num">{fmt(p.n, 2)}</td>)}<td></td></tr>
          <tr><td>Årlig omk.</td>{sep.per.map((p, i) => <td key={i} className="num">{fmt(p.total)}</td>)}<td className="num"><b>{fmt(sep.total)}</b></td></tr>
          <tr><td colSpan={5}><b>Joint (Ex 11-4)</b>: S* = S + Σs = {fmt(joint.Sstar)}, n* = √(ΣDhC / 2S*) = <b>{fmt(joint.n, 2)}</b></td></tr>
          <tr><td>Q = D/n*</td>{joint.Q.map((q, i) => <td key={i} className="num">{fmt(q, 1)}</td>)}<td></td></tr>
          <tr className="best"><td>Bestilling + lager</td><td colSpan={3} className="num">{fmt(joint.orderCost)} + {fmt(joint.holdCost)}</td><td className="num"><b>{fmt(joint.total)}</b></td></tr>
        </tbody>
      </table>
      <Kpi items={[{ l: 'Besparelse', n: fmt(sep.total - joint.total), tone: sep.total > joint.total ? 'good' : 'bad' }, { l: 'i procent', n: pct((sep.total - joint.total) / sep.total) }]} />
      <p className="phase">Prøv at hæve s (produktspecifik omkostning). Ved et tidspunkt bliver joint ordering dårligere end separat, og så er tailored aggregation svaret.</p>
    </div>
  );
}

// ---------- 6.2 Capacity ----------
export function CapacityAgg() {
  const [k, setK] = useState(4);
  const [D, setD] = useState(120000);
  const [C, setC] = useState(50);
  const [h, setH] = useState(0.2);
  const [truck, setTruck] = useState(400);
  const [stop, setStop] = useState(100);
  const [cap, setCap] = useState(2500);
  const agg = aggregationWithCapacity(k, D, C, h, truck, stop, cap);
  const sep = aggregationWithCapacity(1, D, C, h, truck, stop, cap);
  return (
    <div>
      <div className="row">
        <Num label="Leverandører k" value={k} onChange={setK} />
        <Num label="D pr. leverandør/år" value={D} onChange={setD} />
        <Num label="C" value={C} onChange={setC} />
        <Num label="h" value={h} step={0.01} onChange={setH} />
        <Num label="Fast pr. lastbil" value={truck} onChange={setTruck} />
        <Num label="Pr. stop" value={stop} onChange={setStop} />
      </div>
      <Slider label="Lastbilkapacitet" value={cap} min={500} max={15000} step={100} onChange={setCap} />
      <div className="grid2">
        <div className="panel">
          <h4>Aggregeret (alle på én bil)</h4>
          <p>S* = {fmt(agg.Sstar)} · ubegrænset n* = {fmt(agg.nFree, 1)} · samlet last = {fmt(agg.loadFree)}</p>
          {agg.binding ? <div className="warn">Last {fmt(agg.loadFree)} &gt; kapacitet {fmt(cap)}, så der sendes fulde biler: n = kD/K = {fmt(agg.n, 1)}</div> : <p>Kapaciteten binder ikke.</p>}
          <Kpi items={[{ l: 'Q pr. leverandør', n: fmt(agg.Qper) }, { l: 'Transport', n: fmt(agg.orderCost) }, { l: 'Lager', n: fmt(agg.holdCost) }, { l: 'Total', n: fmt(agg.total) }]} />
        </div>
        <div className="panel">
          <h4>Separat (én bil pr. leverandør)</h4>
          <p>S = {fmt(sep.Sstar)} · n* = {fmt(sep.nFree, 1)} · last = {fmt(sep.loadFree)}</p>
          {sep.binding ? <div className="warn">Kapaciteten binder også her: n = {fmt(sep.n, 1)} pr. leverandør</div> : <p>Kapaciteten binder ikke.</p>}
          <Kpi items={[{ l: 'Q', n: fmt(sep.Qper) }, { l: `Total × ${k}`, n: fmt(sep.total * k) }]} />
        </div>
      </div>
      <p>{agg.total < sep.total * k ? 'Aggregering er billigst.' : 'Separate fulde lastbiler er billigst. Når bilen alligevel er fuld, tilføjer aggregering kun ekstra stop.'} Prøv at øge kapaciteten til ca. 9.000.</p>
    </div>
  );
}

// ---------- 6.3 Discounts ----------
export function Discount() {
  const [D, setD] = useState(120000);
  const [S, setS] = useState(100);
  const [h, setH] = useState(0.2);
  const [breaks, setBreaks] = useState<PriceBreak[]>([
    { q: 0, price: 3 },
    { q: 5000, price: 2.96 },
    { q: 10000, price: 2.92 },
  ]);
  const [type, setType] = useState<'all' | 'marg'>('all');
  const au = allUnitDiscount(D, S, h, breaks);
  const mu = marginalUnitDiscount(D, S, h, breaks);
  const tcAll = (Q: number) => {
    let i = 0;
    breaks.forEach((b, k) => { if (Q >= b.q) i = k; });
    const p = breaks[i].price;
    return (D / Q) * S + (Q / 2) * h * p + D * p;
  };
  const tcMarg = (Q: number) => {
    let i = 0;
    breaks.forEach((b, k) => { if (Q >= b.q) i = k; });
    const c = mu.cands[i];
    const lot = c.V + (Q - c.q) * c.price;
    return (D / Q) * S + (lot / 2) * h + (D / Q) * lot;
  };
  const xs = range(1000, 25000, 240);
  return (
    <div>
      <div className="row">
        <Num label="D/år" value={D} onChange={setD} />
        <Num label="S" value={S} onChange={setS} />
        <Num label="h" value={h} step={0.01} onChange={setH} />
        {breaks.map((b, i) => (
          <span key={i} className="row" style={{ gap: 4 }}>
            <Num label={`Brud ${i}`} value={b.q} onChange={(v) => setBreaks(breaks.map((x, j) => (j === i ? { ...x, q: v } : x)))} />
            <Num label="pris" value={b.price} step={0.01} onChange={(v) => setBreaks(breaks.map((x, j) => (j === i ? { ...x, price: v } : x)))} />
          </span>
        ))}
      </div>
      <div className="tabs">
        <button className={type === 'all' ? 'on' : ''} onClick={() => setType('all')}>All-unit (Ex 11-7)</button>
        <button className={type === 'marg' ? 'on' : ''} onClick={() => setType('marg')}>Marginal unit (Ex 11-8)</button>
      </div>
      {type === 'all' ? (
        <table>
          <thead><tr><th>i</th><th>Pris</th><th className="num">EOQ_i</th><th>Regel</th><th className="num">Q</th><th className="num">TC</th></tr></thead>
          <tbody>
            {au.cands.map((c, i) => (
              <tr key={i} className={i === au.best ? 'best' : ''}>
                <td>{i}</td><td>{c.price}</td><td className="num">{fmt(c.Qeoq)}</td><td>{c.note}</td><td className="num">{c.Q === null ? '–' : fmt(c.Q)}</td><td className="num">{c.TC === null ? '–' : fmt(c.TC)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table>
          <thead><tr><th>i</th><th>Pris</th><th className="num">V_i</th><th className="num">Q_i (formel)</th><th className="num">Q brugt</th><th className="num">TC</th></tr></thead>
          <tbody>
            {mu.cands.map((c, i) => (
              <tr key={i} className={i === mu.best ? 'best' : ''}>
                <td>{i}</td><td>{c.price}</td><td className="num">{fmt(c.V)}</td><td className="num">{fmt(c.Qopt)}</td><td className="num">{fmt(c.Q)}</td><td className="num">{fmt(c.TC)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <LineChart
        series={[
          { name: 'TC all-unit', color: 'var(--s1)', points: xs.map((x) => [x, tcAll(x)] as [number, number]) },
          { name: 'TC marginal unit', color: 'var(--s2)', points: xs.map((x) => [x, tcMarg(x)] as [number, number]) },
        ]}
        xLabel="Q"
        yLabel="Årlig totalomk."
        yMin={Math.min(...xs.map(tcAll)) * 0.995}
        fmtY={(v) => fmt(v / 1000) + 'k'}
        markers={breaks.slice(1).map((b) => ({ x: b.q, color: '#9aa3b2' }))}
      />
      <p className="phase">Bemærk springene i all-unit-kurven ved brudpunkterne. Det er derfor, optimum ofte ligger præcis ved et brudpunkt.</p>
    </div>
  );
}

// ---------- 6.4 Coordination ----------
export function Coordination() {
  const [Sm, setSm] = useState(250);
  const [Sr, setSr] = useState(100);
  const [a, setA] = useState(360000);
  const [b, setB] = useState(60000);
  const D = 120000;
  const l = lotSizeCoordination(D, Sr, Sm, 0.6, 0.4);
  const v = volumeCoordination(a, b, 2);
  return (
    <div className="grid2">
      <div className="panel">
        <h4>Ex 11-9: Lot-size rabat (commodity)</h4>
        <div className="row">
          <Num label="S_R (detail)" value={Sr} onChange={setSr} />
          <Num label="S_M (producent)" value={Sm} onChange={setSm} />
        </div>
        <p className="phase">D = 120.000, h_R = 0,6, h_M = 0,4</p>
        <table>
          <thead><tr><th></th><th className="num">Ukoordineret</th><th className="num">Koordineret</th></tr></thead>
          <tbody>
            <tr><td>Q</td><td className="num">{fmt(l.Qr)}</td><td className="num">{fmt(l.Qsc)}</td></tr>
            <tr><td>Detail</td><td className="num">{fmt(l.before.r)}</td><td className="num">{fmt(l.after.r)}</td></tr>
            <tr><td>Producent</td><td className="num">{fmt(l.before.m)}</td><td className="num">{fmt(l.after.m)}</td></tr>
            <tr className="best"><td>Kæden</td><td className="num">{fmt(l.before.total)}</td><td className="num">{fmt(l.after.total)}</td></tr>
          </tbody>
        </table>
        <p>Rabat: pris {fmt(3, 2)} under {fmt(l.Qsc)} stk., <b>{fmt(3 - l.discountPerUnit, 4)}</b> ved ≥ {fmt(l.Qsc)}. Kædens besparelse: {fmt(l.before.total - l.after.total)}.</p>
      </div>
      <div className="panel">
        <h4>Ex 11-10: Markedsmagt (D = a − b·p, c = 2)</h4>
        <div className="row">
          <Num label="a" value={a} onChange={setA} />
          <Num label="b" value={b} onChange={setB} />
        </div>
        <table>
          <thead><tr><th></th><th className="num">Sekventiel</th><th className="num">Koordineret</th></tr></thead>
          <tbody>
            <tr><td>Engrospris C_R</td><td className="num">{fmt(v.CR, 2)}</td><td className="num">–</td></tr>
            <tr><td>Detailpris p</td><td className="num">{fmt(v.p, 2)}</td><td className="num">{fmt(v.pStar, 2)}</td></tr>
            <tr><td>Mængde</td><td className="num">{fmt(v.Dseq)}</td><td className="num">{fmt(v.Dstar)}</td></tr>
            <tr><td>Detail profit</td><td className="num">{fmt(v.retailer)}</td><td className="num">{fmt(v.retailer)}</td></tr>
            <tr><td>Producent profit</td><td className="num">{fmt(v.manufacturer)}</td><td className="num">{fmt(v.scProfit - v.retailer)}</td></tr>
            <tr className="best"><td>Kæden</td><td className="num">{fmt(v.seqTotal)}</td><td className="num">{fmt(v.scProfit)}</td></tr>
          </tbody>
        </table>
        <p>Two-part tariff: C_R = 2 + fast gebyr {fmt(v.fixedFee)}. Volume-rabat: {fmt(v.CR, 2)} under {fmt(v.Dstar)}, <b>{fmt(v.discPrice, 2)}</b> ved ≥ {fmt(v.Dstar)}.</p>
      </div>
    </div>
  );
}

// ---------- normal curve helper ----------
function NormalShade({ mu, sigma, cut, label }: { mu: number; sigma: number; cut: number; label: string }) {
  const xs = range(mu - 4 * sigma, mu + 4 * sigma, 120);
  const W = 560, H = 200, m = 30;
  const ymax = normPdf(0) / sigma;
  const sx = (x: number) => m + ((x - xs[0]) / (xs[xs.length - 1] - xs[0])) * (W - 2 * m);
  const sy = (y: number) => H - m - (y / ymax) * (H - 2 * m);
  const pdf = (x: number) => normPdf((x - mu) / sigma) / sigma;
  const area = xs.filter((x) => x <= cut);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W }}>
      <polygon fill="#e5f4ec" points={[`${sx(xs[0])},${sy(0)}`, ...area.map((x) => `${sx(x)},${sy(pdf(x))}`), `${sx(Math.min(cut, xs[xs.length - 1]))},${sy(0)}`].join(' ')} />
      <polyline fill="none" stroke="#1f5f8b" strokeWidth={2} points={xs.map((x) => `${sx(x)},${sy(pdf(x))}`).join(' ')} />
      <line x1={sx(mu)} x2={sx(mu)} y1={sy(0)} y2={sy(ymax)} stroke="#9aa3b2" strokeDasharray="4 3" />
      <line x1={sx(cut)} x2={sx(cut)} y1={sy(0)} y2={m - 10} stroke="#b23b3b" strokeWidth={2} />
      <text x={sx(cut) + 4} y={m} fontSize="12" fill="#b23b3b">{label}</text>
      <text x={sx(mu)} y={H - 10} fontSize="11" textAnchor="middle">μ = {fmt(mu)}</text>
      <line x1={m} x2={W - m} y1={sy(0)} y2={sy(0)} stroke="#5b6577" />
    </svg>
  );
}

// ---------- 7.1 Safety stock ----------
export function SafetyStock() {
  const [D, setD] = useState(2500);
  const [sd, setSd] = useState(500);
  const [L, setL] = useState(2);
  const [csl, setCsl] = useState(0.9);
  const r = safetyStockContinuous(D, sd, L, csl);
  return (
    <div>
      <div className="grid2">
        <div>
          <Slider label="Efterspørgsel D pr. uge" value={D} min={500} max={5000} step={100} onChange={setD} />
          <Slider label="σ_D pr. uge" value={sd} min={50} max={1500} step={50} onChange={setSd} />
          <Slider label="Lead time L (uger)" value={L} min={0.5} max={8} step={0.5} onChange={setL} format={(v) => fmt(v, 1)} />
          <Slider label="Ønsket CSL" value={csl} min={0.5} max={0.995} step={0.005} onChange={setCsl} format={(v) => pct(v, 1)} />
        </div>
        <div>
          <Kpi items={[{ l: 'D_L = D·L', n: fmt(r.DL) }, { l: 'σ_L = √L·σ_D', n: fmt(r.sigmaL) }, { l: 'z = NORMSINV(CSL)', n: fmt(r.z, 2) }, { l: 'ss = z·σ_L', n: fmt(r.ss) }, { l: 'ROP = D_L + ss', n: fmt(r.rop) }]} />
        </div>
      </div>
      <NormalShade mu={r.DL} sigma={r.sigmaL} cut={r.rop} label={`ROP = ${fmt(r.rop)} (dækker ${pct(csl, 1)})`} />
      <p className="phase">Kurven viser efterspørgslen i lead time. Det grønne areal er sandsynligheden for, at efterspørgslen er ≤ ROP, altså CSL. Ex 12-3: D = 2.500, σ = 500, L = 2, CSL = 90 % giver ss = 906.</p>
    </div>
  );
}

// ---------- 7.2 Continuous vs periodic ----------
export function Review() {
  const [D, setD] = useState(2500);
  const [sd, setSd] = useState(500);
  const [L, setL] = useState(2);
  const [T, setT] = useState(4);
  const [csl, setCsl] = useState(0.9);
  const c = safetyStockContinuous(D, sd, L, csl);
  const p = safetyStockPeriodic(D, sd, L, T, csl);
  return (
    <div>
      <Slider label="D pr. uge" value={D} min={500} max={5000} step={100} onChange={setD} />
      <Slider label="σ_D" value={sd} min={50} max={1500} step={50} onChange={setSd} />
      <Slider label="Lead time L" value={L} min={1} max={8} onChange={setL} />
      <Slider label="Review-interval T" value={T} min={1} max={8} onChange={setT} />
      <Slider label="CSL" value={csl} min={0.5} max={0.995} step={0.005} onChange={setCsl} format={(v) => pct(v, 1)} />
      <div className="grid2">
        <div className="panel">
          <h4>Continuous review</h4>
          <Kpi items={[{ l: 'σ_L = √L·σ', n: fmt(c.sigmaL) }, { l: 'ss', n: fmt(c.ss) }, { l: 'ROP', n: fmt(c.rop) }]} />
          <p className="phase">Bestil Q, når lageret rammer ROP.</p>
        </div>
        <div className="panel">
          <h4>Periodic review</h4>
          <Kpi items={[{ l: 'σ_T+L = √(T+L)·σ', n: fmt(p.sigma) }, { l: 'ss', n: fmt(p.ss) }, { l: 'OUL', n: fmt(p.oul) }]} />
          <p className="phase">Hver T uger: bestil OUL − lagerposition.</p>
        </div>
      </div>
      <p>Periodic review kræver <b>{pct(p.ss / c.ss - 1, 0)}</b> mere safety stock, fordi den skal dække T + L = {T + L} uger i stedet for L = {L}.</p>
    </div>
  );
}

export function FillRate() {
  const [Q, setQ] = useState(10000);
  const [ss, setSs] = useState(1000);
  const [sL, setSL] = useState(707);
  const [items, setItems] = useState(3);
  const r = fillRate(ss, sL, Q);
  return (
    <div>
      <Slider label="Q (lot)" value={Q} min={500} max={20000} step={100} onChange={setQ} />
      <Slider label="Safety stock" value={ss} min={-500} max={2500} step={10} onChange={setSs} />
      <Slider label="σ_L" value={sL} min={100} max={2000} step={10} onChange={setSL} />
      <Slider label="Varer pr. kundeordre" value={items} min={1} max={10} onChange={setItems} />
      <Kpi items={[{ l: 'CSL', n: pct(r.csl) }, { l: 'ESC (mangler/cyklus)', n: fmt(r.esc, 1) }, { l: 'Product fill rate', n: pct(r.fr, 2) }, { l: `Order fill rate (${items} varer)`, n: pct(Math.pow(r.fr, items), 2) }]} />
      <p className="phase">ESC = −ss·[1 − F(ss/σ_L)] + σ_L·f(ss/σ_L), og fr = 1 − ESC/Q. Ex 12-2: Q = 10.000, ss = 1.000, σ_L = 707 giver CSL ≈ 92 % og fr ≈ 99,75 %. Bemærk, at større Q giver højere fill rate ved samme ss.</p>
    </div>
  );
}

// ---------- 8.1 / 8.2 Newsvendor ----------
export function Newsvendor() {
  const [p, setP] = useState(250);
  const [c, setC] = useState(100);
  const [s, setS] = useState(80);
  const [mu, setMu] = useState(350);
  const [sigma, setSigma] = useState(100);
  const r = newsvendor(p, c, s, mu, sigma);
  return (
    <div>
      <div className="grid2">
        <div>
          <Slider label="Salgspris p" value={p} min={50} max={500} step={5} onChange={setP} />
          <Slider label="Kostpris c" value={c} min={10} max={Math.max(p - 1, 11)} step={5} onChange={setC} />
          <Slider label="Restværdi s" value={s} min={0} max={Math.max(c - 1, 1)} step={5} onChange={setS} />
          <Slider label="μ efterspørgsel" value={mu} min={50} max={1000} step={10} onChange={setMu} />
          <Slider label="σ efterspørgsel" value={sigma} min={10} max={400} step={10} onChange={setSigma} />
        </div>
        <div>
          <Kpi items={[{ l: 'C_u = p − c', n: fmt(r.Cu) }, { l: 'C_o = c − s', n: fmt(r.Co) }, { l: 'CSL* = C_u/(C_u+C_o)', n: fmt(r.csl, 3) }, { l: 'z*', n: fmt(r.z, 2) }, { l: 'O* = μ + z·σ', n: fmt(r.O) }]} />
          <button className="btn ghost" onClick={() => { setP(250); setC(100); setS(80); setMu(350); setSigma(100); }}>Ex 13-1 (L.L. Bean)</button>
        </div>
      </div>
      <NormalShade mu={mu} sigma={sigma} cut={r.O} label={`O* = ${fmt(r.O)}`} />
      <p className="phase">Marginalargument: Bestil én mere, så længe P(D &gt; O)·C_u &gt; P(D ≤ O)·C_o. Prøv at sætte s = 0 og se O* falde.</p>
    </div>
  );
}
