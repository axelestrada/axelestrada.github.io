"use client";

import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  JavaScriptIcon,
  ReactIcon,
  SqlIcon,
  Typescript01Icon,
  WebDesign02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { Project } from "@/components/Project/Project";

export const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="projects"
      className="pt-[20svh] w-full min-h-svh flex flex-col justify-center items-center px-3 max-w-xl md:max-w-4xl md:px-8 mx-auto md:min-h-full"
    >
      <div className="relative mb-4">
        <h2 className="text-2.5xl font-extrabold mb-2 text-center md:text-left md:text-accent">
          Mis proyectos
        </h2>
        <p className="text-foreground-65 text-lg text-center md:text-left font-light">
          Aquí encontrarás algunos de los proyectos que he desarrollado a lo
          largo de mi trayectoria como desarrollador. Si deseas explorar más, te
          invito a visitar mi perfil de{" "}
          <a
            href="https://github.com/axelestrada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold cursor-pointer inline-block hover:scale-105 transition-transform"
          >
            GitHub
          </a>
          , donde encontrarás otros repositorios con mis trabajos.
        </p>
      </div>

      <div className="mt-12 w-full md:grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-8">
        <Project
          imageAlt="Monety App"
          imageSrc="/images/monety-cover.png"
          title="Monety - Budget & Expenses Tracker"
          description="Aplicación móvil de gestión financiera personal que permite registrar transacciones, analizar gastos, gestionar cuentas y sincronizar datos en tiempo real. Incluye categorización inteligente, estadísticas avanzadas, backups locales y en la nube."
          linkToDemo="https://monety.framer.website"
          techStack={[
            { icon: ReactIcon, title: "React Native" },
            { icon: Typescript01Icon, title: "TypeScript" },
            { icon: WebDesign02Icon, title: "Tailwind / NativeWind" },
          ]}
        />

        <Project
          imageAlt="Mi Pulpería App"
          imageSrc="/images/mi-pulperia.png"
          title="Mi Pulpería - Sistema de Punto de Venta"
          description="Aplicación de escritorio diseñada para la gestión integral de una pulpería o pequeño comercio. Incluye módulo de punto de venta (POS), control de inventario, gestión de clientes, sesiones de caja y reportes. Construida como solución offline-first con base de datos local y arquitectura modular."
          linkToGithub="https://github.com/axelestrada/mi-pulperia"
          linkToDemo="https://github.com/axelestrada/mi-pulperia/releases/latest"
          techStack={[
            { icon: ReactIcon, title: "React" },
            { icon: Typescript01Icon, title: "TypeScript" },
            { icon: ReactIcon, title: "Electron" },
            { icon: SqlIcon, title: "SQLite" },
          ]}
        />

        {showMore && (
          <>
            <Project
              imageAlt="Markdown Notes"
              imageSrc="/images/markdown-notes.png"
              title="Markdown Notes"
              description="Aplicación web creada con Angular 19 para gestionar notas en formato Markdown. Incluye editor con vista previa en tiempo real, organización de notas y exportación a archivos .md para un flujo de trabajo rápido y minimalista."
              linkToGithub="https://github.com/axelestrada/markdown-notes"
              linkToDemo="https://axelestrada.github.io/markdown-notes"
              techStack={[
                { icon: JavaScriptIcon, title: "Angular" },
                { icon: Typescript01Icon, title: "TypeScript" },
                { icon: WebDesign02Icon, title: "Tailwind CSS" },
              ]}
            />

            <Project
              imageAlt="Portafolio Personal"
              imageSrc="/images/portfolio-cover.png"
              title="Portafolio Personal"
              description="Sitio web profesional desarrollado para mostrar mi trabajo, experiencia y proyectos. Construido con un enfoque minimalista, animaciones fluidas y un diseño centrado en la claridad y la accesibilidad."
              linkToGithub="https://github.com/axelestrada/axelestrada.github.io"
              linkToDemo="https://axelestrada.github.io"
              techStack={[
                { icon: ReactIcon, title: "NextJS" },
                { icon: Typescript01Icon, title: "TypeScript" },
                { icon: WebDesign02Icon, title: "Tailwind CSS" },
              ]}
            />
          </>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-8 cursor-pointer md:col-span-full flex items-center gap-2 mx-auto"
          type="button"
        >
          {showMore ? "Mostrar menos" : "Mostrar más"}
          <HugeiconsIcon
            icon={showMore ? ArrowUp01Icon : ArrowDown01Icon}
            size={18}
            color="currentColor"
          />
        </button>
      </div>
    </section>
  );
};
