import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axel Estrada | Desarrollador Frontend",
  description:
    "Portafolio de Axel, desarrollador frontend enfocado en crear interfaces modernas y optimizadas utilizando tecnologías como React, Angular y Vue. Descubre mis proyectos, experiencia y habilidades técnicas.",
  openGraph: {
    title: "Axel Estrada | Desarrollador Frontend",
    description:
      "Explora el portafolio de Axel, experto en desarrollo frontend con tecnologías modernas. Diseño limpio, rendimiento optimizado y enfoque en UX.",
    type: "website",
    url: "https://axelestrada.github.io",
    siteName: "Axel Estrada",
    images: {
      url: "https://axelestrada.github.io/images/axelestrada_preview.png",
      alt: "Axel Estrada",
      width: 1280,
      height: 640,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Axel Estrada | Desarrollador Frontend",
    description:
      "Explora el portafolio de Axel, experto en desarrollo frontend con tecnologías modernas. Diseño limpio, rendimiento optimizado y enfoque en UX.",
    images: {
      url: "https://axelestrada.github.io/images/axelestrada_preview.png",
      alt: "Axel Estrada",
      width: 1280,
      height: 640,
    },
  },
  robots: {
    index: true,
    follow: true,
  }
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
