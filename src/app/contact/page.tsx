"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Instagram, Facebook, Linkedin } from "@/components/SocialIcons";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import ContactForm from "@/components/ContactForm";

function ContactContent() {
  const searchParams = useSearchParams();
  const [prefilledService, setPrefilledService] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setPrefilledService(serviceParam);
    }
  }, [searchParams]);

  const whatsappUrl = `https://wa.me/919497200005?text=${encodeURIComponent(
    "Hello Falsafi, I would like to schedule a site inspection and get a quote for a new branding project in UAE.",
  )}`;

  return (
    <>
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/images/horse_bg.jpeg"
            alt="Falsafi hero background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 text-center">
          <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-4">
            Connect With Us
          </span>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            START YOUR PROJECT<span className="text-brand">.</span>
          </h1>
          <p className="font-body text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about signboards, digital displays, print orders, or
            class schedules? Reach out to our design estimators.
          </p>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="py-20 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-white">
                Falsafi Showroom &amp; Warehouse
              </h2>
              <p className="font-body text-sm md:text-base text-zinc-400 leading-relaxed">
                Visit our showroom behind Nesto Hyper Market, Hamadia 1, Ajman,
                or request a design advisor to visit your office location
                anywhere in Dubai, Sharjah, or Abu Dhabi.
              </p>
            </div>

            {/* Visual Icon List */}
            <ul className="flex flex-col gap-6 font-body text-sm md:text-base text-zinc-300">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-syne text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                    Address
                  </h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Behind Nesto Hyper Market, Hamadia 1, Ajman, United Arab
                    Emirates
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-syne text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                    Phone Numbers
                  </h4>
                  <div className="flex flex-col gap-0.5">
                    <a
                      href="tel:06046888"
                      className="hover:text-brand transition-colors"
                    >
                      06046 888
                    </a>
                    <a
                      href="tel:0526024699"
                      className="hover:text-brand transition-colors"
                    >
                      05260 24699
                    </a>
                    <a
                      href="tel:+971542507014"
                      className="hover:text-brand transition-colors"
                    >
                      +971 54 250 7014
                    </a>
                    <a
                      href="tel:+971504884494"
                      className="hover:text-brand transition-colors"
                    >
                      +971 50 488 4494
                    </a>
                    <a
                      href="tel:00919497200005"
                      className="hover:text-brand transition-colors font-semibold"
                    >
                      WhatsApp/Direct: 0091 9497200005
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-syne text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:falsafi.signs@gmail.com"
                    className="hover:text-brand transition-colors"
                  >
                    falsafi.signs@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-syne text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                    Business Hours
                  </h4>
                  <p className="text-zinc-350">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-zinc-600 text-xs mt-0.5">Sunday: Closed</p>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <h4 className="font-syne text-xs font-bold uppercase tracking-wider text-zinc-500">
                Follow Falsafi Studio
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand hover:scale-105 active:scale-95 transition-all"
                  aria-label="Instagram link"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand hover:scale-105 active:scale-95 transition-all"
                  aria-label="Facebook link"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand hover:scale-105 active:scale-95 transition-all"
                  aria-label="LinkedIn link"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Fast WhatsApp CTA banner */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-[#249516]/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#249516]/10 flex items-center justify-center text-[#249516]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left font-body">
                  <p className="text-sm font-bold text-white group-hover:text-brand transition-colors">
                    Chat on WhatsApp
                  </p>
                  <p className="text-xs text-zinc-500">
                    Instant connection with estimators
                  </p>
                </div>
              </div>
              <span className="text-zinc-600 group-hover:text-brand transition-colors text-sm">
                →
              </span>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Maps Responsive Frame */}
      <section className="bg-black py-4 border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-zinc-900 shadow-2xl relative">
            {/* Dark mode overlay mask for the map to fit styling */}
            <div className="absolute inset-0 bg-brand/5 pointer-events-none mix-blend-color" />

            {/* Google Map - Nesto Hyper Market, Hamadia 1, Ajman */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8!2d55.5!3d25.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b0000000001%3A0x0!2sNesto+Hyper+Market+Hamidiya+Ajman!5e0!3m2!1sen!2sae!4v1716183000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) grayscale(80%)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Falsafi Showroom Location - Behind Nesto Hyper Market, Hamadia 1, Ajman"
            />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}

export default function Contact() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-brand font-syne text-xl">
          Loading Falsafi Contact...
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
