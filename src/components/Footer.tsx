import React from "react";
import { BUSINESS } from "../config/business";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] pb-[env(safe-area-inset-bottom)] text-[#F7F5F1]">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 border-b border-[#FFFFFF]/12 pb-10 sm:grid-cols-2 sm:gap-10 sm:pb-12 lg:grid-cols-12">
          {/* Brand & Identity */}
          <div className="sm:col-span-2 lg:col-span-5">
            <a
              href="#home"
              className="font-serif-editorial text-2xl font-normal tracking-wide text-[#FFFFFF]"
            >
              {BUSINESS.name}
            </a>
            <p className="mt-1.5 text-xs font-medium text-[#B49A68]">
              {BUSINESS.title}
            </p>
            <p className="mt-4 text-sm text-[#F7F5F1]/75">
              {BUSINESS.address}
            </p>
            <p className="mt-1 text-sm tabular-nums">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex min-h-[44px] items-center text-[#F7F5F1]/90 transition-colors hover:text-[#B49A68] sm:min-h-0 sm:mt-1.5"
              >
                {BUSINESS.formattedPhone}
              </a>
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="sm:col-span-1 lg:col-span-4">
            <div className="text-xs font-medium text-[#B49A68]">Navigation</div>
            <nav
              aria-label="Footer Navigation"
              className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 sm:mt-3 sm:flex sm:flex-col sm:space-y-2.5"
            >
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-[44px] w-fit items-center text-sm text-[#F7F5F1]/80 transition-colors hover:text-[#FFFFFF] sm:min-h-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Practice Info */}
          <div className="sm:col-span-1 lg:col-span-3">
            <div className="text-xs font-medium text-[#B49A68]">
              Office Hours &amp; Location
            </div>
            <p className="mt-3 text-sm text-[#F7F5F1]/80 tabular-nums">
              {BUSINESS.hours}
            </p>
            <p className="mt-2 text-xs text-[#F7F5F1]/65">
              {BUSINESS.category}
            </p>
            <p className="mt-2 text-xs text-[#F7F5F1]/65 sm:mt-3">
              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center underline decoration-[#B49A68]/60 underline-offset-4 hover:text-[#FFFFFF] sm:min-h-0"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Tagline */}
        <div className="mt-7 flex flex-col items-start justify-between gap-2.5 text-xs text-[#F7F5F1]/60 sm:mt-8 sm:flex-row sm:items-center">
          <p>© 2026 Brian Keith Philp. All rights reserved.</p>
          <p>Real Estate Business Consulting · Orange Park, Florida</p>
        </div>
      </div>
    </footer>
  );
};
