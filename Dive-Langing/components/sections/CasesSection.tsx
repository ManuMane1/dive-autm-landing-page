"use client";

import { motion, type Variants } from "framer-motion";
import { CASES } from "@/lib/constants";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function CasesSection() {
  return (
    <section id="casos" className="bg-white pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Encabezado ─────────────────────────────────────────── */}
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
            {CASES.sectionLabel}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight"
          >
            {CASES.headline}
          </motion.h2>
        </motion.div>

        {/* ── Grid de casos ──────────────────────────────────────── */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {CASES.items.map((item) => (
            <motion.article
              key={item.industry}
              variants={cardVariant}
              className="group bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              {/* Badge industria */}
              <span className="self-start inline-flex items-center bg-navy/5 text-navy text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-7">
                {item.industry}
              </span>

              {/* Desafío */}
              <div className="mb-5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">
                  Desafío
                </p>
                <p className="text-navy font-medium text-sm leading-relaxed">
                  {item.challenge}
                </p>
              </div>

              {/* Implementación */}
              <div className="mb-6">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">
                  Solución implementada
                </p>
                <p className="text-body text-sm leading-relaxed">
                  {item.implementation}
                </p>
              </div>

              {/* Resultado clave */}
              <div className="mt-auto pt-5 border-t border-gray-100 flex items-center gap-3">
                <span
                  aria-hidden
                  className="shrink-0 w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    className="w-3 h-3 text-teal"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-teal font-semibold text-sm leading-snug">
                  {item.result}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
