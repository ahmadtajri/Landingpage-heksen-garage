export function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Hexen Garage",
    description:
      "Bengkel body repair dan restorasi mobil profesional di Jakarta Timur. Spesialis perbaikan kendaraan akibat tabrakan, chassis repair, kaki-kaki, dan kerusakan berat.",
    url: "https://hexen-garage.vercel.app",
    logo: "https://hexen-garage.vercel.app/new-logo.png",
    image: "https://hexen-garage.vercel.app/new-logo.png",
    telephone: "+6281311734415",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Lampiri Raya No. 5A",
      addressLocality: "Pondok Kelapa, Duren Sawit",
      addressRegion: "Jakarta Timur",
      postalCode: "13450",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2615,
      longitude: 106.9258,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Jakarta",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Hexen Garage",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Body Repair",
            description:
              "Perbaikan body kendaraan akibat tabrakan, penyok, baret, dan kerusakan berat.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chassis Repair",
            description:
              "Perbaikan dan pelurusan rangka kendaraan dengan teknologi frame straightening.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Restorasi Kendaraan",
            description:
              "Pemulihan kendaraan tua atau rusak parah menjadi kondisi optimal.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Perbaikan Kaki-Kaki",
            description:
              "Perbaikan dan penggantian komponen suspensi, shock absorber, dan ball joint.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
