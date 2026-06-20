"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Shield,
  Cpu,
  Zap,
  Award,
  CheckCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import BeforeAfter from "@/components/BeforeAfter";
import FaqAccordion from "@/components/FaqAccordion";
import { servicesData } from "@/data/servicesData";
import { portfolioData } from "@/data/portfolioData";

const horse_bg = "/images/horse_bg.png";

const faqs = [
  {
    question: "What types of signage do you design and install?",
    answer:
      "Falsafi designs, fabricates, and installs a comprehensive range of signboards including 3D illuminated letters (acrylic, stainless steel, brass), large-format LED digital display screens, exterior pylon pylons, safety signs, interior office lobby signage, and road direction signboards compliant with UAE municipality regulations.",
  },
  {
    question: "Do you handle vehicle wraps for company fleets?",
    answer:
      "Yes, we specialize in high-end vehicle wraps and fleet graphics for vans, pickup trucks, trucks, and cars. We utilize premium heat-resistant cast vinyls (like 3M and Avery Dennison) designed specifically to endure the extreme summer heat of Dubai and Ajman without peeling or fading.",
  },
  {
    question: "How do I get a custom quote for my project?",
    answer:
      "You can request a quote by clicking our 'Get Quote' buttons to submit our contact form, or initiate an instant chat with our technical advisors via the floating WhatsApp button. We typically provide digital estimation drafts and initial 3D design mockups within 2 to 24 hours depending on project size.",
  },
  {
    question: "Where are your services available in the UAE?",
    answer:
      "Our primary showroom and production facility are located in Ajman, but we provide design, site inspection, and installation services across all Emirates, including Dubai, Sharjah, Abu Dhabi, and Umm Al Quwain.",
  },
  {
    question: "Do you offer custom stands and backdrops for exhibitions?",
    answer:
      "Absolutely. Falsafi is a complete branding provider. We fabricate custom wooden exhibition booths, fabric backdrops, media walls, registration counters, and roll-up banners for corporate summits, award galas, and trade shows at DWTC, ADNEC, and other major UAE venues.",
  },
];

const testimonials = [
  {
    name: "Tariq Al-Mansoori",
    role: "Marketing Director",
    company: "Ajman Retail Properties",
    content:
      "Falsafi fabricated our new storefront 3D LED logo and double-sided external pylon. The quality of fabrication and metal welding is top-notch, and the LEDs are incredibly bright even in direct sunlight. Excellent local team!",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Events Manager",
    company: "Vertex Summit Dubai",
    content:
      "We hired Falsafi for our event media walls and custom fabric backdrops at Dubai World Trade Centre. They accommodated our last-minute design tweaks and completed the full site setup ahead of schedule. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mohammed Ibrahim",
    role: "Operations Manager",
    company: "Gulf Logistics Fleet",
    content:
      "Wrapped 15 of our delivery vans with vehicle branding. Falsafi used high-durability 3M vinyl and did a flawless job. Not a single bubble or peeling edge after 8 months of continuous UAE road driving.",
    rating: 5,
  },
];

