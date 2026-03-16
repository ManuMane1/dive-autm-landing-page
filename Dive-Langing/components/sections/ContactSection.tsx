"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CONTACT } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WEBHOOK = "https://n8n.diveautomations.com/webhook/landing-lead";

type FormStatus = "idle" | "loading" | "success" | "error";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const colLeft: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colRight: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay: 0.15 } },
};

// ─── Íconos ───────────────────────────────────────────────────────────────────

function IconCalendar() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden className="w-5 h-5">
      <rect x="3" y="4" width="14" height="13" rx="2" />
      <path d="M3 8h14" />
      <path d="M7 2v3M13 2v3" />
      <path d="M7 12h2M11 12h2M7 15h2" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden className="w-5 h-5">
      <rect x="2" y="5" width="16" height="11" rx="2" />
      <path d="M2 7l8 5 8-5" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5" aria-hidden>
      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

const CONTACT_ICONS = [IconCalendar, IconWhatsApp, IconEmail];

// ─── Componente principal ─────────────────────────────────────────────────────

export default function ContactSection() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (name: string, value: string) => {
    if (status === "error" || status === "success") setStatus("idle");
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: values.nombre ?? "",
          empresa: values.empresa ?? "",
          email: values.email ?? "",
          desafio: values.desafio ?? "",
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setValues({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <section id="contacto" className="bg-white pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Columna izquierda: info ──────────────────────────── */}
          <motion.div
            variants={colLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-teal text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            >
              CONTACTO
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-6"
            >
              {CONTACT.headline}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-body text-lg leading-relaxed mb-12"
            >
              {CONTACT.description}
            </motion.p>

            <motion.ul variants={fadeUp} className="flex flex-col gap-5" role="list">
              {CONTACT.contactInfo.map((info, index) => {
                const Icon = CONTACT_ICONS[index];
                return (
                  <li key={info.type}>
                    <a
                      href={info.href}
                      className="group flex items-center gap-4 text-body hover:text-navy transition-colors duration-200"
                      {...(info.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white transition-all duration-200 shrink-0">
                        <Icon />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-teal uppercase tracking-wider mb-0.5">
                          {info.type}
                        </p>
                        <p className="text-base font-medium text-navy">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* ── Columna derecha: formulario ───────────────────────── */}
          <motion.div
            variants={colRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-gray-light rounded-2xl p-8 lg:p-10 flex flex-col gap-6"
            >
              {/* Banner de éxito */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28 }}
                    role="status"
                    className="flex items-start justify-between gap-3 bg-teal/10 border border-teal/25 rounded-xl px-4 py-3.5 text-sm text-teal"
                  >
                    <div className="flex items-start gap-2.5">
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0 mt-0.5" aria-hidden>
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>
                        <strong className="font-semibold">¡Recibimos tu caso!</strong>
                        {" "}Nuestro equipo técnico va a analizar tu desafío. Te contactamos en menos de 24hs hábiles.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      aria-label="Cerrar"
                      className="shrink-0 text-teal/60 hover:text-teal transition-colors mt-0.5"
                    >
                      <IconClose />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Banner de error */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28 }}
                    role="alert"
                    className="flex items-start justify-between gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3.5 text-sm text-red-700"
                  >
                    <span>
                      Hubo un error al enviar. Probá de nuevo o escribinos a{" "}
                      <a
                        href="mailto:contact@diveautomations.com"
                        className="font-semibold underline underline-offset-2"
                      >
                        contact@diveautomations.com
                      </a>
                    </span>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      aria-label="Cerrar"
                      className="shrink-0 text-red-400 hover:text-red-600 transition-colors mt-0.5"
                    >
                      <IconClose />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Campos */}
              {CONTACT.formFields.map((field) =>
                field.type === "textarea" ? (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label htmlFor={field.name} className="text-sm font-semibold text-navy">
                      {field.label}
                      {field.required && <span aria-hidden className="text-teal ml-1">*</span>}
                    </label>
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={5}
                      disabled={isLoading}
                      value={values[field.name] ?? ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy placeholder-gray-400 resize-none focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                ) : (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label htmlFor={field.name} className="text-sm font-semibold text-navy">
                      {field.label}
                      {field.required && <span aria-hidden className="text-teal ml-1">*</span>}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      disabled={isLoading}
                      value={values[field.name] ?? ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                )
              )}

              {/* Botón submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 bg-teal hover:bg-teal-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wider py-4 rounded-full transition-colors duration-200 flex items-center justify-center gap-2.5"
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle cx="12" cy="12" r="10" stroke="currentColor"
                        strokeWidth="3" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor"
                        strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  CONTACT.cta
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
