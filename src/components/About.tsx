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
      if (["who", "mission", "vision", "values", "why"].includes(hash)) {
        setOpenSection(hash);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
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
          <div className="badge">{SITE.highlight}</div>
          <h2 className="page-heading">About the Initiative</h2>
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
            >
              <p className="muted mt-8">
                We are a next-generation FinTech startup redefining the way individuals and institutions manage,
                grow, and protect their wealth. At the core of our platform is advanced AI—built to eliminate
                complexity, uncover smarter opportunities, and deliver personalized investment strategies in real time.
              </p>

              <p className="muted mt-8">
                Our goal is simple: to make intelligent investing accessible, transparent, and efficient. Whether
                you're building your first portfolio or managing multi-million-rupee assets, our technology and
                team of experts work together to optimize performance, manage risk, and align decisions with your goals.
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
            >
              <p className="muted mt-8">
                To empower individuals and institutions to achieve financial independence by delivering innovative,
                transparent, and personalized wealth generation, fund management,
                and investment solutions that build lasting value and financial resilience.
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
            >
              <p className="muted mt-8">
                To be a trusted leader in investment excellence—reshaping the future of wealth by combining expert
                insights, cutting-edge technology, and client-first strategies to unlock sustainable financial growth.
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
            >
              <ul className="muted mt-8">
                <li>Put client interests first</li>
                <li>Maintain high professional standards</li>
                <li>Preserve confidentiality</li>
                <li>Use resources efficiently</li>
              </ul>
            </div>
          </div>

          {/* Why Us */}
          <div id="why" className="dropdown">
            <button
              className={`dropdown-header ${openSection === "why" ? "active" : ""}`}
              onClick={() => toggleSection("why")}
              aria-expanded={openSection === "why"}
              aria-controls="why-content"
            >
              Why Us?
              <span className="arrow">{openSection === "why" ? "▲" : "▼"}</span>
            </button>

            <div
              id="why-content"
              className={`dropdown-content ${openSection === "why" ? "open" : ""}`}
              role="region"
            >
              <div className="muted mt-8 why-list">

                <div>
                  <h4>Trust and Performance</h4>
                  <p className="muted mt-8">
                    We have built trust and delivered performance with focus and rigorous execution over 14+ years.
                  </p>
                </div>

                <div>

                  <h4>Client Centric Approach</h4>
                  <p className="muted mt-8">
                    We understand your goals, risk profile, and long-term vision to craft tailored financial strategies.
                  </p>
                </div>

                <div>



                  <h4>Dedicated Wealth Managers</h4>
                  <p className="muted mt-8">
                    Our relationship managers are just a WhatsApp call away to help you manage your money.
                  </p>
                </div>

                <div>
                  <h4>Digital Solutions</h4>
                  <p className="muted mt-8">
                    Our technology helps you track, invest, and plan your financial goals efficiently.
                  </p>
                </div>

                <div>
                  <h4>Expert Leadership Team</h4>
                  <p className="muted mt-8">
                    Guided by values of client centricity, integrity, and trust, our leadership team drives innovation.
                  </p>
                </div>

                <div>
                  <h4>Innovative Solutions</h4>
                  <p className="muted mt-8">
                    We provide a wide range of innovative tools, insights, and strategies powered by advanced technologies.
                  </p>
                </div>

                <div>
                  <h4>Strong Research Team</h4>
                  <p className="muted mt-8">
                    Our equity research team tracks 200+ BSE/NSE listed companies and is among the best in India.
                  </p>
                </div>

                <div>
                  <h4>Low Management Charges</h4>
                  <p className="muted mt-8">
                    We charge significantly lower management fees compared to other market players.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
