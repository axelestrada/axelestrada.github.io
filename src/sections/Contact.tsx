"use client";

import React from "react";

import localFont from "next/font/local";
import { LinkItem } from "./Profile";
import {
  Copy01Icon,
  Download04Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

const frygiaHeavy = localFont({
  src: "../../public/fonts/frygia-heavy.ttf",
});

export const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-[20svh] w-full flex flex-col justify-center items-center px-3 max-w-xl md:max-w-4xl md:px-8 mx-auto"
    >
      <h3 className="text-3xl mb-2 text-center text-foreground-65 font-medium mx-6 leading-normal">
        ¿Por qué no hablamos?
      </h3>

      <h2
        className={`text-accent text-7xl text-center mb-2 ${frygiaHeavy.className}`}
      >
        Contacta conmigo
      </h2>

      <p className="text-center mb-4 text-foreground-65">
        Gracias por visitar mi sitio web, espero que mi perfil como
        desarrollador te interese y podamos entrar en contacto. Puedes copiar mi
        correo electrónico o descargar mi curriculum en los botones de aquí
        abajo para cualquier consulta.
      </p>

      <div className="flex flex-row flex-wrap justify-center gap-3">
        <LinkItem
          label="Descargar CV"
          leftIcon={Download04Icon}
          href="/cv/AxelEstrada-CV.pdf"
          download
        />
        <LinkItem
          label="axele1524@gmail.com"
          leftIcon={Mail01Icon}
          rightIcon={Copy01Icon}
          onClick={() => {
            navigator.clipboard.writeText("axele1524@gmail.com");
          }}
        />
      </div>
    </section>
  );
};
