"use client";

import { ServiceDetailLayout } from "@/components/features/ServiceDetailLayout";

export default function RestorasiPage() {
  return (
    <ServiceDetailLayout
      title="Restorasi Kendaraan"
      subtitle="Pemulihan kendaraan tua atau rusak parah menjadi kondisi optimal layaknya baru keluar dari dealer."
      heroImage="/services/restorasi-new.png"
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
        { src: "/services/restorasi-before.png", caption: "Kondisi kendaraan sebelum restorasi" },
        { src: "/services/restorasi-after.png", caption: "Hasil restorasi - tampil seperti baru" },
        { src: "/services/restorasi-engine-before.png", caption: "Mesin lama yang berkarat sebelum direstorasi" },
        { src: "/services/restorasi-engine-after.png", caption: "Mesin yang sudah dibangun ulang secara total" },
      ]}
    />
  );
}
