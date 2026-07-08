"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  label?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  label,
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
    if (!hasInteracted) setHasInteracted(true);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleTouchEnd = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-video overflow-hidden rounded-xl bg-brand-gray select-none group",
        className
      )}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={afterImage}
          alt={label ? `${label} - Sesudah` : "After"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
          priority
        />
        <div className="absolute bottom-4 right-4 z-10 rounded-lg glass px-3 py-1.5 text-xs font-bold text-green-400 uppercase tracking-wider">
          ✓ Sesudah
        </div>
      </div>

      {/* Before Image (Foreground overlay with clip-path) */}
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={label ? `${label} - Sebelum` : "Before"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
          priority
        />
        <div className="absolute bottom-4 left-4 z-10 rounded-lg glass px-3 py-1.5 text-xs font-bold text-brand-red uppercase tracking-wider">
          ✗ Sebelum
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 z-20 flex w-0.5 items-center justify-center bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        style={{ left: `${sliderPosition}%`, cursor: "ew-resize" }}
      >
        <div
          className={cn(
            "flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-b from-brand-orange to-brand-red text-white shadow-[0_0_20px_rgba(255,136,0,0.4)] transition-all duration-300 hover:scale-110",
            !hasInteracted && "animate-drag-hint"
          )}
        >
          <GripVertical className="h-5 w-5" />
        </div>
      </div>

      {/* Drag Hint Overlay */}
      {!hasInteracted && (
        <div className="absolute inset-0 z-15 flex items-center justify-center pointer-events-none">
          <div className="glass rounded-full px-4 py-2 text-xs font-semibold text-brand-light/80 animate-pulse">
            ← Geser untuk membandingkan →
          </div>
        </div>
      )}
    </div>
  );
}
