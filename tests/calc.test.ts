import { describe, expect, it } from 'vitest';
import * as c from '../src/lib/calc';

describe('textbook examples', () => {
  it('Ex 11-3/11-4 joint ordering (Best Buy)', () => {
    const items = [
      { D: 12000, C: 500, s: 1000 },
      { D: 1200, C: 500, s: 1000 },
      { D: 120, C: 500, s: 1000 },
    ];
    const sep = c.separateOrdering(items, 4000, 0.2);
    expect(sep.total).toBeCloseTo(155140, -2);
    const j = c.jointOrdering(items, 4000, 0.2);
    expect(j.n).toBeCloseTo(9.75, 2);
    expect(j.Q[0]).toBeCloseTo(1230, -1);
    expect(j.total).toBeCloseTo(136528, -2);
  });

  it('Ex 11-5 aggregation with capacity', () => {
    const r = c.aggregationWithCapacity(4, 120000, 50, 0.2, 400, 100, 2500);
    expect(r.nFree).toBeCloseTo(54.77, 1);
    expect(r.binding).toBe(true);
    expect(r.n).toBeCloseTo(192, 5);
    expect(r.Qper).toBeCloseTo(625, 5);
    expect(r.total).toBeCloseTo(166100, 0);
  });

  it('Ex 11-7 all-unit discount (Drugs Online)', () => {
    const r = c.allUnitDiscount(120000, 100, 0.2, [
      { q: 0, price: 3 },
      { q: 5000, price: 2.96 },
      { q: 10000, price: 2.92 },
    ]);
    expect(r.best).toBe(2);
    expect(r.cands[2].Q).toBe(10000);
    expect(r.cands[2].TC).toBeCloseTo(354520, 0);
    expect(r.cands[1].TC).toBeCloseTo(358969, -1);
  });

  it('Ex 11-9 lot-size coordination', () => {
    const r = c.lotSizeCoordination(120000, 100, 250, 0.6, 0.4);
    expect(r.Qr).toBeCloseTo(6325, -1);
    expect(r.Qsc).toBeCloseTo(9165, -1);
    expect(r.before.total).toBeCloseTo(9803, -1);
    expect(r.after.total).toBeCloseTo(9165, -1);
    expect(3 - r.discountPerUnit).toBeCloseTo(2.9978, 3);
  });

  it('Ex 11-10 volume coordination', () => {
    const r = c.volumeCoordination(360000, 60000, 2);
    expect(r.CR).toBeCloseTo(4);
    expect(r.p).toBeCloseTo(5);
    expect(r.seqTotal).toBeCloseTo(180000);
    expect(r.pStar).toBeCloseTo(4);
    expect(r.scProfit).toBeCloseTo(240000);
    expect(r.discPrice).toBeCloseTo(3.5);
  });

  it('Ex 12-3 safety stock', () => {
    const r = c.safetyStockContinuous(2500, 500, 2, 0.9);
    expect(r.sigmaL).toBeCloseTo(707.1, 0);
    expect(r.ss).toBeCloseTo(906, 0);
  });

  it('Ex 13-1 newsvendor', () => {
    const r = c.newsvendor(250, 100, 80, 350, 100);
    expect(r.csl).toBeCloseTo(0.882, 3);
    expect(r.O).toBeCloseTo(468, -1);
  });

  it('center of gravity (Quain)', () => {
    const r = c.centerOfGravity([
      { x: 30, y: 120, Q: 2000 },
      { x: 90, y: 110, Q: 1000 },
      { x: 130, y: 130, Q: 1000 },
      { x: 60, y: 40, Q: 2000 },
    ]);
    expect(r.x).toBeCloseTo(66.7, 1);
    expect(r.y).toBeCloseTo(93.3, 1);
  });

  it('break-even', () => {
    const r = c.breakEven(
      [
        { name: 'Akron', F: 30000, v: 75 },
        { name: 'Bowling Green', F: 60000, v: 45 },
        { name: 'Chicago', F: 110000, v: 25 },
      ],
      2000,
    );
    expect(r.best.name).toBe('Bowling Green');
    expect(r.crossings.find((x) => x.a === 'Akron' && x.b === 'Bowling Green')!.q).toBeCloseTo(1000);
    expect(r.crossings.find((x) => x.a === 'Bowling Green' && x.b === 'Chicago')!.q).toBeCloseTo(2500);
  });

  it('factor rating', () => {
    const r = c.factorRating([0.25, 0.05, 0.1, 0.39, 0.21], [
      [70, 50, 85, 75, 60],
      [60, 60, 80, 70, 70],
    ]);
    expect(r[0]).toBeCloseTo(70.35);
    expect(r[1]).toBeCloseTo(68.0);
  });

  it('stepping stone reaches 3900 (Arizona Plumbing)', () => {
    const cost = [
      [5, 4, 3],
      [8, 4, 3],
      [9, 7, 5],
    ];
    let A = c.northWest([100, 300, 300], [300, 200, 200]);
    expect(c.allocCost(A, cost)).toBe(4200);
    const s1 = c.steppingStoneStep(A, cost);
    expect(s1.best!.index).toBe(-2);
    A = s1.A;
    expect(c.allocCost(A, cost)).toBe(4000);
    const s2 = c.steppingStoneStep(A, cost);
    A = s2.A;
    expect(c.allocCost(A, cost)).toBe(3900);
    expect(c.steppingStoneStep(A, cost).done).toBe(true);
  });

  it('normal helpers', () => {
    expect(c.normInv(0.9)).toBeCloseTo(1.2816, 3);
    expect(c.normCdf(1.96)).toBeCloseTo(0.975, 3);
  });

  it('gravity iterates downhill', () => {
    const pts = [
      { name: 'Buffalo', x: 700, y: 1200, D: 500, F: 0.9 },
      { name: 'Memphis', x: 250, y: 600, D: 300, F: 0.95 },
      { name: 'St. Louis', x: 225, y: 825, D: 700, F: 0.85 },
      { name: 'Atlanta', x: 600, y: 500, D: 225, F: 1.5 },
      { name: 'Boston', x: 1050, y: 1200, D: 150, F: 1.5 },
      { name: 'Jacksonville', x: 800, y: 300, D: 250, F: 1.5 },
      { name: 'Philadelphia', x: 925, y: 975, D: 175, F: 1.5 },
      { name: 'New York', x: 1000, y: 1080, D: 300, F: 1.5 },
    ];
    const r = c.gravityIterate(pts);
    expect(r.tc).toBeLessThanOrEqual(r.path[0].tc);
    console.log('gravity', r.x.toFixed(1), r.y.toFixed(1), r.tc.toFixed(0), 'start', r.path[0]);
  });
});

describe('CPL', () => {
  it('allocates at min cost and respects capacity', () => {
    const r = c.minCostAllocation([100, 300, 300], [300, 200, 200], [
      [5, 4, 3],
      [8, 4, 3],
      [9, 7, 5],
    ]);
    expect(r!.variable).toBe(3900);
  });
  it('enumerates open sets', () => {
    const best = c.cplOptimum([1000, 1000, 100], [500, 500, 500], [300, 300], [
      [1, 1],
      [1, 1],
      [2, 2],
    ]);
    expect(best!.total).toBe(1800);
  });
});
