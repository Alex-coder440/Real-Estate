import React from "react";
import { APPROACH_STEPS } from "../config/business";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STAGGER_DELAYS = [
  "",
  "reveal-delay-100",
  "reveal-delay-200",
  "reveal-delay-300",
] as const;

export const Approach: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="approach"
      aria-labelledby="approach-heading"
      className="scroll-mt-16 border-b border-[#111111]/10 bg-[#FFFFFF] py-12 sm:py-16 md:scroll-mt-20 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-2xl reveal-element ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <p className="text-xs font-medium text-[#967D4E]">
            Consulting Philosophy
          </p>
          <h2
            id="approach-heading"
            className="mt-2.5 font-serif-editorial text-[1.85rem] leading-[1.15] font-normal text-[#111111] sm:mt-3 sm:text-4xl lg:text-[2.65rem] balance-text"
          >
            An Approach Built Around Clarity
          </h2>
          <p className="mt-3.5 text-[15px] leading-[1.65] text-[#5A5751] sm:mt-4 sm:text-base pretty-text">
            Every business situation carries its own context. Rather than
            prescribing one-size-fits-all templates, a productive consulting
            relationship begins with structured questions and clear priorities.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 border-t border-l border-[#111111]/10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH_STEPS.map((step, index) => {
            const delayClass = STAGGER_DELAYS[index] ?? "";
            return (
              <article
                key={step.number}
                className={`group flex flex-col justify-between border-r border-b border-[#111111]/10 bg-[#FFFFFF] p-6 transition-colors duration-200 hover:bg-[#F7F5F1]/60 sm:p-7 md:p-8 reveal-element ${delayClass} ${
                  isVisible ? "is-visible" : ""
                }`}
              >
                <div>
                  <div className="font-serif-editorial text-2xl font-normal text-[#B49A68] tabular-nums sm:text-3xl">
                    {step.number}.
                  </div>
                  <h3 className="mt-3.5 font-serif-editorial text-xl font-semibold text-[#111111] sm:mt-5 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.68] text-[#252525] sm:mt-3 pretty-text">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 h-[1px] w-8 bg-[#B49A68]/50 transition-all duration-200 group-hover:w-14 group-hover:bg-[#B49A68] sm:mt-8" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
