"use client";

import { useState } from "react";
import { HugeiconsIcon, HugeiconsProps } from "@hugeicons/react";
import {
  Home01Icon,
  PaintBrush04Icon,
  DatabaseIcon,
  SourceCodeIcon,
  GitForkIcon,
  Layers01Icon,
  Alert01Icon,
} from "@hugeicons/core-free-icons";
import {
  TailwindIcon,
  ReactIcon,
  SassIcon,
  SQLiteIcon,
  ReduxIcon,
  SQLIcon,
  GitIcon,
  HtmlIcon,
  NextjsIcon,
  CssIcon,
  JavascriptIcon,
  FirebaseIcon,
  TypescriptIcon,
  GithubIcon,
  GitlabIcon,
  GithubCodespacesIcon,
  BitBucketIcon,
  GithubActionsIcon,
  VsCodeIcon,
  FigmaIcon,
  BabelIcon,
  NpmIcon,
  DockerIcon,
  StackOverflowIcon,
  MongoDBIcon,
} from "@/icons";
import { AngularIcon } from "@/icons/AngularIcon";
import { BootstrapIcon } from "@/icons/BootstrapIcon";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("home");

  const cellBorders = [
    "border-b-3",
    "border-b-3 border-l-3",
    "border-b-3 border-l-3",
    "border-b-3 border-l-3",
    "border-b-3",
    "border-b-3 border-l-3 col-span-2",
    "border-b-3 border-l-3",
    "border-b-3",
    "border-b-3 border-l-3 col-span-2",
    "border-b-3 border-l-3",
    "",
    "border-l-3",
    "border-l-3",
    "border-l-3",
  ];

  const skillsMap: Record<
    string,
    { icon: React.FC; name: string; index: number }[]
  > = {
    home: [
      { icon: TailwindIcon, name: "Tailwind CSS", index: 4 },
      { icon: ReactIcon, name: "React", index: 5 },
      { icon: SassIcon, name: "Sass", index: 6 },
      { icon: SQLIcon, name: "SQL", index: 7 },
      { icon: AngularIcon, name: "Angular", index: 8 },
      { icon: GitIcon, name: "Git", index: 9 },
    ],
    frontend: [
      { icon: HtmlIcon, name: "HTML", index: 1 },
      { icon: BootstrapIcon, name: "Bootstrap", index: 2 },
      { icon: TailwindIcon, name: "Tailwind CSS", index: 4 },
      { icon: ReactIcon, name: "React", index: 5 },
      { icon: SassIcon, name: "Sass", index: 6 },
      { icon: AngularIcon, name: "Angular", index: 8 },
      { icon: ReduxIcon, name: "Redux", index: 9 },
      { icon: NextjsIcon, name: "Next.js", index: 7 },
      { icon: CssIcon, name: "CSS", index: 11 },
      { icon: JavascriptIcon, name: "JavaScript", index: 12 },
    ],
    database: [
      { icon: SQLIcon, name: "SQL", index: 4 },
      { icon: FirebaseIcon, name: "Firebase", index: 5 },
      { icon: SQLiteIcon, name: "SQLite", index: 6 },
      { icon: MongoDBIcon, name: "MongoDB", index: 8 },
    ],
    languages: [
      { icon: HtmlIcon, name: "HTML", index: 4 },
      { icon: JavascriptIcon, name: "JavaScript", index: 5 },
      { icon: CssIcon, name: "CSS", index: 6 },
      { icon: TypescriptIcon, name: "TypeScript", index: 8 },
    ],
    "version-control": [
      { icon: GitIcon, name: "Git", index: 4 },
      { icon: GithubIcon, name: "GitHub", index: 5 },
      { icon: GitlabIcon, name: "GitLab", index: 6 },
      { icon: GithubCodespacesIcon, name: "GitHub Codespaces", index: 7 },
      { icon: BitBucketIcon, name: "Bitbucket", index: 8 },
      { icon: GithubActionsIcon, name: "GitHub Actions", index: 9 },
    ],
    tools: [
      { icon: NpmIcon, name: "NPM", index: 4 },
      { icon: VsCodeIcon, name: "VS Code", index: 5 },
      { icon: BabelIcon, name: "Babel", index: 6 },
      { icon: DockerIcon, name: "Docker", index: 7 },
      { icon: FigmaIcon, name: "Figma", index: 8 },
      { icon: StackOverflowIcon, name: "Stack Overflow", index: 9 },
    ],
  };

  return (
    <section
      id="skills"
      className="pt-[20svh] w-full lg:min-h-full flex flex-col justify-center px-3 max-w-xl md:max-w-4xl md:px-8 mx-auto lg:flex-row lg:items-center lg:gap-8"
    >
      <div>
        <p className="text-pretext">Mi marco de trabajo</p>
        <h2 className="text-2.5xl font-extrabold mb-2">
          Mis habilidades técnicas
        </h2>
        <p className="text-foreground-65 text-lg font-light">
          Este es un resumen de mis conocimientos en el desarrollo frontend.
          Navega por el menú lateral derecho para acceder a los apartados sobre
          tecnologías de{" "}
          <strong className="text-accent font-semibold">Frontend</strong>,
          diseño de{" "}
          <strong className="text-accent font-semibold">Bases de datos</strong>,
          sistemas de{" "}
          <strong className="text-accent font-semibold">
            Control de versiones
          </strong>
          , y el software adicional que utilizo en mi trabajo diario.
        </p>
      </div>

      <div className="mt-12 flex-row flex items-center justify-center gap-3 lg:mt-0">
        <div className="grid grid-cols-4 max-w-96 h-max w-full lg:w-96">
          {cellBorders.map((borderKeys, index) => {
            const skill = skillsMap[activeTab]?.find((s) => s.index === index);

            return (
              <Cell key={index} className={borderKeys} tooltip={skill?.name}>
                {skill?.icon && <skill.icon />}
              </Cell>
            );
          })}
        </div>

        <Menu activeTab={activeTab} handleClick={setActiveTab} />
      </div>
    </section>
  );
};

