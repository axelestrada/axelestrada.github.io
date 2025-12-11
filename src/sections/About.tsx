import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className="pt-[20svh] w-full min-h-svh md:min-h-full flex flex-col justify-center px-3 max-w-xl md:max-w-4xl md:px-8 mx-auto md:flex-row md:items-center md:gap-8"
    >
      <div className="md:w-2/3 text-center md:text-left">
        <p className="text-pretext">Apartado personal</p>
        <h2 className="text-2.5xl font-extrabold mb-2">Conóceme mejor</h2>

        <p className="text-foreground-65 text-lg font-light">
          Hola, mi nombre es{" "}
          <b className="text-accent font-semibold">Axel Estrada</b> y soy
          desarrollador de software con una pasión especial por el frontend. Me
          caracterizo por siempre querer que las cosas funcionen de manera
          perfecta, se vean claras y puedan mantenerse sin mucho problema.
        </p>

        <br />

        <p className="text-foreground-65 text-lg font-light">
          A lo largo de mi carrera he trabajado con diferentes tecnologías como{" "}
          <strong className="text-accent font-semibold">React</strong>,{" "}
          <strong className="text-accent font-semibold">Angular</strong> y{" "}
          <strong className="text-accent font-semibold">Vue</strong>,
          desarrollando un cariño especial por{" "}
          <strong className="text-accent font-semibold">React</strong>, aunque
          disfruto adaptarme a lo que el proyecto requiera.
        </p>

        <br />

        <p className="text-foreground-65 text-lg font-light">
          Actualmente trabajo como{" "}
          <b className="text-accent font-semibold">Desarrollador Frontend</b> en
          una institución pública. Mientras que en paralelo desarrollo una
          aplicación móvil por mi cuenta llamada{" "}
          <a
            href="https://monety.framer.website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold"
          >
            Monety
          </a>
          , un proyecto que me ha obligado a enfrentar todo lo que normalmente
          queda fuera de los tutoriales: planificación real, arquitectura,
          mantenimiento, infraestructura, etc.
        </p>
      </div>

      <div className="w-full flex justify-center items-center mt-20 md:mt-0 md:w-1/3">
        <div className="relative w-3/4 aspect-square rounded-xl shadow-xl md:w-full">
          <Image
            alt="Axel Estrada"
            src="/images/profile-picture.jpg"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
