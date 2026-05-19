"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = "Before branding",
  afterLabel = "After Falsafi Touch",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only move if mouse is clicked & dragged, or simply moving on hover to be super fluid
    if (e.buttons === 1 || e.buttons === 0) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-800 select-none cursor-ew-resize group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        {/* After Image (Full width background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
        <div className="absolute top-4 right-4 bg-brand text-black font-body text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-lg shadow-brand/20">
          {afterLabel}
        </div>

        {/* Before Image (Clipping width based on slider position) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden z-10"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-y-0 left-0 w-[100vw] h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
          <div className="absolute top-4 left-4 bg-zinc-900 border border-zinc-800 text-white font-body text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-xl">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Line Divider */}
        <div
          className="absolute inset-y-0 z-20 w-1 bg-white hover:bg-brand cursor-ew-resize shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:bg-brand transition-colors duration-200"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Grab Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-950 border border-zinc-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center text-white group-hover:text-brand group-hover:border-brand transition-all duration-300">
            <span className="text-xs font-bold tracking-tight">↔</span>
          </div>
        </div>
      </div>
      <p className="text-center font-body text-xs text-zinc-500 italic">
        Hover or drag sliders to see transformation
      </p>
    </div>
  );
}
