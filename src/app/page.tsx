"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";
import Sparkle from "@/components/Sparkle";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectCard, { Project } from "@/components/ProjectCard";
import LogoSecondary from "@/components/LogoSecondary";

const projectsData: Project[] = [
  {
    id: "proj-cattocss",
    title: "cattocss",
    description: "A lightweight, playful CSS animation library for the web. No JavaScript bloat: just clean utility classes to bring interfaces to life with smooth, customizable micro-animations.",
    category: "creative",
    tags: ["CSS3", "PostCSS", "Web Animation", "Tailwind CSS"],
    image: "/project_cattocss.png",
    demoUrl: "https://cattocss.dev",
    githubUrl: "https://github.com/Avalojandro/cattocss"
  },
  {
    id: "proj-mipostalsv",
    title: "Mi Postal SV",
    description: "A fast, searchable reference website to look up postal codes for all departments and districts in El Salvador. Built with static JSON data for instant responses and responsive UI.",
    category: "frontend",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/project_mipostalsv.png",
    demoUrl: "https://mipostalsv.com",
    githubUrl: "https://github.com/Avalojandro/mipostalsv"
  },
  {
    id: "proj-renderify",
    title: "renderify",
    description: "A clean React library package to conditionally render elements on the screen. Prevents code clutter by replacing messy ternary operators with clean, readable structural components.",
    category: "frontend",
    tags: ["React", "TypeScript", "NPM Package", "Rollup"],
    image: "/project_renderify.png",
    demoUrl: "https://npmjs.com/package/renderify",
    githubUrl: "https://github.com/Avalojandro/renderify"
  }
];

const toolkit = [
  "Semantic HTML & CSS", "CSS Grid & Flexbox", "Next.js", "React 19", "TypeScript",
  "Tailwind CSS v4", "Zustand", "Framer Motion", "D3.js / SVG Art", "Canvas API",
  "Core Web Vitals", "Git / GitHub Workflow"
];

