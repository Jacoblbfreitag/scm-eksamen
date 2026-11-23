import { useMemo } from 'react';
import { marked } from 'marked';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Render markdown with $inline$ and $$display$$ math. "\$" is a literal dollar sign.
export function renderMarkdown(src: string): string {
  const math: string[] = [];
  const DOLLAR = '\u0000D\u0000';
  let s = src.replace(/\\\$/g, DOLLAR);
  const stash = (tex: string, display: boolean) => {
    const html = katex.renderToString(tex.replace(new RegExp(DOLLAR, 'g'), '\\$'), { displayMode: display, throwOnError: false });
    math.push(html);
    return `\u0000M${math.length - 1}\u0000`;
  };
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => stash(t, true));
  s = s.replace(/\$([^$\n]+?)\$/g, (_, t) => stash(t, false));
  let html = marked.parse(s, { async: false, gfm: true }) as string;
  html = html.replace(/\u0000M(\d+)\u0000/g, (_, i) => math[Number(i)]);
  html = html.replace(new RegExp(DOLLAR, 'g'), '$');
  // checkboxes from task lists are disabled by marked; keep them clickable-looking only
  return html;
}

export function Markdown({ src }: { src: string }) {
  const html = useMemo(() => renderMarkdown(src), [src]);
  return <div className="md" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Tex({ children, display = false }: { children: string; display?: boolean }) {
  const html = useMemo(() => katex.renderToString(children, { displayMode: display, throwOnError: false }), [children, display]);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
