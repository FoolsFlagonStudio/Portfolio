import { useEffect } from 'react';
import { ButtonLink } from '../components/bits';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not found · Fools Flagon';
  }, []);
  return (
    <div className="container">
      <section className="home-hero" style={{ paddingBottom: 120 }}>
        <p className="eyebrow">404</p>
        <h1 className="display">The fool has wandered off.</h1>
        <p className="lead">That page doesn't exist. Let's get you back somewhere useful.</p>
        <div className="btn-row">
          <ButtonLink to="/" primary>Home</ButtonLink>
          <ButtonLink to="/work">See the work</ButtonLink>
        </div>
      </section>
    </div>
  );
}
