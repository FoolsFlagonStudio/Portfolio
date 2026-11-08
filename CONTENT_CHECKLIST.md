# Content checklist

Everything the site still needs. Drop images at the exact paths below and they appear automatically. Run `npm run todos` to see what text is left.

## Screenshots

Same setup for every shot: 1440×900 browser window, 100% zoom, no bookmarks bar or dev tools, exported at 2x if you can, PNG. Seed the demo with believable data first.

### Sofron (live demo) → `public/images/sofron/`

| File | What to capture |
| --- | --- |
| `dashboard.png` | Clinic dashboard (hero and the project card) |
| `booking-datetime.png` | Patient booking, the date + time step, with the "Your appointment" card visible |
| `booking-mobile.png` | The booking flow at phone width (~390px) |
| `scheduling.png` | Weekly hours + overrides screen |
| `appointments.png` | Appointments table with the details panel open |
| `template-editor.png` | Intake form template editor |
| `analytics-1.png`, `analytics-2.png` | Two analytics chart cards |
| `wireframe-shell.png` | Side by side: the Figma shell wireframe next to the built page |
| `wordmark.svg` | Real Sofron wordmark, exported from Figma (light version, for the dark site) |

Nice to have: the "slot just taken" error state, if you can trigger it.

### Victual → `public/images/victual/`

Already in: home, plan, groceries and recipe screens, plus the logo files.

| File | What to capture |
| --- | --- |
| `onboarding-budget.png` | Onboarding, budget step |
| `onboarding-household.png` | Onboarding, household step |
| `onboarding-diets.png` | Onboarding, diets step |
| `onboarding-review.png` | Onboarding, review step |
| `onboarding-building.png` | "Building your plan" screen |

Phone screenshots or Figma frame exports both work.

### EdgeForge → `public/images/edgeforge/`

| File | What to capture |
| --- | --- |
| `cover.png` | One screen for the "coming soon" card (4:3 crop looks best) |

### About → `public/images/about/`

| File | What to capture |
| --- | --- |
| `evan.jpg` | A photo of you, portrait orientation |

## Text and numbers

### Victual (`src/content/victual.tsx`)
- Timeline (start and end month)
- Package parser output for "3 lb", "1/2 gal", "12 x 12 fl oz" (or swap in examples you like)
- What you learned (one or two sentences)

### Sofron (`src/content/sofron.tsx`)
- How double booking is prevented (transaction + lock, DB constraint, etc.)
- Role names and what each can see (two or more)
- Number of automated tests
- Number of API endpoints
- What you learned
- Demo URL → `src/content/links.ts` (`sofronDemo`)

### About (`src/pages/About.tsx`)
- A few sentences in your own voice

### Settings (`src/config/site.ts`)
- Confirm email (`evan@foolsflagon.com`) and LinkedIn
- Resume: put it at `public/resume.pdf`, set `resumeUrl: '/resume.pdf'`
- Optional: Formspree endpoint for the contact form (without one, the form opens the visitor's email app)
- Optional: a "projects typically start at" line

### Links (`src/content/links.ts`)
- EdgeForge URL, if you want the card to link out
- Victual Play Store link, once it's public

## Before you deploy
- [ ] `npm run todos` comes back empty (optional settings can stay null)
- [ ] `npm run build` passes
- [ ] Click through every page on your phone
