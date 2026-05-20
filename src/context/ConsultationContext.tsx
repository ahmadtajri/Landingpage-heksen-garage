"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ConsultationContextType {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <ConsultationContext.Provider value={{ isFormOpen, openForm: () => setIsFormOpen(true), closeForm: () => setIsFormOpen(false) }}>
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultationForm() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultationForm must be used within ConsultationProvider");
  }
  return context;
}
