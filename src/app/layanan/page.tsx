import React from "react";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan | Hexen Garage",
  description: "Layanan body repair, chassis repair, dan restorasi mobil di Hexen Garage.",
};

export default function LayananPage() {
  return (
    <>
      <Section className="bg-brand-dark pt-32 pb-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Layanan Kami</h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-muted">
            Solusi perbaikan kendaraan komprehensif dengan standar kualitas tinggi.
          </p>
        </div>
      </Section>
      <Section className="bg-brand-black">
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Body Repair"
            description="Perbaikan body kendaraan akibat tabrakan, penyok, baret, dan kerusakan berat dengan teknik pengerjaan presisi tinggi."
            icon={ShieldCheck}
            href="/layanan#body-repair"
          />
          <ServiceCard
            title="Chassis Repair"
            description="Perbaikan rangka atau chassis kendaraan yang bengkok agar kembali simetris, presisi, dan aman dikendarai."
            icon={Wrench}
            href="/layanan#chassis-repair"
          />
          <ServiceCard
            title="Restorasi Kendaraan"
            description="Pemulihan kendaraan tua atau rusak parah menjadi kondisi optimal layaknya baru keluar dari dealer."
            icon={Sparkles}
            href="/layanan#restorasi"
          />
        </div>
      </Section>
    </>
  );
}
