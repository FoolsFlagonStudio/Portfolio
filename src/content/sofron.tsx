import { useState } from 'react';
import type { CaseStudy } from '../case-study/types';
import { ButtonLink, Shot, Todo } from '../components/bits';
import { projectLinks } from './links';

const img = (name: string) => `/images/sofron/${name}`;

/** Shows public/images/sofron/wordmark.svg once it exists, a type stand-in until then. */
function SofronLogo() {
  const [missing, setMissing] = useState(false);
  if (missing) {
    return (
      <span
        style={{
          display: 'block',
          fontFamily: "'Source Sans 3', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(56px, 9vw, 96px)',
          lineHeight: 1,
          color: '#2DD4BF',
        }}
      >
        sofron
      </span>
    );
  }
  return (
    <img
      src={img('wordmark.svg')}
      alt="Sofron"
      style={{ height: 'clamp(56px, 9vw, 96px)', width: 'auto', display: 'block' }}
      onError={() => setMissing(true)}
    />
  );
}

const white = { bg: '#FFFFFF', fg: '#0F172A', muted: '#475569', eyebrow: '#0F766E' };
const shotStyle = { borderRadius: 12, border: '1px solid #E2E8F0' };

export const sofron: CaseStudy = {
  slug: 'sofron',
  name: 'Sofron',
  summary: 'Booking and practice management for cash-pay clinics',
  kicker: 'Case study · Multi-tenant SaaS · Design + build',
  logo: <SofronLogo />,
  pitch: (
    <>
      Online booking and practice management for cash-pay clinics. Patients find and book care their insurance
      often won't cover, like physical therapy, and clinics run appointments, staff, intake forms and payments in one
      place.
    </>
  ),
  meta: [
    { label: 'Role', value: 'Design + all engineering, with a business partner' },
    { label: 'Platform', value: 'Web · clinic + patient portals' },
    { label: 'Started', value: 'Fall 2025' },
    { label: 'Status', value: 'Pre-launch · live demo' },
  ],
  heroMedia: (
    <Shot
      src={img('dashboard.png')}
      alt="Sofron clinic dashboard"
      label="clinic dashboard"
      style={{ ...shotStyle, width: '100%', maxWidth: 520 }}
      minHeight={300}
    />
  ),
  problem: [
    {
      label: 'THE GAP',
      text: "Clinic software is built around insurance billing. Cash-pay clinics get workflows they don't need and miss the ones they do.",
    },
    {
      label: 'FOR CLINICS',
      text: 'Too many tools, manual scheduling, no-shows, messy intake, and little insight into how the practice is doing.',
    },
    {
      label: 'FOR PATIENTS',
      text: 'Finding a cash-pay clinic and booking a visit online should take minutes, with the price clear up front.',
    },
  ],
  chapters: [
    {
      id: 'system',
      design: {
        theme: white,
        eyebrow: 'I · IDENTITY + SYSTEM',
        title: 'Clinical, but not cold',
        body: (
          <>
            <p>
              One calm teal with hover and active steps, quiet slate neutrals, and status colors kept for meaning
              only. Inter runs the interface; a light Source Sans 3 wordmark keeps the brand soft.
            </p>
            <p>
              Every clinic page shares one shell: sidebar, a header with the page's main action, then tables, forms
              or cards.
            </p>
          </>
        ),
        media: (
          <div className="stack" style={{ gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8 }}>
              {[
                ['#0D9488', 'Primary'],
                ['#0F766E', 'Hover'],
                ['#115E59', 'Active'],
              ].map(([c, n]) => (
                <div key={c}>
                  <div style={{ height: 56, borderRadius: 10, background: c }} />
                  <p className="mono" style={{ margin: '6px 0 0', fontSize: 11, color: '#475569' }}>
                    {n} {c}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, minmax(0, 1fr))', gap: 6 }}>
              {['#F7FAFA', '#E2E8F0', '#CBD5E1', '#64748B', '#0F172A', '#22C55E', '#F59E0B', '#EF4444'].map((c) => (
                <div key={c} style={{ height: 28, borderRadius: 6, background: c, border: '1px solid #E2E8F0' }} />
              ))}
            </div>
            <Shot src={img('wireframe-shell.png')} alt="App shell wireframe next to the built page" label="wireframe → built page" style={shotStyle} minHeight={170} />
            <p style={{ margin: 0, display: 'flex', flexWrap: 'wrap', gap: '4px 20px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 28 }}>Aa Inter</span>
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300, fontSize: 28, color: '#0F766E' }}>
                Aa Source Sans 3
              </span>
            </p>
          </div>
        ),
      },
      engineering: {
        eyebrow: 'I · ARCHITECTURE',
        title: 'Two portals, one API',
        body: (
          <p>
            A TypeScript React app serves both the clinic workspace and the patient booking side. Everything goes
            through one Express API backed by PostgreSQL. Stripe plugs in at launch.
          </p>
        ),
        media: (
          <div className="stack">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <div className="box" style={{ flex: '1 1 150px' }}>
                <span className="box__accent">Clinic portal</span>
                <br />
                <span className="box__sub">admins + staff by role</span>
              </div>
              <div className="box" style={{ flex: '1 1 150px' }}>
                <span className="box__accent">Patient booking</span>
                <br />
                <span className="box__sub">find, book, intake forms</span>
              </div>
            </div>
            <div className="flow-down">↓ React · TypeScript · Vite · Ant Design ↓</div>
            <div className="box box--accent">
              <span className="box__accent">Node + Express API</span>
              <br />
              <span className="box__sub">auth · roles · booking · scheduling · documents · analytics</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <div className="box" style={{ flex: '2 1 200px' }}>
                PostgreSQL <span className="faint">via Sequelize</span>
              </div>
              <div className="box" style={{ flex: '1 1 100px' }}>Email</div>
              <div className="box box--dashed" style={{ flex: '1 1 100px' }}>Stripe (launch)</div>
            </div>
          </div>
        ),
      },
    },
    {
      id: 'booking',
      design: {
        theme: { ...white, bg: '#F7FAFA' },
        eyebrow: 'II · PATIENT BOOKING',
        title: 'Five steps, nothing hidden',
        body: (
          <>
            <p>
              Service, specialist, date and time, details, summary. A running "Your appointment" card keeps the
              service, specialist, time, duration and price in view the whole way, so the total is never a surprise.
            </p>
            <div className="pill-row" style={{ marginTop: 18, fontFamily: "'Inter', sans-serif" }}>
              <span className="pill" style={{ background: '#115E59', color: '#fff', border: 0 }}>Service</span>
              <span className="pill" style={{ background: '#115E59', color: '#fff', border: 0 }}>Specialist</span>
              <span className="pill" style={{ borderColor: '#0F766E', color: '#0F766E', fontWeight: 600 }}>Date + time</span>
              <span className="pill" style={{ borderColor: '#CBD5E1', color: '#475569' }}>Details</span>
              <span className="pill" style={{ borderColor: '#CBD5E1', color: '#475569' }}>Summary</span>
            </div>
          </>
        ),
        media: (
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ flex: '2 1 260px' }}>
              <Shot src={img('booking-datetime.png')} alt="Booking flow, date and time step" label="booking: date + time step" style={shotStyle} minHeight={280} />
            </div>
            <div style={{ flex: '1 1 150px' }}>
              <Shot src={img('booking-mobile.png')} alt="Booking flow on a phone" label="booking on mobile" style={shotStyle} minHeight={280} />
            </div>
          </div>
        ),
      },
      engineering: {
        eyebrow: 'II · NO DOUBLE BOOKINGS',
        title: 'Two patients, one 9:00 slot',
        body: (
          <>
            <p>
              The hardest problem in the project. A slot can look open to two patients at once. Checking availability
              and then saving is a race, so the check and the reservation have to happen as one step.
            </p>
            <p>The patient who loses the race gets a clear "that time was just taken" state instead of a silent overlap on the clinic's calendar.</p>
          </>
        ),
        media: (
          <div className="stack">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
              <div className="box">Patient A<br /><span className="box__sub">picks Tue 9:00</span></div>
              <div className="box">Patient B<br /><span className="box__sub">picks Tue 9:00</span></div>
            </div>
            <div className="box box--accent">
              <span className="box__accent">Reserve slot</span>
              <br />
              <span className="box__sub"><Todo>How: e.g. transaction + row lock, or a DB constraint on specialist + time</Todo></span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
              <div className="box" style={{ borderColor: '#22C55E', color: '#86EFAC' }}>A · confirmed</div>
              <div className="box" style={{ borderColor: '#EF4444', color: '#FCA5A5' }}>B · slot taken, pick again</div>
            </div>
          </div>
        ),
      },
    },
    {
      id: 'scheduling',
      design: {
        theme: { bg: '#115E59', fg: '#FFFFFF', muted: '#CCFBF1', eyebrow: '#99F6E4' },
        eyebrow: 'III · SCHEDULING',
        title: 'A normal week, plus the exceptions',
        body: (
          <p>
            Set weekly hours once, then add overrides for PTO or a one-off custom range. The page reads like a
            calendar, not a settings form.
          </p>
        ),
        media: <Shot src={img('scheduling.png')} alt="Weekly hours and overrides" label="weekly hours + overrides" style={{ ...shotStyle, border: 0 }} minHeight={300} />,
      },
      engineering: {
        eyebrow: 'III · AVAILABILITY',
        title: 'Every clinic books differently',
        body: (
          <p>
            Some clinics book against business hours, others against each specialist's own schedule. Both models
            resolve to the same thing: a list of open slots a patient can pick from.
          </p>
        ),
        media: (
          <div className="stack" style={{ gap: 8 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
              <div className="box" style={{ flex: '1 1 150px' }}>Business hours</div>
              <span className="faint mono">or</span>
              <div className="box" style={{ flex: '1 1 150px' }}>Specialist hours</div>
            </div>
            <div className="flow-down">↓</div>
            <div className="box">− overrides <span className="faint">(PTO, custom ranges)</span></div>
            <div className="box">− booked appointments <span className="faint">(service duration)</span></div>
            <div className="flow-down">↓</div>
            <div className="box box--accent">
              <span className="box__accent">Open slots</span> <span className="box__sub">9:00 - 9:30 · 9:30 - 10:00 · …</span>
            </div>
          </div>
        ),
      },
    },
    {
      id: 'workspace',
      design: {
        theme: white,
        eyebrow: 'IV · THE CLINIC WORKSPACE',
        title: 'The front desk in one tab',
        reverse: true,
        body: (
          <p>
            Appointments, services, schedules, patients, documents and analytics behind one sidebar. The details
            panel puts check-in and reschedule one click from the table, and services can be assigned to specialists
            right where they're created.
          </p>
        ),
        media: <Shot src={img('appointments.png')} alt="Appointments table with the details panel open" label="appointments + details panel" style={shotStyle} minHeight={300} />,
      },
      engineering: {
        eyebrow: 'IV · TENANCY + ACCESS',
        title: 'Every clinic is its own world',
        body: (
          <p>
            Each clinic's data is scoped by its clinic ID. A clinic admin manages the business and invites employees,
            who sign in with their own profiles and only see what their role allows. Data is encrypted in transit and
            at rest.
          </p>
        ),
        media: (
          <div className="stack">
            <div className="box box--accent"><span className="box__accent">Clinic</span> <span className="box__sub">clinic ID scopes every query</span></div>
            <div className="box" style={{ marginLeft: 20 }}>Clinic admin <span className="faint">· edits business, invites staff</span></div>
            <div style={{ marginLeft: 40, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
              <div className="box"><Todo>Role</Todo><br /><span className="faint"><Todo>can see</Todo></span></div>
              <div className="box"><Todo>Role</Todo><br /><span className="faint"><Todo>can see</Todo></span></div>
            </div>
            <div className="pill-row" style={{ marginTop: 4 }}>
              <span className="pill">Encrypted in transit</span>
              <span className="pill">Encrypted at rest</span>
              <span className="pill">Role-gated access</span>
            </div>
          </div>
        ),
      },
    },
    {
      id: 'intake',
      design: {
        theme: { bg: '#0D9488', fg: '#042F2E', muted: '#042F2E', eyebrow: '#042F2E' },
        eyebrow: 'V · INTAKE + INSIGHT',
        title: 'Forms in, answers out',
        body: (
          <p>
            Clinics build their own intake forms and attach them to services, and patients fill them in before the
            visit. Analytics comes as chart cards, one chart each, with clear titles, labeled axes and tooltips
            instead of legends.
          </p>
        ),
        media: (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <Shot src={img('template-editor.png')} alt="Intake form template editor" label="template editor" style={shotStyle} minHeight={160} />
            </div>
            <Shot src={img('analytics-1.png')} alt="Analytics chart" label="analytics chart" style={shotStyle} minHeight={130} />
            <Shot src={img('analytics-2.png')} alt="Analytics chart" label="analytics chart" style={shotStyle} minHeight={130} />
          </div>
        ),
      },
      engineering: {
        eyebrow: 'V · TEMPLATES + ANALYTICS',
        title: 'Forms as data',
        body: (
          <p>
            A template is stored as a definition, not a fixed page. A submission is rendered back against the keys of
            the template it used, so clinics can change a form without breaking old answers.
          </p>
        ),
        media: (
          <div className="stack">
            <div className="flow">
              <span className="box box--accent">Template</span>
              <span className="flow__arrow" aria-hidden="true">→</span>
              <span className="box">linked services</span>
              <span className="flow__arrow" aria-hidden="true">→</span>
              <span className="box">patient submission</span>
              <span className="flow__arrow" aria-hidden="true">→</span>
              <span className="box">rendered by keys</span>
            </div>
            <p className="faint" style={{ margin: '8px 0 0' }}>Analytics endpoints, filtered by date range and category:</p>
            <div className="pill-row">
              {['appointments over time', 'time of day', 'revenue over time', 'revenue by service', 'top services'].map((p) => (
                <span key={p} className="pill mono">{p}</span>
              ))}
            </div>
          </div>
        ),
      },
    },
  ],
  statsTitle: 'By the numbers',
  stats: [
    { value: '2', label: 'portals: clinic and patient' },
    { value: '7', label: 'clinic workspace areas' },
    { value: <Todo>N</Todo>, label: 'automated tests' },
    { value: <Todo>N</Todo>, label: 'API endpoints' },
  ],
  statsNote: (
    <>
      Fully built and running as a live demo, with Stripe payments slotted in for launch.{' '}
      <Todo>What you learned building Sofron</Todo>
    </>
  ),
  cta: {
    title: 'See it running',
    text: 'The demo has sample clinics, staff and patients. No real health data.',
    actions: (
      <>
        {projectLinks.sofronDemo ? (
          <ButtonLink to={projectLinks.sofronDemo} primary>Try the demo</ButtonLink>
        ) : (
          <Todo>Sofron demo URL</Todo>
        )}
        <ButtonLink to="/contact">Get in touch</ButtonLink>
      </>
    ),
  },
};
