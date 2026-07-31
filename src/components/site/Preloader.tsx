import { motion } from "motion/react";
import { BRAND } from "@/lib/site";

interface PreloaderProps {
  progress: number;
}

export function Preloader({ progress }: PreloaderProps) {
  // Split brand name for styled display
  // BRAND.name is "RR Heaven Gardenblr"
  const titleText = "RR HEAVEN";
  const subText = "GARDENBLR";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F7F6F3] overflow-hidden"
    >
      {/* Concentric faint background circles matching the image */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[350px] h-[350px] rounded-full border border-forest/[0.03] absolute" />
        <div className="w-[550px] h-[550px] rounded-full border border-forest/[0.02] absolute" />
        <div className="w-[750px] h-[750px] rounded-full border border-forest/[0.015] absolute" />
        <div className="w-[950px] h-[950px] rounded-full border border-forest/[0.01] absolute" />
        <div className="w-[1150px] h-[1150px] rounded-full border border-forest/[0.005] absolute" />
      </div>

      {/* Main interactive animation region */}
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        
        {/* SVG Orbiting system */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 280 280">
          <defs>
            {/* Red glowing dot filter */}
            <filter id="glow-rose" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Green glowing dot filter for subtle premium lighting */}
            <filter id="glow-forest" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Inner static/slow dashed circle */}
          <circle
            cx="140"
            cy="140"
            r="92"
            fill="none"
            stroke="#143A2C"
            strokeOpacity="0.08"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          
          {/* Middle Group: Rotates Clockwise (Solid green arc + Green dot) */}
          <g className="animate-spin-slow transform-origin-center-svg">
            {/* 220 degree arc at radius 106. Circumference is 2 * pi * 106 = 666 */}
            <circle
              cx="140"
              cy="140"
              r="106"
              fill="none"
              stroke="#143A2C"
              strokeWidth="2"
              strokeDasharray="420 666"
              strokeDashoffset="120"
              strokeLinecap="round"
            />
            {/* Green dot at end of arc (angle 0 corresponds to cx=246, cy=140) */}
            <circle
              cx="246"
              cy="140"
              r="6.5"
              fill="#143A2C"
              filter="url(#glow-forest)"
            />
            <circle
              cx="246"
              cy="140"
              r="4.5"
              fill="#0F2E22"
            />
          </g>

          {/* Outer Group: Rotates Counter-Clockwise (Dotted path + Rose/Red dot) */}
          <g className="animate-spin-reverse-slow transform-origin-center-svg">
            <circle
              cx="140"
              cy="140"
              r="122"
              fill="none"
              stroke="#143A2C"
              strokeOpacity="0.12"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            {/* Outer pink glow area */}
            <circle
              cx="262"
              cy="140"
              r="8"
              fill="#F43F5E"
              fillOpacity="0.25"
            />
            {/* Glowing Red Dot */}
            <circle
              cx="262"
              cy="140"
              r="5"
              fill="#F43F5E"
              filter="url(#glow-rose)"
            />
          </g>
        </svg>

        {/* Central Square Box containing the Logo */}
        <div className="w-[160px] h-[160px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(20,58,44,0.06)] border border-neutral-100 flex items-center justify-center relative z-10 p-5 select-none">
          <img
            src="/logo.png"
            alt={BRAND.name}
            className="max-w-full max-h-full object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Typography & Brand Slogan */}
      <div className="text-center mt-6 z-10 px-5 flex flex-col items-center">
        {/* Title: RR HEAVEN */}
        <h1 className="font-display font-bold text-3xl tracking-[0.18em] text-forest select-none">
          {titleText}
        </h1>

        {/* Separator and Sub-title: GARDENBLR */}
        <div className="flex items-center gap-4 w-full max-w-[280px] justify-center mt-3.5">
          <div className="h-[1px] bg-forest/15 flex-grow" />
          <span className="font-mono text-[0.72rem] tracking-[0.25em] text-[#143A2C] font-semibold select-none">
            {subText}
          </span>
          <div className="h-[1px] bg-forest/15 flex-grow" />
        </div>

        {/* Tagline slogan */}
        <p className="text-neutral-400 font-sans text-xs tracking-wider mt-2.5 max-w-[320px] select-none">
          {BRAND.tagline}
        </p>

        {/* Loading Progress Bar */}
        <div className="w-56 h-[3px] bg-neutral-200/50 rounded-full overflow-hidden mt-8">
          <div
            className="h-full bg-forest rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
