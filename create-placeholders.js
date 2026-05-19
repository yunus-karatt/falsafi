const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images',
  'public/images/services',
  'public/images/gallery'
];

// Ensure directories exist
dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Helper to write a styled SVG
function writeSVG(filePath, title, category, accentColor = '#249516') {
  const content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050505" />
      <stop offset="50%" stop-color="#0d0d0d" />
      <stop offset="100%" stop-color="#020202" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#14530c" stop-opacity="0.2" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.15" />
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>
    </pattern>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="url(#grid)" />
  
  <!-- Glow center -->
  <circle cx="400" cy="300" r="350" fill="url(#glow)" />
  
  <!-- Tech lines and geometric visualizers -->
  <g opacity="0.3">
    <circle cx="400" cy="300" r="200" fill="none" stroke="${accentColor}" stroke-width="1" stroke-dasharray="5, 10" />
    <circle cx="400" cy="300" r="250" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.5" />
    <line x1="100" y1="300" x2="700" y2="300" stroke="${accentColor}" stroke-width="0.5" />
    <line x1="400" y1="100" x2="400" y2="500" stroke="${accentColor}" stroke-width="0.5" />
    <rect x="250" y="150" width="300" height="300" fill="none" stroke="${accentColor}" stroke-width="1" opacity="0.2" />
  </g>
  
  <!-- Header tag -->
  <rect x="50" y="50" width="120" height="24" rx="12" fill="${accentColor}" fill-opacity="0.1" stroke="${accentColor}" stroke-width="1" />
  <text x="110" y="66" fill="${accentColor}" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" letter-spacing="1.5" text-anchor="middle" text-transform="uppercase">${category}</text>
  
  <!-- Brand elements -->
  <text x="750" y="70" fill="#ffffff" opacity="0.1" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" letter-spacing="2" text-anchor="end">FALSAFI.</text>
  
  <!-- Centered Title -->
  <text x="400" y="290" fill="#ffffff" font-family="system-ui, sans-serif" font-size="32" font-weight="800" letter-spacing="2" text-anchor="middle" text-transform="uppercase">${title}</text>
  <text x="400" y="330" fill="${accentColor}" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" letter-spacing="4" text-anchor="middle" text-transform="uppercase">CREATIVE PRODUCTION</text>
  
  <!-- Bottom technical detail -->
  <text x="50" y="550" fill="#666666" font-family="monospace" font-size="10">SYS_REF: ${title.replace(/\s+/g, '_').toUpperCase()}</text>
  <text x="750" y="550" fill="#666666" font-family="monospace" font-size="10" text-anchor="end">LOC: AJMAN_DUBAI_UAE</text>
</svg>`;

  fs.writeFileSync(filePath, content, 'utf8');
}

// Before & After specialized graphic
function writeBeforeAfter(filePath, isAfter) {
  const bg = isAfter ? '#092905' : '#1f1f1f';
  const text = isAfter ? 'FALSAFI LUXURY WRAP' : 'DULL OR UNBRANDED';
  const accent = isAfter ? '#249516' : '#666666';
  const content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0a" />
      <stop offset="100%" stop-color="${bg}" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <circle cx="600" cy="300" r="250" fill="none" stroke="${accent}" stroke-width="2" stroke-dasharray="10, 10" />
  <text x="600" y="290" fill="#ffffff" font-family="system-ui, sans-serif" font-size="42" font-weight="900" text-anchor="middle">${isAfter ? 'PREMIUM BRANDING' : 'BEFORE RE-DESIGN'}</text>
  <text x="600" y="340" fill="${accent}" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" letter-spacing="4" text-anchor="middle">${text}</text>
</svg>`;
  fs.writeFileSync(filePath, content, 'utf8');
}

