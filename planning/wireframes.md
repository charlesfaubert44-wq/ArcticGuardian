# NorthernGuardian - Wireframes & UI Flow

## Document Information
- **Project**: NorthernGuardian
- **Version**: 1.0
- **Date**: October 30, 2025
- **Design System**: Northern-themed, mobile-first responsive design
- **Framework**: React + Tailwind CSS

---

## Table of Contents
1. [Design Principles](#design-principles)
2. [Color Palette & Typography](#color-palette--typography)
3. [Component Library](#component-library)
4. [Screen Wireframes](#screen-wireframes)
   - [Public Pages](#public-pages)
   - [Authentication](#authentication)
   - [Dashboard](#dashboard)
   - [Trip Creation & Management](#trip-creation--management)
   - [Trip Sharing](#trip-sharing)
   - [User Profile](#user-profile)
   - [Community](#community)
5. [User Flows](#user-flows)
6. [Responsive Breakpoints](#responsive-breakpoints)
7. [Accessibility Guidelines](#accessibility-guidelines)

---

## Design Principles

### 1. Northern Aesthetic
- **Visual Identity**: Aurora-inspired gradients, icy blues, earth tones
- **Imagery**: Northern landscapes (mountains, lakes, forests, aurora)
- **Cultural Respect**: Indigenous land acknowledgment, respectful use of cultural elements
- **Authenticity**: Reflects real northern life, not clichéd or romanticized

### 2. Safety-First Design
- **Clear Hierarchy**: Critical safety information prominent (dates, emergency contacts, status)
- **Status Indicators**: Color-coded trip statuses (green=upcoming, blue=active, red=overdue)
- **Emergency Actions**: One-click check-in, extend deadline, contact authorities
- **Information Density**: Balance detail with readability (no overwhelming walls of text)

### 3. Mobile-First Responsive
- **Primary Device**: Designed for smartphones (users planning on-the-go)
- **Touch-Friendly**: Large tap targets (min 44x44px), swipe gestures
- **Offline-Ready**: PWA with offline functionality, clear online/offline indicators
- **Performance**: Fast load times, optimized images, lazy loading

### 4. Simple & Intuitive
- **Minimal Clicks**: Max 3 clicks to complete any primary action
- **Progressive Disclosure**: Show basics first, details on demand
- **Smart Defaults**: Pre-fill forms, suggest common values
- **Clear CTAs**: Primary actions obvious (large buttons, high contrast)

---

## Color Palette & Typography

### Color System

**Primary Colors (Northern Lights)**:
- `aurora-green`: #00FFA3 (Primary CTAs, active states)
- `aurora-teal`: #7ED7C1 (Secondary buttons, links)
- `ice-blue`: #A8D8EA (Informational elements)
- `deep-blue`: #4A90A4 (Headers, borders)

**Neutral Colors (Landscape)**:
- `midnight-dark`: #0D1B2A (Text, dark backgrounds)
- `midnight-blue`: #1E3A5F (Secondary backgrounds)
- `slate-gray`: #6C7A89 (Secondary text, disabled states)
- `snow-white`: #F8F9FA (Backgrounds, cards)
- `off-white`: #E8ECEF (Subtle backgrounds)

**Accent Colors**:
- `earth-orange`: #D4745F (Warnings, hot actions)
- `warm-brown`: #8B6F47 (Earthy accents)
- `forest-green`: #2D5016 (Success states)

**Status Colors**:
- `status-draft`: #6C7A89 (Gray - draft trips)
- `status-upcoming`: #2D5016 (Green - upcoming trips)
- `status-active`: #4A90A4 (Blue - in progress)
- `status-completed`: #6C7A89 (Gray - completed)
- `status-overdue`: #DC2626 (Red - overdue, urgent)
- `status-canceled`: #6C7A89 (Gray - canceled)

### Typography

**Font Families**:
- **Headings**: `Inter`, sans-serif (bold, 600-800 weight)
- **Body**: `Inter`, sans-serif (regular, 400-500 weight)
- **Monospace**: `JetBrains Mono` (for coordinates, technical data)

**Type Scale**:
- `text-xs`: 12px (captions, metadata)
- `text-sm`: 14px (secondary text, labels)
- `text-base`: 16px (body text)
- `text-lg`: 18px (large body, emphasized)
- `text-xl`: 20px (subheadings)
- `text-2xl`: 24px (section headings)
- `text-3xl`: 30px (page headings)
- `text-4xl`: 36px (hero headings)

**Line Height**:
- Headings: 1.2
- Body: 1.6 (for readability)

---

## Component Library

### Buttons

**Primary Button** (CTAs):
```
┌────────────────────────┐
│  ◆ Create New Trip    │  ← Aurora green bg, white text, rounded
└────────────────────────┘
Hover: Darken 10%, subtle scale
Focus: Ring outline (accessibility)
```

**Secondary Button**:
```
┌────────────────────────┐
│  ○ Cancel              │  ← White bg, deep-blue border, blue text
└────────────────────────┘
```

**Danger Button**:
```
┌────────────────────────┐
│  ✕ Delete Trip         │  ← Red bg, white text
└────────────────────────┘
```

### Cards

**Trip Card**:
```
┌─────────────────────────────────────┐
│ 🗺️ [Map Thumbnail]                  │ ← 16:9 ratio thumbnail
├─────────────────────────────────────┤
│ Hidden Lake Trail           [UPCOMING] │ ← Status badge top-right
│ 🥾 Hiking                             │
│ 📅 Nov 5, 10:00 AM - 6:00 PM          │
│ 👥 3 people • 15.2 km                 │
├─────────────────────────────────────┤
│ [View] [Share] [Edit]                │ ← Action buttons
└─────────────────────────────────────┘
```

**User Info Card**:
```
┌─────────────────────────────────────┐
│ 👤 Sarah Chen                        │
│    sarah.chen@example.com            │
│    +1-867-555-0123                   │
│                                      │
│    ✓ 5 trips created                 │
│    ✓ 1 active trip                   │
└─────────────────────────────────────┘
```

### Forms

**Input Field**:
```
Trip Name *
┌─────────────────────────────────────┐
│ Great Slave Lake Fishing Trip       │ ← Border: slate-gray, focus: aurora-green
└─────────────────────────────────────┘
Helper text: Max 100 characters
```

**Dropdown/Select**:
```
Activity Type *
┌─────────────────────────────────────┐
│ Fishing                      ▼      │
└─────────────────────────────────────┘
Options: Hiking, Camping, Fishing, Hunting, Snowmobiling, Kayaking, Other
```

**Date/Time Picker**:
```
Start Date & Time *
┌──────────────────┬──────────────────┐
│ Nov 15, 2025  📅 │  8:00 AM  🕐     │
└──────────────────┴──────────────────┘
```

### Navigation

**Header (Desktop)**:
```
┌───────────────────────────────────────────────────────────────┐
│ 🏔️ NorthernGuardian  [Dashboard] [My Trips] [Profile]  [👤 Sarah] │
└───────────────────────────────────────────────────────────────┘
```

**Header (Mobile)**:
```
┌─────────────────────────────────────┐
│ ☰  NorthernGuardian          [👤]  │ ← Hamburger menu, user avatar
└─────────────────────────────────────┘
```

**Mobile Menu (Expanded)**:
```
┌─────────────────────────────────────┐
│                              ✕      │ ← Close button
│                                      │
│ 👤 Sarah Chen                        │
│                                      │
│ ◆ Dashboard                          │
│ ◆ My Trips                           │
│ ◆ Create New Trip                    │
│ ◆ Profile                            │
│ ◆ Emergency Contacts                 │
│ ◆ Help                               │
│ ◆ Log Out                            │
│                                      │
└─────────────────────────────────────┘
```

### Status Badges

```
[DRAFT]      ← Gray background
[UPCOMING]   ← Green background
[ACTIVE]     ← Blue background, pulsing animation
[COMPLETED]  ← Gray background, checkmark icon
[OVERDUE]    ← Red background, urgent icon, pulsing
[CANCELED]   ← Gray background, strikethrough
```

### Modals

**Confirmation Modal**:
```
┌─────────────────────────────────────┐
│                              ✕      │
│                                      │
│  ⚠️  Delete Trip?                   │
│                                      │
│  Are you sure you want to delete    │
│  "Great Slave Lake Fishing Trip"?   │
│  This cannot be undone.              │
│                                      │
│  [Cancel]        [Delete Trip]      │
│                                      │
└─────────────────────────────────────┘
```

### Toast Notifications

```
┌─────────────────────────────────────┐
│ ✓ Trip created successfully!        │ ← Green, auto-dismiss 3s
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ ⚠️ Failed to save trip. Try again.  │ ← Red, manual dismiss
└─────────────────────────────────────┘
```

---

## Screen Wireframes

## Public Pages

### 1. Homepage (`/`)

**Desktop View**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│ 🏔️ NorthernGuardian    [Features] [Community] [About]  [Login] [Sign Up] │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│                    [HERO IMAGE: Northern Lights Over Lake]              │
│                                                                          │
│              Plan Your Northern Adventure Safely                        │
│         Create comprehensive trip plans that keep you safe              │
│         and give your loved ones peace of mind                          │
│                                                                          │
│                      [Get Started Free →]                               │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Why NorthernGuardian?                                                  │
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │ 🗺️ Trip Plans │  │ 🔔 Alerts    │  │ 🏔️ Northern  │                 │
│  │              │  │              │  │              │                  │
│  │ Interactive  │  │ Automatic    │  │ Built for    │                  │
│  │ maps, routes,│  │ check-ins &  │  │ Canada's     │                  │
│  │ safety info  │  │ emergency    │  │ North, by    │                  │
│  │              │  │ notifications│  │ northerners  │                  │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  How It Works                                                           │
│                                                                          │
│  1️⃣ Create Trip → 2️⃣ Share Plan → 3️⃣ Check In Safe                    │
│                                                                          │
│  [Visual diagram showing flow]                                          │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Land Acknowledgment                                                    │
│  We acknowledge that we operate on the traditional territories          │
│  of indigenous peoples across Canada's North...                         │
│  [Learn More →]                                                         │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│ Footer: © 2025 NorthernGuardian | Privacy | Terms | Contact            │
└─────────────────────────────────────────────────────────────────────────┘
```

**Mobile View**:
```
┌─────────────────────────────────────┐
│ ☰  NorthernGuardian          Login │
├─────────────────────────────────────┤
│                                      │
│   [HERO IMAGE: Northern Lights]     │
│                                      │
│   Plan Your Northern                │
│   Adventure Safely                  │
│                                      │
│   Create comprehensive trip         │
│   plans that keep you safe          │
│                                      │
│   [Get Started Free →]              │
│                                      │
├─────────────────────────────────────┤
│                                      │
│ Why NorthernGuardian?               │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ 🗺️ Trip Plans                    │ │
│ │ Interactive maps, routes,        │ │
│ │ safety information               │ │
│ └─────────────────────────────────┘ │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ 🔔 Automatic Alerts              │ │
│ │ Check-ins and emergency          │ │
│ │ notifications                    │ │
│ └─────────────────────────────────┘ │
│                                      │
│ [Continue scrolling...]             │
│                                      │
└─────────────────────────────────────┘
```

**Key Elements**:
- Hero image: Stunning northern landscape (aurora, mountains, lake)
- Clear value proposition above the fold
- Strong CTA: "Get Started Free"
- Three benefit cards with icons
- How it works (3-step visual)
- Land acknowledgment (cultural respect)
- Mobile: Hamburger menu, vertical cards, simplified content

---

## Authentication

### 2. Sign Up Page (`/signup`)

```
┌─────────────────────────────────────┐
│ ☰  NorthernGuardian          Login │
├─────────────────────────────────────┤
│                                      │
│          Create Your Account        │
│                                      │
│  ┌────────────────────────────────┐ │
│  │ 🔵 Continue with Google        │ │
│  └────────────────────────────────┘ │
│                                      │
│  ─────────── OR ───────────         │
│                                      │
│  Name *                             │
│  ┌────────────────────────────────┐ │
│  │                                │ │
│  └────────────────────────────────┘ │
│                                      │
│  Email *                            │
│  ┌────────────────────────────────┐ │
│  │                                │ │
│  └────────────────────────────────┘ │
│                                      │
│  Password *                         │
│  ┌────────────────────────────────┐ │
│  │                          👁️    │ │ ← Show/hide toggle
│  └────────────────────────────────┘ │
│  Must be at least 8 characters      │
│                                      │
│  Phone (Optional)                   │
│  ┌────────────────────────────────┐ │
│  │ +1-                            │ │
│  └────────────────────────────────┘ │
│                                      │
│  ☐ I agree to Terms of Service      │
│     and Privacy Policy              │
│                                      │
│  [Create Account]                   │
│                                      │
│  Already have an account? Login     │
│                                      │
└─────────────────────────────────────┘
```

**Key Elements**:
- Social login (Google OAuth) prominent
- Clear email/password option
- Password requirements shown
- Optional phone field (encouraged but not required)
- Terms acceptance checkbox (required)
- Link to login page

---

### 3. Login Page (`/login`)

```
┌─────────────────────────────────────┐
│ ☰  NorthernGuardian        Sign Up │
├─────────────────────────────────────┤
│                                      │
│          Welcome Back               │
│                                      │
│  ┌────────────────────────────────┐ │
│  │ 🔵 Continue with Google        │ │
│  └────────────────────────────────┘ │
│                                      │
│  ─────────── OR ───────────         │
│                                      │
│  Email                              │
│  ┌────────────────────────────────┐ │
│  │                                │ │
│  └────────────────────────────────┘ │
│                                      │
│  Password                           │
│  ┌────────────────────────────────┐ │
│  │                          👁️    │ │
│  └────────────────────────────────┘ │
│                                      │
│  Forgot password?                   │
│                                      │
│  [Login]                            │
│                                      │
│  Don't have an account? Sign up     │
│                                      │
└─────────────────────────────────────┘
```

---

## Dashboard

### 4. User Dashboard (`/dashboard`)

**Desktop View**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│ 🏔️ NorthernGuardian  [Dashboard] [My Trips] [Profile]  [👤 Sarah ▼]     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Welcome back, Sarah! 👋                          [+ Create New Trip]   │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  🔵 Active Trips (1)                                                     │
│                                                                          │
│  ┌──────────────────────┐                                               │
│  │ 🗺️ [Map]              │                                               │
│  ├──────────────────────┤                                               │
│  │ Great Slave Lake     │ [ACTIVE]                                      │
│  │ Fishing Trip         │                                               │
│  │ 🎣 Fishing           │                                               │
│  │ 📅 Nov 15-17         │                                               │
│  │ 👥 3 people          │                                               │
│  │                      │                                               │
│  │ Expected back:       │                                               │
│  │ ⏰ 22 hours          │ ← Countdown                                   │
│  │                      │                                               │
│  │ [View] [Check In]    │                                               │
│  └──────────────────────┘                                               │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  🟢 Upcoming Trips (3)                                                   │
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │ 🗺️ [Map]      │  │ 🗺️ [Map]      │  │ 🗺️ [Map]      │                  │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤                  │
│  │ Hidden Lake  │  │ Ingraham     │  │ Blachford    │                  │
│  │ Trail        │  │ Trail Loop   │  │ Lake Ice     │                  │
│  │              │  │              │  │ Fishing      │                  │
│  │ 🥾 Hiking    │  │ 🥾 Hiking    │  │ 🎣 Fishing   │                  │
│  │ Nov 5        │  │ Nov 12       │  │ Dec 1-3      │                  │
│  │ 2 people     │  │ 4 people     │  │ 2 people     │                  │
│  │              │  │              │  │              │                  │
│  │ [View][Edit] │  │ [View][Edit] │  │ [View][Edit] │                  │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ⚫ Past Trips (12)                           [View All →]               │
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │ Cameron Falls│  │ Prelude Lake │  │ Prosperous   │                  │
│  │ Oct 20       │  │ Oct 5        │  │ Lake         │                  │
│  │ [View]       │  │ [View]       │  │ Sept 15      │                  │
│  └──────────────┘  └──────────────┘  │ [View]       │                  │
│                                      └──────────────┘                  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Mobile View**:
```
┌─────────────────────────────────────┐
│ ☰  NorthernGuardian          [👤]  │
├─────────────────────────────────────┤
│                                      │
│ Welcome back, Sarah! 👋              │
│                                      │
│ [+ Create New Trip]                 │
│                                      │
├─────────────────────────────────────┤
│ 🔵 Active Trips (1)                  │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ 🗺️ [Map Thumbnail]               │ │
│ ├─────────────────────────────────┤ │
│ │ Great Slave Lake    [ACTIVE]    │ │
│ │ Fishing Trip                    │ │
│ │ 🎣 Fishing                       │ │
│ │ 📅 Nov 15-17 • 👥 3 people       │ │
│ │                                  │ │
│ │ Expected back in:                │ │
│ │ ⏰ 22 hours                       │ │
│ │                                  │ │
│ │ [View Details] [Check In Now]   │ │
│ └─────────────────────────────────┘ │
│                                      │
├─────────────────────────────────────┤
│ 🟢 Upcoming Trips (3)                │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ 🗺️ [Map]                         │ │
│ │ Hidden Lake Trail   [UPCOMING]  │ │
│ │ 🥾 Nov 5 • 2 people              │ │
│ │ [View] [Edit] [Share]           │ │
│ └─────────────────────────────────┘ │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ 🗺️ [Map]                         │ │
│ │ Ingraham Trail     [UPCOMING]   │ │
│ │ 🥾 Nov 12 • 4 people             │ │
│ │ [View] [Edit] [Share]           │ │
│ └─────────────────────────────────┘ │
│                                      │
│ [View All Upcoming →]               │
│                                      │
├─────────────────────────────────────┤
│ ⚫ Past Trips (12)                    │
│ [View All →]                        │
└─────────────────────────────────────┘
```

**Key Elements**:
- Personalized greeting
- Prominent "Create New Trip" CTA
- Active trips section (highest priority, shows countdown)
- Quick check-in button for active trips
- Upcoming trips (cards in grid)
- Past trips (collapsed, "View All" link)
- Mobile: Vertical cards, collapsible sections

---

## Trip Creation & Management

### 5. Create Trip - Step 1: Basic Info (`/trips/new`)

**Mobile View** (Primary):
```
┌─────────────────────────────────────┐
│ ← Back          Create Trip    ✕    │
├─────────────────────────────────────┤
│                                      │
│ Step 1 of 3: Trip Details           │
│ ●○○                                  │ ← Progress indicator
│                                      │
│ Trip Name *                         │
│ ┌─────────────────────────────────┐ │
│ │ e.g., Hidden Lake Hike          │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Activity Type *                     │
│ ┌─────────────────────────────────┐ │
│ │ Hiking                      ▼   │ │
│ └─────────────────────────────────┘ │
│ 🥾 🏕️ 🎣 🏹 🏂 🚣 [Icons for types]  │
│                                      │
│ Party Size *                        │
│ ┌─────────────────────────────────┐ │
│ │ 2                               │ │ ← Number input
│ └─────────────────────────────────┘ │
│                                      │
│ Start Date & Time *                 │
│ ┌──────────────────┬──────────────┐ │
│ │ Nov 5, 2025   📅 │ 10:00 AM  🕐│ │
│ └──────────────────┴──────────────┘ │
│                                      │
│ Return Date & Time *                │
│ ┌──────────────────┬──────────────┐ │
│ │ Nov 5, 2025   📅 │ 6:00 PM   🕐│ │
│ └──────────────────┴──────────────┘ │
│ Duration: 8 hours                   │
│                                      │
│ [Save Draft]          [Next: Map →] │
│                                      │
└─────────────────────────────────────┘
```

**Key Features**:
- Step indicator (1 of 3)
- Auto-save draft (every 30s, indicator: "Draft saved 2 min ago")
- Date/time pickers (native mobile pickers)
- Duration auto-calculated
- "Save Draft" vs "Next" (progressive)
- Exit confirmation if unsaved changes

---

### 6. Create Trip - Step 2: Route & Map (`/trips/new/map`)

**Mobile View**:
```
┌─────────────────────────────────────┐
│ ← Back          Create Trip          │
├─────────────────────────────────────┤
│                                      │
│ Step 2 of 3: Route & Map            │
│ ●●○                                  │
│                                      │
│ Starting Point *                    │
│ ┌─────────────────────────────────┐ │
│ │ 📍 Yellowknife, NT          🔍  │ │ ← Search/autocomplete
│ └─────────────────────────────────┘ │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │                                  │ │
│ │                                  │ │
│ │         [INTERACTIVE MAP]        │ │ ← Full-screen map option
│ │                                  │ │
│ │  📍 Starting point              │ │
│ │  ─────▶ Route                   │ │
│ │  📍 Destination                 │ │
│ │                                  │ │
│ │  [+ Add Waypoint]               │ │
│ │                                  │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Drawing Tools:                      │
│ [✏️ Draw Route] [📍 Add Pin] [🗑️]   │
│                                      │
│ Waypoints:                          │
│ ┌─────────────────────────────────┐ │
│ │ 1. Lunch Stop                   │ │
│ │    📍 62.5500, -114.2000    [✕] │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Distance: 15.2 km                   │
│                                      │
│ [← Previous]              [Next →]  │
│                                      │
└─────────────────────────────────────┘
```

**Map Interactions**:
- Tap to add waypoints
- Long-press to start route drawing
- Pinch to zoom
- Two-finger drag to pan
- "Use My Location" button
- "Fullscreen Map" mode
- Distance auto-calculated
- Export GPX option (after creation)

---

### 7. Create Trip - Step 3: Safety Info (`/trips/new/safety`)

**Mobile View**:
```
┌─────────────────────────────────────┐
│ ← Back          Create Trip          │
├─────────────────────────────────────┤
│                                      │
│ Step 3 of 3: Safety Information     │
│ ●●●                                  │
│                                      │
│ Emergency Contacts *                │
│ ┌─────────────────────────────────┐ │
│ │ ☑️ Jennifer Chen (Sister)        │ │ ← From profile
│ │    jennifer.chen@example.com     │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ ☐ Mark Johnson (Friend)          │ │
│ │    mark.j@example.com            │ │
│ └─────────────────────────────────┘ │
│ [+ Add New Contact]                 │
│                                      │
│ ⚠️ No contacts selected? Add at     │
│    least one for safety.            │
│                                      │
│ Vehicle Information (Optional)      │
│ ┌─────────────────────────────────┐ │
│ │ Red Subaru Outback, NT-XYZ789   │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Equipment List (Optional)           │
│ ┌─────────────────────────────────┐ │
│ │ Daypack, water, first aid,      │ │
│ │ GPS, bear spray, extra layers   │ │
│ │                                  │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Special Notes (Optional)            │
│ ┌─────────────────────────────────┐ │
│ │ Medical: EpiPen for allergies   │ │
│ │                                  │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Trip Visibility                     │
│ ◉ Share with emergency contacts     │
│ ○ Private (only me)                 │
│ ○ Public (anyone can view)          │
│                                      │
│ [← Previous]    [Create Trip ✓]    │
│                                      │
└─────────────────────────────────────┘
```

**Key Features**:
- Emergency contacts from profile (checkboxes)
- Quick "Add New Contact" inline
- Warning if no contacts selected
- Optional fields clearly marked
- Visibility selector (default: emergency contacts)
- Final CTA: "Create Trip" (clear completion)

---

### 8. Trip Details View (`/trips/:id`)

**Mobile View**:
```
┌─────────────────────────────────────┐
│ ← Back                    ⋮ More    │
├─────────────────────────────────────┤
│                                      │
│ [ACTIVE]                            │
│ Great Slave Lake Fishing Trip       │
│                                      │
│ 🎣 Fishing • 👥 3 people             │
│ 📅 Nov 15, 8:00 AM - Nov 17, 6:00 PM│
│                                      │
│ ⏰ Expected back in: 22 hours        │ ← Countdown (if active)
│ [✓ Check In Now]                    │ ← Prominent CTA
│                                      │
├─────────────────────────────────────┤
│                                      │
│ ┌─────────────────────────────────┐ │
│ │                                  │ │
│ │         [INTERACTIVE MAP]        │ │
│ │                                  │ │
│ │  📍 Yellowknife                 │ │
│ │  ═══▶ Route (47.3 km)           │ │
│ │  ● Lunch Stop                   │ │
│ │  📍 North Arm                   │ │
│ │                                  │ │
│ │  [🔲 Fullscreen] [⬇️ Offline]   │ │
│ └─────────────────────────────────┘ │
│                                      │
│ 📍 Route Details                     │
│ • Starting: Yellowknife, NT         │
│ • Destination: North Arm, Great     │
│   Slave Lake                        │
│ • Distance: 47.3 km                 │
│                                      │
│ Waypoints:                          │
│ 1. Lunch stop - East shore          │
│    Good fishing spot                │
│                                      │
│ [Export GPX for GPS Device]         │
│                                      │
├─────────────────────────────────────┤
│ 🚗 Vehicle                           │
│ Red Toyota Tacoma, NT-ABC123        │
│                                      │
│ 🎒 Equipment                         │
│ Boat, fishing gear, 3-day food      │
│ supply, satellite phone             │
│                                      │
│ 📝 Notes                             │
│ Will check in via satellite phone   │
│ each evening                        │
│                                      │
├─────────────────────────────────────┤
│ 🔔 Shared With (2)                   │
│ • Jennifer Chen (viewed 3 times)    │
│ • Mark Johnson (viewed 1 time)      │
│                                      │
│ [Share Trip] [Copy Link]            │
│                                      │
├─────────────────────────────────────┤
│ 👤 Created By                        │
│ Sarah Chen                          │
│ +1-867-555-0123                     │
│                                      │
│ Created: Oct 30, 2025               │
│ Last updated: Oct 30, 2025          │
│                                      │
├─────────────────────────────────────┤
│ [Edit Trip] [Extend Deadline]       │
│ [Delete Trip]                       │
│                                      │
└─────────────────────────────────────┘
```

**"More" Menu (⋮)**:
```
┌─────────────────────────────────────┐
│ Edit Trip                           │
│ Share Trip                          │
│ Download for Offline                │
│ Export GPX                          │
│ Extend Deadline                     │
│ Print Details                       │
│ ────────────────────────────────    │
│ Delete Trip                         │ ← Red text
└─────────────────────────────────────┘
```

**Key Features**:
- Status badge prominent (color-coded)
- Countdown timer for active trips
- Quick check-in button (primary CTA)
- Interactive map with fullscreen mode
- Offline download button
- Share status (who viewed, when)
- Edit/extend/delete actions
- Mobile: Scrollable sections, collapsible details

---

## Trip Sharing

### 9. Share Trip Modal

```
┌─────────────────────────────────────┐
│ Share Trip                     ✕    │
├─────────────────────────────────────┤
│                                      │
│ Share "Great Slave Lake Fishing"    │
│                                      │
│ Share Link                          │
│ ┌─────────────────────────────────┐ │
│ │ https://northernguardian.ca/... │ │
│ │                          [Copy] │ │
│ └─────────────────────────────────┘ │
│                                      │
│ ─── OR ───                          │
│                                      │
│ Email to Recipients                 │
│ ┌─────────────────────────────────┐ │
│ │ email@example.com               │ │ ← Multi-email input
│ └─────────────────────────────────┘ │
│ Separate emails with commas         │
│                                      │
│ ☑️ Include emergency contacts        │
│    (Jennifer Chen, Mark Johnson)    │
│                                      │
│ Optional Message                    │
│ ┌─────────────────────────────────┐ │
│ │ Here's my trip plan for this    │ │
│ │ weekend. I'll check in when     │ │
│ │ I'm back!                       │ │
│ └─────────────────────────────────┘ │
│                                      │
│ [Cancel]          [Send Emails]     │
│                                      │
└─────────────────────────────────────┘
```

**After Sharing**:
```
✓ Trip shared with 2 recipients
  Emails sent to:
  • jennifer.chen@example.com
  • mark.johnson@example.com
```

---

### 10. Shared Trip View (Public) (`/shared/:token`)

**Mobile View** (No Login Required):
```
┌─────────────────────────────────────┐
│ 🏔️ NorthernGuardian                 │
├─────────────────────────────────────┤
│                                      │
│ Trip Shared by Sarah Chen           │
│                                      │
│ [ACTIVE]                            │
│ Great Slave Lake Fishing Trip       │
│                                      │
│ 🎣 Fishing • 👥 3 people             │
│ 📅 Nov 15-17, 2025                  │
│                                      │
│ ⚠️ This trip is currently active.   │
│    Expected return: Nov 17, 6:00 PM │
│                                      │
├─────────────────────────────────────┤
│                                      │
│ ┌─────────────────────────────────┐ │
│ │                                  │ │
│ │         [INTERACTIVE MAP]        │ │
│ │                                  │ │
│ │  View route and waypoints        │ │
│ │                                  │ │
│ └─────────────────────────────────┘ │
│                                      │
│ 📍 Route                             │
│ From: Yellowknife, NT               │
│ To: North Arm, Great Slave Lake     │
│ Distance: 47.3 km                   │
│                                      │
│ 🚗 Vehicle                           │
│ Red Toyota Tacoma, NT-ABC123        │
│                                      │
│ 🎒 Equipment                         │
│ Boat, fishing gear, satellite phone │
│                                      │
│ 👤 Contact                           │
│ Sarah Chen                          │
│ +1-867-555-0123                     │
│                                      │
│ [Export GPX] [Print Details]        │
│                                      │
├─────────────────────────────────────┤
│                                      │
│ ⚠️ If Sarah is overdue and you      │
│    cannot reach them, contact:      │
│                                      │
│ 🚨 RCMP (Northwest Territories)     │
│    1-867-669-1111                   │
│                                      │
├─────────────────────────────────────┤
│                                      │
│ Create your own trip plans at       │
│ NorthernGuardian.ca                 │
│ [Sign Up Free →]                    │
│                                      │
└─────────────────────────────────────┘
```

**If Overdue**:
```
┌─────────────────────────────────────┐
│ 🚨 OVERDUE ALERT                     │
│                                      │
│ Sarah Chen's trip is now overdue    │
│ by 3 hours.                         │
│                                      │
│ Expected return: Nov 17, 6:00 PM    │
│ Current time: Nov 17, 9:00 PM       │
│                                      │
│ If you have not heard from Sarah:   │
│                                      │
│ 1. Try calling: +1-867-555-0123     │
│ 2. Contact emergency services:      │
│    🚨 RCMP: 1-867-669-1111          │
│                                      │
│ Last known location:                │
│ Yellowknife, NT                     │
│                                      │
│ Vehicle: Red Toyota Tacoma,         │
│          NT-ABC123                  │
│                                      │
└─────────────────────────────────────┘
```

**Key Features**:
- No login required
- Read-only view (cannot edit)
- Contact info visible (for emergencies)
- Export GPX and print options
- Clear emergency instructions if overdue
- CTA to create own account

---

## User Profile

### 11. Profile Page (`/profile`)

**Mobile View**:
```
┌─────────────────────────────────────┐
│ ← Back            Profile            │
├─────────────────────────────────────┤
│                                      │
│        [Profile Photo]              │
│           SC                        │ ← Avatar (initials if no photo)
│       [Change Photo]                │
│                                      │
│ Sarah Chen                          │
│ sarah.chen@example.com              │
│ Member since Oct 2025               │
│                                      │
├─────────────────────────────────────┤
│ Personal Information                │
│                                      │
│ Name                                │
│ ┌─────────────────────────────────┐ │
│ │ Sarah Chen                      │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Email                               │
│ ┌─────────────────────────────────┐ │
│ │ sarah.chen@example.com          │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Phone                               │
│ ┌─────────────────────────────────┐ │
│ │ +1-867-555-0123                 │ │
│ └─────────────────────────────────┘ │
│                                      │
│ [Save Changes]                      │
│                                      │
├─────────────────────────────────────┤
│ Emergency Contacts (2)              │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ Jennifer Chen (Sister) ⭐        │ │ ← Primary
│ │ +1-867-555-0199                 │ │
│ │ jennifer.chen@example.com       │ │
│ │ [Edit] [Delete]                 │ │
│ └─────────────────────────────────┘ │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ Mark Johnson (Friend)            │ │
│ │ +1-867-555-0200                 │ │
│ │ mark.j@example.com              │ │
│ │ [Edit] [Delete]                 │ │
│ └─────────────────────────────────┘ │
│                                      │
│ [+ Add Emergency Contact]           │
│                                      │
├─────────────────────────────────────┤
│ Trip Statistics                     │
│                                      │
│ ✓ 5 trips created                   │
│ ✓ 1 active trip                     │
│ ✓ 4 completed trips                 │
│ ✓ 12 friends notified               │
│                                      │
├─────────────────────────────────────┤
│ Preferences                         │
│                                      │
│ Default Trip Visibility             │
│ ◉ Share with emergency contacts     │
│ ○ Private                           │
│ ○ Public                            │
│                                      │
├─────────────────────────────────────┤
│ Account                             │
│                                      │
│ Change Password                     │
│ Privacy Settings                    │
│ Export My Data                      │
│ Delete Account                      │ ← Red text
│                                      │
│ [Log Out]                           │
│                                      │
└─────────────────────────────────────┘
```

---

### 12. Emergency Contacts Page (`/profile/emergency-contacts`)

```
┌─────────────────────────────────────┐
│ ← Back     Emergency Contacts        │
├─────────────────────────────────────┤
│                                      │
│ Your emergency contacts will be     │
│ notified if you don't check in      │
│ after a trip.                       │
│                                      │
│ [+ Add Emergency Contact]           │
│                                      │
├─────────────────────────────────────┤
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ ⭐ Jennifer Chen                 │ │ ← Primary contact
│ │    Sister                        │ │
│ │                                  │ │
│ │    📞 +1-867-555-0199            │ │
│ │    ✉️  jennifer.chen@example.com │ │
│ │                                  │ │
│ │    [Edit] [Remove]               │ │
│ └─────────────────────────────────┘ │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ Mark Johnson                     │ │
│ │ Friend                           │ │
│ │                                  │ │
│ │ 📞 +1-867-555-0200               │ │
│ │ ✉️  mark.j@example.com           │ │
│ │                                  │ │
│ │ [Edit] [Remove] [Set Primary]   │ │
│ └─────────────────────────────────┘ │
│                                      │
│ 2 of 5 contacts added               │
│                                      │
└─────────────────────────────────────┘
```

**Add Contact Modal**:
```
┌─────────────────────────────────────┐
│ Add Emergency Contact          ✕    │
├─────────────────────────────────────┤
│                                      │
│ Name *                              │
│ ┌─────────────────────────────────┐ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Relationship                        │
│ ┌─────────────────────────────────┐ │
│ │ e.g., Spouse, Parent, Friend    │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Phone Number *                      │
│ ┌─────────────────────────────────┐ │
│ │ +1-                             │ │
│ └─────────────────────────────────┘ │
│                                      │
│ Email                               │
│ ┌─────────────────────────────────┐ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                      │
│ ☐ Set as primary contact            │
│                                      │
│ [Cancel]          [Add Contact]     │
│                                      │
└─────────────────────────────────────┘
```

---

## Community

### 13. Community Landing Page (`/community`)

**Desktop View**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│ 🏔️ NorthernGuardian  [Features] [Community] [About]  [Login] [Sign Up] │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│              [HERO IMAGE: Community Map/Dashboard Screenshot]           │
│                                                                          │
│          NorthernGuardian Community                                     │
│      Keep Your Entire Community Safe                                    │
│                                                                          │
│      For municipalities, hamlets, and community organizations           │
│                                                                          │
│                [Request a Demo →]                                       │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ Community Features                                                      │
│                                                                          │
│ ┌─────────────────────────────────────────────────────────────────────┐│
│ │ 🗺️ Community Dashboard                                               ││
│ │ Real-time view of all active trips in your community                ││
│ │ • See who's out, where they're going, when they're expected back    ││
│ │ • Filter by activity type, date range, risk level                   ││
│ │ • Export trip data for SAR operations                               ││
│ └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
│ ┌─────────────────────────────────────────────────────────────────────┐│
│ │ 🔔 Safety Alerts                                                     ││
│ │ Send notifications to community members                             ││
│ │ • Weather warnings (storms, extreme cold)                           ││
│ │ • Trail closures and hazards                                        ││
│ │ • Emergency advisories                                              ││
│ └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
│ ┌─────────────────────────────────────────────────────────────────────┐│
│ │ 📊 Analytics & Reporting                                             ││
│ │ Data-driven insights for community safety                           ││
│ │ • Most popular trails and seasons                                   ││
│ │ • Trip trends and activity patterns                                 ││
│ │ • Safety incident reports                                           ││
│ └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ Why Communities Choose NorthernGuardian                                │
│                                                                          │
│ ✓ Faster SAR response times with better initial information            │
│ ✓ Proactive safety monitoring for community members                    │
│ ✓ Budget-friendly pricing for small northern communities               │
│ ✓ Priority support and training for staff                              │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ Pricing                                                                 │
│                                                                          │
│ Custom pricing based on community size and needs.                       │
│ Contact us for a quote tailored to your budget.                        │
│                                                                          │
│ Typical range: $500 - $2,000 per year                                  │
│                                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ Request Information                                                     │
│                                                                          │
│ Community Name *                                                        │
│ ┌─────────────────────────────────────────────────────────────────────┐│
│ │ e.g., Town of Yellowknife                                            ││
│ └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
│ Contact Person *                                                        │
│ ┌─────────────────────────────────────────────────────────────────────┐│
│ │                                                                       ││
│ └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
│ Email *                 Phone                                           │
│ ┌─────────────────────┐ ┌─────────────────────┐                        │
│ │                     │ │                     │                        │
│ └─────────────────────┘ └─────────────────────┘                        │
│                                                                          │
│ Population             Message                                          │
│ ┌─────────────────────┐ ┌─────────────────────────────────────────────┐│
│ │                     │ │ Tell us about your community's needs...      ││
│ └─────────────────────┘ │                                              ││
│                         │                                              ││
│                         └─────────────────────────────────────────────┘│
│                                                                          │
│                    [Submit Inquiry]                                     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Mobile View**:
```
┌─────────────────────────────────────┐
│ ☰  NorthernGuardian          Login │
├─────────────────────────────────────┤
│                                      │
│ NorthernGuardian Community          │
│                                      │
│ Keep Your Entire Community Safe     │
│                                      │
│ For municipalities, hamlets, and    │
│ community organizations             │
│                                      │
│ [Request Demo →]                    │
│                                      │
├─────────────────────────────────────┤
│                                      │
│ Features                            │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ 🗺️ Community Dashboard           │ │
│ │ Real-time view of all active    │ │
│ │ trips in your community         │ │
│ └─────────────────────────────────┘ │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ 🔔 Safety Alerts                 │ │
│ │ Send notifications to community │ │
│ │ members                         │ │
│ └─────────────────────────────────┘ │
│                                      │
│ [Scroll for more...]                │
│                                      │
└─────────────────────────────────────┘
```

---

## User Flows

### Flow 1: Complete Trip Creation

```
[Homepage]
    ↓ Click "Get Started"
[Sign Up]
    ↓ Create account
[Dashboard - Empty State]
    ↓ Click "Create New Trip"
[Trip Form - Step 1: Basic Info]
    ↓ Fill name, activity, dates, party size
    ↓ Click "Next"
[Trip Form - Step 2: Route & Map]
    ↓ Set starting point
    ↓ Draw route or add waypoints
    ↓ Click "Next"
[Trip Form - Step 3: Safety Info]
    ↓ Select emergency contacts
    ↓ Add vehicle info, equipment
    ↓ Choose visibility
    ↓ Click "Create Trip"
[Trip Details View]
    ↓ Success! Trip created
    ↓ Option to share immediately
```

### Flow 2: Share Trip with Family

```
[Trip Details View]
    ↓ Click "Share Trip"
[Share Modal]
    ↓ Option A: Copy link
    ↓ Option B: Enter emails
    ↓ Select emergency contacts (checkbox)
    ↓ Add optional message
    ↓ Click "Send Emails"
[Confirmation Toast]
    ↓ "Trip shared with 2 recipients"
[Family Receives Email]
    ↓ Click link in email
[Public Shared Trip View]
    ↓ View all trip details (read-only)
    ↓ Export GPX or print
```

### Flow 3: Trip Overdue Alert

```
[System Cron Job - 1 hour before return]
    ↓ Send check-in reminder email
[User Receives Email]
    ↓ Option 1: Click "I'm Back Safe"
    ↓ → [Check-In Confirmation Page]
    ↓ Option 2: Ignore email
[2 hours after expected return - No check-in]
    ↓ System marks trip as OVERDUE
    ↓ Send alert emails to emergency contacts
[Emergency Contacts Receive Email]
    ↓ "Sarah is overdue from trip"
    ↓ Click link to view trip details
[Shared Trip View - OVERDUE Status]
    ↓ Red alert banner
    ↓ Contact info prominent
    ↓ Emergency instructions visible
```

### Flow 4: Check-In After Trip

```
[Active Trip - Expected Return Time Approaching]
    ↓ User receives reminder email 1 hour before
[Reminder Email]
    ↓ Option 1: Click "I'm Back Safe" button
    ↓ → [Check-In Page] → "Welcome back!" → Trip status: COMPLETED
    ↓ Option 2: Click "Extend Trip" button
    ↓ → [Extend Modal] → Select 4/8/12/24 hours → Deadline extended
    ↓ Option 3: Check in via app
[Dashboard or Trip Details]
    ↓ Click "Check In" button
    ↓ Add optional notes
    ↓ Trip marked as COMPLETED
```

---

## Responsive Breakpoints

### Breakpoint System (Tailwind CSS)

```
Mobile:     < 640px   (sm)  - Single column, stacked layout
Tablet:     640-1024px (md) - 2 columns, side nav
Desktop:    1024-1536px(lg) - 3 columns, full nav
Large:      > 1536px  (xl) - Max width 1536px, centered
```

### Layout Adjustments

**Mobile (< 640px)**:
- Single column layout
- Hamburger menu navigation
- Full-width cards
- Vertical trip cards
- Bottom navigation bar (optional)
- Large touch targets (min 44x44px)

**Tablet (640-1024px)**:
- Two-column grid for trip cards
- Side navigation drawer (swipe from left)
- Map and details side-by-side (landscape)
- Larger form inputs

**Desktop (1024px+)**:
- Three-column grid for trip cards
- Persistent side navigation
- Map larger, more detail visible
- Multi-column forms
- Hover states more prominent

---

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

**Color Contrast**:
- Text on backgrounds: ≥ 4.5:1 for normal text
- Large text (18pt+): ≥ 3:1
- UI components and graphics: ≥ 3:1
- Status colors distinguishable by more than color (icons, text labels)

**Keyboard Navigation**:
- All interactive elements accessible via Tab key
- Logical tab order (top to bottom, left to right)
- Visible focus indicators (ring outline)
- Skip navigation link for screen readers
- Escape key closes modals

**Screen Reader Support**:
- Semantic HTML (header, nav, main, article, footer)
- ARIA labels for icons and buttons
- ARIA live regions for dynamic content (toasts, alerts)
- Alt text for all images (decorative images: alt="")
- Form labels associated with inputs

**Touch Targets**:
- Minimum 44x44px tap targets (mobile)
- Adequate spacing between tappable elements (8px min)
- Large primary CTAs (full-width on mobile)

**Responsive Text**:
- Base font size: 16px (browser default)
- Scalable with browser zoom (up to 200%)
- Line height: 1.5-1.6 for readability

---

## Next Steps

1. **Review Wireframes**: Ensure all screens match PRD requirements
2. **User Testing**: Test flows with 3-5 representative users (sketches or clickable prototypes)
3. **High-Fidelity Mockups**: Create pixel-perfect designs in Figma (optional for MVP, can design in code)
4. **Component Development**: Build reusable components in Storybook or directly in app
5. **Responsive Testing**: Test on real devices (iPhone, Android, tablets, laptops)
6. **Accessibility Audit**: Use axe DevTools or Lighthouse to check WCAG compliance
7. **Iterate**: Refine based on user feedback and usability testing

---

**End of Wireframes & UI Flow Document**
