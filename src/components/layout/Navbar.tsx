"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Gallery", href: "/gallery" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Artikel", href: "/artikel" },
  { name: "Kontak", href: "/kontak" },
];

interface NavbarProps {
  onConsultationClick?: () => void;
}

export function Navbar({ onConsultationClick }: NavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleConsultationClick = () => {
    if (onConsultationClick) {
      onConsultationClick();
    } else {
      document.dispatchEvent(new CustomEvent("openConsultationForm"));
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-brand-orange bg-brand-black/98 backdrop-blur supports-[backdrop-filter]:bg-brand-black/90 shadow-[0_4px_12px_rgba(255,136,0,0.15)]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-orange/20 blur-lg rounded-full"></div>
            <Image
              src="/General Logo.jpeg"
              alt="Hexen Garage Logo"
              width={60}
              height={60}
              className="h-14 w-auto relative"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
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
          <Button
            variant="primary"
            onClick={handleConsultationClick}
          >
            Konsultasi Gratis
          </Button>
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
            {navLinks.map((link) => (
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
            <Button
              variant="primary"
              className="w-full mt-4"
              onClick={handleConsultationClick}
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
