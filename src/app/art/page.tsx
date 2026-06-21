import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import RoyalGalleryClient from "../fine-art/royal/RoyalGalleryClient";

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

const fineArtFiles = [
  "WhatsApp Image 2026-06-07 at 12.48.38 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.48.59 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.00 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.00 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.01 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.01 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.02 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.05 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.05 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.06 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.06 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.07 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.07 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.08 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.10 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.11 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.11 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.12 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.12 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.13 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.14 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.15 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.49.16 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.39 AM (2).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.40 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.50 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.50 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.51 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.51 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.52 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.53 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.53 AM.jpeg",
];

const portraitFiles = [
  "WhatsApp Image 2026-06-21 at 4.10.43 PM.jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.42 PM (4).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.42 PM (3).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.42 PM (2).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.42 PM (1).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.42 PM.jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.41 PM (3).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.41 PM (2).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.41 PM (1).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.41 PM.jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.40 PM (1).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.40 PM.jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.39 PM (1).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.39 PM.jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.38 PM (2).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.38 PM (1).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.38 PM.jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.37 PM (1).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.37 PM.jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.36 PM (4).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.36 PM (3).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.36 PM (2).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.36 PM (1).jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.36 PM.jpeg",
  "WhatsApp Image 2026-06-21 at 4.10.34 PM.jpeg",
];

const drawingGallery = drawingFiles.map((file, index) => ({
  id: `drawing-${index + 1}`,
  title: `Drawing Work ${index + 1}`,
  image: `/images/drawing/${encodeURIComponent(file)}`,
}));

const fineArtGallery = fineArtFiles.map((file, index) => ({
  id: `fineart-${index + 1}`,
  title: `Fine Art Work ${index + 1}`,
  image: `/images/fineart/${encodeURIComponent(file)}`,
}));

const portraitGallery = portraitFiles.map((file, index) => ({
  id: `portrait-${index + 1}`,
  title: `Portrait Work ${index + 1}`,
  image: `/images/portraits/${encodeURIComponent(file)}`,
}));

export default function FineArtAcademy() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      {/* <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/horse_bg.png"
            alt="Falsafi hero background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute -top-20 -left-20 w-112.5 h-112.5 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-30 text-center">
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
      </section> */}

      {/* Drawing Gallery Section (after hero, similar layout placement to services page) */}
      <section className="pb-24 pt-8 mt-26 min-h-150 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
              Drawing Gallery
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Studio Drawing Works
            </h2>
          </div>

          <RoyalGalleryClient items={drawingGallery} />
        </div>
      </section>

      {/* Portrait Gallery Section */}
      <section className="pb-24 pt-8 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
              Portrait Gallery
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Portrait Works
            </h2>
          </div>

          <RoyalGalleryClient items={portraitGallery} />
        </div>
      </section>

      {/* Fine Art Gallery Section */}
      <section className="pb-24 pt-8 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
              Fine Art Gallery
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Fine Art Works
            </h2>
          </div>

          <RoyalGalleryClient items={fineArtGallery} />
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
