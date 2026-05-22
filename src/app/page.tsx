"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";

export default function Home() {

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
            <Link
              href="/kontak"
              className="flex items-center justify-center"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg gap-2"
              >
                <MessageCircle className="h-5 w-5" /> Konsultasi WhatsApp
              </Button>
            </Link>
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

      {/* About Section */}
      <Section className="bg-brand-dark">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
                Bengkel Mobil Terdekat di Jakarta Timur
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                Kami adalah pilihan utama bagi warga Jakarta Timur yang mencari bengkel profesional dengan standar kualitas tinggi.
              </p>
            </div>
            <div className="pt-2">
              <Link href="/tentang">
                <Button variant="primary" size="lg">Tentang Kami</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <motion.div
              whileHover={{ x: 8 }}
              className="rounded-lg border border-brand-gray bg-brand-black/50 p-5 backdrop-blur transition-all hover:border-brand-orange"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-brand-red to-brand-red-hover">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Sparepart Original & Berkualitas</p>
                  <p className="text-sm text-brand-muted">Menggunakan sparepart asli dengan kualitas terjamin</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="rounded-lg border border-brand-gray bg-brand-black/50 p-5 backdrop-blur transition-all hover:border-brand-orange"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-brand-red to-brand-red-hover">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Teknisi Berpengalaman</p>
                  <p className="text-sm text-brand-muted">Tim profesional siap menangani semua jenis perbaikan</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="rounded-lg border border-brand-gray bg-brand-black/50 p-5 backdrop-blur transition-all hover:border-brand-orange"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-brand-red to-brand-red-hover">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Harga Kompetitif</p>
                  <p className="text-sm text-brand-muted">Kualitas dealer resmi dengan harga yang lebih bersahabat</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Services Section - Only 3 main services shown on home */}
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
            image="/services/body-repair.png"
            href="/layanan/body-repair"
          />
          <ServiceCard
            title="Chassis Repair"
            description="Perbaikan rangka atau chassis kendaraan yang bengkok agar kembali simetris, presisi, dan aman dikendarai."
            image="/services/chassis-repair.png"
            href="/layanan/chassis-repair"
          />
          <ServiceCard
            title="Restorasi Kendaraan"
            description="Pemulihan kendaraan tua atau rusak parah menjadi kondisi optimal layaknya baru keluar dari dealer."
            image="/services/restorasi.png"
            href="/layanan/restorasi"
          />
        </div>
        <div className="mt-12 text-center">
          <Link href="/layanan">
            <Button variant="primary" size="lg">Lihat Semua Layanan</Button>
          </Link>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-brand-dark">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Proses Pengerjaan</h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Alur kerja profesional kami untuk memastikan hasil terbaik untuk kendaraan Anda.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-brand-red to-brand-red-hover flex items-center justify-center">
                <span className="text-3xl font-bold text-white">01</span>
              </div>
            </div>
            <h3 className="mb-4 text-xl font-bold">Konsultasikan Masalah</h3>
            <p className="text-brand-muted">
              Ceritakan permasalahan mobil Anda dan kami akan memberikan solusi terbaik.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-brand-red to-brand-red-hover flex items-center justify-center">
                <span className="text-3xl font-bold text-white">02</span>
              </div>
            </div>
            <h3 className="mb-4 text-xl font-bold">Buat Penawaran</h3>
            <p className="text-brand-muted">
              Kami akan membuat penawaran harga yang kompetitif dan transparan untuk perbaikan Anda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-brand-red to-brand-red-hover flex items-center justify-center">
                <span className="text-3xl font-bold text-white">03</span>
              </div>
            </div>
            <h3 className="mb-4 text-xl font-bold">Perbaikan Profesional</h3>
            <p className="text-brand-muted">
              Mobil Anda kami kerjakan dengan profesional menggunakan teknologi dan material terbaik.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-brand-black">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Kepuasan Pelanggan</h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Testimoni dari pelanggan setia Hexen Garage.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg bg-brand-dark p-6 border border-brand-gray hover:border-brand-orange transition-colors"
          >
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <p className="mb-4 text-brand-light italic">
              {`Kualitas hasil perbaikan sangat memuaskan. Teknisinya profesional dan customer service yang ramah.`}
            </p>
            <p className="font-semibold text-brand-orange">Budi Santoso</p>
            <p className="text-sm text-brand-muted">Jakarta Timur</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg bg-brand-dark p-6 border border-brand-gray hover:border-brand-orange transition-colors"
          >
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <p className="mb-4 text-brand-light italic">
              {`Harga kompetitif dengan kualitas yang tidak kalah dengan dealer resmi. Sangat recommended!`}
            </p>
            <p className="font-semibold text-brand-orange">Siti Nurhaliza</p>
            <p className="text-sm text-brand-muted">Jakarta Timur</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg bg-brand-dark p-6 border border-brand-gray hover:border-brand-orange transition-colors"
          >
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <p className="mb-4 text-brand-light italic">
              {`Mobil rusak saya diperbaiki dengan rapi dan cepat. Hasil akhirnya seperti baru!`}
            </p>
            <p className="font-semibold text-brand-orange">Ahmad Wijaya</p>
            <p className="text-sm text-brand-muted">Jakarta Timur</p>
          </motion.div>
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
