import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-lg border border-brand-gray bg-brand-dark p-6 transition-all hover:border-brand-red/50 hover:bg-brand-gray/50",
        className
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-brand-light">{title}</h3>
      <p className="mb-6 flex-1 text-sm text-brand-muted">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-medium text-brand-red transition-colors hover:text-brand-red-hover"
      >
        Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
