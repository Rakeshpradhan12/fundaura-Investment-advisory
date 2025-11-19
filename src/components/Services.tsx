import React from 'react';
import { SITE } from '../data/site';

export default function Services(): JSX.Element {
  return (
    <>
      <section id="services" className="section alt">
        <div className="container">
          <div className="section-title">
            <div className="badge">Services</div>
            <h2>Products & Services</h2>

            <p className="muted mt-8">{SITE.servicesIntro}</p>

            <ul>
              {SITE.servicesPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="muted mt-8">{SITE.servicesEnd}</p>
          </div>

          {/* ===================== WEALTH MANAGEMENT ===================== */}
          <h2 id="wealth">{SITE.servicesPoints[0]}</h2>

          <div className="grid3 gap-16">
            {SITE.services.map((s) => (
              <div key={s.code} className="card p-24">
                <div className="row space-between small text-muted">
                  <span className={`chip ${s.risk.toLowerCase()}`}>Risk: {s.risk}</span>
                </div>

                <h3 className="mt-8">{s.name}</h3>

                <div className="mt-8">
                  <p><strong>Minimum Investment:</strong> {s.min}</p>

                  {s.allocation && (
                    <div className="mt-8">
                      <strong>Asset Allocation:</strong>
                      <ul className="mt-4 pl-16">
                        {s.allocation.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {s.lockIn && <p><strong>Lock-in Period:</strong> {s.lockIn}</p>}
                  {s.withdrawal && <p><strong>Profit Withdrawal:</strong> {s.withdrawal}</p>}
                  {s.hurdleRate && <p><strong>Hurdle Rate:</strong> {s.hurdleRate}</p>}

                  {s.charges && (
                    <div className="mt-8">
                      <strong>Charges:</strong>
                      <ul className="mt-4 pl-16">
                        <li>AMC: {s.charges.amc}</li>
                        <li>Exit Fee: {s.charges.exit}</li>
                      </ul>
                    </div>
                  )}
                </div>

                <a className="btn outline mt-16" href="#contact">
                  Find out more
                </a>
              </div>
            ))}
          </div>

          {/* ===================== PORTFOLIO MANAGEMENT ===================== */}
          <h2 id="portfolio">{SITE.servicesPoints[1]}</h2>

          <div className="grid3 gap-16">
            {SITE.pms.map((s) => (
              <div key={s.code} className="card p-24">
                <div className="row space-between small text-muted">
                  <span className={`chip ${s.risk.toLowerCase()}`}>Risk: {s.risk}</span>
                </div>

                <h3 className="mt-8">{s.name}</h3>

                <div className="mt-8">
                  <p><strong>Minimum Investment:</strong> {s.min}</p>

                  {s.allocation && (
                    <div className="mt-8">
                      <strong>Asset Allocation:</strong>
                      <ul className="mt-4 pl-16">
                        {s.allocation.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {s.lockIn && <p><strong>Lock-in Period:</strong> {s.lockIn}</p>}
                  {s.withdrawal && <p><strong>Profit Withdrawal:</strong> {s.withdrawal}</p>}
                  {s.hurdleRate && <p><strong>Hurdle Rate:</strong> {s.hurdleRate}</p>}

                  {s.charges && (
                    <div className="mt-8">
                      <strong>Charges:</strong>
                      <ul className="mt-4 pl-16">
                        <li>AMC: {s.charges.amc}</li>
                        <li>Performance Fee: {s.charges.performance}</li>
                        <li>Exit Fee: {s.charges.exit}</li>
                      </ul>
                    </div>
                  )}
                </div>

                <a className="btn outline mt-16" href="#contact">
                  Find out more
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== ADVISORY SERVICES ===================== */}
        <div id="advisory" className="container mt-32">
          <div className="section-title">
            <h2>Advisory Services</h2>
          </div>

          <div className="grid4 gap-16">
            {SITE.pricing.map((p) => (
              <div key={p.name} className="card p-24">
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>

                <ul className="list mt-12">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <a className="btn mt-16" href="#contact">
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
