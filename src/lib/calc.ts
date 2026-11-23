// Pure calculation functions used by the interactive widgets.
// Each one mirrors a formula from Chopra & Meindl (7th ed.) or Heizer & Render "Location Decisions".

// ---------- Normal distribution ----------
export function normPdf(x: number): number {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

// Abramowitz & Stegun 7.1.26 based erf; accurate to ~1e-7.
export function normCdf(x: number): number {
  const t = 1 / (1 + 0.3275911 * Math.abs(x) / Math.SQRT2);
  const y =
    1 -
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) *
      Math.exp(-(x * x) / 2);
  return x >= 0 ? 0.5 * (1 + y) : 0.5 * (1 - y);
}

// Acklam's inverse normal approximation (Excel NORMSINV equivalent).
export function normInv(p: number): number {
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;
  const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
  const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
  const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
  const pl = 0.02425;
  let q: number, r: number;
  if (p < pl) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  if (p > 1 - pl) {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  q = p - 0.5;
  r = q * q;
  return ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q) / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}

// ---------- DuPont ----------
export interface DuPontInput {
  sales: number;
  cogs: number;
  sga: number; // incl. transport, holding cost etc.
  taxRate: number;
  inventory: number;
  receivables: number;
  ppe: number;
  otherAssets: number;
}
export function dupont(i: DuPontInput) {
  const ebit = i.sales - i.cogs - i.sga;
  const netIncome = ebit * (1 - i.taxRate);
  const totalAssets = i.inventory + i.receivables + i.ppe + i.otherAssets;
  const margin = netIncome / i.sales;
  const turnover = i.sales / totalAssets;
  return {
    ebit,
    netIncome,
    totalAssets,
    margin,
    turnover,
    roa: margin * turnover,
    inventoryTurns: i.cogs / i.inventory,
  };
}

// ---------- EOQ & joint ordering ----------
export function eoq(D: number, S: number, H: number) {
  const Q = Math.sqrt((2 * D * S) / H);
  return { Q, n: D / Q, orderCost: (D / Q) * S, holdCost: (Q / 2) * H, total: (D / Q) * S + (Q / 2) * H };
}

export interface JointItem {
  D: number;
  C: number;
  s: number; // product-specific order cost
}
// Example 11-3 (separate) vs 11-4 (all products on every truck).
export function separateOrdering(items: JointItem[], S: number, h: number) {
  const per = items.map((it) => eoq(it.D, S + it.s, h * it.C));
  return { per, total: per.reduce((a, p) => a + p.total, 0) };
}
export function jointOrdering(items: JointItem[], S: number, h: number) {
  const Sstar = S + items.reduce((a, it) => a + it.s, 0);
  const n = Math.sqrt(items.reduce((a, it) => a + it.D * h * it.C, 0) / (2 * Sstar));
  const Q = items.map((it) => it.D / n);
  const holdCost = items.reduce((a, it, k) => a + (Q[k] / 2) * h * it.C, 0);
  const orderCost = n * Sstar;
  return { Sstar, n, Q, holdCost, orderCost, total: holdCost + orderCost };
}

// Example 11-5: identical suppliers on one truck with capacity limit.
export function aggregationWithCapacity(k: number, D: number, C: number, h: number, truckCost: number, stopCost: number, cap: number) {
  const Sstar = truckCost + k * stopCost;
  const nFree = Math.sqrt((k * D * h * C) / (2 * Sstar));
  const loadFree = (k * D) / nFree;
  const binding = loadFree > cap;
  const n = binding ? (k * D) / cap : nFree;
  const Qper = D / n;
  const orderCost = n * Sstar;
  const holdCost = k * (Qper / 2) * h * C;
  return { Sstar, nFree, loadFree, binding, n, Qper, orderCost, holdCost, total: orderCost + holdCost };
}

// ---------- Quantity discounts ----------
export interface PriceBreak {
  q: number; // min quantity for this price
  price: number;
}
// All-unit discount (Example 11-7). Returns candidate per break and optimum.
export function allUnitDiscount(D: number, S: number, h: number, breaks: PriceBreak[]) {
  const cands = breaks.map((b, i) => {
    const next = i + 1 < breaks.length ? breaks[i + 1].q : Infinity;
    const Qeoq = Math.sqrt((2 * D * S) / (h * b.price));
    let Q: number | null;
    let note: string;
    if (Qeoq >= next) {
      Q = null;
      note = 'EOQ over intervallet – næste pris er bedre, spring over';
    } else if (Qeoq < b.q) {
      Q = b.q;
      note = 'EOQ under intervallet – hæv til bruddet';
    } else {
      Q = Qeoq;
      note = 'EOQ ligger i intervallet';
    }
    const TC = Q === null ? null : (D / Q) * S + (Q / 2) * h * b.price + D * b.price;
    return { ...b, Qeoq, Q, TC, note };
  });
  let best = -1;
  cands.forEach((c, i) => {
    if (c.TC !== null && (best < 0 || c.TC < (cands[best].TC as number))) best = i;
  });
  return { cands, best };
}

