import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | Hexen Garage",
  description: "Hubungi Hexen Garage untuk konsultasi dan estimasi perbaikan mobil Anda.",
  alternates: {
    canonical: "/kontak",
  },
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
