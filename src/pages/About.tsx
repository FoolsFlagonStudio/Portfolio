import { useEffect } from 'react';
import { Tag } from 'antd';
import { ButtonLink, CtaPanel, SectionHead, Shot } from '../components/bits';
import { site } from '../config/site';

const path = [
  { when: 'Design', what: "Bachelor's in Graphic Design, SUNY Cobleskill", note: 'Where the eye for type, color and layout comes from, and where I fell in love with web design. I also tutored classmates on the material we were learning together.' },
  { when: 'Engineering', what: "Flatiron School's Software Engineering bootcamp", note: 'The jump from designing products to building them.' },
  { when: 'Fundamentals', what: 'CS coursework', note: 'Data structures and algorithms, discrete math, computer architecture and Java, preparing for a master’s in computer science.' },
  { when: 'Business', what: 'Topdeck Tavern', note: 'I run an online trading card shop, with an inventory and fulfillment system I built myself in Google Sheets and Apps Script.' },
  { when: 'Now', what: 'Fools Flagon', note: 'Designing and building my own products, like Victual and Sofron, and open to client work.' },
];

const tools: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS'] },
  { group: 'Frontend', items: ['React', 'React Native', 'Vite', 'Ant Design', 'Bootstrap'] },
  { group: 'Backend + data', items: ['Node.js', 'Express', 'Spring Boot', 'Flask', 'PostgreSQL', 'Redis'] },
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
              Fools Flagon is my one-person studio. I'm a full-stack software engineer with a graphic design
              background, and that combination shapes everything I build.
            </p>
            <p>
              I don't just make things work, I make them feel intentional. Most of my interfaces start as wireframes
              and comps in Figma before I write a line of frontend code.
            </p>
            <p>
              My path into engineering wasn't traditional. I studied graphic design, fell in love with web design, and
              went all in with Flatiron School's software engineering bootcamp. Since then I've learned most of my
              stack by building real products: TypeScript, Node.js, PostgreSQL, Python, Redis, AWS and Docker. I've
              also been strengthening my CS fundamentals, with recent coursework in data structures and algorithms,
              discrete math, computer architecture and Java.
            </p>
            <div className="panel" style={{ marginTop: 8 }}>
              <p className="label" style={{ marginBottom: 6 }}>What I'm looking for</p>
              <p style={{ margin: 0 }}>{site.lookingFor}</p>
            </div>
            <div className="btn-row">
              {site.resumeUrl && (
                <ButtonLink to={site.resumeUrl} primary>
                  Download resume
                </ButtonLink>
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