// Marginal unit discount: price p_i applies only to units above q_i.
export function marginalUnitDiscount(D: number, S: number, h: number, breaks: PriceBreak[]) {
  const V = [0];
  for (let i = 1; i < breaks.length; i++) V.push(V[i - 1] + breaks[i - 1].price * (breaks[i].q - breaks[i - 1].q));
  const cands = breaks.map((b, i) => {
    const next = i + 1 < breaks.length ? breaks[i + 1].q : Infinity;
    const Qopt = Math.sqrt((2 * D * (S + V[i] - b.q * b.price)) / (h * b.price));
    const tcAt = (Q: number) => {
      const costOfLot = V[i] + (Q - b.q) * b.price;
      return (D / Q) * S + (costOfLot / 2) * h + (D / Q) * costOfLot;
    };
    let Q: number;
    if (Qopt >= b.q && Qopt <= next) Q = Qopt;
    else {
      const lo = Math.max(b.q, 1);
      const hi = next === Infinity ? lo : next;
      Q = tcAt(lo) <= tcAt(hi) ? lo : hi;
    }
    return { ...b, V: V[i], Qopt, Q, TC: tcAt(Q) };
  });
  let best = 0;
  cands.forEach((c, i) => {
    if (c.TC < cands[best].TC) best = i;
  });
  return { cands, best };
}

// Example 11-9: coordinating a lot-size based discount (commodity).
export function lotSizeCoordination(D: number, Sr: number, Sm: number, hr: number, hm: number) {
  const cost = (Q: number) => ({ r: (D / Q) * Sr + (Q / 2) * hr, m: (D / Q) * Sm + (Q / 2) * hm });
  const Qr = Math.sqrt((2 * D * Sr) / hr);
  const Qsc = Math.sqrt((2 * D * (Sr + Sm)) / (hr + hm));
  const a = cost(Qr);
  const b = cost(Qsc);
  const discountPerUnit = (b.r - a.r) / D;
  return { Qr, Qsc, before: { ...a, total: a.r + a.m }, after: { ...b, total: b.r + b.m }, discountPerUnit };
}

// Example 11-10: linear demand D = a - b p, manufacturer cost c.
export function volumeCoordination(a: number, b: number, c: number) {
  // Sequential (double marginalisation)
  const CR = (a / b + c) / 2;
  const p = (a / b + CR) / 2;
  const Dseq = a - b * p;
  const retailer = (p - CR) * Dseq;
  const manufacturer = (CR - c) * Dseq;
  // Coordinated
  const pStar = (a / b + c) / 2;
  const Dstar = a - b * pStar;
  const scProfit = (pStar - c) * Dstar;
  // Volume discount that leaves retailer as well off as before
  const discPrice = pStar - retailer / Dstar;
  return { CR, p, Dseq, retailer, manufacturer, seqTotal: retailer + manufacturer, pStar, Dstar, scProfit, discPrice, fixedFee: scProfit - retailer };
}

// ---------- Safety inventory ----------
export function safetyStockContinuous(D: number, sigmaD: number, L: number, csl: number) {
  const DL = D * L;
  const sigmaL = Math.sqrt(L) * sigmaD;
  const z = normInv(csl);
  const ss = z * sigmaL;
  return { DL, sigmaL, z, ss, rop: DL + ss };
}
export function safetyStockPeriodic(D: number, sigmaD: number, L: number, T: number, csl: number) {
  const DTL = D * (T + L);
  const sigma = Math.sqrt(T + L) * sigmaD;
  const z = normInv(csl);
  const ss = z * sigma;
  return { DTL, sigma, z, ss, oul: DTL + ss };
}
// Expected shortage per cycle and fill rate (Chopra eq. 12.2/12.3)
export function fillRate(ss: number, sigmaL: number, Q: number) {
  const k = ss / sigmaL;
  const esc = -ss * (1 - normCdf(k)) + sigmaL * normPdf(k);
  return { esc, fr: 1 - esc / Q, csl: normCdf(k) };
}

