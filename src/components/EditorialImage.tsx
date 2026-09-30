import React, { useState } from "react";

interface EditorialImageProps {
  src: string;
  alt: string;
  aspectClassName?: string;
  className?: string;
  priority?: boolean;
  caption?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  aspectClassName = "aspect-[16/9]",
  className = "",
  priority = false,
  caption,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`relative overflow-hidden bg-[#1A1A1A] ${className}`}>
      <div className={`relative w-full ${aspectClassName} overflow-hidden`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.015]"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#181818] via-[#222222] to-[#111111] p-8 text-center"
            role="img"
            aria-label={alt}
          >
            <svg
              className="mb-4 h-12 w-12 text-[#B49A68]/70"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              aria-hidden="true"
            >
              <rect x="6" y="10" width="36" height="30" />
              <line x1="6" y1="18" x2="42" y2="18" />
              <line x1="18" y1="18" x2="18" y2="40" />
              <line x1="30" y1="18" x2="30" y2="40" />
            </svg>
            <span className="font-serif-editorial text-lg text-[#F7F5F1]/90">
              Executive Real Estate &amp; Business Advisory
            </span>
            <span className="mt-1 text-xs text-[#F7F5F1]/60">
              Orange Park, Florida
            </span>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 border border-[#111111]/10"
          aria-hidden="true"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 flex items-center justify-between text-xs text-[#5A5751]">
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
