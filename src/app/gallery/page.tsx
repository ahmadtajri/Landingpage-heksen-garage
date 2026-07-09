"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";
import { Award, Camera, ArrowRight, MessageCircle } from "lucide-react";
import { useConsultationForm } from "@/context/ConsultationContext";

const galleryPairs = [
  {
    name: "Toyota Raize",
    category: "Body Repair",
    before: "/Galery/Before/Raize-before.jpg",
    after: "/Galery/After/Raize-after.jpg",
    desc: "Perbaikan body depan akibat tabrakan. Bumper, fender, dan lampu diganti serta diperbaiki hingga kembali sempurna.",
  },
  {
    name: "Hyundai Palisade",
    category: "Restorasi Total",
    before: "/Galery/Before/hyundai-palisade-before.jpg",
    after: "/Galery/After/hyundai-palisade-after.jpg",
    desc: "Restorasi total bagian depan setelah kecelakaan berat. Termasuk perbaikan chassis, kap mesin, bumper, dan komponen engine bay.",
  },
  {
    name: "Toyota Veloz",
    category: "Body Repair",
    before: "/Galery/Before/Toyota-Veloz-before.jpg",
    after: "/Galery/After/Toyota-Veloz-after.jpg",
    desc: "Perbaikan kerusakan sisi kanan mobil akibat tabrakan samping. Body panel, pintu, dan cat diperbaiki hingga kembali mulus.",
  },
];

const servicePhotos = [
  { src: "/services/body-repair.png", title: "Body Repair Workshop" },
  { src: "/services/chassis-repair.png", title: "Chassis Repair" },
  { src: "/services/restorasi-new.png", title: "Restorasi Kendaraan" },
  { src: "/services/kaki-kaki.png", title: "Perbaikan Kaki-Kaki" },
  { src: "/services/konsultasi.png", title: "Konsultasi Pelanggan" },
  { src: "/services/klaim-garansi.png", title: "Klaim Garansi" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function GalleryPage() {
  const { openForm } = useConsultationForm();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/body-repair.png"
            alt="Hexen Garage Workshop"
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
              <Camera className="h-3.5 w-3.5" />
              Portfolio
            </span>
            <h1 className="text-4xl font-black md:text-6xl mb-4">
              Gallery <span className="gradient-text">Hasil Kerja</span>
            </h1>
            <p className="max-w-xl text-lg text-brand-muted">
              Bukti nyata transformasi kendaraan sebelum dan sesudah perbaikan di Hexen Garage. Kualitas yang bisa Anda lihat langsung.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Before/After Sliders */}
      <Section className="bg-brand-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-black md:text-4xl mb-4">
            Before & <span className="gradient-text">After</span>
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Geser slider untuk melihat perbandingan sebelum dan sesudah perbaikan.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl space-y-16">
          {galleryPairs.map((pair, i) => (
            <motion.div
              key={pair.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-10 bg-gradient-to-r from-brand-red to-brand-orange rounded-full" />
                <h3 className="text-xl font-bold text-white">{pair.name}</h3>
                <span className="text-xs text-brand-orange glass px-3 py-1 rounded-full font-medium">
                  {pair.category}
                </span>
              </div>

              {/* Slider */}
              <BeforeAfterSlider
                beforeImage={pair.before}
                afterImage={pair.after}
                label={pair.name}
                className="shadow-2xl shadow-brand-orange/10 rounded-2xl"
              />

              {/* Description */}
              <p className="mt-4 text-sm text-brand-muted max-w-3xl leading-relaxed">
                {pair.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* Workshop Gallery Grid */}
      <Section className="bg-brand-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-black md:text-4xl mb-4">
            Fasilitas & <span className="gradient-text">Bengkel</span>
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Dokumentasi proses pengerjaan dan fasilitas modern Hexen Garage.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicePhotos.map((photo, i) => (
            <motion.div
              key={photo.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-brand-gray hover:border-brand-orange/40 transition-all duration-500 hover-lift"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-brand-light font-semibold">
                  {photo.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* CTA */}
      <Section className="bg-brand-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/services/konsultasi.png"
              alt="Konsultasi"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
          </div>
          <div className="relative z-10 p-8 md:p-14 text-center">
            <h3 className="text-2xl md:text-4xl font-black mb-4">
              Ingin Hasil <span className="gradient-text">Serupa</span>?
            </h3>
            <p className="text-brand-muted max-w-xl mx-auto mb-8 text-lg">
              Konsultasikan kondisi kendaraan Anda secara gratis. Tim kami siap memberikan solusi terbaik.
            </p>
            <button
              onClick={openForm}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-red to-brand-orange px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(233,30,60,0.3)] hover:shadow-[0_0_50px_rgba(233,30,60,0.5)] hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Konsultasi Gratis
            </button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
