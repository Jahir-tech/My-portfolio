"use client";

import { useState } from "react";

const resumePath = "/Jahir_Williams_Web_Dev_Resume.pdf";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="portfolio-header">
      <div className="header-inner">
        <a className="wordmark" href="#top" aria-label="Jahir Williams, home">
          <span className="wordmark-icon">JW<span>.</span></span>
          <span className="wordmark-name">JAHIR WILLIAMS</span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`portfolio-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Read resume <span aria-hidden="true">↗</span>
          </a>
          <a
            href={resumePath}
            download
            onClick={() => setMenuOpen(false)}
          >
            Download resume <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </div>
    </header>
  );
}