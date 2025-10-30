# Arctic Guardian Logo Assets

This directory contains all official Arctic Guardian logo files in various formats and variations.

## Quick Start

**Need a logo right now?** Use these:

- **Website header**: [`horizontal-full.svg`](horizontal-full.svg)
- **App icon**: [`app-icon-square.svg`](app-icon-square.svg)
- **Favicon**: Use `primary-shield-mountain.svg` at 32x32px
- **Dark backgrounds**: [`reverse-light-on-dark.svg`](reverse-light-on-dark.svg)
- **Embroidery/engraving**: [`monochrome-black.svg`](monochrome-black.svg)

## Available Files

### Full Color Logos

| File | Size | Use Case |
|------|------|----------|
| `primary-shield-mountain.svg` | 200x200 | Primary logo, general use |
| `app-icon-square.svg` | 512x512 | Mobile app icons (iOS/Android) |
| `horizontal-full.svg` | 600x150 | Website headers, marketing materials |
| `minimal-beacon.svg` | 200x200 | Modern/minimalist contexts |

### Monochrome Variations

| File | Use Case |
|------|----------|
| `monochrome-black.svg` | Single-color printing, stamps, engraving |
| `monochrome-white.svg` | White logos on dark backgrounds |
| `reverse-light-on-dark.svg` | Dark mode interfaces, full-color on dark |

## Visual Preview

**👁️ View all logos in your browser:**

Open [`logo-viewer.html`](logo-viewer.html) to see:
- All logo concepts side-by-side
- Size comparisons (32px to 200px)
- Color palette reference
- Usage guidelines
- Implementation examples

## Implementation Guide

### HTML

```html
<!-- Standard implementation -->
<img src="logos/horizontal-full.svg" alt="Arctic Guardian" height="48">

<!-- Inline SVG (recommended for color control) -->
<svg>
  <!-- Copy contents from SVG file -->
</svg>
```

### React/Next.js

```jsx
import Image from 'next/image'

<Image
  src="/logos/horizontal-full.svg"
  alt="Arctic Guardian"
  width={200}
  height={50}
/>
```

### CSS Background

```css
.logo {
  background-image: url('/logos/primary-shield-mountain.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 60px;
}
```

### Favicon Package

```html
<!-- Basic favicon -->
<link rel="icon" type="image/svg+xml" href="/logos/primary-shield-mountain.svg">

<!-- Apple Touch Icon (convert SVG to PNG 180x180) -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Android (convert SVG to PNG 192x192, 512x512) -->
<link rel="manifest" href="/site.webmanifest">
```

## Sizing Guidelines

### Minimum Sizes

**Digital:**
- Icon only: 32px × 32px minimum
- Horizontal logo: 180px width minimum
- Maximum: Unlimited (SVG scales infinitely)

**Print:**
- Icon only: 0.5 inches (12.7mm) minimum
- Horizontal logo: 2 inches (50.8mm) width minimum

### Clear Space

Maintain clear space equal to the height of the "A" in ARCTIC around all sides of the logo.

```
[Clear Space] = Logo Height × 0.15
```

**Example:**
- 200px logo = 30px clear space on all sides
- 60px logo = 9px clear space on all sides

## Color Reference

### Brand Colors Used in Logo

```css
/* Aurora Gradient (Primary) */
--aurora-green: #00FFA3;
--aurora-teal: #7ED7C1;
--ice-blue: #A8D8EA;

/* Shield/Mountains */
--deep-blue: #4A90A4;
--midnight-blue: #1E3A5F;
--midnight-dark: #0D1B2A;

/* Accents */
--snow-white: #F8F9FA;
```

### When to Use Which Color Version

