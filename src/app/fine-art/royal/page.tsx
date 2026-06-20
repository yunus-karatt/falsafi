import RoyalGalleryClient from "./RoyalGalleryClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Royal Portraits — Falsafi",
  description: "A curated gallery of UAE royal family portraits by Falsafi.",
};

function getGalleryItems() {
  const dir = path.join(process.cwd(), "public", "images", "royal_family");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp|svg)$/i.test(f));
  } catch (e) {
    files = [];
  }

  return files.map((file, index) => ({
    id: `royal-${index + 1}`,
    title: `Royal Portrait ${index + 1}`,
    image: `/images/royal_family/${encodeURIComponent(file)}`,
  }));
}

export default function Page() {
  const galleryItems = getGalleryItems();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      {/* <section className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-10">
          <img src="/images/horse_bg.png" alt="background" className="object-cover w-full h-full opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-30 text-center">
          <span className="text-brand font-body text-xs font-bold uppercase tracking-widest block mb-4">
            Curated Collection
          </span>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
            ROYAL PORTRAITS
          </h1>
          <p className="font-body text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of portrait artworks celebrating UAE leadership and heritage.
          </p>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="pb-24 pt-8 bg-black mt-26">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
              Fine Art Gallery
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Royal Portraits
            </h2>
          </div>

          <RoyalGalleryClient items={galleryItems} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
