import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink, CtaPanel, SectionHead, Shot } from '../components/bits';
import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../content/projects';
import { services } from '../content/services';
import { site } from '../config/site';

export default function Home() {
  useEffect(() => {
    document.title = 'Fools Flagon · Evan Roberts';
  }, []);

  return (
    <div className="container">
      <section className="home-hero">
        <p className="eyebrow">Independent studio · {site.tagline}</p>
        <h1 className="display">
          Fools Flagon is the studio of {site.owner}.
        </h1>
        <p className="lead">
          I'm a full-stack engineer with a graphic design background. I design and build web apps, mobile apps, data
          tools and brands, from the first sketch to production.
        </p>
        <div className="btn-row">
          <ButtonLink to="/work" primary>
            See the work
          </ButtonLink>
          <ButtonLink to="/contact">Start a project</ButtonLink>
        </div>
        <p className="faint" style={{ marginTop: 20, fontSize: 15 }}>
          {site.lookingFor} <Link to="/about">More about me →</Link>
        </p>
      </section>

      <section className="section" aria-labelledby="work-h">
        <SectionHead id="work-h" title="Selected work" />
        <ProjectGrid items={projects} />
      </section>

      <section className="section" aria-labelledby="services-h">
        <SectionHead id="services-h" title="What I make" />
        <div className="grid-2">
          {services.map((s) => (
            <div key={s.id} className="panel service-card">
              <h3>{s.title}</h3>
              <p className="muted">{s.short}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 20 }}>
          <Link to="/services">How I work with clients →</Link>
        </p>
      </section>

      <section className="section" aria-labelledby="about-h">
        <SectionHead id="about-h" title="The person behind it" />
        <div className="about-split">
          <div className="about-split__photo" style={{ color: '#9A8F78' }}>
            <Shot src="/images/about/evan.jpg" alt={site.owner} label="your photo" style={{ borderRadius: 18 }} hideIfMissing minHeight={320} />
          </div>
          <div className="about-split__text">
            <p>
              Fools Flagon is just me. I studied graphic design, then went through Flatiron School's software
              engineering program, and now I build full products end to end: the brand, the interface, the API and
              the database.
            </p>
            <p>
              That mix means fewer handoffs. The person who designs your screens is the same person who builds them.
            </p>
            <ButtonLink to="/about">About me</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <CtaPanel />
      </section>
    </div>
  );
}
