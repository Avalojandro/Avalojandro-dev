"use client";

import React from "react";
import Image from "next/image";
import Sparkle from "./Sparkle";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "frontend" | "fullstack" | "creative";
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card-bg/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-[0_20px_50px_rgba(255,53,53,0.06)] dark:hover:shadow-[0_20px_50px_rgba(255,77,77,0.04)]">
      {/* Background visual grid decoration that reveals on hover */}
      <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

      {/* Image container */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-card-border bg-card-bg/50">
        {/* Subtle sparkle floating on top-left of image on hover */}
        <div className="absolute top-4 left-4 z-10 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 delay-75">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background/95 backdrop-blur-sm border border-brand-red/20 shadow-sm">
            <Sparkle size={14} animate={true} />
          </div>
        </div>

        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={index === 0}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        {/* Category tag */}
        <span className="text-[10px] font-sans font-black tracking-widest text-brand-red uppercase mb-3 block">
          {project.category === "creative" ? "Desarrollo Creativo" : project.category === "frontend" ? "Frontend UI" : "Fullstack"}
        </span>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground group-hover:text-brand-red transition-colors duration-300 mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm leading-relaxed text-foreground/75 mb-6 flex-grow">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto border-t border-card-border/60 pt-6">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-sans font-black tracking-wider uppercase text-foreground hover:text-brand-red transition-colors duration-300 group/link cursor-pointer"
            >
              View Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-sans font-black tracking-wider uppercase text-foreground/60 hover:text-brand-red transition-colors duration-300 cursor-pointer"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
