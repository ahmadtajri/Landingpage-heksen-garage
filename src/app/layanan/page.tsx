"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Wrench } from "lucide-react";

const allServices = [
  {
    title: "Body Repair",
    description:
      "Perbaikan body kendaraan akibat tabrakan, penyok, baret, dan kerusakan berat dengan teknik pengerjaan presisi tinggi.",
    image: "/services/body-repair.png",
    href: "/layanan/body-repair",
  },
  {
    title: "Chassis Repair",
    description:
      "Perbaikan rangka atau chassis kendaraan yang bengkok agar kembali simetris, presisi, dan aman dikendarai.",
    image: "/services/chassis-repair.png",
    href: "/layanan/chassis-repair",
  },
  {
    title: "Restorasi Kendaraan",
    description:
      "Pemulihan kendaraan tua atau rusak parah menjadi kondisi optimal layaknya baru keluar dari dealer.",
    image: "/services/restorasi-new.png",
    href: "/layanan/restorasi",
  },
  {
    title: "Konsultasi Gratis",
    description:
      "Konsultasi gratis untuk menentukan jenis perbaikan yang tepat dan estimasi biaya yang akurat untuk kendaraan Anda.",
    image: "/services/konsultasi.png",
    href: "/layanan/konsultasi",
  },
  {
    title: "Klaim Garansi",
    description:
      "Layanan klaim garansi perbaikan untuk memastikan kualitas pengerjaan kami selalu terjaga dan memuaskan pelanggan.",
    image: "/services/klaim-garansi.png",
    href: "/layanan/klaim-garansi",
  },
  {
    title: "Perbaikan Kaki-Kaki",
    description:
      "Perbaikan sistem suspensi, shock absorber, ball joint, tie rod, dan komponen kaki-kaki lainnya agar kendaraan nyaman dikendarai.",
    image: "/services/kaki-kaki.png",
    href: "/layanan/kaki-kaki",
  },
];

export default function LayananPage() {

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/chassis-repair.png"
            alt="Layanan Hexen Garage"
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
              <Wrench className="h-3.5 w-3.5" />
              Layanan
            </span>
            <h1 className="text-4xl font-black md:text-6xl mb-4">
              Semua <span className="gradient-text">Layanan</span> Kami
            </h1>
            <p className="max-w-xl text-lg text-brand-muted">
              Solusi perbaikan kendaraan komprehensif dengan standar kualitas
              tinggi. Dari body repair hingga perbaikan kaki-kaki, kami siap
              melayani Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Grid */}
      <Section className="bg-brand-dark">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

