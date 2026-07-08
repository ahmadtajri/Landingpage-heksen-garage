import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Hexen Garage",
  description: "Hasil sebelum dan sesudah perbaikan mobil bekas tabrak di Hexen Garage. Lihat transformasi nyata kendaraan.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
