"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-gradient-to-b from-brand-red to-brand-red-hover text-white hover:shadow-[0_8px_16px_rgba(233,30,60,0.4)] hover:scale-105 shadow-lg": variant === "primary",
          "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10 hover:shadow-[0_6px_12px_rgba(255,136,0,0.3)]": variant === "outline",
          "text-brand-light hover:bg-brand-gray hover:text-brand-orange transition-colors": variant === "ghost",
          "h-9 px-4 text-sm": size === "sm",
          "h-11 px-6 text-base": size === "md",
          "h-14 px-8 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
