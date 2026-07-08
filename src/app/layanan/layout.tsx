import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan | Hexen Garage",
  description: "Layanan lengkap body repair, chassis repair, restorasi kendaraan, perbaikan kaki-kaki, konsultasi gratis, dan klaim garansi di Hexen Garage.",
};

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
