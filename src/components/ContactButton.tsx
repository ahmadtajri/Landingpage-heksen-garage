"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactButton() {
  return (
    <Button
      size="lg"
      className="w-full sm:w-auto text-lg gap-2"
      onClick={() => window.open("https://wa.me/6287897088170", "_blank")}
    >
      <MessageCircle className="h-5 w-5" /> Chat via WhatsApp
    </Button>
  );
}
