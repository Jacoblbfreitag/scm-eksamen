import { useEffect, useRef, useState } from 'react';

const PHASES = [
  { until: 2, label: 'Åbning: definér emnet og sig, hvad du vil gennemgå' },
  { until: 8, label: 'Teori: begreber, figur og formler' },
  { until: 12, label: 'Eksempel: regn tallene igennem' },
  { until: 15, label: 'Perspektiv: begrænsninger, kobling til andre emner, konklusion' },
];

export function Timer({ minutes = 15 }: { minutes?: number }) {
  const [left, setLeft] = useState(minutes * 60);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => setLeft((l) => l - 1), 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running]);

  const used = minutes * 60 - left;
  const usedMin = used / 60;
  const phase = PHASES.find((p) => usedMin < p.until) ?? PHASES[PHASES.length - 1];
  const abs = Math.abs(left);
  const mm = String(Math.floor(abs / 60)).padStart(2, '0');
  const ss = String(abs % 60).padStart(2, '0');

  return (
    <div>
      <div className={'timer' + (left < 0 ? ' late' : '')}>
        {left < 0 ? '+' : ''}
        {mm}:{ss}
      </div>
      <div className="timer-bar">
        <div style={{ width: `${Math.min(100, (used / (minutes * 60)) * 100)}%` }} />
      </div>
      <div className="phase">{left < 0 ? 'Tiden er gået, så afrund nu.' : phase.label}</div>
      <div className="row" style={{ marginTop: 10 }}>
        <button className="btn" onClick={() => setRunning((r) => !r)}>
          {running ? 'Pause' : used > 0 ? 'Fortsæt' : 'Start'}
        </button>
        <button
          className="btn ghost"
          onClick={() => {
            setRunning(false);
            setLeft(minutes * 60);
          }}
        >
          Nulstil
        </button>
      </div>
    </div>
  );
}
