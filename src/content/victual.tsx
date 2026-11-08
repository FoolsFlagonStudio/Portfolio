import type { CaseStudy } from '../case-study/types';
import { ButtonLink, Shot, Todo } from '../components/bits';

const img = (name: string) => `/images/victual/${name}`;

const lock = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="11" x="3" y="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const swap = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m17 2 4 4-4 4" />
    <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" />
    <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  </svg>
);
const regen = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);

const swatches = ['#1F3326', '#9BC59D', '#C59DB0', '#3D2433', '#3C3C3C', '#FFFFFF'];

export const victual: CaseStudy = {
  slug: 'victual',
  name: 'Victual',
  summary: 'A budget-first meal planner for iOS and Android',
  kicker: 'Case study · Mobile app · Design + build',
  logo: (
    <img
      src={img('lockup-color-on-dark.svg')}
      alt="Victual"
      style={{ height: 'clamp(56px, 9vw, 96px)', width: 'auto', display: 'block' }}
    />
  ),
  pitch: (
    <>
      Most meal planners pick recipes first and leave the grocery bill as a surprise. Victual starts from the
      budget, then builds the week and a grocery list priced the way you actually shop.
    </>
  ),
  meta: [
    { label: 'Role', value: 'Design + full stack' },
    { label: 'Platform', value: 'iOS · Android · web' },
    { label: 'Timeline', value: <Todo>START - END</Todo> },
    { label: 'Status', value: 'Closed testing' },
  ],
  heroMedia: <Shot src={img('home.webp')} alt="Victual home screen" className="phone" style={{ width: 230 }} />,
  chapters: [
    {
      id: 'identity',
      design: {
        theme: { bg: '#F7F2EE', fg: '#1F3326', muted: '#4A4A4A', eyebrow: '#3D2433' },
        eyebrow: 'I · IDENTITY',
        title: 'Warm, calm, unmistakably food',
        body: (
          <p>
            A steaming-bowl mark, a DM Sans wordmark, and forest, sage and mauve on cream: a kitchen feel
            instead of a fitness-tracker one.
          </p>
        ),
        media: (
          <div className="stack" style={{ gap: 20 }}>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
              <img src={img('lockup-color-on-light.svg')} alt="Victual lockup" style={{ width: 240 }} />
              <img src={img('app-icon-rounded.svg')} alt="Victual app icon" style={{ width: 72 }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: 8 }}>
              {swatches.map((c) => (
                <div key={c} style={{ height: 64, borderRadius: 10, background: c, border: '1px solid #D9D2CC' }} />
              ))}
            </div>
            <p style={{ margin: 0, display: 'flex', flexWrap: 'wrap', gap: '6px 24px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1 }}>Aa</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 28 }}>This week</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16 }}>Poppins for the interface</span>
            </p>
          </div>
        ),
      },
      engineering: {
        eyebrow: 'I · DESIGN TOKENS',
        title: 'One JSON file, two themes',
        body: (
          <p>
            Colors, type and icon choices live in one token file. A build script generates the theme for the Expo
            app and the marketing site, so they can never drift apart.
          </p>
        ),
        media: (
          <div className="stack" style={{ gap: 14 }}>
            <div className="flow">
              <span className="box box--accent">design/tokens.json</span>
              <span className="flow__arrow" aria-hidden="true">→</span>
              <span className="box">build-tokens.mjs</span>
              <span className="flow__arrow" aria-hidden="true">→</span>
              <span className="stack" style={{ gap: 6 }}>
                <span className="box box--dashed">mobile/…/tokens.ts</span>
                <span className="box box--dashed">frontend/…/tokens.ts</span>
              </span>
            </div>
            <pre className="code-block">{`"palette": {
  "forest": "#1F3326",
  "sage":   "#9BC59D",
  "mauve":  "#C59DB0"
},
"light": {
  "primary": "sage",
  "brandSurface": "forest"
}`}</pre>
            <pre className="code-block">{`const { colors, spacing } = useTheme();
<Text variant="h2">This week</Text>`}</pre>
          </div>
        ),
      },
    },
    {
      id: 'onboarding',
      design: {
        theme: { bg: '#C59DB0', fg: '#3D2433', muted: '#3D2433', eyebrow: '#3D2433' },
        eyebrow: 'II · ONBOARDING',
        title: 'Ten questions that never feel like a form',
        body: (
          <p>
            One question per screen: budget, household, meals, diets, allergies and optional macros. A review step
            lets you tap any answer to change it, then a steaming-bowl animation builds the first week.
          </p>
        ),
        media: (
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
            {['budget', 'household', 'diets', 'review', 'building'].map((s) => (
              <div key={s} style={{ flex: '0 0 110px' }}>
                <Shot
                  src={img(`onboarding-${s}.png`)}
                  alt={`Onboarding: ${s}`}
                  label={s}
                  minHeight={238}
                  style={{ borderRadius: 14 }}
                />
              </div>
            ))}
          </div>
        ),
      },
      engineering: {
        eyebrow: 'II · ONBOARDING STATE',
        title: 'One screen, a resumable draft',
        body: (
          <>
            <p>
              All ten steps run inside one screen, so going back never loses an answer. Progress saves to the device
              as you go, one draft per account, and a closed app picks up where it left off.
            </p>
            <p>"Low carb" isn't a recipe label, so it pre-fills a 30 g per-meal carb target that ranking uses instead.</p>
          </>
        ),
        media: (
          <div className="stack">
            <div className="box"><span className="box__accent">steps.tsx</span> · one component per step</div>
            <div className="box"><span className="box__accent">model.ts</span> · answers → PreferencesRequest; diets and allergies → label ids</div>
            <div className="box"><span className="box__accent">draft.ts</span> · AsyncStorage; stale or older-format drafts fall back to step 1</div>
            <div className="box box--accent">PUT /api/users/me/preferences → POST /api/meal-plans/generate</div>
          </div>
        ),
      },
    },
    {
      id: 'plan',
      design: {
        theme: { bg: '#1F3326', fg: '#F7F2EE', muted: '#D9D2CC', eyebrow: '#9BC59D' },
        eyebrow: 'III · THE WEEKLY PLAN',
        title: 'Lock what you love, swap the rest',
        body: (
          <>
            <p>
              The week shows by day, with leftovers marked. A lock keeps a meal through a regenerate, and a swap
              sheet shows the price difference before you commit.
            </p>
            <div className="pill-row" style={{ marginTop: 18, fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
              <span className="pill" style={{ background: '#9BC59D', color: '#1F3326', border: 0 }}>{lock}Lock</span>
              <span className="pill" style={{ background: '#C59DB0', color: '#3D2433', border: 0 }}>{swap}Swap</span>
              <span className="pill" style={{ borderColor: '#9BC59D', color: '#F7F2EE' }}>{regen}Regen</span>
            </div>
          </>
        ),
        media: (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Shot src={img('plan.webp')} alt="Plan screen" className="phone" style={{ width: 230 }} />
          </div>
        ),
      },
      engineering: {
        eyebrow: 'III · PLAN GENERATOR',
        title: 'Seeded, weighted, budget-fit',
        body: (
          <p>Plain Java with no database inside, so every rule is unit-tested. The seed makes a plan reproducible.</p>
        ),
        media: (
          <ol className="steps">
            <li><span className="steps__num">01</span><span><strong>Lay out</strong> each meal's recipes as runs of up to 3 days</span></li>
            <li><span className="steps__num">02</span><span><strong>Filter</strong> by diet, cost, slot score, calories, repeat window</span></li>
            <li><span className="steps__num">03</span><span><strong>Draw</strong> weighted: fit × cost share × favorites 1.5 × recent 0.7</span></li>
            <li className="is-key"><span className="steps__num">04</span><span><strong>Fit the budget:</strong> swap the pick furthest over its share until usage is under 90%. Still over? Saved and flagged, never refused.</span></li>
          </ol>
        ),
      },
    },
    {
      id: 'groceries',
      design: {
        theme: { bg: '#F7F2EE', fg: '#1F3326', muted: '#4A4A4A', eyebrow: '#3D2433' },
        eyebrow: 'IV · GROCERIES',
        title: 'A list that matches the store',
        reverse: true,
        body: (
          <>
            <p>
              Grouped by aisle and checked off as you shop. Pantry staples get their own "check your pantry" group,
              so you only buy what you're actually out of.
            </p>
            <p>Prices that can't be confirmed say "from $X" instead of pretending to be exact.</p>
          </>
        ),
        media: (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Shot src={img('groceries.webp')} alt="Grocery list screen" className="phone" style={{ width: 230 }} />
          </div>
        ),
      },
      engineering: {
        eyebrow: 'IV · PRICING',
        title: 'Whole packages, never a live call',
        body: (
          <p>
            Prices are stored as history and recipe costs are precomputed, so nobody waits on a price API. The list
            buys the cheapest product for the amount needed, in whole packages.
          </p>
        ),
        media: (
          <div className="stack" style={{ gap: 16 }}>
            <div className="flow">
              <span className="box box--accent">Kroger ≤14d</span>
              <span className="flow__arrow" aria-hidden="true">→</span>
              <span className="box">BLS ≤60d</span>
              <span className="flow__arrow" aria-hidden="true">→</span>
              <span className="box">stale</span>
              <span className="flow__arrow" aria-hidden="true">→</span>
              <span className="box">seed</span>
            </div>
            <div className="data-table-wrap">
              <table className="data-table" style={{ minWidth: 320 }}>
                <thead>
                  <tr><th>Package text</th><th>Parsed</th></tr>
                </thead>
                <tbody>
                  <tr><td>"3 lb"</td><td><Todo>parser output</Todo></td></tr>
                  <tr><td>"1/2 gal"</td><td><Todo>parser output</Todo></td></tr>
                  <tr><td>"12 x 12 fl oz"</td><td><Todo>parser output</Todo></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
    },
    {
      id: 'recipes',
      design: {
        theme: { bg: '#9BC59D', fg: '#1F3326', muted: '#1F3326', eyebrow: '#1F3326' },
        eyebrow: 'V · RECIPES + COOK MODE',
        title: 'From plan to stove',
        body: (
          <>
            <p>
              Macros up top, servings that scale to your household, and a cook mode that shows one step at a time
              with timers read straight from the recipe.
            </p>
            <div
              style={{
                marginTop: 18,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 18px',
                borderRadius: 16,
                background: '#1F3326',
                color: '#F7F2EE',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <span style={{ fontSize: 13, opacity: 0.85 }}>"simmer 15-20 minutes"</span>
              <span aria-hidden="true">→</span>
              <span style={{ fontWeight: 700, fontSize: 22 }}>15:00</span>
            </div>
          </>
        ),
        media: (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Shot src={img('recipe.webp')} alt="Recipe detail screen" className="phone" style={{ width: 230 }} />
          </div>
        ),
      },
      engineering: {
        eyebrow: 'V · INGREDIENT PARSER',
        title: 'Messy lines in, structured data out',
        body: (
          <p>
            Each scraped line becomes amount, unit, name and prep note, then matches the catalog by alias or trigram
            similarity. Weak matches go to a review queue instead of guessing. Nutrition is computed, never scraped.
          </p>
        ),
        media: (
          <div className="data-table-wrap">
            <table className="data-table" style={{ minWidth: 460 }}>
              <thead>
                <tr><th>Input</th><th>Amt</th><th>Unit</th><th>Name</th></tr>
              </thead>
              <tbody>
                <tr><td>2-3 cloves garlic, minced</td><td>3</td><td>CLOVE</td><td>garlic</td></tr>
                <tr><td>1 (15 oz) can black beans</td><td>15</td><td>OZ</td><td>black beans</td></tr>
                <tr><td>½ cup sugar</td><td>0.5</td><td>CUP</td><td>sugar</td></tr>
                <tr><td>Salt and pepper to taste</td><td>-</td><td>TO_TASTE</td><td>salt and pepper</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
    },
  ],
  stats: [
    { value: '811', label: 'recipes with nutrition, cost and diet labels' },
    { value: '337', label: 'ingredients in a USDA-backed catalog' },
    { value: '94%+', label: 'of recipes with a complete cost' },
    { value: '~225', label: 'backend tests' },
  ],
  statsNote: (
    <>
      Next: a closed test on Google Play, then the App Store. <Todo>What you learned building Victual</Todo>
    </>
  ),
  cta: {
    title: 'Designed and built by one person',
    text: 'Hiring, or have a project in mind? Let’s talk.',
    actions: (
      <>
        <ButtonLink to="/contact" primary>Get in touch</ButtonLink>
        <ButtonLink to="https://github.com/FoolsFlagonStudio/Victual">View the code</ButtonLink>
      </>
    ),
  },
};
