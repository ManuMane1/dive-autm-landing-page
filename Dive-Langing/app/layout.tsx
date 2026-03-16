import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dive Automations — IA y Automatización para tu Empresa",
  description:
    "Diseñamos agentes inteligentes y automatizaciones que resuelven problemas reales: responder consultas, procesar documentos, ordenar procesos y liberar a tu equipo para lo que importa.",
  metadataBase: new URL("https://diveautomations.com"),
  openGraph: {
    title: "Dive Automations — IA y Automatización para tu Empresa",
    description:
      "Implementamos IA que trabaja por tu negocio desde el día uno.",
    url: "https://diveautomations.com",
    siteName: "Dive Automations",
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${jakarta.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
