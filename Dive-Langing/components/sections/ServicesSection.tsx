"use client";

import { motion, type Variants } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const headerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// ─── Íconos inline ────────────────────────────────────────────────────────────

function IconAgent() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="w-6 h-6"
    >
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <path d="M9 18h6" />
      <path d="M12 8V5" />
      <circle cx="12" cy="3.5" r="1.5" />
    </svg>
  );
}

function IconFlow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="w-6 h-6"
    >
      <rect x="2" y="5" width="6" height="5" rx="1" />
      <rect x="2" y="14" width="6" height="5" rx="1" />
      <rect x="16" y="9" width="6" height="6" rx="1" />
      <path d="M8 7.5h4a2 2 0 0 1 2 2v1" />
      <path d="M8 16.5h4a2 2 0 0 0 2-2v-1" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="w-6 h-6"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7" />
      <path d="M14 2v6h6" />
      <path d="M8 13h5" />
      <path d="M8 9h6" />
      <circle cx="17.5" cy="17.5" r="3" />
      <path d="M21 21l-1.5-1.5" />
    </svg>
  );
}

const ICONS = [IconAgent, IconFlow, IconDoc];

// ─── Componente ───────────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-gray-light pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Encabezado de sección */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-teal text-xs font-semibold tracking-[0.22em] uppercase mb-4"
          >
            {SERVICES.sectionLabel}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-4"
          >
            {SERVICES.headline}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body text-lg leading-relaxed">
            {SERVICES.description}
          </motion.p>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.cards.map((card, index) => {
            const Icon = ICONS[index];
            return (
              <motion.article
                key={card.title}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow duration-300 cursor-default"
              >
                {/* Ícono */}
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal shrink-0">
                  <Icon />
                </div>

                {/* Título */}
                <h3 className="font-display font-bold text-navy text-xl mt-6 mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Descripción */}
                <p className="text-body text-sm leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5 mb-8" role="list">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-body">
                      <span
                        aria-hidden
                        className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-teal/10 flex items-center justify-center"
                      >
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          className="w-2.5 h-2.5 text-teal"
                        >
                          <path
                            d="M1.5 5l2.5 2.5 4.5-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-teal font-semibold text-sm hover:text-teal-dark transition-colors duration-200 group"
                  >
                    Quiero esta solución
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
