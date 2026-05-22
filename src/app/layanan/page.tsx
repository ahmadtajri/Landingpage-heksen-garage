"use client";

import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";

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
    image: "/services/restorasi.png",
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
      <Section className="bg-brand-dark pt-32 pb-16">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-extrabold md:text-5xl"
          >
            Semua Layanan Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-brand-muted"
          >
            Solusi perbaikan kendaraan komprehensif dengan standar kualitas tinggi.
            Dari body repair hingga perbaikan kaki-kaki, kami siap melayani Anda.
          </motion.p>
        </div>
      </Section>
      <Section className="bg-brand-black">
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
