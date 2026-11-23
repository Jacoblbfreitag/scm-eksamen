// Concatenate all talenoter into one TALENOTER.md (for reading/printing outside the app).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
const files = readdirSync('notes').filter((f) => f.endsWith('.md')).sort();
const head = `# Talenoter – 62133 Supply Chain Management\n\nØvenoter til hvert eksamensspørgsmål (15 min). Genereret fra \`notes/\`. Tjek tal mod din udgave af Chopra & Meindl.\n\n## Indhold\n\n${files.map((f) => '- ' + readFileSync('notes/' + f, 'utf8').split('\n')[0].replace(/^# /, '')).join('\n')}\n\n---\n\n`;
writeFileSync('TALENOTER.md', head + files.map((f) => readFileSync('notes/' + f, 'utf8').trim()).join('\n\n---\n\n') + '\n');
console.log(`TALENOTER.md: ${files.length} noter`);
