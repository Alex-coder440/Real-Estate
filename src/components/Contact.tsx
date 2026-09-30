import React, { useState } from "react";
import { Check, Copy, MapPin, Phone, Clock, Briefcase, ExternalLink } from "lucide-react";
import { BUSINESS } from "../config/business";

const DISCUSSION_TOPICS = [
  "Real Estate Business Strategy",
  "Evaluating Business Priorities",
  "Operational Clarity & Planning",
  "Exploring a General Consultation",
] as const;

export const Contact: React.FC = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "Real Estate Business Strategy",
  ]);
  const [customNote, setCustomNote] = useState("");
  const [copiedAgenda, setCopiedAgenda] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleCopyAgenda = () => {
    const summary = [
      `Consultation Call Notes — ${BUSINESS.fullName}`,
      `Phone: ${BUSINESS.formattedPhone}`,
      `Office: ${BUSINESS.address}`,
      `Topics to Discuss: ${
        selectedTopics.length > 0 ? selectedTopics.join(", ") : "General Inquiry"
      }`,
      customNote.trim() ? `Key Questions / Context: ${customNote.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(summary);
    }
    setCopiedAgenda(true);
    setTimeout(() => setCopiedAgenda(false), 2500);
  };

  const handleCopyPhone = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(BUSINESS.formattedPhone);
    }
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 border-b border-[#111111]/10 bg-[#FFFFFF] py-12 sm:py-16 md:scroll-mt-20 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Verified Contact Information */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-[#967D4E]">
              Location &amp; Contact
            </p>

            <h2
              id="contact-heading"
              className="mt-2.5 font-serif-editorial text-[1.85rem] leading-[1.15] font-normal text-[#111111] sm:mt-3 sm:text-4xl lg:text-[2.65rem] balance-text"
            >
              Let&apos;s Start a Conversation
            </h2>

            <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.7] text-[#252525] sm:mt-5 sm:text-base pretty-text">
              Have questions about your real estate business or looking for a
              professional perspective? Get in touch to discuss your situation
              and determine whether a consultation is the right next step.
            </p>

            {/* Verified Details Grid */}
            <div className="mt-7 grid grid-cols-1 gap-6 border-t border-b border-[#111111]/10 py-6 sm:mt-9 sm:grid-cols-2 sm:py-8">
              {/* Consultant & Address */}
              <div className="flex items-start gap-3.5">
                <MapPin
                  className="mt-1 h-4 w-4 shrink-0 text-[#967D4E]"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-xs text-[#5A5751]">Office Location</div>
                  <div className="mt-1 font-serif-editorial text-xl font-semibold text-[#111111]">
                    {BUSINESS.name}
                  </div>
                  <div className="text-xs font-medium text-[#5A5751]">
                    {BUSINESS.title}
                  </div>
                  <address className="mt-2 not-italic text-sm leading-relaxed text-[#1C1C1C]">
                    {BUSINESS.streetAddress}
                    <br />
                    {BUSINESS.cityStateZip}
                    <br />
                    {BUSINESS.country}
                  </address>
                </div>
              </div>

              {/* Phone, Category & Hours */}
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <Phone
                    className="mt-1 h-4 w-4 shrink-0 text-[#967D4E]"
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <div className="text-xs text-[#5A5751]">Phone</div>
                    <div className="mt-1 flex flex-wrap items-center gap-2.5">
                      <a
                        href={`tel:${BUSINESS.phone}`}
                        className="inline-flex min-h-[44px] items-center text-base font-semibold text-[#111111] tabular-nums hover:text-[#967D4E] sm:min-h-0"
                      >
                        {BUSINESS.formattedPhone}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="inline-flex min-h-[38px] items-center gap-1.5 whitespace-nowrap border border-[#111111]/20 bg-[#F7F5F1] px-3 py-1 text-xs font-medium text-[#252525] transition-colors hover:border-[#111111] hover:text-[#111111] active:scale-[0.98] cursor-pointer"
                        aria-label="Copy phone number"
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-[#967D4E]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Briefcase
                    className="mt-1 h-4 w-4 shrink-0 text-[#967D4E]"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs text-[#5A5751]">
                      Business Category
                    </div>
                    <div className="mt-1 text-sm font-medium text-[#111111]">
                      {BUSINESS.category}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock
                    className="mt-1 h-4 w-4 shrink-0 text-[#967D4E]"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs text-[#5A5751]">Hours</div>
                    <div className="mt-1 text-sm font-medium text-[#111111] tabular-nums">
                      {BUSINESS.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons (Full-width on mobile, side-by-side on tablet+) */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-row sm:items-center sm:gap-3.5">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap shrink-0 bg-[#111111] px-7 py-3.5 text-sm font-medium text-[#FFFFFF] transition-colors duration-150 hover:bg-[#252525] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B49A68] tabular-nums"
              >
                <Phone className="h-4 w-4 text-[#B49A68]" aria-hidden="true" />
                <span>Call {BUSINESS.formattedPhone}</span>
              </a>

              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap shrink-0 border border-[#111111]/25 bg-[#FFFFFF] px-7 py-3.5 text-sm font-medium text-[#111111] transition-colors duration-150 hover:border-[#111111] hover:bg-[#F7F5F1] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B49A68]"
              >
                <span>Get Directions</span>
                <ExternalLink
                  className="h-4 w-4 text-[#967D4E]"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Call Preparation Pad */}
          <div className="lg:col-span-5">
            <div className="border border-[#111111]/15 bg-[#F7F5F1] p-5 sm:p-7 md:p-8">
              <div className="text-xs font-medium text-[#967D4E]">
                Prepare for Your Call
              </div>
              <h3 className="mt-2 font-serif-editorial text-2xl font-normal text-[#111111]">
                Outline Your Discussion Priorities
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#5A5751]">
                Select the topics most relevant to your situation to organize
                your notes before calling {BUSINESS.name} at{" "}
                <span className="tabular-nums font-medium text-[#111111]">
                  {BUSINESS.formattedPhone}
                </span>
                .
              </p>

              <div className="mt-5">
                <span className="block text-xs font-medium text-[#111111]">
                  1. Focus Areas for Conversation
                </span>
                <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {DISCUSSION_TOPICS.map((topic) => {
                    const isSelected = selectedTopics.includes(topic);
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => toggleTopic(topic)}
                        aria-pressed={isSelected}
                        className={`flex min-h-[46px] items-center justify-between border px-3.5 py-2.5 text-left text-xs font-medium transition-colors duration-150 active:scale-[0.99] cursor-pointer ${
                          isSelected
                            ? "border-[#111111] bg-[#111111] text-[#FFFFFF]"
                            : "border-[#111111]/15 bg-[#FFFFFF] text-[#252525] hover:border-[#111111]/40"
                        }`}
                      >
                        <span className="truncate">{topic}</span>
                        <span
                          className={`ml-2 shrink-0 text-[11px] ${
                            isSelected ? "text-[#B49A68]" : "text-[#5A5751]"
                          }`}
                        >
                          {isSelected ? "Selected" : "Select"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="call-preparation-notes"
                  className="block text-xs font-medium text-[#111111]"
                >
                  2. Personal Notes or Questions (Optional)
                </label>
                {/* text-base on mobile prevents iOS Safari auto-zoom on focus */}
                <textarea
                  id="call-preparation-notes"
                  rows={3}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Jot down key business questions you want to cover during your phone consultation..."
                  className="mt-2 w-full border border-[#111111]/20 bg-[#FFFFFF] p-3 text-base text-[#111111] placeholder:text-[#5A5751]/60 focus:border-[#111111] focus:outline-none sm:text-xs"
                />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handleCopyAgenda}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap border border-[#111111] bg-[#FFFFFF] px-4 py-2.5 text-xs font-medium text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#FFFFFF] active:scale-[0.99] cursor-pointer"
                >
                  {copiedAgenda ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#967D4E]" />
                      <span>Notes Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#967D4E]" />
                      <span>Copy Call Notes</span>
                    </>
                  )}
                </button>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap bg-[#111111] px-5 py-2.5 text-xs font-medium text-[#FFFFFF] transition-colors hover:bg-[#252525] active:scale-[0.99] tabular-nums"
                >
                  <Phone className="h-3.5 w-3.5 text-[#B49A68]" />
                  <span>Dial Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
