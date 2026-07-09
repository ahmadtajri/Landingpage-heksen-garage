"use client";

import { ServiceDetailLayout } from "@/components/features/ServiceDetailLayout";

export default function ChassisRepairPage() {
  return (
    <ServiceDetailLayout
      title="Chassis Repair"
      subtitle="Perbaikan rangka atau chassis kendaraan yang bengkok agar kembali simetris, presisi, dan aman dikendarai."
      heroImage="/services/chassis-repair.png"
      description={[
        "Layanan Chassis Repair di Hexen Garage merupakan layanan perbaikan rangka kendaraan yang mengalami kerusakan akibat benturan keras, tabrakan, atau kecelakaan. Chassis yang bengkok dapat menyebabkan kendaraan tidak stabil dan berbahaya saat dikendarai.",
        "Kami menggunakan mesin frame straightening berteknologi tinggi yang mampu mengembalikan chassis ke posisi dan dimensi semula sesuai spesifikasi pabrikan. Setiap titik pengukuran dicek menggunakan alat ukur presisi untuk memastikan akurasi sempurna.",
        "Proses chassis repair kami dilakukan secara menyeluruh, meliputi pengecekan geometri, straightening, pengelasan jika diperlukan, dan pengujian akhir untuk memastikan kendaraan aman dan nyaman dikendarai kembali.",
      ]}
      features={[
        "Frame straightening machine berteknologi tinggi",
        "Pengukuran geometri chassis dengan alat presisi",
        "Pengelasan profesional dengan standar keamanan tinggi",
        "Pengecekan menyeluruh sesuai spesifikasi pabrikan",
        "Teknisi chassis repair bersertifikat",
        "Garansi keamanan dan keselarasan kendaraan",
      ]}
      galleryImages={[
        { src: "/car_damaged_before.png", caption: "Chassis rusak akibat tabrakan berat" },
        { src: "/car_restored_after.png", caption: "Chassis telah diperbaiki - kembali presisi" },
        { src: "/Mustang_damage_before.png", caption: "Proses pengecekan chassis sebelum perbaikan" },
        { src: "/Mustang_damage_after.png", caption: "Hasil chassis repair - geometri sempurna" },
      ]}
    />
  );
}
