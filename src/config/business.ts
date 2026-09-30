import heroArchitectureImg from "../assets/images/hero_commercial_architecture_1790617478171.jpg";
import aboutWorkspaceImg from "../assets/images/about_executive_workspace_1790617491047.jpg";
import consultantPerspectiveImg from "../assets/images/consultant_perspective_detail_1790617501690.jpg";

/**
 * Replace this placeholder with the client's verified Calendly URL when available.
 * Example: "https://calendly.com/your-scheduling-link"
 */
export const CALENDLY_URL = "REPLACE_WITH_CLIENT_CALENDLY_URL";

/**
 * Centralized Business Configuration
 * Contains strictly verified public business information for Brian Keith Philp.
 */
export const BUSINESS = {
  name: "Brian Keith Philp",
  fullName: "Brian Keith Philp – Real Estate Business Consultant",
  title: "Real Estate Business Consultant",
  category: "Business Management Consultant",
  phone: "+19512598881",
  formattedPhone: "+1 (951) 259-8881",
  rawPhoneDisplay: "+1 951-259-8881",
  streetAddress: "151 College Dr",
  cityStateZip: "Orange Park, FL 32065",
  cityState: "Orange Park, Florida",
  cityStateShort: "Orange Park, FL",
  country: "United States",
  address: "151 College Dr, Orange Park, FL 32065",
  fullAddress: "151 College Dr, Orange Park, FL 32065, USA",
  hours: "Open until 5:00 PM",
  rating: "5.0",
  reviewCount: 16,
  calendly: CALENDLY_URL,
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=151%20College%20Dr%2C%20Orange%20Park%2C%20FL%2032065",
} as const;

/**
 * Centralized Image Configuration
 * Allows easy replacement of editorial photography across the site.
 */
export const IMAGES = {
  hero: heroArchitectureImg,
  about: aboutWorkspaceImg,
  consultation: consultantPerspectiveImg,
} as const;

export const APPROACH_STEPS = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Identify the business questions that matter most and create a clearer path forward.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Approach real estate business decisions with structured thinking and practical planning.",
  },
  {
    number: "03",
    title: "Focus",
    description:
      "Keep attention on the priorities, opportunities, and decisions that can move a business forward.",
  },
  {
    number: "04",
    title: "Conversation",
    description:
      "Start with a direct conversation about where the business is today and where it needs to go.",
  },
] as const;

export const AUDIENCE_CATEGORIES = [
  {
    index: "01",
    title: "Real Estate Professionals",
    perspective:
      "Evaluating day-to-day operational priorities, market positioning, and longer-term business direction.",
  },
  {
    index: "02",
    title: "Business Owners",
    perspective:
      "Stepping back from daily execution to examine organizational structure, goals, and key decisions.",
  },
  {
    index: "03",
    title: "Property Professionals",
    perspective:
      "Bringing structured business thinking to commercial or residential property operations and planning.",
  },
  {
    index: "04",
    title: "Entrepreneurs",
    perspective:
      "Organizing foundational questions and defining a deliberate path forward in the real estate space.",
  },
  {
    index: "05",
    title: "Professionals Seeking Business Guidance",
    perspective:
      "Connecting for a focused, confidential conversation to talk through upcoming business decisions.",
  },
] as const;
