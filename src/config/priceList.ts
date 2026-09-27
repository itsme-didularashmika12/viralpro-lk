/* ============================================================
   ViralPro LK — Complete Price List (source of truth)
   Transcribed verbatim from the official price sheet (2026-09-27).
   Do not alter prices, package names or "From" prefixes.
   ============================================================ */

export interface PriceItem {
  name: string;
  /** Amount without "Rs." — e.g. "7,500", "100,000+" */
  amount?: string;
  from?: boolean;
  unit?: string; // e.g. "/ Month"
  quote?: string; // e.g. "Quote", "Quote after requirements"
}

export interface PriceCategory {
  id: string;
  title: string;
  items: PriceItem[];
  note?: string;
}

export const priceList: PriceCategory[] = [
  {
    id: "videos",
    title: "Business Promotional Videos",
    items: [
      { name: "Starter Video", amount: "7,500" },
      { name: "Business Video", amount: "12,500" },
      { name: "Premium Video", amount: "20,000" },
    ],
  },
  {
    id: "drone",
    title: "Drone Promotion",
    items: [{ name: "Drone Add-On", amount: "5,000", from: true }],
    note: "Drone availability depends on location, weather and project requirements.",
  },
  {
    id: "reels",
    title: "Reels / Short Videos",
    items: [
      { name: "1 Reel", amount: "2,500" },
      { name: "5 Reels", amount: "10,000" },
      { name: "10 Reels", amount: "18,000" },
      { name: "20 Reels", amount: "32,000" },
    ],
    note: "Includes: short-form editing, captions, music, SFX, social-media optimization.",
  },
  {
    id: "social",
    title: "Social Media Management",
    items: [
      { name: "Starter", amount: "5,000", unit: "/ Month" },
      { name: "Business", amount: "8,500", unit: "/ Month" },
      { name: "Premium", amount: "15,000", unit: "/ Month" },
    ],
  },
  {
    id: "design",
    title: "Graphic Design",
    items: [
      { name: "Social Media Post", amount: "750" },
      { name: "5 Posts", amount: "3,000" },
      { name: "10 Posts", amount: "5,500" },
      { name: "20 Posts", amount: "10,000" },
      { name: "Poster / Flyer", amount: "1,000", from: true },
      { name: "Banner Design", amount: "1,500", from: true },
      { name: "Menu Design", amount: "2,000", from: true },
      { name: "Business Card", amount: "1,000", from: true },
      { name: "Brochure", amount: "2,500", from: true },
    ],
  },
  {
    id: "logo",
    title: "Logo & Branding",
    items: [
      { name: "Basic Logo", amount: "2,500" },
      { name: "Pro Logo", amount: "5,000" },
      { name: "Premium Branding", amount: "10,000" },
    ],
  },
  {
    id: "web",
    title: "Website Development",
    items: [
      { name: "Starter Website", amount: "15,000", from: true },
      { name: "Business Website", amount: "25,000", from: true },
      { name: "Premium Website", amount: "40,000", from: true },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    items: [
      { name: "Starter Shop", amount: "30,000", from: true },
      { name: "Business Shop", amount: "50,000", from: true },
    ],
  },
  {
    id: "apps",
    title: "Mobile App Development",
    items: [
      { name: "Basic App", amount: "35,000", from: true },
      { name: "Business App", amount: "60,000", from: true },
      { name: "Custom App", amount: "100,000+", from: true },
    ],
    note: "Price depends on: features, UI/UX, database, authentication, admin panel, integrations.",
  },
  {
    id: "lms",
    title: "LMS / Online Class System",
    items: [
      { name: "Starter LMS", amount: "25,000", from: true },
      { name: "Business LMS", amount: "50,000", from: true },
      { name: "Custom LMS", amount: "100,000+", from: true },
    ],
  },
  {
    id: "ai",
    title: "AI & Business Automation",
    items: [
      { name: "Basic Automation", amount: "5,000", from: true },
      { name: "Business Automation", amount: "15,000", from: true },
      { name: "Custom AI System", amount: "30,000+", from: true },
    ],
  },
  {
    id: "bots",
    title: "WhatsApp / Telegram Bots",
    items: [
      { name: "Basic Bot", amount: "7,500", from: true },
      { name: "Business Bot", amount: "15,000", from: true },
      { name: "Custom Bot", amount: "30,000+", from: true },
    ],
  },
  {
    id: "systems",
    title: "Business Systems",
    items: [
      { name: "POS System", amount: "25,000", from: true },
      { name: "Inventory System", amount: "20,000", from: true },
      { name: "Customer Management", amount: "20,000", from: true },
      { name: "Employee Management", amount: "20,000", from: true },
      { name: "Business Dashboard", amount: "25,000", from: true },
      { name: "Custom Business System", quote: "Quote after requirements" },
    ],
  },
  {
    id: "photo",
    title: "Photography",
    items: [
      { name: "Basic Session", amount: "5,000" },
      { name: "Business Photography", amount: "10,000" },
      { name: "Premium Business Shoot", amount: "15,000", from: true },
    ],
  },
  {
    id: "actors",
    title: "Actor / Model",
    items: [
      { name: "Actor / Model", amount: "2,500", from: true },
      { name: "2 Actors", amount: "4,500", from: true },
      { name: "3 Actors", amount: "6,000", from: true },
    ],
    note: "Availability depends on project and date.",
  },
  {
    id: "voiceover",
    title: "Voice-Over",
    items: [
      { name: "Basic Voice-Over", amount: "1,500" },
      { name: "Professional Voice-Over", amount: "3,000" },
      { name: "Custom Voice-Over", amount: "5,000", from: true },
    ],
  },
  {
    id: "editing",
    title: "Video Editing",
    items: [
      { name: "Short Video", amount: "1,500" },
      { name: "Reel", amount: "2,500" },
      { name: "Promotional Video", amount: "5,000", from: true },
      { name: "Advanced Commercial Edit", amount: "10,000", from: true },
    ],
  },
  {
    id: "ads",
    title: "Facebook / Instagram Ads",
    items: [
      { name: "Ads Setup", amount: "2,500" },
      { name: "Ads Management", amount: "5,000", from: true, unit: "/ Month" },
      { name: "Campaign Management", amount: "7,500", from: true },
    ],
    note: "Advertising budget is paid separately by the client.",
  },
  {
    id: "youtube",
    title: "YouTube Services",
    items: [
      { name: "Video Editing", amount: "2,500", from: true },
      { name: "Thumbnail", amount: "750" },
      { name: "Channel Setup", amount: "2,500" },
      { name: "Channel Management", amount: "7,500", from: true, unit: "/ Month" },
    ],
  },
  {
    id: "tiktok",
    title: "TikTok Services",
    items: [
      { name: "1 Video", amount: "2,000" },
      { name: "5 Videos", amount: "8,500" },
      { name: "10 Videos", amount: "15,000" },
      { name: "TikTok Management", amount: "7,500", from: true, unit: "/ Month" },
    ],
  },
  {
    id: "uiux",
    title: "UI / UX Design",
    items: [
      { name: "Basic UI Design", amount: "5,000", from: true },
      { name: "Website UI/UX", amount: "10,000", from: true },
      { name: "App UI/UX", amount: "15,000", from: true },
      { name: "Custom UI/UX", quote: "Quote" },
    ],
  },
  {
    id: "hosting",
    title: "Hosting & Website Maintenance",
    items: [
      { name: "Basic Maintenance", amount: "2,500", from: true, unit: "/ Month" },
      { name: "Business Maintenance", amount: "5,000", from: true, unit: "/ Month" },
      { name: "Custom Support", quote: "Quote" },
    ],
    note: "Hosting/domain charges may be separate depending on requirements.",
  },
  {
    id: "qr",
    title: "QR & Digital Business Materials",
    items: [
      { name: "QR Code Design", amount: "750" },
      { name: "Digital Menu", amount: "2,500", from: true },
      { name: "Digital Business Card", amount: "1,500" },
      { name: "Link Page", amount: "2,500", from: true },
      { name: "Custom Digital Material", quote: "Quote" },
    ],
  },
  {
    id: "book",
    title: "Book / PDF Design",
    items: [
      { name: "Basic PDF Design", amount: "2,500", from: true },
      { name: "Book Design", amount: "5,000", from: true },
      { name: "Premium Book Design", amount: "10,000", from: true },
    ],
    note: "Price depends on: number of pages, design complexity, images, formatting requirements.",
  },
  {
    id: "cv",
    title: "CV & Document Design",
    items: [
      { name: "Basic CV", amount: "750" },
      { name: "Professional CV", amount: "1,500" },
      { name: "Premium CV", amount: "2,500" },
    ],
  },
  {
    id: "boosting",
    title: "Social Media Boosting",
    items: [{ name: "TikTok / Facebook / Instagram / YouTube", quote: "Custom quote available" }],
    note: "Price depends on: platform, service, quantity, delivery requirements.",
  },
  {
    id: "indicators",
    title: "Trading Indicators",
    items: [
      { name: "Custom Indicator", amount: "5,000", from: true },
      { name: "Advanced Indicator", amount: "10,000", from: true },
      { name: "Custom Trading Tool", quote: "Quote" },
    ],
  },
  {
    id: "autotrade",
    title: "Auto Trade Bots",
    items: [
      { name: "Basic Bot", amount: "15,000", from: true },
      { name: "Advanced Bot", amount: "30,000", from: true },
      { name: "Custom Bot", amount: "50,000+", from: true },
    ],
    note: "Price depends on: strategy, platform, broker/API, risk controls, automation requirements.",
  },
  {
    id: "branding-pkg",
    title: "Business Branding Package",
    items: [
      { name: "Starter", amount: "7,500" },
      { name: "Business", amount: "15,000" },
      { name: "Premium", amount: "30,000" },
    ],
  },
  {
    id: "launch-pkg",
    title: "Business Launch Package",
    items: [
      { name: "Starter", amount: "25,000" },
      { name: "Growth", amount: "40,000" },
      { name: "Premium", amount: "65,000+" },
    ],
  },
  {
    id: "custom",
    title: "Custom Business Package",
    items: [{ name: "Combine any services into your own package", quote: "Contact us for a custom quotation" }],
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
  { file: "/images/catalog/12-hosting-digital.png", title: "Hosting + QR & Digital + Book/PDF + CV" },
  { file: "/images/catalog/13-boosting-trading.png", title: "Boosting + Trading + Auto Trade Bots" },
  { file: "/images/catalog/14-branding-package.png", title: "Business Branding Package" },
  { file: "/images/catalog/15-launch-package.png", title: "Business Launch Package" },
  { file: "/images/catalog/16-custom-notes.png", title: "Custom Package + Important Notes" },
];
