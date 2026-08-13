"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Star,
  ShieldCheck,
  Wrench,
  Banknote,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useConsultationForm } from "@/context/ConsultationContext";

const BeforeAfterSlider = dynamic(
  () => import("@/components/features/BeforeAfterSlider").then((mod) => mod.BeforeAfterSlider),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video rounded-xl bg-brand-gray animate-pulse" />
    ),
  }
);

const WA_NUMBER = "6281368682723";

const stats = [
  { value: "500+", label: "Kendaraan Diperbaiki", icon: Wrench },
  { value: "10+", label: "Tahun Pengalaman", icon: Award },
  { value: "100%", label: "Garansi Hasil", icon: ShieldCheck },
  { value: "4.9★", label: "Rating Pelanggan", icon: Star },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const { openForm } = useConsultationForm();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION — Full Bleed Photo Background
          ═══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="/Home/Hero-car.webp"
            alt="Hexen Garage Hero"
            fill
            className="object-cover object-center"
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={75}
          />
          {/* Dark Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
        </motion.div>

        {/* Grain Overlay */}
        <div className="grain-overlay absolute inset-0 z-[2] pointer-events-none" />

        {/* Animated Glow Orbs */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-red/15 blur-[150px] animate-float-slow" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/10 blur-[120px] animate-float" />
        </div>

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="container relative z-10 mx-auto px-4 md:px-6 pt-24 pb-16"
        >
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full glass px-4 py-2 text-sm text-brand-orange mb-8 animate-glow-pulse"
            >
              <Sparkles className="mr-2 h-4 w-4 fill-brand-orange" />
              Spesialis Restorasi & Body Repair Mobil
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
            >
              Mobil Rusak Karena{" "}
              <br className="hidden sm:block" />
              Kecelakaan?{" "}
              <span className="gradient-text block mt-2">
                Kami Kembalikan Seperti Baru.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-xl text-lg text-brand-muted sm:text-xl leading-relaxed mb-10"
            >
              Spesialis Body Repair, Chassis Repair, & Restorasi Mobil Bekas
              Tabrakan. Hasil presisi, rapi, dan profesional di Jakarta Timur.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={openForm}
                size="lg"
                className="flex items-center justify-center w-full sm:w-auto text-lg gap-2 shadow-[0_0_30px_rgba(233,30,60,0.3)] hover:shadow-[0_0_50px_rgba(233,30,60,0.5)] transition-shadow duration-500"
              >
                <MessageCircle className="h-5 w-5" /> Konsultasi Gratis
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg border-white/20 hover:bg-white/5 hover:border-brand-orange backdrop-blur-sm transition-all duration-300"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Lihat Layanan
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              {["Teknisi Ahli", "Alat Modern", "Garansi Hasil"].map(
                (item, i) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full glass flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-brand-orange" />
                    </div>
                    <span className="text-sm font-medium text-brand-light/80">
                      {item}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-brand-muted/60 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5 text-brand-orange/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          STATS SECTION — Glassmorphism Cards
          ═══════════════════════════════════════ */}
      <Section className="bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-red/5 rounded-full blur-[120px]" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl glass p-6 text-center hover-lift cursor-default"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20 group-hover:from-brand-red/30 group-hover:to-brand-orange/30 transition-all duration-300">
                <stat.icon className="h-5 w-5 text-brand-orange" />
              </div>
              <p className="text-3xl md:text-4xl font-black gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-brand-muted font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          ABOUT / KENAPA KAMI SECTION
          ═══════════════════════════════════════ */}
      <Section className="bg-brand-black relative overflow-hidden">
        {/* BG Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="grid gap-12 lg:grid-cols-2 items-center relative z-10">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="/services/body-repair.png"
                alt="Bengkel Hexen Garage"
                width={700}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 glass rounded-xl p-4 animate-glow-pulse">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-red">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Jakarta Timur</p>
                    <p className="text-xs text-brand-light/70">Pondok Kelapa</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text + Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-orange font-semibold uppercase tracking-widest">
              <MapPin className="h-3.5 w-3.5" />
              Bengkel Terdekat Jakarta Timur
            </div>
            <h2 className="text-3xl font-black md:text-4xl lg:text-5xl leading-tight">
              Bengkel Mobil{" "}
              <span className="gradient-text">
                Terpercaya
              </span>
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed">
              Kami adalah pilihan utama bagi warga Jakarta Timur yang mencari
              bengkel profesional. Dengan teknologi modern dan tim
              berpengalaman, kami memastikan kendaraan Anda kembali prima.
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
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
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="group rounded-xl border border-brand-gray bg-brand-dark/50 p-5 backdrop-blur transition-all hover:border-brand-orange/60 hover:bg-brand-dark/80"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-red to-brand-orange shadow-[0_0_12px_rgba(255,136,0,0.2)] group-hover:shadow-[0_0_20px_rgba(255,136,0,0.4)] transition-all">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-brand-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/tentang"
                className="inline-flex items-center justify-center rounded-md font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange bg-gradient-to-b from-brand-red to-brand-red-hover text-white hover:shadow-[0_8px_16px_rgba(233,30,60,0.4)] hover:scale-105 shadow-lg h-14 px-8 text-lg"
              >
                Tentang Kami
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
        </div>
      </Section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          SERVICES SECTION
          ═══════════════════════════════════════ */}
      <Section id="services" className="bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-brand-red/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-orange font-semibold uppercase tracking-widest mb-6">
              <Wrench className="h-3.5 w-3.5" />
              Layanan Kami
            </span>
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              Layanan <span className="gradient-text">Unggulan</span> Kami
            </h2>
            <p className="mx-auto max-w-2xl text-brand-muted text-lg">
              Solusi perbaikan kendaraan komprehensif dengan standar kualitas
              tinggi untuk mengembalikan performa dan tampilan mobil Anda.
            </p>
          </motion.div>

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
              image="/services/restorasi-new.png"
              href="/layanan/restorasi"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/layanan"
              className="inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange bg-gradient-to-b from-brand-red to-brand-red-hover text-white hover:shadow-[0_8px_16px_rgba(233,30,60,0.4)] hover:scale-105 shadow-lg h-14 px-8 text-lg group"
            >
              Lihat Semua Layanan
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          PROCESS SECTION — Timeline Visual
          ═══════════════════════════════════════ */}
      <Section className="bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/3 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-orange font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Proses Kerja
            </span>
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              Proses <span className="gradient-text">Pengerjaan</span>
            </h2>
            <p className="mx-auto max-w-2xl text-brand-muted text-lg">
              Alur kerja profesional kami untuk memastikan hasil terbaik untuk
              kendaraan Anda.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red via-brand-orange to-transparent hidden md:block" />

            {[
              {
                num: "01",
                title: "Konsultasikan Masalah",
                desc: "Ceritakan permasalahan mobil Anda melalui WhatsApp atau datang langsung. Kami berikan solusi terbaik.",
              },
              {
                num: "02",
                title: "Buat Penawaran",
                desc: "Kami akan membuat penawaran harga yang kompetitif dan transparan. Tanpa biaya tersembunyi.",
              },
              {
                num: "03",
                title: "Perbaikan Profesional",
                desc: "Mobil Anda dikerjakan dengan profesional menggunakan teknologi dan material terbaik.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-6 mb-12 last:mb-0 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number Circle */}
                <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange shadow-[0_0_30px_rgba(233,30,60,0.3)]">
                  <span className="text-2xl font-black text-white">
                    {step.num}
                  </span>
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-brand-orange/30 animate-[pulse-ring_2s_ease-out_infinite]" />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 glass rounded-2xl p-6 hover-lift ${
                    i % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          TESTIMONIALS — Auto Marquee
          ═══════════════════════════════════════ */}
      <Section className="bg-brand-dark relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-orange font-semibold uppercase tracking-widest mb-6">
            <Users className="h-3.5 w-3.5" />
            Testimoni
          </span>
          <h2 className="mb-4 text-3xl font-black md:text-5xl">
            Kepuasan <span className="gradient-text">Pelanggan</span>
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted text-lg">
            Testimoni dari pelanggan setia Hexen Garage.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {/* Duplicated for seamless loop */}
            {[...Array(2)].map((_, dupeIdx) => (
              <div key={dupeIdx} className="flex gap-6 pr-6 shrink-0">
                {[
                  {
                    text: "Kualitas hasil perbaikan sangat memuaskan. Teknisinya profesional dan customer service yang ramah.",
                    name: "Budi Santoso",
                    loc: "Jakarta Timur",
                  },
                  {
                    text: "Harga kompetitif dengan kualitas yang tidak kalah dengan dealer resmi. Sangat recommended!",
                    name: "Siti Nurhaliza",
                    loc: "Jakarta Timur",
                  },
                  {
                    text: "Mobil rusak saya diperbaiki dengan rapi dan cepat. Hasil akhirnya seperti baru!",
                    name: "Ahmad Wijaya",
                    loc: "Jakarta Timur",
                  },
                  {
                    text: "Pelayanan sangat ramah dan hasil pengerjaan sangat detail. Harga juga transparan dari awal.",
                    name: "Rini Setiawan",
                    loc: "Bekasi",
                  },
                  {
                    text: "Body repair Palisade saya selesai tepat waktu. Hasilnya luar biasa, seperti baru lagi!",
                    name: "Dimas Pratama",
                    loc: "Jakarta Selatan",
                  },
                ].map((t, i) => (
                  <div
                    key={`${dupeIdx}-${i}`}
                    className="w-[350px] shrink-0 glass rounded-2xl p-6 hover-lift"
                  >
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, si) => (
                        <Star
                          key={si}
                          className="h-4 w-4 fill-brand-orange text-brand-orange"
                        />
                      ))}
                    </div>
                    <p className="mb-5 text-brand-light/90 italic leading-relaxed text-sm">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center text-white font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-orange text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-brand-muted">{t.loc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          BEFORE/AFTER GALLERY — Real Photos
          ═══════════════════════════════════════ */}
      <Section className="bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-orange font-semibold uppercase tracking-widest mb-6">
              <Award className="h-3.5 w-3.5" />
              Portfolio
            </span>
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              Hasil <span className="gradient-text">Pekerjaan</span> Kami
            </h2>
            <p className="mx-auto max-w-2xl text-brand-muted text-lg">
              Bukti nyata transformasi kendaraan sebelum dan sesudah perbaikan di
              Hexen Garage.
            </p>
          </motion.div>

          <div className="mx-auto max-w-5xl space-y-12">
            {/* Raize */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-8 bg-gradient-to-r from-brand-red to-brand-orange rounded-full" />
                <h3 className="text-lg font-bold text-white">Toyota Raize</h3>
                <span className="text-xs text-brand-muted glass px-2 py-0.5 rounded-full">
                  Body Repair
                </span>
              </div>
              <BeforeAfterSlider
                beforeImage="/Galery/Before/Raize-before.jpg"
                afterImage="/Galery/After/Raize-after.jpg"
                label="Toyota Raize"
                className="shadow-2xl shadow-brand-orange/10 rounded-2xl"
              />
            </motion.div>

            {/* Palisade */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-8 bg-gradient-to-r from-brand-red to-brand-orange rounded-full" />
                <h3 className="text-lg font-bold text-white">
                  Hyundai Palisade
                </h3>
                <span className="text-xs text-brand-muted glass px-2 py-0.5 rounded-full">
                  Restorasi
                </span>
              </div>
              <BeforeAfterSlider
                beforeImage="/Galery/Before/hyundai-palisade-before.jpg"
                afterImage="/Galery/After/hyundai-palisade-after.jpg"
                label="Hyundai Palisade"
                className="shadow-2xl shadow-brand-orange/10 rounded-2xl"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10 hover:shadow-[0_6px_12px_rgba(255,136,0,0.3)] h-14 px-8 text-lg group"
            >
              Lihat Gallery Lainnya
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
