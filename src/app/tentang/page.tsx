"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import {
  ShieldCheck,
  Wrench,
  Award,
  Users,
  Target,
  Heart,
  Clock,
  Star,
  MessageCircle,
} from "lucide-react";
import { useConsultationForm } from "@/context/ConsultationContext";

const values = [
  {
    icon: Target,
    title: "Presisi Tinggi",
    desc: "Setiap pengerjaan dilakukan dengan standar presisi tinggi menggunakan alat ukur dan teknologi modern.",
  },
  {
    icon: Heart,
    title: "Dedikasi Penuh",
    desc: "Kami mengerjakan setiap mobil seolah-olah itu milik kami sendiri. Kepuasan pelanggan adalah prioritas.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Pengerjaan",
    desc: "Setiap pekerjaan kami bergaransi. Kami bertanggung jawab penuh atas kualitas hasil perbaikan.",
  },
  {
    icon: Award,
    title: "Pengalaman 10+ Tahun",
    desc: "Lebih dari satu dekade menangani ratusan kasus perbaikan dari yang ringan hingga berat.",
  },
];

const milestones = [
  { year: "2014", title: "Awal Berdiri", desc: "Hexen Garage didirikan di Jakarta Timur sebagai bengkel kecil dengan visi besar." },
  { year: "2017", title: "Ekspansi Layanan", desc: "Mulai menerima pekerjaan chassis repair dan restorasi kendaraan berat." },
  { year: "2020", title: "Upgrade Fasilitas", desc: "Investasi peralatan modern dan workshop yang lebih luas untuk kapasitas lebih besar." },
  { year: "2024", title: "500+ Kendaraan", desc: "Telah menangani lebih dari 500 kendaraan dengan rating kepuasan 4.9 bintang." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function TentangPage() {
  const { openForm } = useConsultationForm();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/restorasi.png"
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
              <Users className="h-3.5 w-3.5" />
              Tentang Kami
            </span>
            <h1 className="text-4xl font-black md:text-6xl mb-4">
              Tentang <span className="gradient-text">Hexen Garage</span>
            </h1>
            <p className="max-w-xl text-lg text-brand-muted">
              Bengkel spesialis perbaikan kendaraan akibat tabrakan dan kerusakan
              berat. Profesional, terpercaya, dan bergaransi.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* About Content — 2 Column */}
      <Section className="bg-brand-dark relative overflow-hidden">
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
                src="/services/chassis-repair.png"
                alt="Hexen Garage Team"
                width={700}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
            </div>
            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 md:right-6 glass rounded-2xl p-5 animate-glow-pulse"
            >
              <div className="text-center">
                <p className="text-3xl font-black gradient-text">10+</p>
                <p className="text-xs text-brand-muted font-semibold uppercase tracking-wider">Tahun Pengalaman</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-black md:text-4xl leading-tight">
              Bengkel <span className="gradient-text">Terpercaya</span> untuk Perbaikan Mobil
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed">
              Hexen Garage adalah bengkel spesialis yang berfokus pada body
              repair, chassis repair, dan restorasi kendaraan. Kami mengerti
              bahwa kendaraan yang mengalami kecelakaan berat membutuhkan
              penanganan khusus agar kembali aman dan nyaman dikendarai.
            </p>
            <p className="text-lg text-brand-muted leading-relaxed">
              Dengan teknisi berpengalaman dan peralatan modern, kami menjamin
              hasil pengerjaan yang presisi, rapi, dan profesional. Visi kami
              adalah menjadi bengkel restorasi terpercaya yang selalu
              mengutamakan kualitas dan kepuasan pelanggan.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { val: "500+", label: "Mobil" },
                { val: "4.9★", label: "Rating" },
                { val: "100%", label: "Garansi" },
              ].map((s) => (
                <div key={s.label} className="text-center glass rounded-xl p-4">
                  <p className="text-xl font-black gradient-text">{s.val}</p>
                  <p className="text-xs text-brand-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* Values Section */}
      <Section className="bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/3 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl font-black md:text-4xl mb-4">
              Nilai-Nilai <span className="gradient-text">Kami</span>
            </h2>
            <p className="mx-auto max-w-2xl text-brand-muted">
              Prinsip utama yang menjadi landasan setiap pekerjaan di Hexen Garage.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group glass rounded-2xl p-6 hover-lift text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20 group-hover:from-brand-red/30 group-hover:to-brand-orange/30 transition-all">
                  <val.icon className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="font-bold text-white mb-2">{val.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* Timeline */}
      <Section className="bg-brand-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-black md:text-4xl mb-4">
            Perjalanan <span className="gradient-text">Kami</span>
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Dari bengkel kecil hingga menjadi bengkel terpercaya di Jakarta Timur.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red via-brand-orange to-transparent" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Year Circle */}
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange shadow-[0_0_20px_rgba(233,30,60,0.3)]">
                <span className="text-xs font-black text-white">{m.year}</span>
              </div>

              {/* Content */}
              <div className={`flex-1 glass rounded-xl p-5 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <h3 className="font-bold text-white mb-1">{m.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* CTA */}
      <Section className="bg-brand-black">
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
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
          </div>
          <div className="relative z-10 p-8 md:p-14 text-center">
            <h3 className="text-2xl md:text-4xl font-black mb-4">
              Siap Perbaiki <span className="gradient-text">Mobil Anda</span>?
            </h3>
            <p className="text-brand-muted max-w-xl mx-auto mb-8 text-lg">
              Hubungi kami sekarang untuk konsultasi gratis dan estimasi biaya transparan.
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
