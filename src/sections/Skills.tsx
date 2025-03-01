"use client";

import { TailwindIcon } from "@/icons/TailwindIcon";
import { ReactIcon } from "@/icons/ReactIcon";
import { SassIcon } from "@/icons/SassIcon";
import { SQLiteIcon } from "@/icons/SQLiteIcon";
import { ReduxIcon } from "@/icons/ReduxIcon";
import { SQLIcon } from "@/icons/SQLIcon";
import { GitIcon } from "@/icons/GitIcon";
import { HugeiconsIcon, HugeiconsProps } from "@hugeicons/react";
import {
  Alert01Icon,
  DatabaseIcon,
  GitForkIcon,
  Home01Icon,
  Layers01Icon,
  Layers02Icon,
  LayersIcon,
  PaintBrush04Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons";
import { useState } from "react";
import { HtmlIcon } from "@/icons/HtmlIcon";
import { NextjsIcon } from "@/icons/NextjsIcon";
import { CssIcon } from "@/icons/CssIcon";
import { JavascriptIcon } from "@/icons/JavascriptIcon";
import { FirebaseIcon } from "@/icons/FirebaseIcon";
import { SupabaseIcon } from "@/icons/SupabaseIcon";
import { TypescriptIcon } from "@/icons/TypescriptIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import { GitlabIcon } from "@/icons/GitlabIcon";
import { GithubCodespacesIcon } from "@/icons/GithubCodespacesIcon";
import { BitBucketIcon } from "@/icons/BitBucketIcon";
import { GithubActionsIcon } from "@/icons/GithubActionsIcon";
import { VsCodeIcon } from "@/icons/VsCodeIcon";
import { FigmaIcon } from "@/icons/FigmaIcon";
import { BabelIcon } from "@/icons/BabelIcon";
import { NpmIcon } from "@/icons/NpmIcon";
import { DockerIcon } from "@/icons/DockerIcon";
import { StackOverflowIcon } from "@/icons/StackOverflowIcon";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("home");

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
        <div className={`grid grid-cols-4 max-w-96 h-max w-full`}>
          <Cell className="border-b-3" />
          <Cell className="border-b-3 border-r-3 border-l-3" />
          <Cell className="border-b-3" />
          <Cell className="border-b-3 border-l-3"></Cell>
          {activeTab === "home" && (
            <>
              <Cell className="border-b-3">
                <TailwindIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <ReactIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3">
                <SassIcon />
              </Cell>
              <Cell className="border-b-3">
                <SQLIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <ReduxIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3">
                <GitIcon />
              </Cell>
              <Cell />
              <Cell className="border-r-3 border-l-3" />
              <Cell />
            </>
          )}

          {activeTab === "frontend" && (
            <>
              <Cell className="border-b-3">
                <TailwindIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <ReactIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3">
                <SassIcon />
              </Cell>
              <Cell className="border-b-3">
                <HtmlIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <ReduxIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3">
                <NextjsIcon />
              </Cell>
              <Cell />
              <Cell className="border-r-3 border-l-3">
                <CssIcon />
              </Cell>
              <Cell>
                <JavascriptIcon />
              </Cell>
            </>
          )}

          {activeTab === "database" && (
            <>
              <Cell className="border-b-3">
                <SQLIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <FirebaseIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3">
                <SQLiteIcon />
              </Cell>
              <Cell />
              <Cell className="border-r-3 border-l-3"></Cell>
              <Cell></Cell>
            </>
          )}

          {activeTab === "languages" && (
            <>
              <Cell className="border-b-3"></Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <JavascriptIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3"></Cell>
              <Cell className="border-b-3"></Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <TypescriptIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3"></Cell>
              <Cell />
              <Cell className="border-r-3 border-l-3"></Cell>
              <Cell></Cell>
            </>
          )}

          {activeTab === "version-control" && (
            <>
              <Cell className="border-b-3">
                <GitIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <GithubIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3">
                <GitlabIcon />
              </Cell>
              <Cell className="border-b-3">
                <GithubCodespacesIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <BitBucketIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3">
                <GithubActionsIcon />
              </Cell>
              <Cell />
              <Cell className="border-r-3 border-l-3"></Cell>
              <Cell></Cell>
            </>
          )}

          {activeTab === "tools" && (
            <>
              <Cell className="border-b-3">
                <NpmIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <VsCodeIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3">
                <BabelIcon />
              </Cell>
              <Cell className="border-b-3">
                <DockerIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3 col-span-2">
                <FigmaIcon />
              </Cell>
              <Cell className="border-b-3 border-l-3">
                <StackOverflowIcon />
              </Cell>
              <Cell />
              <Cell className="border-r-3 border-l-3"></Cell>
              <Cell></Cell>
            </>
          )}

          <Cell className="border-l-3" />
        </div>

        <Menu activeTab={activeTab} handleClick={(tab) => setActiveTab(tab)} />
      </div>
    </div>
  );
};

interface CellProps {
  className?: string;
  children?: React.ReactNode;
}

const Cell = ({ className, children }: CellProps) => {
  return (
    <div
      className={`border-accent h-20 w-full justify-center items-center flex ${className} p-3`}
    >
      {children}
    </div>
  );
};

interface MenuProps {
  activeTab: string;
  handleClick: (tab: string) => void;
}

const Menu = ({ activeTab, handleClick }: MenuProps) => {
  return (
    <div className="bg-black dark:bg-white dark:bg-opacity-5 bg-opacity-10 p-1.5 rounded-full flex flex-col justify-center items-center">
      <MenuItem
        icon={Home01Icon}
        href="home"
        onClick={handleClick}
        activeTab={activeTab}
      />

      <MenuItem
        icon={PaintBrush04Icon}
        href="frontend"
        onClick={handleClick}
        activeTab={activeTab}
      />

      <MenuItem
        icon={DatabaseIcon}
        href="database"
        onClick={handleClick}
        activeTab={activeTab}
      />

      <MenuItem
        icon={SourceCodeIcon}
        href="languages"
        onClick={handleClick}
        activeTab={activeTab}
      />

      <MenuItem
        icon={GitForkIcon}
        href="version-control"
        onClick={handleClick}
        activeTab={activeTab}
      />

      <MenuItem
        icon={Layers01Icon}
        href="tools"
        onClick={handleClick}
        activeTab={activeTab}
      />
    </div>
  );
};

interface MenuItemProps {
  icon: HugeiconsProps["icon"];
  activeTab: string;
  href: string;
  onClick: (tab: string) => void;
}

const MenuItem = ({
  icon = Alert01Icon,
  activeTab,
  href,
  onClick,
}: MenuItemProps) => {
  const active = href === activeTab;

  return (
    <button
      onClick={() => onClick(href)}
      className={`my-2 bg-black dark:bg-white rounded-[10px] p-1 hover:bg-opacity-20 transition-colors ${
        active
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
