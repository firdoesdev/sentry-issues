"use client";

import { AuthSection } from "./auth";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-6 sm:px-12 lg:px-24 mx-auto max-w-7xl">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center gap-8 shadow-none bg-transparent">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-100 rounded-lg flex items-center justify-center text-white dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 22h20L12 2z" />
              </svg>
            </div>
            <span>Apex</span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">
            <Link
              href="#features"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center shadow-none bg-transparent">
          <AuthSection />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-zinc-600 dark:text-zinc-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 h-[calc(100vh-4rem)] bg-white dark:bg-black border-base border-t flex flex-col p-6 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
          <nav className="flex flex-col gap-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-8 mt-4 tracking-tight">
            <Link
              href="#features"
              onClick={closeMenu}
              className="border-b border-zinc-100 dark:border-zinc-800 pb-4 transition-colors hover:text-blue-500"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={closeMenu}
              className="border-b border-zinc-100 dark:border-zinc-800 pb-4 transition-colors hover:text-blue-500"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              onClick={closeMenu}
              className="border-b border-zinc-100 dark:border-zinc-800 pb-4 transition-colors hover:text-blue-500"
            >
              About
            </Link>
          </nav>

          <div className="mt-auto flex flex-col justify-center items-center w-full gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-8 pb-4">
            <AuthSection />
          </div>
        </div>
      )}
    </header>
  );
};
