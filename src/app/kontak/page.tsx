"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Mail } from "lucide-react";
import { ConsultationFormPage } from "@/components/ConsultationFormPage";
import { motion } from "framer-motion";
import { useConsultationForm } from "@/context/ConsultationContext";

export default function KontakPage() {
  const { openForm } = useConsultationForm();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/konsultasi.png"
            alt="Hexen Garage Konsultasi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
          <div className="grain-overlay" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 pb-12 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-orange font-semibold uppercase tracking-widest mb-6">
              <Phone className="h-3.5 w-3.5" />
              Kontak
            </span>
            <h1 className="text-4xl font-black md:text-6xl mb-4">
              Hubungi <span className="gradient-text">Kami</span>
            </h1>
            <p className="max-w-xl text-lg text-brand-muted">
              Konsultasikan masalah kendaraan Anda secara gratis. Tim spesialis
              kami siap memberikan solusi terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <Section className="bg-brand-dark pb-24 relative overflow-hidden">
        {/* BG Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto relative z-10">
          {/* Left Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="mb-6 text-2xl font-black text-white">
                Informasi <span className="gradient-text">Bengkel</span>
              </h2>
              <div className="space-y-4">
                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group glass rounded-xl p-5 hover:border-brand-orange/50 transition-all hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-red/20 to-brand-orange/20 group-hover:from-brand-red/30 group-hover:to-brand-orange/30 transition-all">
                      <MapPin className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-light mb-1">Alamat Bengkel</h3>
                      <p className="text-sm text-brand-muted leading-relaxed">
                        Jl. Lampiri Raya No.5A, RT.2/RW.12, Pd. Klp., Kec.
                        Duren Sawit, Kota Jakarta Timur 13450
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group glass rounded-xl p-5 hover:border-brand-orange/50 transition-all hover-lift flex flex-col sm:flex-row gap-4"
                >
                  <div className="flex-1 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-red/20 to-brand-orange/20 group-hover:from-brand-red/30 group-hover:to-brand-orange/30 transition-all">
                      <Phone className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-light mb-1">
                        Telepon & WhatsApp
                      </h3>
                      <p className="text-sm text-brand-muted">0813-6868-2723</p>
                    </div>
                  </div>
                  <button
                    onClick={openForm}
                    className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-red to-brand-orange px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_15px_rgba(233,30,60,0.2)] hover:shadow-[0_0_25px_rgba(233,30,60,0.4)] hover:scale-105 transition-all duration-300 sm:self-center shrink-0"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat WA
                  </button>
                </motion.div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group glass rounded-xl p-5 hover:border-brand-orange/50 transition-all hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-red/20 to-brand-orange/20 group-hover:from-brand-red/30 group-hover:to-brand-orange/30 transition-all">
                      <Clock className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-light mb-2">
                        Jam Operasional
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-brand-muted">
                        <span className="font-medium text-brand-light">
                          Senin - Jumat
                        </span>
                        <span>08:00 - 17:00</span>
                        <span className="font-medium text-brand-light">
                          Sabtu
                        </span>
                        <span>08:00 - 14:00</span>
                        <span className="font-medium text-brand-red">
                          Minggu
                        </span>
                        <span className="text-brand-red">Tutup</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-brand-gray bg-brand-gray h-80 relative group"
            >
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
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
                href="https://maps.app.goo.gl/bkXbQZmxy4sz9v616"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 flex items-center gap-2 glass px-4 py-2.5 rounded-lg text-xs font-bold text-white hover:text-brand-orange transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,136,0,0.2)]"
              >
                Buka di Google Maps{" "}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/8 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <ConsultationFormPage />
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
