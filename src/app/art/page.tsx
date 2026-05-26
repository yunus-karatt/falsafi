"use client";

import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";

const drawingFiles = [
  "10841171_383862318455676_1060473712_n.jpg",
  "10872509_383862378455670_1275411570_n.jpg",
  "10872619_383863265122248_570561782_n - Copy.jpg",
  "10884390_383862295122345_634113441_n - Copy - Copy.jpg",
  "10884992_397686627073245_780669386_n - Copy - Copy - Copy.jpg",
  "IMG-20160711-WA0092.jpg",
  "IMG-20160711-WA0093.jpg",
  "IMG-20160711-WA0094.jpg",
  "IMG-20160711-WA0095.jpg",
  "IMG-20160711-WA0096.jpg",
  "IMG-20160711-WA0097.jpg",
  "IMG-20160711-WA0098.jpg",
  "IMG-20160711-WA0099.jpg",
  "IMG-20160711-WA0100.jpg",
  "IMG-20160711-WA0101.jpg",
  "IMG-20160711-WA0102.jpg",
  "IMG-20160711-WA0103.jpg",
  "IMG-20160711-WA0104.jpg",
  "IMG-20160711-WA0105.jpg",
  "IMG-20160711-WA0106.jpg",
  "IMG-20160711-WA0107.jpg",
  "IMG-20160711-WA0108.jpg",
  "IMG-20160711-WA0109.jpg",
  "IMG-20160711-WA0110.jpg",
  "IMG-20160711-WA0111.jpg",
  "IMG-20160711-WA0112.jpg",
  "IMG-20160711-WA0113.jpg",
  "IMG-20160711-WA0114.jpg",
  "IMG-20160711-WA0115.jpg",
  "IMG-20160711-WA0116.jpg",
  "IMG-20160711-WA0117.jpg",
  "IMG-20160711-WA0118.jpg",
  "IMG-20160711-WA0119.jpg",
  "IMG-20160711-WA0120.jpg",
  "IMG-20160711-WA0121.jpg",
  "IMG-20160711-WA0122.jpg",
  "IMG-20160711-WA0123.jpg",
  "IMG-20160711-WA0124.jpg",
  "IMG-20160711-WA0125.jpg",
  "IMG-20160711-WA0126.jpg",
  "IMG-20160711-WA0127.jpg",
  "IMG-20160711-WA0128.jpg",
  "IMG-20160711-WA0129.jpg",
  "IMG-20160711-WA0130.jpg",
  "IMG-20160711-WA0131.jpg",
  "IMG-20160711-WA0132.jpg",
  "IMG-20160711-WA0133.jpg",
  "IMG-20160711-WA0134.jpg",
  "IMG-20160711-WA0135.jpg",
  "IMG-20160711-WA0136.jpg",
  "IMG-20160711-WA0137.jpg",
  "IMG-20160711-WA0138.jpg",
  "IMG-20160720-WA0015.jpg",
  "IMG-20160720-WA0019.jpg",
  "IMG-20181015-WA0071.jpg"
];

const drawingGallery = drawingFiles.map((file, index) => ({
  id: `drawing-${index + 1}`,
  title: `Drawing Work ${index + 1}`,
  image: `/images/drawing/${encodeURIComponent(file)}`,
}));

export default function FineArtAcademy() {
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
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/85 to-transparent z-10" />
        {/* Glow behind header */}
        <div className="absolute -top-20 -left-20 w-112.5 h-112.5 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 text-center">
          <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-4">
            Creativity &amp; Education
          </span>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            FINE ART <br /> <span className="paint-stroke">ACADEMY.</span>
          </h1>
          <p className="font-body text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ignite your artistic potential with structured drawing and painting classes for kids, adults, and professional hobbyists in Ajman.
          </p>
        </div>
      </section>

      {/* Drawing Gallery Section (after hero, similar layout placement to services page) */}
      <section className="pb-24 pt-8 min-h-150 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
              Drawing Gallery
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Studio Drawing Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 md:gap-8">
            {drawingGallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900 hover:border-brand/30 transition-colors duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-body text-xs text-zinc-200 tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy overview section temporarily commented out for now */}
      {/* Programs and workshops section temporarily commented out for now */}
      {/* Previous studio showcase section temporarily commented out for now */}
      {/* Bottom CTA section temporarily commented out for now */}

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
