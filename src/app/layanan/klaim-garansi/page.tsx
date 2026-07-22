"use client";

import { ServiceDetailLayout } from "@/components/features/ServiceDetailLayout";

export default function KlaimGaransiPage() {
  return (
    <ServiceDetailLayout
      title="Klaim Garansi"
      subtitle="Layanan klaim garansi perbaikan untuk memastikan kualitas pengerjaan kami selalu terjaga dan memuaskan pelanggan."
      heroImage="/services/klaim-garansi.png"
      description={[
        "Hexen Garage memberikan garansi untuk setiap pekerjaan perbaikan yang kami lakukan. Kami percaya pada kualitas pengerjaan kami, dan garansi ini merupakan bukti komitmen kami terhadap kepuasan pelanggan.",
        "Jika dalam masa garansi Anda menemukan masalah pada hasil perbaikan, Anda bisa langsung mengajukan klaim garansi. Tim kami akan segera melakukan inspeksi dan perbaikan ulang tanpa biaya tambahan sesuai ketentuan garansi yang berlaku.",
        "Proses klaim garansi di Hexen Garage sangat mudah dan cepat. Cukup hubungi kami melalui WhatsApp atau datang langsung ke bengkel, tunjukkan bukti pengerjaan sebelumnya, dan kami akan segera menangani klaim Anda.",
      ]}
      features={[
        "Garansi pengerjaan body repair dan cat",
        "Proses klaim yang mudah dan cepat",
        "Perbaikan ulang tanpa biaya tambahan",
        "Inspeksi menyeluruh saat klaim",
        "Dokumentasi garansi yang jelas dan terstruktur",
        "Customer service yang responsif dan ramah",
      ]}
      galleryImages={[
        { src: "/services/klaim-garansi.png", caption: "Pengecekan kualitas hasil pengerjaan" },
        { src: "/Galery/After/Raize-after.jpg", caption: "Hasil pengerjaan bergaransi - kualitas terjamin" },
        { src: "/Galery/After/hyundai-palisade-after.jpg", caption: "Standar kualitas tinggi pada setiap pengerjaan" },
      ]}
    />
  );
}
