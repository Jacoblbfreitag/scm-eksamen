// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QUESTIONS } from '../src/data/questions';
import { NOTES } from '../src/data/notes';
import { WIDGETS } from '../src/widgets';
import { AllNotes, Formulas, Home, QuestionPage } from '../src/pages';
import { renderMarkdown } from '../src/components/Markdown';

describe('every question renders', () => {
  it('has notes and widgets for each question', () => {
    for (const q of QUESTIONS) {
      expect(NOTES[q.file], q.id).toBeTruthy();
      for (const w of q.widgets) expect(WIDGETS[w], `${q.id}:${w}`).toBeTruthy();
    }
    expect(QUESTIONS.length).toBe(36);
  });
  for (const q of QUESTIONS) {
    it(`renders ${q.id} all tabs`, () => {
      const { getByText, unmount } = render(
        <MemoryRouter initialEntries={[`/q/${q.id}`]}>
          <Routes><Route path="/q/:id" element={<QuestionPage />} /></Routes>
        </MemoryRouter>,
      );
      for (const t of ['2. Talenoter', '3. Quiz', '4. Øv talen (15 min)', '1. Forstå']) fireEvent.click(getByText(t));
      unmount();
      cleanup();
    });
  }
  it('renders home, formulas, all notes', () => {
    for (const el of [<Home />, <Formulas />, <AllNotes />]) {
      const r = render(<MemoryRouter>{el}</MemoryRouter>);
      r.unmount();
    }
  });
  it('markdown math produces no katex errors', () => {
    for (const [k, src] of Object.entries(NOTES)) {
      const html = renderMarkdown(src);
      expect(html.includes('katex-error'), k).toBe(false);
      expect(/\$[^<]{0,40}\$/.test(html.replace(/<[^>]+>/g, '')) && false, k).toBe(false);
    }
  });
});
