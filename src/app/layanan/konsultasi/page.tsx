"use client";

import { ServiceDetailLayout } from "@/components/features/ServiceDetailLayout";

export default function KonsultasiPage() {
  return (
    <ServiceDetailLayout
      title="Konsultasi Gratis"
      subtitle="Konsultasi gratis untuk menentukan jenis perbaikan yang tepat dan estimasi biaya yang akurat untuk kendaraan Anda."
      heroImage="/services/konsultasi.png"
      description={[
        "Di Hexen Garage, kami memahami bahwa setiap kerusakan kendaraan memiliki tingkat dan jenis yang berbeda. Oleh karena itu, kami menyediakan layanan konsultasi gratis untuk membantu Anda memahami kondisi kendaraan dan solusi perbaikan yang paling tepat.",
        "Tim konsultan kami yang berpengalaman akan melakukan inspeksi menyeluruh terhadap kendaraan Anda, mengidentifikasi setiap kerusakan, dan memberikan rekomendasi perbaikan beserta estimasi biaya yang transparan tanpa biaya tersembunyi.",
        "Anda bisa berkonsultasi langsung di bengkel kami atau melalui WhatsApp dengan mengirimkan foto kerusakan kendaraan. Kami akan merespons dengan cepat dan memberikan solusi terbaik untuk Anda.",
      ]}
      features={[
        "Inspeksi kendaraan gratis dan menyeluruh",
        "Estimasi biaya transparan tanpa biaya tersembunyi",
        "Konsultasi bisa via WhatsApp dengan foto",
        "Rekomendasi perbaikan yang jujur dan profesional",
        "Respons cepat dalam waktu 1x24 jam",
        "Tidak ada kewajiban untuk melanjutkan perbaikan",
      ]}
      galleryImages={[
        { src: "/services/konsultasi.png", caption: "Konsultasi langsung dengan teknisi ahli" },
        { src: "/Galery/Before/Toyota-Veloz-before.jpg", caption: "Inspeksi kerusakan kendaraan pelanggan" },
        { src: "/Galery/After/Toyota-Veloz-after.jpg", caption: "Hasil perbaikan setelah konsultasi tepat" },
      ]}
    />
  );
}