// ---------- Newsvendor ----------
export function newsvendor(p: number, c: number, s: number, mu: number, sigma: number) {
  const Cu = p - c;
  const Co = c - s;
  const csl = Cu / (Cu + Co);
  const z = normInv(csl);
  return { Cu, Co, csl, z, O: mu + z * sigma };
}

// ---------- Gravity model (Chopra 5.5, 5.6) ----------
export interface GPoint {
  name: string;
  x: number;
  y: number;
  D: number; // tons
  F: number; // cost per ton-mile
}
export function gravityCost(pts: GPoint[], x: number, y: number) {
  return pts.reduce((a, p) => a + Math.hypot(x - p.x, y - p.y) * p.D * p.F, 0);
}
export function gravityIterate(pts: GPoint[], maxIter = 200) {
  const W = pts.reduce((a, p) => a + p.D * p.F, 0);
  let x = pts.reduce((a, p) => a + p.D * p.F * p.x, 0) / W;
  let y = pts.reduce((a, p) => a + p.D * p.F * p.y, 0) / W;
  const path = [{ x, y, tc: gravityCost(pts, x, y) }];
  for (let k = 0; k < maxIter; k++) {
    let nx = 0, ny = 0, den = 0;
    for (const p of pts) {
      const d = Math.max(Math.hypot(x - p.x, y - p.y), 1e-9);
      const w = (p.D * p.F) / d;
      nx += w * p.x;
      ny += w * p.y;
      den += w;
    }
    nx /= den;
    ny /= den;
    const moved = Math.hypot(nx - x, ny - y);
    x = nx;
    y = ny;
    path.push({ x, y, tc: gravityCost(pts, x, y) });
    if (moved < 1e-6) break;
  }
  return { x, y, tc: gravityCost(pts, x, y), path };
}

// ---------- Center of gravity (Heizer & Render) ----------
export function centerOfGravity(pts: { x: number; y: number; Q: number }[]) {
  const Q = pts.reduce((a, p) => a + p.Q, 0);
  return { x: pts.reduce((a, p) => a + p.x * p.Q, 0) / Q, y: pts.reduce((a, p) => a + p.y * p.Q, 0) / Q };
}

// ---------- Locational break-even ----------
export function breakEven(sites: { name: string; F: number; v: number }[], volume: number) {
  const costs = sites.map((s) => ({ ...s, TC: s.F + s.v * volume }));
  const crossings: { a: string; b: string; q: number }[] = [];
  for (let i = 0; i < sites.length; i++)
    for (let j = i + 1; j < sites.length; j++) {
      const dv = sites[i].v - sites[j].v;
      if (dv !== 0) {
        const q = (sites[j].F - sites[i].F) / dv;
        if (q > 0) crossings.push({ a: sites[i].name, b: sites[j].name, q });
      }
    }
  const best = costs.reduce((b, c) => (c.TC < b.TC ? c : b));
  return { costs, crossings, best };
}

// ---------- Factor rating ----------
export function factorRating(weights: number[], scores: number[][]) {
  return scores.map((col) => col.reduce((a, s, i) => a + s * weights[i], 0));
}

// ---------- Transportation problem: NW corner + stepping stone ----------
export type Alloc = (number | null)[][]; // null = empty cell

export function northWest(supply: number[], demand: number[]): Alloc {
  const s = [...supply];
  const d = [...demand];
  const A: Alloc = supply.map(() => demand.map(() => null));
  let i = 0, j = 0;
  while (i < s.length && j < d.length) {
    const q = Math.min(s[i], d[j]);
    A[i][j] = q;
    s[i] -= q;
    d[j] -= q;
    if (s[i] === 0 && i < s.length - 1) i++;
    else if (d[j] === 0) j++;
    else i++;
  }
  return A;
}

export function allocCost(A: Alloc, cost: number[][]) {
  let t = 0;
  A.forEach((r, i) => r.forEach((q, j) => { if (q) t += q * cost[i][j]; }));
  return t;
}

