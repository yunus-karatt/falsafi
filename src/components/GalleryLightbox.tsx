"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, User, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxItem {
  id: string;
  title: string;
  categoryLabel: string;
  description: string;
  image: string;
  client: string;
  location: string;
}

interface GalleryLightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function GalleryLightbox({
  item,
  onClose,
  onNext,
  onPrev
}: GalleryLightboxProps) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
        >
          {/* Close Overlay Trigger */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav Controls */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/60 border border-zinc-800/40 text-zinc-400 hover:text-brand hover:border-brand hover:bg-zinc-900 transition-all cursor-pointer"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/60 border border-zinc-800/40 text-zinc-400 hover:text-brand hover:border-brand hover:bg-zinc-900 transition-all cursor-pointer"
              aria-label="Next item"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Content Container */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] md:max-h-[75vh]"
          >
            {/* Visual Column */}
            <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[450px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Metadata Column */}
            <div className="w-full md:w-[350px] p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-900 bg-zinc-950 relative z-10 overflow-y-auto">
              <div className="flex flex-col gap-4">
                {/* Category Badge */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider font-body">
                  <Tag className="w-3.5 h-3.5" />
                  {item.categoryLabel}
                </div>

                <h3 className="font-syne text-xl md:text-2xl font-extrabold text-white leading-tight">
                  {item.title}
                </h3>

                <p className="font-body text-sm text-zinc-400 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {/* Client and Location Meta */}
              <div className="flex flex-col gap-3 mt-8 border-t border-zinc-900 pt-6">
                <div className="flex items-center gap-2.5 text-zinc-400 font-body text-xs md:text-sm">
                  <User className="w-4 h-4 text-brand shrink-0" />
                  <span>
                    <strong className="text-zinc-300">Client:</strong> {item.client}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 font-body text-xs md:text-sm">
                  <MapPin className="w-4 h-4 text-brand shrink-0" />
                  <span>
                    <strong className="text-zinc-300">Location:</strong> {item.location}
                  </span>
                </div>

                {/* Direct WhatsApp Inquiry for specific project */}
                <a
                  href={`https://wa.me/971507861234?text=${encodeURIComponent(
                    `Hello Falsafi, I saw your portfolio item "${item.title}" and would like to get a quote for a similar project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand text-black font-body text-sm font-bold uppercase tracking-wider hover:bg-brand-hover active:scale-[0.99] transition-all duration-300 mt-4"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
