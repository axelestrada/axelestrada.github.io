import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="pt-[20svh] w-full min-h-svh md:min-h-full flex flex-col justify-center px-3 max-w-xl md:max-w-4xl md:px-8 mx-auto md:flex-row md:items-center md:gap-8"
    >
      <div className="md:w-2/3 text-center md:text-left">
        <p className="text-pretext">Sobre mí</p>
        <h2 className="text-2.5xl font-extrabold mb-2">
          Construyendo productos completos
        </h2>

        <p className="text-foreground-65 text-lg font-light">
          Hola, soy <b className="text-accent font-semibold">Axel Estrada</b>,
          desarrollador full stack enfocado en crear productos sólidos de
          principio a fin: interfaces claras, APIs bien diseñadas, bases de
          datos estructuradas y despliegues confiables.
        </p>

        <br />

        <p className="text-foreground-65 text-lg font-light">
          He trabajado con tecnologías como{" "}
          <strong className="text-accent font-semibold">React</strong>,{" "}
          <strong className="text-accent font-semibold">Angular</strong> y{" "}
          <strong className="text-accent font-semibold">Vue</strong> en el
          frontend, y con entornos backend basados en{" "}
          <strong className="text-accent font-semibold">Node.js</strong>, diseño
          de APIs y modelado de bases de datos. Me interesa tanto la experiencia
          del usuario como la arquitectura que lo sostiene.
        </p>

        <br />

        <p className="text-foreground-65 text-lg font-light">
          Actualmente trabajo como{" "}
          <b className="text-accent font-semibold">Desarrollador Full Stack</b>,
          participando en decisiones técnicas que van desde la estructura del
          sistema hasta la implementación final. En paralelo desarrollo
          proyectos propios como{" "}
          <a
            href="https://monety.framer.website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold"
          >
            Monety
          </a>
          , una aplicación que me ha permitido enfrentar desafíos reales de
          arquitectura, mantenimiento, rendimiento e infraestructura.
        </p>
      </div>

      <div className="w-full flex justify-center items-center mt-20 md:mt-0 md:w-1/3">
        <div className="relative w-3/4 aspect-square rounded-xl shadow-xl md:w-full">
          <Image
            alt="Axel Estrada"
            src="/images/profile-picture.webp"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
