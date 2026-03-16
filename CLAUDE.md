# Dive Automations — Landing Page

## Proyecto
Landing page para **Dive**, agencia de automatización e inteligencia artificial basada en Uruguay. El sitio está 100% en español y apunta a empresas medianas y grandes del mercado hispanohablante.

**URL de producción:** diveautomations.com  
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion  
**Despliegue:** Vercel  

## Estructura del proyecto

```
dive-landing/
├── app/
│   ├── layout.tsx          # Root layout, fuentes, metadata SEO
│   ├── page.tsx            # Página principal (composición de secciones)
│   └── globals.css         # Variables CSS, estilos base, Tailwind
├── components/
│   ├── ui/                 # Componentes atómicos reutilizables (Button, Card, Badge, etc.)
│   ├── sections/           # Secciones de la landing (Hero, Services, Cases, Methodology, FAQ, Contact)
│   ├── layout/             # Header, Footer, MobileNav
│   └── animations/         # Wrappers de Framer Motion (FadeIn, SlideUp, StaggerChildren)
├── lib/
│   ├── constants.ts        # Textos, datos de secciones, FAQs, casos de uso
│   └── utils.ts            # Helpers (cn para classnames, etc.)
├── public/
│   ├── images/             # Imágenes optimizadas, logo, favicon
│   └── fonts/              # Fuentes locales si aplica
├── CLAUDE.md
└── CONTENT.md              # Contenido completo de cada sección
```

## Estilo de código

- TypeScript estricto. Nunca usar `any`.
- Componentes funcionales con `export default`. Un componente por archivo.
- Nombrar archivos de componentes en PascalCase: `HeroSection.tsx`, `ServiceCard.tsx`.
- Nombrar archivos de utilidades en camelCase: `constants.ts`, `utils.ts`.
- Usar Tailwind exclusivamente para estilos. NO crear archivos CSS separados por componente.
- Usar `cn()` (clsx + tailwind-merge) para combinar clases condicionales.
- Preferir `const` sobre `let`. Nunca usar `var`.
- Las props de componentes se definen con `interface` (no `type`) justo encima del componente.

## Diseño y estética

**IMPORTANTE: Este sitio NO debe parecer generado por IA. Debe sentirse como diseño de agencia premium.**

- **Paleta principal:**
  - Azul oscuro (headings/fondos): `#0B2545`
  - Teal/verde agua (acentos, CTAs): `#13808C` 
  - Blanco: `#FFFFFF`
  - Gris claro (fondos alternos): `#F4F7FA`
  - Texto body: `#374151`

- **Tipografía:** Usar Google Fonts. Display/headings: fuente bold con personalidad (ej: Outfit, Sora, o Clash Display). Body: fuente legible y moderna (ej: DM Sans, Plus Jakarta Sans). NO usar Inter, Roboto ni Arial.

- **Animaciones:** Framer Motion para scroll-triggered reveals. Stagger en listas y cards. Transiciones suaves de 0.4-0.6s con easing. NO animar todo — ser selectivo y elegante.

- **Layout:** Secciones full-width con contenido centrado (max-w-7xl). Alternar fondos claros/oscuros entre secciones. Espaciado generoso entre secciones (py-24 mínimo).

- **Cards:** Bordes sutiles, sombras suaves, hover con elevación. Esquinas redondeadas (rounded-2xl).

- **Responsive:** Mobile-first. Breakpoints: sm(640), md(768), lg(1024), xl(1280). El menú mobile debe ser un drawer/overlay.

## Secciones de la landing (en orden)

1. **Header** — Logo + nav sticky + CTA "Agendar llamada"
2. **Hero** — Headline principal, subtítulo, CTA primario y secundario
3. **Servicios** ("Nuestro Expertise") — 3 cards: Agentes IA, Automatización de Procesos, Inteligencia Documental (IA con tus documentos)
4. **Casos por industria** — 4 cards con: industria, desafío, implementación, resultado clave
5. **Metodología** — 4 pasos numerados en fondo oscuro
6. **FAQ** — Acordeón expandible con 6 preguntas
7. **Contacto** — Formulario + datos de contacto (WhatsApp, email, llamada)
8. **Footer** — Links, logo, copyright

## Contenido

Todo el contenido textual está en `CONTENT.md`. Leerlo antes de implementar cualquier sección. Los textos ya están aprobados — usarlos tal cual.

## Comandos

```bash
npm run dev        # Servidor de desarrollo (localhost:3000)
npm run build      # Build de producción
npm run lint       # ESLint
npx tsc --noEmit   # Typecheck sin compilar
```

## Verificación

Después de cada cambio significativo:
1. Correr `npx tsc --noEmit` para verificar tipos
2. Correr `npm run lint` para verificar estilo
3. Verificar visualmente en el navegador en desktop Y mobile
4. Asegurarse de que las animaciones no rompan el layout

## Reglas críticas

- NUNCA hardcodear textos en componentes. Siempre importar de `lib/constants.ts`.
- NUNCA usar `px` para spacing/sizing. Usar las utilidades de Tailwind.
- NUNCA poner lógica de negocio en componentes de UI.
- SIEMPRE que crees un componente nuevo, exportarlo con `export default`.
- SIEMPRE usar semantic HTML: `<section>`, `<nav>`, `<main>`, `<footer>`, `<article>`.
- SIEMPRE incluir atributos `alt` descriptivos en imágenes.
- El sitio DEBE cargar en menos de 3 segundos. Optimizar imágenes, lazy load donde aplique.
