import React from 'react';
import { SITE } from '../data/site';

export default function About(): JSX.Element {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title center">
          <div className="badge alt">{SITE.highlight}</div>
          <h2 className="mt">About the Initiative</h2>
        </div>
        <div>
          <h2 className="mt">Who Are We?</h2>
          <p className="muted mt-8">We are a next-generation FinTech startup redefining the way individuals and institutions manage, grow,
            and protect their wealth. At the core of our platform is advanced AI—built to eliminate complexity,
            uncover smarter opportunities, and deliver personalized investment strategies in real time.
        </p>
        <p className = "muted mt-8">
            Our goal is simple: to make intelligent investing accessible, transparent, and efficient. Whether you're
            building your first portfolio or managing multi-million-rupees assets, our technology and team of
            experts work together to optimize performance, manage risk, and align every decision with your goals.

        </p>
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

        <h2 className="mt-16">Values</h2>
        <ul>
          <li>Put client interests ahead of our firm’s</li>
          <li>Maintain high standards, ethics and conditions for client service</li>
          <li>Preserve client confidences</li>
          <li>Manage client and firm resources cost-effectively</li>
        </ul>

      </div>
    </section>
  );
}