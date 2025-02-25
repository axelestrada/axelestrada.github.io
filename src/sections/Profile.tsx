"use client";
import React from "react";

import localFont from "next/font/local";
import { HugeiconsIcon, HugeiconsProps } from "@hugeicons/react";

import {
  Alert01Icon,
  ArrowDown01Icon,
  Copy01Icon,
  Download04Icon,
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
  Mouse01Icon,
} from "@hugeicons/core-free-icons";

import { Typewriter } from "nextjs-simple-typewriter";

const frygiaHeavy = localFont({
  src: "../../public/fonts/frygia-heavy.ttf",
});

export const Profile = () => {
  return (
    <div className="w-full h-svh justify-center items-center flex flex-col relative overflow-hidden">
      <div className="w-96 h-96 bg-accent absolute -top-36 -right-36 rounded-full -z-10 blur-[110px] opacity-40"></div>

      <span className="text-2xl font-mono">
        <Typewriter
          words={["¡Hola! soy..."]}
          cursor
          cursorBlinking
          typeSpeed={150}
          deleteSpeed={150}
          delaySpeed={1000}
          loop={100}
        />
      </span>

      <h1
        className={`text-[85px] text-center leading-[1.15] pt-3 ${frygiaHeavy.className}`}
      >
        Axel Estrada.
      </h1>

      <p className="text-2xl font-medium mb-4">Desarrollador Frontend</p>

      <div className="flex flex-row flex-wrap justify-center gap-2">
        <LinkItem
          label="Descargar CV"
          leftIcon={Download04Icon}
          href="/cv/cv.pdf"
          download
        />
        {/*TODO: Add CV File*/}
        <LinkItem
          href="https://www.linkedin.com/in/axelestradadev"
          label="LinkedIn"
          leftIcon={Linkedin01Icon}
        />
        <LinkItem
          href="https://github.com/axelestrada"
          label="GitHub"
          leftIcon={Github01Icon}
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

      <div className="absolute bottom-2 animate-bounce flex flex-col items-center justify-center">
        <span>Scroll</span>
        <HugeiconsIcon icon={Mouse01Icon} size={16} strokeWidth={0.1} />
        <HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={0.1} />
      </div>
    </div>
  );
};

interface LinkItemProps {
  label: string;
  href?: string;
  leftIcon: HugeiconsProps["icon"];
  rightIcon?: HugeiconsProps["icon"];
  onClick?: () => void;
  download?: boolean;
}

const LinkItem = ({
  label,
  href = "#",
  leftIcon = Alert01Icon,
  rightIcon,
  onClick,
  download,
}: LinkItemProps) => {
  return (
    <a
      href={onClick ? "#" : href}
      target={download ? "_self" : "_blank"}
      rel="noopener noreferrer"
      download={download}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="text-accent cursor-pointer bg-accent-10 py-2 px-3 rounded-full flex flex-row items-center active:scale-105 hover:scale-105 transition-transform"
    >
      <HugeiconsIcon
        className="mr-1"
        icon={leftIcon}
        size={18}
        strokeWidth={0.1}
      />

      <p className="text-base">{label}</p>

      {rightIcon && (
        <HugeiconsIcon
          className="ml-1"
          icon={rightIcon}
          size={18}
          strokeWidth={0.1}
        />
      )}
    </a>
  );
};
