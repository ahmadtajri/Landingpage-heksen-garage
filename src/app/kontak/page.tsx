"use client";

import { Section } from "@/components/ui/Section";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { ConsultationFormPage } from "@/components/ConsultationFormPage";
import { motion } from "framer-motion";
import { useConsultationForm } from "@/context/ConsultationContext";

export default function KontakPage() {
  const { openForm } = useConsultationForm();

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
            Konsultasikan masalah kendaraan Anda secara gratis. Tim spesialis kami siap memberikan solusi terbaik.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-brand-black pb-24">
        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Left Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">Informasi Bengkel</h2>
              <div className="space-y-4">
                <div className="group rounded-xl border border-brand-gray bg-brand-dark/50 p-5 hover:border-brand-orange/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                      <MapPin className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-light mb-1">Alamat Bengkel</h3>
                      <p className="text-sm text-brand-muted leading-relaxed">Jl. Lampiri Raya No.5A, RT.2/RW.12, Pd. Klp., Kec. Duren Sawit, Kota Jakarta Timur 13450</p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-brand-gray bg-brand-dark/50 p-5 hover:border-brand-orange/50 transition-all flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                      <Phone className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-light mb-1">Telepon & WhatsApp</h3>
                      <p className="text-sm text-brand-muted">0813-6868-2723</p>
                    </div>
                  </div>
                  <button
                    onClick={openForm}
                    className="flex items-center justify-center gap-2 rounded-lg bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-brand-orange hover:bg-brand-orange hover:text-white transition-all sm:self-center shrink-0 border border-brand-orange/30"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat WA
                  </button>
                </div>

                <div className="group rounded-xl border border-brand-gray bg-brand-dark/50 p-5 hover:border-brand-orange/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                      <Clock className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-light mb-2">Jam Operasional</h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-brand-muted">
                        <span className="font-medium text-brand-light">Senin - Jumat</span>
                        <span>08:00 - 17:00</span>
                        <span className="font-medium text-brand-light">Sabtu</span>
                        <span>08:00 - 14:00</span>
                        <span className="font-medium text-brand-red">Minggu</span>
                        <span className="text-brand-red">Tutup</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-brand-gray bg-brand-gray h-72 relative group">
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors pointer-events-none z-10" />
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521671840811!2d106.9415145!3d-6.2527919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d001137aabb%3A0xccca9b604c7b45e6!2sBengkel%20Mobil%20Hexen%20Garage!5e0!3m2!1sid!2sid!4v1234567890"
                className="relative z-0 filter contrast-125"
              />
              <a 
                href="https://goo.gl/maps/bengkelmobilhexengarage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-brand-black/90 backdrop-blur-sm border border-brand-gray px-4 py-2 rounded-lg text-xs font-semibold text-white hover:text-brand-orange hover:border-brand-orange transition-colors"
              >
                Buka di Google Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-brand-gray bg-brand-dark/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <ConsultationFormPage />
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
