import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axel Estrada | Desarrollador Frontend",
  description:
    "Portafolio de Axel Estrada, desarrollador frontend con enfoque en crear interfaces modernas, rápidas y escalables. Experiencia trabajando con APIs, bases de datos y arquitectura backend para construir productos completos con una mejor integración entre frontend y backend.",
  openGraph: {
    title: "Axel Estrada | Desarrollador Frontend",
    description:
      "Explora el portafolio de Axel Estrada: desarrollo frontend moderno con conocimiento en APIs, bases de datos y arquitectura backend. Enfoque en rendimiento, experiencia de usuario y productos bien integrados.",
    type: "website",
    url: "https://axelestrada.github.io",
    siteName: "Axel Estrada",
    images: {
      url: "https://axelestrada.github.io/images/axelestrada_preview.webp",
      alt: "Axel Estrada",
      width: 1280,
      height: 640,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Axel Estrada | Desarrollador Frontend",
    description:
      "Portafolio de Axel Estrada: frontend moderno con experiencia integrando APIs, bases de datos y servicios backend para construir aplicaciones completas y escalables.",
    images: {
      url: "https://axelestrada.github.io/images/axelestrada_preview.webp",
      alt: "Axel Estrada",
      width: 1280,
      height: 640,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}