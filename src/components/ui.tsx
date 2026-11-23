import type { ReactNode } from 'react';

export const fmt = (x: number, d = 0) =>
  Number.isFinite(x) ? x.toLocaleString('da-DK', { minimumFractionDigits: d, maximumFractionDigits: d }) : '–';
export const pct = (x: number, d = 1) => fmt(x * 100, d) + ' %';

export function Slider(props: {
  label: ReactNode;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}) {
  return (
    <label className="slider">
      <span>{props.label}</span>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step ?? 1}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
      <span className="v">{props.format ? props.format(props.value) : fmt(props.value, (props.step ?? 1) < 1 ? 2 : 0)}</span>
    </label>
  );
}

export function Num(props: { label: ReactNode; value: number; onChange: (v: number) => void; step?: number }) {
  return (
    <label className="field">
      {props.label}
      <input type="number" value={props.value} step={props.step ?? 'any'} onChange={(e) => props.onChange(Number(e.target.value))} />
    </label>
  );
}

export function Kpi({ items }: { items: { l: ReactNode; n: ReactNode; tone?: 'good' | 'bad' }[] }) {
  return (
    <div className="kpi">
      {items.map((k, i) => (
        <div key={i}>
          <div className="l">{k.l}</div>
          <div className={'n ' + (k.tone ?? '')}>{k.n}</div>
        </div>
      ))}
    </div>
  );
}

// ---------- Minimal SVG line chart ----------
export interface Series {
  name: string;
  color: string;
  points: [number, number][];
  dash?: boolean;
}
export function LineChart(props: {
  series: Series[];
  width?: number;
  height?: number;
  xLabel?: string;
  yLabel?: string;
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  markers?: { x: number; label?: string; color?: string }[];
  dots?: { x: number; y: number; color?: string; label?: string }[];
  fmtX?: (v: number) => string;
  fmtY?: (v: number) => string;
}) {
  const W = props.width ?? 640, H = props.height ?? 300;
  const m = { l: 62, r: 16, t: 12, b: 40 };
  const all = props.series.flatMap((s) => s.points);
  const xMin = props.xMin ?? Math.min(...all.map((p) => p[0]));
  const xMax = props.xMax ?? Math.max(...all.map((p) => p[0]));
  const yMin = props.yMin ?? Math.min(0, ...all.map((p) => p[1]));
  const yMax = props.yMax ?? Math.max(...all.map((p) => p[1])) * 1.05;
  const sx = (x: number) => m.l + ((x - xMin) / (xMax - xMin || 1)) * (W - m.l - m.r);
  const sy = (y: number) => H - m.b - ((y - yMin) / (yMax - yMin || 1)) * (H - m.t - m.b);
  const ticks = (a: number, b: number, n = 5) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
  const fx = props.fmtX ?? ((v: number) => fmt(v));
  const fy = props.fmtY ?? ((v: number) => fmt(v));
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W }}>
        {ticks(yMin, yMax).map((t, i) => (
          <g key={i}>
            <line x1={m.l} x2={W - m.r} y1={sy(t)} y2={sy(t)} stroke="#eceff3" />
            <text x={m.l - 6} y={sy(t) + 4} fontSize="11" textAnchor="end" fill="#5b6577">
              {fy(t)}
            </text>
          </g>
        ))}
        {ticks(xMin, xMax).map((t, i) => (
          <text key={i} x={sx(t)} y={H - m.b + 16} fontSize="11" textAnchor="middle" fill="#5b6577">
            {fx(t)}
          </text>
        ))}
        <line x1={m.l} x2={W - m.r} y1={H - m.b} y2={H - m.b} stroke="#9aa3b2" />
        <line x1={m.l} x2={m.l} y1={m.t} y2={H - m.b} stroke="#9aa3b2" />
        {props.xLabel && (
          <text x={(W + m.l) / 2} y={H - 6} fontSize="12" textAnchor="middle" fill="#1d2433">
            {props.xLabel}
          </text>
        )}
        {props.yLabel && (
          <text x={12} y={(H - m.b) / 2} fontSize="12" textAnchor="middle" fill="#1d2433" transform={`rotate(-90 12 ${(H - m.b) / 2})`}>
            {props.yLabel}
          </text>
        )}
        {props.markers?.map((mk, i) => (
          <g key={i}>
            <line x1={sx(mk.x)} x2={sx(mk.x)} y1={m.t} y2={H - m.b} stroke={mk.color ?? '#9aa3b2'} strokeDasharray="4 3" />
            {mk.label && (
              <text x={sx(mk.x) + 4} y={m.t + 12 + i * 14} fontSize="11" fill={mk.color ?? '#5b6577'}>
                {mk.label}
              </text>
            )}
          </g>
        ))}
        {props.series.map((s, i) => (
          <polyline
            key={i}
            fill="none"
            stroke={s.color}
            strokeWidth={2.2}
            strokeDasharray={s.dash ? '6 4' : undefined}
            points={s.points.map((p) => `${sx(p[0])},${sy(p[1])}`).join(' ')}
          />
        ))}
        {props.dots?.map((d, i) => (
          <g key={i}>
            <circle cx={sx(d.x)} cy={sy(d.y)} r={5} fill={d.color ?? '#1d2433'} />
            {d.label && (
              <text x={sx(d.x) + 8} y={sy(d.y) - 8} fontSize="11" fill={d.color ?? '#1d2433'}>
                {d.label}
              </text>
            )}
          </g>
        ))}
      </svg>
      <div className="legend">
        {props.series.map((s) => (
          <span key={s.name} style={{ ['--c' as string]: s.color }}>
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export const range = (a: number, b: number, n: number) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
