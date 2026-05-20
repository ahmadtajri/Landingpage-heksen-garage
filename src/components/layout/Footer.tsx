import Link from "next/link";
import { Wrench, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-brand-gray bg-brand-black pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Wrench className="h-8 w-8 text-brand-red" />
              <span className="text-xl font-bold uppercase tracking-wider text-brand-light">
                Heksen <span className="text-brand-red">Garage</span>
              </span>
            </Link>
            <p className="mb-6 text-brand-muted">
              Spesialis body repair dan restorasi mobil profesional. Mengembalikan mobil bekas tabrakan menjadi presisi dan aman digunakan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm font-medium text-brand-muted hover:text-brand-red transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm font-medium text-brand-muted hover:text-brand-red transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-brand-light">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/layanan" className="text-brand-muted hover:text-brand-red transition-colors">
                  Body Repair
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-brand-muted hover:text-brand-red transition-colors">
                  Chassis Repair
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-brand-muted hover:text-brand-red transition-colors">
                  Restorasi Kendaraan
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-brand-muted hover:text-brand-red transition-colors">
                  Pengecatan Oven
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-brand-light">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tentang" className="text-brand-muted hover:text-brand-red transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-brand-muted hover:text-brand-red transition-colors">
                  Gallery Hasil
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="text-brand-muted hover:text-brand-red transition-colors">
                  Artikel Tips
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-brand-muted hover:text-brand-red transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-brand-light">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                <span className="text-brand-muted">
                  Jl. Otomotif Raya No. 123, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-red shrink-0" />
                <span className="text-brand-muted">+62 812 3456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-brand-gray pt-8 md:flex-row">
          <p className="text-sm text-brand-muted">
            &copy; {new Date().getFullYear()} Heksen Garage. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-brand-muted md:mt-0">
            <Link href="#" className="hover:text-brand-light">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-light">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
