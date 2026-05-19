"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FAQItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-zinc-900/60 border-brand/30 shadow-[0_4px_25px_rgba(36,149,22,0.03)]"
                : "bg-zinc-950/40 border-zinc-900 hover:border-zinc-800"
            }`}
          >
            {/* Question Header Button */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-syne text-base md:text-lg font-bold text-white pr-4">
                {item.question}
              </span>
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full border shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-brand border-brand text-black"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 group-hover:text-white"
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            {/* Answer Collapsible Section */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-0 border-t border-zinc-900/40 font-body text-sm md:text-base text-zinc-400 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
