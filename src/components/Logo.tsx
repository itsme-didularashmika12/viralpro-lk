import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", className = "", size = "md" }: LogoProps) {
  const isLight = variant === "light";
  
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group transition-transform active:scale-95 ${className}`}>
      {/* Icon Glyph */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#8B0A13] to-[#60050C] text-white shadow-sm shadow-[#8B0A13]/25 transition-transform group-hover:scale-105">
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-current" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
          <path d="M28 30 L50 70 L72 30" />
          <polygon points="50,42 59,57 41,57" fill="#FFFFFF" stroke="none" />
        </svg>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-400 rounded-full animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full border-2 border-[#8B0A13]" />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight text-lg sm:text-xl ${isLight ? "text-white" : "text-neutral-900"}`}>
            ViralPro
          </span>
          <span className="bg-[#8B0A13] text-white text-[10px] sm:text-xs font-black px-1.5 py-0.5 rounded tracking-wider">
            LK
          </span>
        </div>
        <span className={`text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${isLight ? "text-neutral-400" : "text-neutral-500"}`}>
          Digital &amp; Media
        </span>
      </div>
    </Link>
  );
}
