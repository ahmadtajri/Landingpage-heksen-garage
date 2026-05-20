"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function ConsultationFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    transmission: "",
    description: "",
    photos: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    // Format pesan WhatsApp dengan data form
    const message = `
*Konsultasi Kendaraan - Hexen Garage*

*Data Pemilik:*
- Nama: ${formData.name}
- Email: ${formData.email}
- Telepon: ${formData.phone}

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
    const whatsappUrl = `https://wa.me/6281368682723?text=${encodedMessage}`;

    // Buka WhatsApp dengan pesan
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      brand: "",
      model: "",
      year: "",
      transmission: "",
      description: "",
      photos: null,
    });

    // Reset file input
    const fileInput = document.querySelector(
      'input[name="photos"]'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl">
      <h2 className="mb-8 text-2xl font-bold uppercase tracking-wider text-brand-light">
        Form Konsultasi Gratis
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Name, Email, Phone */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-brand-light">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nama Anda"
              className={cn(
                "rounded border border-brand-gray bg-brand-black px-3 py-2",
                "text-brand-light placeholder-brand-muted",
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
              )}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-brand-light">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Anda"
              className={cn(
                "rounded border border-brand-gray bg-brand-black px-3 py-2",
                "text-brand-light placeholder-brand-muted",
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
              )}
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-brand-light">
              No. Telepon
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="08xx xxxx xxxx"
              className={cn(
                "rounded border border-brand-gray bg-brand-black px-3 py-2",
                "text-brand-light placeholder-brand-muted",
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
              )}
              required
            />
          </div>
        </div>

        {/* Row 2: Brand, Model, Year */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-brand-light">
              Brand Mobil
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
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
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
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
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
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
              )}
              required
            />
          </div>
        </div>

        {/* Row 3: Transmission */}
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
                "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
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
            Lampirkan Foto Kondisi (Opsional)
          </label>
          <input
            type="file"
            name="photos"
            onChange={handleFileChange}
            accept="image/*"
            className={cn(
              "rounded border border-brand-gray bg-brand-black px-3 py-2",
              "text-brand-muted cursor-pointer",
              "file:mr-3 file:bg-brand-orange file:text-white file:border-0 file:px-3 file:py-1 file:rounded file:cursor-pointer",
              "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
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
            rows={5}
            className={cn(
              "rounded border border-brand-gray bg-brand-black px-3 py-2",
              "text-brand-light placeholder-brand-muted resize-none",
              "focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            )}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "flex-1 rounded-md bg-gradient-to-b from-brand-red to-brand-red-hover px-6 py-3 font-bold text-white",
              "transition-all hover:shadow-lg hover:scale-105",
              "focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-brand-dark",
              isSubmitting && "opacity-50 cursor-not-allowed"
            )}
          >
            {isSubmitting ? "Mengirim..." : "Kirim Konsultasi ke WhatsApp"}
          </button>
        </div>
      </form>
    </div>
  );
}
