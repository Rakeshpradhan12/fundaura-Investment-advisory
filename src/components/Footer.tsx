import React from 'react';
import { SITE } from '../data/site';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container grid4">
        <div>
          <div className="row center gap-8">
            <img className="logo-sm" src="/RioCaplogo.png" alt="logo" />
          </div>
          <div className="muted small mt-8">
            Copyright © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </div>
        </div>
        <div>
          <h5>Services</h5>
          <ul className="list">
            {SITE.services.slice(0, 5).map((s) => (
              <li key={s.code}>
                <a href="#services">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul className="list">
            {SITE.nav.slice(0, 5).map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Group Companies</h5>
          <div className="row wrap gap-8">
            Subsidiary of Aificon advisory and consulting pvt ltd
          </div>
        </div>
      </div>
    </footer>
  );
}