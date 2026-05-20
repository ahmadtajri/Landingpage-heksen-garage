import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Hexen Garage",
  description: "Profil bengkel Hexen Garage, spesialis perbaikan body dan restorasi mobil berpengalaman.",
};

export default function TentangPage() {
  return (
    <>
      <Section className="bg-brand-dark pt-32 pb-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Tentang Hexen Garage</h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-muted">
            Bengkel spesialis perbaikan kendaraan akibat tabrakan dan kerusakan berat.
          </p>
        </div>
      </Section>
      <Section className="bg-brand-black">
        <div className="mx-auto max-w-3xl text-brand-light prose prose-invert">
          <p className="mb-4">
            Hexen Garage adalah bengkel spesialis yang berfokus pada body repair, chassis repair, dan restorasi kendaraan. Kami mengerti bahwa kendaraan yang mengalami kecelakaan berat membutuhkan penanganan khusus agar kembali aman dan nyaman dikendarai.
          </p>
          <p>
            Dengan teknisi berpengalaman dan peralatan modern, kami menjamin hasil pengerjaan yang presisi, rapi, dan profesional. Visi kami adalah menjadi bengkel restorasi terpercaya yang selalu mengutamakan kualitas dan kepuasan pelanggan.
          </p>
        </div>
      </Section>
    </>
  );
}
