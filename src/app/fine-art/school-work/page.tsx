import RoyalGalleryClient from "../royal/RoyalGalleryClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";

export const metadata = {
  title: "School Work - Falsafi",
  description: "A curated gallery of school fine art works by Falsafi.",
};

const schoolWorkFiles = [
  "WhatsApp Image 2026-06-07 at 12.52.42 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.42 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.43 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.44 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.44 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.45 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.46 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.46 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.47 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.47 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.48 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.48 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.49 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.49 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.54 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.57 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.57 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.58 AM (2).jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.58 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.52.59 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.53.00 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.53.00 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.53.01 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.53.01 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.53.02 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.53.02 AM.jpeg",
  "WhatsApp Image 2026-06-07 at 12.53.03 AM (1).jpeg",
  "WhatsApp Image 2026-06-07 at 12.53.03 AM.jpeg",
];

const galleryItems = schoolWorkFiles.map((file, index) => ({
  id: `school-work-${index + 1}`,
  title: `School Work ${index + 1}`,
  image: `/images/school_work/${encodeURIComponent(file)}`,
}));

export default function Page() {
  return (
    <>
      <Navbar />

      <section className="pb-24 pt-8 bg-black mt-26">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
              Fine Art Gallery
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              School Work
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
