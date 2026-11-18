// Копіює лише потрібні для публікації файли в dist/ (без node_modules, вихідних конфігів тощо)
import { cpSync, rmSync, mkdirSync, readdirSync, existsSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
for (const f of readdirSync('.')) {
  if (/\.(html|xml|txt)$/.test(f)) cpSync(f, `dist/${f}`);
}
cpSync('assets', 'dist/assets', { recursive: true, filter: (src) => !src.endsWith('input.css') });
if (existsSync('data')) cpSync('data', 'dist/data', { recursive: true });
console.log('dist/ готовий');
