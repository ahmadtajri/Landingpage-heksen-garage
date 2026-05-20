import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel | Hexen Garage",
  description: "Artikel dan tips seputar perawatan mobil, body repair, dan otomotif.",
};

export default function ArtikelPage() {
  return (
    <>
      <Section className="bg-brand-dark pt-32 pb-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Artikel & Tips</h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-muted">
            Informasi seputar body repair dan perawatan kendaraan.
          </p>
        </div>
      </Section>
      <Section className="bg-brand-black">
        <div className="text-center text-brand-muted">
          <p>Belum ada artikel saat ini. Pantau terus untuk tips terbaru!</p>
        </div>
      </Section>
    </>
  );
}
