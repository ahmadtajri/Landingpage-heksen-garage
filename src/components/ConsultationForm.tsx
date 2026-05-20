"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    transmission: "",
    description: "",
    photos: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        photos: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan WhatsApp dengan data form
    const message = `
*Konsultasi Kendaraan - Heksen Garage*

*Data Kendaraan:*
- Brand: ${formData.brand}
- Model: ${formData.model}
- Tahun: ${formData.year}
- Transmisi: ${formData.transmission}

*Deskripsi Kerusakan:*
${formData.description}
    `.trim();

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
    
    // Buka WhatsApp dengan pesan
    window.open(whatsappUrl, "_blank");
    
    // Tutup form
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-brand-dark p-8 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-brand-muted hover:text-brand-red transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Form Header */}
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wider text-brand-light">
            Informasi Kendaraan
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Brand, Model, Year */}
            <div className="grid gap-4 md:grid-cols-3">
              {/* Brand */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-brand-light">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  placeholder="Merek Mobil"
                  className={cn(
                    "rounded border border-brand-gray bg-brand-black px-3 py-2",
                    "text-brand-light placeholder-brand-muted",
                    "focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  )}
                  required
                />
              </div>

              {/* Model */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-brand-light">
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  placeholder="Tipe Model"
                  className={cn(
                    "rounded border border-brand-gray bg-brand-black px-3 py-2",
                    "text-brand-light placeholder-brand-muted",
                    "focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  )}
                  required
                />
              </div>

              {/* Year */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-brand-light">
                  Tahun
                </label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="Tahun Produksi"
                  className={cn(
                    "rounded border border-brand-gray bg-brand-black px-3 py-2",
                    "text-brand-light placeholder-brand-muted",
                    "focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  )}
                  required
                />
              </div>
            </div>

            {/* Row 2: Transmission Only */}
            <div className="grid gap-4 md:grid-cols-1">
              {/* Transmission */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-brand-light">
                  Jenis Transmisi
                </label>
                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleInputChange}
                  className={cn(
                    "rounded border border-brand-gray bg-brand-black px-3 py-2",
                    "text-brand-light placeholder-brand-muted",
                    "focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  )}
                  required
                >
                  <option value="" disabled>
                    Pilih Jenis Transmisi
                  </option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                  <option value="cvt">CVT</option>
                </select>
              </div>
            </div>

            {/* File Upload */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-brand-light">
                Lampirkan Foto Kondisi
              </label>
              <input
                type="file"
                name="photos"
                onChange={handleFileChange}
                accept="image/*"
                className={cn(
                  "rounded border border-brand-gray bg-brand-black px-3 py-2",
                  "text-brand-muted cursor-pointer",
                  "file:mr-3 file:bg-brand-red file:text-white file:border-0 file:px-3 file:py-1 file:rounded file:cursor-pointer",
                  "focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                )}
              />
              {formData.photos && (
                <p className="mt-1 text-sm text-brand-muted">
                  File: {formData.photos.name}
                </p>
              )}
            </div>

            {/* Description Textarea */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-brand-light">
                Deskripsi Kerusakan
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Jelaskan kondisi dan jenis kerusakan pada kendaraan Anda"
                rows={4}
                className={cn(
                  "rounded border border-brand-gray bg-brand-black px-3 py-2",
                  "text-brand-light placeholder-brand-muted resize-none",
                  "focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                )}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className={cn(
                  "flex-1 rounded-md bg-brand-red px-6 py-3 font-medium text-white",
                  "transition-colors hover:bg-brand-red-hover",
                  "focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-dark"
                )}
              >
                Kirim Konsultasi
              </button>
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  "rounded-md border border-brand-gray px-6 py-3 font-medium",
                  "text-brand-light transition-colors hover:bg-brand-gray",
                  "focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-dark"
                )}
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
