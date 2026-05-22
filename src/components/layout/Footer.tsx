import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-2 border-brand-orange bg-brand-black pt-12 pb-8 shadow-[0_-4px_12px_rgba(255,136,0,0.1)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-4 text-2xl font-black text-brand-orange tracking-wider">HEXEN GARAGE</h3>
            <p className="text-brand-muted max-w-sm">
              Bengkel body repair, chassis repair, dan restorasi profesional dengan standar oven terbaik.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-xs text-center md:text-left">
              <h3 className="mb-4 text-lg font-semibold text-brand-light">Hubungi Kami</h3>
              <ul className="space-y-4 text-brand-muted inline-block md:block">
                <li className="flex items-start gap-3 text-left">
                  <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>
                    Jl. Lampiri Raya No. 5A Pondok Kelapa Duren Sawit Jakarta Timur 13450
                  </span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <Phone className="h-5 w-5 text-brand-orange shrink-0" />
                  <span>0813-6868-2723</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t-2 border-brand-orange pt-8 md:flex-row">
          <p className="text-sm text-brand-muted">
            &copy; {new Date().getFullYear()} Hexen Garage. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-brand-muted md:mt-0">
            <Link href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
