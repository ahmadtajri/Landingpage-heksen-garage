"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";

// Code-split: framer-motion and all below-fold section JS
// is deferred into a separate chunk that loads asynchronously
const ScrollSections = dynamic(
  () =>
    import("@/components/sections/ScrollSections").then(
      (mod) => mod.ScrollSections
    ),
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <ScrollSections />
    </>
  );
}