export default function Home() {
  // Grab a few featured portfolio items
  const featuredPortfolio = portfolioData.slice(0, 4);
  const marqueeServices = servicesData.flatMap((category) =>
    category.services.map((service) => service.title),
  );
  const marqueeItems = [...marqueeServices, ...marqueeServices];

  return (
    <>
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative min-h-[calc(100vh-100px)] mt-25 bg-black overflow-hidden py-20 md:py-24 px-4 sm:px-6 md:px-12 flex items-center justify-center">
        <div className="absolute inset-0 z-10">
          <Image
            src={horse_bg}
            alt="Horse background for Falsafi hero section"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
        </div>
        {/* Subtle watermark logo in background (optional) */}
        {/* <div className="pointer-events-none absolute left-8 bottom-8 z-20 hidden sm:block">
          <Image
            src="/images/logo.png"
            alt="Falsafi watermark logo"
            width={600}
            height={240}
            priority
            className="opacity-40 w-64 md:w-[500px] h-auto object-contain"
          />
        </div> */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand/5 blur-[120px] rounded-full opacity-0 pointer-events-none" /> */}

        <div className="mx-auto w-full max-w-5xl relative z-30 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950/80 border border-zinc-800 backdrop-blur-md mb-5 text-brand font-body text-xs font-semibold tracking-[0.2em] uppercase">
              <Shield className="w-3.5 h-3.5" />
              Ajman
            </div>

            <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-5 md:mb-6">
              The <span className="text-brand">Complete</span>
              <br className="hidden sm:block" /> Advertising Solution
            </h1>

            {/* Hero logo (prominent, centered, animated) */}
            {/*
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mx-auto mb-6"
            >
              <Link href="/" aria-label="Falsafi home" className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Falsafi logo"
                  width={280}
                  height={112}
                  priority
                  className="w-40 md:w-56 h-auto object-contain"
                />
              </Link>
            </motion.div>
            */}

            <p className="font-body text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-7 md:mb-8">
              Launch-ready signage, branding, printing, and installation
              services for businesses across the UAE, delivered with premium
              quality and fast execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full mb-7 md:mb-8 justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand text-black font-body text-sm font-extrabold tracking-wider uppercase hover:bg-brand-hover hover:scale-105 transition-all duration-300 shadow-[0_4px_25px_rgba(36,149,22,0.3)] text-center"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950/80 border border-zinc-800 text-white font-body text-sm font-semibold tracking-wider uppercase hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 text-center"
              >
                Explore Services
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto">
              {["Signage", "Branding", "Printing"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl text-center border border-zinc-800 bg-zinc-950/70 px-2.5 py-2"
                >
                  <p className="font-body text-xs sm:text-sm uppercase tracking-widest text-zinc-400">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Opening Soon Services Marquee */}
      <section className="py-4 bg-black border-y border-zinc-900 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-3">
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.28em] text-zinc-500 text-center">
             Services You Can Book
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-linear-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-linear-to-l from-black to-transparent z-10" />

          <div className="marquee-track flex w-max items-center gap-3 md:gap-4 py-2 md:py-3">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="shrink-0 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-4 md:px-5 py-2 md:py-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="font-body  text-xs md:text-sm font-semibold tracking-wide text-zinc-200 whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Services Spotlight */}
      <section className="py-24 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
                Core Competencies
              </span>
              <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Our Signature Branding Services
              </h2>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-2 font-body text-sm font-bold text-white hover:text-brand transition-colors whitespace-nowrap"
            >
              View All 18 Services
              <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((category) => (
              <div
                key={category.id}
                className="group relative rounded-3xl bg-black border border-zinc-900 p-8 hover:border-brand/30 transition-all duration-500 flex flex-col justify-between min-h-[350px] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-zinc-700 font-syne text-5xl font-extrabold block mb-6 group-hover:text-brand/20 transition-colors">
                    0
                    {category.id === "signage"
                      ? 1
                      : category.id === "branding"
                        ? 2
                        : 3}
                  </span>
                  <h3 className="font-syne text-xl md:text-2xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 border-t border-zinc-900 pt-6">
                  <ul className="flex flex-col gap-2.5 font-body text-sm text-zinc-500">
                    {category.services.slice(0, 3).map((srv) => (
                      <li
                        key={srv.id}
                        className="flex items-center gap-2 group-hover:text-zinc-300 transition-colors"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-brand shrink-0" />
                        {srv.title}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services#${category.id}`}
                    className="flex items-center gap-1.5 font-body text-xs font-bold text-brand mt-6 group-hover:underline"
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Before / After Slider Showcase */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
              Case Study
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Behold the Transformation
            </h2>
            <p className="font-body text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
              See how we transformed a standard, unbranded commercial frontage
              into a high-visibility, premium retail facade using illuminated
              dimensional sign boards and glass graphics.
            </p>
          </div>

          <BeforeAfter
            beforeImage="/images/gallery/before-branding.svg"
            afterImage="/images/gallery/after-branding.svg"
          />
        </div>
      </section>

      {/* 5. Work Process Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
              Our Methodology
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              From Blueprint to Installation
            </h2>
            <p className="font-body text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
              Our structured 4-step workflow ensures your advertising assets are
              delivered on time, within budget, and built to survive UAE outdoor
              climates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Cpu,
                step: "01",
                title: "Consultation & Site Survey",
                desc: "Our engineers inspect your location, measure dimensions, analyze architectural lightings, and check local municipality codes.",
              },
              {
                icon: Zap,
                step: "02",
                title: "Creative 3D Rendering",
                desc: "Our branding team models your signboards, fleet wraps, or exhibition booths in 3D so you can review details before production.",
              },
              {
                icon: Award,
                step: "03",
                title: "Precision Fabrication",
                desc: "Utilizing CNC routing, fiber-lasers, and high-frequency welding machines in our Ajman production warehouse.",
              },
              {
                icon: Shield,
                step: "04",
                title: "Professional Installation",
                desc: "Equipped with cranes and safety harnesses, our certified technicians secure the signage and configure electronic LEDs.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="flex flex-col p-6 rounded-2xl bg-black border border-zinc-900 hover:border-zinc-800 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-6 border border-brand/20">
                  <p.icon className="w-5 h-5" />
                </div>
                <span className="font-syne text-sm font-bold text-zinc-500 mb-2 uppercase tracking-widest">
                  Step {p.step}
                </span>
                <h3 className="font-syne text-base md:text-lg font-bold text-white mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-sm md:text-base text-zinc-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Gallery Preview - Hidden until shop inauguration
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
                Portfolio Preview
              </span>
              <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Crafting Visual Identity
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 font-body text-sm font-bold text-white hover:text-brand transition-colors whitespace-nowrap"
            >
              Launch Full Gallery
              <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-850"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="font-body text-xs font-bold text-brand uppercase tracking-wider mb-1.5">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-syne text-base font-bold text-white leading-tight mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-zinc-500 text-sm border-t border-zinc-800 pt-2.5 mt-1.5 font-body">
                    <span>{item.client}</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* 7. Client Testimonials */}
      <section className="py-24 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
              Client Reviews
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Trusted by Top Brands in UAE
            </h2>
            <p className="font-body text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
              Read feedback from business owners, architects, and event
              coordinators who rely on Falsafi for their corporate branding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-black border border-zinc-900 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-6 text-brand">
                    {Array.from({ length: t.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-body text-sm md:text-base text-zinc-300 leading-relaxed italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-zinc-900 pt-6 mt-8">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-syne text-sm font-extrabold text-brand uppercase shrink-0">
                    {t.name[0]}
                  </div>
                  <div className="flex flex-col font-body">
                    <span className="text-sm font-bold text-white">
                      {t.name}
                    </span>
                    <span className="text-sm text-zinc-500">
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-3">
              Have Questions?
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* 9. Contact CTA Box */}
      <section className="py-24 bg-zinc-950 relative z-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="relative rounded-3xl overflow-hidden glass-panel-glow p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_15px_40px_rgba(36,149,22,0.05)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-xl text-center lg:text-left relative z-10">
              <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Ready to transform your business visual presence?
              </h2>
              <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed">
                Connect with our local fabrication engineers in Ajman &amp;
                Dubai. Get site measurements, structural calculations, and
                custom brand designs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-10 shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand text-black font-body text-sm font-bold uppercase tracking-wider hover:bg-brand-hover hover:scale-102 transition-all text-center"
              >
                Inquire Online
              </Link>
              <a
                href="https://wa.me/919497200005?text=Hello%20Falsafi,%20I%20would%20like%2520to%2520schedule%2520a%2520free%2520signage%2520consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-body text-sm font-bold uppercase tracking-wider hover:bg-zinc-850 transition-all text-center flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
