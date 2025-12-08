"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon, HugeiconsProps } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  GithubFreeIcons,
} from "@hugeicons/core-free-icons";

interface ProjectProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkToGithub?: string;
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
  const [src, setSrc] = useState(imageSrc);

  return (
    <div className="w-full mb-12 md:mb-0">
      <div className="flex mb-2">
        {
          <p className="text-base text-foreground-65 font-light">
            {techStack.map((tech) => tech.title).join(" / ")}
          </p>
        }
      </div>

      <a href={linkToDemo} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full aspect-video rounded-lg shadow-xl mb-3 md:rounded-md">
          <Image
            alt={imageAlt}
            src={src}
            fill
            onError={() => setSrc("/images/placeholder.svg")}
            className="rounded-lg md:rounded-md object-cover"
          />
        </div>
      </a>

      <div className="">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-lg">
            <a href={linkToDemo} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>

          <div className="flex flex-row items-center gap-2">
            {linkToGithub && (
              <a
                href={linkToGithub}
                target="_blank"
                className="cursor-pointer text-foreground hover:scale-105 transition-transform"
              >
                <HugeiconsIcon
                  icon={GithubFreeIcons}
                  size={22}
                  color="currentColor"
                />
              </a>
            )}

            <a
              href={linkToDemo}
              target="_blank"
              className="cursor-pointer text-foreground hover:scale-105 transition-transform"
            >
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={26}
                color="currentColor"
              />
            </a>
          </div>
        </div>

        <p className="text-lg text-foreground-65 font-light">{description}</p>
      </div>
    </div>
  );
};
