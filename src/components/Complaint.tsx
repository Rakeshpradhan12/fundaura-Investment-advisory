import React from 'react';

export default function Complaint(): JSX.Element {
  return (
    <section id="complaint" className="section alt">
      <div className="container">
        <div className="section-title">
          <div className="badge">Support</div>
          <h2>Complaint Board &amp; Investor Charter</h2>
        </div>
        <p className="muted maxw">
          Publish your grievance redressal process, escalation matrix, and links to Investor Charter / SCORES as required.
        </p>
        <div className="row gap-12 mt-16">
          <a className="btn outline" href="#">Terms of Use</a>
          <a className="btn outline" href="#">Privacy Policy</a>
          <a className="btn outline" href="#">Investor Charter</a>
        </div>
      </div>
    </section>
  );
}