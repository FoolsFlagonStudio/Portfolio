import { useEffect } from 'react';
import { Tag } from 'antd';
import { ButtonLink, CtaPanel, SectionHead, Shot, Todo } from '../components/bits';
import { site } from '../config/site';

const path = [
  { when: 'Design', what: "Bachelor's in Graphic Design, SUNY Cobleskill", note: 'Where the eye for type, color and layout comes from. I also tutored classmates on the material we were learning together.' },
  { when: 'Engineering', what: "Flatiron School's Software Engineering program", note: 'Full-stack JavaScript and Python, and the start of building products instead of just designing them.' },
  { when: 'Business', what: 'Topdeck Tavern', note: 'I run an online trading card shop, with an inventory and fulfillment system I built myself in Google Sheets and Apps Script.' },
  { when: 'Now', what: 'Fools Flagon', note: 'Designing and building my own products, Victual, Sofron and EdgeForge, and taking on client work.' },
];

const tools: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS'] },
  { group: 'Frontend', items: ['React', 'React Native', 'Vite', 'Ant Design', 'Bootstrap'] },
  { group: 'Backend + data', items: ['Node.js', 'Express', 'Spring Boot', 'Flask', 'PostgreSQL'] },
  { group: 'Cloud + tools', items: ['Docker', 'AWS', 'Git', 'Postman', 'Jest', 'Playwright'] },
  { group: 'Design', items: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro', 'InDesign'] },
  { group: 'Also', items: ['Stripe', 'Pandas', 'Google Apps Script', 'OpenAI API', 'Anthropic API'] },
];

export default function About() {
  useEffect(() => {
    document.title = 'About · Fools Flagon';
  }, []);

  return (
    <div className="container">
      <section className="home-hero" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">About</p>
        <div className="about-split">
          <div className="about-split__text">
            <h1 className="display">Hi, I'm {site.owner.split(' ')[0]}.</h1>
            <p className="lead" style={{ marginBottom: 20 }}>
              Fools Flagon is my one-person studio. I'm a full-stack engineer with a graphic design background, so I
              can take a product from the logo to the database.
            </p>
            <p>
              <Todo>A few sentences in your own voice: what got you into building things, what kind of work you enjoy most, and what you're like to work with.</Todo>
            </p>
            <div className="panel" style={{ marginTop: 8 }}>
              <p className="label" style={{ marginBottom: 6 }}>What I'm looking for</p>
              <p style={{ margin: 0 }}>{site.lookingFor}</p>
            </div>
            <div className="btn-row">
              {site.resumeUrl ? (
                <ButtonLink to={site.resumeUrl} primary>
                  Download resume
                </ButtonLink>
              ) : (
                <Todo>Add resume: public/resume.pdf + site.resumeUrl</Todo>
              )}
              <ButtonLink to={site.linkedin}>LinkedIn</ButtonLink>
              <ButtonLink to={site.github}>GitHub</ButtonLink>
            </div>
          </div>
          <div className="about-split__photo" style={{ color: '#9A8F78' }}>
            <Shot src="/images/about/evan.jpg" alt={site.owner} label="your photo" style={{ borderRadius: 18 }} minHeight={380} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="path-h">
        <SectionHead id="path-h" title="How I got here" />
        <ol className="timeline">
          {path.map((p) => (
            <li key={p.when}>
              <span className="timeline__when">{p.when}</span>
              <div>
                <strong style={{ fontSize: 18, fontWeight: 600 }}>{p.what}</strong>
                <p className="muted" style={{ margin: '4px 0 0' }}>
                  {p.note}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="tools-h">
        <SectionHead id="tools-h" title="Tools of the trade" />
        <div className="grid-2">
          {tools.map((t) => (
            <div key={t.group} className="tool-group">
              <p className="label">{t.group}</p>
              {t.items.map((i) => (
                <Tag key={i} variant="outlined" style={{ marginBottom: 8, fontSize: 14, padding: '4px 10px' }}>
                  {i}
                </Tag>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <CtaPanel />
      </section>
    </div>
  );
}
