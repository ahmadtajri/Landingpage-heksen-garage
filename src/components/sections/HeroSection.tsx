"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import {
  MessageCircle,
  ChevronDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useConsultationForm } from "@/context/ConsultationContext";

export function HeroSection() {
  const { openForm } = useConsultationForm();
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Lightweight parallax — replaces framer-motion useScroll/useTransform
  // Direct DOM manipulation avoids React re-renders on every scroll frame
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!heroRef.current || !bgRef.current || !contentRef.current) {
          ticking = false;
          return;
        }
        const rect = heroRef.current.getBoundingClientRect();
        const h = rect.height || 1;
        // progress: 0 = section top at viewport top, 1 = section bottom at viewport top
        const progress = Math.max(0, Math.min(1, -rect.top / h));
        bgRef.current.style.transform = `translateY(${progress * 150}px)`;
        contentRef.current.style.opacity = `${Math.max(0, 1 - progress * 1.25)}`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image — parallax via scroll handler */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/Home/Hero-car.webp"
          alt="Hexen Garage Hero"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
        />
        {/* Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
      </div>

      {/* Grain Overlay */}
      <div className="grain-overlay absolute inset-0 z-[2] pointer-events-none" />

      {/* Animated Glow Orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-red/15 blur-[150px] animate-float-slow" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/10 blur-[120px] animate-float" />
      </div>

      {/* Content — opacity controlled via scroll handler */}
      <div
        ref={contentRef}
        className="container relative z-10 mx-auto px-4 md:px-6 pt-24 pb-16"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="hero-animate-in hero-delay-1 inline-flex items-center rounded-full glass px-4 py-2 text-sm text-brand-orange mb-8 animate-glow-pulse"
          >
            <Sparkles className="mr-2 h-4 w-4 fill-brand-orange" />
            Spesialis Restorasi & Body Repair Mobil
          </div>

          {/* Heading */}
          <h1
            className="hero-animate-in hero-delay-2 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
          >
            Mobil Rusak Karena{" "}
            <br className="hidden sm:block" />
            Kecelakaan?{" "}
            <span className="gradient-text block mt-2">
              Kami Kembalikan Seperti Baru.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-animate-in hero-delay-3 max-w-xl text-lg text-brand-muted sm:text-xl leading-relaxed mb-10"
          >
            Spesialis Body Repair, Chassis Repair, & Restorasi Mobil Bekas
            Tabrakan. Hasil presisi, rapi, dan profesional di Jakarta Timur.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-animate-in hero-delay-4 flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={openForm}
              size="lg"
              className="flex items-center justify-center w-full sm:w-auto text-lg gap-2 shadow-[0_0_30px_rgba(233,30,60,0.3)] hover:shadow-[0_0_50px_rgba(233,30,60,0.5)] transition-shadow duration-500"
            >
              <MessageCircle className="h-5 w-5" /> Konsultasi Gratis
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg border-white/20 hover:bg-white/5 hover:border-brand-orange backdrop-blur-sm transition-all duration-300"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Lihat Layanan
            </Button>
          </div>

          {/* Trust Badges */}
          <div
            className="hero-animate-in hero-delay-5 mt-12 flex flex-wrap items-center gap-6"
          >
            {["Teknisi Ahli", "Alat Modern", "Garansi Hasil"].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full glass flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-brand-orange" />
                </div>
                <span className="text-sm font-medium text-brand-light/80">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-animate-in hero-delay-6 absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brand-muted/60 tracking-widest uppercase">
          Scroll
        </span>
        <div className="animate-scroll-bounce">
          <ChevronDown className="h-5 w-5 text-brand-orange/60" />
        </div>
      </div>
    </section>
  );
}
