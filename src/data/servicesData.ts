export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  iconName: string; // Map to Lucide icons
  image: string;
  gallery: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "signage",
    title: "Premium Signage Solutions",
    description: "State-of-the-art visual signage to make your business stand out day and night across the UAE.",
    services: [
      {
        id: "led-display",
        title: "LED Display Screens",
        slug: "led-display-services-ajman",
        description: "High-definition indoor and outdoor LED display screens for vibrant, dynamic advertising in Dubai and Ajman.",
        longDescription: "Our LED displays feature high-brightness, Energy-efficient SMD technology, custom sizes, and seamless video playback. Perfect for storefronts, shopping malls, billboards, and event staging across the UAE.",
        iconName: "Tv",
        image: "/images/services/led-display.svg",
        gallery: ["/images/services/led-display.svg", "/images/gallery/signage-1.svg", "/images/gallery/signage-2.svg"]
      },
      {
        id: "digital-signage",
        title: "Digital Signage",
        slug: "digital-signage-uae",
        description: "Interactive digital kiosks, smart information boards, and wall-mounted advertising monitors.",
        longDescription: "Transform how you communicate with clients. Our premium digital signage systems offer remote content scheduling, ultra-thin profiles, interactive touch capabilities, and robust enclosures designed for continuous operations.",
        iconName: "MonitorCheck",
        image: "/images/services/digital-signage.svg",
        gallery: ["/images/services/digital-signage.svg", "/images/gallery/signage-3.svg"]
      },
      {
        id: "indoor-outdoor-sign-boards",
        title: "2D & 3D Sign Boards",
        slug: "sign-board-work-in-dubai",
        description: "Elegant 2D and 3D sign boards crafted from acrylic, metal, brass, and stainless steel with LED backlighting.",
        longDescription: "Professional sign board fabrication using high-grade materials. Our 3D channel letters are precision-laser cut and fitted with Samsung LED illumination for maximum visibility and architectural prestige in Dubai and Ajman.",
        iconName: "Sparkles",
        image: "/images/services/3d-signs.svg",
        gallery: ["/images/services/3d-signs.svg", "/images/gallery/signage-4.svg", "/images/gallery/signage-5.svg"]
      },
      {
        id: "external-interior-signage",
        title: "External & Interior Signage",
        slug: "external-interior-signage",
        description: "Comprehensive corporate signages including lobby logos, direction boards, room plates, and exterior branding facades.",
        longDescription: "Create a cohesive brand journey. From welcoming architectural lobby signs in high-polished brass to external building facade pylons, Falsafi designs and installs signs that command attention.",
        iconName: "LayoutGrid",
        image: "/images/services/interior-signage.svg",
        gallery: ["/images/services/interior-signage.svg", "/images/gallery/signage-6.svg"]
      },
      {
        id: "road-signage",
        title: "Road Signage",
        slug: "road-signage-services",
        description: "Reflective and regulatory road signs manufactured strictly according to RTA and UAE municipality standards.",
        longDescription: "Heavy-duty aluminum signs with high-intensity reflective sheeting (3M). We produce parking signs, traffic signs, safety signs, and customized wayfinding signboards for residential and commercial complexes.",
        iconName: "Compass",
        image: "/images/services/road-signage.svg",
        gallery: ["/images/services/road-signage.svg", "/images/gallery/signage-7.svg"]
      }
    ]
  },
  {
    id: "branding",
    title: "Branding & Outdoor Marketing",
    description: "Complete branding campaigns that transform physical assets into high-converting marketing channels.",
    services: [
      {
        id: "indoor-outdoor-branding",
        title: "Indoor & Outdoor Branding",
        slug: "branding-solutions-ajman",
        description: "Complete store frontage wraps, wall murals, window decals, and high-impact custom wallpaper installations.",
        longDescription: "Convert bare spaces into dynamic sales funnels. We utilize high-quality vinyl wraps, frosted glass decals, and custom wall graphics to branding offices, retail outlets, and showrooms across Ajman and Dubai.",
        iconName: "Palette",
        image: "/images/services/outdoor-branding.svg",
        gallery: ["/images/services/outdoor-branding.svg", "/images/gallery/branding-1.svg"]
      },
      {
        id: "vehicle-graphics",
        title: "Vehicle Graphics & Wraps",
        slug: "vehicle-graphics-ajman",
        description: "Mobile advertising for cars, delivery vans, pickup trucks, and corporate fleets with premium protective laminate.",
        longDescription: "Turn your vehicle fleet into moving billboards. From simple cut-vinyl logos and contact info to full visual vehicle wraps, Falsafi uses premium cast vinyls (3M/Avery) that survive extreme UAE heat.",
        iconName: "Car",
        image: "/images/services/vehicle-graphics.svg",
        gallery: ["/images/services/vehicle-graphics.svg", "/images/gallery/vehicle-1.svg", "/images/gallery/vehicle-2.svg"]
      },
      {
        id: "exhibition-events",
        title: "Exhibition Events & Backdrops",
        slug: "exhibition-events-dubai",
        description: "Bespoke media walls, event backdrops, stage designs, and registration desks for exhibitions and corporate events.",
        longDescription: "Make a statement at Dubai World Trade Centre or any UAE venue. We design, fabricate, and install premium photo backdrops, red-carpet event walls, roll-up displays, and temporary event setups.",
        iconName: "Ticket",
        image: "/images/services/exhibition-events.svg",
        gallery: ["/images/services/exhibition-events.svg", "/images/gallery/events-1.svg"]
      },
      {
        id: "custom-stand",
        title: "Custom Exhibition Stands",
        slug: "custom-stands-fabrication",
        description: "Unique, custom-engineered wooden and metal exhibition stands and product display kiosks.",
        longDescription: "Go beyond standard shell schemes. Our designers create immersive 3D custom stands equipped with lighting, integrated product displays, and lounge sections, fully managed from concept to dismantle.",
        iconName: "Store",
        image: "/images/services/custom-stands.svg",
        gallery: ["/images/services/custom-stands.svg", "/images/gallery/events-2.svg"]
      }
    ]
  },
  {
    id: "printing",
    title: "High-Volume Commercial Printing",
    description: "Ultra-crisp offset and digital printing services utilizing state-of-the-art machinery for speed and detail.",
    services: [
      {
        id: "flyer-business-card",
        title: "Flyers & Brochures",
        slug: "flyers-printing-dubai",
        description: "High-quality corporate flyers, tri-fold brochures, booklets, and leaflets with custom finishes.",
        longDescription: "Printed on premium paper stocks ranging from 150gsm to 350gsm. Select from matte, gloss, velvet lamination, spot UV, or gold-foil accenting to leave an indelible impression.",
        iconName: "FileText",
        image: "/images/services/printing-flyers.svg",
        gallery: ["/images/services/printing-flyers.svg", "/images/gallery/printing-1.svg"]
      },
      {
        id: "visiting-card",
        title: "Visiting & Business Cards",
        slug: "visiting-card-printing",
        description: "Premium visiting cards: luxury cotton cards, plastic cards, embossed cards, and luxury gold metallic foil cards.",
        longDescription: "Your business card is a physical handshake. We offer custom die-cuts, round corners, extra-thick painted edges, and luxurious soft-touch textures to ensure your networking counts.",
        iconName: "Contact",
        image: "/images/services/visiting-cards.svg",
        gallery: ["/images/services/visiting-cards.svg", "/images/gallery/printing-2.svg"]
      },
      {
        id: "fabric-printing",
        title: "Fabric & Flag Printing",
        slug: "fabric-printing-uae",
        description: "Dye-sublimation fabric printing for corporate flags, tension fabric lightboxes, and promotional banners.",
        longDescription: "Using weather-resistant textile dyes, we print high-resolution custom flags, table throws, backdrops, and trade show fabrics that can be washed and reused without fading.",
        iconName: "Shirt",
        image: "/images/services/fabric-printing.svg",
        gallery: ["/images/services/fabric-printing.svg", "/images/gallery/printing-3.svg"]
      },
      {
        id: "canvas-banner",
        title: "Canvas & Banner Printing",
        slug: "canvas-banner-printing",
        description: "Wide-format outdoor flex banners, rollup banners, mesh grids, and high-fidelity fine art canvas printing.",
        longDescription: "Wide-format printing up to 5 meters wide. Our outdoor flex banners are UV-resistant and windproof, while our fine-art canvas prints are stretched on premium wooden frames, perfect for gallery displays.",
        iconName: "Image",
        image: "/images/services/canvas-banners.svg",
        gallery: ["/images/services/canvas-banners.svg", "/images/gallery/printing-4.svg"]
      }
    ]
  },
  {
    id: "gifts",
    title: "Corporate Gifts & Merchandise",
    description: "Express your appreciation with customized promotional items designed to retain brand recall.",
    services: [
      {
        id: "gift-printing",
        title: "Gift Printing (Mugs, Diaries, Pens)",
        slug: "corporate-gift-printing",
        description: "Branded corporate diaries, customized ceramic mugs, executive pens, thermal bottles, and gift sets.",
        longDescription: "Premium branding solutions for corporate giveaways. We offer high-quality laser engraving, UV flatbed printing, and screen printing on metals, plastics, leather, and wood.",
        iconName: "Gift",
        image: "/images/services/gift-printing.svg",
        gallery: ["/images/services/gift-printing.svg", "/images/gallery/gifts-1.svg"]
      },
      {
        id: "id-card-printing",
        title: "Corporate ID Cards",
        slug: "id-card-printing-services",
        description: "High-resolution plastic PVC ID cards, security access cards, and custom printed lanyards.",
        longDescription: "Produce official employee ID cards, membership cards, and visitor passes. Complete with barcodes, magnetic strips, smart chips, and personalized heavy-duty custom neck lanyards.",
        iconName: "UserCheck",
        image: "/images/services/id-cards.svg",
        gallery: ["/images/services/id-cards.svg", "/images/gallery/gifts-2.svg"]
      },
      {
        id: "trophy-printing",
        title: "Trophies & Awards",
        slug: "trophy-awards-printing",
        description: "Exquisite crystal, acrylic, and wooden trophies, medals, and recognition plaques with laser engraving.",
        longDescription: "Honor excellence with customized awards. We design and engrave luxurious crystal blocks, acrylic shapes, and wooden shields complete with metal plates and glowing colors.",
        iconName: "Trophy",
        image: "/images/services/trophies.svg",
        gallery: ["/images/services/trophies.svg", "/images/gallery/gifts-3.svg"]
      },
      {
        id: "cap-clothing",
        title: "Cap & Apparel Printing",
        slug: "cap-tshirt-printing",
        description: "Custom embroidery and heat-transfer screen printing for corporate t-shirts, caps, and uniforms.",
        longDescription: "Equip your team with branded caps, polo shirts, and safety jackets. We specialize in durable embroidery and high-definition direct-to-garment (DTG) printing that holds up to industrial washing.",
        iconName: "Footprints",
        image: "/images/services/cap-printing.svg",
        gallery: ["/images/services/cap-printing.svg", "/images/gallery/gifts-4.svg"]
      }
    ]
  },
  {
    id: "art",
    title: "Drawings & Fine Art Academy",
    description: "Igniting creativity through academic and recreational art programs for all ages in Ajman.",
    services: [
      {
        id: "drawing-art-classes",
        title: "Drawing & Art Classes",
        slug: "drawing-art-classes-ajman",
        description: "Comprehensive painting, sketching, and canvas art instruction for kids and adults.",
        longDescription: "Nurture the artist within. Falsafi Art Academy runs structured evening and weekend classes led by professional artists. Learn acrylic painting, charcoal sketching, watercolor techniques, and portrait design.",
        iconName: "Brush",
        image: "/images/services/art-classes.svg",
        gallery: ["/images/services/art-classes.svg", "/images/gallery/art-1.svg", "/images/gallery/art-2.svg"]
      }
    ]
  }
];
