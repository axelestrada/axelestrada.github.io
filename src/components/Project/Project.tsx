import React from "react";
import Image from "next/image";
import { HugeiconsIcon, HugeiconsProps } from "@hugeicons/react";
import {
  Alert01Icon,
  ArrowUpRight01Icon,
  GithubFreeIcons,
  Link01Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons";

interface ProjectProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkToGithub: string;
  linkToDemo: string;
  techStack: {
    icon: HugeiconsProps["icon"];
    title: string;
  }[];
}

export const Project = ({
  imageAlt,
  imageSrc,
  title,
  description,
  linkToGithub,
  linkToDemo,
  techStack,
}: ProjectProps) => {
  return (
    <div className="w-full mb-12 md:mb-0">
      <div className="hidden md:flex mb-1">
        {
          <p className="text-sm text-foreground-65">
            {techStack.map((tech) => tech.title).join(" / ")}
          </p>
        }
      </div>
      <div className="relative w-full aspect-video rounded-lg shadow-xl mb-2 md:rounded-md">
        <Image
          alt={imageAlt}
          src={imageSrc}
          fill
          className="rounded-lg md:rounded-md object-cover"
        />
      </div>

      <div className="">
        <div className="md:flex md:justify-between md:items-center">
          <h3 className="text-2.5xl font-medium mb-3 md:text-lg">{title}</h3>

          <div className="hidden md:flex flex-row items-center gap-2 mb-2">
            <a
              href={linkToGithub}
              target="_blank"
              className="cursor-pointer text-foreground hover:scale-105 transition-transform"
            >
              <HugeiconsIcon
                icon={GithubFreeIcons}
                size={18}
                color="currentColor"
              />
            </a>

            <a
              href={linkToDemo}
              target="_blank"
              className="cursor-pointer text-foreground hover:scale-105 transition-transform"
            >
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={22}
                color="currentColor"
              />
            </a>
          </div>
        </div>

        <div className="flex items-center mb-2 md:hidden">
          {techStack.map((tech, index) => (
            <Technology key={index} icon={tech.icon} title={tech.title} />
          ))}
        </div>

        <p className="text-lg text-foreground-65">{description}</p>

        <div className="flex flex-row items-center mt-4 md:hidden">
          <ActionButton
            label="Ver en Github"
            href={linkToGithub}
            icon={SourceCodeIcon}
          />

          <ActionButton label="Demo" href={linkToDemo} icon={Link01Icon} />
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
