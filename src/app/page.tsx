"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Star, ShieldCheck, Wrench, Banknote, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";
import { useConsultationForm } from "@/context/ConsultationContext";

const WA_NUMBER = "6281368682723";

const stats = [
  { value: "500+", label: "Kendaraan Diperbaiki" },
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "100%", label: "Garansi Hasil" },
  { value: "4.9★", label: "Rating Pelanggan" },
];

export default function Home() {
  const { openForm } = useConsultationForm();

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-brand-black pt-20 pb-16">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-brand-orange/10 blur-[120px] opacity-50 pointer-events-none" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-red/10 blur-[100px] opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-sm text-brand-orange backdrop-blur-sm shadow-[0_0_15px_rgba(255,100,0,0.15)]"
              >
                <Star className="mr-2 h-4 w-4 fill-brand-orange" />
                Spesialis Restorasi & Body Repair Mobil
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1]"
              >
                Mobil Rusak Karena Kecelakaan? <br />
                <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-red bg-clip-text text-transparent animate-pulse block mt-2">Kami Kembalikan Seperti Baru.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl text-lg text-brand-muted sm:text-xl leading-relaxed"
              >
                Spesialis Body Repair, Chassis Repair, & Restorasi Mobil Bekas Tabrakan. Hasil presisi, rapi, dan profesional untuk keamanan dan kenyamanan berkendara Anda.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  onClick={openForm}
                  size="lg"
                  className="flex items-center justify-center w-full sm:w-auto text-lg gap-2 shadow-[0_0_20px_rgba(255,100,0,0.3)] hover:shadow-[0_0_30px_rgba(255,100,0,0.5)] transition-shadow duration-300"
                >
                  <MessageCircle className="h-5 w-5" /> Konsultasi WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg border-brand-gray hover:bg-white/5 hover:text-white transition-all backdrop-blur-sm"
                  onClick={() => {
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Lihat Layanan
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="pt-8 flex flex-wrap items-center gap-6 text-brand-muted text-sm font-medium"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-brand-dark flex items-center justify-center border border-brand-gray shadow-inner">
                    <span className="text-brand-orange">✓</span>
                  </div>
                  <span>Teknisi Ahli</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-brand-dark flex items-center justify-center border border-brand-gray shadow-inner">
                    <span className="text-brand-orange">✓</span>
                  </div>
                  <span>Alat Modern</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-brand-dark flex items-center justify-center border border-brand-gray shadow-inner">
                    <span className="text-brand-orange">✓</span>
                  </div>
                  <span>Garansi Hasil</span>
                </div>
              </motion.div>
            </div>

            {/* Right Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex h-full min-h-[400px] lg:min-h-[500px] w-full items-center justify-center mt-12 lg:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-brand-orange/20 rounded-full blur-[80px] z-0 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />

              {/* Floating Image Container */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full aspect-[4/3] max-w-[600px]">
                  <Image
                    src="/hero-car-transparent.png"
                    alt="Hexen Garage Restored Car"
                    fill
                    className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
                    priority
                  />
                </div>
              </motion.div>

              {/* Glassmorphism Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 lg:bottom-10 left-4 lg:left-10 z-20 rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur-md shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange/40 to-brand-red/40 text-brand-orange border border-brand-orange/30">
                    <Star className="h-6 w-6 fill-brand-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-white tracking-wide">Top Rated</p>
                    <p className="text-xs text-brand-light">Bengkel Mobil</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section className="bg-brand-dark">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-brand-gray/60 bg-brand-black/40 p-5 text-center backdrop-blur hover:border-brand-orange/50 transition-colors"
            >
              <p className="text-3xl font-black bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent mb-1">{stat.value}</p>
              <p className="text-xs text-brand-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs text-brand-orange">
              <MapPin className="h-3.5 w-3.5" />
              Pondok Kelapa, Jakarta Timur
            </div>
            <h2 className="text-3xl font-black md:text-4xl leading-tight">
              Bengkel Mobil{" "}
              <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
                Terdekat di Jakarta Timur
              </span>
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed">
              Kami adalah pilihan utama bagi warga Jakarta Timur yang mencari bengkel profesional. Dengan teknologi modern dan tim berpengalaman, kami memastikan kendaraan Anda kembali prima.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/tentang">
                <Button variant="primary" size="lg">Tentang Kami</Button>
              </Link>
              <Button
                onClick={openForm}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                <Phone className="h-4 w-4" /> 0813-6868-2723
              </Button>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Sparepart Original & Berkualitas",
                desc: "Menggunakan sparepart asli bergaransi, bukan KW.",
              },
              {
                icon: Wrench,
                title: "Teknisi Berpengalaman",
                desc: "Tim profesional bersertifikat siap menangani semua jenis perbaikan.",
              },
              {
                icon: Banknote,
                title: "Harga Transparan & Kompetitif",
                desc: "Estimasi biaya jelas sejak awal. Tidak ada biaya tersembunyi.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="group rounded-xl border border-brand-gray bg-brand-black/50 p-5 backdrop-blur transition-all hover:border-brand-orange/60 hover:bg-brand-black/70"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-red to-brand-orange shadow-[0_0_12px_rgba(255,136,0,0.2)] group-hover:shadow-[0_0_18px_rgba(255,136,0,0.35)] transition-all">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">{item.title}</p>
                    <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
