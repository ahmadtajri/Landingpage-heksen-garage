"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useConsultationForm } from "@/context/ConsultationContext";

const footerLinks = {
  layanan: [
    { name: "Body Repair", href: "/layanan/body-repair" },
    { name: "Chassis Repair", href: "/layanan/chassis-repair" },
    { name: "Restorasi Kendaraan", href: "/layanan/restorasi" },
    { name: "Semua Layanan", href: "/layanan" },
  ],
  perusahaan: [
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Gallery", href: "/gallery" },
    { name: "Artikel", href: "/artikel" },
    { name: "Kontak", href: "/kontak" },
  ],
};

const WA_NUMBER = "6281368682723";

export function Footer() {
  const { openForm } = useConsultationForm();

  return (
    <footer className="bg-brand-black border-t border-brand-gray/50">
      {/* Top CTA Strip */}
      <div className="border-b border-brand-gray/30 bg-gradient-to-r from-brand-red/10 via-brand-orange/10 to-brand-red/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-white">Siap Perbaiki Mobil Anda?</p>
            <p className="text-sm text-brand-muted">Konsultasi gratis, tanpa biaya tambahan.</p>
          </div>
          <button
            onClick={openForm}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-red to-brand-orange px-6 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,136,0,0.25)] hover:shadow-[0_0_30px_rgba(255,136,0,0.45)] hover:scale-105 transition-all duration-200 shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi Sekarang
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-brand-orange/15 blur-lg rounded-full" />
                <Image
                  src="/New Logo.png"
                  alt="Hexen Garage Logo"
                  width={56}
                  height={56}
                  className="relative w-12 h-auto"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-black uppercase tracking-widest text-brand-light">Hexen</span>
                <span className="text-base font-black uppercase tracking-widest text-brand-orange">Garage</span>
              </div>
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed max-w-[240px]">
              Bengkel spesialis body repair, chassis repair, dan restorasi kendaraan profesional di Jakarta Timur.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/hexen.garage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-gray bg-brand-dark text-brand-muted hover:text-brand-orange hover:border-brand-orange transition-all"
                aria-label="Instagram Hexen Garage"
              >
                {/* Instagram SVG */}
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <button
                onClick={openForm}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-gray bg-brand-dark text-brand-muted hover:text-brand-orange hover:border-brand-orange transition-all"
                aria-label="WhatsApp Hexen Garage"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Layanan Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-light">Layanan</h3>
            <ul className="space-y-2.5">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-light">Perusahaan</h3>
            <ul className="space-y-2.5">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-light">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm text-brand-muted leading-relaxed">
                  Jl. Lampiri Raya No. 5A, Pondok Kelapa, Duren Sawit, Jakarta Timur 13450
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-orange shrink-0" />
                <a href="tel:+6281368682723" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                  0813-6868-2723
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                <div className="text-sm text-brand-muted space-y-0.5">
                  <p>Senin – Jumat: 08:00 – 17:00</p>
                  <p>Sabtu: 08:00 – 14:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-brand-gray/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} Hexen Garage. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-brand-muted">
            <Link href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