| Background | Logo Version | File |
|------------|--------------|------|
| White/Light | Full Color | `primary-shield-mountain.svg` |
| Dark (#0D1B2A) | Reverse | `reverse-light-on-dark.svg` |
| Medium Gray | Full Color or Reverse | Test both for contrast |
| Black | White Monochrome | `monochrome-white.svg` |
| Color Photo | Full Color with Background | `app-icon-square.svg` |

## Usage Rules

### ✅ DO:

- Use approved SVG files only
- Maintain aspect ratio when scaling
- Ensure sufficient contrast with background
- Use monochrome versions for single-color applications
- Keep clear space around logo

### ❌ DON'T:

- Rotate or tilt the logo
- Stretch or distort the logo
- Change colors (use provided variations)
- Add effects (drop shadow, outer glow, etc.)
- Place on busy/patterned backgrounds
- Use below minimum size
- Separate shield from mountains in primary logo

## File Formats

### Current Available: SVG

**Why SVG?**
- Scales infinitely without quality loss
- Small file size
- Editable in code
- Animatable with CSS/JS
- Perfect for web and modern print

### Need Other Formats?

**To generate PNG:**
1. Open SVG in browser
2. Take screenshot at desired size
3. Or use online converter: [CloudConvert](https://cloudconvert.com/svg-to-png)

**Recommended PNG exports:**
- 512×512 (app icons)
- 1024×1024 (high-res web)
- 2048×2048 (print source)
- 32×32, 64×64, 128×128, 256×256 (favicon package)

**For print (vector):**
- Open SVG in Adobe Illustrator
- Export as: AI, EPS, or PDF

## Examples by Context

### Website

**Navigation Header:**
```html
<nav>
  <img src="/logos/horizontal-full.svg" alt="Arctic Guardian" height="48">
  <!-- Navigation items -->
</nav>
```

**Footer:**
```html
<footer>
  <img src="/logos/primary-shield-mountain.svg" alt="Arctic Guardian" width="60">
  <!-- Footer content -->
</footer>
```

### Mobile App

**App Icon (iOS):**
- Use `app-icon-square.svg`
- Export to PNG 1024×1024
- Submit to App Store Connect

**Splash Screen:**
- Use `primary-shield-mountain.svg` centered
- Or `horizontal-full.svg` for branded splash

**In-App Logo:**
- Use `primary-shield-mountain.svg` in navigation
- Scale to 32-44px for mobile UI

### Marketing

**Business Cards:**
- Front: `primary-shield-mountain.svg` (icon) or `horizontal-full.svg`
- Back: Optional `minimal-beacon.svg` as watermark

**Letterhead:**
- Header: `horizontal-full.svg` at 2-2.5" width
- Footer: Small `primary-shield-mountain.svg` (optional)

**Email Signature:**
```html
<img src="https://yourdomain.com/logos/horizontal-full.svg"
     alt="Arctic Guardian"
     width="180"
     height="45">
```

**Social Media:**
- Profile picture: `app-icon-square.svg` (square crop)
- Cover image: `horizontal-full.svg` centered on branded background
- Posts: Use full-color versions on clean backgrounds

### Print & Merchandise

**T-Shirts:**
- Front: `primary-shield-mountain.svg` (large, centered)
- Back: Optional `horizontal-full.svg` across shoulders
- Embroidery: Use `monochrome-black.svg` (simplified for stitching)

**Patches:**
- `primary-shield-mountain.svg` works perfectly
- Circular or shield-shaped patch backing

**Stickers:**
- Die-cut `primary-shield-mountain.svg`
- Add small white border for durability

**Signage:**
- Indoor: Full color versions
- Outdoor: Ensure UV-resistant printing
- Dimensional: Consider `monochrome-black.svg` for CNC/laser cutting

## Logo Selection Decision Tree

```
Need a logo for...

├─ Website/App?
│  ├─ Header/Navigation → horizontal-full.svg
│  ├─ App Icon → app-icon-square.svg
│  ├─ Favicon → primary-shield-mountain.svg (32px)
│  └─ Dark Mode → reverse-light-on-dark.svg
│
├─ Print?
│  ├─ Color Printing → primary-shield-mountain.svg or horizontal-full.svg
│  ├─ Black & White → monochrome-black.svg
│  ├─ Embroidery → monochrome-black.svg (simplified)
│  └─ Engraving/Etching → monochrome-black.svg
│
├─ Social Media?
│  ├─ Profile Picture → app-icon-square.svg
│  ├─ Posts/Cards → primary-shield-mountain.svg or horizontal-full.svg
│  └─ Stories/Reels → vertical arrangement (create from horizontal)
│
└─ Merchandise?
   ├─ Apparel → primary-shield-mountain.svg (front), horizontal-full.svg (back)
   ├─ Patches → primary-shield-mountain.svg
   └─ Promotional Items → depends on item, usually primary-shield-mountain.svg
```

## Troubleshooting

### Logo looks pixelated
**Solution:** You're using a raster format (PNG/JPG). Use SVG instead.

### Colors look wrong
**Solution:** Ensure you're using the correct logo variation for your background color. Check contrast.

### Logo too small to read
**Solution:** You're below minimum size. Scale up or use icon-only version.

### Logo doesn't fit my space
**Solution:**
- Narrow space: Use `primary-shield-mountain.svg` (square icon)
- Wide space: Use `horizontal-full.svg`
- Custom: Adjust viewBox in SVG code (maintain aspect ratio)

### Need different colors
**Solution:** Use provided monochrome versions. Don't manually change colors in full-color versions.

## Version History

- **v1.0** (October 30, 2025): Initial logo design release
  - Primary shield mountain concept
  - App icon square version
  - Horizontal full lockup
  - Minimal beacon alternative
  - Monochrome variations

## Contact

Questions about logo usage? Need custom variations?

- See full documentation: [`LOGO-DESIGN.md`](../LOGO-DESIGN.md)
- View design system: [`../mockups/DESIGN-SYSTEM.md`](../mockups/DESIGN-SYSTEM.md)
- Mission statement: [`../../MISSION.md`](../../MISSION.md)

---

**Arctic Guardian** • Protecting adventurers, one trip at a time. 🏔️

*"Get everyone home safe at the end of their trip."*
