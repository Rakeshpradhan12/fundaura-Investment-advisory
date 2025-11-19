import React, { useState } from "react";
import { SITE } from "../data/site";

export default function Header(): JSX.Element {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleSubLinkClick = () => {
    // Close submenu immediately on click
    setActiveMenu(null);
  };

  return (
    <header className="header sticky">
      <div className="container row space-between">
        <div className="row gap-8 center">
          <img src="/RioCaplogo.png" alt="Fundaura logo" className="logo" />
        </div>

        {/* Navigation */}
        <nav className="nav hide-sm">
          {SITE.nav.map((item) => (
            <div
              key={item.label}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.href} className="nav-link">
                {item.label}
              </a>

              {item.children && item.children.length > 0 && (
                <div
                  className="dropdown-menu"
                  style={{
                    display: activeMenu === item.label ? "block" : "none",
                    opacity: activeMenu === item.label ? 1 : 0,
                    transform:
                      activeMenu === item.label
                        ? "translateY(0px)"
                        : "translateY(5px)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="dropdown-link"
                      onClick={handleSubLinkClick}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
