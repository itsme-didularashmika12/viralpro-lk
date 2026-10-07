/* ============================================================
   ViralPro LK — Complete 2026 LKR Price List (source of truth)
   Synced with the ViralPro LK Commission Management System catalog
   (31 services, 128 packages).
   ============================================================ */

export interface PriceItem {
  name: string;
  /** Amount without "Rs." — e.g. "45,000", "3,500,000+" */
  amount?: string;
  from?: boolean;
  unit?: string; // e.g. "/ Month"
  quote?: string; // e.g. "Quotation"
}

export interface PriceCategory {
  id: string;
  title: string;
  items: PriceItem[];
  note?: string;
}

export const priceList: PriceCategory[] = [
  {
    id: "promotional-video",
    title: "Promotional Video",
    items: [
      { name: "Basic", amount: "45,000", from: true },
      { name: "Standard", amount: "95,000", from: true },
      { name: "Premium", amount: "165,000", from: true },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    items: [
      { name: "Basic", amount: "45,000" },
      { name: "Standard", amount: "95,000" },
      { name: "Premium", amount: "165,000" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "reels-short-videos",
    title: "Reels / Short Videos",
    items: [
      { name: "1 Reel", amount: "12,500" },
      { name: "5 Reels", amount: "55,000" },
      { name: "10 Reels", amount: "100,000" },
      { name: "20 Reels", amount: "190,000" },
    ],
    note: "Includes: short-form editing, captions, music, SFX, social-media optimization.",
  },
  {
    id: "drone-promotion",
    title: "Drone Promotion",
    items: [
      { name: "Basic", amount: "30,000", from: true },
      { name: "Standard", amount: "55,000", from: true },
      { name: "Premium", amount: "95,000", from: true },
      { name: "Custom", quote: "Quotation" },
    ],
    note: "Drone availability depends on location, weather and project requirements.",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    items: [
      { name: "Basic", amount: "45,000", unit: "/ Month" },
      { name: "Standard", amount: "85,000", unit: "/ Month" },
      { name: "Premium", amount: "150,000", unit: "/ Month" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "facebook-instagram-management",
    title: "Facebook / Instagram Management",
    items: [
      { name: "Basic", amount: "35,000", unit: "/ Month" },
      { name: "Standard", amount: "65,000", unit: "/ Month" },
      { name: "Premium", amount: "130,000", unit: "/ Month" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "advertising-ads-management",
    title: "Advertising / Ads Management",
    items: [
      { name: "Basic", amount: "30,000", unit: "/ Month" },
      { name: "Standard", amount: "55,000", unit: "/ Month" },
      { name: "Premium", amount: "90,000", unit: "/ Month" },
      { name: "Custom", quote: "Quotation" },
    ],
    note: "Advertising budget is paid separately by the client.",
  },
  {
    id: "tiktok-content",
    title: "TikTok Content",
    items: [
      { name: "Basic", amount: "45,000", from: true },
      { name: "Standard", amount: "95,000", from: true },
      { name: "Premium", amount: "165,000", from: true },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "youtube-services",
    title: "YouTube Services",
    items: [
      { name: "Basic", amount: "35,000" },
      { name: "Standard", amount: "75,000" },
      { name: "Premium", amount: "150,000" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    items: [
      { name: "Basic", amount: "15,000", from: true },
      { name: "Standard", amount: "30,000", from: true },
      { name: "Premium", amount: "65,000", from: true },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    items: [
      { name: "Basic", amount: "18,000", from: true },
      { name: "Standard", amount: "45,000", from: true },
      { name: "Premium", amount: "85,000", from: true },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "actor-model",
    title: "Actor / Model",
    items: [
      { name: "1 Actor", amount: "15,000", from: true },
      { name: "2 Actors", amount: "27,000", from: true },
      { name: "3 Actors", amount: "40,000", from: true },
      { name: "Custom", quote: "Quotation" },
    ],
    note: "Availability depends on project and date.",
  },
  {
    id: "voice-over",
    title: "Voice-Over",
    items: [
      { name: "Basic", amount: "7,500", from: true },
      { name: "Professional", amount: "15,000", from: true },
      { name: "Premium", amount: "30,000", from: true },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    items: [
      { name: "Social Post", amount: "3,500" },
      { name: "Poster", amount: "5,000" },
      { name: "Flyer", amount: "5,000" },
      { name: "Banner", amount: "7,500" },
      { name: "Menu", amount: "8,500" },
      { name: "Brochure", amount: "15,000" },
    ],
  },
  {
    id: "logo-design",
    title: "Logo Design",
    items: [
      { name: "Basic", amount: "15,000" },
      { name: "Standard", amount: "35,000" },
      { name: "Premium", amount: "60,000" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "business-branding",
    title: "Business Branding",
    items: [
      { name: "Basic", amount: "45,000" },
      { name: "Standard", amount: "95,000" },
      { name: "Premium", amount: "180,000" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    items: [
      { name: "Basic", amount: "75,000", from: true },
      { name: "Standard", amount: "180,000", from: true },
      { name: "Premium", amount: "350,000", from: true },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "website-development",
    title: "Website Development",
    items: [
      { name: "Landing Page", amount: "60,000", from: true },
      { name: "Basic Business Website", amount: "95,000", from: true },
      { name: "Standard Website", amount: "150,000", from: true },
      { name: "Premium Website", amount: "300,000+" },
      { name: "Custom Web App", amount: "500,000", from: true },
    ],
  },
  {
    id: "e-commerce-website",
    title: "E-Commerce Website",
    items: [
      { name: "Basic", amount: "180,000", from: true },
      { name: "Standard", amount: "350,000", from: true },
      { name: "Premium", amount: "650,000", from: true },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "hosting-website-maintenance",
    title: "Hosting / Website Maintenance",
    items: [
      { name: "Basic", amount: "7,500", unit: "/ Month" },
      { name: "Standard", amount: "15,000", unit: "/ Month" },
      { name: "Premium", amount: "30,000", unit: "/ Month" },
      { name: "Custom", quote: "Quotation" },
    ],
    note: "Hosting/domain charges may be separate depending on requirements.",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    items: [
      { name: "Basic", amount: "800,000", from: true },
      { name: "Standard", amount: "1,800,000", from: true },
      { name: "Premium", amount: "3,500,000+" },
      { name: "Custom", quote: "Quotation" },
    ],
    note: "Price depends on: features, UI/UX, database, authentication, admin panel, integrations.",
  },
  {
    id: "lms-online-class",
    title: "LMS / Online Class",
    items: [
      { name: "Basic", amount: "450,000", from: true },
      { name: "Standard", amount: "1,200,000", from: true },
      { name: "Premium", amount: "2,500,000+" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "ai-business-automation",
    title: "AI / Business Automation",
    items: [
      { name: "Basic", amount: "75,000", from: true },
      { name: "Standard", amount: "250,000", from: true },
      { name: "Premium", amount: "750,000+" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "whatsapp-telegram-bot",
    title: "WhatsApp / Telegram Bot",
    items: [
      { name: "Basic", amount: "75,000", from: true },
      { name: "Standard", amount: "150,000", from: true },
      { name: "Advanced", amount: "300,000+" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "pos-system",
    title: "POS System",
    items: [
      { name: "Basic", amount: "150,000", from: true },
      { name: "Standard", amount: "350,000", from: true },
      { name: "Premium", amount: "750,000+" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "inventory-system",
    title: "Inventory System",
    items: [
      { name: "Basic", amount: "200,000", from: true },
      { name: "Standard", amount: "450,000", from: true },
      { name: "Premium", amount: "900,000+" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "customer-management-system",
    title: "Customer Management System",
    items: [
      { name: "Basic", amount: "250,000", from: true },
      { name: "Standard", amount: "550,000", from: true },
      { name: "Premium", amount: "1,200,000+" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    items: [
      { name: "Basic", amount: "250,000", from: true },
      { name: "Standard", amount: "550,000", from: true },
      { name: "Premium", amount: "1,200,000+" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "business-dashboard",
    title: "Business Dashboard",
    items: [
      { name: "Basic", amount: "150,000", from: true },
      { name: "Standard", amount: "350,000", from: true },
      { name: "Premium", amount: "750,000+" },
      { name: "Custom", quote: "Quotation" },
    ],
  },
  {
    id: "qr-digital-business-materials",
    title: "QR / Digital Business Materials",
    items: [
      { name: "QR Design", amount: "5,000" },
      { name: "QR Business Card", amount: "10,000" },
      { name: "QR + Digital Menu", amount: "15,000" },
      { name: "Digital Business Profile", amount: "25,000" },
    ],
  },
  {
    id: "extra-services",
    title: "Extra Services",
    items: [
      { name: "Extra Revision", amount: "3,500" },
      { name: "Extra Graphic", amount: "3,500", from: true },
      { name: "Extra Location", amount: "7,500", from: true },
      { name: "Extra Shooting Hour", amount: "12,500" },
      { name: "Extra Reel", amount: "12,500", from: true },
    ],
  },
];

export const priceNotes: string[] = [
  "Prices marked “From” are starting prices.",
  "Final price depends on project requirements.",
  "Drone, actors, travel and special equipment may have additional charges.",
  "Advertising budget is separate from management fees.",
  "Domain/hosting/API/third-party software costs may be separate.",
  "Custom projects receive a quotation after requirements are confirmed.",
  "Payment terms depend on the project.",
  "Advance payment may be required before production/development starts.",
];

export interface CatalogImage {
  file: string;
  title: string;
}

export const catalogImages: CatalogImage[] = [
  { file: "/images/catalog/01-videos.png", title: "Business Promotional Videos" },
  { file: "/images/catalog/02-reels.png", title: "Reels / Short Videos" },
  { file: "/images/catalog/03-social.png", title: "Social Media Management" },
  { file: "/images/catalog/04-design.png", title: "Graphic Design" },
  { file: "/images/catalog/05-logo.png", title: "Logo & Branding" },
  { file: "/images/catalog/06-website.png", title: "Website Development" },
  { file: "/images/catalog/07-ecommerce-app.png", title: "E-Commerce + Mobile App" },
  { file: "/images/catalog/08-lms-ai-bots.png", title: "LMS + AI Automation + Bots" },
  { file: "/images/catalog/09-systems-photo.png", title: "Business Systems + Photography" },
  { file: "/images/catalog/10-talent-editing.png", title: "Actor/Model + Voice-Over + Editing" },
  { file: "/images/catalog/11-ads-platforms-uiux.png", title: "Ads + YouTube + TikTok + UI/UX" },
  { file: "/images/catalog/12-hosting-digital.png", title: "Hosting + QR & Digital + FB/IG + Extra" },
  { file: "/images/catalog/13-boosting-trading.png", title: "Content Creation + Drone Promotion" },
  { file: "/images/catalog/14-branding-package.png", title: "Business Branding Package" },
  { file: "/images/catalog/15-launch-package.png", title: "Enterprise Systems Overview" },
  { file: "/images/catalog/16-custom-notes.png", title: "Custom Package + Important Notes" },
];
