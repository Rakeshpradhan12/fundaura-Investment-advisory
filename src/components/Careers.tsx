import React from 'react';
import { SITE } from '../data/site';

export default function Careers(): JSX.Element {
  return (
    <section id="careers" className="section">
      <div className="container" id='open-roles'>
        <div className="section-title">
          <div className="badge">Careers</div>
          <h2>Work with {SITE.brand}</h2>
        </div>
        <p className="muted maxw">
          We're always exploring great talent in research, advisory, and client success. Share your CV at {SITE.contact.email}.
        </p>
        <a className="btn outline mt-16" href="#contact" >
          See Open Roles
        </a>
      </div>
    </section>
  );
}