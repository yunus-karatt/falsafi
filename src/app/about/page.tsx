"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Compass, Eye, Shield, Users, Warehouse } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";

const timelineEvents = [
  { year: "2014", title: "Falsafi Formed", desc: "Started as a small printing and design studio in Ajman, catering to visiting cards and flyer requests." },
  { year: "2017", title: "Signage Warehouse Launch", desc: "Expanded into wide-format flex banner printing and established our first structural sign board welding warehouse." },
  { year: "2020", title: "Digital LED Screen Expansion", desc: "Partnered with global LED controller brands to supply and install large-format indoor/outdoor digital displays across Dubai." },
  { year: "2023", title: "Fine Art Academy Creation", desc: "Integrated our creative branch, launching drawing and painting classes for children and adults in a dedicated studio room." },
  { year: "Active", title: "Premier Branding Solutions", desc: "Operating as a full-service visual production firm managing large corporate accounts, exhibition stands, and fleet branding." }
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src="/images/services/outdoor-branding.svg"
            alt="About Falsafi Branding"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent z-10" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 text-center">
          <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-4">
            Our Legacy
          </span>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            THE FORCE BEHIND <span className="text-brand">FALSAFI.</span>
          </h1>
          <p className="font-body text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the creative studio transforming physical spaces and company assets into premium advertising channels across the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* Company Story & Visuals */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Story */}
          <div className="flex flex-col gap-6">
            <span className="text-brand font-body text-xs font-bold uppercase tracking-widest">
              Established in Ajman
            </span>
            <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-white leading-tight">
              A Complete Production and Creativity Studio under One Roof
            </h2>
            <p className="font-body text-sm md:text-base text-zinc-400 leading-relaxed">
              Falsafi was born out of a desire to bridge the gap between creative visual designs and high-fidelity physical fabrication. In the fast-moving economy of Dubai and Ajman, visual branding demands durability, high brightness, and precision assembly.
            </p>
            <p className="font-body text-sm md:text-base text-zinc-400 leading-relaxed">
              Today, Falsafi stands as a leading <strong>advertising company in Ajman</strong>, providing end-to-end design, welding, CNC carving, printing, acrylic moulding, and digital installation. Because we operate our own hardware warehouse, we maintain absolute control over quality, safety certifications, and turnaround speeds.
            </p>
            <p className="font-body text-sm md:text-base text-zinc-400 leading-relaxed">
              Our unique combination of commercial advertising fabrication and academic fine art instruction makes us a unique visual hub, inspiring creativity in individuals while constructing massive visual statements for corporate organizations.
            </p>
          </div>

          {/* Right: Graphic Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
                <Image
                  src="/images/gallery/signage-4.svg"
                  alt="Signboard assembly warehouse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
                <Image
                  src="/images/services/led-display.svg"
                  alt="LED displays studio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-850 bg-zinc-950">
                <Image
                  src="/images/gallery/branding-2.svg"
                  alt="Exhibition custom stands"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
                <Image
                  src="/images/services/art-classes.svg"
                  alt="Fine Art Academy workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="rounded-3xl bg-black border border-zinc-900 p-8 md:p-12 relative overflow-hidden group hover:border-brand/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-xl md:text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed">
              To empower businesses throughout the UAE by delivering high-impact, physically robust, and visually stunning branding solutions. We strive to combine custom state-of-the-art technology with classic craftsmanship to help brands capture attention, build trust, and grow.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-black border border-zinc-900 p-8 md:p-12 relative overflow-hidden group hover:border-brand/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-xl md:text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed">
              To become the most trusted and premium visual fabrication partner in the Middle East. We aim to drive innovation in digital signage, LED displays, and sustainable fabrication methods, establishing Falsafi as synonymous with architectural advertising excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
              Growth Path
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Journey of Fabrication
            </h2>
          </div>

          <div className="relative border-l border-zinc-900 pl-6 md:pl-10 space-y-12 ml-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-brand shadow-[0_0_10px_rgba(36,149,22,0.6)] z-10" />

                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <span className="font-syne text-lg md:text-2xl font-extrabold text-brand shrink-0 md:w-20">
                    {event.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-syne text-base md:text-lg font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-zinc-400 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us details */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
              Value Proposition
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Why Leaders Choose Falsafi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-black border border-zinc-900 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                <Warehouse className="w-5 h-5" />
              </div>
              <h4 className="font-syne text-base md:text-lg font-bold text-white mb-2">
                100% In-House Assembly
              </h4>
              <p className="font-body text-xs md:text-sm text-zinc-500 leading-relaxed">
                No third-party markups. We own our CNC cutters, metal benders, wide format printers, and LED configuration setups.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-black border border-zinc-900 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-syne text-base md:text-lg font-bold text-white mb-2">
                Extreme Climate Tested
              </h4>
              <p className="font-body text-xs md:text-sm text-zinc-500 leading-relaxed">
                All metals, acrylic coatings, and vinyl wraps are calibrated to withstand the harsh UV and salinity elements of Ajman and Dubai coasts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-black border border-zinc-900 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-syne text-base md:text-lg font-bold text-white mb-2">
                Municipality Compliance
              </h4>
              <p className="font-body text-xs md:text-sm text-zinc-500 leading-relaxed">
                We handle layouts and certification drafts compliant with RTA, Civil Defense, and local municipalities for safe facade sign board setups.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-black font-body text-sm font-bold uppercase tracking-wider hover:bg-brand-hover hover:scale-103 transition-all"
            >
              Collaborate With Us
              <Users className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
