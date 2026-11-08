// Lists every <Todo> placeholder and null setting left before launch.
// Usage: npm run todos
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../src', import.meta.url).pathname;
const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx?|css)$/.test(name)) {
      readFileSync(p, 'utf8')
        .split('\n')
        .forEach((line, i) => {
          const m = line.match(/<Todo>(.*?)<\/Todo>/g);
          if (m) m.forEach((t) => hits.push(`${p.replace(root, 'src')}:${i + 1}  ${t.replace(/<\/?Todo>/g, '')}`));
          if (/:\s*null as string \| null/.test(line)) hits.push(`${p.replace(root, 'src')}:${i + 1}  (optional) ${line.trim()}`);
        });
    }
  }
}

walk(root);
console.log(hits.length ? hits.join('\n') : 'No placeholders left.');
