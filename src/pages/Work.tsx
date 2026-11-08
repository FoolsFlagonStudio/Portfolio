import { useEffect } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import { CtaPanel } from '../components/bits';
import { projects } from '../content/projects';

export default function Work() {
  useEffect(() => {
    document.title = 'Work · Fools Flagon';
  }, []);

  return (
    <div className="container">
      <section className="home-hero" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">Work</p>
        <h1 className="display">Products, designed and built end to end.</h1>
        <p className="lead">
          Every case study has two sides. Read the design story, then flip the card to see how it was engineered.
        </p>
      </section>
      <section className="section">
        <ProjectGrid items={projects} />
      </section>
      <section className="section">
        <CtaPanel />
      </section>
    </div>
  );
}
