"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function Logo({ className = "", size = 180, interactive = true }: LogoProps) {
  return (
    <div
      className={`relative select-none ${className} ${interactive ? "group cursor-pointer" : ""}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/Logo-1.png"
        alt="AVALOJANDRO Logo"
        width={size}
        height={size}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
        priority
      />
    </div>
  );
}
