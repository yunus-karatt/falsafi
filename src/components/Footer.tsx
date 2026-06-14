"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Instagram, Facebook, Linkedin } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-10 w-64 h-64 bg-brand/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* About Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-syne text-2xl font-extrabold tracking-wider text-white">
            FALSAFI<span className="text-brand">.</span>
          </Link>
          <p className="font-body text-sm text-zinc-400 leading-relaxed max-w-sm">
            Falsafi is a premium advertising and branding solution company delivering state-of-the-art digital displays, custom signage, and top-tier printing services across Ajman, Dubai, and the wider UAE.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-syne text-base font-bold text-white uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 font-body text-sm text-zinc-400">
            <li>
              <Link href="/about" className="hover:text-brand transition-colors flex items-center gap-1 group">
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                About Our Agency
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-brand transition-colors flex items-center gap-1 group">
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                Our Branding Services
              </Link>
            </li>
            <li>
              <Link href="/art" className="hover:text-brand transition-colors flex items-center gap-1 group">
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                Fine Art Academy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand transition-colors flex items-center gap-1 group">
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Showcase Category */}
        <div className="flex flex-col gap-4">
          <h3 className="font-syne text-base font-bold text-white uppercase tracking-wider">
            Branding Solutions
          </h3>
          <ul className="flex flex-col gap-3 font-body text-sm text-zinc-400">
            <li>
              <Link href="/services#signage" className="hover:text-brand transition-colors">
                LED Screen Displays
              </Link>
            </li>
            <li>
              <Link href="/services#signage" className="hover:text-brand transition-colors">
                3D Sign Board Fabrication
              </Link>
            </li>
            <li>
              <Link href="/services#branding" className="hover:text-brand transition-colors">
                Vehicle Graphics & Wraps
              </Link>
            </li>
            <li>
              <Link href="/services#branding" className="hover:text-brand transition-colors">
                Exhibition Stands & Events
              </Link>
            </li>
            <li>
              <Link href="/services#printing" className="hover:text-brand transition-colors">
                Large Format Canvas & Banner
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-syne text-base font-bold text-white uppercase tracking-wider">
            Contact Falsafi
          </h3>
          <ul className="flex flex-col gap-4 font-body text-sm text-zinc-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
              <span>Behind Nesto Hyper Market, Hamadia 1, Ajman, United Arab Emirates</span>
            </li>
            <li className="flex items-start gap-3">
               <Phone className="w-4 h-4 text-brand shrink-0 mt-0.5" />
               <div className="flex flex-col gap-0.5">
                 <a href="tel:06046888" className="hover:text-white transition-colors">
                  06046 888
                </a>
                <a href="tel:0526024699" className="hover:text-white transition-colors">
                  05260 24699
                </a>
                 <a href="tel:+971542507014" className="hover:text-white transition-colors">
                  +971 54 250 7014
                </a>
                <a href="tel:+971504884494" className="hover:text-white transition-colors">
                  +971 50 488 4494
                </a>
               
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand shrink-0" />
              <a href="mailto:falsafi.signs@gmail.com" className="hover:text-white transition-colors">
                falsafi.signs@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                <span className="text-zinc-500 text-sm">Sunday: Closed</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-900/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-sm text-zinc-500 relative z-10">
        <p>&copy; {currentYear} Falsafi Advertising. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
