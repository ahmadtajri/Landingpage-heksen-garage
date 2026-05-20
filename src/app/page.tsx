"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";

export default function Home() {
  const handleConsultationClick = () => {
    document.dispatchEvent(new CustomEvent("openConsultationForm"));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Background Video or Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/80 z-10" />
          <Image
            src="/car_restored_after.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Mobil Rusak Karena Kecelakaan? <br />
            <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-red bg-clip-text text-transparent animate-pulse">Kami Kembalikan Seperti Baru.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-brand-muted sm:text-xl"
          >
            Spesialis Body Repair, Chassis Repair, & Restorasi Mobil Bekas Tabrakan. Hasil presisi, rapi, dan profesional.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg gap-2"
              onClick={handleConsultationClick}
            >
              <MessageCircle className="h-5 w-5" /> Konsultasi WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Lihat Layanan
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="services" className="bg-brand-black">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Layanan Unggulan Kami</h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Solusi perbaikan kendaraan komprehensif dengan standar kualitas tinggi untuk mengembalikan performa dan tampilan mobil Anda.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Body Repair"
            description="Perbaikan body kendaraan akibat tabrakan, penyok, baret, dan kerusakan berat dengan teknik pengerjaan presisi tinggi."
            icon={ShieldCheck}
            href="/layanan"
          />
          <ServiceCard
            title="Chassis Repair"
            description="Perbaikan rangka atau chassis kendaraan yang bengkok agar kembali simetris, presisi, dan aman dikendarai."
            icon={Wrench}
            href="/layanan"
          />
          <ServiceCard
            title="Restorasi Kendaraan"
            description="Pemulihan kendaraan tua atau rusak parah menjadi kondisi optimal layaknya baru keluar dari dealer."
            icon={Sparkles}
            href="/layanan"
          />
        </div>
      </Section>

      {/* Before After Gallery */}
      <Section className="bg-brand-dark">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Hasil Pekerjaan Kami</h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Bukti nyata transformasi kendaraan sebelum dan sesudah perbaikan di Hexen Garage.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <BeforeAfterSlider
            beforeImage="/car_damaged_before.png"
            afterImage="/car_restored_after.png"
            className="shadow-2xl shadow-brand-orange/20"
          />
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" onClick={() => window.location.href = "/gallery"}>
            Lihat Gallery Lainnya
          </Button>
        </div>
      </Section>
    </>
  );
}
