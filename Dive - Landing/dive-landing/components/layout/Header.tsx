"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, NAV_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detectar scroll + cerrar menú mobile al scrollear
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // El header es sólido si scrolled O si el menú está abierto
  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "font-display font-bold text-2xl tracking-tight transition-colors duration-300",
            solid ? "text-navy" : "text-white"
          )}
        >
          dive<span className="text-teal">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 hover:text-teal",
                solid ? "text-body" : "text-white/80"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-teal hover:bg-teal-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            {NAV_CTA}
          </a>
        </nav>

        {/* Hamburger mobile */}
        <button
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
            solid ? "text-navy" : "text-white"
          )}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition-transform duration-300 origin-center",
              mobileOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition-opacity duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition-transform duration-300 origin-center",
              mobileOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-body font-medium text-base hover:text-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="bg-teal hover:bg-teal-dark text-white px-5 py-3 rounded-full text-sm font-semibold text-center transition-colors duration-200"
          >
            {NAV_CTA}
          </a>
        </nav>
      </div>
    </header>
  );
}
