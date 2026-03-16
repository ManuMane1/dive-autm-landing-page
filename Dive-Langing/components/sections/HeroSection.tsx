"use client";

import { motion, type Variants } from "framer-motion";
import { HERO } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Teal radial glow — parte superior */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(19,128,140,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Grid decorativo muy sutil */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 md:pt-44 md:pb-36 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.p
            variants={item}
            className="text-teal text-xs font-semibold tracking-[0.22em] uppercase mb-6"
          >
            {HERO.sectionLabel}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            {HERO.headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            {HERO.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors duration-200"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white/75 hover:text-white font-medium px-8 py-4 rounded-full text-sm transition-all duration-200"
            >
              {HERO.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
