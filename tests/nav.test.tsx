// @vitest-environment jsdom
import { it } from 'vitest';
import { render, fireEvent, act } from '@testing-library/react';
import App from '../src/App';
import { QUESTIONS } from '../src/data/questions';

it('navigates between all pages without crashing', async () => {
  window.scrollTo = (() => Promise.resolve()) as unknown as typeof window.scrollTo; // mimic Chromium
  const errors: unknown[] = [];
  const orig = console.error;
  console.error = (...a: unknown[]) => { errors.push(a[0]); };
  const r = render(<App />);
  for (const q of [...QUESTIONS, QUESTIONS[0]]) {
    const link = [...r.container.querySelectorAll('aside a')].find((a) => a.textContent?.includes(q.id + ' ' + q.title))!;
    await act(async () => { fireEvent.click(link); });
    if (!r.container.querySelector('main h1')) { console.error = orig; throw new Error('blank after ' + q.id + ' ' + String(errors[0]).slice(0, 400)); }
  }
  console.error = orig;
  if (errors.length) throw new Error(String(errors[0]).slice(0, 600));
});
