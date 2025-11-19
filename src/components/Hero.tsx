import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SITE } from '../data/site';

interface TickerItem {
  label: string;
  value: string;
}

export default function Hero(): JSX.Element {
  const [tickerData, setTickerData] = useState<TickerItem[]>([
    { label: 'Gold (22K)', value: '₹5,000 per 10g, up 0.5% today' },
    { label: 'Sensex', value: '64,000 points, up 120 points' },
    { label: 'Nifty 50', value: '19,000 points, +0.63%' },
    { label: 'Silver', value: '₹65,000 per kg, steady' },
    { label: 'USD/INR', value: '₹83.50, +0.15%' },
    { label: 'Crude Oil (Brent)', value: '$85.30/barrel, down 0.5%' },
    { label: 'Bitcoin', value: '$34,500, up 1.2%' },
    { label: 'Ethereum', value: '$2,450, up 0.8%' },
    { label: 'Corporate Bonds', value: 'AAA 8.2%, Stable' },
    { label: 'Mutual Funds', value: 'Avg NAV growth 12% this year' },
  ]);

  const tickerTrackRef = useRef<HTMLDivElement>(null);

  // Optional: fetch live data from API
  useEffect(() => {
    // fetch('API_URL')
    //   .then(res => res.json())
    //   .then(data => setTickerData(data));
  }, []);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" />
      <div className="container grid2 hero-content">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge">{SITE.highlight}</div>
            <h1 className="h1">Welcome to {SITE.brand}</h1>
            <h5>by Riokap (Subsidiary of Aificon advisory and consulting pvt ltd)</h5>
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
            <form
              name="query"
              method="POST"
              data-netlify="true"
              className="grid gap-12 mt-12"
            >
              <input type="hidden" name="form-name" value="query" />
              <input required placeholder="Full Name" name="name" />
              <input required placeholder="Phone Number" name="phone" />
              <input required type="email" placeholder="Email" name="email" />
              <textarea
                required
                placeholder="Write your query"
                name="message"
                rows={4}
              ></textarea>
              <button className="btn" type="submit">
                Submit your query
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ===== Seamless Ticker ===== */}
      {/* ===== Seamless Ticker ===== */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[...tickerData, ...tickerData].map((item, index) => (
            <div key={index} className="ticker-item">
              <strong>{item.label}:</strong> {item.value}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