const Cell = ({
  className,
  children,
  tooltip,
}: {
  className?: string;
  children?: React.ReactNode;
  tooltip?: string;
}) => (
  <div
    className={`border-accent h-20 w-full flex justify-center items-center p-3 relative group ${className}`}
  >
    {children}

    {tooltip && (
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none z-10">
        {tooltip}
      </div>
    )}
  </div>
);

const Menu = ({
  activeTab,
  handleClick,
}: {
  activeTab: string;
  handleClick: (tab: string) => void;
}) => {
  const menuItems = [
    { icon: Home01Icon, href: "home" },
    { icon: PaintBrush04Icon, href: "frontend" },
    { icon: DatabaseIcon, href: "database" },
    { icon: SourceCodeIcon, href: "languages" },
    { icon: GitForkIcon, href: "version-control" },
    { icon: Layers01Icon, href: "tools" },
  ];

  return (
    <div className="bg-black dark:bg-white dark:bg-opacity-5 bg-opacity-10 p-1.5 rounded-full flex flex-col justify-center items-center">
      {menuItems.map(({ icon, href }) => (
        <MenuItem
          key={href}
          icon={icon}
          href={href}
          onClick={handleClick}
          activeTab={activeTab}
        />
      ))}
    </div>
  );
};

const MenuItem = ({
  icon = Alert01Icon,
  activeTab,
  href,
  onClick,
}: {
  icon: HugeiconsProps["icon"];
  activeTab: string;
  href: string;
  onClick: (tab: string) => void;
}) => {
  const isActive = href === activeTab;
  return (
    <button
      onClick={() => onClick(href)}
      className={`my-2 bg-black dark:bg-white rounded-[10px] p-1 hover:bg-opacity-20 transition-colors ${
        isActive
          ? "bg-opacity-20 dark:bg-opacity-15"
          : "bg-opacity-0 dark:bg-opacity-0"
      }`}
    >
      <HugeiconsIcon
        icon={icon}
        className="text-black dark:text-white"
        size={20}
      />
    </button>
  );
};
