"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brush, Palette, Calendar, MapPin, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";

const academyPrograms = [
  {
    id: "kids-art",
    title: "Kids Creative Academy",
    age: "Ages 5 - 12",
    desc: "Nurturing young minds through color exploration, basic drawing techniques, watercolor painting, and cartoon sketching. Designed to improve concentration, fine motor skills, and creative self-expression.",
    features: ["Color Mixing & Theory", "Pencil Sketching Basics", "Fun Watercolor Projects", "Handmade Crafts"],
    schedule: "Every Saturday & Sunday: 10:00 AM - 12:00 PM"
  },
  {
    id: "adults-art",
    title: "Adult Fine Art Workshops",
    age: "Ages 13+",
    desc: "Structured courses for beginners and intermediate artists. Master medium techniques like canvas oil painting, heavy-body acrylic impasto, portrait charcoal sketching, and landscape design.",
    features: ["Oil & Acrylic Canvas Painting", "Charcoal Portraiture", "Still Life Studies", "Portfolio Preparation"],
    schedule: "Every Friday & Saturday: 4:00 PM - 6:00 PM"
  },
  {
    id: "canvas-commission",
    title: "Custom Canvas Commissions",
    age: "Bespoke Art",
    desc: "Looking for premium, custom paintings to decorate your home, villa, or office lobby? Our resident art instructors create large-format abstract oil and acrylic canvas works tailor-made to fit your wall color palette.",
    features: ["Office Lobby Abstract Murals", "Traditional Landscape Studies", "Bespoke Impasto Textured Art", "Framing & Delivery UAE"],
    schedule: "Consultation by Appointment"
  }
];

const studioActivities = [
  { id: "act-1", title: "Acrylic Still Life", category: "Canvas Paintings", image: "/images/gallery/art-1.svg" },
  { id: "act-2", title: "Charcoal Portraiture", category: "Adult Work", image: "/images/gallery/art-2.svg" },
  { id: "act-3", title: "Kids Coloring Project", category: "Kids Drawings", image: "/images/services/art-classes.svg" },
  { id: "act-4", title: "Acrylic Ocean Studies", category: "Canvas Paintings", image: "/images/gallery/printing-4.svg" }
];

export default function FineArtAcademy() {
  const whatsappUrl = `https://wa.me/971507861234?text=${encodeURIComponent(
    "Hello Falsafi, I am interested in registering for your Art & Drawing Classes in Ajman. Please send course schedule and pricing."
  )}`;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Image
            src="/images/services/art-classes.svg"
            alt="Falsafi Painting Academy Studio"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent z-10" />
        {/* Glow behind header */}
        <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 text-center">
          <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-4">
            Creativity &amp; Education
          </span>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            FINE ART <span className="paint-stroke">ACADEMY.</span>
          </h1>
          <p className="font-body text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ignite your artistic potential with structured drawing and painting classes for kids, adults, and professional hobbyists in Ajman.
          </p>
        </div>
      </section>

      {/* Academy Overview Story */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Graphic */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-900 shadow-2xl bg-zinc-950">
            <Image
              src="/images/services/art-classes.svg"
              alt="Falsafi Art Class Activity"
              fill
              className="object-cover"
            />
            {/* Visual float badge */}
            <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-xl flex items-center gap-3 border border-brand/20">
              <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                <Palette className="w-5 h-5" />
              </div>
              <div className="font-body text-left">
                <p className="text-xs text-zinc-500 font-semibold uppercase">Academy Location</p>
                <p className="text-sm text-white font-bold">Studio 3, Al Jurf, Ajman</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="flex flex-col gap-6">
            <span className="text-brand font-body text-xs font-bold uppercase tracking-widest">
              Nurturing Talent Since 2023
            </span>
            <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-white leading-tight">
              A Serene Studio Space Crafted to Unleash Inner Creativity
            </h2>
            <p className="font-body text-sm md:text-base text-zinc-400 leading-relaxed">
              At Falsafi, we believe that drawing and painting are not just innate talents, but learnable skills that can be unlocked through proper structural guidance. Our academy is a dedicated studio room designed with natural lighting, ergonomic easels, and high-grade acrylic and oil mediums.
            </p>
            <p className="font-body text-sm md:text-base text-zinc-400 leading-relaxed">
              Our professional artists teach fundamental techniques: perspective, shading, canvas composition, and medium layering. We optimize our syllabus so both beginners and advanced artists feel supported.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#249516] text-white font-body text-sm font-bold uppercase tracking-wider hover:bg-[#2eb41e] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Reserve Free Demo Class
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Cards */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
              Academy Curriculum
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Programs &amp; Workshops
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {academyPrograms.map((prog, index) => (
              <div
                key={prog.id}
                className="group relative rounded-3xl bg-black border border-zinc-900 p-8 flex flex-col justify-between hover:border-brand/35 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
                    <h3 className="font-syne text-lg md:text-xl font-bold text-white">
                      {prog.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-body text-[10px] font-bold uppercase tracking-wider">
                      {prog.age}
                    </span>
                  </div>

                  <p className="font-body text-sm text-zinc-400 leading-relaxed mb-6">
                    {prog.desc}
                  </p>

                  <h4 className="font-syne text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    Course Syllabus Includes:
                  </h4>
                  <ul className="flex flex-col gap-2 font-body text-xs md:text-sm text-zinc-400 mb-6">
                    {prog.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-brand shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-zinc-900 pt-6 mt-6">
                  <div className="flex items-center gap-2 text-zinc-500 font-body text-xs mb-6">
                    <Calendar className="w-4 h-4 text-brand shrink-0" />
                    <span>{prog.schedule}</span>
                  </div>
                  <a
                    href={`https://wa.me/971507861234?text=${encodeURIComponent(
                      `Hello Falsafi, I am interested in registering for the "${prog.title}" program.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-body text-xs font-bold uppercase tracking-wider hover:bg-brand hover:border-brand hover:text-black transition-colors"
                  >
                    Select Program
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Artwork Showcase Grid */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
                Academy Showcase
              </span>
              <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Studio Creative Works
              </h2>
            </div>
            <Link
              href="/portfolio?category=art-works"
              className="group flex items-center gap-2 font-body text-sm font-bold text-white hover:text-brand transition-colors whitespace-nowrap"
            >
              View Full Art Portfolio
              <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioActivities.map((act) => (
              <div
                key={act.id}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900"
              >
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="font-body text-[10px] font-bold text-brand uppercase tracking-wider mb-1.5">
                    {act.category}
                  </span>
                  <h3 className="font-syne text-base font-bold text-white leading-tight mb-2">
                    {act.title}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-500 text-xs border-t border-zinc-900 pt-2.5 mt-1.5 font-body">
                    <MapPin className="w-3.5 h-3.5 text-brand shrink-0" />
                    <span>Ajman Studio</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Art class CTA section bottom */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative z-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-white mb-6">
            Register Your Interest Today
          </h2>
          <p className="font-body text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mb-8">
            Seats in our evening and weekend workshops are limited to 8 easels per class to guarantee focused attention. Reserve a trial class now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-brand text-black font-body text-sm font-bold uppercase tracking-wider hover:bg-brand-hover hover:scale-102 transition-all text-center"
            >
              Book Art Academy Demo
            </a>
            <Link
              href="/contact?service=Fine%20Art%20Academy%20Classes"
              className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-body text-sm font-semibold uppercase tracking-wider hover:bg-zinc-850 transition-all text-center"
            >
              Send Written Inquiry
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
