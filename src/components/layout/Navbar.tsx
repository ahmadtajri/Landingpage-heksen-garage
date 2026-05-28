"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useConsultationForm } from "@/context/ConsultationContext";

const mainNavLinks = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Kontak", href: "/kontak" },
];

const aboutDropdownLinks = [
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Gallery", href: "/gallery" },
  { name: "Artikel", href: "/artikel" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openForm } = useConsultationForm();

  const isAboutActive = ["/tentang", "/gallery", "/artikel"].includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-b border-brand-gray/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-brand-orange/20 blur-lg rounded-full group-hover:bg-brand-orange/30 transition-all" />
            <Image
              src="/New Logo.png"
              alt="Hexen Garage Logo"
              width={64}
              height={64}
              className="relative w-14 h-auto"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-black uppercase tracking-widest text-brand-light group-hover:text-white transition-colors">Hexen</span>
            <span className="text-lg font-black uppercase tracking-widest text-brand-orange">Garage</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                pathname === link.href
                  ? "text-brand-orange bg-brand-orange/10"
                  : "text-brand-light hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-brand-orange rounded-full" />
              )}
            </Link>
          ))}

          {/* About Dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                isAboutActive
                  ? "text-brand-orange bg-brand-orange/10"
                  : "text-brand-light hover:text-white hover:bg-white/5"
              )}
            >
              Lainnya
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-52 rounded-xl bg-brand-dark border border-brand-gray/80 shadow-[0_8px_32px_rgba(0,0,0,0.6)] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 overflow-hidden">
              {aboutDropdownLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium transition-colors",
                    i !== aboutDropdownLinks.length - 1 && "border-b border-brand-gray/50",
                    pathname === link.href
                      ? "text-brand-orange bg-brand-orange/10"
                      : "text-brand-light hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={openForm}
            className="ml-4 flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-red to-brand-orange px-4 py-2 text-sm font-bold text-white shadow-[0_0_15px_rgba(255,136,0,0.3)] hover:shadow-[0_0_25px_rgba(255,136,0,0.5)] hover:scale-105 transition-all duration-200"
          >
            WhatsApp
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-brand-light hover:text-brand-orange hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-brand-gray/50 bg-brand-black/98 backdrop-blur-md px-4 py-4 space-y-1">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                pathname === link.href
                  ? "text-brand-orange bg-brand-orange/10"
                  : "text-brand-light hover:text-white hover:bg-white/5"
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
                "w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                isAboutActive
                  ? "text-brand-orange bg-brand-orange/10"
                  : "text-brand-light hover:text-white hover:bg-white/5"
              )}
            >
              Lainnya
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isMobileDropdownOpen && "rotate-180")} />
            </button>
            <div className={cn(
              "overflow-hidden transition-all duration-200",
              isMobileDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-orange/20 pl-4">
                {aboutDropdownLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-brand-orange"
                        : "text-brand-muted hover:text-brand-orange"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                openForm();
              }}
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-brand-red to-brand-orange px-4 py-3 text-sm font-bold text-white"
            >
              Chat WhatsApp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
