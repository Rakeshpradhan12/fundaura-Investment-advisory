import React, { useState, useEffect } from "react";
import { SITE } from "../data/site";

export default function About(): JSX.Element {
  const [openSection, setOpenSection] = useState<string | null>("who");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Auto-open ONLY when clicking a #hash link
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      if (["who", "mission", "vision", "values"].includes(hash)) {
        setOpenSection(hash);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    // run when page loads with a hash
    onHashChange();

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
          <div id="who" className="dropdown">
            <button
              className={`dropdown-header ${openSection === "who" ? "active" : ""}`}
              onClick={() => toggleSection("who")}
            >
              Who Are We?
              <span className="arrow">{openSection === "who" ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-content ${openSection === "who" ? "open" : ""}`}>
              <p className="muted mt-8">
                We are a next-generation FinTech startup redefining wealth management…
              </p>
              <p className="muted mt-8">
                Our goal is simple: make intelligent investing accessible…
              </p>
            </div>
          </div>

          {/* Mission */}
          <div id="mission" className="dropdown">
            <button
              className={`dropdown-header ${openSection === "mission" ? "active" : ""}`}
              onClick={() => toggleSection("mission")}
            >
              Our Mission
              <span className="arrow">{openSection === "mission" ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-content ${openSection === "mission" ? "open" : ""}`}>
              <p className="muted mt-8">
                To empower individuals and institutions with transparent wealth solutions…
              </p>
            </div>
          </div>

          {/* Vision */}
          <div id="vision" className="dropdown">
            <button
              className={`dropdown-header ${openSection === "vision" ? "active" : ""}`}
              onClick={() => toggleSection("vision")}
            >
              Our Vision
              <span className="arrow">{openSection === "vision" ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-content ${openSection === "vision" ? "open" : ""}`}>
              <p className="muted mt-8">
                To be a trusted leader in investment excellence…
              </p>
            </div>
          </div>

          {/* Values */}
          <div id="values" className="dropdown">
            <button
              className={`dropdown-header ${openSection === "values" ? "active" : ""}`}
              onClick={() => toggleSection("values")}
            >
              Our Values
              <span className="arrow">{openSection === "values" ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-content ${openSection === "values" ? "open" : ""}`}>
              <ul className="muted mt-8">
                <li>Put client interests first</li>
                <li>Maintain high professional standards</li>
                <li>Preserve confidentiality</li>
                <li>Use resources efficiently</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
