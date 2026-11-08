import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Button, Drawer, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { site } from '../config/site';

const links = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function SiteLayout() {
  const screens = Grid.useBreakpoint();
  const [open, setOpen] = useState(false);
  const isMobile = !screens.md;

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand-logo" aria-label={`${site.name} home`}>
            <img src="/images/fools-flagon-banner.png" alt={`${site.name} - ${site.tagline}`} />
          </Link>
          {isMobile ? (
            <Button
              type="text"
              size="large"
              icon={<MenuOutlined />}
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            />
          ) : (
            <nav className="site-nav" aria-label="Main">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to}>
                  {l.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </header>

      <Drawer open={open} onClose={() => setOpen(false)} placement="right" size={300} title={site.name}>
        <nav className="mobile-nav" aria-label="Main">
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </Drawer>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>
            © {new Date().getFullYear()} {site.name} · {site.owner}
          </span>
          <div className="footer-links">
            <a href={`mailto:${site.email}`}>Email</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {site.resumeUrl && <a href={site.resumeUrl}>Resume</a>}
          </div>
        </div>
      </footer>
    </>
  );
}
