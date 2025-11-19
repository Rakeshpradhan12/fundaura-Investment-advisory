import React from "react";
import { SITE } from "../data/site";

export default function Header() {
  return (
    <header className="header sticky">
      <div className="container row space-between">
        {/* Logo */}
        <div className="row gap-8 center">
          <img src="/RioCaplogo.png" alt="Fundaura logo" className="logo" />
        </div>

        {/* Desktop Navigation Only */}
        <nav className="nav">
          {SITE.nav.map((item) => (
            <div
              key={item.label}
              className="nav-item"
              tabIndex={0}
            >
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
              {item.children && item.children.length > 0 && (
                <div className="dropdown-menu">
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="dropdown-link"
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
