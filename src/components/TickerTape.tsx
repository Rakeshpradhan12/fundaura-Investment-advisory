import React from 'react';

const tickerData = [
  { symbol: 'NIFTY50', price: 26083.40, change: 0.45 },        // Nifty 50 Index [finance:Nifty 50]
  { symbol: 'SENSEX', price: 85463.68, change: 0.52 },         // BSE Sensex [finance:BSE Sensex]
  { symbol: 'BANKNIFTY', price: 58889.35, change: 1.08 },      // Bank Nifty [finance:Bank Nifty]
  { symbol: 'GOLD24K', price: 12426, change: -0.48 },          // 24 Karat Gold (per gram)
  { symbol: 'SILVER', price: 165, change: -1.79 },             // Silver (per gram)
  { symbol: 'CRUDEOIL', price: 5670.20, change: 0.06 },        // Crude Oil (per barrel)
  { symbol: 'BTCINR', price: 8115967.38, change: 0.25 },       // Bitcoin [finance:Bitcoin]
  { symbol: 'ETHINR', price: 249351.47, change: -0.91 },       // Ethereum [finance:Ethereum]
  { symbol: 'USDINR', price: 88.70, change: 0.10 },            // US Dollar to INR
  { symbol: 'GBPINR', price: 115.20, change: 0.02 },           // British Pound to INR
  { symbol: 'EURINR', price: 96.50, change: -0.05 },           // Euro to INR

];

export default function Ticker() {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {tickerData.concat(tickerData).map((item, idx) => (
          <div className="ticker-item" key={idx}>
            <span className="symbol">{item.symbol}</span>
            <span className="price">{item.price}</span>
            <span className={`change ${item.change >= 0 ? 'positive' : 'negative'}`}>
              {item.change >= 0 ? `+${item.change}%` : `${item.change}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
