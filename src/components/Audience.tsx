import React from "react";
import { ArrowUpRight } from "lucide-react";
import { AUDIENCE_CATEGORIES, BUSINESS, IMAGES } from "../config/business";
import { EditorialImage } from "./EditorialImage";

interface AudienceProps {
  onScheduleClick: () => void;
}

export const Audience: React.FC<AudienceProps> = ({ onScheduleClick }) => {
  return (
    <>
      {/* Section 6: Who This Is For */}
      <section
        aria-labelledby="audience-heading"
        className="border-b border-[#111111]/10 bg-[#F7F5F1] py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#967D4E]">
                Who This Is For
              </p>
              <h2
                id="audience-heading"
                className="mt-2.5 font-serif-editorial text-[1.85rem] leading-[1.15] font-normal text-[#111111] sm:mt-3 sm:text-4xl lg:text-[2.65rem] balance-text"
              >
                Built for Real Estate Professionals
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-[1.65] text-[#252525] sm:text-sm lg:max-w-md pretty-text">
              If you&apos;re looking for a professional conversation around your
              real estate business or business direction, start with a
              consultation.
            </p>
          </div>

          {/* Responsive Bento Grid (Balanced 2-col on Tablet, 6-col Asymmetric on Desktop) */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
            {AUDIENCE_CATEGORIES.map((item, idx) => {
              // On tablet (sm/md): first item spans 2 cols, items 2-5 form a clean 2x2 grid.
              // On desktop (lg): first 2 items span 3 cols each, items 3-5 span 2 cols each.
              const spanClass =
                idx === 0
                  ? "sm:col-span-2 lg:col-span-3"
                  : idx === 1
                  ? "sm:col-span-1 lg:col-span-3"
                  : "sm:col-span-1 lg:col-span-2";

              return (
                <div
                  key={item.title}
                  className={`${spanClass} flex flex-col justify-between border border-[#111111]/10 bg-[#FFFFFF] p-6 transition-colors duration-200 hover:border-[#B49A68] sm:p-7 lg:p-8`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#5A5751] tabular-nums">
                      <span>{item.index}.</span>
                      <span className="text-[#967D4E]">Consultation Inquiry</span>
                    </div>
                    <h3 className="mt-3.5 font-serif-editorial text-xl font-normal text-[#111111] sm:mt-4 sm:text-2xl balance-text">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.65] text-[#5A5751] sm:mt-3 pretty-text">
                      {item.perspective}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#111111]/10 pt-3 sm:mt-6 sm:pt-4">
                    <button
                      type="button"
                      onClick={onScheduleClick}
                      className="inline-flex min-h-[44px] w-full items-center justify-between gap-2 whitespace-nowrap py-1 text-xs font-medium text-[#111111] transition-colors hover:text-[#967D4E] active:opacity-80 cursor-pointer"
                    >
                      <span>Inquire About a Consultation</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#B49A68]" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Why Work With a Consultant */}
      <section
        aria-labelledby="perspective-heading"
        className="relative overflow-hidden border-b border-[#111111] bg-[#111111] py-12 text-[#F7F5F1] sm:py-16 md:py-20 lg:py-24"
      >
        {/* Subtle Architectural Blueprint Linework SVG */}
        <svg
          className="pointer-events-none absolute top-0 right-0 h-full w-full opacity-[0.05] sm:w-2/3 lg:w-1/2"
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden="true"
        >
          <line x1="100" y1="0" x2="100" y2="600" stroke="#B49A68" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="600" stroke="#B49A68" strokeWidth="1" />
          <line x1="500" y1="0" x2="500" y2="600" stroke="#B49A68" strokeWidth="1" />
          <line x1="0" y1="150" x2="600" y2="150" stroke="#B49A68" strokeWidth="1" />
          <line x1="0" y1="350" x2="600" y2="350" stroke="#B49A68" strokeWidth="1" />
          <line x1="0" y1="500" x2="600" y2="500" stroke="#B49A68" strokeWidth="1" />
          <circle cx="300" cy="350" r="160" stroke="#B49A68" strokeWidth="1" />
          <rect x="140" y="150" width="320" height="200" stroke="#B49A68" strokeWidth="1" />
        </svg>

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-wide text-[#B49A68]">
                Why Work With a Consultant
              </p>

              <h2
                id="perspective-heading"
                className="mt-3 font-serif-editorial text-[1.85rem] leading-[1.15] font-normal tracking-[0.01em] text-[#FFFFFF] sm:mt-4 sm:text-4xl lg:text-[2.75rem] balance-text"
              >
                Sometimes the next step becomes clearer from outside the
                business.
              </h2>

              <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.72] tracking-[0.01em] text-[#F7F5F1]/85 sm:mt-6 sm:text-base md:text-lg pretty-text">
                Running a business often means being too close to the
                day-to-day decisions. An experienced consultant can provide an
                outside perspective, help organize complex questions, and create
                space for more deliberate decision-making.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#FFFFFF]/15 pt-5 text-xs text-[#F7F5F1]/75 sm:mt-8 sm:gap-x-6 sm:pt-6">
                <span>Outside Perspective</span>
                <span aria-hidden="true" className="text-[#B49A68]">
                  ·
                </span>
                <span>Structured Questions</span>
                <span aria-hidden="true" className="text-[#B49A68]">
                  ·
                </span>
                <span>Deliberate Decision-Making</span>
                <span aria-hidden="true" className="text-[#B49A68]">
                  ·
                </span>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex min-h-[44px] items-center font-medium text-[#B49A68] underline underline-offset-4 hover:text-[#FFFFFF] sm:min-h-0"
                >
                  Connect with {BUSINESS.name}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EditorialImage
                src={IMAGES.consultation}
                alt="Architectural perspective lines symbolizing clarity and outside business perspective"
                aspectClassName="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]"
                className="border border-[#B49A68]/30"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
