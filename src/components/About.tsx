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
        }, 100); // allow element to open before scrolling
      }
    };

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
              aria-expanded={openSection === "who"}
              aria-controls="who-content"
            >
              Who Are We?
              <span className="arrow">{openSection === "who" ? "▲" : "▼"}</span>
            </button>
            <div
              id="who-content"
              className={`dropdown-content ${openSection === "who" ? "open" : ""}`}
              role="region"
              aria-labelledby="who"
            >
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
              aria-expanded={openSection === "mission"}
              aria-controls="mission-content"
            >
              Our Mission
              <span className="arrow">{openSection === "mission" ? "▲" : "▼"}</span>
            </button>
            <div
              id="mission-content"
              className={`dropdown-content ${openSection === "mission" ? "open" : ""}`}
              role="region"
              aria-labelledby="mission"
            >
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
              aria-expanded={openSection === "vision"}
              aria-controls="vision-content"
            >
              Our Vision
              <span className="arrow">{openSection === "vision" ? "▲" : "▼"}</span>
            </button>
            <div
              id="vision-content"
              className={`dropdown-content ${openSection === "vision" ? "open" : ""}`}
              role="region"
              aria-labelledby="vision"
            >
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
              aria-expanded={openSection === "values"}
              aria-controls="values-content"
            >
              Our Values
              <span className="arrow">{openSection === "values" ? "▲" : "▼"}</span>
            </button>
            <div
              id="values-content"
              className={`dropdown-content ${openSection === "values" ? "open" : ""}`}
              role="region"
              aria-labelledby="values"
            >
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
