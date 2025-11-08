import React, { useState } from "react";
import { SITE } from "../data/site";

export default function About(): JSX.Element {
  const [openSection, setOpenSection] = useState<string | null>("who");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title center">
          <div className="badge alt">{SITE.highlight}</div>
          <h2 className="mt">About the Initiative</h2>
        </div>

        {/* Dropdown Sections */}
        <div className="dropdown-container">
          {/* Who Are We */}
          <div className="dropdown">
            <button
              className={`dropdown-header ${openSection === "who" ? "active" : ""}`}
              onClick={() => toggleSection("who")}
            >
              Who Are We?
              <span className="arrow">{openSection === "who" ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-content ${openSection === "who" ? "open" : ""}`}>
              <p className="muted mt-8">
                We are a next-generation FinTech startup redefining the way individuals and institutions manage, grow,
                and protect their wealth. At the core of our platform is advanced AI—built to eliminate complexity,
                uncover smarter opportunities, and deliver personalized investment strategies in real time.
              </p>
              <p className="muted mt-8">
                Our goal is simple: to make intelligent investing accessible, transparent, and efficient. Whether you're
                building your first portfolio or managing multi-million-rupee assets, our technology and team of experts
                work together to optimize performance, manage risk, and align every decision with your goals.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="dropdown">
            <button
              className={`dropdown-header ${openSection === "mission" ? "active" : ""}`}
              onClick={() => toggleSection("mission")}
            >
              Our Mission
              <span className="arrow">{openSection === "mission" ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-content ${openSection === "mission" ? "open" : ""}`}>
              <p className="muted mt-8">
                To empower individuals and institutions to achieve financial independence by delivering innovative,
                transparent, and personalized wealth generation, fund management, and wealth management solutions that
                build lasting value and financial resilience.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="dropdown">
            <button
              className={`dropdown-header ${openSection === "vision" ? "active" : ""}`}
              onClick={() => toggleSection("vision")}
            >
              Our Vision
              <span className="arrow">{openSection === "vision" ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-content ${openSection === "vision" ? "open" : ""}`}>
              <p className="muted mt-8">
                To be a trusted leader in investment excellence—reshaping the future of wealth by combining expert
                insights, cutting-edge technology, and client-first strategies to unlock sustainable financial growth
                for all.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="dropdown">
            <button
              className={`dropdown-header ${openSection === "values" ? "active" : ""}`}
              onClick={() => toggleSection("values")}
            >
              Our Values
              <span className="arrow">{openSection === "values" ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-content ${openSection === "values" ? "open" : ""}`}>
              <ul className="muted mt-8">
                <li>Put client interests ahead of our firm’s</li>
                <li>Maintain high standards, ethics, and conditions for client service</li>
                <li>Preserve client confidences</li>
                <li>Manage client and firm resources cost-effectively</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
