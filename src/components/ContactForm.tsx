"use client";

import React, { useState, FormEvent } from "react";
import Sparkle from "./Sparkle";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) return;

    setStatus("submitting");
    
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-brand-red/20 bg-card-bg/20 backdrop-blur-sm max-w-lg mx-auto animate-sparkle-pulse">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 border border-brand-red/20 mb-6">
          <Sparkle size={32} animate={true} />
        </div>
        <h4 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-4">
          Message Received!
        </h4>
        <p className="font-sans text-sm text-foreground/75 leading-relaxed max-w-xs mb-8">
          Thanks for reaching out! I'll get back to you in less than 24 hours to chat about what you have in mind.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-sans text-xs font-black tracking-widest uppercase px-6 py-3 border border-card-border rounded-full hover:border-brand-red hover:text-brand-red transition-all duration-300 cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-8">
      <div className="space-y-6">
        {/* Name input */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={fields.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            required
            className="w-full font-sans bg-transparent border-b border-card-border py-3.5 px-1 text-base text-foreground placeholder-transparent focus:outline-none focus:border-brand-red transition-colors duration-300"
          />
          <label
            htmlFor="name"
            className={`absolute left-1 transition-all duration-300 pointer-events-none font-sans ${
              focusedField === "name" || fields.name
                ? "-top-4 text-xs font-black tracking-wider uppercase text-brand-red"
                : "top-3 text-base text-foreground/40 font-semibold"
            }`}
          >
            What's your name?
          </label>
        </div>

        {/* Email input */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            required
            className="w-full font-sans bg-transparent border-b border-card-border py-3.5 px-1 text-base text-foreground placeholder-transparent focus:outline-none focus:border-brand-red transition-colors duration-300"
          />
          <label
            htmlFor="email"
            className={`absolute left-1 transition-all duration-300 pointer-events-none font-sans ${
              focusedField === "email" || fields.email
                ? "-top-4 text-xs font-black tracking-wider uppercase text-brand-red"
                : "top-3 text-base text-foreground/40 font-semibold"
            }`}
          >
            Where should I reply? (Email)
          </label>
        </div>

        {/* Message input */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={fields.message}
            onChange={handleChange}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            required
            rows={4}
            className="w-full font-sans bg-transparent border-b border-card-border py-3.5 px-1 text-base text-foreground placeholder-transparent focus:outline-none focus:border-brand-red transition-colors duration-300 resize-none"
          />
          <label
            htmlFor="message"
            className={`absolute left-1 transition-all duration-300 pointer-events-none font-sans ${
              focusedField === "message" || fields.message
                ? "-top-4 text-xs font-black tracking-wider uppercase text-brand-red"
                : "top-3 text-base text-foreground/40 font-semibold"
            }`}
          >
            Tell me about your idea or project...
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative flex items-center justify-center w-full h-14 bg-brand-red hover:bg-brand-red-hover disabled:bg-brand-red/50 text-white font-sans text-xs font-black tracking-widest uppercase rounded-full shadow-md transition-all duration-300 hover:shadow-[0_10px_25px_rgba(255,53,53,0.15)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
      >
        {status === "submitting" ? (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </div>
        ) : (
          <span className="flex items-center gap-2">
            Let's Talk!
            <Sparkle
              size={14}
              colorClass="fill-white"
              strokeClass="stroke-white"
              animate={false}
              className="transition-transform duration-500 group-hover:rotate-45"
            />
          </span>
        )}
      </button>
    </form>
  );
}
