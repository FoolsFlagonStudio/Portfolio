import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import { Shot } from './bits';
import type { ProjectCard } from '../content/projects';

function CardInner({ p }: { p: ProjectCard }) {
  return (
    <>
      <div className="project-card__cover" style={{ background: p.cover.bg, color: p.cover.bg === '#F7FAFA' ? '#475569' : '#9A8F78' }}>
        <Shot
          src={p.cover.src}
          alt={p.cover.alt}
          label={`${p.name} cover`}
          className={p.cover.phone ? 'phone' : undefined}
          style={p.cover.phone ? { borderRadius: 22 } : { borderRadius: 10 }}
          minHeight={160}
        />
      </div>
      <div className="project-card__body">
        <p className="label">{p.status}</p>
        <h3 className="project-card__title">{p.name}</h3>
        <p className="muted" style={{ margin: 0 }}>
          {p.summary}
        </p>
        <div>
          {p.tags.map((t) => (
            <Tag key={t} variant="outlined" style={{ marginBottom: 6 }}>
              {t}
            </Tag>
          ))}
        </div>
        {p.href && <span className="project-card__more">{p.linkLabel} →</span>}
      </div>
    </>
  );
}

export default function ProjectGrid({ items }: { items: ProjectCard[] }) {
  return (
    <div className="grid-3" style={{ gap: 24 }}>
      {items.map((p) =>
        !p.href ? (
          <div key={p.slug} className="project-card">
            <CardInner p={p} />
          </div>
        ) : p.href.startsWith('/') ? (
          <Link key={p.slug} to={p.href} className="project-card">
            <CardInner p={p} />
          </Link>
        ) : (
          <a key={p.slug} href={p.href} className="project-card" target="_blank" rel="noreferrer">
            <CardInner p={p} />
          </a>
        ),
      )}
    </div>
  );
}
