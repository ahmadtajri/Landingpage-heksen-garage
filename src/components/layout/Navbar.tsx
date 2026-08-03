"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsMobileDropdownOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-brand-black/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-brand-orange/20 blur-lg rounded-full group-hover:bg-brand-orange/40 transition-all duration-500" />
            <Image
              src="/new-logo.png"
              alt="Hexen Garage Logo"
              width={64}
              height={64}
              className="relative w-12 h-auto transition-transform duration-300 group-hover:scale-110"
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-black uppercase tracking-widest text-brand-light group-hover:text-white transition-colors">Hexen</span>
            <span className="text-base font-black uppercase tracking-widest text-brand-orange">Garage</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 animated-underline",
                pathname === link.href
                  ? "text-brand-orange"
                  : "text-brand-light hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-gradient-to-r from-brand-red to-brand-orange rounded-full" />
              )}
            </Link>
          ))}

          {/* About Dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                isAboutActive
                  ? "text-brand-orange"
                  : "text-brand-light hover:text-white hover:bg-white/5"
              )}
            >
              Lainnya
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-52 rounded-xl glass shadow-[0_8px_40px_rgba(0,0,0,0.6)] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
              {aboutDropdownLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-200",
                    i !== aboutDropdownLinks.length - 1 && "border-b border-white/5",
                    pathname === link.href
                      ? "text-brand-orange bg-brand-orange/10"
                      : "text-brand-light hover:text-brand-orange hover:bg-white/5 hover:pl-5"
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
            className="ml-4 flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-red to-brand-orange px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,136,0,0.25)] hover:shadow-[0_0_35px_rgba(255,136,0,0.5)] hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-brand-light hover:text-brand-orange hover:bg-white/5 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-5">
            <span className={cn(
              "absolute left-0 h-0.5 w-5 bg-current transition-all duration-300",
              isOpen ? "top-2.5 rotate-45" : "top-1"
            )} />
            <span className={cn(
              "absolute left-0 top-2.5 h-0.5 w-5 bg-current transition-all duration-300",
              isOpen ? "opacity-0 scale-x-0" : "opacity-100"
            )} />
            <span className={cn(
              "absolute left-0 h-0.5 w-5 bg-current transition-all duration-300",
              isOpen ? "top-2.5 -rotate-45" : "top-4"
            )} />
          </div>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-white/5 bg-brand-black/98 backdrop-blur-xl px-4 py-5 space-y-1">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200",
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
                "w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200",
                isAboutActive
                  ? "text-brand-orange bg-brand-orange/10"
                  : "text-brand-light hover:text-white hover:bg-white/5"
              )}
            >
              Lainnya
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isMobileDropdownOpen && "rotate-180")} />
            </button>
            <div className={cn(
              "overflow-hidden transition-all duration-300",
              isMobileDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-orange/20 pl-4">
                {aboutDropdownLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
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
          <div className="pt-3">
            <button
              onClick={() => {
                setIsOpen(false);
                openForm();
              }}
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-brand-red to-brand-orange px-4 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(233,30,60,0.2)]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
