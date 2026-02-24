"use client";

import { Briefcase01Icon, Calendar01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Desarrollador Full Stack",
      company: "Ingeniería Digital",
      url: "https://www.ingenieria.digital",
      date: "Febrero 2026 - Actualidad",
      description: [
        "Desarrollo integral del proyecto Medicatel, una plataforma digital orientada a la adquisición y gestión de seguros médicos.",
        "Implementación de frontend moderno y APIs backend para funcionalidades como búsqueda de médicos, cotización de seguros, gestión de citas médicas, exámenes y tratamientos.",
        "Diseño de arquitectura escalable, modelado de base de datos y optimización de flujos críticos para garantizar rendimiento, seguridad y mantenibilidad del sistema.",
        "Colaboración directa en decisiones técnicas y estratégicas para alinear el producto con los objetivos del negocio y la experiencia del usuario.",
      ],
    },
    {
      id: 2,
      role: "Desarrollador Frontend",
      company: "Senprende",
      url: "https://senprende.hn/",
      date: "Mayo 2025 - Diciembre 2025",
      description: [
        "Desarrollo y mantenimiento de plataformas internas orientadas a fortalecer el comercio electrónico nacional.",
        "Análisis de requerimientos institucionales y transformación de necesidades de negocio en soluciones técnicas claras y sostenibles.",
        "Mejora continua de flujos, componentes y módulos existentes, garantizando estabilidad y coherencia en la experiencia de usuario.",
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
          Aquí comparto parte de mi recorrido profesional y los proyectos que
          han marcado mi evolución como desarrollador. Si deseas conocer más
          detalles técnicos y responsabilidades específicas, puedes visitar mi
          perfil de{" "}
          <a
            href="https://www.linkedin.com/in/axelestradadev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold cursor-pointer inline-block hover:scale-105 transition-transform"
          >
            LinkedIn
          </a>
          .
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
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-block transition-colors hover:text-foreground"
              >
                {exp.company}
              </a>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground-65 font-light">
              {exp.description.map((item) => (
                <li key={`exp-${item.split(" ")[0]}`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
