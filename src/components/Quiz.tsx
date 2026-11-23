import { useState } from 'react';
import type { QuizItem } from '../data/questions';

function One({ q, n }: { q: QuizItem; n: number }) {
  const [pick, setPick] = useState<number | null>(null);
  return (
    <div className="quiz-q">
      <div>
        <b>{n}.</b> {q.q}
      </div>
      <div className="opts">
        {q.options.map((o, i) => (
          <button
            key={i}
            className={pick === null ? '' : i === q.answer ? 'right' : i === pick ? 'wrong' : ''}
            onClick={() => setPick(i)}
          >
            {o}
          </button>
        ))}
      </div>
      {pick !== null && <div className="expl">{pick === q.answer ? 'Rigtigt. ' : 'Ikke helt. '}{q.why}</div>}
    </div>
  );
}

export function Quiz({ items }: { items: QuizItem[] }) {
  const [key, setKey] = useState(0);
  if (!items.length) return <p>Ingen quiz til dette spørgsmål endnu.</p>;
  return (
    <div key={key}>
      {items.map((q, i) => (
        <One key={i} q={q} n={i + 1} />
      ))}
      <button className="btn ghost" onClick={() => setKey((k) => k + 1)}>
        Prøv igen
      </button>
    </div>
  );
}
