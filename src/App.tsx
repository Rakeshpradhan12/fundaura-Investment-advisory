import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import KPIs from './components/KPIs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Complaint from './components/Complaint';
import Footer from './components/Footer';

export default function App(): JSX.Element {
  return (
    <div id="home">
      <Header />
      <Hero />
      <About />
      <Services />
      <KPIs />
      <Pricing />
      <Contact />
      <Careers />
      <Complaint />
      <Footer />
    </div>
  );
}