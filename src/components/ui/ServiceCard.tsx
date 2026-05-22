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
        "group relative flex flex-col rounded-xl border border-brand-gray bg-brand-dark overflow-hidden transition-all duration-300 hover:border-brand-red/50 hover:shadow-lg hover:shadow-brand-red/10 hover:-translate-y-1",
        className
      )}
    >
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-brand-light">{title}</h3>
        <p className="mb-6 flex-1 text-sm text-brand-muted leading-relaxed">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-brand-red transition-all duration-300 hover:text-brand-orange hover:gap-3 gap-2"
        >
          Lihat Detail <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