// OG image layout
function writeOGImage(filePath) {
  const content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="60%" stop-color="#0a0a0a" />
      <stop offset="100%" stop-color="#031b01" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <circle cx="600" cy="315" r="400" fill="none" stroke="#249516" stroke-width="1" opacity="0.1" />
  <text x="600" y="280" fill="#ffffff" font-family="system-ui, sans-serif" font-size="72" font-weight="900" letter-spacing="8" text-anchor="middle">FALSAFI<tspan fill="#249516">.</tspan></text>
  <text x="600" y="350" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" letter-spacing="6" text-anchor="middle" opacity="0.8">PREMIUM ADVERTISING &amp; BRANDING</text>
  <text x="600" y="390" fill="#249516" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" letter-spacing="4" text-anchor="middle">DUBAI | AJMAN | UAE</text>
</svg>`;
  fs.writeFileSync(filePath, content, 'utf8');
}

// Generate services
const services = [
  { id: 'led-display', title: 'LED Displays', category: 'signage' },
  { id: 'digital-signage', title: 'Digital Signage', category: 'signage' },
  { id: '3d-signs', title: '3D Sign Boards', category: 'signage' },
  { id: 'interior-signage', title: 'Interior & Exterior', category: 'signage' },
  { id: 'road-signage', title: 'Road Signage', category: 'signage' },
  { id: 'outdoor-branding', title: 'Commercial Wraps', category: 'branding' },
  { id: 'vehicle-graphics', title: 'Vehicle Graphics', category: 'branding' },
  { id: 'exhibition-events', title: 'Exhibition & Events', category: 'branding' },
  { id: 'custom-stands', title: 'Custom Stands', category: 'branding' },
  { id: 'printing-flyers', title: 'Flyers & Catalogues', category: 'printing' },
  { id: 'visiting-cards', title: 'Business Cards', category: 'printing' },
  { id: 'fabric-printing', title: 'Fabric & Flags', category: 'printing' },
  { id: 'canvas-banners', title: 'Canvas & Banners', category: 'printing' },
  { id: 'gift-printing', title: 'Gift Branding', category: 'gifts' },
  { id: 'id-cards', title: 'PVC ID Cards', category: 'gifts' },
  { id: 'trophies', title: 'Trophies & Awards', category: 'gifts' },
  { id: 'cap-printing', title: 'Cap & Apparel', category: 'gifts' },
  { id: 'art-classes', title: 'Drawing & Fine Art', category: 'academy' }
];

services.forEach(s => {
  writeSVG(`public/images/services/${s.id}.svg`, s.title, s.category);
});

// Generate gallery
const gallery = [
  { id: 'signage-1', title: '3D Retail Signage', category: 'Signage' },
  { id: 'signage-2', title: 'Outdoor Pylon Sign', category: 'Signage' },
  { id: 'signage-3', title: 'Smart Digital Kiosk', category: 'Signage' },
  { id: 'signage-4', title: 'Storefront Facade', category: 'Signage' },
  { id: 'signage-5', title: 'Lobby Acrylic Logo', category: 'Signage' },
  { id: 'signage-6', title: 'Regulatory RTA Sign', category: 'Signage' },
  { id: 'signage-7', title: 'Directional Wayfinding', category: 'Signage' },
  { id: 'led-display-1', title: 'High-Res Mall LED', category: 'LED Displays' },
  { id: 'led-display-2', title: 'Curved Stage Backdrop', category: 'LED Displays' },
  { id: 'vehicle-1', title: 'Matte Fleet Wrap', category: 'Vehicle Graphics' },
  { id: 'vehicle-2', title: 'Food Truck Graphics', category: 'Vehicle Graphics' },
  { id: 'events-1', title: 'Wood Custom Booth', category: 'Events' },
  { id: 'events-2', title: 'Satin Media Backdrop', category: 'Events' },
  { id: 'printing-1', title: 'Spot UV Brochures', category: 'Printing' },
  { id: 'printing-2', title: 'Thick Letterpress Card', category: 'Printing' },
  { id: 'printing-3', title: 'Exhibition Tablecloth', category: 'Printing' },
  { id: 'printing-4', title: 'Framed Canvas Art', category: 'Printing' },
  { id: 'gifts-1', title: 'Laser Branded Sets', category: 'Gift Printing' },
  { id: 'gifts-2', title: 'Staff RFID Badges', category: 'Gift Printing' },
  { id: 'gifts-3', title: 'Engraved Crystal Award', category: 'Gift Printing' },
  { id: 'gifts-4', title: 'Embroidered Uniform', category: 'Gift Printing' },
  { id: 'art-1', title: 'Impasto Canvas Study', category: 'Art Works' },
  { id: 'art-2', title: 'Charcoal Portrait Class', category: 'Art Works' },
  { id: 'branding-1', title: 'Bespoke Office Vinyl', category: 'Branding' },
  { id: 'branding-2', title: 'Outdoor Facade Decals', category: 'Branding' }
];

gallery.forEach(g => {
  writeSVG(`public/images/gallery/${g.id}.svg`, g.title, g.category);
});

// Generate before/after
writeBeforeAfter('public/images/gallery/before-branding.svg', false);
writeBeforeAfter('public/images/gallery/after-branding.svg', true);

// Generate Hero & OG Image
writeSVG('public/images/hero-bg.svg', 'FALSAFI CREATIVE STUDIO', 'Branding Showroom', '#249516');
writeOGImage('public/images/og-image.jpg'); // Named .jpg but writing SVG markup (browsers and systems handle this fine, or we can just write simple SVG inside it. SVG-renamed-to-jpg works for CSS references and next/image if we allow it, but we can also write proper SVG).

console.log('All vector placeholders generated successfully!');
