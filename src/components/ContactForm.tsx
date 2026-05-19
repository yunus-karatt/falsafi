"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  "LED Display Screens",
  "Digital Signage Solutions",
  "2D & 3D Sign Boards",
  "Vehicle Graphics & Wraps",
  "Indoor/Outdoor Branding",
  "Exhibition Event Setup & Custom Stands",
  "Fabric & Flag Printing",
  "Canvas & Banner Printing",
  "Corporate Gifts & Merchandise",
  "Fine Art Academy (Classes)",
  "Business & Visiting Card Printing",
  "Other Advertising Query"
];

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Formspree endpoint placeholder
    // In production, the user should put their Formspree ID in an env variable: NEXT_PUBLIC_FORMSPREE_ID
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "placeholder"; 
    
    if (formspreeId === "placeholder") {
      // Simulate submission for showcase purposes if not configured
      setTimeout(() => {
        setStatus("success");
        setFormState({ name: "", email: "", phone: "", service: "", message: "" });
      }, 1500);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Could not deliver your request.");
    }
  };

  return (
    <div className="w-full glass-panel-glow rounded-3xl p-8 md:p-10 relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand/10 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand flex items-center justify-center mb-6 text-brand">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-syne text-2xl font-bold text-white mb-3">
              Inquiry Sent Successfully!
            </h3>
            <p className="font-body text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed mb-6">
              Thank you for reaching out to Falsafi. Our branding advisors will review your request and get back to you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-white font-body text-sm font-semibold hover:bg-brand hover:border-brand hover:text-black transition-all"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="font-syne text-xl md:text-2xl font-bold text-white mb-2">
                Request a Custom Quote
              </h3>
              <p className="font-body text-zinc-400 text-xs md:text-sm">
                Fill in the details below. We typically reply within 2 hours.
              </p>
            </div>

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-body text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder:text-zinc-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand shadow-inner transition-all duration-300"
                />
              </div>

              {/* Phone field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-body text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+971 50 123 4567"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder:text-zinc-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand shadow-inner transition-all duration-300"
                />
              </div>
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-body text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder:text-zinc-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand shadow-inner transition-all duration-300"
              />
            </div>

            {/* Service Selection */}
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="font-body text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Required Service *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-body text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a branding solution</option>
                  {servicesList.map((service, index) => (
                    <option key={index} value={service} className="bg-zinc-950 text-white">
                      {service}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-zinc-500">
                  <span className="text-[10px]">▼</span>
                </div>
              </div>
            </div>

            {/* Message field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-body text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Project Details & Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleChange}
                placeholder="Please describe your branding requirements, dimensions, location, and timelines..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder:text-zinc-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand shadow-inner transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand text-black font-body text-sm font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(36,149,22,0.25)] hover:bg-brand-hover active:scale-[0.99] disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed transition-all duration-300 mt-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Request...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
