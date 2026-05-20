"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Wrench } from "lucide-react";
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
    <nav className="sticky top-0 z-50 w-full border-b border-brand-gray bg-brand-black/95 backdrop-blur supports-[backdrop-filter]:bg-brand-black/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Wrench className="h-8 w-8 text-brand-red" />
          <span className="text-xl font-bold uppercase tracking-wider text-brand-light">
            Heksen <span className="text-brand-red">Garage</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-red",
                pathname === link.href ? "text-brand-red" : "text-brand-light"
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
        <div className="md:hidden border-t border-brand-gray bg-brand-black p-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-brand-red",
                  pathname === link.href ? "text-brand-red" : "text-brand-light"
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