const randomFacts = [
  { emoji: "☕", title: "Specialty Coffee", desc: "Big fan of good coffee. My mornings always start with a clean cup of V60 filter or Aeropress." },
  { emoji: "⌨️", title: "Custom Keyboards", desc: "I love soldering my own mechanical keyboards. The tactile switch clicks are my default coding soundtrack." },
  { emoji: "🎨", title: "CSS Experiments", desc: "Always looking for fun ways to break the grid layout, draw weird shapes, and play with custom CSS animations." },
  { emoji: "🏔️", title: "Hiking outdoors", desc: "When I turn off the screen, you will find me outdoors hiking and exploring new mountain trails." }
];

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;
    
    if (href === "#hero" || href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#");
    } else {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground bg-grid-pattern grainy-noise transition-colors duration-400">

      {/* Dynamic background lighting points */}
      <div className="absolute top-[15%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-brand-red/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-brand-red/5 blur-[150px] pointer-events-none" />

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 w-full border-b border-card-border/40 bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex max-w-6xl h-20 items-center justify-between px-6 sm:px-8">
          {/* Navigation Links and Theme Toggle */}
          <nav className="flex items-center justify-between w-full">
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href="#proyectos"
                onClick={handleScroll}
                className="text-xs font-sans font-black tracking-wider uppercase hover:text-brand-red transition-colors duration-300 cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#intereses"
                onClick={handleScroll}
                className="text-xs font-sans font-black tracking-wider uppercase hover:text-brand-red transition-colors duration-300 cursor-pointer"
              >
                Interests
              </a>
              <a
                href="#contacto"
                onClick={handleScroll}
                className="text-xs font-sans font-black tracking-wider uppercase hover:text-brand-red transition-colors duration-300 cursor-pointer"
              >
                Contact
              </a>
            </div>

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative mx-auto max-w-4xl px-6 sm:px-8 pt-20 pb-24 sm:py-32 flex flex-col items-center text-center gap-12"
      >
        {/* Big Interactive Logo Representation - Centered on top */}
        <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80">
          {/* Subtle rotation border ring */}
          <div className="absolute inset-0 rounded-full border border-card-border border-dashed animate-[spin_60s_linear_infinite] opacity-50" />

          <Logo size={240} className="sm:scale-110" />

          {/* Float Sparkles decoration */}
          <div className="absolute -top-3 -right-1">
            <Sparkle size={18} delay="1s" className="text-brand-red" />
          </div>
          <div className="absolute -bottom-4 -left-2">
            <Sparkle size={14} delay="0.5s" className="text-brand-red" />
          </div>
        </div>

        {/* Text underneath the logo */}
        <div className="space-y-6 max-w-2xl flex flex-col items-center">
          {/* Sparkle decorative tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-red/20 bg-brand-red/5 text-brand-red">
            <Sparkle size={10} animate={true} />
            <span className="font-sans text-[9px] font-black tracking-widest uppercase">
              coding fun
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] font-normal leading-[1.1] tracking-tight text-foreground">
            Hey! I'm <span className="italic text-brand-red font-medium">Avalojandro</span>.
          </h1>

          {/* Subheading description */}
          <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed max-w-xl">
            Just a developer who loves experimenting, taking on new challenges, and is passionate about gaming and music.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
            <a
              href="#proyectos"
              onClick={handleScroll}
              className="w-full sm:w-auto flex items-center justify-center h-11 px-6 rounded-full bg-brand-red text-white text-xs font-sans font-black tracking-widest uppercase shadow-sm hover:bg-brand-red-hover hover:shadow-[0_10px_20px_rgba(255,53,53,0.15)] transition-all duration-300 cursor-pointer"
            >
              My Projects
            </a>
            <a
              href="#contacto"
              onClick={handleScroll}
              className="w-full sm:w-auto flex items-center justify-center h-11 px-6 rounded-full border border-card-border hover:border-brand-red bg-card-bg/25 backdrop-blur-sm text-foreground text-xs font-sans font-black tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO / PROJECTS SECTION */}
      <section id="proyectos" className="border-t border-card-border/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          {/* Header */}
          <div className="mb-12 text-left">
            <span className="text-[9px] font-sans font-black tracking-widest text-brand-red uppercase mb-2.5 block">
              What I've Built
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
              Projects made with <span className="italic font-medium text-brand-red">care</span>
            </h2>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERESTS / HOBBIES SECTION */}
      <section id="intereses" className="border-t border-card-border/40 py-20 sm:py-28 bg-card-bg/10">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-lg mx-auto mb-16">
            <span className="text-[9px] font-sans font-black tracking-widest text-brand-red uppercase mb-2 block">
              Behind the screen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
              Interests & <span className="italic font-medium text-brand-red">Passions</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed mt-3">
              When I'm not coding web layouts or designing interfaces, here is what I'm usually up to.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Drums Card */}
            <div className="p-6 rounded-2xl border border-card-border/80 bg-background/50 hover:border-brand-red/20 transition-all duration-300 group">
              <div className="flex gap-2.5 mb-4">
                <span className="text-4xl block group-hover:scale-110 transition-transform duration-300 origin-left">
                  🥁
                </span>
                <span className="text-4xl block group-hover:scale-110 transition-transform duration-300 origin-left [transition-delay:75ms]">
                  🎧
                </span>
              </div>
              <h4 className="font-sans text-sm font-bold text-foreground mb-2 group-hover:text-brand-red transition-colors duration-300">
                Playing Drums
              </h4>
              <p className="font-sans text-xs leading-relaxed text-foreground/75">
                I love playing the drums. Keeping the rhythm and jam sessions are my favorite ways to disconnect from the screen.
              </p>
            </div>

            {/* Gaming & Zelda Card */}
            <div className="p-6 rounded-2xl border border-card-border/80 bg-background/50 hover:border-brand-red/20 transition-all duration-300 group">
              <div className="flex gap-2.5 mb-4">
                <span className="text-4xl block group-hover:scale-110 transition-transform duration-300 origin-left">
                  🎮
                </span>
                <span className="text-4xl block group-hover:scale-110 transition-transform duration-300 origin-left [transition-delay:75ms]">
                  ⚔️
                </span>
              </div>
              <h4 className="font-sans text-sm font-bold text-foreground mb-2 group-hover:text-brand-red transition-colors duration-300">
                Gaming & The Legend of Zelda
              </h4>
              <p className="font-sans text-xs leading-relaxed text-foreground/75">
                Passionate about video games, with **The Legend of Zelda** being my absolute favorite saga. I love exploring immersive stories, analyzing game UI/UX, and drawing constant creative inspiration from Hyrule's lore, art style, and music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME & SKILLS SECTION (Temporarily Disabled) */}
      {false && (
        <section id="sobre-mi" className="border-t border-card-border/40 py-20 sm:py-28 bg-card-bg/10">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Biography */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-[9px] font-sans font-black tracking-widest text-brand-red uppercase mb-2 block">
                  A bit about me
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground leading-[1.15]">
                  I believe in clean code, <span className="italic text-brand-red font-medium">fluid experiences</span>, and purposeful interactions.
                </h2>

                <p className="font-sans text-sm text-foreground/80 leading-relaxed pt-1">
                  Frontend is not just about making code compile; it's about making navigation feel good. As an independent developer, I love designing the tiny details: the smoothness of a scroll, the tactile response of a button press, and blazing-fast page load times.
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="h-0.5 w-8 bg-brand-red" />
                  <span className="font-serif text-lg italic text-foreground/80">
                    Alex
                  </span>
                </div>
              </div>

              {/* Toolkit list */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-sans text-[10px] font-black tracking-widest uppercase text-foreground/60">
                  My Toolkit
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {toolkit.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-sans font-bold px-4 py-2.5 rounded-xl border border-card-border bg-card-bg/30 text-foreground/90 transition-all duration-300 hover:border-brand-red hover:text-brand-red hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Random Facts */}
            <div className="border-t border-card-border/40 pt-16">
              <h3 className="font-sans text-[10px] font-black tracking-widest uppercase text-foreground/60 text-center mb-10">
                Off the Screen (Random Facts)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {randomFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-card-border/80 bg-background/50 hover:border-brand-red/20 transition-all duration-300 group"
                  >
                    <span className="text-3xl mb-3.5 block group-hover:scale-110 transition-transform duration-300 origin-left">
                      {fact.emoji}
                    </span>
                    <h4 className="font-sans text-sm font-bold text-foreground mb-1.5 group-hover:text-brand-red transition-colors duration-300">
                      {fact.title}
                    </h4>
                    <p className="font-sans text-xs leading-relaxed text-foreground/75">
                      {fact.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* CONTACT SECTION */}
      <section id="contacto" className="border-t border-card-border/40 py-20 sm:py-28 bg-card-bg/20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center flex flex-col items-center">
          <span className="text-[9px] font-sans font-black tracking-widest text-brand-red uppercase mb-2.5 block">
            Let's Talk
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground leading-[1.15] max-w-2xl">
            Let's stay in <span className="italic font-medium text-brand-red">touch</span>.
          </h2>
          <p className="font-sans text-sm text-foreground/80 leading-relaxed max-w-xl mt-4">
            Always down to chat about frontend engineering, drumming grooves, Zelda lore, or anything in between. Feel free to drop a line or connect on my socials.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 font-sans text-sm">
            <a
              href="mailto:contact@avalojandro.dev"
              className="flex items-center gap-2.5 text-foreground hover:text-brand-red transition-colors duration-300 w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              contact@avalojandro.dev
            </a>
            <div className="flex items-center gap-2.5 text-foreground/70">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              El Salvador
            </div>
          </div>

          {/* Social Networks Links */}
          <div className="flex gap-4 mt-8 justify-center">
            <a
              href="https://github.com/Avalojandro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-background hover:border-brand-red hover:text-brand-red transition-all duration-300 cursor-pointer shadow-sm hover:scale-105"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/avalojandro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-background hover:border-brand-red hover:text-brand-red transition-all duration-300 cursor-pointer shadow-sm hover:scale-105"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@avalojandro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-background hover:border-brand-red hover:text-brand-red transition-all duration-300 cursor-pointer shadow-sm hover:scale-105"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-card-border/40 py-10 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Logo size={28} interactive={false} />
            <span className="font-sans text-[9px] font-black tracking-widest text-foreground/50">
              {new Date().getFullYear()} AVALOJANDRO. MADE WITH LOVE.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#hero"
              onClick={handleScroll}
              className="flex items-center gap-1 text-[9px] font-sans font-black tracking-wider uppercase text-foreground/60 hover:text-brand-red transition-colors duration-300 cursor-pointer"
            >
              Back to Top
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
