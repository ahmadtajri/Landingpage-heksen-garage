"use client";

import { ServiceDetailLayout } from "@/components/features/ServiceDetailLayout";

export default function RestorasiPage() {
  return (
    <ServiceDetailLayout
      title="Restorasi Kendaraan"
      subtitle="Pemulihan kendaraan tua atau rusak parah menjadi kondisi optimal layaknya baru keluar dari dealer."
      heroImage="/services/restorasi.png"
      description={[
        "Layanan Restorasi Kendaraan di Hexen Garage adalah solusi bagi Anda yang ingin mengembalikan kejayaan mobil kesayangan. Baik itu mobil klasik yang ingin dihidupkan kembali, atau mobil yang rusak parah akibat kecelakaan, kami siap menanganinya.",
        "Proses restorasi kami mencakup perbaikan total dari body, chassis, mesin, interior, hingga eksterior. Setiap detail diperhatikan untuk menghasilkan kendaraan yang tidak hanya cantik dipandang, tetapi juga aman dan nyaman dikendarai.",
        "Kami bekerja sama dengan supplier material berkualitas tinggi dan menggunakan teknik restorasi modern yang dikombinasikan dengan keahlian tradisional untuk menghasilkan karya restorasi terbaik.",
      ]}
      features={[
        "Restorasi total dari body hingga mesin",
        "Pengerjaan detail interior dan eksterior",
        "Material dan cat berkualitas premium",
        "Pengerjaan oleh master teknisi berpengalaman",
        "Dokumentasi proses restorasi lengkap",
        "Konsultasi desain dan warna custom",
      ]}
      galleryImages={[
        { src: "/car_damaged_before.png", caption: "Kondisi kendaraan sebelum restorasi" },
        { src: "/car_restored_after.png", caption: "Hasil restorasi - tampil seperti baru" },
        { src: "/Mustang_damage_before.png", caption: "Proses restorasi Mustang - kondisi awal" },
        { src: "/Mustang_damage_after.png", caption: "Restorasi Mustang selesai - hasil memukau" },
      ]}
      nextService={{ title: "Konsultasi Gratis", href: "/layanan/konsultasi" }}
    />
  );
}
