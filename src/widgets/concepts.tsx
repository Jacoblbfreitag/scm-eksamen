import { useEffect, useState } from 'react';
import { Kpi, Num, fmt, pct } from '../components/ui';
import { load, save } from '../lib/storage';

function Flashcards({ cards }: { cards: { front: string; back: string }[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  return (
    <div>
      <p className="phase">Klik på et kort for at se svaret. Prøv først at forklare det højt.</p>
      <div className="cards">
        {cards.map((c, i) => (
          <div key={i} className={'card' + (open.has(i) ? ' flip' : '')} onClick={() => { const s = new Set(open); s.has(i) ? s.delete(i) : s.add(i); setOpen(s); }}>
            <h4>{c.front}</h4>
            {open.has(i) ? <div style={{ fontSize: '.9rem' }}>{c.back}</div> : <div className="phase">Vis svar</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- 4.1 Framework ----------
const PHASES = [
  { t: 'Fase I: Supply chain strategy', inputs: ['Competitive strategy', 'Internal constraints (kapital, vækst, eksisterende netværk)', 'Production technologies', 'Global competition'], tools: 'Strategisk analyse, make/buy' },
  { t: 'Fase II: Regional facility configuration', inputs: ['Regional demand (størrelse, vækst, homogenitet)', 'Tariffs and tax incentives', 'Political, exchange rate and demand risk', 'Competitive environment', 'Production technology'], tools: 'Efterspørgselsprognoser og CPL-modellen' },
  { t: 'Fase III: Desirable sites', inputs: ['Hard infrastructure (leverandører, transport, forsyning)', 'Soft infrastructure (arbejdskraft, lokalsamfund)'], tools: 'Gravity-modellen og factor rating' },
  { t: 'Fase IV: Location choices', inputs: ['Production methods', 'Factor costs (løn, materialer, husleje)', 'Logistics costs'], tools: 'CPL, break-even og center of gravity' },
];
export function Framework() {
  const [p, setP] = useState(0);
  return (
    <div className="grid2">
      <div>
        {PHASES.map((x, i) => (
          <div key={i} onClick={() => setP(i)} style={{ cursor: 'pointer', padding: '10px 14px', margin: '0 auto 6px', borderRadius: 8, width: `${100 - i * 12}%`, background: i === p ? 'var(--accent)' : 'var(--accent-soft)', color: i === p ? '#fff' : 'var(--ink)', textAlign: 'center' }}>
            {x.t}
          </div>
        ))}
        <p className="phase" style={{ textAlign: 'center' }}>↓ tragten: strategi → region → kandidater → konkret lokalitet</p>
      </div>
      <div className="panel">
        <h4>{PHASES[p].t}</h4>
        <b>Inputs:</b>
        <ul>{PHASES[p].inputs.map((x) => <li key={x}>{x}</li>)}</ul>
        <b>Værktøjer:</b> {PHASES[p].tools}
      </div>
    </div>
  );
}

// ---------- 4.3 Factors ----------
export function FactorCards() {
  return (
    <Flashcards
      cards={[
        { front: 'Strategiske faktorer', back: 'Konkurrencestrategien (lav pris → billige lokaliteter, responsiv → tæt på markedet). Fabrikkens rolle (Ferdows): offshore, source, server, contributor, outpost, lead.' },
        { front: 'Teknologiske faktorer', back: 'Stordriftsfordele: store faste omkostninger → få centrale fabrikker (chips), små → lokale (læskedrik). Fleksibel teknologi muliggør centralisering.' },
        { front: 'Makroøkonomiske faktorer', back: 'Told og skatteincitamenter, valuta- og efterspørgselsrisiko (svaret er fleksibilitet og natural hedge), fragt- og brændstofomkostninger.' },
        { front: 'Politiske faktorer', back: 'Stabilitet, retssikkerhed og ejendomsret. Ustabile lande fravælges eller kræver en risikopræmie.' },
        { front: 'Infrastruktur', back: 'Hard: havne, motorveje, lufthavne og el. Soft: arbejdskraft, kompetencer og lokalsamfund.' },
        { front: 'Konkurrence', back: 'Positive externalities (klynger) og locating to split the market.' },
        { front: 'Kundens responstid', back: 'Krav om hurtig levering kræver flere faciliteter tæt på kunderne.' },
        { front: 'Logistik- og facility costs', back: 'Total cost er U-formet i antal faciliteter. Weight-losing processer placeres ved råvarerne, weight-gaining ved markedet.' },
      ]}
    />
  );
}

// ---------- 11.1 / 11.3 Recovery ----------
const REC = [
  { lvl: 'Produkt', opt: 'Direct reuse / resale', what: 'Gensalg uden behandling (fx ubrugte returer)', rev: 'Salg som ny eller "open box"' },
  { lvl: 'Produkt', opt: 'Repair', what: 'Reparation til fungerende stand', rev: 'Serviceindtægt og gensalg' },
  { lvl: 'Modul', opt: 'Refurbishing', what: 'Inspektion og udskiftning af moduler til en bestemt kvalitet, evt. opgradering', rev: 'Salg af refurbished varer med rabat' },
  { lvl: 'Del', opt: 'Remanufacturing', what: 'Fuld adskillelse og "som ny"-kvalitet med samme garanti', rev: 'Salg eller leasing som "remanufactured" med høj margin' },
  { lvl: 'Del', opt: 'Cannibalization', what: 'Udtag brugbare dele', rev: 'Reservedele og sparet indkøb' },
  { lvl: 'Materiale', opt: 'Recycling', what: 'Genvinding af materialer, produktets identitet forsvinder', rev: 'Salg af metal, plast mv.' },
  { lvl: '–', opt: 'Disposal', what: 'Deponi eller forbrænding', rev: 'Ingen (koster). At undgå det er en besparelse.' },
];
export function Recovery() {
  const [i, setI] = useState(3);
  return (
    <div className="grid2">
      <div>
        {REC.map((r, k) => (
          <div key={k} onClick={() => setI(k)} style={{ cursor: 'pointer', padding: '7px 12px', marginBottom: 4, borderRadius: 6, marginLeft: k * 10, background: k === i ? 'var(--accent)' : 'var(--accent-soft)', color: k === i ? '#fff' : 'var(--ink)' }}>
            <b>{r.opt}</b> <span style={{ fontSize: '.8rem', opacity: 0.8 }}>({r.lvl})</span>
          </div>
        ))}
        <p className="phase">Øverst bevares mest værdi og arbejde. Nederst bevares mindst (Thierry et al. 1995).</p>
      </div>
      <div className="panel">
        <h4>{REC[i].opt}</h4>
        <p>{REC[i].what}</p>
        <p><b>Indtægtsstrøm:</b> {REC[i].rev}</p>
        <p className="phase">Andre indtægter og gevinster (11.1): sparede bortskaffelses- og materialeomkostninger, leasing og product-service systems, kundeloyalitet, grønt image og data om produktfejl.</p>
      </div>
    </div>
  );
}

// ---------- 11.2 C2C ----------
export function C2C() {
  return (
    <div>
      <svg viewBox="0 0 640 260" width="100%" style={{ maxWidth: 640 }}>
        <defs>
          <marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#5b6577" /></marker>
        </defs>
        <circle cx="170" cy="130" r="95" fill="#e5f4ec" stroke="#2a7d4f" strokeWidth="2" />
        <circle cx="470" cy="130" r="95" fill="#e6f0f7" stroke="#1f5f8b" strokeWidth="2" />
        <text x="170" y="30" textAnchor="middle" fontWeight="700" fill="#2a7d4f">Biologisk kredsløb</text>
        <text x="470" y="30" textAnchor="middle" fontWeight="700" fill="#1f5f8b">Teknisk kredsløb</text>
        {[['Planter / råvarer', 170, 60], ['Produkt (forbrug)', 255, 140], ['Kompost / bionedbrydning', 170, 215], ['Næring i jorden', 85, 140]].map(([t, x, y]) => (
          <text key={t as string} x={x as number} y={y as number} textAnchor="middle" fontSize="12">{t}</text>
        ))}
        {[['Produktion', 470, 60], ['Produkt (brug/leasing)', 555, 140], ['Tilbagetagning og adskillelse', 470, 215], ['Teknisk næring (metal, polymer)', 385, 140]].map(([t, x, y]) => (
          <text key={t as string} x={x as number} y={y as number} textAnchor="middle" fontSize="12">{t}</text>
        ))}
        <text x="320" y="135" textAnchor="middle" fontSize="11" fill="#b23b3b">Ingen</text>
        <text x="320" y="150" textAnchor="middle" fontSize="11" fill="#b23b3b">"monstrous hybrids"</text>
      </svg>
      <Flashcards
        cards={[
          { front: 'Waste equals food', back: 'Der findes ikke affald. Alt output er næring for et andet kredsløb.' },
          { front: 'Use current solar income', back: 'Brug vedvarende energi (sol, vind og vand).' },
          { front: 'Celebrate diversity', back: 'Design tilpasset lokale forhold, kultur og økosystemer.' },
          { front: 'Eco-efficiency vs. eco-effectiveness', back: '"Be less bad" (reducér, genbrug) vs. "be good" (design for kredsløb). C2C ønsker det sidste.' },
          { front: 'Downcycling vs. upcycling', back: 'Traditionel genanvendelse sænker kvaliteten (downcycling). C2C bevarer eller hæver den.' },
          { front: 'Eksempler', back: 'Interface- og Desso-tæpper (tilbagetagning), Herman Miller-stole og Cradle to Cradle Certified™.' },
        ]}
      />
    </div>
  );
}

// ---------- 11.4 Sins ----------
export function Sins() {
  return (
    <div>
      <div className="warn">Listen bygger på den udbredte version (Gooley 2003 / RLEC). Tjek formuleringen i kapitlet "Green Supply Chain Management".</div>
      <Flashcards
        cards={[
          { front: '1. Reverse logistics ses ikke som et konkurrencevåben', back: 'Returer behandles som en nødvendig omkostning. Løsning: Gør let returnering og genvinding til en del af strategien.' },
          { front: '2. At tro, at returstyring slutter ved modtagelsen', back: 'Varen bliver liggende uden disposition. Løsning: Hurtig disposition og analyse af årsager.' },
          { front: '3. "Forældreløs" funktion', back: 'Ingen ejer den, ingen budget. Løsning: Tydeligt ansvar og KPI\'er.' },
          { front: '4. Manglende informationssystemer', back: 'Ingen data om mængde, årsag og omkostning. Løsning: RMA, sporing og IT.' },
          { front: '5. Langsom behandling', back: 'Produkterne taber værdi. Løsning: Korte cyklustider, "time is money".' },
          { front: '6. Mangel på gatekeeping', back: 'Uberettigede returer slipper ind. Løsning: Kontrol ved indgangen.' },
          { front: '7. Blanding med fremadrettet logistik / ingen specialister', back: 'Returer forstyrrer det normale flow. Løsning: Separate processer, centrale returcentre eller en 3PL.' },
        ]}
      />
    </div>
  );
}

// ---------- 12.3 Value density ----------
export function ValueDensity() {
  const [prod, setProd] = useState(15000);
  const [rate, setRate] = useState(0.8);
  const [km, setKm] = useState(1200);
  const [h, setH] = useState(0.2);
  const [days, setDays] = useState(10);
  const transport = rate * km;
  const pipeline = (prod * h * days) / 365;
  const total = prod + transport + pipeline;
  return (
    <div>
      <div className="warn">Indsæt Faulkswagon-tal: produktionsomkostning pr. bil, transportrate pr. bil-km og typisk afstand.</div>
      <div className="row">
        <Num label="Produktionsomk./bil" value={prod} onChange={setProd} />
        <Num label="Transportrate pr. bil-km" value={rate} step={0.05} onChange={setRate} />
        <Num label="Afstand (km)" value={km} onChange={setKm} />
        <Num label="Holding cost h" value={h} step={0.01} onChange={setH} />
        <Num label="Transittid (dage)" value={days} onChange={setDays} />
      </div>
      <Kpi items={[{ l: 'Transport/bil', n: fmt(transport) }, { l: 'Pipeline-lager/bil', n: fmt(pipeline) }, { l: 'Transportandel', n: pct(transport / total) }, { l: 'Lagerhold pr. år/bil', n: fmt(prod * h) }]} />
      <p>En lønforskel på blot {pct(transport / prod, 1)} af produktionsomkostningen svarer til hele transportomkostningen. Derfor dominerer produktionen lokaliseringsvalget, mens lageret er dyrt (holding cost pr. år ≈ {fmt((prod * h) / transport, 1)} × transport).</p>
    </div>
  );
}

// ---------- 12.4 Cost breakdown ----------
export function CostBreakdown() {
  const KEYS = ['Produktion', 'Inbound-transport (fabrik → DW)', 'Outbound-transport (DW → marked)', 'DW / lager', 'Andet'];
  const [v, setV] = useState<number[]>(() => load('faulks-costs', [0, 0, 0, 0, 0]));
  useEffect(() => save('faulks-costs', v), [v]);
  const total = v.reduce((a, b) => a + b, 0);
  const order = KEYS.map((k, i) => ({ k, x: v[i] })).sort((a, b) => b.x - a.x);
  const TIPS: Record<string, string> = {
    Produktion: 'Omfordel produktionen til de billigste fabrikker (transportmodel/LP under kapacitet), og udnyt stordriftsfordele. Overvej at lukke fabrikker med lav udnyttelse (CPL).',
    'Inbound-transport (fabrik → DW)': 'Fulde TL eller tog, færre men større forsendelser. Placér DW\'er i forhold til fabrikkerne, eller tildel markeder anderledes.',
    'Outbound-transport (DW → marked)': 'Flyt DW\'er tættere på markederne (center of gravity eller gravity), brug milk runs og konsolidér forsendelser.',
    'DW / lager': 'Færre DW\'er (square-root law), kortere lead time, VMI og informationsdeling, postponement af varianter.',
    Andet: 'Undersøg posten i detaljer.',
  };
  return (
    <div>
      <div className="warn">Indtast tallene fra sheet 1.10. De gemmes i din browser.</div>
      <table>
        <thead><tr><th>Post</th><th>Beløb</th><th className="num">Andel</th></tr></thead>
        <tbody>
          {KEYS.map((k, i) => (
            <tr key={k}><td>{k}</td><td><input type="number" style={{ width: 140 }} value={v[i]} onChange={(e) => setV(v.map((x, j) => (j === i ? Number(e.target.value) : x)))} /></td><td className="num">{total ? pct(v[i] / total) : '–'}</td></tr>
          ))}
          <tr className="best"><td>I alt</td><td>{fmt(total)}</td><td className="num">100 %</td></tr>
        </tbody>
      </table>
      {total > 0 && (
        <div>
          <h4>Forslag i rækkefølge efter størrelse</h4>
          <ol>{order.filter((o) => o.x > 0).map((o) => <li key={o.k}><b>{o.k}</b> ({pct(o.x / total, 0)}): {TIPS[o.k]}</li>)}</ol>
        </div>
      )}
    </div>
  );
}
