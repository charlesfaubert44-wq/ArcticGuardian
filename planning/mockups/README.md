# NorthernGuardian UI Mockups

## Overview
This directory contains **high-fidelity HTML/CSS mockups** of NorthernGuardian's key screens. These are fully functional prototypes you can open in your browser to see the exact visual design before writing any React code.

## 🎨 What's Included

> **✨ NEW: Enhanced versions now available!**
>
> For a more polished, interactive experience with advanced animations, glassmorphism, custom cursor, and micro-interactions, check out:
> - **[homepage-enhanced.html](homepage-enhanced.html)** - Hero experience with particles & floating elements
> - **[dashboard-enhanced.html](dashboard-enhanced.html)** - Command center with stagger animations & glows
> - **[create-trip-enhanced.html](create-trip-enhanced.html)** - Immersive form with interactive cards
>
> Full documentation: **[ENHANCED-README.md](ENHANCED-README.md)**

---

### Standard Mockups

### 1. **Homepage** ([homepage.html](homepage.html))
The public-facing landing page that introduces NorthernGuardian to new visitors.

**Features**:
- Hero section with aurora-inspired gradient background
- Animated northern lights effect
- Feature cards with hover animations
- "How It Works" 3-step section
- Land acknowledgment section
- Responsive navigation

**Best viewed at**: Desktop (1400px+) and Mobile (< 640px)

**Key Design Elements**:
- Gradient text for "Safely" in hero
- Pulse animations on stat numbers
- Smooth scroll-triggered animations (simulated)
- Northern color palette throughout

---

### 2. **Dashboard** ([dashboard.html](dashboard.html))
The main authenticated user interface showing trip overview and management.

**Features**:
- Active trip with countdown timer
- Upcoming trips grid
- Past trips section
- Stats cards (active trips, total trips, people notified)
- Quick action buttons (View, Edit, Share, Check In)
- Status badges with pulse animations

**Best viewed at**: Desktop (1200px+) and Mobile

**Key Design Elements**:
- Waving hand animation in welcome
- Pulsing status dots for active trips
- Hover effects on trip cards (lift + shadow)
- Prominent "Check In" button for active trips

---

### 3. **Create Trip Form** ([create-trip.html](create-trip.html))
Multi-step trip creation wizard (showing Step 1 with previews of Steps 2-3).

**Features**:
- Progress indicator (3 steps)
- Activity type selector (grid with icons)
- Date/time pickers
- Party size number input with +/- buttons
- Auto-save indicator (pulsing dot)
- Form validation states
- Preview of map interface (Step 2)
- Preview of safety info (Step 3)

**Best viewed at**: Desktop and Mobile

**Key Design Elements**:
- Active step highlighting in progress bar
- Activity cards with hover/selected states
- Custom number input with styled buttons
- Focus states with aurora green glow

---

## 📋 Design System Reference

See **[DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)** for complete documentation including:
- Color palette with hex codes
- Typography scale and weights
- Spacing system (8px grid)
- Component styles (buttons, cards, forms)
- Animation keyframes
- Responsive breakpoints
- Accessibility guidelines

## 🚀 How to Use These Mockups

### 1. **View in Browser**
Simply open any `.html` file in your browser (Chrome, Firefox, Safari, Edge):

```bash
# Option A: Double-click the file
# Option B: Use command line
open homepage.html              # Mac
start homepage.html             # Windows
xdg-open homepage.html          # Linux
```

### 2. **Reference During Development**
Use these as **pixel-perfect references** when building React components:

**Example Workflow**:
1. Open `dashboard.html` in browser
2. Inspect element (F12) to see exact CSS
3. Copy colors, spacing, border-radius to your React component
4. Match the visual appearance

### 3. **Extract Code Snippets**
All CSS is in `<style>` tags in each file. You can:
- Copy entire CSS blocks to your stylesheets
- Convert to Tailwind classes
- Use as Styled Components or CSS Modules

**Example**:
```html
<!-- From homepage.html -->
<style>
.btn-primary {
    background: linear-gradient(135deg, var(--aurora-green), var(--aurora-teal));
    color: var(--midnight-dark);
    box-shadow: 0 4px 20px rgba(0, 255, 163, 0.25);
}
</style>
```

Becomes (React + Tailwind):
```jsx
<button className="bg-gradient-to-br from-aurora-green to-aurora-teal text-midnight-dark shadow-aurora">
    Get Started
</button>
```

### 4. **Test Responsiveness**
Open in browser and resize window to test mobile/tablet/desktop views:
- **Mobile**: < 640px (iPhone, Android)
- **Tablet**: 640-1024px (iPad)
- **Desktop**: > 1024px

Or use browser DevTools (F12 → Toggle Device Toolbar):
- iPhone 14 Pro (393x852)
- iPad (1024x768)
- Desktop (1440x900)

## 🎨 Design Highlights

### Color Palette
```
Aurora Green:  #00FFA3  (Primary CTAs)
Aurora Teal:   #7ED7C1  (Secondary actions)
Ice Blue:      #A8D8EA  (Informational)
Deep Blue:     #4A90A4  (Headings)
Midnight Dark: #0D1B2A  (Text)
Snow White:    #F8F9FA  (Backgrounds)
```

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: 12px - 48px (responsive with `clamp()`)
- **Weights**: 400, 500, 600, 700, 800

