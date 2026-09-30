import React from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { BUSINESS, IMAGES } from "../config/business";
import { EditorialImage } from "./EditorialImage";

interface HeroProps {
  onScheduleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-20 border-b border-[#111111]/10 bg-[#F7F5F1] pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6">
            {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
            <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#5A5751] sm:mb-5">
              <span className="text-[#111111]">{BUSINESS.title}</span>
              <span aria-hidden="true" className="text-[#B49A68]">
                ·
              </span>
              <span>{BUSINESS.cityState}</span>
            </div>

            <h1
              id="hero-heading"
              className="font-serif-editorial text-[2.2rem] leading-[1.08] font-normal tracking-tight text-[#111111] sm:text-5xl md:text-[3.1rem] lg:text-[3.5rem] balance-text"
            >
              Strategic Thinking for Real Estate Businesses.
            </h1>

            <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.68] text-[#252525] sm:mt-6 sm:text-base md:text-lg pretty-text">
              Professional business consulting for real estate professionals
              seeking greater clarity, stronger strategy, and a more focused
              approach to business.
            </p>

            {/* Primary & Secondary Actions (48px touch targets on mobile/tablet) */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-row sm:items-center sm:gap-3.5">
              <button
                type="button"
                onClick={onScheduleClick}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap shrink-0 bg-[#111111] px-7 py-3.5 text-sm font-medium text-[#FFFFFF] transition-colors duration-150 hover:bg-[#252525] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B49A68] cursor-pointer"
              >
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="h-4 w-4 text-[#B49A68]" aria-hidden="true" />
              </button>

              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap shrink-0 border border-[#111111]/25 bg-[#FFFFFF] px-7 py-3.5 text-sm font-medium text-[#111111] transition-colors duration-150 hover:border-[#111111] hover:bg-[#F7F5F1] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B49A68]"
              >
                <Phone className="h-4 w-4 text-[#967D4E]" aria-hidden="true" />
                <span>Call Brian</span>
              </a>
            </div>

            {/* Subtle Verified Rating & Location Line */}
            <div className="mt-7 border-t border-[#111111]/10 pt-4 sm:mt-8 sm:pt-5">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#5A5751] tabular-nums">
                <span className="font-medium text-[#111111]">
                  {BUSINESS.rating} <span className="text-[#B49A68]">★</span> ·{" "}
                  {BUSINESS.reviewCount} Google Reviews
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {BUSINESS.streetAddress}, {BUSINESS.cityStateZip}
                </span>
                <span aria-hidden="true">·</span>
                <span>{BUSINESS.hours}</span>
              </div>
            </div>
          </div>

          {/* Architectural Image Column (Zero Horizontal Overflow on Tablet/Mobile) */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-0 z-20 border border-[#B49A68]/45"
                aria-hidden="true"
              />
              <EditorialImage
                src={IMAGES.hero}
                alt="Modern commercial office architecture representing executive real estate business consulting in Florida"
                aspectClassName="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]"
                priority={true}
                className="relative z-10 shadow-[0_12px_32px_rgba(17,17,17,0.08)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
