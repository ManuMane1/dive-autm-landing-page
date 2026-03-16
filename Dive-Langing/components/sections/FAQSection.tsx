"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FAQ } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const headerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const listContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section id="faq" className="bg-gray-light pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Encabezado ─────────────────────────────────────────── */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-teal text-xs font-semibold tracking-[0.22em] uppercase mb-4"
          >
            {FAQ.sectionLabel}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight"
          >
            {FAQ.headline}
          </motion.h2>
        </motion.div>

        {/* ── Acordeón ───────────────────────────────────────────── */}
        <motion.dl
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mx-auto"
        >
          {FAQ.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const btnId = `faq-btn-${index}`;

            return (
              <motion.div
                key={item.question}
                variants={listItem}
                className="border-b border-gray-200 first:border-t"
              >
                {/* Pregunta */}
                <dt>
                  <button
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span
                      className={`font-display font-semibold text-base sm:text-lg leading-snug transition-colors duration-200 ${
                        isOpen ? "text-teal" : "text-navy group-hover:text-teal"
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Ícono + que rota a × */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.28, ease: EASE }}
                      aria-hidden
                      className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-200 ${
                        isOpen
                          ? "border-teal bg-teal text-white"
                          : "border-gray-300 bg-white text-navy group-hover:border-teal group-hover:text-teal"
                      }`}
                    >
                      <svg
                        viewBox="0 0 14 14"
                        fill="none"
                        className="w-3.5 h-3.5"
                      >
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.span>
                  </button>
                </dt>

                {/* Respuesta */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="text-body text-base leading-relaxed pb-7 pr-14">
                        {item.answer}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.dl>

      </div>
    </section>
  );
}
