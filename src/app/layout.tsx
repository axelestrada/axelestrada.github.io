import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axel Estrada",
  description: "Desarrollador Frontend especializado en React y React Native.",
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
