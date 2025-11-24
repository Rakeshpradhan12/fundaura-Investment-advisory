import React from 'react';
import { SITE } from '../data/site';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer" role="contentinfo">

      {/* Main Footer Grid */}
      <div className="container footer-grid">

        {/* Logo & Copyright */}
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
          <h4>Services</h4>
          <ul className="footer-services">

            {/* Wealth Management */}
            <li className="parent">
              <span className="parent-title">Wealth Management</span>
              <ul className="submenu">
                {SITE.services.map((s) => (
                  <li key={s.code}>
                    <a href="#wealth">{s.name}</a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Portfolio Management */}
            <li className="parent">
              <span className="parent-title">Portfolio Management</span>
              <ul className="submenu">
                {SITE.pms.map((p) => (
                  <li key={p.code}>
                    <a href="#portfolio">{p.name}</a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Advisory Services */}
            <li className="parent">
              <span className="parent-title">Advisory Services</span>
              <ul className="submenu">
                {SITE.pricing.map((price, index) => (
                  <li key={index}>
                    <a href="#advisory">{price.name}</a>
                  </li>
                ))}
              </ul>
            </li>

          </ul>
        </nav>

        {/* Company Navigation */}
        <nav className="footer-section" aria-label="Company">
          <h4>Company</h4>
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
          <h4>Group Companies</h4>
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
        <a className="btn outline" href="#" id="terms">Terms of Use</a>
        <a className="btn outline" href="#" id="privacy">Privacy Policy</a>
        <a className="btn outline" href="#" id="charter">Investor Charter</a>
      </nav>

      {/* Disclaimer */}
      <div id="Disclaimer" className="muted small mt-16 leading-relaxed">
        Disclaimer: Investing involves risk. This document is for information purposes only and should not be viewed as a legal offering document or solicitation. Offers to invest in this fund are made only by the Discretionary Portfolio Management Services Agreement. Past performance does not guarantee future results, and there is no assurance that the managed accounts will achieve their objectives. Any forward-looking information or opinions are based on market data available at the time of publication and are subject to risks, uncertainties, and assumptions. This information is confidential and intended only for the authorized recipient. Portfolio allocations shown are based on strategy models and may differ across accounts due to factors such as size, restrictions, timing, and market conditions. Securities listed are for illustrative purposes and are not recommendations. FUNDAURA may act as an intermediary between discretionary or non-discretionary investment managers. FUNDAURA does not guarantee returns or take accountability for performance.

        The Company reserves the right to make modifications. Information is obtained from reliable sources but is not independently verified. No representation or warranty is made regarding completeness or accuracy.
      </div>

      {/* Highlighted Copyright Bar */}
      <div className="w-full mt-6">
        <div className="flex justify-between font-bold p-3 rounded w-full">
          <span>Copyright @2025 FundAura . </span>
          <span>All rights reserved.</span>
        </div>
      </div>

    </footer>
  );
}
