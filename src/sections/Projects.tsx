"use client";

import React, { useState } from "react";
import { Project } from "@/components/Project/Project";
import {
  JavaScriptIcon,
  ReactIcon,
  Typescript01Icon,
  WebDesign02Icon,
  ArrowDown01Icon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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

        {showMore && (
          <>
            <Project
              imageAlt="Portafolio Personal"
              imageSrc="/images/portfolio-cover.png"
              title="Portafolio Personal"
              description="Sitio web profesional desarrollado para mostrar mi trabajo, experiencia y proyectos. Construido con un enfoque minimalista, animaciones fluidas y un diseño centrado en la claridad y la accesibilidad."
              linkToGithub="https://github.com/axelestrada/axelestrada.github.io"
              linkToDemo="https://axelestrada.github.io"
              techStack={[
                { icon: ReactIcon, title: "Next.js" },
                { icon: Typescript01Icon, title: "TypeScript" },
                { icon: WebDesign02Icon, title: "Tailwind CSS" },
              ]}
            />

            <Project
              imageAlt="Temporizador Pomodoro"
              imageSrc="/images/pomodoro-timer.png"
              title="Temporizador Pomodoro"
              description="Temporizador basado en la técnica Pomodoro que divide el trabajo en ciclos de enfoque y descanso. Ofrece ajustes personalizables y una interfaz simple y clara que ayuda a mantener la productividad sin distracciones."
              linkToGithub="https://github.com/axelestrada/pomodoroapp"
              linkToDemo="https://axelestrada.github.io/pomodoroapp"
              techStack={[
                { icon: ReactIcon, title: "ReactJS" },
                { icon: Typescript01Icon, title: "TypeScript" },
              ]}
            />
          </>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-8 cursor-pointer md:col-span-full flex items-center gap-2 mx-auto"
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
