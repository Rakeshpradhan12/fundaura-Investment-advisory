import React from 'react';
import { SITE } from '../data/site';

export default function About(): JSX.Element {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title center">
          <div className="badge alt">{SITE.highlight}</div>
          <h2>About the Initiative</h2>
        </div>
        <div className="grid2 gap-24">
          <div className="card p-24">
            <h3>Our Mission</h3>
            <p className="muted mt-8">
              To empower individuals and institutions to achieve financial independence by delivering innovative, transparent, and personalized wealth generation, fund management, and wealth management solutions that build lasting value and financial resilience.            </p>
          </div>
          <div className="card p-24">
            <h3>Our Vision</h3>
            <p className="muted mt-8">
              To be a trusted leader in investment excellence—reshaping the future of wealth by combining expert insights, cutting-edge technology, and client-first strategies to unlock sustainable financial growth for all.            </p>
          </div>
        </div>
      </div>
    </section>
  );
}