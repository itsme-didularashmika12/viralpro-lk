import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8B0A13",
};

export const metadata: Metadata = {
  title: "ViralPro LK | Digital Services & Business Promotion in Anuradhapura",
  description:
    "ViralPro LK provides business promotion videos, social media, graphic design, websites, apps, business systems, automation and digital solutions for businesses in Anuradhapura and across Sri Lanka.",
  keywords: [
    "Anuradhapura business promotion",
    "business promotional video",
    "social media marketing Anuradhapura",
    "website development Anuradhapura",
    "graphic design Anuradhapura",
    "digital services Sri Lanka",
    "business video promotion",
    "POS systems Sri Lanka",
    "business automation Sri Lanka",
    "ViralPro LK",
  ],
  authors: [{ name: "ViralPro LK" }],
  creator: "ViralPro LK",
  publisher: "ViralPro LK",
  metadataBase: new URL("https://viralpro-lk.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ViralPro LK | Digital Services & Business Promotion in Anuradhapura",
    description:
      "ViralPro LK provides business promotion videos, social media, graphic design, websites, apps, business systems, automation and digital solutions for businesses in Anuradhapura and across Sri Lanka.",
    url: "https://viralpro-lk.vercel.app",
    siteName: "ViralPro LK",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: "/images/hero-production.jpg",
        width: 1200,
        height: 630,
        alt: "ViralPro LK - Business Promotion & Digital Services in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ViralPro LK | Digital Services & Business Promotion in Anuradhapura",
    description:
      "ViralPro LK provides business promotion videos, social media, graphic design, websites, apps, business systems, automation and digital solutions for businesses in Anuradhapura and across Sri Lanka.",
    images: ["/images/hero-production.jpg"],
    creator: "@viralprolk",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brand.name,
    image: "https://viralpro-lk.vercel.app/images/hero-production.jpg",
    telephone: siteConfig.brand.phoneInternational,
    url: "https://viralpro-lk.vercel.app",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anuradhapura",
      addressRegion: "North Central Province",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "8.3114",
      longitude: "80.4037",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "19:00",
      },
    ],
    sameAs: [
      siteConfig.brand.facebookUrl,
      siteConfig.brand.tiktokUrl,
      siteConfig.brand.instagramUrl,
      siteConfig.brand.youtubeUrl,
    ],
    priceRange: "$$",
    description:
      "ViralPro LK provides promotional videos, social media management, graphic design, business websites, mobile applications, and POS systems for businesses in Anuradhapura and across Sri Lanka.",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
