"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "scale-down";
}

export default function OptimizedImage({
  src,
  alt,
  width = 400,
  height = 300,
  priority = false,
  className = "",
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ width: "100%", height: "auto" }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-[var(--bg-muted)] animate-pulse rounded-xl" />
      )}
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          style={{
            objectFit,
            width: "100%",
            height: "auto",
          }}
          className="transition-opacity duration-300"
        />
      ) : (
        <div className="w-full h-full bg-[var(--bg-muted)] flex items-center justify-center text-[var(--text-3)]">
          <span className="text-sm">Unable to load image</span>
        </div>
      )}
    </motion.div>
  );
}
