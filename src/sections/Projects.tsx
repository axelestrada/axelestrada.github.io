import React from "react";
import { Project } from "@/components/Project/Project";
import {
  JavaScriptIcon,
  ReactIcon,
  Typescript01Icon,
  WebDesign02Icon,
} from "@hugeicons/core-free-icons";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-[20svh] w-full min-h-svh flex flex-col justify-center items-center px-3 max-w-xl md:max-w-4xl md:px-8 mx-auto md:min-h-full"
    >
      <div className="relative mb-4">
        <h2 className="text-2.5xl font-extrabold mb-2 text-center md:text-left md:text-accent">
          Mis proyectos
        </h2>
        <p className="text-foreground-65 text-lg text-center md:text-left">
          Aquí encontrarás algunos de los proyectos que he desarrollado a lo
          largo de mi trayectoria como desarrollador. Si deseas explorar más, te
          invito a visitar mi perfil de{" "}
          <a
            href="https://github.com/axelestrada"
            target="_blank"
            className="text-accent font-semibold cursor-pointer inline-block hover:scale-105 transition-transform"
          >
            GitHub
          </a>
          , donde encontrarás otros repositorios con mis trabajos.
        </p>
      </div>

      <div className="mt-12 w-full md:flex md:gap-8">
        <Project
          imageAlt="Markdown Notebook"
          imageSrc="/images/markdown-notes.jpeg"
          title="Markdown Notes"
          description="Aplicación web desarrollada con Angular 19 para tomar notas con soporte para formato Markdown. Permite crear, editar, previsualizar y exportar notas en formato Markdown."
          linkToGithub="https://github.com/axelestrada/markdown-notes"
          linkToDemo="https://axelestrada.github.io/markdown-notes"
          techStack={[
            { icon: JavaScriptIcon, title: "Angular" },
            { icon: Typescript01Icon, title: "TypeScript" },
            { icon: WebDesign02Icon, title: "Tailwind CSS" },
          ]}
        />

        <Project
          imageAlt="Temporizador Pomodoro"
          imageSrc="/images/pomodoro-timer.jpeg"
          title="Temporizador Pomodoro"
          description="Aplicación web basada en la técnica Pomodoro, que ayuda a gestionar el tiempo dividiendo las tareas en intervalos de concentración y descansos. Permite personalizar la duración de los ciclos."
          linkToGithub="https://github.com/axelestrada/pomodoroapp"
          linkToDemo="https://axelestrada.github.io/pomodoroapp"
          techStack={[
            { icon: ReactIcon, title: "ReactJS" },
            { icon: Typescript01Icon, title: "TypeScript" },
          ]}
        />
      </div>
    </section>
  );
};
