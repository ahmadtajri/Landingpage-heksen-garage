"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useConsultationForm } from "@/context/ConsultationContext";

interface GalleryImage {
  src: string;
  caption: string;
}

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string[];
  features: string[];
  galleryImages: GalleryImage[];
  nextService?: {
    title: string;
    href: string;
  };
}

export function ServiceDetailLayout({
  title,
  subtitle,
  heroImage,
  description,
  features,
  galleryImages,
  nextService,
}: ServiceDetailProps) {
  const { openForm } = useConsultationForm();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
          <div className="grain-overlay" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-orange transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Kembali ke Layanan
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Description & Features */}
      <Section className="bg-brand-dark">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-light">
              Tentang Layanan Ini
            </h2>
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-brand-muted leading-relaxed mb-4 text-base md:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <button
                onClick={openForm}
                className="inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all bg-gradient-to-b from-brand-red to-brand-red-hover text-white hover:shadow-[0_8px_16px_rgba(233,30,60,0.4)] hover:scale-105 shadow-lg h-14 px-8 text-lg"
              >
                <MessageCircle className="h-5 w-5" /> Konsultasi Sekarang
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-light">
              Keunggulan
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 glass rounded-lg p-4 hover:border-brand-red/30 transition-colors hover-lift"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand-red mt-0.5 shrink-0" />
                  <span className="text-brand-light">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* Gallery / Results */}
      <Section className="bg-brand-black">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Hasil <span className="gradient-text">Pengerjaan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-muted max-w-xl mx-auto"
          >
            Berikut adalah dokumentasi hasil pengerjaan {title.toLowerCase()} di
            Hexen Garage.
          </motion.p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-brand-gray hover:border-brand-red/40 transition-all duration-300 hover-lift"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-brand-light font-medium">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* CTA + Next Service */}
      <Section className="bg-brand-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 via-brand-gray to-brand-red/10" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Tertarik dengan layanan ini?
              </h3>
              <p className="text-brand-muted">
                Hubungi kami sekarang untuk konsultasi gratis dan estimasi biaya.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={openForm}
                className="inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all bg-gradient-to-b from-brand-red to-brand-red-hover text-white hover:shadow-[0_8px_16px_rgba(233,30,60,0.4)] hover:scale-105 shadow-lg h-14 px-8 text-lg"
              >
                <MessageCircle className="h-5 w-5" /> Hubungi Kami
              </button>
              {nextService && (
                <Link
                  href={nextService.href}
                  className="inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10 hover:shadow-[0_6px_12px_rgba(255,136,0,0.3)] h-14 px-8 text-lg group"
                >
                  {nextService.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
