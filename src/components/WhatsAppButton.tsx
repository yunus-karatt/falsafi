"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = "971585183720", // E.164-compatible format for wa.me links
  defaultMessage = "Hello Falsafi, I am interested in your advertising and branding solutions. I would like to get a quote.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#249516] text-white shadow-[0_4px_20px_rgba(36,149,22,0.4)] hover:bg-[#2eb41e] transition-colors group"
        aria-label="Contact Falsafi on WhatsApp"
      >
        {/* Glow pulsing ring around the button */}
        <span className="absolute -inset-1 rounded-full bg-[#249516]/40 animate-ping opacity-75 pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-zinc-950 text-white text-xs font-semibold px-3.5 py-2 rounded-lg border border-zinc-800 shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
          Chat with Us
        </span>
      </motion.a>
    </div>
  );
}
