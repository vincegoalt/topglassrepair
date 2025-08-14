#!/bin/bash

# SVG to JPG Conversion Script for Glass Repair Showcase Images
# This script provides multiple methods to convert the generated SVG files to JPG

SHOWCASE_DIR="../public/images/showcase"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=== Glass Repair Showcase Image Converter ==="
echo "Converting SVG files to JPG format (800x600px)"
echo ""

# Check if we're in the right directory
if [ ! -d "$SHOWCASE_DIR" ]; then
    echo "Error: Showcase directory not found. Please run this script from the scripts directory."
    exit 1
fi

echo "Found SVG files:"
ls -la "$SHOWCASE_DIR"/*.svg 2>/dev/null || echo "No SVG files found!"
echo ""

# Method 1: Try rsvg-convert (librsvg)
if command -v rsvg-convert &> /dev/null; then
    echo "Method 1: Using rsvg-convert..."
    for svg_file in "$SHOWCASE_DIR"/*.svg; do
        if [ -f "$svg_file" ]; then
            filename=$(basename "$svg_file" .svg)
            jpg_file="$SHOWCASE_DIR/${filename}.jpg"
            echo "Converting $filename.svg to $filename.jpg..."
            rsvg-convert -w 800 -h 600 -f jpeg -o "$jpg_file" "$svg_file"
        fi
    done
    echo "Conversion complete using rsvg-convert!"
    exit 0
fi

# Method 2: Try ImageMagick
if command -v convert &> /dev/null; then
    echo "Method 2: Using ImageMagick convert..."
    for svg_file in "$SHOWCASE_DIR"/*.svg; do
        if [ -f "$svg_file" ]; then
            filename=$(basename "$svg_file" .svg)
            jpg_file="$SHOWCASE_DIR/${filename}.jpg"
            echo "Converting $filename.svg to $filename.jpg..."
            convert -size 800x600 "$svg_file" "$jpg_file"
        fi
    done
    echo "Conversion complete using ImageMagick!"
    exit 0
fi

# Method 3: Try Inkscape
if command -v inkscape &> /dev/null; then
    echo "Method 3: Using Inkscape..."
    for svg_file in "$SHOWCASE_DIR"/*.svg; do
        if [ -f "$svg_file" ]; then
            filename=$(basename "$svg_file" .svg)
            jpg_file="$SHOWCASE_DIR/${filename}.jpg"
            echo "Converting $filename.svg to $filename.jpg..."
            inkscape --export-type=jpeg --export-width=800 --export-height=600 --export-filename="$jpg_file" "$svg_file"
        fi
    done
    echo "Conversion complete using Inkscape!"
    exit 0
fi

# No tools available - provide instructions
echo "No conversion tools found on this system."
echo ""
echo "=== CONVERSION OPTIONS ==="
echo ""
echo "Option 1: Install conversion tools (requires admin/sudo access):"
echo "  sudo apt update && sudo apt install librsvg2-bin imagemagick"
echo "  Then run this script again."
echo ""
echo "Option 2: Use the HTML converter:"
echo "  1. Open scripts/svg-to-jpg-converter.html in a web browser"
echo "  2. The page will automatically load and convert all SVG files"
echo "  3. Click 'Download All Images as JPG' to get all files"
echo ""
echo "Option 3: Manual online conversion:"
echo "  1. Visit https://convertio.co/svg-jpg/ or similar online converter"
echo "  2. Upload each SVG file from: $SHOWCASE_DIR"
echo "  3. Convert to JPG with 800x600 resolution"
echo "  4. Download and save back to the showcase directory"
echo ""
echo "Option 4: Use any graphics software:"
echo "  - GIMP: File > Open > Select SVG > Export as JPG"
echo "  - Adobe Illustrator: File > Export > Export As > JPEG"
echo "  - Figma: Import SVG > Export as JPG"
echo ""
echo "Generated SVG files are located in:"
echo "  $(realpath "$SHOWCASE_DIR")"
echo ""
echo "Target JPG filenames should be:"
for svg_file in "$SHOWCASE_DIR"/*.svg; do
    if [ -f "$svg_file" ]; then
        filename=$(basename "$svg_file" .svg)
        echo "  - ${filename}.jpg"
    fi
done