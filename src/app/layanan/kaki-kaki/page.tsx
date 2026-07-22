"use client";

import { ServiceDetailLayout } from "@/components/features/ServiceDetailLayout";

export default function KakiKakiPage() {
  return (
    <ServiceDetailLayout
      title="Perbaikan Kaki-Kaki"
      subtitle="Perbaikan sistem suspensi, shock absorber, ball joint, tie rod, dan komponen kaki-kaki lainnya agar kendaraan nyaman dikendarai."
      heroImage="/services/kaki-kaki.png"
      description={[
        "Sistem kaki-kaki kendaraan merupakan komponen vital yang mempengaruhi kenyamanan, keamanan, dan stabilitas berkendara. Kerusakan pada kaki-kaki bisa menyebabkan kendaraan tidak stabil, bunyi-bunyi aneh, dan bahkan berbahaya saat dikendarai.",
        "Hexen Garage menyediakan layanan perbaikan kaki-kaki yang komprehensif, meliputi penggantian dan perbaikan shock absorber, ball joint, tie rod, rack steer, bushing arm, bearing roda, dan komponen suspensi lainnya.",
        "Teknisi kami akan melakukan diagnosa menyeluruh untuk mengidentifikasi komponen yang bermasalah dan memberikan rekomendasi perbaikan yang tepat. Kami menggunakan spare part berkualitas untuk memastikan daya tahan dan performa optimal.",
      ]}
      features={[
        "Diagnosa kaki-kaki komprehensif dan akurat",
        "Perbaikan shock absorber, ball joint, tie rod",
        "Penggantian bushing arm dan bearing roda",
        "Spooring dan balancing setelah perbaikan",
        "Spare part berkualitas dengan garansi",
        "Test drive setelah perbaikan untuk memastikan hasil",
      ]}
      galleryImages={[
        { src: "/services/kaki-kaki.png", caption: "Proses perbaikan komponen kaki-kaki" },
        { src: "/Galery/Before/hyundai-palisade-before.jpg", caption: "Inspeksi sistem suspensi kendaraan" },
        { src: "/Galery/After/hyundai-palisade-after.jpg", caption: "Kendaraan siap jalan setelah perbaikan kaki-kaki" },
        { src: "/Galery/After/Raize-after.jpg", caption: "Hasil perbaikan kaki-kaki - stabil dan nyaman" },
      ]}
    />
  );
}
