import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Segmented } from 'antd';
import type { CaseStudy, Chapter, View } from './types';
import { CtaPanel } from '../components/bits';

const FLIP_MS = 600;

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

/**
 * The view lives in the URL (?view=engineering), so a recruiter can be sent
 * straight to the engineering side and a client straight to the design side.
 */
function useView(): [View, (next: View) => void, boolean] {
  const [params, setParams] = useSearchParams();
  const urlView: View = params.get('view') === 'engineering' ? 'engineering' : 'design';
  const [shown, setShown] = useState<View>(urlView);
  const [turning, setTurning] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  // Follow the URL when it changes from outside (back button, a shared link).
  useEffect(() => {
    setShown(urlView);
  }, [urlView]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const go = (next: View) => {
    if (next === shown || turning) return;
    const write = () =>
      setParams(
        (p) => {
          const n = new URLSearchParams(p);
          if (next === 'engineering') n.set('view', 'engineering');
          else n.delete('view');
          return n;
        },
        { replace: true, preventScrollReset: true },
      );
    if (prefersReducedMotion()) {
      setShown(next);
      write();
      return;
    }
    setTurning(true);
    timer.current = window.setTimeout(() => {
      setShown(next);
      setTurning(false);
      write();
    }, FLIP_MS);
  };

  return [shown, go, turning];
}

function ChapterCard({ chapter, view }: { chapter: Chapter; view: View }) {
  if (view === 'design') {
    const { theme, eyebrow, title, body, media, reverse } = chapter.design;
    const style = {
      '--ch-bg': theme.bg,
      '--ch-fg': theme.fg,
      '--ch-muted': theme.muted,
      '--ch-eyebrow': theme.eyebrow,
    } as CSSProperties;
    return (
      <article className={`chapter${reverse ? ' chapter--reverse' : ''}`} style={style}>
        {reverse && <div className="chapter__media">{media}</div>}
        <div className="chapter__text">
          <p className="chapter__eyebrow">{eyebrow}</p>
          <h3 className="chapter__title">{title}</h3>
          <div className="chapter__body">{body}</div>
        </div>
        {!reverse && <div className="chapter__media">{media}</div>}
      </article>
    );
  }
  const { eyebrow, title, body, media } = chapter.engineering;
  return (
    <article className="chapter chapter--eng">
      <div className="chapter__text">
        <p className="chapter__eyebrow">{eyebrow}</p>
        <h3 className="chapter__title">{title}</h3>
        <div className="chapter__body">{body}</div>
      </div>
      <div className="chapter__media">{media}</div>
    </article>
  );
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const [view, go, turning] = useView();

  useEffect(() => {
    document.title = `${study.name} · Fools Flagon`;
  }, [study.name]);

  return (
    <>
      <div className="container">
        <section className="cs-hero">
          <div className="cs-hero__text">
            <p className="eyebrow">{study.kicker}</p>
            <h1 style={{ margin: 0 }}>{study.logo}</h1>
            <div className="lead">{study.pitch}</div>
            <div className="meta-grid">
              {study.meta.map((m) => (
                <div key={m.label}>
                  <p className="label">{m.label}</p>
                  <p>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="cs-hero__media">{study.heroMedia}</div>
        </section>

        {study.problem && (
          <section aria-label="The problem" className="grid-3" style={{ paddingBottom: 48 }}>
            {study.problem.map((p) => (
              <div key={p.label} className="panel">
                <p className="eyebrow" style={{ margin: 0, fontSize: 12 }}>
                  {p.label}
                </p>
                <p style={{ margin: '8px 0 0' }}>{p.text}</p>
              </div>
            ))}
          </section>
        )}
      </div>

      <div className="view-bar">
        <div className="view-bar__inner">
          <Segmented<View>
            aria-label="Case study view"
            value={view}
            onChange={go}
            options={[
              { label: 'Design', value: 'design' },
              { label: <span className="mono">Engineering</span>, value: 'engineering' },
            ]}
          />
          <span className="faint" style={{ fontSize: 14 }}>
            {view === 'design' ? 'Flip the card to see how it was built' : 'The back of the card: how it works'}
          </span>
        </div>
      </div>

      <div className="container">
        <section
          aria-label={`${study.name} chapters, ${view} view`}
          className={`chapters${turning ? ' is-turning' : ''}`}
        >
          {study.chapters.map((c, i) => (
            <div key={c.id} className="flip-wrap">
              <div className="flip-card" style={{ '--i': i } as CSSProperties}>
                <ChapterCard chapter={c} view={view} />
              </div>
            </div>
          ))}
        </section>

        <section className="section" aria-labelledby="results">
          <h2 className="h2" id="results" style={{ marginBottom: 24 }}>
            {study.statsTitle ?? 'Where it stands'}
          </h2>
          <div className="stats-grid">
            {study.stats.map((s) => (
              <div key={s.label}>
                <p className="stat__value">{s.value}</p>
                <p className="stat__label">{s.label}</p>
              </div>
            ))}
          </div>
          {study.statsNote && <p className="muted" style={{ marginTop: 24 }}>{study.statsNote}</p>}
        </section>

        <section className="section">
          <CtaPanel title={study.cta.title} text={study.cta.text}>
            {study.cta.actions}
          </CtaPanel>
        </section>
      </div>
    </>
  );
}
