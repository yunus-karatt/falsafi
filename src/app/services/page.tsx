"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import { servicesData, ServiceCategory, Service } from "@/data/servicesData";

// Helper to render icons dynamically from name string
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("signage");

  const activeCategoryData = servicesData.find((cat) => cat.id === activeCategory) || servicesData[0];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-black overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src="/images/services/led-display.svg"
            alt="Falsafi Production Studio"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent z-10" />
        <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 text-center">
          <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-4">
            Custom Manufacturing
          </span>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            BRANDING SOLUTIONS <span className="text-brand">CATALOG.</span>
          </h1>
          <p className="font-body text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From heavy-duty LED screens and 3D architectural signage boards to vehicle decals, corporate gifts, and fine art instructions.
          </p>
        </div>
      </section>

      {/* Tab Selector Section */}
      <section className="bg-black py-8 border-y border-zinc-900 sticky top-[73px] z-30 backdrop-blur-md bg-black/90">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-start lg:justify-center gap-3 overflow-x-auto pb-3 lg:pb-0 scrollbar-none font-body">
            {servicesData.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-brand border-brand text-black shadow-[0_4px_15px_rgba(36,149,22,0.25)]"
                      : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Listing */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Category description */}
          <div className="max-w-2xl mb-16">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-white mb-4">
              {activeCategoryData.title}
            </h2>
            <p className="font-body text-sm md:text-base text-zinc-400 leading-relaxed">
              {activeCategoryData.description}
            </p>
          </div>

          {/* List of services in active category */}
          <div className="flex flex-col gap-24">
            <AnimatePresence mode="wait">
              {activeCategoryData.services.map((service, index) => {
                const isEven = index % 2 === 0;
                const whatsappUrl = `https://wa.me/971507861234?text=${encodeURIComponent(
                  `Hello Falsafi, I am looking to get a quote for "${service.title}" in UAE. Please share catalog and details.`
                )}`;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    id={service.id}
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border-b border-zinc-900/60 pb-20 last:border-0`}
                  >
                    {/* Visual Side */}
                    <div className={`w-full lg:flex-1 relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-900 shadow-xl ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-103 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>

                    {/* Content Side */}
                    <div className={`w-full lg:flex-1 flex flex-col gap-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center shrink-0">
                          <DynamicIcon name={service.iconName} className="w-5 h-5" />
                        </div>
                        <h3 className="font-syne text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>

                      <p className="font-body text-sm md:text-base text-zinc-300 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-900">
                        <h4 className="font-syne text-xs font-bold uppercase tracking-wider text-brand mb-3">
                          Capabilities &amp; Specs
                        </h4>
                        <p className="font-body text-xs md:text-sm text-zinc-400 leading-relaxed mb-4">
                          {service.longDescription}
                        </p>
                        
                        {/* Horizontal Image Gallery Preview */}
                        <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 scrollbar-none">
                          {service.gallery.map((img, imgIdx) => (
                            <div key={imgIdx} className="relative w-16 h-12 rounded-lg overflow-hidden border border-zinc-800 shrink-0">
                              <Image
                                src={img}
                                alt={`${service.title} preview ${imgIdx}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#249516] text-white font-body text-sm font-bold uppercase tracking-wider hover:bg-[#2eb41e] transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp Inquiry
                        </a>
                        <Link
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 border border-zinc-900 text-white font-body text-sm font-semibold uppercase tracking-wider hover:bg-zinc-900 hover:border-zinc-800 transition-all"
                        >
                          <FileText className="w-4 h-4 text-zinc-400" />
                          Get Written Quote
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA section bottom */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative z-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-white mb-6">
            Do You Need a Custom Layout or Structural Consultation?
          </h2>
          <p className="font-body text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mb-8">
            Connect with our technical design office today. We offer free on-site measurements in Ajman and Dubai for complex signage and store frontage setups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-brand text-black font-body text-sm font-bold uppercase tracking-wider hover:bg-brand-hover hover:scale-102 transition-all text-center"
            >
              Book Site Survey
            </Link>
            <a
              href="tel:+97167428888"
              className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-body text-sm font-semibold uppercase tracking-wider hover:bg-zinc-850 transition-all text-center"
            >
              Call Tech Office
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
