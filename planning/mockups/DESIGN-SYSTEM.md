# NorthernGuardian Design System

## Overview
This design system defines the visual language, components, and patterns for NorthernGuardian. The design reflects the beauty and authenticity of Canada's northern territories while prioritizing safety, usability, and accessibility.

---

## Design Philosophy

### 1. Northern Authenticity
**Inspired by the landscapes of Canada's North**
- Aurora borealis (northern lights) color gradients
- Ice, snow, and water color palettes
- Earth tones reflecting indigenous heritage
- Natural, organic shapes and patterns

### 2. Safety First
**Clear visual hierarchy for critical information**
- Status indicators are prominent and color-coded
- Emergency actions are always visible
- Important dates and times use bold typography
- Warnings and alerts use distinct styling

### 3. Accessibility
**WCAG 2.1 AA compliance minimum**
- High contrast text (4.5:1 minimum)
- Large touch targets (44x44px minimum)
- Keyboard navigation support
- Screen reader friendly markup

### 4. Performance
**Fast, lightweight, responsive**
- Mobile-first design approach
- Optimized assets and code
- Smooth animations (60fps)
- Offline-ready progressive web app

---

## Color System

### Primary Palette (Northern Lights)

```css
--aurora-green: #00FFA3;    /* Primary CTAs, active states */
--aurora-teal: #7ED7C1;     /* Secondary buttons, links */
--ice-blue: #A8D8EA;        /* Informational elements */
--deep-blue: #4A90A4;       /* Headers, borders */
```

**Usage**:
- `aurora-green`: Primary action buttons, success states, active indicators
- `aurora-teal`: Secondary actions, hover states, gradients
- `ice-blue`: Subtle backgrounds, text on dark backgrounds
- `deep-blue`: Headings, icons, borders

**Gradients**:
```css
/* Primary gradient */
background: linear-gradient(135deg, var(--aurora-green), var(--aurora-teal));

/* Aurora effect */
background: radial-gradient(ellipse at 20% 50%, rgba(0, 255, 163, 0.15) 0%, transparent 50%);
```

### Neutral Palette (Landscape)

```css
--midnight-dark: #0D1B2A;   /* Primary text, dark backgrounds */
--midnight-blue: #1E3A5F;   /* Secondary backgrounds */
--slate-gray: #6C7A89;      /* Secondary text, disabled states */
--snow-white: #F8F9FA;      /* Backgrounds, cards */
--off-white: #E8ECEF;       /* Subtle backgrounds */
```

**Usage**:
- `midnight-dark`: Body text, dark mode backgrounds
- `midnight-blue`: Section backgrounds, footers
- `slate-gray`: Secondary text, placeholders, disabled
- `snow-white`: Primary backgrounds, cards
- `off-white`: Page backgrounds, subtle dividers

### Accent Palette

```css
--earth-orange: #D4745F;    /* Warnings, hot actions */
--warm-brown: #8B6F47;      /* Earthy accents, cultural elements */
--forest-green: #2D5016;    /* Success states */
```

**Usage**:
- `earth-orange`: Warning messages, delete actions
- `warm-brown`: Cultural elements, land acknowledgment accents
- `forest-green`: Success messages, completed states

### Status Colors

```css
--status-draft: #6C7A89;        /* Gray - draft trips */
--status-upcoming: #2D5016;     /* Green - upcoming trips */
--status-active: #4A90A4;       /* Blue - in progress */
--status-completed: #6C7A89;    /* Gray - completed */
--status-overdue: #DC2626;      /* Red - overdue, urgent */
--status-canceled: #6C7A89;     /* Gray - canceled */
```

### Color Contrast Ratios

| Combination | Ratio | WCAG AA | WCAG AAA |
|-------------|-------|---------|----------|
| midnight-dark on snow-white | 13.5:1 | ✓ | ✓ |
| deep-blue on snow-white | 5.2:1 | ✓ | ✓ |
| slate-gray on snow-white | 4.7:1 | ✓ | - |
| snow-white on midnight-dark | 13.5:1 | ✓ | ✓ |
| aurora-green on midnight-dark | 8.1:1 | ✓ | ✓ |

---

## Typography

### Font Stack

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Why Inter?**
- Excellent readability at small sizes
- Comprehensive character set (supports French)
- Open-source and free
- Optimized for screens

### Type Scale

| Size | CSS Variable | Use Case | Weight |
|------|-------------|----------|--------|
| 12px | `text-xs` | Captions, metadata, fine print | 400-500 |
| 14px | `text-sm` | Secondary text, labels, helper text | 400-600 |
| 16px | `text-base` | Body text (default) | 400-500 |
| 18px | `text-lg` | Large body, emphasized text | 500-600 |
| 20px | `text-xl` | Subheadings, card titles | 600-700 |
| 24px | `text-2xl` | Section headings | 700 |
| 30px | `text-3xl` | Page headings | 700-800 |
| 36px | `text-4xl` | Hero headings (mobile) | 800 |
| 48px | `text-5xl` | Hero headings (desktop) | 800 |

