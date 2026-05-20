import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClass?: string;
}

export function Section({
  children,
  className,
  containerClass,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className={cn("container mx-auto px-4 md:px-6", containerClass)}>
        {children}
      </div>
    </section>
  );
}
