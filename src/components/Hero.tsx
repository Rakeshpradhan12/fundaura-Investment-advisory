import React from 'react';
import { motion } from 'framer-motion';
import { SITE } from '../data/site';

export default function Hero(): JSX.Element {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" />
      <div className="container grid2 hero-content">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="badge">{SITE.highlight}</div>
            <h1 className="h1">Welcome to {SITE.brand} Investment Advisory</h1>
            <p className="muted">Strategic Insights. Simpler Decisions.</p>
            <div className="row gap-12 mt-16">
              <a href="#contact" className="btn">
                Send your query
              </a>
              <a href="#services" className="btn outline">
                Discover services
              </a>
            </div>
          </motion.div>
        </div>
        <div>
          <div className="card p-24">
            <h3>Send your query</h3>
            <form name="query" method="POST" data-netlify="true" className="grid gap-12 mt-12">
              <input type="hidden" name="form-name" value="query" />
              <input required placeholder="Full Name" name="name" />
              <input required placeholder="Phone Number" name="phone" />
              <input required type="email" placeholder="Email" name="email" />
              <textarea required placeholder="Write your query" name="message" rows={4}></textarea>
              <button className="btn" type="submit">
                Submit your query
              </button>
              <p className="hint">This form works on Netlify out-of-the-box. Or wire to your backend.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}