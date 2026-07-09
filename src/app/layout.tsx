import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LayoutClient } from "@/components/layout/LayoutClient";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heksen-garage.vercel.app"),
  title: {
    default: "Hexen Garage | Spesialis Body Repair & Restorasi Mobil Jakarta Timur",
    template: "%s | Hexen Garage",
  },
  description:
    "Bengkel body repair dan restorasi mobil profesional di Jakarta Timur. Spesialis perbaikan kendaraan akibat tabrakan, chassis repair, kaki-kaki, dan kerusakan berat. Hasil presisi, bergaransi.",
  keywords: [
    "bengkel body repair",
    "body repair mobil Jakarta",
    "chassis repair mobil",
    "restorasi mobil",
    "bengkel mobil tabrakan",
    "perbaikan mobil bekas tabrak",
    "bengkel mobil Jakarta Timur",
    "Hexen Garage",
    "perbaikan kaki-kaki mobil",
    "cat ulang mobil",
  ],
  authors: [{ name: "Hexen Garage" }],
  creator: "Hexen Garage",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://heksen-garage.vercel.app",
    siteName: "Hexen Garage",
    title: "Hexen Garage | Spesialis Body Repair & Restorasi Mobil",
    description:
      "Bengkel body repair dan restorasi mobil profesional di Jakarta Timur. Hasil presisi, bergaransi.",
    images: [
      {
        url: "/New Logo.png",
        width: 1200,
        height: 630,
        alt: "Hexen Garage - Spesialis Body Repair & Restorasi Mobil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexen Garage | Spesialis Body Repair & Restorasi Mobil",
    description:
      "Bengkel body repair dan restorasi mobil profesional di Jakarta Timur. Hasil presisi, bergaransi.",
    images: ["/New Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://heksen-garage.vercel.app",
  },
  verification: {
    google: "2pMBB9eVRdx9W2rYy8AnBGRZ1ZfQ28e91NjV6NWOKYM",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-brand-black text-brand-light" suppressHydrationWarning>
        <JsonLd />
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
