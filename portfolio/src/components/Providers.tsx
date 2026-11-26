"use client";

import { Toaster } from "react-hot-toast";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            fontFamily: "Inter, sans-serif",
          },
        }}
      />
    </>
  );
}
