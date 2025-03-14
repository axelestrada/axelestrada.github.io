import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className="pt-[20svh] w-full min-h-svh md:min-h-full flex flex-col justify-center px-3 max-w-xl md:max-w-4xl md:px-8 mx-auto md:flex-row md:items-center md:gap-8"
    >
      <div className="md:w-2/3">
        <p className="text-pretext">Apartado personal</p>
        <h2 className="text-2.5xl font-extrabold mb-2">Conóceme mejor</h2>

        <p className="text-foreground-65 text-lg">
          Desarrollador <b className="text-accent font-semibold">Frontend</b>{" "}
          con pasión por crear experiencias digitales eficientes y atractivas.
          Me especializo en el desarrollo de aplicaciones web y móviles con
          tecnologías como{" "}
          <strong className="text-accent font-semibold">Angular</strong>, {" "}
          <strong className="text-accent font-semibold">React</strong> y{" "}
          <strong className="text-accent font-semibold">React Native</strong>,
          siempre buscando soluciones intuitivas y optimizadas.
          <br /> <br />
          Estoy comprometido con el aprendizaje continuo y la mejora constante
          de mis habilidades técnicas. He trabajado en proyectos personales como{" "}
          <strong className="text-accent font-semibold">Monety</strong>, una
          aplicación de gestión financiera, lo que me ha permitido profundizar
          en arquitectura de software, optimización de bases de datos y
          experiencia de usuario.
          <br />
          <br />
          Me considero una persona{" "}
          <b className="text-accent font-semibold">creativa</b>,{" "}
          <b className="text-accent font-semibold">adaptable</b> y con capacidad
          tanto para el trabajo en equipo bajo metodologías ágiles como para
          asumir retos de manera autónoma. Mi objetivo es seguir creciendo como
          desarrollador y aportar valor a través de cada proyecto en el que
          participe.
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
