"use client";

import { Section } from "@/components/ui/Section";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { ConsultationFormPage } from "@/components/ConsultationFormPage";
import { motion } from "framer-motion";
import { useConsultationForm } from "@/context/ConsultationContext";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    lines: ["Jl. Lampiri Raya No. 5A, Pondok Kelapa, Duren Sawit, Jakarta Timur 13450"],
  },
  {
    icon: Phone,
    title: "Telepon",
    lines: ["0813-6868-2723"],
    action: true,
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    lines: ["Senin – Jumat: 08:00 – 17:00", "Sabtu: 08:00 – 14:00"],
    extra: "Minggu: Tutup",
  },
];

export default function KontakPage() {
  const { openForm } = useConsultationForm();

  return (
    <>
      {/* Minimal Hero */}
      <section className="relative pt-32 pb-16 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[180px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-black md:text-6xl mb-4">
              Hubungi <span className="gradient-text">Kami</span>
            </h1>
            <p className="mx-auto max-w-lg text-brand-muted text-lg">
              Konsultasi gratis untuk estimasi perbaikan kendaraan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Cards — Horizontal Strip */}
      <Section className="bg-brand-black py-10">
        <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-5 text-center hover:border-brand-orange/30 transition-all duration-300"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                <item.icon className="h-4.5 w-4.5 text-brand-orange" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-xs text-brand-muted leading-relaxed">{line}</p>
              ))}
              {item.extra && (
                <p className="text-xs text-brand-red font-medium mt-1">{item.extra}</p>
              )}
              {item.action && (
                <button
                  onClick={openForm}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-4 py-1.5 text-xs font-bold text-white hover:scale-105 transition-transform"
                >
                  <MessageCircle className="h-3 w-3" />
                  Chat WA
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* Map + Form — Clean 2-Column */}
      <Section className="bg-brand-dark">
        <div className="grid gap-10 lg:grid-cols-5 max-w-6xl mx-auto">
          {/* Map — Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-xl font-bold text-white mb-4">Lokasi Kami</h2>
            <div className="overflow-hidden rounded-2xl border border-brand-gray h-80 lg:h-full min-h-[320px] relative group">
              <div className="absolute inset-0 bg-brand-black/15 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521671840811!2d106.9415145!3d-6.2527919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d001137aabb%3A0xccca9b604c7b45e6!2sBengkel%20Mobil%20Hexen%20Garage!5e0!3m2!1sid!2sid!4v1234567890"
                className="relative z-0"
              />
              <a
                href="https://maps.app.goo.gl/bkXbQZmxy4sz9v616"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 glass px-3 py-2 rounded-lg text-xs font-semibold text-white hover:text-brand-orange transition-colors"
              >
                Google Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>

          {/* Form — Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <ConsultationFormPage />
          </motion.div>
        </div>
      </Section>
    </>
  );
}
