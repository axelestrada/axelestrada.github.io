import React from "react";
import { Project } from "@/components/Project/Project";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export const Projects = () => {
  return (
    <div className="w-full min-h-svh flex flex-col justify-center items-center px-3">
      <div className="relative mb-4">
        <h2 className="text-2.5xl font-extrabold mb-2 text-center">
          Mis proyectos
        </h2>
        <p className="text-foreground-65 text-lg text-center">
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

      <div className="mt-12 w-full">
        <Project
          imageAlt="To-Do App"
          imageSrc="/images/todo-app.jpeg"
          title="To-Do App"
          description="Aplicación simple pero funcional para gestionar tareas. Permite agregar, editar, eliminar y marcar tareas como completadas."
        />
      </div>

      <button className="flex flex-row items-end gap-1 underline hover:scale-105 transition-transform">
        Mostrar más proyectos
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={20}
          className="text-foreground"
          color="currentColor"
        />
      </button>
    </div>
  );
};
