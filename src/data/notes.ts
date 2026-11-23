const files = import.meta.glob('../../notes/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export const NOTES: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, src]) => [path.split('/').pop()!.replace('.md', ''), src]),
);
