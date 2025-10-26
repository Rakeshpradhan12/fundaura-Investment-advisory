import React from 'react';
import { SITE } from '../data/site';

export default function Pricing(): JSX.Element {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-title center">
          <div className="badge">Plans</div>
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
  );
}