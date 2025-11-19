import React from 'react';
import { SITE } from '../data/site';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-grid">
        {/* Logo & copyright */}
        <div className="footer-logo">
          <img
            className="logo-sm"
            src="/RioCaplogo.png"
            alt={`${SITE.brand} Logo`}
            width={160}
            height={50}
          />
          <p className="muted small mt-8">
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
        </div>

        {/* Services Navigation */}
        <nav className="footer-section" aria-label="Services">
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
        </nav>

        {/* Company Navigation */}
        <nav className="footer-section" aria-label="Company">
          <h5>Company</h5>
          <ul>
            {SITE.nav.slice(0, 5).map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Group Companies */}
        <section className="footer-section" aria-label="Group Companies">
          <h5>Group Companies</h5>
          <p>Subsidiary of Aificon Advisory and Consulting Pvt Ltd</p>
          <nav className="footer-social row gap-8 mt-8" aria-label="Social media links">
            {SITE.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </section>
      </div>

      {/* Footer Buttons */}
      <nav className="footer-bottom row gap-12 mt-16" aria-label="Footer legal and policy links">
        <a className="btn outline" href="#" id="terms" role="button">
          Terms of Use
        </a>
        <a className="btn outline" href="#" id="privacy" role="button">
          Privacy Policy
        </a>
        <a className="btn outline" href="#" id="charter" role="button">
          Investor Charter
        </a>
      </nav>
    </footer>
  );
}
