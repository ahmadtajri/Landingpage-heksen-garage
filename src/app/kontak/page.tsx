"use client";

import { Section } from "@/components/ui/Section";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { ContactButton } from "@/components/ContactButton";
import { ConsultationFormPage } from "@/components/ConsultationFormPage";
import { motion } from "framer-motion";

export default function KontakPage() {
  return (
    <>
      <Section className="bg-brand-dark pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Hubungi Kami
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-muted">
            Kami siap membantu dan menjawab semua pertanyaan Anda tentang perbaikan mobil.
          </p>
        </motion.div>
      </Section>

      {/* Quick Contact Cards */}
      <Section className="bg-brand-black">
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-brand-gray bg-brand-dark/80 p-6 text-center hover:border-brand-orange transition-colors"
          >
            <Phone className="h-8 w-8 text-brand-orange mx-auto mb-3" />
            <h3 className="font-semibold text-brand-light mb-2">Telepon</h3>
            <p className="text-sm text-brand-muted">0813-6868-2723</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-brand-gray bg-brand-dark/80 p-6 text-center hover:border-brand-orange transition-colors"
          >
            <MessageCircle className="h-8 w-8 text-brand-orange mx-auto mb-3" />
            <h3 className="font-semibold text-brand-light mb-2">WhatsApp</h3>
            <p className="text-sm text-brand-muted">0813-6868-2723</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border border-brand-gray bg-brand-dark/80 p-6 text-center hover:border-brand-orange transition-colors"
          >
            <Clock className="h-8 w-8 text-brand-orange mx-auto mb-3" />
            <h3 className="font-semibold text-brand-light mb-2">Jam Operasional</h3>
            <p className="text-sm text-brand-muted">Senin - Jumat 08:00 - 17:00</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg border border-brand-gray bg-brand-dark/80 p-6 text-center hover:border-brand-orange transition-colors"
          >
            <MapPin className="h-8 w-8 text-brand-orange mx-auto mb-3" />
            <h3 className="font-semibold text-brand-light mb-2">Lokasi</h3>
            <p className="text-sm text-brand-muted">Jakarta Timur</p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-brand-black">
        <div className="grid gap-12 lg:grid-cols-3 mb-12">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div>
              <h2 className="mb-6 text-2xl font-bold">Informasi Lengkap</h2>
              <div className="space-y-5">
                <div className="rounded-lg border border-brand-gray bg-brand-dark/50 p-5 hover:border-brand-orange transition-colors">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-light mb-2">Alamat Bengkel</h3>
                      <p className="text-sm text-brand-muted leading-relaxed">Jl. Lampiri Raya No.5A, RT.2/RW.12, Pd. Klp., Kec. Duren Sawit, Kota Jakarta Timur 13450</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-brand-gray bg-brand-dark/50 p-5 hover:border-brand-orange transition-colors">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-light mb-2">Hubungi Kami</h3>
                      <p className="text-sm text-brand-muted">0813-6868-2723</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-brand-gray bg-brand-dark/50 p-5 hover:border-brand-orange transition-colors">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-light mb-2">Waktu Layanan</h3>
                      <p className="text-sm text-brand-muted">Senin - Jumat: 08:00 - 17:00</p>
                      <p className="text-sm text-brand-muted">Sabtu: 08:00 - 14:00</p>
                      <p className="text-sm text-brand-muted">Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <ContactButton />
            </div>
          </motion.div>

          {/* Maps Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="h-96 lg:h-full overflow-hidden rounded-xl border border-brand-gray bg-brand-gray">
              <iframe
                width="100%"
                height="100%"
                style={{ minHeight: "400px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521671840811!2d106.9415145!3d-6.2527919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d001137aabb%3A0xccca9b604c7b45e6!2sBengkel%20Mobil%20Hexen%20Garage!5e0!3m2!1sid!2sid!4v1234567890"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Consultation Form */}
      <Section className="bg-brand-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Konsultasi Gratis</h2>
          <p className="mx-auto max-w-2xl text-lg text-brand-muted">
            Isi formulir di bawah dan tim kami akan menghubungi Anda sesegera mungkin untuk memberikan penawaran terbaik.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ConsultationFormPage />
        </motion.div>
      </Section>
    </>
  );
}
