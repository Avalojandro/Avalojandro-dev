"use client";

import React, { useState } from "react";
import Sparkle from "./Sparkle";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead Frontend Engineer",
    company: "Spark Digital",
    period: "2024 — Present",
    location: "Madrid / Remote",
    description: "Here I lead the development of our web interfaces using Next.js and React. In addition to software architecture, I spend my time mentoring other developers and refining our design system with Tailwind CSS v4 to build fast, accessible components.",
  },
  {
    id: "exp-2",
    role: "Senior Frontend Developer",
    company: "Kreative Studio",
    period: "2022 — 2024",
    location: "Barcelona / Hybrid",
    description: "I focused on high-performance creative development. I built interactive web experiences using Framer Motion animations and subtle 3D prototypes. I also optimized web performance metrics (Core Web Vitals) for global e-commerce platforms.",
  },
  {
    id: "exp-3",
    role: "UI Developer & Designer",
    company: "Pixel Agency",
    period: "2020 — 2022",
    location: "Valencia / On-site",
    description: "I worked as a bridge between visual design and code. My role was to craft responsive layouts and build reusable component libraries with JavaScript and React. I also migrated traditional legacy websites to fast static architectures.",
  },
];

export default function ExperienceTimeline() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="relative border-l border-card-border/80 pl-6 sm:pl-10 ml-4 py-4 space-y-8">
      {experiences.map((exp) => {
        const isActive = activeItem === exp.id;

        return (
          <div
            key={exp.id}
            className="relative group transition-all duration-300"
            onMouseEnter={() => setActiveItem(exp.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 z-10 flex h-6 w-6 items-center justify-center transition-transform duration-300 group-hover:scale-125">
              {isActive ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-background border border-brand-red shadow-[0_0_12px_rgba(255,53,53,0.4)]">
                  <Sparkle size={10} animate={true} />
                </div>
              ) : (
                <div className="h-3.5 w-3.5 rounded-full bg-card-border border-2 border-background transition-colors duration-300 group-hover:bg-brand-red group-hover:border-brand-red" />
              )}
            </div>

            {/* Glowing line overlay */}
            <div
              className={`absolute -left-[31px] sm:-left-[47px] top-7 bottom-0 w-0.5 bg-brand-red transition-all duration-500 origin-top ${
                isActive ? "h-full opacity-100 scale-y-100" : "h-0 opacity-0 scale-y-0"
              }`}
            />

            {/* Experience Content Box */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-400 ${
                isActive
                  ? "bg-card-bg/40 border-brand-red/20 shadow-[0_15px_30px_rgba(255,53,53,0.01)] translate-x-1"
                  : "bg-transparent border-transparent"
              }`}
            >
              {/* Header info */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h4 className="font-sans text-lg sm:text-xl font-bold text-foreground">
                    {exp.role}
                  </h4>
                  <span className="font-serif text-md sm:text-lg italic text-foreground/80 font-normal">
                    at {exp.company}
                  </span>
                </div>
                
                {/* Period & Location */}
                <div className="text-left sm:text-right">
                  <span className="font-mono text-xs font-black tracking-wider text-brand-red block uppercase">
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-sans font-semibold text-foreground/50 block">
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Narrated description */}
              <p className="font-sans text-sm leading-relaxed text-foreground/80">
                {exp.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
