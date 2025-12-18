'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="backdrop-blur-lg bg-transparent">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 text-white">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-wide"
          >
            IRON GYM
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#trainers" className="hover:text-white transition-colors">
              Trainers
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>

            <Link href="/pay-fees">
              <Button
                className="
                  rounded-full
                  bg-rose-600/90
                  hover:bg-rose-600
                  shadow-lg shadow-rose-600/20
                "
              >
                Pay Fees
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-full p-2 hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden backdrop-blur-xl bg-black/30">
          <div className="flex flex-col gap-5 px-6 py-6 text-gray-200">
            <a
              href="#trainers"
              className="hover:text-white"
              onClick={() => setOpen(false)}
            >
              Trainers
            </a>
            <a
              href="#about"
              className="hover:text-white"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-white"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>

            <Link href="/pay-fees" onClick={() => setOpen(false)}>
              <Button
                className="
                  mt-2
                  w-full
                  rounded-full
                  bg-rose-600/90
                  hover:bg-rose-600
                "
              >
                Pay Fees
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