// Find the closed stepping-stone path for empty cell (r,c): alternates row/col moves through occupied cells.
export function findPath(A: Alloc, r: number, c: number): [number, number][] | null {
  const m = A.length, n = A[0].length;
  const occ = (i: number, j: number) => A[i][j] !== null;
  const dfs = (path: [number, number][], horizontal: boolean): [number, number][] | null => {
    const [i, j] = path[path.length - 1];
    if (horizontal) {
      for (let jj = 0; jj < n; jj++) {
        if (jj === j) continue;
        if (path.length >= 3 && i === r && jj === c) return path;
        if (occ(i, jj) && !path.some(([a, b]) => a === i && b === jj)) {
          const res = dfs([...path, [i, jj]], false);
          if (res) return res;
        }
      }
    } else {
      for (let ii = 0; ii < m; ii++) {
        if (ii === i) continue;
        if (path.length >= 3 && ii === r && j === c) return path;
        if (occ(ii, j) && !path.some(([a, b]) => a === ii && b === j)) {
          const res = dfs([...path, [ii, j]], true);
          if (res) return res;
        }
      }
    }
    return null;
  };
  return dfs([[r, c]], true) ?? dfs([[r, c]], false);
}

export function improvementIndices(A: Alloc, cost: number[][]) {
  const out: { i: number; j: number; index: number; path: [number, number][] }[] = [];
  A.forEach((row, i) =>
    row.forEach((q, j) => {
      if (q !== null) return;
      const path = findPath(A, i, j);
      if (!path) return;
      const index = path.reduce((a, [pi, pj], k) => a + (k % 2 === 0 ? 1 : -1) * cost[pi][pj], 0);
      out.push({ i, j, index, path });
    }),
  );
  return out;
}

export function steppingStoneStep(A: Alloc, cost: number[][]) {
  const idx = improvementIndices(A, cost);
  const best = idx.reduce<(typeof idx)[number] | null>((b, c) => (c.index < (b?.index ?? 0) ? c : b), null);
  if (!best) return { A, idx, best: null, moved: 0, done: true };
  const minus = best.path.filter((_, k) => k % 2 === 1);
  const moved = Math.min(...minus.map(([i, j]) => A[i][j] as number));
  const B: Alloc = A.map((r) => [...r]);
  best.path.forEach(([i, j], k) => {
    const cur = B[i][j] ?? 0;
    B[i][j] = cur + (k % 2 === 0 ? moved : -moved);
  });
  // exactly one minus cell that hits zero becomes empty
  let emptied = false;
  best.path.forEach(([i, j], k) => {
    if (k % 2 === 1 && B[i][j] === 0 && !emptied) {
      B[i][j] = null;
      emptied = true;
    }
  });
  return { A: B, idx, best, moved, done: false };
}

// ---------- Facilities vs cost (Chapter 4 qualitative curves) ----------
export function facilityCurves(n: number) {
  const inventory = 40 * Math.sqrt(n); // square-root law
  const facility = 18 * n;
  const inbound = 10 + 6 * n;
  const outbound = 160 / Math.sqrt(n);
  const response = 48 / Math.sqrt(n);
  return { inventory, facility, transport: inbound + outbound, total: inventory + facility + inbound + outbound, response };
}

// ---------- Bullwhip simulation (simple order-up-to with moving-average forecast) ----------
export function bullwhip(demand: number[], stages: number, L: number, window: number, shareInfo: boolean) {
  const orders: number[][] = [demand];
  for (let s = 0; s < stages; s++) {
    const inc = orders[s];
    const sig = shareInfo ? demand : inc;
    const out: number[] = [];
    let prevS = 0;
    for (let t = 0; t < inc.length; t++) {
      const lo = Math.max(0, t - window + 1);
      const slice = sig.slice(lo, t + 1);
      const mean = slice.reduce((a, b) => a + b, 0) / slice.length;
      const sd = Math.sqrt(slice.reduce((a, b) => a + (b - mean) ** 2, 0) / slice.length);
      const S = mean * (L + 1) + 1.0 * sd * Math.sqrt(L + 1);
      const o = t === 0 ? inc[t] : Math.max(0, S - prevS + inc[t]);
      prevS = S;
      out.push(o);
    }
    orders.push(out);
  }
  const variance = (a: number[]) => {
    const m = a.reduce((x, y) => x + y, 0) / a.length;
    return a.reduce((x, y) => x + (y - m) ** 2, 0) / a.length;
  };
  return { orders, variances: orders.map(variance) };
}

