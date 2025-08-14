const fs = require('fs');
const path = require('path');

// Ensure the showcase directory exists
const showcaseDir = path.join(__dirname, '../public/images/showcase');
if (!fs.existsSync(showcaseDir)) {
  fs.mkdirSync(showcaseDir, { recursive: true });
}

// Function to create SVG content
function createSVG(type, isAfter, title, description) {
  const width = 800;
  const height = 600;
  
  // Base colors and gradients
  const baseGradient = isAfter 
    ? `<defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#e0f2fe;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#b3e5fc;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="glass" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
          <stop offset="70%" style="stop-color:#e3f2fd;stop-opacity:0.7" />
          <stop offset="100%" style="stop-color:#bbdefb;stop-opacity:0.5" />
        </radialGradient>
      </defs>`
    : `<defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f5f5f5;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="glass" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.6" />
          <stop offset="70%" style="stop-color:#f5f5f5;stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:0.3" />
        </radialGradient>
        <pattern id="crack" patternUnits="userSpaceOnUse" width="4" height="4">
          <path d="M 0 2 L 4 2" stroke="#666" stroke-width="0.5"/>
          <path d="M 2 0 L 2 4" stroke="#666" stroke-width="0.5"/>
        </pattern>
      </defs>`;

  // Glass panel based on type
  let glassPanel = '';
  let damageOverlay = '';
  
  switch(type) {
    case 'window':
      glassPanel = `
        <rect x="100" y="100" width="600" height="400" fill="url(#glass)" stroke="#ccc" stroke-width="2" rx="5"/>
        <rect x="380" y="100" width="40" height="400" fill="#ddd" stroke="#bbb" stroke-width="1"/>
        <rect x="100" y="280" width="600" height="40" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      `;
      if (!isAfter) {
        damageOverlay = `
          <path d="M 200 200 L 350 300 L 250 350 L 300 250 Z" fill="none" stroke="#333" stroke-width="3" opacity="0.7"/>
          <path d="M 300 250 L 450 200 L 400 350 L 350 300" fill="none" stroke="#333" stroke-width="2" opacity="0.6"/>
          <circle cx="300" cy="275" r="15" fill="none" stroke="#333" stroke-width="2" opacity="0.5"/>
          <path d="M 280 200 L 320 320" stroke="#666" stroke-width="1" opacity="0.8"/>
          <path d="M 250 250 L 350 280" stroke="#666" stroke-width="1" opacity="0.8"/>
        `;
      }
      break;
      
    case 'shower':
      glassPanel = `
        <rect x="150" y="50" width="500" height="500" fill="url(#glass)" stroke="#ccc" stroke-width="2" rx="10"/>
        <rect x="600" y="50" width="50" height="500" fill="#ddd" stroke="#bbb" stroke-width="1"/>
        <circle cx="625" cy="300" r="8" fill="#999"/>
      `;
      if (!isAfter) {
        damageOverlay = `
          <path d="M 300 150 L 400 250 L 350 350 L 280 300 Z" fill="none" stroke="#333" stroke-width="4" opacity="0.7"/>
          <path d="M 350 350 L 500 400 L 450 450 L 400 400" fill="none" stroke="#333" stroke-width="3" opacity="0.6"/>
          <path d="M 280 300 L 220 400" stroke="#666" stroke-width="2" opacity="0.8"/>
          <path d="M 400 250 L 480 200" stroke="#666" stroke-width="2" opacity="0.8"/>
          <ellipse cx="350" cy="300" rx="30" ry="20" fill="none" stroke="#333" stroke-width="2" opacity="0.5"/>
        `;
      }
      break;
      
    case 'storefront':
      glassPanel = `
        <rect x="50" y="150" width="700" height="350" fill="url(#glass)" stroke="#333" stroke-width="3"/>
        <rect x="50" y="120" width="700" height="30" fill="#666"/>
        <rect x="50" y="500" width="700" height="20" fill="#666"/>
        <rect x="390" y="150" width="20" height="350" fill="#666"/>
        <rect x="350" y="400" width="100" height="100" fill="#444" stroke="#333" stroke-width="2"/>
        <circle cx="420" cy="450" r="3" fill="#999"/>
      `;
      if (!isAfter) {
        damageOverlay = `
          <path d="M 200 250 L 300 350 L 250 400 L 180 320 Z" fill="none" stroke="#333" stroke-width="4" opacity="0.8"/>
          <path d="M 250 400 L 350 450 L 320 480 L 280 440" fill="none" stroke="#333" stroke-width="3" opacity="0.7"/>
          <path d="M 500 200 L 600 300 L 550 350 L 480 280 Z" fill="none" stroke="#333" stroke-width="4" opacity="0.8"/>
          <path d="M 180 320 L 120 280" stroke="#666" stroke-width="2" opacity="0.8"/>
          <path d="M 300 350 L 380 320" stroke="#666" stroke-width="2" opacity="0.8"/>
          <path d="M 480 280 L 520 250" stroke="#666" stroke-width="2" opacity="0.8"/>
          <rect x="180" y="300" width="150" height="2" fill="url(#crack)" opacity="0.6"/>
        `;
      }
      break;
  }

  const statusText = isAfter ? 'AFTER - REPAIRED' : 'BEFORE - DAMAGED';
  const statusColor = isAfter ? '#4CAF50' : '#F44336';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  ${baseGradient}
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg)"/>
  
  <!-- Glass Panel -->
  ${glassPanel}
  
  <!-- Damage Overlay (only for before images) -->
  ${damageOverlay}
  
  <!-- Title -->
  <text x="400" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#333">
    ${title}
  </text>
  
  <!-- Status Badge -->
  <rect x="20" y="20" width="200" height="40" fill="${statusColor}" rx="20" opacity="0.9"/>
  <text x="120" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">
    ${statusText}
  </text>
  
  <!-- Description -->
  <text x="400" y="580" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#666">
    ${description}
  </text>
  
  <!-- Professional watermark -->
  <text x="780" y="590" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="#999" opacity="0.7">
    TopGlassRepair.com
  </text>
</svg>`;
}

// Generate all images
const images = [
  {
    type: 'window',
    title: 'Window Glass Repair',
    beforeDesc: 'Cracked window glass with multiple fracture points',
    afterDesc: 'Crystal clear window glass - professionally repaired'
  },
  {
    type: 'shower',
    title: 'Shower Door Repair',
    beforeDesc: 'Damaged shower door with visible cracks and chips',
    afterDesc: 'Pristine shower door glass - like new condition'
  },
  {
    type: 'storefront',
    title: 'Storefront Glass Repair',
    beforeDesc: 'Broken storefront glass affecting business appearance',
    afterDesc: 'Professional storefront glass - restored to perfection'
  }
];

console.log('Generating showcase images...');

images.forEach(image => {
  // Generate before image
  const beforeSVG = createSVG(image.type, false, image.title, image.beforeDesc);
  const beforePath = path.join(showcaseDir, `${image.type}-before.svg`);
  fs.writeFileSync(beforePath, beforeSVG);
  console.log(`Created: ${beforePath}`);
  
  // Generate after image
  const afterSVG = createSVG(image.type, true, image.title, image.afterDesc);
  const afterPath = path.join(showcaseDir, `${image.type}-after.svg`);
  fs.writeFileSync(afterPath, afterSVG);
  console.log(`Created: ${afterPath}`);
});

console.log('All showcase images generated successfully!');
console.log('Note: Images are in SVG format. To convert to JPG, you can use online converters or ImageMagick when available.');