import React from 'react';
import { SITE } from '../data/site';

export default function Header(): JSX.Element {
  return (
    <header className="header sticky">
      <div className="container row space-between">
        <div className="row gap-8 center">
          <img src="/RioCaplogo.png" alt="Fundaura logo" className="logo" />
        </div>
        <nav className="nav hide-sm">
          {SITE.nav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}