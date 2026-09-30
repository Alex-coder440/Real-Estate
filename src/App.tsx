/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, X, Info } from "lucide-react";
import { BUSINESS, CALENDLY_URL } from "./config/business";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { Audience } from "./components/Audience";
import { Contact } from "./components/Contact";
import { ConsultationCTA } from "./components/ConsultationCTA";
import { Footer } from "./components/Footer";

export default function App() {
  const [bookingNoticeOpen, setBookingNoticeOpen] = useState(false);

  const handleScheduleClick = () => {
    const isPlaceholder =
      !CALENDLY_URL || CALENDLY_URL === "REPLACE_WITH_CLIENT_CALENDLY_URL";

    if (isPlaceholder) {
      setBookingNoticeOpen(true);
      const ctaElement = document.getElementById("consultation");
      if (ctaElement) {
        ctaElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      window.location.href = CALENDLY_URL;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F1] text-[#1C1C1C] overflow-x-clip">
      <Navbar onScheduleClick={handleScheduleClick} />

      <main className="flex-1">
        <Hero onScheduleClick={handleScheduleClick} />
        <TrustBar />
        <About />
        <Approach />
        <Audience onScheduleClick={handleScheduleClick} />
        <Contact />
        <ConsultationCTA
          onScheduleClick={handleScheduleClick}
          showInlineNotice={bookingNoticeOpen}
        />
      </main>

      <Footer />

      {/* Accessible Floating Notification Banner when Calendly Placeholder is Triggered */}
      {bookingNoticeOpen && (
        <div
          role="dialog"
          aria-labelledby="calendly-notice-title"
          aria-describedby="calendly-notice-desc"
          className="fixed right-3 bottom-3 left-3 z-50 mx-auto max-w-md border border-[#B49A68] bg-[#111111] p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] text-[#F7F5F1] shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:right-6 sm:bottom-6 sm:left-auto sm:p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-[#B49A68]"
                aria-hidden="true"
              />
              <div>
                <h3
                  id="calendly-notice-title"
                  className="font-serif-editorial text-lg font-normal text-[#FFFFFF]"
                >
                  Schedule a Consultation
                </h3>
                <p
                  id="calendly-notice-desc"
                  className="mt-1.5 text-xs leading-relaxed text-[#F7F5F1]/85"
                >
                  Booking link coming soon. Please call{" "}
                  <span className="font-medium text-[#FFFFFF] tabular-nums">
                    {BUSINESS.formattedPhone}
                  </span>{" "}
                  to schedule a consultation.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setBookingNoticeOpen(false)}
              aria-label="Close booking notification"
              className="inline-flex min-h-[44px] min-w-[44px] -mt-2 -mr-2 items-center justify-center text-[#F7F5F1]/60 transition-colors hover:text-[#FFFFFF] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3 sm:pl-7">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex min-h-[44px] flex-1 sm:flex-initial items-center justify-center gap-1.5 whitespace-nowrap bg-[#B49A68] px-4 py-2.5 text-xs font-medium text-[#111111] transition-colors hover:bg-[#FFFFFF] active:scale-[0.99] tabular-nums"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Call {BUSINESS.formattedPhone}</span>
            </a>
            <button
              type="button"
              onClick={() => setBookingNoticeOpen(false)}
              className="inline-flex min-h-[44px] items-center justify-center px-4 py-2.5 text-xs text-[#F7F5F1]/75 transition-colors hover:text-[#FFFFFF] cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
