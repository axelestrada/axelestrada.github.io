import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axel Estrada | Desarrollador Full Stack",
  description:
    "Portafolio de Axel Estrada, desarrollador full stack enfocado en construir productos completos: frontend moderno, APIs robustas, bases de datos y despliegues. Descubre mis proyectos, experiencia y habilidades técnicas.",
  openGraph: {
    title: "Axel Estrada | Desarrollador Full Stack",
    description:
      "Explora el portafolio de Axel Estrada: desarrollo full stack (web y apps), APIs, bases de datos y arquitectura. Enfoque en rendimiento, seguridad y buena UX.",
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
    title: "Axel Estrada | Desarrollador Full Stack",
    description:
      "Portafolio de Axel Estrada: desarrollo full stack con enfoque en rendimiento, seguridad y experiencia de usuario. Web, APIs, bases de datos y despliegues.",
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
