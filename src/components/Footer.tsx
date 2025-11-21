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
      <div id='Disclaimer' className="muted small mt-16">
        Disclaimer: Investing Involves Risk. This document is for information purposes only and should not be viewed as a legal offering document or solicitation. Offers to invest in this fund are made only by the Discretionary Portfolio Management Services Agreement. Past performance does not guarantee future results and there is no assurance that the managed accounts will necessarily achieve its objectives. Any forward-looking information and/or opinions contained in this document are based on the market information available at the time of publication and are subject to a number of known and unknown risks, uncertainties, assumptions as to future events and other factors that could cause the actual results to differ materially from those implied by the information set forth herein. This information is confidential and is intended for only the person or entity to whom it was sent and in no circumstances may this material be shown, copied, transmitted, or otherwise given to any person other than the authorized recipient. The investments sector allocations and holdings are shown are based on the strategys model portfolio. The holdings shown do not represent all of the securities purchased, sold, or recommended for any particular expertsy client and in the aggregate may represent only a small percentage of an accounts portfolio holdings. Actual portfolios may differ as a result of account size, client-imposed investment restrictions, the timing of client investments and market, economic, and individual company. Considerations. Securities are shown for illustrative purposes only and are not a solicitation to buy or sell any particular security or invest in a particular sector. FUNDAURA may act as an intermediary who coordinates with either a discretionary investment manager or a non-discretionary model provider in a variety of separately managed accounts. Any performance information included herein represents the performance achieved by the various product manufacturers as a discretionary or non-discretionary investment manager with trade implementation responsibility for accounts included in a performance. We at FUNDAURA does not guarantee any returns in the hand of investors not we take any sort of accountability of performance of the scheme.
        The Company reserves the right to make modifications. The information is obtained from publicly available media or other sources believed to be reliable. Such information has not been independently verified and no guaranty, representation or warranty, express or implied, is made as to its accuracy, completeness or correctness. No representation or warranty, express or implied, is made as to the accuracy, completeness, or fairness of the information and opinions contained in this document. Alternations to this statement as may be required from time to time.

        Copyright @2025 FundAura 						All rights reserved
      </div>
    </footer>
  );
}
