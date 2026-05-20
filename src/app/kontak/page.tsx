import { Section } from "@/components/ui/Section";
import { MapPin, Phone } from "lucide-react";
import { ContactButton } from "@/components/ContactButton";
import { ConsultationFormPage } from "@/components/ConsultationFormPage";
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
                  <p className="text-brand-muted">Jl. Lampiri Raya No.5A, RT.2/RW.12, Pd. Klp., Kec. Duren Sawit, Kota Jakarta Timur 13450</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-brand-orange shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-light">Telepon</h3>
                  <p className="text-brand-muted">0813-6868-2723</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <ContactButton />
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="h-64 md:h-auto overflow-hidden rounded-xl bg-brand-gray border border-brand-gray">
            <iframe
              width="100%"
              height="100%"
              style={{ minHeight: "400px" }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521671840811!2d106.9415145!3d-6.2527919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d001137aabb%3A0xccca9b604c7b45e6!2sBengkel%20Mobil%20Hexen%20Garage!5e0!3m2!1sid!2sid!4v1234567890"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-brand-black">
        <div>
          <ConsultationFormPage />
        </div>
      </Section>
    </>
  );
}
