import React from "react";
import { Fire02Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, HugeiconsProps } from "@hugeicons/react";

interface FooterLinkProps {
  href: string;
  icon?: HugeiconsProps["icon"];
  iconClassName?: string;
  children?: React.ReactNode;
}

const FooterLink = ({
  href,
  icon,
  iconClassName,
  children,
}: FooterLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground-65 font-light flex justify-center items-center gap-0.5 cursor-pointer hover:text-black dark:hover:text-white transition-colors"
  >
    {icon && <HugeiconsIcon icon={icon} size={20} className={iconClassName} />}
    {children}
  </a>
);

export const Footer = () => {
  return (
    <footer className="mt-[20svh] mb-4 py-5 px-3 flex justify-between items-center max-w-xl md:max-w-4xl md:px-8 mx-auto">
      <FooterLink
        href="https://github.com/axelestrada"
        icon={Fire02Icon}
        iconClassName="text-[#fe5546]"
      >
        Hecho por Axel Estrada
      </FooterLink>

      <div className="flex justify-center items-center gap-3">
        <FooterLink
          href="https://linkedin.com/in/axelestradadev"
          icon={Linkedin01Icon}
        />
        <FooterLink href="https://github.com/axelestrada/axelestrada.github.io">
          Código fuente
        </FooterLink>
      </div>
    </footer>
  );
};
