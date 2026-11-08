# Fools Flagon portfolio

The studio and portfolio site for Fools Flagon (Evan Roberts). Vite + React + TypeScript + Ant Design.

Each case study has a **Design / Engineering** toggle that flips the chapters like cards. The view is in the URL, so you can link straight to one side: `/work/victual?view=engineering`.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run todos      # list every placeholder still on the site
```

## Where things live

| What | Where |
| --- | --- |
| Email, LinkedIn, resume, contact form, price line | `src/config/site.ts` |
| Demo and store links | `src/content/links.ts` |
| Project cards (Home + Work) | `src/content/projects.ts` |
| Case studies | `src/content/victual.tsx`, `src/content/sofron.tsx` |
| Services | `src/content/services.ts` |
| Brand colors (Ant Design theme) | `src/theme.ts`, `src/styles/global.css` |
| Images | `public/images/...` |

**Images:** every image uses the `Shot` component. Until a file exists it shows a dashed placeholder with the exact path it expects. Drop the file at that path and it appears, no code change needed.

**Placeholders:** text still to write is wrapped in `<Todo>` and shows as a dashed gold box. `npm run todos` lists them all. Clear the list before launch.

## Adding a case study

1. Copy `src/content/sofron.tsx`, change the content and chapters.
2. Add it to `caseStudies` and `projects` in `src/content/projects.ts`.
3. It's live at `/work/<slug>`.

## Deploying (Vercel)

1. Import this repo at vercel.com/new. It detects Vite: build `npm run build`, output `dist`.
2. `vercel.json` already sends every route to `index.html`, so deep links like `/work/sofron` work.
3. Add your domain under Project → Settings → Domains and follow the DNS steps.
