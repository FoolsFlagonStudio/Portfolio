# Content checklist

What's left before (or after) launch. `npm run todos` lists anything still marked in the code.

## Optional, add when you have them
- [ ] **Your photo** → `public/images/about/evan.jpg` (portrait). Shows on Home and About.
- [ ] **Resume** → `public/resume.pdf`, then set `resumeUrl: '/resume.pdf'` in `src/config/site.ts`. Adds download buttons on About and in the footer.
- [ ] **Sofron demo URL** → `sofronDemo` in `src/content/links.ts`. Adds a "Try the demo" button to the Sofron case study.
- [ ] **Victual store link** → `victualPlayStore` in `src/content/links.ts`, once it's public.
- [ ] **"Projects start at" line** → `startingPrice` in `src/config/site.ts`, once you've set rates.
- [ ] **Sofron: what you learned**, if you want a line like Victual has (`statsNote` in `src/content/sofron.tsx`).

## Later
- [ ] EdgeForge case study (copy `src/content/sofron.tsx`, add it to `src/content/projects.ts`)
- [ ] Re-take the Victual groceries screenshot once the apple → apple juice match is fixed, then swap it in for `public/images/victual/groceries.webp`

## Contact form (Vercel environment variables)
The form sends through `api/contact.ts` using Resend. Until these are set, it falls back to opening the visitor's email app, so no message is lost either way.

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | A Resend API key |
| `CONTACT_TO` | `evan@foolsflagon.com` |
| `CONTACT_FROM` | A sender on a domain verified in Resend, e.g. `Fools Flagon <contact@foolsflagon.com>` |

## Before you deploy
- [ ] `npm run build` passes
- [ ] Click through every page on your phone
