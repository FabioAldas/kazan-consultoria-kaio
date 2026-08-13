"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#o-que-fazemos", label: "O que fazemos" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#nexo360", label: "Nexo360" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;

      if (open || y < 16) {
        setHidden(false);
        setScrolled(y > 16);
        lastY = y;
        return;
      }

      setScrolled(true);

      if (y > lastY + 6) {
        setHidden(true);
      } else if (y < lastY - 6) {
        setHidden(false);
      }

      lastY = y;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [open]);

  const className = [
    "header",
    open ? "header--open" : "",
    hidden && !open ? "header--hidden" : "",
    scrolled ? "header--scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <div className="header__inner">
        <Link className="header__brand" href="/" onClick={() => setOpen(false)}>
          Kazan
        </Link>

        <nav className="header__nav" id="menu-principal" aria-label="Principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a
            className="btn btn--primary"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            <span className="btn__label">
              Agendar<span className="header__cta-extra"> diagnóstico</span>
            </span>
            <span className="btn__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none">
                <rect
                  x="2.5"
                  y="3.6"
                  width="11"
                  height="10.2"
                  rx="1.6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path d="M2.5 7h11" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M5.3 2.3v2.6M10.7 2.3v2.6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <button
          className="header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="header__toggle-line" aria-hidden="true" />
          <span className="header__toggle-line" aria-hidden="true" />
          <span className="header__toggle-line" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
