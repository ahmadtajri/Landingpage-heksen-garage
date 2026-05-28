"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useConsultationForm } from "@/context/ConsultationContext";

export function ContactButton() {
  const { openForm } = useConsultationForm();

  return (
    <Button
      size="lg"
      className="w-full sm:w-auto text-lg gap-2"
      onClick={openForm}
    >
      <MessageCircle className="h-5 w-5" /> Chat via WhatsApp
    </Button>
  );
}
