import React from "react";

import localFont from "next/font/local";

import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";

const frygiaHeavy = localFont({
  src: "../../../public/fonts/frygia-heavy.ttf",
});

export const Navbar = () => {
  return (
    <div className="fixed z-50 top-2 left-2 right-2 bg-navbar-bg rounded-xl py-2 px-3 flex flex-row justify-between items-center backdrop-blur-[7px]">
      <p
        className={`${frygiaHeavy.className} text-3xl leading-normal pt-1`}
      >
        {"<A"}
        <span className="text-accent">/</span>
        {">"}
      </p>

      <HugeiconsIcon
        icon={Menu01Icon}
        size={32}
        strokeWidth={0.6}
        className="text-accent cursor-pointer"
      />
    </div>
  );
};
