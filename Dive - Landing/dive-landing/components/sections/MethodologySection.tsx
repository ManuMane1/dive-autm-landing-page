"use client";

import { motion, type Variants } from "framer-motion";
import { METHODOLOGY } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const headerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stepsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const stepVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function MethodologySection() {
  const { sectionLabel, headline, steps, quote, complementaryText, cta } =
    METHODOLOGY;

  return (
    <section id="metodologia" className="bg-navy py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Encabezado ─────────────────────────────────────────── */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-xl mb-16 lg:mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-teal text-xs font-semibold tracking-[0.22em] uppercase mb-4"
          >
            {sectionLabel}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
          >
            {headline}
          </motion.h2>
        </motion.div>

        {/* ── Pasos ──────────────────────────────────────────────── */}
        <motion.ol
          variants={stepsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10"
          role="list"
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              variants={stepVariant}
              className="relative overflow-hidden px-0 py-10 md:py-10 md:px-8 first:pl-0 last:pr-0 flex flex-col"
            >
              {/* Número decorativo de fondo */}
              <span
                aria-hidden
                className="absolute bottom-0 right-0 md:right-2 font-display font-bold text-white leading-none select-none pointer-events-none"
                style={{
                  fontSize: "clamp(5rem, 10vw, 8rem)",
                  opacity: 0.055,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>

              {/* Mobile: indicador visual izquierdo */}
              <div className="md:hidden flex items-center gap-4 mb-5">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-teal/40 bg-teal/10 text-teal text-xs font-bold font-display shrink-0">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <span className="h-px flex-1 bg-white/10" />
                )}
              </div>

              {/* Desktop: etiqueta de paso */}
              <p className="hidden md:block text-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                PASO {step.number}
              </p>

              {/* Título */}
              <h3 className="font-display font-bold text-white text-xl leading-snug mb-3 relative z-10">
                {step.title}
              </h3>

              {/* Descripción */}
              <p className="text-white/55 text-sm leading-relaxed relative z-10 max-w-xs">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        {/* ── Separador ──────────────────────────────────────────── */}
        <div className="border-t border-white/10 mt-16 lg:mt-24" />

        {/* ── Quote + CTA ────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="pt-16 lg:pt-20 max-w-2xl mx-auto text-center"
        >
          {/* Comilla decorativa */}
          <motion.span
            variants={fadeUp}
            aria-hidden
            className="block font-display text-teal text-6xl leading-none mb-4 select-none"
          >
            &ldquo;
          </motion.span>

          <motion.blockquote
            variants={fadeUp}
            className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight mb-6"
          >
            {quote}
          </motion.blockquote>

          <motion.p
            variants={fadeUp}
            className="text-white/55 text-base leading-relaxed mb-10"
          >
            {complementaryText}
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors duration-200"
            >
              {cta}
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
