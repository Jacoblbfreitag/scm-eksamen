import { useEffect, useState } from 'react';
import { HashRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { QUESTIONS, TOPICS } from './data/questions';
import { useProgress } from './data/progress';
import { AllNotes, Formulas, Home, QuestionPage } from './pages';


function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Sidebar({ open, close }: { open: boolean; close: () => void }) {
  const [prog] = useProgress();
  return (
    <aside className={'sidebar' + (open ? ' open' : '')} onClick={close}>
      <NavLink to="/" className="brand">SCM eksamen · 62133</NavLink>
      <div className="sub">36 spørgsmål · talenoter · beregnere</div>
      <nav>
        <NavLink to="/" end>🏠 Start og træk spørgsmål</NavLink>
        <NavLink to="/formler">∑ Formelsamling</NavLink>
        <NavLink to="/noter">📄 Alle talenoter (print)</NavLink>
        {Object.entries(TOPICS).map(([t, name]) => (
          <div key={t}>
            <div className="topic">{t}. {name}</div>
            {QUESTIONS.filter((q) => q.topic === Number(t)).map((q) => (
              <NavLink key={q.id} to={`/q/${q.id}`}>
                <span className={'dot l' + (prog[q.id] ?? 0)} />
                {q.id} {q.title}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <HashRouter>
      <ScrollTop />
      <div className="app">
        <button className="btn menu-btn" onClick={() => setOpen(!open)}>☰</button>
        <Sidebar open={open} close={() => setOpen(false)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/q/:id" element={<QuestionPage />} />
            <Route path="/formler" element={<Formulas />} />
            <Route path="/noter" element={<AllNotes />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