// ---------- Capacitated plant location: min-cost allocation for a given set of open plants ----------
// Successive shortest path min-cost flow on the bipartite plant→market graph.
export function minCostAllocation(cap: number[], demand: number[], cost: number[][]) {
  const m = cap.length, n = demand.length;
  const x = cap.map(() => demand.map(() => 0));
  const capLeft = [...cap];
  const dLeft = [...demand];
  const totalD = demand.reduce((a, b) => a + b, 0);
  if (cap.reduce((a, b) => a + b, 0) < totalD - 1e-9) return null;
  // Node ids: plants 0..m-1, markets m..m+n-1
  for (let guard = 0; guard < 10000; guard++) {
    if (dLeft.every((d) => d <= 1e-9)) break;
    // Bellman-Ford from virtual source (edges to plants with capLeft>0, cost 0)
    const N = m + n;
    const dist = new Array(N).fill(Infinity);
    const prev = new Array(N).fill(-1);
    for (let i = 0; i < m; i++) if (capLeft[i] > 1e-9) dist[i] = 0;
    for (let it = 0; it < N; it++) {
      let changed = false;
      for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
          // forward plant i -> market j
          if (dist[i] + cost[i][j] < dist[m + j] - 1e-12) { dist[m + j] = dist[i] + cost[i][j]; prev[m + j] = i; changed = true; }
          // backward market j -> plant i if flow exists
          if (x[i][j] > 1e-9 && dist[m + j] - cost[i][j] < dist[i] - 1e-12) { dist[i] = dist[m + j] - cost[i][j]; prev[i] = m + j; changed = true; }
        }
      if (!changed) break;
    }
    // pick market with remaining demand and min dist
    let best = -1;
    for (let j = 0; j < n; j++) if (dLeft[j] > 1e-9 && dist[m + j] < Infinity && (best < 0 || dist[m + j] < dist[m + best])) best = j;
    if (best < 0) return null;
    // trace path, compute bottleneck
    const path: number[] = [];
    let v = m + best;
    while (v !== -1) { path.push(v); v = prev[v]; }
    path.reverse(); // starts at plant
    let flow = dLeft[best];
    flow = Math.min(flow, capLeft[path[0]]);
    for (let k = 0; k + 1 < path.length; k++) {
      const a = path[k], b = path[k + 1];
      if (a >= m && b < m) flow = Math.min(flow, x[b][a - m]);
    }
    for (let k = 0; k + 1 < path.length; k++) {
      const a = path[k], b = path[k + 1];
      if (a < m && b >= m) x[a][b - m] += flow;
      else x[b][a - m] -= flow;
    }
    capLeft[path[0]] -= flow;
    dLeft[best] -= flow;
  }
  let variable = 0;
  x.forEach((r, i) => r.forEach((q, j) => (variable += q * cost[i][j])));
  return { x, variable };
}

export function cplEvaluate(open: boolean[], f: number[], K: number[], D: number[], c: number[][]) {
  const cap = K.map((k, i) => (open[i] ? k : 0));
  const res = minCostAllocation(cap, D, c);
  if (!res) return null;
  const fixed = f.reduce((a, fi, i) => a + (open[i] ? fi : 0), 0);
  return { ...res, fixed, total: fixed + res.variable };
}

export function cplOptimum(f: number[], K: number[], D: number[], c: number[][]) {
  let best: { open: boolean[]; total: number } | null = null;
  const m = f.length;
  for (let mask = 1; mask < 1 << m; mask++) {
    const open = f.map((_, i) => ((mask >> i) & 1) === 1);
    const r = cplEvaluate(open, f, K, D, c);
    if (r && (!best || r.total < best.total)) best = { open, total: r.total };
  }
  return best;
}

// ---------- k-centre center of gravity (assign each point to nearest centre, iterate) ----------
export function multiCenterOfGravity(pts: { x: number; y: number; Q: number }[], k: number, iters = 50) {
  const sorted = [...pts].sort((a, b) => b.Q - a.Q);
  let centres = sorted.slice(0, k).map((p) => ({ x: p.x, y: p.y }));
  let assign: number[] = pts.map(() => 0);
  for (let t = 0; t < iters; t++) {
    assign = pts.map((p) => {
      let bi = 0;
      centres.forEach((c, i) => { if (Math.hypot(p.x - c.x, p.y - c.y) < Math.hypot(p.x - centres[bi].x, p.y - centres[bi].y)) bi = i; });
      return bi;
    });
    centres = centres.map((c, i) => {
      const g = pts.filter((_, j) => assign[j] === i);
      return g.length ? centerOfGravity(g) : c;
    });
  }
  return { centres, assign };
}
