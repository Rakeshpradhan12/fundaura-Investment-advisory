import React from 'react';
import { SITE } from '../data/site';

export default function KPIs(): JSX.Element {
  return (
    <section className="kpis">
      <div className="container grid2 center">
        {SITE.kpis.map((k) => (
          <div key={k.label} className="kpi">
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-label">{k.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}