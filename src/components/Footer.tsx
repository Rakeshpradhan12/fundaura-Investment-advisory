import React from 'react';
import { SITE } from '../data/site';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Logo & copyright */}
        <div className="footer-logo">
          <img className="logo-sm" src="/RioCaplogo.png" alt="logo" />
          <p className="muted small mt-8">
            Copyright © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h5>Services</h5>
          <ul>
            {SITE.services.map((s) => (
              <li key={s.code}>
                <a href="#wealth">{s.name}</a>
              </li>
            ))}
            {SITE.pms.map((s) => (
              <li key={s.code}>
                <a href="#portfolio">{s.name}</a>
              </li>
            ))}
            {SITE.pricing.map((s, index) => (
              <li key={index}>
                <a href="#advisory">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h5>Company</h5>
          <ul>
            {SITE.nav.slice(0, 5).map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Group Companies */}
        <div className="footer-section">
          <h5>Group Companies</h5>
          <p>Subsidiary of Aificon Advisory and Consulting Pvt Ltd</p>
          <div className="footer-social row gap-8 mt-8">
            {SITE.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="footer-bottom row gap-12 mt-16">
        <a className="btn outline" href="#" id="terms">Terms of Use</a>
        <a className="btn outline" href="#" id="privacy">Privacy Policy</a>
        <a className="btn outline" href="#" id="charter">Investor Charter</a>
      </div>
    </footer>
  );
}
