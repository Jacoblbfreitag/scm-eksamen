import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { QUESTIONS, TOPICS, byId } from './data/questions';
import { NOTES } from './data/notes';
import { LEVELS, useProgress } from './data/progress';
import { Markdown } from './components/Markdown';
import { Quiz } from './components/Quiz';
import { Timer } from './components/Timer';
import { WIDGETS } from './widgets';

export function Home() {
  const nav = useNavigate();
  const [prog] = useProgress();
  const [onlyWeak, setOnlyWeak] = useState(false);
  const counts = [0, 1, 2, 3].map((l) => QUESTIONS.filter((q) => (prog[q.id] ?? 0) === l).length);
  const draw = () => {
    const pool = onlyWeak ? QUESTIONS.filter((q) => (prog[q.id] ?? 0) < 3) : QUESTIONS;
    const pick = pool[Math.floor(Math.random() * pool.length)] ?? QUESTIONS[0];
    nav(`/q/${pick.id}?tab=tale`);
  };
  return (
    <div>
      <h1>62133 Supply Chain Management: eksamenstræning</h1>
      <p>
        Én side pr. eksamensspørgsmål med <b>forklaring fra bunden</b>, <b>interaktive beregnere</b>, <b>talenoter</b> til de 15 minutter og en <b>quiz</b>.
        Øv dig ved at trække et spørgsmål, starte timeren og holde oplægget højt.
      </p>
      <div className="panel">
        <h3>Træk et spørgsmål</h3>
        <div className="row">
          <button className="btn" onClick={draw}>🎲 Træk tilfældigt</button>
          <label className="row"><input type="checkbox" checked={onlyWeak} onChange={(e) => setOnlyWeak(e.target.checked)} /> Kun spørgsmål, der ikke "sidder" endnu</label>
        </div>
        <p className="phase">Status: {LEVELS.map((l, i) => `${l}: ${counts[i]}`).join(' · ')}</p>
      </div>
      <div className="warn">
        <b>Om kilderne:</b> Indholdet bygger på Chopra &amp; Meindl, <i>Supply Chain Management</i> (7. udg.) og Heizer &amp; Render, "Location Decisions". Bogens eksempler er genberegnet og tjekket, men <b>tjek tallene mod din egen udgave</b>. Faulkswagon-casen (emne 12) og artiklerne i emne 11 har jeg ikke haft adgang til, så de sider er skabeloner, hvor du selv skal indsætte casens tal.
      </div>
      {Object.entries(TOPICS).map(([t, name]) => (
        <div key={t} className="panel">
          <h3>{t}. {name}</h3>
          <ul>
            {QUESTIONS.filter((q) => q.topic === Number(t)).map((q) => (
              <li key={q.id}>
                <Link to={`/q/${q.id}`}>{q.id} {q.title}</Link> <span className="phase">· {LEVELS[prog[q.id] ?? 0]}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function QuestionPage() {
  const { id } = useParams();
  const q = byId(id ?? '');
  const params = new URLSearchParams(window.location.hash.split('?')[1] ?? '');
  const [tab, setTab] = useState<string>(params.get('tab') ?? 'laer');
  const [prog, setProg] = useProgress();
  if (!q) return <p>Spørgsmål ikke fundet.</p>;
  const idx = QUESTIONS.indexOf(q);
  const prev = QUESTIONS[idx - 1], next = QUESTIONS[idx + 1];
  return (
    <div key={q.id}>
      <div className="phase">{q.topic}. {TOPICS[q.topic]}</div>
      <h1 style={{ marginTop: 4 }}>{q.id} {q.title}</h1>
      <p className="exam-q">“{q.exam}”</p>
      {q.caseSpecific && <div className="warn">Casen er kursusspecifik. Siden giver metoden og en skabelon, så indsæt casens egne tal.</div>}
      <div className="row conf">
        <span className="phase">Hvor godt sidder det?</span>
        {LEVELS.map((l, i) => (
          <button key={l} className={(prog[q.id] ?? 0) === i ? 'on' : ''} onClick={() => setProg(q.id, i)}>{l}</button>
        ))}
      </div>
      <div className="tabs">
        {[['laer', '1. Forstå'], ['noter', '2. Talenoter'], ['quiz', '3. Quiz'], ['tale', '4. Øv talen (15 min)']].map(([k, l]) => (
          <button key={k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>
      {tab === 'laer' && (
        <div>
          <div className="intuition"><Markdown src={'**Intuition:** ' + q.intuition} /></div>
          {q.widgets.map((w) => {
            const W = WIDGETS[w];
            if (!W) return null;
            return (
              <div key={w} className="panel">
                <h3 style={{ marginTop: 0 }}>{W.title}</h3>
                <W.C />
              </div>
            );
          })}
          <p>Næste skridt: læs <a href="#" onClick={(e) => { e.preventDefault(); setTab('noter'); }}>talenoterne</a>, og test dig selv i quizzen.</p>
        </div>
      )}
      {tab === 'noter' && <div className="panel"><Markdown src={NOTES[q.file] ?? 'Noter mangler.'} /></div>}
      {tab === 'quiz' && <div className="panel"><Quiz items={q.quiz} /></div>}
      {tab === 'tale' && (
        <div className="grid2">
          <div className="panel">
            <Timer />
            <p className="phase" style={{ marginTop: 14 }}>Hold oplægget højt uden at kigge i noterne. Bagefter kan du sammenligne med noterne og markere, hvor godt det sad.</p>
          </div>
          <div className="panel">
            <h4 style={{ marginTop: 0 }}>Stikord (kun overskrifter)</h4>
            <Markdown src={(NOTES[q.file] ?? '').split('\n').filter((l) => /^(#|> \*\*Kernebudskab|\*\*Tidsplan)/.test(l)).join('\n\n')} />
          </div>
        </div>
      )}
      <div className="row" style={{ justifyContent: 'space-between', marginTop: 24 }}>
        {prev ? <Link className="btn ghost" to={`/q/${prev.id}`}>← {prev.id} {prev.title}</Link> : <span />}
        {next ? <Link className="btn ghost" to={`/q/${next.id}`}>{next.id} {next.title} →</Link> : <span />}
      </div>
    </div>
  );
}

export function AllNotes() {
  return (
    <div>
      <div className="noprint row">
        <h1>Alle talenoter</h1>
        <button className="btn" onClick={() => window.print()}>Print / gem som PDF</button>
      </div>
      {QUESTIONS.map((q) => (
        <div key={q.id} className="panel">
          <Markdown src={NOTES[q.file] ?? ''} />
        </div>
      ))}
    </div>
  );
}

const FORMULAS = `
# Formelsamling

## DuPont (kap. 3)
$$ROE = ROA\\times \\frac{Assets}{Equity},\\qquad ROA=\\frac{NI}{Sales}\\times\\frac{Sales}{Assets}$$
Inventory turns = COGS / gns. lager · Little's law: $I = D\\cdot T$

## Gravity-modellen (5.5, 5.6)
$$d_n=\\sqrt{(x-x_n)^2+(y-y_n)^2},\\qquad TC=\\sum_n d_nD_nF_n$$
$$x=\\frac{\\sum D_nF_nx_n/d_n}{\\sum D_nF_n/d_n},\\qquad y=\\frac{\\sum D_nF_ny_n/d_n}{\\sum D_nF_n/d_n}$$

## Capacitated plant location
$$\\min \\sum_i f_iy_i+\\sum_i\\sum_j c_{ij}x_{ij}\\ \\text{ s.t. } \\sum_i x_{ij}=D_j,\\ \\sum_j x_{ij}\\le K_iy_i,\\ y_i\\in\\{0,1\\}$$

## Location decisions (Heizer & Render)
- Break-even: $TC_i=F_i+v_iQ$, skæring $Q=\\dfrac{F_2-F_1}{v_1-v_2}$
- Factor rating: $\\sum_i w_is_i$ med $\\sum w_i=1$
- Center of gravity: $C_x=\\dfrac{\\sum x_iQ_i}{\\sum Q_i},\\ C_y=\\dfrac{\\sum y_iQ_i}{\\sum Q_i}$

## Cycle inventory (kap. 11)
$$Q^*=\\sqrt{\\frac{2DS}{hC}},\\qquad TC=\\frac{D}{Q}S+\\frac{Q}{2}hC\\ (+DC)$$
Joint ordering: $S^*=S+\\sum s_i$, $n^*=\\sqrt{\\dfrac{\\sum D_ihC_i}{2S^*}}$, $Q_i=D_i/n^*$

Med kapacitet $K$: hvis $\\sum Q_i>K$, så $n=\\sum D_i/K$

All-unit: $Q_i=\\sqrt{2DS/hC_i}$, hæv til $q_i$ eller spring over. $TC_i=\\frac{D}{Q}S+\\frac{Q}{2}hC_i+DC_i$

Marginal unit: $Q_i=\\sqrt{\\dfrac{2D(S+V_i-q_iC_i)}{hC_i}}$

Koordinering (11-9): $Q^*=\\sqrt{\\dfrac{2D(S_R+S_M)}{h_R+h_M}}$

## Safety inventory (kap. 12)
$$\\sigma_L=\\sqrt{L}\\,\\sigma_D,\\quad ss=F_S^{-1}(CSL)\\,\\sigma_L,\\quad ROP=D_L+ss$$
Periodic: $\\sigma_{T+L}=\\sqrt{T+L}\\,\\sigma_D$, $OUL=D_{T+L}+ss$

$$ESC=-ss\\left[1-F_S\\!\\left(\\tfrac{ss}{\\sigma_L}\\right)\\right]+\\sigma_Lf_S\\!\\left(\\tfrac{ss}{\\sigma_L}\\right),\\qquad fr=1-\\frac{ESC}{Q}$$
Usikker lead time: $\\sigma_L=\\sqrt{L\\sigma_D^2+D^2s_L^2}$ · Aggregering: $\\sigma^C=\\sqrt{n}\\,\\sigma$

## Product availability (kap. 13)
$$C_o=c-s,\\quad C_u=p-c,\\quad CSL^*=\\frac{C_u}{C_u+C_o},\\quad O^*=\\mu+F_S^{-1}(CSL^*)\\sigma$$

## Nyttige z-værdier
| CSL | 50 % | 80 % | 88 % | 90 % | 95 % | 97,5 % | 99 % |
|---|---|---|---|---|---|---|---|
| z | 0 | 0,84 | 1,18 | 1,28 | 1,64 | 1,96 | 2,33 |
`;

export function Formulas() {
  return <div className="panel"><Markdown src={FORMULAS} /></div>;
}
