# Glass Repair Showcase Images

This directory contains scripts and tools for generating professional before/after images for your glass repair showcase.

## Generated Files

### SVG Images (Located in `/public/images/showcase/`)
- `window-before.svg` / `window-after.svg` - Residential window glass repair
- `shower-before.svg` / `shower-after.svg` - Shower door glass repair  
- `storefront-before.svg` / `storefront-after.svg` - Commercial storefront glass repair

### Scripts and Tools
- `generate-showcase-images.js` - Node.js script that generates the SVG images
- `convert-to-jpg.sh` - Bash script for converting SVG to JPG format
- `svg-to-jpg-converter.html` - HTML tool for browser-based SVG to JPG conversion

## Image Specifications

- **Dimensions**: 800x600 pixels
- **Format**: SVG (vector), convertible to JPG
- **Features**: 
  - Professional gradients and styling
  - Realistic glass damage effects (cracks, breaks)
  - Clean, pristine "after" appearance
  - Status badges (BEFORE/AFTER)
  - Descriptive text
  - TopGlassRepair.com branding

## Converting SVG to JPG

Since ImageMagick wasn't available during generation, you have several options:

### Option 1: Install Tools and Auto-Convert
```bash
sudo apt update && sudo apt install librsvg2-bin imagemagick
cd scripts
bash convert-to-jpg.sh
```

### Option 2: Browser-Based Conversion
1. Open `scripts/svg-to-jpg-converter.html` in a web browser
2. Click "Download All Images as JPG"
3. Save files to `/public/images/showcase/`

### Option 3: Online Conversion
1. Visit https://convertio.co/svg-jpg/
2. Upload SVG files, set resolution to 800x600
3. Download JPG files

### Option 4: Graphics Software
- **GIMP**: File → Open → Select SVG → Export as JPG
- **Adobe Illustrator**: File → Export → Export As → JPEG
- **Figma**: Import SVG → Export as JPG

## Using the Images

Once converted to JPG, you can use these images in:
- Website galleries and portfolios
- Marketing materials and brochures
- Social media posts
- Customer testimonials
- Service showcase pages

## Regenerating Images

To regenerate the SVG images with different styles or content:

```bash
node generate-showcase-images.js
```

You can modify the script to:
- Change colors and gradients
- Adjust damage patterns
- Update text and descriptions
- Add new image types
- Modify dimensions

## Image Details

### Window Repair Images
- **Before**: Shows cracked window with multiple fracture points and impact damage
- **After**: Crystal clear window glass with professional finish

### Shower Door Images  
- **Before**: Damaged shower door with visible cracks and safety concerns
- **After**: Pristine shower door glass in like-new condition

### Storefront Images
- **Before**: Broken commercial glass affecting business appearance and security
- **After**: Professional storefront glass restored to perfection

All images include professional branding and are suitable for commercial use in your glass repair business marketing materials.