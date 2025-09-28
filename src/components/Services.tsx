import React from 'react';
import { SITE } from '../data/site';

export default function Services(): JSX.Element {
  return (
    <section id="services" className="section alt">
      <div className="container">
        <div className="section-title">
          <div className="badge">Services</div>
          <h2>Discover all the services</h2>
          <p className="muted mt-8">{SITE.servicesIntro}</p>
          <ul>
            {SITE.servicesPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className="muted mt-8">{SITE.servicesEnd}</p>
        </div>
        <div className="grid3 gap-16">
          {SITE.services.map((s) => (
            <div key={s.code} className="card p-24">
              {/* Header */}
              <div className="row space-between small text-muted">
                <span>#{s.code}</span>
                <span className={`chip ${s.risk.toLowerCase()}`}>Risk: {s.risk}</span>
              </div>

              {/* Title */}
              <h3 className="mt-8">{s.name}</h3>
              <div className="text-muted">{s.type}</div>

              {/* Details */}
              <div className="mt-8">
                <p><strong>Minimum Investment:</strong> {s.min}</p>
                {s.allocation && <p><strong>Asset Allocation:</strong> {s.allocation}</p>}
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

              {/* Button */}
              <a className="btn outline mt-16" href="#contact">
                Find out more
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}