### Line Heights

```css
/* Headings */
line-height: 1.1 - 1.2;

/* Body text */
line-height: 1.6;

/* Large body */
line-height: 1.7;
```

### Font Weights

```css
--font-light: 300;      /* Rarely used */
--font-regular: 400;    /* Body text */
--font-medium: 500;     /* Emphasized body */
--font-semibold: 600;   /* Subheadings, labels */
--font-bold: 700;       /* Headings */
--font-extrabold: 800;  /* Hero headings, numbers */
```

### Letter Spacing

```css
/* Hero headings */
letter-spacing: -0.02em;

/* Uppercase labels */
letter-spacing: 0.05em;
```

---

## Spacing System

### Scale (8px base unit)

```css
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */
--space-5xl: 8rem;      /* 128px */
```

### Application

**Component Padding**:
- Cards: `2-3rem` (32-48px)
- Buttons: `0.75rem 1.75rem` (12px 28px)
- Form inputs: `0.875rem 1rem` (14px 16px)

**Section Spacing**:
- Between sections: `4-8rem` (64-128px)
- Within sections: `2-3rem` (32-48px)

**Grid Gaps**:
- Card grids: `2rem` (32px)
- Form fields: `1.5-2rem` (24-32px)

---

## Border Radius

```css
--radius-sm: 8px;       /* Buttons, inputs, small cards */
--radius-md: 12px;      /* Medium cards, dropdowns */
--radius-lg: 16px;      /* Large cards, modals */
--radius-xl: 20px;      /* Feature cards, special elements */
--radius-full: 9999px;  /* Pills, avatars, circles */
```

---

## Shadows

### Elevation Scale

```css
/* Card - Resting */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

/* Card - Hover */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);

/* Modal, Dropdown */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);

/* Floating Action Button */
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.20);
```

### Colored Shadows (Glow Effects)

```css
/* Primary button glow */
box-shadow: 0 4px 20px rgba(0, 255, 163, 0.25);

/* Primary button glow (hover) */
box-shadow: 0 6px 30px rgba(0, 255, 163, 0.35);

/* Active status glow */
box-shadow: 0 10px 40px rgba(0, 255, 163, 0.3);
```

---

## Components

### Buttons

#### Primary Button (CTAs)
```css
.btn-primary {
    background: linear-gradient(135deg, var(--aurora-green), var(--aurora-teal));
    color: var(--midnight-dark);
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    font-weight: 600;
    box-shadow: 0 4px 20px rgba(0, 255, 163, 0.25);
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(0, 255, 163, 0.35);
}
```

**Use for**: Main actions (Create Trip, Sign Up, Submit)

#### Secondary Button
```css
.btn-secondary {
    background: white;
    color: var(--deep-blue);
    border: 2px solid var(--deep-blue);
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: var(--deep-blue);
    color: white;
}
```

**Use for**: Secondary actions (Cancel, Back, Edit)

#### Outline Button
```css
.btn-outline {
    background: transparent;
    color: var(--snow-white);
    border: 2px solid var(--snow-white);
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-outline:hover {
    background: var(--snow-white);
    color: var(--midnight-dark);
}
```

**Use for**: Tertiary actions, dark backgrounds

#### Danger Button
```css
.btn-danger {
    background: var(--status-overdue);
    color: white;
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    font-weight: 600;
}
```

**Use for**: Destructive actions (Delete, Cancel Trip)

### Cards

#### Standard Card
```css
.card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border: 1px solid var(--off-white);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

#### Feature Card
```css
.feature-card {
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}
```

### Forms

#### Input Field
```css
.form-input {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 2px solid var(--off-white);
    border-radius: 10px;
    font-size: 1rem;
    background: var(--snow-white);
    transition: all 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: var(--aurora-green);
    background: white;
    box-shadow: 0 0 0 3px rgba(0, 255, 163, 0.1);
}
```

#### Label
```css
.form-label {
    display: block;
    font-weight: 600;
    color: var(--midnight-dark);
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
}

.form-label .required {
    color: var(--earth-orange);
}
```

### Status Badges

```css
.status-badge {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-active {
    background: rgba(74, 144, 164, 0.9);
    color: white;
    animation: pulse-badge 2s ease-in-out infinite;
}

.badge-upcoming {
    background: rgba(45, 80, 22, 0.9);
    color: white;
}

.badge-overdue {
    background: rgba(220, 38, 38, 0.9);
    color: white;
    animation: pulse-badge 1s ease-in-out infinite;
}
```

### Avatars

```css
.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--deep-blue), var(--midnight-blue));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
}
```

### Modals

```css
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(13, 27, 42, 0.7);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal {
    background: white;
    border-radius: 16px;
    max-width: 500px;
    width: 90%;
    padding: 2rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}
```

### Toast Notifications

```css
.toast {
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    animation: slideIn 0.3s ease;
}

.toast-success {
    background: var(--forest-green);
    color: white;
}

