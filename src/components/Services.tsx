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
        </div>
        <div className="grid3 gap-16">
          {SITE.services.map((s) => (
            <div key={s.code} className="card p-24">
              <div className="row space-between small text-muted">
                <span>#{s.code}</span>
                <span className="chip">Risk: {s.risk}</span>
              </div>
              <h3 className="mt-8">{s.name}</h3>
              <div className="text-muted">{s.type}</div>
              <div className="mt-8">
                <strong>Minimum Investment:</strong> {s.min}
              </div>
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