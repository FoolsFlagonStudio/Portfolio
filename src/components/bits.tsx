import { useState, type CSSProperties, type MouseEvent, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { site } from '../config/site';

/**
 * A link that looks like an Ant Design button. Internal paths use the router;
 * external links and files (http..., mailto:, .pdf) open normally.
 */
export function ButtonLink({
  to,
  children,
  primary,
  icon,
}: {
  to: string;
  children: ReactNode;
  primary?: boolean;
  icon?: ReactNode;
}) {
  const navigate = useNavigate();
  const external = /^(https?:|mailto:)/.test(to) || /\.[a-z0-9]+$/i.test(to);
  const onClick = (e: MouseEvent) => {
    if (external || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <Button
      href={to}
      onClick={onClick}
      type={primary ? 'primary' : 'default'}
      size="large"
      shape="round"
      icon={icon}
      target={/^https?:/.test(to) ? '_blank' : undefined}
      rel={/^https?:/.test(to) ? 'noreferrer' : undefined}
    >
      {children}
    </Button>
  );
}

/**
 * Marks content you still need to fill in. Run `npm run todos` to list every one
 * before deploying.
 */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="todo">{children}</span>;
}

/**
 * An image that falls back to a labelled placeholder until the file exists.
 * Drop the file at the `src` path inside /public and it shows up automatically.
 */
export function Shot({
  src,
  alt,
  label,
  className,
  style,
  minHeight = 220,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
  minHeight?: number;
}) {
  const [missing, setMissing] = useState(false);
  if (missing) {
    return (
      <div className="shot--placeholder" style={{ minHeight, ...style }} role="img" aria-label={alt}>
        <span>[{label ?? alt}]</span>
        <small>public{src}</small>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={['shot', className].filter(Boolean).join(' ')}
      style={style}
      loading="lazy"
      onError={() => setMissing(true)}
    />
  );
}

export function Fleur({ size = 22 }: { size?: number }) {
  return (
    <svg
      className="fleur"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2c-2 2.5-2.5 5-1.2 8h2.4c1.3-3 .8-5.5-1.2-8z" />
      <path d="M10.8 10C9.5 8 6.5 7.5 5 9.5c-1.3 1.8.2 4 2.3 3.6" />
      <path d="M13.2 10c1.3-2 4.3-2.5 5.8-.5 1.3 1.8-.2 4-2.3 3.6" />
      <path d="M7 13.5h10" />
      <path d="M12 13.5v4.5" />
      <path d="M9 21c1-1.6 2-2.6 3-3 1 .4 2 1.4 3 3" />
    </svg>
  );
}

export function SectionHead({ num, title, id }: { num?: string; title: ReactNode; id?: string }) {
  return (
    <div className="section-head">
      {num ? <span className="section-head__num">{num}</span> : <Fleur />}
      <h2 className="h2" id={id}>
        {title}
      </h2>
    </div>
  );
}

export function CtaPanel({
  title = 'Hiring, or have a project in mind?',
  text = "I'm open to full-time roles and select freelance work. Let's talk.",
  children,
}: {
  title?: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="cta-panel">
      <div style={{ flex: '1 1 360px' }}>
        <h2 className="cta-panel__title">{title}</h2>
        <p className="muted" style={{ margin: '10px 0 0' }}>
          {text}
        </p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {children ?? (
          <>
            <ButtonLink to="/contact" primary>
              Get in touch
            </ButtonLink>
            {site.resumeUrl && <ButtonLink to={site.resumeUrl}>Resume</ButtonLink>}
          </>
        )}
      </div>
    </div>
  );
}
