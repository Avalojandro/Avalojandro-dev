"use client";

import { useEffect, useState } from "react";
import Sparkle from "./Sparkle";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const activeTheme = savedTheme || systemTheme;
    setTheme(activeTheme);
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return <div className="w-12 h-12" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-card-border bg-card-bg/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 hover:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red cursor-pointer"
    >
      <Sparkle
        size={22}
        colorClass={theme === "light" ? "fill-brand-red" : "fill-foreground"}
        strokeClass={theme === "light" ? "stroke-brand-red" : "stroke-foreground"}
        animate={false}
        className="transition-transform duration-500 ease-out group-hover:rotate-90"
      />
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-sans font-black tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase text-foreground">
        {theme === "light" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
