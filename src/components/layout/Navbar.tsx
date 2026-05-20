"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const mainNavLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/layanan" },
  { name: "Contact", href: "/kontak" },
];

const aboutDropdownLinks = [
  { name: "About Us", href: "/tentang" },
  { name: "Gallery", href: "/gallery" },
  { name: "Articles", href: "/artikel" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isAboutActive = ["/tentang", "/gallery", "/artikel"].includes(pathname);

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-brand-orange bg-brand-black/98 backdrop-blur supports-[backdrop-filter]:bg-brand-black/90 shadow-[0_4px_12px_rgba(255,136,0,0.15)]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-orange/20 blur-lg rounded-full"></div>
            <Image
              src="/New Logo.png"
              alt="Hexen Garage Logo"
              width={72}
              height={72}
              className="h-18 w-auto relative"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold uppercase tracking-wider text-brand-light">Hexen</span>
            <span className="text-xl font-bold uppercase tracking-wider text-brand-orange">Garage</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-all relative hover:text-brand-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-orange after:transition-all",
                pathname === link.href ? "text-brand-orange after:w-full" : "text-brand-light after:w-0 hover:after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* About Dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "text-sm font-semibold transition-all relative flex items-center gap-1 hover:text-brand-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-orange after:transition-all",
                isAboutActive ? "text-brand-orange after:w-full" : "text-brand-light after:w-0 group-hover:after:w-full"
              )}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              About
              <ChevronDown className={cn("h-4 w-4 transition-transform", isDropdownOpen && "rotate-180")} />
            </button>

            {/* Dropdown Menu */}
            <div
              className={cn(
                "absolute left-0 mt-0 w-48 rounded-md bg-brand-dark shadow-lg border border-brand-gray transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible pt-2",
                isDropdownOpen && "opacity-100 visible"
              )}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {aboutDropdownLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium transition-colors first:rounded-t-md last:rounded-b-md hover:bg-brand-orange/10",
                    pathname === link.href ? "text-brand-orange bg-brand-orange/5" : "text-brand-light hover:text-brand-orange"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-brand-light hover:text-brand-red"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-brand-orange bg-brand-black p-4">
          <div className="flex flex-col space-y-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-semibold transition-colors hover:text-brand-orange",
                  pathname === link.href ? "text-brand-orange" : "text-brand-light"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className={cn(
                  "w-full text-left text-lg font-semibold transition-colors flex items-center justify-between hover:text-brand-orange",
                  isAboutActive ? "text-brand-orange" : "text-brand-light"
                )}
              >
                About
                <ChevronDown className={cn("h-4 w-4 transition-transform", isMobileDropdownOpen && "rotate-180")} />
              </button>
              {isMobileDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2 border-l-2 border-brand-orange/30 pl-4">
                  {aboutDropdownLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileDropdownOpen(false);
                      }}
                      className={cn(
                        "block text-base font-medium transition-colors hover:text-brand-orange",
                        pathname === link.href ? "text-brand-orange" : "text-brand-light"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
