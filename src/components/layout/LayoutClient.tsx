"use client";

import { ReactNode } from "react";
import { ConsultationProvider, useConsultationForm } from "@/context/ConsultationContext";
import { ConsultationForm } from "@/components/ConsultationForm";

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
