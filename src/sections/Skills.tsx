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
    "border-l-3"
  ];
  
  const skillsMap: Record<string, { icon: React.FC; index: number }[]> = {
    home: [
      { icon: TailwindIcon, index: 4 },
      { icon: ReactIcon, index: 5 },
      { icon: SassIcon, index: 6 },
      { icon: SQLIcon, index: 7 },
      { icon: ReduxIcon, index: 8 },
      { icon: GitIcon, index: 9 },
    ],
    frontend: [
      { icon: TailwindIcon, index: 4 },
      { icon: ReactIcon, index: 5 },
      { icon: SassIcon, index: 6 },
      { icon: HtmlIcon, index: 8 },
      { icon: ReduxIcon, index: 9 },
      { icon: NextjsIcon, index: 7 },
      { icon: CssIcon, index: 11 },
      { icon: JavascriptIcon, index: 12 },
    ],
    database: [
      { icon: SQLIcon, index: 4 },
      { icon: FirebaseIcon, index: 5 },
      { icon: SQLiteIcon, index: 6 },
      { icon: MongoDBIcon, index: 8 },
    ],
    languages: [
      { icon: HtmlIcon, index: 4 },
      { icon: JavascriptIcon, index: 5 },
      { icon: CssIcon, index: 6 },
      { icon: TypescriptIcon, index: 8 },
    ],
    "version-control": [
      { icon: GitIcon, index: 4 },
      { icon: GithubIcon, index: 5 },
      { icon: GitlabIcon, index: 6 },
      { icon: GithubCodespacesIcon, index: 7 },
      { icon: BitBucketIcon, index: 8 },
      { icon: GithubActionsIcon, index: 9 },
    ],
    tools: [
      { icon: NpmIcon, index: 4 },
      { icon: VsCodeIcon, index: 5 },
      { icon: BabelIcon, index: 6 },
      { icon: DockerIcon, index: 7 },
      { icon: FigmaIcon, index: 8 },
      { icon: StackOverflowIcon, index: 9 },
    ],
  };

  return (
    <div className="w-full min-h-svh flex flex-col justify-center px-3">
      <p className="text-pretext">Mi marco de trabajo</p>
      <h2 className="text-2.5xl font-extrabold mb-2">
        Mis habilidades técnicas
      </h2>
      <p className="text-foreground-65 text-lg">
        Este es un resumen de mis conocimientos en el desarrollo frontend.
        Navega por el menú lateral derecho para acceder a los apartados sobre
        tecnologías de{" "}
        <strong className="text-accent font-semibold">Frontend</strong>, diseño
        de <strong className="text-accent font-semibold">Bases de datos</strong>
        , sistemas de{" "}
        <strong className="text-accent font-semibold">
          Control de versiones
        </strong>
        , y el software adicional que utilizo en mi trabajo diario.
      </p>

      <div className="my-12 flex-row flex items-center gap-3">
        <div className="grid grid-cols-4 max-w-96 h-max w-full">
          {cellBorders.map((borderKeys, index) => {
            const skill = skillsMap[activeTab]?.find((s) => s.index === index);

            return (
              <Cell key={index} className={borderKeys}>
                {skill?.icon && <skill.icon />}
              </Cell>
            );
          })}
        </div>

        <Menu activeTab={activeTab} handleClick={setActiveTab} />
      </div>
    </div>
  );
};

const Cell = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`border-accent h-20 w-full flex justify-center items-center p-3 ${className}`}
  >
    {children}
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
