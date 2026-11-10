'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Icon } from './icons';
import { navigation, site } from '@/lib/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    }
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return <header className="site-header">
    <div className="nav-shell">
      <Link className="brand" href="/" aria-label="SafeSight home" onClick={() => setOpen(false)}>
        <img src="/brand/safesight.svg" width="2172" height="724" alt="SafeSight" />
      </Link>
      <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        <span>{open ? 'Close' : 'Menu'}</span><span className={open ? 'menu-lines is-open' : 'menu-lines'} aria-hidden="true" />
      </button>
      <nav id="main-navigation" aria-label="Main navigation" className={`main-navigation${open ? ' is-open' : ''}`}>
        <div className="nav-pages">{navigation.map(({ href, label }) => <Link key={href} href={href} aria-current={path.replace(/\/$/, '') === href.replace(/\/$/, '') ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}</div>
        <Link className="button button-nav" href="/contact/#inquiry" onClick={() => setOpen(false)}>Start a conversation <Icon name="diagonal" /></Link>
      </nav>
    </div>
  </header>;
}
export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand"><Link className="brand" href="/" aria-label="SafeSight home"><img src="/brand/safesight-white.svg" width="2172" height="724" alt="SafeSight" /></Link><p>Safety Through<br />Intelligence</p><span className="mono muted">WEARABLE AI · HUMAN-LED SAFETY</span></div>
      <div className="footer-column"><p className="footer-label">Explore</p>{navigation.slice(1).map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div className="footer-column footer-contact"><p className="footer-label">Let’s build something meaningful.</p><a href={`mailto:${site.email}`} className="footer-email">{site.email}<Icon name="diagonal" /></a><p>For research conversations,<br />and technology collaboration.</p><span className="development-tag"><span className="status-dot" />In development</span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} SafeSight</span><Link href="/privacy/">Privacy Policy</Link><a href="#main" className="back-top">Back to top <Icon name="arrow" /></a></div>
  </footer>;
}
