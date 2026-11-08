import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CtaPanel, SectionHead } from '../components/bits';
import { services } from '../content/services';
import { site } from '../config/site';

const process = [
  { title: 'Intro call', text: 'We talk through what you need, who it is for and what success looks like.' },
  { title: 'Proposal', text: 'A written scope, timeline and price, so you know exactly what you are getting.' },
  { title: 'Design', text: 'Wireframes and visual design you can react to before anything is built.' },
  { title: 'Build', text: 'Regular check-ins with working versions, not a black box until launch day.' },
  { title: 'Launch + handoff', text: 'Deployed, documented and handed over, with support while it settles in.' },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Services · Fools Flagon';
  }, []);

  return (
    <div className="container">
      <section className="home-hero" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">Services</p>
        <h1 className="display">One person, from sketch to shipped.</h1>
        <p className="lead">
          I work with small businesses and founders who need something built well and want to deal with one person
          who understands both the design and the code.
        </p>
        {site.startingPrice && <p className="faint" style={{ marginTop: 16 }}>{site.startingPrice}</p>}
      </section>

      <section className="section" aria-labelledby="offer-h">
        <SectionHead id="offer-h" title="What I offer" />
        <div className="grid-2">
          {services.map((s) => (
            <div key={s.id} className="panel service-card" style={{ padding: 28 }}>
              <h3>{s.title}</h3>
              <p className="muted">{s.long}</p>
              <ul style={{ margin: '4px 0 0', paddingLeft: 20, color: 'var(--cream-muted)' }}>
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              {s.proof && (
                <p style={{ margin: '8px 0 0' }}>
                  <Link to={s.proof.to}>{s.proof.label} →</Link>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="process-h">
        <SectionHead id="process-h" title="How working with me goes" />
        <ol className="timeline">
          {process.map((p, i) => (
            <li key={p.title}>
              <span className="timeline__when">0{i + 1}</span>
              <div>
                <strong style={{ fontSize: 18, fontWeight: 600 }}>{p.title}</strong>
                <p className="muted" style={{ margin: '4px 0 0' }}>
                  {p.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <CtaPanel title="Have a project in mind?" text="Tell me a little about it and I'll get back to you within a couple of days." />
      </section>
    </div>
  );
}
