"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  image,
  href,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-brand-gray bg-brand-dark overflow-hidden transition-all duration-500 hover:border-brand-red/50 hover:shadow-[0_20px_40px_rgba(233,30,60,0.15)] hover:-translate-y-2",
        className
      )}
    >
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-brand-light group-hover:text-white transition-colors">{title}</h3>
        <p className="mb-6 flex-1 text-sm text-brand-muted leading-relaxed">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-brand-red transition-all duration-300 hover:text-brand-orange gap-2 group/link"
        >
          Lihat Detail
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
