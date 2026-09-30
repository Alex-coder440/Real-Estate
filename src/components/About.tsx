import React from "react";
import { BUSINESS, IMAGES } from "../config/business";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { EditorialImage } from "./EditorialImage";

export const About: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.12,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 border-b border-[#111111]/10 bg-[#F7F5F1] py-12 sm:py-16 md:scroll-mt-20 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Image Column */}
          <div
            className={`order-2 lg:order-1 lg:col-span-6 reveal-element ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <EditorialImage
              src={IMAGES.about}
              alt="Executive consulting workspace representing real estate business strategy and planning"
              aspectClassName="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]"
              caption="Perspective & Strategic Planning · Orange Park, Florida"
            />
          </div>

          {/* Text Column */}
          <div
            className={`order-1 lg:order-2 lg:col-span-6 reveal-element reveal-delay-100 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <p className="text-xs font-medium text-[#967D4E]">
              About the Practice
            </p>

            <h2
              id="about-heading"
              className="mt-2.5 font-serif-editorial text-[1.85rem] leading-[1.15] font-normal text-[#111111] sm:mt-3 sm:text-4xl lg:text-[2.65rem] balance-text"
            >
              Business Strategy With a Real Estate Perspective
            </h2>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-[#252525] sm:mt-6 sm:space-y-5 sm:text-base pretty-text">
              <p>
                Brian Keith Philp is a real estate business consultant based in
                Orange Park, Florida. His business is focused on professional
                consulting within the real estate and business-management space.
              </p>
              <p>
                Because publicly available information about the practice is
                limited, this website intentionally keeps the focus on
                professionalism, accessibility, and the opportunity to connect
                directly with Brian to discuss individual business needs.
              </p>
            </div>

            {/* Verified Practice Summary */}
            <dl
              className={`mt-7 grid grid-cols-1 gap-4 border-t border-[#111111]/10 pt-5 sm:mt-8 sm:grid-cols-2 sm:pt-6 reveal-element reveal-delay-200 ${
                isVisible ? "is-visible" : ""
              }`}
            >
              <div>
                <dt className="text-xs text-[#5A5751]">Principal Consultant</dt>
                <dd className="mt-1 text-sm font-medium text-[#111111]">
                  {BUSINESS.name}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#5A5751]">Practice Classification</dt>
                <dd className="mt-1 text-sm font-medium text-[#111111]">
                  {BUSINESS.title} · {BUSINESS.category}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#5A5751]">Office Location</dt>
                <dd className="mt-1 text-sm font-medium text-[#111111]">
                  {BUSINESS.address}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#5A5751]">Direct Telephone</dt>
                <dd className="mt-0.5 text-sm font-medium text-[#111111] tabular-nums">
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex min-h-[44px] items-center underline decoration-[#B49A68] underline-offset-4 hover:text-[#967D4E] sm:min-h-0 sm:py-0.5"
                  >
                    {BUSINESS.formattedPhone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
