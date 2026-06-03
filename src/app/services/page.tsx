"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import * as Icons from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import { servicesData, Service } from "@/data/servicesData";

// Helper to render icons dynamically from name string
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Circle className={className} />;
  return <IconComponent className={className} />;
}

// Premium Service Card Component
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const whatsappUrl = `https://wa.me/971585183720?text=${encodeURIComponent(
    `Hello Falsafi, I saw "${service.title}" in your catalog. May I know more details?`
  )}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.05 }}
      className="group flex flex-col gap-5 p-4 rounded-[2rem] bg-zinc-950 border border-zinc-900/50 hover:border-brand/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* Visual Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-zinc-900 border border-white/5">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-brand group-hover:text-black transition-all duration-500">
          <DynamicIcon name={service.iconName} className="w-5 h-5" />
        </div>

        <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-brand text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="px-2 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-syne text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-brand transition-colors duration-300">
            {service.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
        </div>

        <p className="font-body text-sm text-zinc-500 line-clamp-2 leading-relaxed group-hover:text-zinc-400 transition-colors">
          {service.description}
        </p>

        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 group-hover:text-brand/80 transition-colors flex items-center gap-2"
        >
          Request Quote <div className="h-px flex-1 bg-zinc-800 group-hover:bg-brand/20 transition-colors" />
        </Link>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Flatten and filter the services data
  const allServices = useMemo(() => {
    return servicesData.flatMap(cat =>
      cat.services.map(service => ({ ...service, categoryId: cat.id }))
    );
  }, []);

  const filteredServices = useMemo(() => {
    if (activeFilter === "all") return allServices;
    return allServices.filter(service => service.categoryId === activeFilter);
  }, [activeFilter, allServices]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand/5 blur-[120px] rounded-full opacity-50 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Full Production Catalog
              </span>
              <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8">
                BRANDING SOLUTIONS
                <br className="block" />
                <span className="text-brand">CATALOG.</span>
              </h1>
              <p className="font-body text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Browse our complete collection of fabrication and branding services. Filter by category to find exactly what your project needs.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap justify-center gap-3 mt-12"
            >
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-500 border ${activeFilter === "all"
                  ? "bg-brand border-brand text-black shadow-[0_10px_25px_rgba(36,149,22,0.3)]"
                  : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                  }`}
              >
                SHOW ALL
              </button>
              {servicesData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-500 border ${activeFilter === category.id
                    ? "bg-brand border-brand text-black shadow-[0_10px_25px_rgba(36,149,22,0.3)]"
                    : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                >
                  {category.title.replace("Solutions", "").toUpperCase()}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Grid - No Titles */}
      <section className="pb-32 min-h-[600px]">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={idx}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-zinc-500 font-body">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-syne text-4xl md:text-6xl font-bold text-white mb-8">
            Start Your <span className="text-brand">Project.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-brand text-black font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_10px_30px_rgba(36,149,22,0.3)]"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/919497200005"
              className="w-full sm:w-auto px-10 py-5 rounded-full border border-zinc-800 text-white font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </div>
  );
}
