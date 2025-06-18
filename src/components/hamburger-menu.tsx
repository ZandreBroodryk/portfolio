"use client";

import { useState } from "react";

export default function HamburgerMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <button
        className="absolute top-0 right-0 z-20 ml-auto size-7 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          viewBox="-9 -9 18 18"
          stroke="currentColor"
          focusable="false"
          className={`transition-all ${isOpen ? "rotate-90" : ""}`}
        >
          <g>
            <path
              className={`bg-white transition-all ${isOpen ? "translate-x-[-4px] translate-y-[4px] rotate-45" : ""}`}
              d="M-9 -5 L9 -5"
              fill="none"
              strokeWidth="2"
            />
            <path
              className={`bg-white transition-all ${isOpen ? "rotate-135 opacity-0" : ""}`}
              d="M-9 0 L9 0"
              fill="none"
              strokeWidth="2"
            />
            <path
              className={`bg-white transition-all ${isOpen ? "translate-x-[3px] translate-y-[4px] rotate-135" : ""}`}
              d="M-9 5 L9 5"
              fill="none"
              strokeWidth="2"
            />
          </g>
        </svg>
      </button>
      {isOpen && (
        <nav className={`top-0 left-0 z-10 flex flex-col`}>{children}</nav>
      )}
    </div>
  );
}
