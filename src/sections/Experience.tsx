"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, Briefcase01Icon } from "@hugeicons/core-free-icons";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Desarrollador Frontend",
      company: "Senprende",
      date: "Mayo 2025 - Diciembre 2025",
      description: [
        "Desarrollo y mantenimiento de plataformas internas orientadas a fortalecer el comercio electrónico nacional, priorizando interfaces claras y accesibles.",
        "Análisis e interpretación de requerimientos para transformar necesidades institucionales en soluciones técnicas claras, eficientes y alineadas con los objetivos del proyecto.",
        "Implementación de mejoras continuas en flujos, componentes y módulos existentes, garantizando estabilidad, escalabilidad y una experiencia de usuario coherente en toda la plataforma.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full pt-[20svh] px-3 md:px-8 max-w-4xl mx-auto"
    >
      <div className="relative mb-4">
        <h2 className="text-2.5xl font-extrabold mb-2 text-center md:text-left md:text-accent">
          Mi trayectoria
        </h2>
        <p className="text-foreground-65 text-lg text-center md:text-left font-light">
          En esta sección comparto parte de mi recorrido profesional, destacando
          las experiencias que han marcado mi crecimiento como desarrollador. Si
          deseas conocer con mayor detalle mi contribución en distintos
          proyectos y roles, te invito a visitar mi perfil de{" "}
          <a
            href="https://www.linkedin.com/in/axelestradadev"
            target="_blank"
            className="text-accent font-semibold cursor-pointer inline-block hover:scale-105 transition-transform"
          >
            LinkedIn
          </a>
          , donde podrás explorar más a fondo mi trayectoria.
        </p>
      </div>

      <div className="relative border-l-3 border-accent-10 ml-3 md:ml-6 space-y-12 mt-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
              <span className="text-sm font-medium text-accent bg-accent-10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 flex items-center gap-1">
                <HugeiconsIcon icon={Calendar01Icon} size={14} />
                {exp.date}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-foreground-65 font-medium">
              <HugeiconsIcon icon={Briefcase01Icon} size={18} />
              <span>{exp.company}</span>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground-65 font-light">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
