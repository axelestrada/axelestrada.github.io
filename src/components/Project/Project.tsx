import React from "react";
import Image from "next/image";
import { HugeiconsIcon, HugeiconsProps } from "@hugeicons/react";
import {
  Alert01Icon,
  Link01Icon,
  ReactIcon,
  SourceCodeIcon,
  Typescript01Icon,
} from "@hugeicons/core-free-icons";

interface ProjectProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const Project = ({
  imageAlt,
  imageSrc,
  title,
  description,
}: ProjectProps) => {
  return (
    <div className="w-full mb-12">
      <div className="relative w-full aspect-square bg-white rounded-md shadow-xl mb-4">
        <Image
          alt={imageAlt}
          src={imageSrc}
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="px-4">
        <h3 className="text-2.5xl font-medium mb-3">{title}</h3>

        <div className="flex items-center mb-2">
          <Technology icon={ReactIcon} title="React" />
          <Technology icon={Typescript01Icon} title="Typescript" />
        </div>

        <p className="text-lg text-foreground-65">{description}</p>

        <div className="flex flex-row items-center mt-4">
          <ActionButton
            label="Ver en Github"
            href="https://github.com/axelestrada/todo-app"
            icon={SourceCodeIcon}
          />

          <ActionButton
            label="Demo"
            href="https://github.com/axelestrada/todo-app"
            icon={Link01Icon}
          />
        </div>
      </div>
    </div>
  );
};

interface TechnologyProps {
  icon: HugeiconsProps["icon"];
  title: string;
}

const Technology = ({ icon = Alert01Icon, title }: TechnologyProps) => {
  return (
    <div className="flex flex-row items-center px-2 py-0.5 mr-2 rounded-full bg-black dark:bg-[#4a4a4a] bg-opacity-20">
      <HugeiconsIcon
        icon={icon}
        size={14}
        className="text-foreground"
        color="currentColor"
      />

      <span className="ml-1">{title}</span>
    </div>
  );
};

interface ActionButtonProps {
  label: string;
  href?: string;
  icon: HugeiconsProps["icon"];
}

const ActionButton = ({
  label,
  href = "#",
  icon = Alert01Icon,
}: ActionButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-row items-center px-2 py-0.5 mr-2 rounded-[4px] border border-black dark:border-[#ffffff1a] border-opacity-20 bg-black dark:bg-[#ffffff0f] bg-opacity-10 hover:scale-105 transition-transform"
    >
      <HugeiconsIcon
        icon={icon}
        size={20}
        className="text-foreground"
        color="currentColor"
      />

      <span className="ml-1">{label}</span>
    </a>
  );
};
