import React from "react";
import { ArrowUpRight, Phone, Info } from "lucide-react";
import { BUSINESS, CALENDLY_URL } from "../config/business";

interface ConsultationCTAProps {
  onScheduleClick: () => void;
  showInlineNotice: boolean;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({
  onScheduleClick,
  showInlineNotice,
}) => {
  const isPlaceholderCalendly =
    !CALENDLY_URL || CALENDLY_URL === "REPLACE_WITH_CLIENT_CALENDLY_URL";

  return (
    <section
      id="consultation"
      aria-labelledby="cta-heading"
      className="scroll-mt-16 border-b border-[#111111]/10 bg-[#F7F5F1] py-14 sm:py-20 md:scroll-mt-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="border border-[#111111]/15 bg-[#FFFFFF] px-5 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium text-[#967D4E]">
              Consultation Scheduling
            </p>

            <h2
              id="cta-heading"
              className="mt-2.5 font-serif-editorial text-3xl leading-[1.12] font-normal text-[#111111] sm:mt-3 sm:text-4xl md:text-5xl balance-text"
            >
              Ready to Talk Strategy?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.68] text-[#252525] sm:mt-5 sm:text-base md:text-lg pretty-text">
              Start with a conversation about your business, your goals, and
              where you want to go next.
            </p>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-3.5">
              <button
                type="button"
                onClick={onScheduleClick}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap shrink-0 bg-[#111111] px-8 py-3.5 text-sm font-medium text-[#FFFFFF] transition-colors duration-150 hover:bg-[#252525] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B49A68] cursor-pointer"
              >
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="h-4 w-4 text-[#B49A68]" aria-hidden="true" />
              </button>

              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap shrink-0 border border-[#111111]/25 bg-[#FFFFFF] px-8 py-3.5 text-sm font-medium text-[#111111] transition-colors duration-150 hover:border-[#111111] hover:bg-[#F7F5F1] active:scale-[0.99] tabular-nums"
              >
                <Phone className="h-4 w-4 text-[#967D4E]" aria-hidden="true" />
                <span>Call {BUSINESS.formattedPhone}</span>
              </a>
            </div>

            {/* Elegant Placeholder Notice when CALENDLY_URL is unverified */}
            {showInlineNotice && isPlaceholderCalendly && (
              <div
                role="status"
                aria-live="polite"
                className="mx-auto mt-6 max-w-lg border border-[#B49A68]/60 bg-[#F7F5F1] p-4 text-left sm:mt-7 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#967D4E]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium leading-relaxed text-[#111111]">
                      Booking link coming soon. Please call{" "}
                      <a
                        href={`tel:${BUSINESS.phone}`}
                        className="underline decoration-[#B49A68] underline-offset-4 hover:text-[#967D4E] tabular-nums"
                      >
                        {BUSINESS.formattedPhone}
                      </a>{" "}
                      to schedule a consultation.
                    </p>
                    <p className="mt-1 text-xs text-[#5A5751]">
                      {BUSINESS.name} · {BUSINESS.hours} · {BUSINESS.cityStateShort}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
