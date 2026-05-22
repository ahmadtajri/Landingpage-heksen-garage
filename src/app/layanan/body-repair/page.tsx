"use client";

import { ServiceDetailLayout } from "@/components/features/ServiceDetailLayout";

export default function BodyRepairPage() {
  return (
    <ServiceDetailLayout
      title="Body Repair"
      subtitle="Perbaikan body kendaraan akibat tabrakan, penyok, baret, dan kerusakan berat dengan teknik pengerjaan presisi tinggi."
      heroImage="/services/body-repair.png"
      description={[
        "Layanan Body Repair di Hexen Garage mencakup seluruh proses perbaikan body kendaraan mulai dari kerusakan ringan seperti baret dan penyok, hingga kerusakan berat akibat tabrakan atau kecelakaan.",
        "Kami menggunakan teknik dan peralatan modern untuk memastikan body kendaraan Anda kembali ke bentuk semula dengan presisi tinggi. Setiap proses dikerjakan oleh teknisi berpengalaman yang telah menangani ratusan kasus body repair.",
        "Proses perbaikan meliputi pendempulan, pengecatan, hingga finishing akhir menggunakan cat berkualitas tinggi dengan teknologi oven painting untuk hasil yang tahan lama dan sempurna.",
      ]}
      features={[
        "Teknisi berpengalaman lebih dari 10 tahun",
        "Peralatan body repair berstandar internasional",
        "Cat berkualitas tinggi dengan garansi warna",
        "Teknologi oven painting untuk hasil maksimal",
        "Estimasi biaya transparan tanpa biaya tersembunyi",
        "Garansi pengerjaan untuk kepuasan pelanggan",
      ]}
      galleryImages={[
        { src: "/car_damaged_before.png", caption: "Kondisi sebelum body repair - kerusakan akibat tabrakan" },
        { src: "/car_restored_after.png", caption: "Hasil setelah body repair - kembali seperti baru" },
        { src: "/Mustang_damage_before.png", caption: "Body repair Mustang - sebelum pengerjaan" },
        { src: "/Mustang_damage_after.png", caption: "Body repair Mustang - hasil akhir sempurna" },
      ]}
      nextService={{ title: "Chassis Repair", href: "/layanan/chassis-repair" }}
    />
  );
}
