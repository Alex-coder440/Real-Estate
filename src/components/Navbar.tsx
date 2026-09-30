import React, { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS } from "../config/business";

interface NavbarProps {
  onScheduleClick: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onScheduleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key or viewport resize to tablet/desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-[#111111]/10 bg-[#F7F5F1]/95 backdrop-blur-md transition-all duration-200 ${
        isScrolled
          ? "py-2.5 shadow-[0_2px_20px_rgba(17,17,17,0.04)]"
          : "py-3 md:py-4 lg:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single Brand Wordmark Element */}
        <a
          href="#home"
          onClick={handleNavLinkClick}
          className="font-serif-editorial text-lg font-semibold tracking-tight text-[#111111] whitespace-nowrap shrink-0 transition-opacity duration-150 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68] sm:text-xl lg:text-2xl"
        >
          {BUSINESS.name}
        </a>

        {/* Zone 2: Clean Text Navigation Links (Tablet & Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex md:items-center md:gap-5 lg:gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-flex min-h-[44px] items-center whitespace-nowrap py-1 text-sm font-medium text-[#252525] transition-colors duration-150 hover:text-[#111111] after:absolute after:bottom-1.5 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B49A68] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onScheduleClick}
            className="hidden sm:inline-flex min-h-[44px] items-center justify-center whitespace-nowrap shrink-0 bg-[#111111] px-4 lg:px-5 py-2.5 text-xs font-medium text-[#FFFFFF] border border-[#111111] transition-colors duration-150 hover:bg-[#252525] hover:border-[#B49A68] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B49A68] cursor-pointer"
          >
            Schedule a Consultation
          </button>

          {/* Direct Phone Call Action on Small Phones */}
          <a
            href={`tel:${BUSINESS.phone}`}
            aria-label={`Call ${BUSINESS.name} at ${BUSINESS.formattedPhone}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#111111]/15 bg-[#FFFFFF] text-[#111111] transition-colors duration-150 hover:border-[#111111] active:bg-[#F7F5F1] sm:hidden"
          >
            <Phone className="h-4 w-4 text-[#967D4E]" aria-hidden="true" />
          </a>

          {/* Hamburger Menu Toggle (44x44px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#111111]/15 bg-[#FFFFFF] text-[#111111] transition-colors duration-150 hover:border-[#111111] active:bg-[#F7F5F1] md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Small Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-x-0 top-full h-screen bg-[#111111]/30 backdrop-blur-[2px] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-navigation-drawer"
            className="relative z-50 border-t border-[#111111]/10 bg-[#F7F5F1] px-4 pt-4 pb-6 shadow-[0_16px_32px_rgba(17,17,17,0.12)] sm:px-6 md:hidden"
          >
            <p className="mb-3 text-xs font-medium text-[#5A5751]">
              {BUSINESS.title} · {BUSINESS.cityStateShort}
            </p>
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col divide-y divide-[#111111]/10 border-t border-b border-[#111111]/10"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="flex min-h-[48px] items-center justify-between py-3 text-base font-medium text-[#111111] transition-colors hover:text-[#967D4E] active:bg-[#111111]/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#967D4E]" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScheduleClick();
                }}
                className="flex min-h-[48px] w-full items-center justify-center whitespace-nowrap bg-[#111111] px-5 py-3 text-center text-sm font-medium text-[#FFFFFF] transition-colors hover:bg-[#252525] active:scale-[0.99] cursor-pointer"
              >
                Schedule a Consultation
              </button>
              <a
                href={`tel:${BUSINESS.phone}`}
                onClick={handleNavLinkClick}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap border border-[#111111]/25 bg-[#FFFFFF] px-5 py-3 text-center text-sm font-medium text-[#111111] tabular-nums transition-colors hover:border-[#111111] active:bg-[#F7F5F1]"
              >
                <Phone className="h-4 w-4 text-[#967D4E]" aria-hidden="true" />
                <span>Call {BUSINESS.formattedPhone}</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
