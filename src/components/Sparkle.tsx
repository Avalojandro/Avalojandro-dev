"use client";

import React from "react";

interface SparkleProps {
  className?: string;
  size?: number;
  colorClass?: string; // e.g. "text-brand-red", "text-white"
  strokeClass?: string;
  animate?: boolean;
  delay?: string;
}

export default function Sparkle({
  className = "",
  size = 24,
  colorClass = "fill-brand-red",
  strokeClass = "stroke-brand-red",
  animate = true,
  delay = "0s",
}: SparkleProps) {
  // SVG path for a mathematically centered 4-pointed star inside a 100x100 box:
  // Center is at (50, 50).
  // Tips: Top (50, 5), Right (95, 50), Bottom (50, 95), Left (5, 50).
  // Control point for curve is the center (50, 50).
  const starPath = "M 50,5 Q 50,50 95,50 Q 50,50 50,95 Q 50,50 5,50 Q 50,50 50,5 Z";

  return (
    <svg
      viewBox="0 0 100 100"
      className={`select-none ${colorClass} ${strokeClass} ${className} ${
        animate ? "animate-sparkle-pulse" : ""
      }`}
      style={{
        width: size,
        height: size,
        animationDelay: delay,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={starPath}
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
