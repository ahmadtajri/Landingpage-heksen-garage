import React from "react";
import { Section } from "@/components/ui/Section";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Heksen Garage",
  description: "Hasil sebelum dan sesudah perbaikan mobil bekas tabrak di Heksen Garage.",
};

export default function GalleryPage() {
  return (
    <>
      <Section className="bg-brand-dark pt-32 pb-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Gallery Hasil</h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-muted">
            Bukti nyata transformasi dan komitmen kami terhadap kualitas.
          </p>
        </div>
      </Section>
      <Section className="bg-brand-black">
        <div className="mx-auto max-w-4xl space-y-12">
          <BeforeAfterSlider
            beforeImage="/car_damaged_before.png"
            afterImage="/car_restored_after.png"
          />
          {/* More sliders can be added here */}
        </div>
      </Section>
    </>
  );
}