### Spacing
- **8px base unit** (0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem, 8rem)
- **Card padding**: 2-3rem
- **Button padding**: 0.75rem 1.75rem

### Border Radius
- **Small**: 8px (buttons, inputs)
- **Medium**: 12px (small cards)
- **Large**: 16px (cards)
- **Extra Large**: 20px (feature cards)

### Shadows
```css
/* Cards */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

/* Cards (hover) */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);

/* Primary button glow */
box-shadow: 0 4px 20px rgba(0, 255, 163, 0.25);
```

## 📱 Responsive Design

All mockups are **mobile-first** and fully responsive:

### Breakpoints
- **Mobile**: < 640px (single column)
- **Tablet**: 640-1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

### Layout Changes
| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Navigation | Hamburger | Drawer | Full nav |
| Trip Cards | 1 column | 2 columns | 3 columns |
| Hero CTA | Stacked | Horizontal | Horizontal |
| Form | 1 column | 1 column | 2 columns |

## 🎭 Animations

### Included Animations
1. **Aurora Effect**: Subtle background gradient movement (hero)
2. **Pulse**: Status dots, active badges
3. **Wave**: Hand emoji in welcome
4. **Hover Lift**: Cards translate up on hover
5. **Fade In Up**: Hero content entrance
6. **Button Glow**: Shadow expansion on hover

### Animation Timing
```css
/* Standard */
transition: all 0.3s ease;

/* Smooth (modals) */
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
```

## 🧪 Testing Checklist

When reviewing mockups, check:

- [ ] All text is readable (contrast 4.5:1+)
- [ ] Buttons have 44x44px minimum tap target
- [ ] Hover states work on desktop
- [ ] Focus states visible (keyboard navigation)
- [ ] Mobile: no horizontal scroll
- [ ] Mobile: all content fits without text cutoff
- [ ] Animations smooth at 60fps
- [ ] Colors match design system
- [ ] Spacing consistent (8px grid)
- [ ] Typography scale correct

## 🛠️ Converting to React

### Step-by-Step Conversion

**1. Copy HTML Structure**
```html
<!-- From mockup -->
<div class="trip-card">
    <div class="trip-map">...</div>
    <div class="trip-content">...</div>
</div>
```

**2. Convert to JSX Component**
```jsx
// TripCard.tsx
export function TripCard({ trip }) {
    return (
        <div className="trip-card">
            <div className="trip-map">...</div>
            <div className="trip-content">...</div>
        </div>
    );
}
```

**3. Extract CSS**
```css
/* TripCard.module.css */
.tripCard {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.tripCard:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

**4. Or Use Tailwind**
```jsx
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
    {/* ... */}
</div>
```

## 📦 File Organization

```
planning/mockups/
├── homepage.html           # Public landing page
├── dashboard.html          # Authenticated dashboard
├── create-trip.html        # Trip creation form
├── DESIGN-SYSTEM.md        # Complete design reference
└── README.md               # This file
```

## 🎯 Next Steps

1. **Review Mockups**: Open each HTML file and review design
2. **Provide Feedback**: Note any changes needed
3. **Reference Design System**: Use DESIGN-SYSTEM.md during development
4. **Start Building**: Convert HTML/CSS to React components
5. **Match Visuals**: Use mockups as pixel-perfect reference

## 💡 Tips for Development

### Use CSS Variables
```css
/* Define once */
:root {
    --aurora-green: #00FFA3;
}

/* Use everywhere */
.btn {
    background: var(--aurora-green);
}
```

### Maintain Consistency
- Always use design system colors (no random hex codes)
- Stick to spacing scale (no arbitrary margins)
- Use defined border-radius values
- Follow typography scale

### Component Organization
```
src/components/
├── Button/
│   ├── Button.tsx
│   ├── Button.module.css
│   └── Button.stories.tsx
├── Card/
└── ...
```

### Accessibility
- Use semantic HTML (`<nav>`, `<main>`, `<article>`)
- Add ARIA labels for icons
- Test keyboard navigation (Tab, Enter, Escape)
- Check color contrast (4.5:1 minimum)

## 🤝 Questions or Feedback?

If you need:
- Different screen sizes
- Additional components
- Design variations
- Higher fidelity mockups (Figma)

Create an issue or reach out to the design team.

---

## 📸 Screenshots

### Homepage
Beautiful northern-themed landing page with aurora gradients:
- Hero section with gradient text
- Feature cards with icons
- 3-step "How It Works"
- Land acknowledgment

### Dashboard
Clean, functional dashboard with trip management:
- Active trip with countdown
- Upcoming trips grid
- Stats overview
- Quick actions

### Create Trip
Intuitive multi-step form:
- Progress indicator
- Activity type selector
- Date/time inputs
- Auto-save indicator

---

**Designed for**: NorthernGuardian MVP
**Version**: 1.0
**Date**: October 30, 2025
**Design by**: Product Team with Claude Code

**Ready to build something incredible!** 🏔️
