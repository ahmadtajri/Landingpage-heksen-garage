"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Auto-reload on ChunkLoadError (deployment skew - old chunks no longer exist)
    if (
      error.name === "ChunkLoadError" ||
      error.message?.includes("ChunkLoadError") ||
      error.message?.includes("Loading chunk") ||
      error.message?.includes("Failed to fetch dynamically imported module")
    ) {
      window.location.reload();
      return;
    }
  }, [error]);

  return (
    <html lang="id">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#e5e5e5",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #e91e3c, #ff8800)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Terjadi Kesalahan
          </h2>
          <p style={{ marginBottom: "1.5rem", color: "#999" }}>
            Halaman mengalami gangguan. Silakan coba muat ulang.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: "0.75rem 2rem",
              background: "linear-gradient(135deg, #e91e3c, #c41834)",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Muat Ulang
          </button>
        </div>
      </body>
    </html>
  );
}
