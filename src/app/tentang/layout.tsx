import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Hexen Garage",
  description: "Profil bengkel Hexen Garage, spesialis perbaikan body dan restorasi mobil berpengalaman di Jakarta Timur.",
};

export default function TentangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
