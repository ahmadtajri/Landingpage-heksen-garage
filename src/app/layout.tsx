import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LayoutClient } from "@/components/layout/LayoutClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heksen Garage | Spesialis Body Repair & Restorasi Mobil",
  description: "Bengkel body repair dan restorasi mobil profesional. Spesialis perbaikan kendaraan akibat tabrakan dan kerusakan berat. Kembali presisi dan aman digunakan.",
  keywords: ["bengkel body repair", "body repair mobil", "chassis repair mobil", "restorasi mobil", "bengkel mobil tabrakan", "perbaikan mobil bekas tabrak"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-brand-black text-brand-light">
        <LayoutClient>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LayoutClient>
      </body>
    </html>
  );
}
