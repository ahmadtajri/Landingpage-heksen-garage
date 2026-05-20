"use client";

import { useEffect, useState, ReactNode } from "react";
import { ConsultationForm } from "../ConsultationForm";

export function LayoutClient({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };

    document.addEventListener("openConsultationForm", handleOpenForm);
    return () => {
      document.removeEventListener("openConsultationForm", handleOpenForm);
    };
  }, []);

  return (
    <>
      {children}
      <ConsultationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
}
