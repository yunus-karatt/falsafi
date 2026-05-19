"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";

interface MobileCTAProps {
  phoneNumber?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

export default function MobileCTA({
  phoneNumber = "+971507861234",
  whatsappNumber = "971507861234",
  whatsappMessage = "Hello Falsafi, I would like to inquire about your advertising and branding services.",
}: MobileCTAProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-black/90 backdrop-blur-md border-t border-zinc-800/80 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-body text-xs font-bold tracking-wider uppercase transition-colors active:bg-zinc-800"
      >
        <Phone className="w-4 h-4 text-zinc-400" />
        Call Us
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#249516] text-white font-body text-xs font-bold tracking-wider uppercase shadow-[0_4px_12px_rgba(36,149,22,0.2)] transition-colors active:bg-[#1f8013]"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>

      {/* Get Quote Link */}
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-body text-xs font-bold tracking-wider uppercase transition-colors active:bg-zinc-200"
      >
        <FileText className="w-4 h-4" />
        Quote
      </Link>
    </div>
  );
}
