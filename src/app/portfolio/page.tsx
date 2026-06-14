"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tag, LayoutGrid, Eye, Search } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import GalleryLightbox from "@/components/GalleryLightbox";
import { portfolioData, PortfolioItem } from "@/data/portfolioData";

const categories = [
  { id: "all", label: "All Works" },
  { id: "signage", label: "Signage" },
  { id: "led-displays", label: "LED Displays" },
  { id: "vehicle-graphics", label: "Vehicle Graphics" },
  { id: "events", label: "Events" },
  { id: "branding", label: "Branding" },
  { id: "printing", label: "Printing" },
  { id: "gift-printing", label: "Gift Printing" },
  { id: "art-works", label: "Art Works" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  // Filter items
  const filteredItems = selectedCategory === "all"
    ? portfolioData
    : portfolioData.filter((item) => item.category === selectedCategory);

  // Lightbox navigation helper
  const handleNext = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-black overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src="/images/gallery/signage-1.svg"
            alt="Falsafi Gallery Showcase"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 text-center">
          <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-4">
            Visual Gallery
          </span>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            OUR BRANDING <span className="text-brand">PORTFOLIO.</span>
          </h1>
          <p className="font-body text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Browse through our portfolio of custom sign boards, fleet wraps, digital LED screens, and fine art masterpieces installed across Ajman &amp; Dubai.
          </p>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="bg-black py-6 border-y border-zinc-900 sticky top-[73px] z-30 backdrop-blur-md bg-black/90">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-start xl:justify-center gap-2 overflow-x-auto pb-2 xl:pb-0 scrollbar-none font-body">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-brand border-brand text-black shadow-[0_4px_12px_rgba(36,149,22,0.2)]"
                      : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-black relative z-20 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900 cursor-zoom-in"
                >
                  {/* Next.js Image wrapper */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-300 z-10" />

                  {/* Corner Zoom Icon */}
                  <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-zinc-950/60 border border-zinc-800/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all">
                    <Eye className="w-4 h-4 text-brand" />
                  </div>

                  {/* Caption bottom details panel */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-brand uppercase tracking-widest mb-1.5 font-body">
                      <Tag className="w-3 h-3" />
                      {item.categoryLabel}
                    </div>
                    <h3 className="font-syne text-sm md:text-base font-bold text-white leading-tight mb-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-zinc-500 text-[10px] md:text-xs font-body border-t border-zinc-900/60 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{item.client}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <Search className="w-12 h-12 text-zinc-700 mb-4" />
              <h3 className="font-syne text-xl font-bold text-white mb-2">No items found</h3>
              <p className="font-body text-zinc-500 text-sm">
                No projects found in this category. We are actively uploading new client work.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal Component */}
      <GalleryLightbox
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
