import React from "react";
import { BUSINESS } from "../config/business";

export const TrustBar: React.FC = () => {
  return (
    <section
      aria-label="Business Credibility Overview"
      className="border-b border-[#111111]/10 bg-[#FFFFFF]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-[#111111]/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {/* Item 1: Google Rating */}
          <div className="flex items-baseline justify-between py-4 sm:flex-col sm:justify-center sm:py-6 sm:pr-5 md:pr-8">
            <div className="font-serif-editorial text-xl font-semibold text-[#111111] tabular-nums sm:text-2xl lg:text-3xl">
              {BUSINESS.rating} <span className="text-[#B49A68]">★</span>
            </div>
            <div className="text-xs font-medium text-[#5A5751] tabular-nums sm:mt-1">
              {BUSINESS.reviewCount} Reviews on Google
            </div>
          </div>

          {/* Item 2: Location */}
          <div className="flex items-baseline justify-between py-4 sm:flex-col sm:justify-center sm:py-6 sm:px-5 md:px-8">
            <div className="font-serif-editorial text-xl font-semibold text-[#111111] sm:text-2xl lg:text-3xl">
              {BUSINESS.cityStateShort}
            </div>
            <div className="text-xs font-medium text-[#5A5751] sm:mt-1">
              Local Business · {BUSINESS.streetAddress}
            </div>
          </div>

          {/* Item 3: Focus */}
          <div className="flex items-baseline justify-between py-4 sm:flex-col sm:justify-center sm:py-6 sm:pl-5 md:pl-8">
            <div className="font-serif-editorial text-xl font-semibold text-[#111111] sm:text-2xl lg:text-3xl">
              Real Estate
            </div>
            <div className="text-xs font-medium text-[#5A5751] sm:mt-1">
              Business Consulting · {BUSINESS.category}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
