export interface PortfolioItem {
  id: string;
  title: string;
  category: "signage" | "printing" | "vehicle-graphics" | "events" | "led-displays" | "branding" | "art-works" | "gift-printing";
  categoryLabel: string;
  description: string;
  image: string;
  client: string;
  location: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Luxury Retail 3D Illuminated Signage",
    category: "signage",
    categoryLabel: "Signage",
    description: "Premium brushed-brass 3D lettering with amber halo-lit Samsung LEDs installed at a luxury jewelry boutique.",
    image: "/images/gallery/signage-1.svg",
    client: "Al Zaiba Jewelers",
    location: "Dubai Mall, Dubai"
  },
  {
    id: "port-2",
    title: "High-Definition Outdoor Advertising LED Screen",
    category: "led-displays",
    categoryLabel: "LED Displays",
    description: "A massive P4 outdoor LED screen showcasing vibrant advertising with high-frequency controllers for anti-flicker.",
    image: "/images/gallery/led-display-1.svg",
    client: "Grand Mall Ajman",
    location: "Ajman, UAE"
  },
  {
    id: "port-3",
    title: "Full Matte Metallic Fleet Vehicle Wrap",
    category: "vehicle-graphics",
    categoryLabel: "Vehicle Graphics",
    description: "Complete vehicle wrap for corporate delivery vans using Avery Dennison matte metallic green vinyl with protective laminate.",
    image: "/images/gallery/vehicle-1.svg",
    client: "Speedy Delivery Co.",
    location: "Dubai, UAE"
  },
  {
    id: "port-4",
    title: "Corporate Exhibition Stand Construction",
    category: "events",
    categoryLabel: "Events",
    description: "Custom-built wooden exhibition stand featuring integrated product displays, backlit logos, and premium lounges.",
    image: "/images/gallery/events-1.svg",
    client: "TechCorp Global",
    location: "DWTC, Dubai"
  },
  {
    id: "port-5",
    title: "Complete Store Front Glass Branding",
    category: "branding",
    categoryLabel: "Branding",
    description: "Frosted visual vinyl decals and high-tack outdoor facade graphics representing a clean, modern wellness center.",
    image: "/images/gallery/branding-1.svg",
    client: "Vitality Wellness",
    location: "Al Jurf, Ajman"
  },
  {
    id: "port-6",
    title: "Acrylic Canvas Acrylic Impasto Landscape",
    category: "art-works",
    categoryLabel: "Art Works",
    description: "A gorgeous modern abstract canvas painting created by an instructor at our weekend painting academy.",
    image: "/images/gallery/art-1.svg",
    client: "Falsafi Art Academy",
    location: "Ajman Studio"
  },
  {
    id: "port-7",
    title: "Laser Engraved Executive Gift Sets",
    category: "gift-printing",
    categoryLabel: "Gift Printing",
    description: "Luxury matte black metal water bottles, leather journals, and ballpoint pens branded with high-fidelity fiber laser engraving.",
    image: "/images/gallery/gifts-1.svg",
    client: "Emirates Trade Bureau",
    location: "Sharjah, UAE"
  },
  {
    id: "port-8",
    title: "Tri-Fold Premium Corporate Brochure",
    category: "printing",
    categoryLabel: "Printing",
    description: "Printed on 350gsm silk artboard with velvet-touch lamination, custom spot UV accents, and metallic ink highlights.",
    image: "/images/gallery/printing-1.svg",
    client: "Crown Holdings",
    location: "Dubai Marina, Dubai"
  },
  {
    id: "port-9",
    title: "Double-Sided 3D Outdoor Pylon Signage",
    category: "signage",
    categoryLabel: "Signage",
    description: "A 4-meter tall double-sided exterior wayfinding pylon sign crafted with aluminum paneling and internal waterproof LED modules.",
    image: "/images/gallery/signage-2.svg",
    client: "Nesto Hypermarket",
    location: "Ajman, UAE"
  },
  {
    id: "port-10",
    title: "Indoor Curved LED Backdrop Screen",
    category: "led-displays",
    categoryLabel: "LED Displays",
    description: "A seamless curved P2.5 indoor LED backdrop screen installed for a corporate conference stage layout.",
    image: "/images/gallery/led-display-2.svg",
    client: "Apex Summit 2026",
    location: "Jumeirah Beach Hotel, Dubai"
  },
  {
    id: "port-11",
    title: "Promotional Food Truck Branding Graphics",
    category: "vehicle-graphics",
    categoryLabel: "Vehicle Graphics",
    description: "Fun, vibrant custom illustrations printed on 3M cast vinyl and wrapped seamlessly around a mobile burger truck.",
    image: "/images/gallery/vehicle-2.svg",
    client: "Bite Me Burgers",
    location: "Kite Beach, Dubai"
  },
  {
    id: "port-12",
    title: "Media Wall Backdrop for Award Gala",
    category: "events",
    categoryLabel: "Events",
    description: "An 8x3 meter tension fabric media wall with matte photo backdrop coating to prevent camera flashes from reflecting.",
    image: "/images/gallery/events-2.svg",
    client: "Gulf Business Awards",
    location: "Armani Hotel, Dubai"
  },
  {
    id: "port-13",
    title: "Luxury Gold Foil Accent Business Cards",
    category: "printing",
    categoryLabel: "Printing",
    description: "Thick 600gsm cotton business cards with deep blind letterpress debossing and hand-painted gold-leaf edges.",
    image: "/images/gallery/printing-2.svg",
    client: "Vanguard Partners",
    location: "DIFC, Dubai"
  },
  {
    id: "port-14",
    title: "Custom Printed Corporate Lanyards & ID Cards",
    category: "gift-printing",
    categoryLabel: "Gift Printing",
    description: "Vibrant dye-sublimated satin neck lanyards with metal clips coupled with rigid PVC smart ID cards.",
    image: "/images/gallery/gifts-2.svg",
    client: "Ajman University",
    location: "Ajman, UAE"
  },
  {
    id: "port-15",
    title: "Oil Painting Still Life Canvas Study",
    category: "art-works",
    categoryLabel: "Art Works",
    description: "Traditional oil on canvas study created during our intermediate adult art workshop series.",
    image: "/images/gallery/art-2.svg",
    client: "Falsafi Art Academy",
    location: "Ajman Studio"
  },
  {
    id: "port-16",
    title: "Creative Office Wall Branding Mural",
    category: "branding",
    categoryLabel: "Branding",
    description: "Inspirational typographic typography printed on non-woven wall texture material, installed for a modern technology firm.",
    image: "/images/gallery/branding-2.svg",
    client: "InnoSoft UAE",
    location: "Silicon Oasis, Dubai"
  }
];
