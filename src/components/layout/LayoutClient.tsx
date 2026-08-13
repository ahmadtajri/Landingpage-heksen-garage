"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { ConsultationProvider, useConsultationForm } from "@/context/ConsultationContext";

const ConsultationForm = dynamic(
  () => import("@/components/ConsultationForm").then((mod) => mod.ConsultationForm),
  { ssr: false }
);

function FormWrapper() {
  const { isFormOpen, closeForm } = useConsultationForm();
  return <ConsultationForm isOpen={isFormOpen} onClose={closeForm} />;
}

export function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <ConsultationProvider>
      {children}
      <FormWrapper />
    </ConsultationProvider>
  );
}
