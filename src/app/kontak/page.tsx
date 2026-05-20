import { Section } from "@/components/ui/Section";
import { MapPin, Phone } from "lucide-react";
import { ContactButton } from "@/components/ContactButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | Hexen Garage",
  description: "Hubungi Hexen Garage untuk konsultasi dan estimasi perbaikan mobil Anda.",
};

export default function KontakPage() {
  return (
    <>
      <Section className="bg-brand-dark pt-32 pb-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Hubungi Kami</h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-muted">
            Konsultasikan kerusakan mobil Anda kepada ahlinya.
          </p>
        </div>
      </Section>
      <Section className="bg-brand-black">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Informasi Kontak</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-brand-orange shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-light">Alamat Bengkel</h3>
                  <p className="text-brand-muted">Jl. Otomotif Raya No. 123, Jakarta Selatan, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-brand-orange shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-light">Telepon</h3>
                  <p className="text-brand-muted">+62 812 3456 7890</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <ContactButton />
            </div>
          </div>
          
          {/* Maps Placeholder */}
          <div className="h-64 md:h-auto overflow-hidden rounded-xl bg-brand-gray border border-brand-gray relative">
             <div className="absolute inset-0 flex items-center justify-center text-brand-muted">
                [Google Maps Integration]
             </div>
          </div>
        </div>
      </Section>
    </>
  );
}