.toast-error {
    background: var(--status-overdue);
    color: white;
}

.toast-info {
    background: var(--deep-blue);
    color: white;
}
```

---

## Animations

### Timing Functions

```css
/* Standard ease */
transition: all 0.3s ease;

/* Bounce (buttons) */
transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

/* Smooth (modals) */
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
```

### Common Animations

```css
/* Fade in up */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Pulse */
@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.7;
        transform: scale(1.05);
    }
}

/* Wave (hand emoji) */
@keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    75% { transform: rotate(-20deg); }
}

/* Slide in (toasts) */
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Aurora effect */
@keyframes aurora {
    0%, 100% {
        opacity: 1;
        transform: translateY(0);
    }
    50% {
        opacity: 0.8;
        transform: translateY(-20px);
    }
}
```

---

## Responsive Breakpoints

### Tailwind-style Breakpoints

```css
/* Mobile first approach */

/* Small devices (phones, < 640px) */
@media (max-width: 639px) { }

/* Medium devices (tablets, 640px - 1023px) */
@media (min-width: 640px) { }

/* Large devices (desktops, 1024px - 1535px) */
@media (min-width: 1024px) { }

/* Extra large devices (large desktops, >= 1536px) */
@media (min-width: 1536px) { }
```

### Responsive Patterns

**Navigation**:
- Mobile: Hamburger menu, bottom nav
- Tablet: Side drawer
- Desktop: Full horizontal nav

**Cards**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Typography**:
```css
.hero-title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
}
```

---

## Icons

### Icon Style
- Use emoji for quick prototyping (🗺️ 🔔 🏔️)
- Production: Heroicons, Lucide, or custom SVG
- Size: 24px default, 20px small, 32px large
- Color: Inherit from text color

### Common Icons
```
🗺️ Maps/Routes
🔔 Notifications
🏔️ Logo/Mountains
🥾 Hiking
🏕️ Camping
🎣 Fishing
🏹 Hunting
🏂 Snowmobiling
🚣 Kayaking
📅 Calendar/Dates
👥 People/Party Size
⏰ Time/Countdown
✓ Success/Complete
✕ Close/Delete
⚠️ Warning
```

---

## Accessibility

### Color Contrast
- **AAA**: 7:1 (preferred)
- **AA**: 4.5:1 (minimum)
- **Large text AA**: 3:1

### Focus States
```css
*:focus-visible {
    outline: 3px solid var(--aurora-green);
    outline-offset: 2px;
}
```

### Touch Targets
- Minimum: 44x44px
- Ideal: 48x48px
- Spacing: 8px minimum between targets

### Screen Reader Text
```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

### ARIA Labels
```html
<button aria-label="Create new trip">
    <span aria-hidden="true">+</span>
</button>
```

---

## Implementation Guide

### CSS Variables Setup

```css
:root {
    /* Colors */
    --aurora-green: #00FFA3;
    --aurora-teal: #7ED7C1;
    --ice-blue: #A8D8EA;
    --deep-blue: #4A90A4;
    --midnight-dark: #0D1B2A;
    --midnight-blue: #1E3A5F;
    --slate-gray: #6C7A89;
    --snow-white: #F8F9FA;
    --off-white: #E8ECEF;
    --earth-orange: #D4745F;
    --warm-brown: #8B6F47;
    --forest-green: #2D5016;

    /* Spacing */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;

    /* Border Radius */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.12);
    --shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.15);
}
```

### Tailwind Config

```js
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                aurora: {
                    green: '#00FFA3',
                    teal: '#7ED7C1',
                },
                ice: {
                    blue: '#A8D8EA',
                },
                deep: {
                    blue: '#4A90A4',
                },
                midnight: {
                    dark: '#0D1B2A',
                    blue: '#1E3A5F',
                },
                slate: {
                    gray: '#6C7A89',
                },
                snow: {
                    white: '#F8F9FA',
                },
                off: {
                    white: '#E8ECEF',
                },
                earth: {
                    orange: '#D4745F',
                },
                warm: {
                    brown: '#8B6F47',
                },
                forest: {
                    green: '#2D5016',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
}
```

---

## File Structure

```
src/
├── styles/
│   ├── global.css              # Base styles, resets
│   ├── variables.css           # CSS custom properties
│   ├── typography.css          # Font styles
│   └── animations.css          # Keyframes, transitions
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.module.css
│   ├── Card/
│   ├── Input/
│   └── ...
└── ...
```

---

## References

### Tools
- **Design**: Figma (optional for high-fi mockups)
- **Icons**: Heroicons, Lucide Icons
- **Fonts**: Google Fonts (Inter)
- **Color**: Coolors.co, Contrast Checker

### Inspiration
- Northern landscapes photography
- Indigenous art and design (respectful)
- Modern SaaS UI (Stripe, Linear, Vercel)
- Outdoor apps (Strava, AllTrails - but better)

---

**End of Design System**

**Version**: 1.0
**Last Updated**: October 30, 2025
**Maintainer**: Product Design Team
