import Link from "next/link";
import { FOOTER, NAV_CTA } from "@/lib/constants";

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="w-5 h-5">
      <path d="M20.45 20.45h-3.554v-5.57c0-1.328-.024-3.037-1.85-3.037-1.853 0-2.137 1.447-2.137 2.942v5.665H9.355V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.369 4.266 5.452v6.287zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Franja superior */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Logo + tagline */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-display font-bold text-2xl text-white tracking-tight"
            >
              dive<span className="text-teal">.</span>
            </Link>
            <p className="mt-3 text-white/50 text-sm leading-relaxed">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + redes */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              {NAV_CTA}
            </a>
            <a
              href={FOOTER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Dive Automations"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-all duration-200"
            >
              <IconLinkedIn />
            </a>
            <a
              href={FOOTER.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Dive Automations"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-all duration-200"
            >
              <IconInstagram />
            </a>
          </div>

        </div>
      </div>

      {/* Franja inferior */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-white/35 text-xs">{FOOTER.copyright}</p>
          <p className="text-white/35 text-xs">{FOOTER.location}</p>
        </div>
      </div>
    </footer>
  );
}
