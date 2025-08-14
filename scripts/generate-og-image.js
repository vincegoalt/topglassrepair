const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create a 1200x630 canvas
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background gradient
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#1e40af');
gradient.addColorStop(1, '#1e3a8a');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// Glass pattern overlay
ctx.globalAlpha = 0.1;
ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
for (let i = 0; i < width; i += 50) {
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(i + 50, height);
  ctx.stroke();
}
for (let i = 0; i < width; i += 50) {
  ctx.beginPath();
  ctx.moveTo(0, i);
  ctx.lineTo(width, i + 50);
  ctx.stroke();
}
ctx.globalAlpha = 1;

// 24/7 Badge
ctx.save();
ctx.translate(1050, 80);
ctx.rotate(15 * Math.PI / 180);
ctx.fillStyle = '#fbbf24';
ctx.beginPath();
ctx.roundRect(-60, -25, 120, 50, 25);
ctx.fill();
ctx.fillStyle = '#1e40af';
ctx.font = 'bold 18px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('24/7 SERVICE', 0, 0);
ctx.restore();

// Main title
ctx.fillStyle = 'white';
ctx.font = 'bold 72px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
ctx.shadowBlur = 6;
ctx.shadowOffsetY = 4;
ctx.fillText('TOP GLASS REPAIRS', width / 2, 200);

// Tagline
ctx.fillStyle = '#fbbf24';
ctx.font = '600 36px Arial';
ctx.shadowBlur = 4;
ctx.shadowOffsetY = 2;
ctx.fillText('Emergency Glass Service Los Angeles', width / 2, 260);

// Services
ctx.fillStyle = 'white';
ctx.font = '24px Arial';
ctx.globalAlpha = 0.95;
ctx.shadowBlur = 2;
ctx.fillText('Window Repair • Shower Doors • Storefronts', width / 2, 340);
ctx.fillText('Mirror Installation • Commercial Glass', width / 2, 380);
ctx.globalAlpha = 1;

// Phone number
ctx.fillStyle = '#fbbf24';
ctx.font = 'bold 42px Arial';
ctx.shadowBlur = 4;
ctx.shadowOffsetY = 2;
ctx.fillText('📞 (562) 436-2616', width / 2, 480);

// Save as JPEG
const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
const outputPath = path.join(__dirname, '..', 'public', 'images', 'og-image.jpg');
fs.writeFileSync(outputPath, buffer);

console.log('✅ OG image generated successfully at:', outputPath);