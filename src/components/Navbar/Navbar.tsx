"use client";

import React, { useState } from "react";

import localFont from "next/font/local";

import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

const frygiaHeavy = localFont({
  src: "../../../public/fonts/frygia-heavy.ttf",
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hideMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed z-50 top-2 left-2 right-2 bg-navbar-bg md:bg-transparent md:left-0 md:top-0 md:right-0 rounded-xl py-2 px-3 backdrop-blur-[7px]">
      <div className="max-w-5xl mx-auto md:flex md:justify-between md:items-center">
        <div className="flex flex-row justify-between items-center">
          <a
            href="#"
            className={`${frygiaHeavy.className} text-3xl leading-normal pt-1`}
          >
            {"<A"}
            <span className="text-accent">/</span>
            {">"}
          </a>

          <button onClick={toggleMenu} className="md:hidden">
            <HugeiconsIcon
              icon={isOpen ? Cancel01Icon : Menu01Icon}
              size={32}
              strokeWidth={0.6}
              className={`${
                isOpen ? "text-[#e74c3c]" : "text-accent"
              } cursor-pointer`}
            />
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } py-2 px-3 flex flex-col justify-center items-center md:flex md:flex-row md:gap-4`}
        >
          <a
            href="#experience"
            className="text-lg p-2 md:text-black md:dark:text-white md:font-medium cursor-pointer"
            onClick={hideMenu}
          >
            Experiencia
          </a>
          <a
            href="#projects"
            className="text-lg p-2 md:text-black md:dark:text-white md:font-medium cursor-pointer"
            onClick={hideMenu}
          >
            Proyectos
          </a>
          <a
            href="#skills"
            className="text-lg p-2 md:text-black md:dark:text-white md:font-medium cursor-pointer"
            onClick={hideMenu}
          >
            Tecnologías
          </a>
          <a
            href="#about"
            className="text-lg p-2 md:text-black md:dark:text-white md:font-medium cursor-pointer"
            onClick={hideMenu}
          >
            Axel
          </a>
          <a
            href="#contact"
            className="text-lg p-2 md:text-black md:dark:text-white md:font-medium cursor-pointer"
            onClick={hideMenu}
          >
            Contacto
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
};
