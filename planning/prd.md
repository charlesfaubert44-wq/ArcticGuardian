# NorthernGuardian - Product Requirements Document

## Document Information
- **Project Name**: NorthernGuardian (formerly ArcticGuardian)
- **Version**: 1.0
- **Date**: October 30, 2025
- **Status**: Planning Phase
- **Document Owner**: Product Manager
- **Development Team**: Solo Developer
- **Timeline**: 4 weeks (1 month MVP)
- **Budget**: Minimal (free/open-source technologies)

---

## 1. Executive Summary

### Project Name & Version
**NorthernGuardian v1.0** - Outdoor Trip Safety Platform for Canada's Northern Territories

### Date & Status
- **Current Date**: October 30, 2025
- **Development Phase**: Pre-Development Planning
- **Target MVP Launch**: November 30, 2025 (4 weeks)

### Vision Statement
*Empower adventurers in Canada's northern territories to explore safely by creating comprehensive, shareable trip plans that honor indigenous culture and serve as lifelines in emergencies.*

### Success Metrics
1. **User Adoption**: 50+ registered users creating trip plans within first month post-launch
2. **Safety Impact**: 100% of created trips include emergency contact information and expected return times
3. **Community Interest**: 2-3 municipalities/communities express interest in paid Community features
4. **User Engagement**: Average of 2+ trips created per active user within first 30 days
5. **Technical Performance**: <3 second page load times, 95%+ uptime, functional offline mode for core features

---

## 2. Problem Statement

### Current Pain Points

#### Safety & Emergency Preparedness
- **Fragmented Communication**: People share trip plans via text messages, social media, or verbal communication—information easily lost or forgotten
- **No Standardization**: Trip plans lack critical safety details (emergency contacts, expected return, route specifics, equipment)
- **Search & Rescue Delays**: When someone goes missing, SAR teams waste valuable hours gathering basic information from multiple sources
- **Offline Gaps**: Remote northern territories have limited cell coverage; existing apps fail without connectivity

#### User Experience
- **Generic Solutions**: Existing trip planning apps (AllTrails, Gaia GPS) are not tailored to northern Canadian contexts, indigenous territories, or extreme weather
- **Poor Accessibility**: Complex interfaces intimidate casual outdoor enthusiasts
- **Cultural Disconnect**: No existing solutions reflect northern life, indigenous culture, or local knowledge

#### Community & Municipal Needs
- **No Oversight**: Small communities (hamlets, towns) have no systematic way to monitor resident safety during outdoor activities
- **Resource Limitations**: Northern communities lack technology infrastructure for coordinated emergency response
- **Information Silos**: Community knowledge about trail conditions, hazards, and seasonal changes isn't centralized

### Target User Personas

#### Primary Persona: "Safety-Conscious Sarah"
- **Demographics**: 32 years old, lives in Yellowknife, NT, moderate outdoor experience
- **Occupation**: Government employee, outdoor enthusiast on weekends
- **Tech Proficiency**: High (smartphone native, uses apps daily)
- **Activities**: Day hikes, weekend camping, ice fishing, snowshoeing
- **Goals**:
  - Ensure family knows her location and plans
  - Quick trip planning without complexity
  - Peace of mind for solo adventures
- **Pain Points**:
  - Tired of texting family screenshots of maps
  - Worried about what happens if she doesn't return on time
  - Wants beautiful, simple interface
- **Quote**: *"I just want my mom to know where I am and when to worry if I'm not back."*

#### Secondary Persona: "Community Manager Mike"
- **Demographics**: 45 years old, Municipal Safety Officer in Iqaluit, NU
- **Occupation**: Emergency services coordinator for community of 7,000
- **Tech Proficiency**: Moderate (uses government systems, email, basic apps)
- **Responsibilities**:
  - Coordinating search & rescue operations
  - Community safety initiatives
  - Budget-conscious decision maker
- **Goals**:
  - Proactive awareness of community members' outdoor activities
  - Faster emergency response with better information
  - Justify budget for safety technology
- **Pain Points**:
  - Finds out about missing persons too late
  - Wastes resources searching without good initial data
  - Limited budget for technology solutions
- **Quote**: *"If I knew where they planned to go, we could have found them in hours instead of days."*

#### Tertiary Persona: "Tourist Tom"
- **Demographics**: 28 years old, visiting Yukon from Toronto
- **Occupation**: Software developer, first-time northern visitor
- **Tech Proficiency**: Very High
- **Activities**: Bucket-list hiking, wildlife photography, aurora viewing
- **Goals**:
  - Explore safely despite unfamiliarity with territory
  - Share stunning experiences with friends/social media
  - Learn about indigenous culture and local protocols
- **Pain Points**:
  - Anxious about remote wilderness risks
  - Doesn't know local norms or safety practices
  - Wants authentic northern experience
- **Quote**: *"I want to respect the land and stay safe, but I don't know the rules here."*

### Market Opportunity

#### Why This Problem is Worth Solving Now

**1. Growing Northern Tourism**
- Yukon tourism up 15% year-over-year (pre-pandemic baseline recovery + growth)
- Remote work enabling "digital nomad" exploration of northern Canada
- International interest in aurora tourism, indigenous experiences

**2. Tragic Precedents**
- Multiple high-profile SAR operations in NT, YT, NU annually
- Average SAR operation costs $10,000-$50,000 in resources
- Preventable delays due to poor trip information

**3. Technology Maturation**
- Progressive Web Apps (PWAs) enable offline-first mobile experiences
- Free/affordable mapping APIs (Mapbox, OpenStreetMap)
- Cloud infrastructure costs minimal for MVP scale

**4. Cultural Moment**
- Increased awareness and respect for indigenous land stewardship
- Truth and Reconciliation calls to action include cultural preservation
- Opportunity to build technology that honors indigenous knowledge

**5. Competitive Gap**
- **AllTrails**: US-focused, limited Canadian northern coverage, no emergency features
- **Gaia GPS**: Complex, expensive ($40/year), not safety-focused
- **Google Maps**: No trip planning, no emergency contacts, requires connectivity
- **inReach/SPOT**: Hardware required ($300+ device + subscription), not accessible

**Market Size**:
- ~135,000 residents across Yukon, Northwest Territories, Nunavut
- ~500,000 annual tourists to northern territories
- Potential 2,000-5,000 active users within 12 months (2-4% penetration)
- 50-100 communities as potential paid customers

---

## 3. Product Requirements

### Core Functionality (MVP - Phase 1)

#### F1: User Authentication & Profile Management

**F1.1 - User Registration**
- **Requirement**: Users can create accounts with email/password or social login (Google)
- **Acceptance Criteria**:
  - Email validation with confirmation link
  - Password requirements: min 8 characters, 1 uppercase, 1 number
  - Social login via Google OAuth
  - Profile creation includes: name, phone number, emergency contact (name + phone)
  - User agrees to terms of service and privacy policy
- **Priority**: P0 (Critical for MVP)
- **Effort**: 2 days

**F1.2 - User Profile**
- **Requirement**: Users can view and edit their profile information
- **Acceptance Criteria**:
  - Edit personal details (name, phone, email)
  - Add/edit up to 3 emergency contacts with names, phone numbers, email addresses
  - Set default trip sharing preferences (auto-share to emergency contacts)
  - Upload optional profile photo
  - View account creation date and trip statistics (total trips, active trips)
- **Priority**: P0 (Critical for MVP)
- **Effort**: 1 day

#### F2: Trip Planning & Creation

**F2.1 - Create New Trip**
- **Requirement**: Users can create comprehensive trip plans with essential safety information
- **Acceptance Criteria**:
  - **Trip Basics**:
    - Trip name (required, max 100 characters)
    - Activity type: Hiking, Camping, Fishing, Hunting, Snowmobiling, Kayaking/Canoeing, Other (required)
    - Start date & time (required)
    - Expected return date & time (required)
    - Number of people in party (required, 1-20)
  - **Route & Location**:
    - Interactive map to draw route or drop pins (Mapbox GL JS)
    - Ability to add waypoints with labels (campsite, fishing spot, etc.)
    - Starting point address/coordinates (required)
    - Destination address/coordinates (optional)
    - Estimated distance auto-calculated from route
  - **Safety Information**:
    - Emergency contact selection (from profile or add new)
    - Vehicle information (make, model, color, license plate) - optional
    - Equipment list (free-form text, optional)
    - Special notes (medical conditions, planned detours, etc.) - optional
  - **Visibility**:
    - Private (only creator), Shared with contacts, or Public (community visible)
  - Trip auto-saves as draft every 30 seconds
  - "Create Trip" button validates all required fields before submission
- **Priority**: P0 (Critical for MVP)
- **Effort**: 5 days

**F2.2 - View Trip Details**
- **Requirement**: Users can view all details of created trips
- **Acceptance Criteria**:
  - Display all trip information in organized, readable format
  - Show route on interactive map with ability to zoom/pan
  - Display trip status: Upcoming, In Progress, Completed, Overdue
  - Show countdown timer to departure and expected return
  - Mobile-responsive design for viewing on phones
  - Print-friendly view for printing hard copies
- **Priority**: P0 (Critical for MVP)
- **Effort**: 2 days

**F2.3 - Edit & Delete Trips**
- **Requirement**: Users can modify or delete their trip plans
- **Acceptance Criteria**:
  - Edit any trip field before trip start time
  - Cannot delete trips in "In Progress" status (must complete/cancel first)
  - Deletion requires confirmation modal: "Are you sure? This cannot be undone."
  - Changes notify all shared contacts via email
  - Edit history tracked (visible to user: "Last updated: Oct 30, 2:45 PM")
- **Priority**: P0 (Critical for MVP)
- **Effort**: 1.5 days

#### F3: Trip Sharing & Notifications

**F3.1 - Share Trip with Contacts**
- **Requirement**: Users can share trip plans with emergency contacts and friends/family
- **Acceptance Criteria**:
  - Share via unique shareable link (works for non-registered users)
  - Share via email to specified addresses
  - Shared recipients receive email with trip summary and link to full details
  - Shared link shows read-only trip view with map, dates, contact info
  - User can revoke sharing links at any time
  - Track who has viewed the trip (privacy-respecting, just view count)
- **Priority**: P0 (Critical for MVP)
- **Effort**: 3 days

**F3.2 - Automatic Check-In Reminders**
- **Requirement**: System sends reminders to check in and notifies emergency contacts if overdue
- **Acceptance Criteria**:
  - Email reminder sent to user 1 hour before expected return time: "Check in to confirm safe return"
  - If user doesn't check in within 2 hours of expected return, email sent to emergency contacts
  - Email to contacts includes: trip details, last check-in time, message to contact local authorities if needed
  - User can check in via email link or app button (simple "I'm safe" action)
  - User can extend trip deadline from app or email link
- **Priority**: P1 (High priority for MVP)
- **Effort**: 3 days

#### F4: Map & Route Visualization

**F4.1 - Interactive Trip Map**
- **Requirement**: Users can view and interact with trip routes on high-quality maps
- **Acceptance Criteria**:
  - Mapbox GL JS integration with OpenStreetMap base layer
  - Topographic map style showing terrain, elevation contours
  - Route displayed as line overlay with waypoints as markers
  - Click waypoints to see labels/notes
  - Measure distance tool
  - Export route as GPX file for GPS devices
  - Map works on mobile (touch gestures for zoom/pan)
- **Priority**: P0 (Critical for MVP)
- **Effort**: 4 days

**F4.2 - Offline Map Access (Limited)**
- **Requirement**: Users can download trip maps for offline viewing
- **Acceptance Criteria**:
  - "Download for Offline" button on trip details page
  - Downloads map tiles for route area + 10km buffer
  - Offline map accessible from device when no internet connection
  - Max offline map size: 50MB per trip
  - Offline maps expire after 30 days (re-download needed)
  - Clear indication when viewing offline vs. online map
- **Priority**: P1 (High priority, but can be refined post-MVP)
- **Effort**: 4 days

#### F5: Dashboard & Trip Management

**F5.1 - User Dashboard**
- **Requirement**: Users see overview of all trips and quick actions
- **Acceptance Criteria**:
  - **Active Trips Section**: Shows trips in progress (start date passed, not yet completed)
  - **Upcoming Trips Section**: Shows trips not yet started, sorted by start date
  - **Past Trips Section**: Shows completed trips, most recent first
  - Quick action buttons: "Create New Trip", "View Map", "Share Trip"
  - Trip cards show: name, activity icon, dates, status badge, thumbnail map
  - Search/filter trips by activity type, date range, status
- **Priority**: P0 (Critical for MVP)
- **Effort**: 3 days

#### F6: Visual Design & Cultural Representation

**F6.1 - Northern-Themed UI/UX**
- **Requirement**: Application design reflects northern life and indigenous culture respectfully
- **Acceptance Criteria**:
  - **Color Palette**: Inspired by northern landscapes
    - Aurora greens (#00FFA3, #7ED7C1)
    - Ice blues (#A8D8EA, #4A90A4)
    - Midnight blues (#1E3A5F, #0D1B2A)
    - Snow whites (#F8F9FA)
    - Earth tones (burnt orange #D4745F, warm browns #8B6F47)
  - **Typography**: Clean, readable fonts; consider indigenous language support for Phase 2
  - **Imagery**:
    - Hero images of northern landscapes (mountains, lakes, aurora)
    - Activity icons with northern aesthetic (not generic)
    - Loading animations inspired by northern lights or wildlife
  - **Cultural Elements**:
    - Acknowledgment of indigenous territories on homepage
    - "Learn More" link to resources on respecting indigenous lands
    - Avoid appropriation: no sacred symbols, consult on Phase 2 deeper integration
  - **Accessibility**: WCAG 2.1 AA compliance (color contrast, keyboard navigation, screen reader support)
- **Priority**: P1 (High priority for brand differentiation)
- **Effort**: 5 days (iterative throughout development)

#### F7: Community Features (Basic MVP)

**F7.1 - Community Interest Page**
- **Requirement**: Municipalities can learn about and express interest in Community tier
- **Acceptance Criteria**:
  - Public landing page: "/community"
  - Explains Community features (coming Phase 2): dashboard, oversight, analytics
  - Feature list:
    - View all active community member trips on admin dashboard
    - Send community-wide safety alerts (weather, trail closures)
    - Access anonymized trip analytics and safety reports
    - Priority support
  - Pricing placeholder: "Contact us for pricing" with inquiry form
  - Inquiry form captures: community name, contact person, email, phone, population size, message
  - Form submissions sent to admin email and stored in database
- **Priority**: P2 (Nice to have for MVP, demonstrates future vision)
- **Effort**: 2 days

### Advanced Features (Future Phases)

#### Phase 2 Features (Months 2-3)

**F8: Enhanced Community Dashboard**
- Community admin portal with authentication
- Real-time map view of all active community member trips
- Ability to filter by activity type, date, risk level
- Export trip reports for SAR operations
- Send push notifications to community members
- Analytics: most popular trails, seasonal trends, safety incidents
- **Estimated Effort**: 2 weeks

**F9: Weather Integration**
- Integrate Environment Canada weather API
- Display 7-day forecast for trip location
- Weather alerts (severe storms, extreme cold) on trip details page
- Automatic email warning if severe weather expected during trip
- Historical weather data for trip planning
- **Estimated Effort**: 1 week

**F10: Trail Conditions & Crowdsourcing**
- Users can report trail conditions (muddy, icy, overgrown, wildlife sightings)
- Community-driven database of trail reviews and ratings
- Photo uploads for trails and waypoints
- Moderation system for inappropriate content
- **Estimated Effort**: 2 weeks

**F11: Indigenous Cultural Integration (Deep)**
- Partner with indigenous communities for authentic representation
- Traditional place names and indigenous language support (Inuktitut, Dene, Gwich'in, etc.)
- Cultural protocols and respect guidelines for specific territories
- Indigenous land acknowledgment specific to trip locations
- Revenue sharing model with indigenous communities
- **Estimated Effort**: 4 weeks + ongoing partnerships
- **Dependencies**: Community consultation and partnership agreements

#### Phase 3 Features (Months 4-6)

**F12: Real-Time GPS Tracking**
- Optional real-time location sharing during trip
- Breadcrumb trail visible to shared contacts
- "SOS" panic button to alert emergency contacts and services
- Requires mobile app development (React Native or Flutter)
- Battery optimization for extended trips
- **Estimated Effort**: 4 weeks
- **Dependencies**: Mobile app infrastructure

**F13: Wildlife & Hazard Database**
- Crowdsourced database of wildlife sightings (bears, moose, etc.)
- Known hazards map layer (avalanche zones, unstable ice, rockfall areas)
- Integration with Parks Canada alerts
- User-submitted hazard reports with verification
- **Estimated Effort**: 3 weeks

**F14: Equipment & Packing Lists**
- Activity-specific packing list templates (hiking, winter camping, fishing)
- Customizable checklist with check-off functionality
- Gear rental partner integrations (Yellowknife, Whitehorse outfitters)
- Seasonal recommendations based on dates and location
- **Estimated Effort**: 2 weeks

**F15: Social Features**
- Trip discovery: browse public trips for inspiration
- Follow other users
- Trip comments and photos
- "Trip Buddies" - find partners for solo adventurers
- Activity feed of friends' completed trips
- **Estimated Effort**: 3 weeks

**F16: Mobile App (Native)**
- React Native or Flutter mobile app for iOS and Android
- Push notifications for check-ins and alerts
- Improved offline functionality with full map caching
- Camera integration for trip photos
- App Store and Google Play distribution
- **Estimated Effort**: 6-8 weeks
- **Dependencies**: PWA success validates mobile investment

---

## 4. Technical Architecture

### Technology Stack Recommendations

#### Frontend
**Framework: React 18+ with TypeScript**
- **Rationale**:
  - Industry standard with excellent Claude Code support
  - TypeScript adds type safety, reducing runtime errors for solo dev
  - Rich ecosystem of libraries for maps, forms, UI components
  - PWA support via Create React App or Vite
- **Specific Libraries**:
  - **UI Framework**: Material-UI (MUI) v5 or Tailwind CSS + Headless UI
    - MUI: Comprehensive component library, fast prototyping, built-in accessibility
    - Tailwind: More control over custom northern-themed design
    - **Recommendation**: Tailwind CSS for unique visual identity
  - **Mapping**: Mapbox GL JS v2.15+
    - Free tier: 50,000 map loads/month (sufficient for MVP)
    - Excellent offline tile caching
    - Beautiful, customizable map styles
    - Alternative: Leaflet.js + OpenStreetMap (fully free, but less polished)
  - **State Management**: Zustand or React Query
    - Zustand: Simple, lightweight, great for solo dev
    - React Query: Excellent for API data caching and sync
    - **Recommendation**: React Query for server state + Zustand for UI state
  - **Forms**: React Hook Form + Zod validation
    - Excellent performance with uncontrolled components
    - Zod provides TypeScript-first schema validation
  - **Routing**: React Router v6
  - **Date/Time**: date-fns (lightweight alternative to moment.js)

#### Backend
**Framework: Node.js with Express.js OR Next.js API Routes**
- **Option A - Separate Backend (Express.js)**:
  - **Pros**: Clear separation, easier to scale later, can swap frontend
  - **Cons**: More boilerplate for solo dev, two deployments
- **Option B - Next.js Full-Stack (Recommended for MVP)**:
  - **Pros**:
    - API routes in same codebase, faster development
    - Built-in SSR/SSG for better SEO and performance
    - Vercel deployment is trivial and free
    - Easy to migrate to separate backend later if needed
  - **Cons**: Slight vendor lock-in to Next.js patterns
- **Recommendation**: **Next.js 14+ (App Router)** for MVP speed

**API Design: RESTful with potential GraphQL migration**
- REST for MVP (simpler, Claude Code excels at REST APIs)
- Consider GraphQL in Phase 2 if mobile app needs flexible queries

#### Database
**Primary Database: PostgreSQL (Neon.tech or Supabase)**
- **Rationale**:
  - Free tier sufficient for MVP (Neon: 10 GB storage, Supabase: 500 MB)
  - Relational model fits trip data structure well
  - PostGIS extension for geospatial queries (route searches, proximity)
  - Strong consistency for safety-critical data
- **Schema Design**:
  - `users`: id, email, password_hash, name, phone, created_at, updated_at
  - `emergency_contacts`: id, user_id (FK), name, phone, email, relationship
  - `trips`: id, user_id (FK), name, activity_type, start_date, end_date, status, visibility, route_geojson, starting_point, destination, party_size, vehicle_info, equipment, notes, created_at, updated_at
  - `waypoints`: id, trip_id (FK), label, coordinates (lat/lng), order
  - `trip_shares`: id, trip_id (FK), share_token (unique), recipient_email, created_at, view_count
  - `trip_views`: id, trip_share_id (FK), viewed_at, ip_address (anonymized)
  - `community_inquiries`: id, community_name, contact_name, email, phone, population, message, created_at
  - `check_ins`: id, trip_id (FK), checked_in_at, check_in_type (manual, auto, extended)

**Caching Layer: Redis (Upstash)**
- Free tier: 10,000 commands/day
- Use cases:
  - Session storage (JWT alternative for stateful sessions)
  - Cache frequently accessed trips
  - Rate limiting for API endpoints
  - Queue for email notifications (BullMQ)

#### Authentication
**Auth0 OR Supabase Auth**
- **Auth0 (Recommended)**:
  - Free tier: 7,000 active users
  - Social login (Google) built-in
  - Email verification and password reset flows
  - Secure, battle-tested, reduces security burden on solo dev
  - Excellent documentation and Claude Code can implement easily
- **Supabase Auth** (Alternative):
  - Free with Supabase database
  - Simpler if already using Supabase for DB
  - Slightly less feature-rich than Auth0

#### File Storage
**Cloudinary OR Vercel Blob Storage**
- **Use Cases**:
  - User profile photos
  - Phase 2: Trip photos, trail condition images
- **Cloudinary Free Tier**: 25 GB storage, 25 GB bandwidth/month
- **Vercel Blob**: Pay-as-you-go, but very affordable for low usage
- **Recommendation**: Cloudinary for generous free tier

#### Email Service
**Resend OR SendGrid**
- **Resend (Recommended)**:
  - Modern, developer-friendly API
  - Free tier: 100 emails/day, 3,000/month
  - Beautiful email templates with React Email
  - Excellent deliverability
- **SendGrid** (Alternative):
  - Free tier: 100 emails/day
  - More enterprise-focused, steeper learning curve

#### Background Jobs & Scheduling
**Node-Cron OR Vercel Cron Jobs**
- **Use Cases**:
  - Check for overdue trips every hour
  - Send check-in reminders at expected return times
  - Clean up expired offline maps
- **Node-Cron**: Simple, runs in Node process (fine for MVP scale)
- **Vercel Cron**: Serverless cron jobs, more scalable
- **Recommendation**: Vercel Cron Jobs if using Vercel, else node-cron

#### Monitoring & Analytics
**Sentry (Error Tracking) + Vercel Analytics**
- **Sentry**: Free tier for error tracking, performance monitoring
- **Vercel Analytics**: Simple, privacy-friendly web analytics (free)
- **Phase 2**: Google Analytics 4 or Plausible for deeper insights

#### Deployment & Hosting
**Frontend & Backend: Vercel (Recommended) OR Netlify + Railway**
- **Vercel (All-in-One)**:
  - Free tier: Unlimited personal projects, 100 GB bandwidth
  - Perfect for Next.js (created by Vercel)
  - Automatic HTTPS, CDN, preview deployments
  - Serverless functions for API routes
  - Custom domain support
- **Alternative**: Netlify (frontend) + Railway (backend)
  - Netlify: Similar to Vercel, great for static sites
  - Railway: Free $5/month credit, good for containerized backends

**Database Hosting: Neon.tech OR Supabase**
- Both have generous free tiers and great developer experience

**Domain: NorthernGuardian.ca**
- Purchase via Namecheap or Google Domains (~$15-20/year CAD)

### Integration Strategy

#### Component Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                         User Browser                        │
│  ┌───────────────────────────────────────────────────────┐  │
│  │           React PWA (Progressive Web App)             │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐  │  │
│  │  │   UI Layer  │  │  State Mgmt  │  │ Offline DB  │  │  │
│  │  │  (Tailwind) │  │ (React Query)│  │  (IndexedDB)│  │  │
│  │  └─────────────┘  └──────────────┘  └─────────────┘  │  │
│  │  ┌───────────────────────────────────────────────┐   │  │
│  │  │         Mapbox GL JS (Maps & Routes)          │   │  │
│  │  └───────────────────────────────────────────────┘   │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │ HTTPS
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Vercel (Edge Network)                    │
│  ┌───────────────────────────────────────────────────────┐  │
│  │               Next.js 14 Application                  │  │
│  │  ┌─────────────────────┐  ┌──────────────────────┐   │  │
│  │  │  SSR/SSG Pages      │  │   API Routes (/api)  │   │  │
│  │  │  (Public pages,     │  │  - Auth endpoints    │   │  │
│  │  │   SEO optimized)    │  │  - Trip CRUD         │   │  │
│  │  │                     │  │  - Share/Notify      │   │  │
│  │  └─────────────────────┘  └──────────────────────┘   │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
   ┌────────────┐    ┌────────────┐    ┌────────────┐
   │   Auth0    │    │ PostgreSQL │    │   Redis    │
   │   (Auth)   │    │  (Neon.tech)│   │  (Upstash) │
   └────────────┘    └────────────┘    └────────────┘
          │
          ▼
   ┌────────────────────────────────────────┐
   │        Third-Party Services            │
   │  ┌──────────┐  ┌──────────┐           │
   │  │  Resend  │  │Cloudinary│  [Phase 2]│
   │  │ (Email)  │  │ (Images) │  Weather  │
   │  └──────────┘  └──────────┘   API     │
   └────────────────────────────────────────┘
```

#### Data Flow Examples

**1. Create Trip Flow**
```
User fills form → React Hook Form validates →
POST /api/trips with trip data + GeoJSON route →
Next.js API route authenticates (Auth0 middleware) →
Validate with Zod schema →
Insert into PostgreSQL (trips + waypoints tables) →
Return trip ID and data →
Update React Query cache →
Display success message + redirect to trip details
```

**2. Share Trip Flow**
```
User clicks "Share" → Modal with email input →
POST /api/trips/:id/share with recipient emails →
Generate unique share tokens (UUID) →
Insert into trip_shares table →
Queue email jobs in Redis (BullMQ) →
Background worker sends emails via Resend →
Email contains link: /shared/:share_token →
Public route (no auth) renders trip details read-only
```

**3. Overdue Check Flow (Scheduled Job)**
```
Vercel Cron runs every hour: GET /api/cron/check-overdue →
Query trips WHERE end_date < NOW() - 2 hours AND status = 'in_progress' →
For each overdue trip:
  - Fetch emergency contacts
  - Queue notification emails
  - Update trip status to 'overdue'
  - Send emails with trip details and "Contact authorities" message
Return job status (# trips processed)
```

### API Design

#### RESTful API Endpoints

**Authentication**
```
POST   /api/auth/signup             Create new user account
POST   /api/auth/login              Authenticate user
POST   /api/auth/logout             End user session
POST   /api/auth/forgot-password    Send password reset email
POST   /api/auth/reset-password     Reset password with token
GET    /api/auth/me                 Get current user info
```

**Users & Profiles**
```
GET    /api/users/:id               Get user profile (public data)
PATCH  /api/users/:id               Update user profile
DELETE /api/users/:id               Delete user account

POST   /api/users/:id/emergency-contacts      Add emergency contact
GET    /api/users/:id/emergency-contacts      List emergency contacts
PATCH  /api/users/:id/emergency-contacts/:eid Update emergency contact
DELETE /api/users/:id/emergency-contacts/:eid Delete emergency contact
```

**Trips**
```
POST   /api/trips                   Create new trip
GET    /api/trips                   List user's trips (with filters)
GET    /api/trips/:id               Get trip details
PATCH  /api/trips/:id               Update trip
DELETE /api/trips/:id               Delete trip

POST   /api/trips/:id/share         Share trip (generate share link)
DELETE /api/trips/:id/share/:token  Revoke share link
GET    /api/trips/:id/export-gpx    Export trip route as GPX file

POST   /api/trips/:id/check-in      Check in (mark safe return)
POST   /api/trips/:id/extend        Extend return deadline
```

**Public Routes (No Auth)**
```
GET    /api/shared/:token           View shared trip (public)
POST   /api/community/inquiry       Submit community interest form
```

**Admin/Community (Phase 2)**
```
GET    /api/community/trips         List community member trips
GET    /api/community/analytics     Get trip analytics
POST   /api/community/alerts        Send community alert
```

**Cron Jobs (Internal, Auth by Secret)**
```
GET    /api/cron/check-overdue      Check for overdue trips
GET    /api/cron/send-reminders     Send check-in reminders
GET    /api/cron/cleanup-maps       Clean expired offline maps
```

#### Request/Response Examples

**POST /api/trips - Create Trip**
```json
Request:
{
  "name": "Great Slave Lake Fishing Trip",
  "activity_type": "fishing",
  "start_date": "2025-11-15T08:00:00Z",
  "end_date": "2025-11-17T18:00:00Z",
  "party_size": 3,
  "starting_point": {
    "lat": 62.4540,
    "lng": -114.3718,
    "address": "Yellowknife, NT"
  },
  "destination": {
    "lat": 62.6789,
    "lng": -113.9876,
    "address": "North Arm, Great Slave Lake"
  },
  "route": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-114.3718, 62.4540],
            [-114.2000, 62.5500],
            [-113.9876, 62.6789]
          ]
        }
      }
    ]
  },
  "waypoints": [
    {
      "lat": 62.5500,
      "lng": -114.2000,
      "label": "Lunch stop - East shore",
      "order": 1
    }
  ],
  "vehicle_info": "Red Toyota Tacoma, NT-ABC123",
  "equipment": "Boat, fishing gear, 3-day food supply, satellite phone",
  "notes": "Will check in via satellite phone each evening",
  "visibility": "shared",
  "emergency_contact_ids": [1, 2]
}

Response (201 Created):
{
  "id": 42,
  "user_id": 5,
  "name": "Great Slave Lake Fishing Trip",
  "activity_type": "fishing",
  "start_date": "2025-11-15T08:00:00Z",
  "end_date": "2025-11-17T18:00:00Z",
  "status": "upcoming",
  "visibility": "shared",
  "party_size": 3,
  "starting_point": {
    "lat": 62.4540,
    "lng": -114.3718,
    "address": "Yellowknife, NT"
  },
  "destination": {
    "lat": 62.6789,
    "lng": -113.9876,
    "address": "North Arm, Great Slave Lake"
  },
  "route": { ... },
  "waypoints": [ ... ],
  "vehicle_info": "Red Toyota Tacoma, NT-ABC123",
  "equipment": "Boat, fishing gear, 3-day food supply, satellite phone",
  "notes": "Will check in via satellite phone each evening",
  "estimated_distance_km": 47.3,
  "created_at": "2025-10-30T15:30:00Z",
  "updated_at": "2025-10-30T15:30:00Z",
  "share_url": "https://northernguardian.ca/trips/42/view"
}
```

**GET /api/trips?status=upcoming&activity_type=hiking - List Trips**
```json
Response (200 OK):
{
  "trips": [
    {
      "id": 15,
      "name": "Cameron Falls Day Hike",
      "activity_type": "hiking",
      "start_date": "2025-11-05T10:00:00Z",
      "end_date": "2025-11-05T18:00:00Z",
      "status": "upcoming",
      "party_size": 2,
      "thumbnail_map_url": "https://api.mapbox.com/styles/v1/...",
      "created_at": "2025-10-28T12:00:00Z"
    },
    { ... }
  ],
  "total": 5,
  "page": 1,
  "page_size": 20
}
```

### Security & Performance Requirements

#### Security Requirements

**Authentication & Authorization**
- **S1**: All API endpoints (except public routes) require valid JWT authentication token
- **S2**: Passwords hashed with bcrypt (cost factor 12) or delegated to Auth0
- **S3**: JWT tokens expire after 24 hours; refresh tokens valid for 30 days
- **S4**: Rate limiting: 100 requests per 15 minutes per IP for API routes
- **S5**: CORS configured to allow only whitelisted origins (northernguardian.ca)
- **S6**: HTTP-only, Secure, SameSite cookies for session tokens

**Data Protection**
- **S7**: All communication over HTTPS/TLS 1.3
- **S8**: Environment variables for secrets (never commit to git)
- **S9**: Database connections encrypted (SSL/TLS)
- **S10**: Sensitive data (phone numbers, email) encrypted at rest (PostgreSQL pgcrypto or application-level)
- **S11**: Share tokens are UUIDs (non-guessable), not sequential IDs
- **S12**: Soft delete for trips (flag as deleted, don't actually delete for recovery/audit)

**Input Validation**
- **S13**: All user inputs validated on backend with Zod schemas (never trust client)
- **S14**: SQL injection prevention via parameterized queries (Prisma ORM or pg-promise)
- **S15**: XSS prevention: sanitize user-generated content (DOMPurify for rich text)
- **S16**: File upload restrictions (Phase 2): max 5MB, only image types (JPEG, PNG, WebP)

**Privacy**
- **S17**: GDPR/PIPEDA compliance: users can export and delete all their data
- **S18**: Privacy policy and terms of service on signup
- **S19**: Trip shares: anonymize IP addresses in view tracking (last octet zeroed)
- **S20**: Minimal data collection: only what's necessary for safety features

#### Performance Requirements

**Response Time**
- **P1**: Page load (initial): < 3 seconds on 3G connection
- **P2**: API responses: < 500ms for read operations, < 1s for write operations
- **P3**: Map tile loading: < 2 seconds for initial viewport
- **P4**: Trip search/filter: < 1 second for results under 1000 trips

**Scalability**
- **P5**: Support 100 concurrent users without degradation (MVP target)
- **P6**: Database queries optimized with indexes on foreign keys, status, dates
- **P7**: CDN caching for static assets (images, CSS, JS bundles)
- **P8**: API response caching with Redis for frequently accessed data (trip lists, public trips)

**Availability**
- **P9**: 95% uptime during MVP phase (acceptable for beta)
- **P10**: Graceful degradation: if map API fails, show text address; if email fails, queue for retry
- **P11**: Database backups: daily automated backups with 7-day retention

**Offline Performance**
- **P12**: PWA service worker caches app shell (HTML, CSS, JS) for instant offline load
- **P13**: Offline map tiles load in < 1 second from IndexedDB
- **P14**: Trip data syncs when connection restored (conflict resolution: last-write-wins for MVP)

**Monitoring & Alerting**
- **P15**: Error tracking with Sentry (95%+ error-free sessions target)
- **P16**: Alert on critical failures (database down, email service failure) via Sentry notifications
- **P17**: Log all API requests with response times (Vercel logs or Datadog for Phase 2)

---

## 5. Claude Code Development Considerations

### Strengths to Leverage

**1. Rapid Prototyping**
- Claude Code excels at generating full-stack boilerplate quickly
- **Strategy**: Use Claude Code to scaffold Next.js app structure, database schema, API routes in first week
- **Example Prompts**:
  - "Create a Next.js 14 app with TypeScript, Tailwind CSS, and App Router"
  - "Generate Prisma schema for users, trips, emergency contacts, and waypoints tables"
  - "Create RESTful API routes for trip CRUD operations with Zod validation"

**2. Type Safety & Code Quality**
- Claude Code generates TypeScript with proper types, reducing bugs
- **Strategy**: Request comprehensive type definitions for all data models, API responses, component props
- **Example**: "Create TypeScript types for Trip, User, EmergencyContact based on Prisma schema"

**3. Testing Generation**
- Claude Code can write unit tests, integration tests, and E2E tests
- **Strategy**: Test-driven development (TDD) for critical paths (trip creation, sharing, notifications)
- **Example**: "Write Jest unit tests for trip validation logic" or "Create Playwright E2E test for trip creation flow"

**4. Documentation**
- Claude Code excels at writing clear comments, README files, API documentation
- **Strategy**: Request inline JSDoc comments for complex functions, OpenAPI spec for API
- **Example**: "Add JSDoc comments to all trip service functions"

**5. Debugging & Refactoring**
- Claude Code can identify bugs, suggest optimizations, refactor for readability
- **Strategy**: Iteratively refactor components for performance and maintainability
- **Example**: "Refactor TripForm component to use React Hook Form and extract validation logic"

### Development Strategy Adaptations

#### Requirements Precision

**Provide Detailed Specifications**
For each feature, give Claude Code:
1. **User Story**: As a [user], I want [feature] so that [benefit]
2. **Acceptance Criteria**: Specific, testable conditions for completion
3. **Data Models**: Exact fields, types, relationships
4. **UI/UX Details**: Wireframes (even hand-drawn sketches converted to text descriptions)
5. **Edge Cases**: What happens if user inputs invalid data? Network fails? Database is down?

**Example Request**:
```
Create a trip sharing feature with these requirements:

User Story: As a trip creator, I want to share my trip via email so my family knows where I am.

Acceptance Criteria:
- User clicks "Share Trip" button on trip details page
- Modal opens with email input (comma-separated for multiple recipients)
- Validation: valid email format, max 5 recipients
- On submit, generate unique share token (UUID)
- Insert into trip_shares table (trip_id, share_token, recipient_email, created_at)
- Send email via Resend API with template including trip name, dates, and link
- Link format: https://northernguardian.ca/shared/{share_token}
- Close modal and show success toast: "Trip shared with 3 people"
- Error handling: if email API fails, show error and allow retry

Data Model (add to schema):
- trip_shares: id (serial), trip_id (FK to trips), share_token (UUID, unique), recipient_email (text), created_at (timestamp), view_count (int, default 0)

Edge Cases:
- Recipient email bounces: log error, don't block UI
- Share token already exists: regenerate (shouldn't happen with UUID, but handle gracefully)
- User shares twice with same email: create new entry (allow multiple shares)
```

#### Test-Driven Development

**Testing Approach**
1. **Unit Tests (Jest)**:
   - All utility functions (validation, date calculations, token generation)
   - API route logic (mock database calls)
   - Target: 80%+ code coverage
2. **Integration Tests (Jest + Supertest)**:
   - API endpoints with real database (use test database)
   - Test full request/response cycles
   - Target: All critical paths (auth, trip CRUD, sharing)
3. **E2E Tests (Playwright)**:
   - User flows: signup → create trip → share → check in
   - Run in CI/CD before deployment
   - Target: 5-10 critical user journeys
4. **Manual Testing**:
   - Solo dev: test on real devices (iPhone, Android, laptop)
   - Browser compatibility: Chrome, Firefox, Safari, Edge

**Claude Code Integration**:
- Request tests before implementation: "Write unit tests for trip validation, then implement the function"
- Generate test data factories: "Create a trip factory for testing with realistic data"
- Mock external services: "Mock Resend email API for trip sharing tests"

#### Continuous Feedback

**Iterative Development Cycles**
- **Week 1**: Build core infrastructure (auth, database, basic UI)
  - **Feedback**: Manual testing, verify deployment works
- **Week 2**: Trip creation and map integration
  - **Feedback**: Create 5-10 test trips, validate map rendering on mobile
- **Week 3**: Sharing and notifications
  - **Feedback**: Send test emails, verify share links work for non-users
- **Week 4**: Polish, offline mode, bug fixes
  - **Feedback**: Beta test with 5-10 friends/family, collect issues

**Claude Code Usage**:
- After each feature: "Review this code for bugs, performance issues, and security vulnerabilities"
- Before committing: "Suggest improvements to this component for readability and maintainability"

#### Technology Stack Optimizations

**Claude Code-Friendly Choices**
1. **Next.js over separate React + Express**:
   - Fewer files, less context switching
   - Claude Code can generate full-stack features in one prompt
2. **Prisma ORM over raw SQL**:
   - Type-safe database queries
   - Claude Code generates migrations and queries easily
3. **Tailwind CSS over styled-components**:
   - Utility-first, less JavaScript, faster for solo dev
   - Claude Code excellent at Tailwind class composition
4. **Zod over custom validation**:
   - Declarative schema, easy to read and modify
   - Claude Code can generate schemas from TypeScript types
5. **React Hook Form over Formik**:
   - Better performance, simpler API
   - Claude Code can create complex forms with validation quickly

**Avoid for Solo Dev MVP**:
- GraphQL (more complexity than needed for MVP)
- Microservices (premature for single developer)
- Complex state management (Redux) - React Query + Zustand sufficient

---

## 6. User Stories & Acceptance Criteria

### Epic 1: User Onboarding & Authentication

**US1.1 - Account Creation**
- **As a** new user
- **I want to** create an account with my email
- **So that** I can save and manage my trip plans

**Acceptance Criteria**:
- [ ] User navigates to /signup page
- [ ] Form includes: email, password, confirm password, name, phone (optional)
- [ ] Email validation: valid format, not already registered
- [ ] Password validation: min 8 chars, 1 uppercase, 1 number, 1 special char
- [ ] Passwords must match
- [ ] On submit, account created and confirmation email sent
- [ ] User redirected to /verify-email page with message to check inbox
- [ ] Email link confirms account and redirects to /login
- [ ] Error states: "Email already registered", "Passwords don't match"

**US1.2 - Social Login**
- **As a** user who prefers convenience
- **I want to** sign up/login with my Google account
- **So that** I don't have to remember another password

**Acceptance Criteria**:
- [ ] "Sign in with Google" button on /login and /signup pages
- [ ] Clicking button opens Google OAuth consent screen
- [ ] After granting permission, user redirected back to app
- [ ] If new user, account auto-created with Google profile info (name, email, photo)
- [ ] User lands on dashboard after successful auth
- [ ] Error handling: if Google auth fails, show error message and allow retry

**US1.3 - Emergency Contact Setup**
- **As a** safety-conscious user
- **I want to** add my emergency contacts to my profile
- **So that** they are automatically notified if I don't return from a trip

**Acceptance Criteria**:
- [ ] User navigates to /profile/emergency-contacts
- [ ] "Add Emergency Contact" button opens modal/form
- [ ] Form fields: name (required), relationship (dropdown or text), phone (required, E.164 format), email (optional)
- [ ] Can add up to 5 emergency contacts
- [ ] List shows all contacts with edit/delete buttons
- [ ] Delete shows confirmation: "Remove [Name] as emergency contact?"
- [ ] Changes saved immediately (no separate "Save" button needed)
- [ ] Validation: phone number valid format (Canadian: +1-XXX-XXX-XXXX)

### Epic 2: Trip Planning & Creation

**US2.1 - Create Basic Trip**
- **As a** hiker planning a day trip
- **I want to** create a trip with essential details
- **So that** my family knows where I'll be

**Acceptance Criteria**:
- [ ] User clicks "Create New Trip" from dashboard
- [ ] Form includes all required fields (see F2.1 acceptance criteria)
- [ ] Activity type dropdown: Hiking, Camping, Fishing, Hunting, Snowmobiling, Kayaking, Other
- [ ] Date/time pickers for start and end (must be future dates, end > start)
- [ ] Party size: number input, min 1, max 20
- [ ] Form auto-saves draft every 30 seconds (toast: "Draft saved")
- [ ] "Save Draft" button to manually save without publishing
- [ ] "Create Trip" button validates and publishes trip
- [ ] Validation errors shown inline (red text below field)
- [ ] Success: redirect to trip details page with success message

**US2.2 - Add Trip Route on Map**
- **As a** user planning a hiking route
- **I want to** draw my route on an interactive map
- **So that** others can see exactly where I'm going

**Acceptance Criteria**:
- [ ] Trip creation form includes interactive map (Mapbox GL JS)
- [ ] Map defaults to user's location (if permission granted) or Yellowknife, NT
- [ ] Drawing tools:
  - [ ] "Draw Route" button activates line drawing mode
  - [ ] Click map to add route points
  - [ ] Double-click or "Finish" button to complete route
  - [ ] "Add Waypoint" button to drop single pins with labels
- [ ] Route displayed as blue line on map
- [ ] Waypoints shown as numbered markers
- [ ] Click waypoint to edit label or delete
- [ ] Distance auto-calculated and displayed (e.g., "Distance: 12.5 km")
- [ ] Elevation gain shown if available from API (Phase 2 enhancement)
- [ ] "Clear Route" button to start over
- [ ] Route saved as GeoJSON in trip record

**US2.3 - Add Safety Information**
- **As a** responsible adventurer
- **I want to** include vehicle info and equipment list
- **So that** search & rescue has all needed information

**Acceptance Criteria**:
- [ ] Vehicle information section: text input for "Red Toyota Tacoma, NT-ABC123"
- [ ] Equipment list: textarea, placeholder: "List your gear (GPS, satellite phone, first aid kit, etc.)"
- [ ] Emergency contact selection: checkboxes for contacts from profile
- [ ] If no contacts added, prompt: "Add emergency contacts in profile" with link
- [ ] Special notes: textarea for medical conditions, alternate plans, etc.
- [ ] Character limits: vehicle (100 chars), equipment (500 chars), notes (1000 chars)
- [ ] All fields optional, but warning if no emergency contact selected

### Epic 3: Trip Sharing & Communication

**US3.1 - Share Trip with Family**
- **As a** trip creator
- **I want to** share my trip details with my family
- **So that** they know where I am and when to expect me back

**Acceptance Criteria**:
- [ ] "Share Trip" button on trip details page
- [ ] Modal with options:
  - [ ] "Copy Link" - copies shareable URL to clipboard
  - [ ] "Email to Contacts" - input for email addresses (comma-separated)
  - [ ] "Share with Emergency Contacts" - checkbox (auto-fills their emails)
- [ ] Email sending:
  - [ ] Email includes trip name, dates, activity type, route map thumbnail, link to full details
  - [ ] Email subject: "[Your Name] shared a trip plan with you: [Trip Name]"
  - [ ] Email template matches northern visual theme
- [ ] Share link format: https://northernguardian.ca/shared/{token}
- [ ] Link works for anyone (no login required)
- [ ] Shared view is read-only, includes all trip details except creator's personal notes
- [ ] "Shared with 3 people" confirmation message
- [ ] Share history shown on trip details (list of emails/view counts)

**US3.2 - View Shared Trip (Non-User)**
- **As a** family member who received a shared trip
- **I want to** view trip details without creating an account
- **So that** I can quickly see where my loved one is going

**Acceptance Criteria**:
- [ ] Click email link or paste shared URL in browser
- [ ] Page loads without requiring login
- [ ] Shows all trip information: name, dates, activity, route map, waypoints, vehicle, equipment
- [ ] Map is interactive (zoom, pan, click waypoints)
- [ ] Shows trip status: "Trip starts in 2 days" or "Trip in progress" or "Overdue by 3 hours"
- [ ] If overdue, prominent warning: "This trip is overdue. If you cannot reach [Name], contact local authorities."
- [ ] "Export Route (GPX)" button to download for GPS device
- [ ] "Print" button for printer-friendly version
- [ ] Footer: "Create your own trip plans at NorthernGuardian.ca"

**US3.3 - Check-In After Trip**
- **As a** user returning from a trip
- **I want to** check in to confirm I'm safe
- **So that** my emergency contacts aren't unnecessarily notified

**Acceptance Criteria**:
- [ ] Check-in reminder email sent 1 hour before expected return time
- [ ] Email includes big "I'm Back Safe" button (link to /api/trips/:id/check-in?token=xxx)
- [ ] Clicking button marks trip as "completed" and shows confirmation page: "Glad you're safe!"
- [ ] Can also check in from trip details page in app
- [ ] If checked in before return time, status changes to "completed" early
- [ ] If not checked in within 2 hours of return time, status changes to "overdue"
- [ ] Overdue trigger sends emergency contact emails (see US3.4)

**US3.4 - Emergency Contact Notification**
- **As an** emergency contact
- **I want to** be notified if someone doesn't return on time
- **So that** I can take action quickly

**Acceptance Criteria**:
- [ ] Email sent automatically 2 hours after expected return time if no check-in
- [ ] Email subject: "URGENT: [Name] is overdue from trip"
- [ ] Email includes:
  - [ ] Trip details (name, activity, dates, route map)
  - [ ] Last known location (starting point or last waypoint)
  - [ ] Vehicle information
  - [ ] Equipment list
  - [ ] Creator's phone number
  - [ ] Instructions: "Try contacting them. If unreachable, contact RCMP/local SAR at [numbers]"
  - [ ] Link to shared trip for full details
- [ ] Email sent to all emergency contacts associated with trip
- [ ] User also gets email: "You're marked overdue. Check in or extend trip if safe."
- [ ] User can extend trip deadline from email link (adds 4/8/12/24 hours)

### Epic 4: Trip Management & Discovery

**US4.1 - View Trip Dashboard**
- **As a** user with multiple trips
- **I want to** see all my trips organized by status
- **So that** I can manage upcoming and past adventures

**Acceptance Criteria**:
- [ ] Dashboard at /dashboard shows three sections:
  - [ ] "Active Trips" (trips in progress - started but not completed)
  - [ ] "Upcoming Trips" (trips not yet started, sorted by start date)
  - [ ] "Past Trips" (completed trips, sorted by end date descending)
- [ ] Each trip card shows:
  - [ ] Trip name and activity icon
  - [ ] Dates (formatted: "Nov 15-17, 2025")
  - [ ] Status badge (color-coded: green=upcoming, blue=active, gray=completed, red=overdue)
  - [ ] Thumbnail map image (static map API)
  - [ ] Quick actions: "View", "Share", "Edit" (if upcoming/active)
- [ ] Empty states: "No active trips" with "Create your first trip" CTA
- [ ] Search bar to filter trips by name
- [ ] Filter dropdown: All, Hiking, Camping, Fishing, etc.
- [ ] Responsive: grid on desktop, list on mobile

**US4.2 - Edit Existing Trip**
- **As a** user whose plans changed
- **I want to** update my trip details
- **So that** my shared contacts have accurate information

**Acceptance Criteria**:
- [ ] "Edit" button on trip details page (only for upcoming/active trips)
- [ ] Opens same form as create trip, pre-filled with existing data
- [ ] Can modify any field (dates, route, contacts, etc.)
- [ ] Save button validates and updates trip
- [ ] If trip already shared, email sent to all recipients: "[Name] updated their trip: [Trip Name]"
- [ ] Email includes summary of changes (if feasible) or just "View updated details: [link]"
- [ ] Cannot edit trips marked "completed"
- [ ] Cannot delete trips marked "in progress" (must complete or cancel first)

**US4.3 - Delete or Cancel Trip**
- **As a** user who canceled plans
- **I want to** delete or mark my trip as canceled
- **So that** I don't get unnecessary check-in reminders

**Acceptance Criteria**:
- [ ] "Delete Trip" button on trip details page (only for upcoming trips)
- [ ] Confirmation modal: "Are you sure you want to delete [Trip Name]? This cannot be undone."
- [ ] Options: "Delete" or "Cancel"
- [ ] If trip shared, email sent to recipients: "[Name] canceled their trip: [Trip Name]"
- [ ] Shared links show "This trip has been canceled" message
- [ ] For active trips, "Cancel Trip" button (changes status to "canceled", doesn't delete)
- [ ] Canceled trips don't trigger overdue alerts

### Epic 5: Offline & Mobile Experience

**US5.1 - Download Trip for Offline Use**
- **As a** user going to remote areas
- **I want to** download my trip map for offline viewing
- **So that** I can access it without cell service

**Acceptance Criteria**:
- [ ] "Download for Offline" button on trip details page
- [ ] Button shows estimated download size: "~25 MB"
- [ ] Click button starts download with progress indicator
- [ ] Downloads map tiles for route area + 10km buffer at appropriate zoom levels
- [ ] Saves trip data (details, waypoints) to IndexedDB
- [ ] Success message: "Trip ready for offline use"
- [ ] Offline indicator on trip card: cloud icon with checkmark
- [ ] If offline, app shows "Viewing offline version" banner
- [ ] Offline map expires after 30 days; prompt to re-download if expired
- [ ] Can delete offline maps to free space: "Manage Offline Maps" page

**US5.2 - PWA Installation**
- **As a** mobile user
- **I want to** install NorthernGuardian as an app on my phone
- **So that** it feels like a native app

**Acceptance Criteria**:
- [ ] PWA manifest.json configured with app name, icons, theme colors
- [ ] Service worker caches app shell (HTML, CSS, JS)
- [ ] Browser shows "Install NorthernGuardian" prompt (on supported browsers)
- [ ] After install, app icon appears on home screen
- [ ] Opens in standalone mode (no browser chrome)
- [ ] Splash screen shows NorthernGuardian logo and northern-themed background
- [ ] Works offline: if no connection, shows cached pages and offline trips
- [ ] Online/offline status indicator in header

### Epic 6: Community Interest (MVP Placeholder)

**US6.1 - Community Landing Page**
- **As a** municipal safety officer
- **I want to** learn about NorthernGuardian Community features
- **So that** I can evaluate it for our town

**Acceptance Criteria**:
- [ ] Public page at /community (accessible without login)
- [ ] Hero section: "Keep Your Community Safe with NorthernGuardian Community"
- [ ] Features list with icons:
  - [ ] Community trip dashboard
  - [ ] Safety alerts and notifications
  - [ ] Trip analytics and reporting
  - [ ] Priority support
- [ ] Pricing: "Contact us for custom pricing based on community size"
- [ ] Inquiry form: community name, contact person, email, phone, population, message
- [ ] Submit button sends form to admin email and stores in database
- [ ] Thank you message: "We'll contact you within 2 business days"
- [ ] Testimonials placeholder (Phase 2: add real testimonials)

### Edge Cases & Error Scenarios

**EC1: Network Failures**
- **Scenario**: User creates trip, but API call fails due to network error
- **Expected**: Form data saved to localStorage; retry button shown; on reconnect, auto-submit
- **Acceptance**: User doesn't lose work; clear error message; successful recovery

**EC2: Invalid/Expired Share Link**
- **Scenario**: User clicks shared link, but token is invalid or trip deleted
- **Expected**: 404 page with message: "This trip link is invalid or has been removed."
- **Acceptance**: Helpful error; CTA to create own account

**EC3: Overdue Trip False Alarm**
- **Scenario**: User extends trip via phone call, but system already sent overdue alert
- **Expected**: User can retroactively check in; system sends "False alarm - they're safe" email to contacts
- **Acceptance**: Contacts notified of resolution; user can explain in check-in message

**EC4: Conflicting Trip Times**
- **Scenario**: User tries to create overlapping trips (both marked "in progress" at same time)
- **Expected**: Warning (not blocker): "You have another trip during this time. Are you sure?"
- **Acceptance**: Allow but warn; user may be guiding multiple groups

**EC5: Map API Quota Exceeded**
- **Scenario**: Mapbox free tier quota (50k loads/month) exceeded
- **Expected**: Fallback to static map images or OpenStreetMap; email admin alert
- **Acceptance**: Degraded experience but functional; admin notified to upgrade plan

**EC6: Email Delivery Failure**
- **Scenario**: Emergency contact's email bounces or Resend API fails
- **Expected**: Retry 3 times with exponential backoff; log failure; notify user if critical
- **Acceptance**: User sees "Email to [contact] failed. Try different email."

---

## 7. Implementation Roadmap

### Phase 1: MVP (Weeks 1-4)

#### Week 1: Foundation & Infrastructure
**Days 1-2: Project Setup & Architecture**
- [ ] Initialize Next.js 14 project with TypeScript, Tailwind CSS, ESLint, Prettier
- [ ] Set up Git repository, .gitignore, environment variables
- [ ] Create Vercel project for deployments
- [ ] Set up Neon.tech or Supabase PostgreSQL database
- [ ] Install and configure Prisma ORM
- [ ] Define database schema (users, trips, emergency_contacts, waypoints, trip_shares, check_ins)
- [ ] Run initial migration and seed test data
- [ ] Configure Auth0 or Supabase Auth for authentication
- **Deliverable**: Deployed "Hello World" Next.js app with database connection

**Days 3-4: Authentication & User Profiles**
- [ ] Implement Auth0 integration (signup, login, logout)
- [ ] Create user profile page (view/edit name, phone, email)
- [ ] Build emergency contacts CRUD (add, list, edit, delete)
- [ ] API routes: `/api/auth/*, /api/users/:id, /api/users/:id/emergency-contacts`
- [ ] Unit tests for user validation logic
- **Deliverable**: Users can sign up, log in, and manage emergency contacts

**Days 5-7: Core UI Components & Design System**
- [ ] Design and implement component library:
  - [ ] Button, Input, Textarea, Select, Checkbox (using Tailwind + Headless UI)
  - [ ] Modal, Toast notifications, Card, Badge
  - [ ] Northern-themed color palette and typography
- [ ] Create layout components (Header with nav, Footer, Page container)
- [ ] Implement responsive navigation (mobile menu)
- [ ] Homepage with hero section and value proposition
- [ ] Dashboard layout (empty state with "Create Trip" CTA)
- **Deliverable**: Consistent UI/UX with northern aesthetic, responsive on mobile

#### Week 2: Trip Creation & Map Integration
**Days 8-10: Trip Creation Form**
- [ ] Build trip creation form with React Hook Form + Zod validation
- [ ] Form fields: name, activity, dates, party size, vehicle, equipment, notes
- [ ] Date/time pickers (react-datepicker or native HTML5)
- [ ] Auto-save draft functionality (every 30s to localStorage)
- [ ] API route: `POST /api/trips` with validation
- [ ] Save trip to database (trips table)
- [ ] Redirect to trip details page on success
- [ ] Unit tests for trip validation logic
- **Deliverable**: Users can create trips with basic info (no map yet)

**Days 11-13: Map Integration**
- [ ] Set up Mapbox GL JS account and get API key
- [ ] Create Map component (interactive, configurable)
- [ ] Integrate map into trip creation form
- [ ] Implement route drawing tools (Mapbox Draw plugin or custom)
- [ ] Add waypoint functionality (drop pins, add labels)
- [ ] Save route as GeoJSON in trip record
- [ ] Calculate distance from route (Turf.js library)
- [ ] Trip details page with map visualization
- **Deliverable**: Users can draw routes and add waypoints on map

**Day 14: Week 2 Testing & Bug Fixes**
- [ ] Manual testing of trip creation flow (desktop and mobile)
- [ ] Fix any UX issues or bugs discovered
- [ ] Create 10-15 test trips with varied routes
- [ ] E2E test for trip creation (Playwright)
- **Deliverable**: Stable trip creation feature, ready for sharing

#### Week 3: Trip Sharing & Notifications
**Days 15-16: Trip Sharing**
- [ ] Build share trip modal (email input, copy link)
- [ ] Generate unique share tokens (UUID library)
- [ ] API route: `POST /api/trips/:id/share`
- [ ] Store shares in trip_shares table
- [ ] Public route: `GET /api/shared/:token` (no auth required)
- [ ] Shared trip view page (read-only, formatted for non-users)
- [ ] Copy link functionality (Clipboard API)
- **Deliverable**: Users can generate shareable links

**Days 17-18: Email Notifications**
- [ ] Set up Resend account and API key
- [ ] Design email templates with React Email:
  - [ ] Trip shared email (to recipients)
  - [ ] Check-in reminder email (to user)
  - [ ] Overdue alert email (to emergency contacts)
- [ ] Implement email sending service (abstraction layer for Resend API)
- [ ] Send "Trip Shared" email when user shares trip
- [ ] Test email delivery and rendering (multiple email clients)
- **Deliverable**: Trip sharing emails sent successfully

**Days 19-20: Check-In & Overdue System**
- [ ] Build check-in API: `POST /api/trips/:id/check-in`
- [ ] Check-in button on trip details page
- [ ] Check-in link in reminder email (with auth token)
- [ ] Implement cron job (Vercel Cron or node-cron):
  - [ ] Send check-in reminders 1 hour before return time
  - [ ] Check for overdue trips every hour
  - [ ] Send emergency contact alerts if overdue
- [ ] Extend trip deadline API: `POST /api/trips/:id/extend`
- [ ] Unit tests for overdue detection logic
- **Deliverable**: Automated check-in reminders and overdue alerts working

**Day 21: Week 3 Testing & Refinement**
- [ ] End-to-end test: create trip → share → receive email → check in
- [ ] Test overdue scenario (set trip to end in past, verify alert sent)
- [ ] Fix any email deliverability issues
- [ ] Polish email templates for mobile rendering
- **Deliverable**: Full sharing and notification workflow operational

#### Week 4: Polish, Offline Mode & Launch Prep
**Days 22-23: Dashboard & Trip Management**
- [ ] Build user dashboard with active/upcoming/past trip sections
- [ ] Trip cards with thumbnails (static Mapbox API for map images)
- [ ] Search and filter functionality (by activity, dates, status)
- [ ] Edit trip functionality (pre-fill form, update API)
- [ ] Delete trip with confirmation modal
- [ ] API routes: `GET /api/trips` (with query params), `PATCH /api/trips/:id`, `DELETE /api/trips/:id`
- **Deliverable**: Users can view, edit, and delete trips from dashboard

**Days 24-25: Offline Mode (Basic)**
- [ ] Configure PWA manifest.json and service worker
- [ ] Cache app shell (HTML, CSS, JS) for offline access
- [ ] "Download for Offline" button on trip details
- [ ] Download map tiles to IndexedDB (Mapbox offline plugin or custom)
- [ ] Store trip data in IndexedDB
- [ ] Offline indicator in UI when no network
- [ ] Test offline functionality (disable network, verify app loads)
- **Deliverable**: PWA installable, core trips accessible offline

**Days 26-27: Community Landing Page & Final Features**
- [ ] Build /community landing page with features, pricing, inquiry form
- [ ] API route: `POST /api/community/inquiry` (store in database, email admin)
- [ ] Export trip as GPX file (`GET /api/trips/:id/export-gpx`)
- [ ] Print-friendly trip details page
- [ ] About page, Privacy Policy, Terms of Service (basic versions)
- **Deliverable**: Community feature discoverable, legal pages in place

**Day 28: Final Testing, Bug Fixes & Documentation**
- [ ] Comprehensive manual testing on multiple devices (iPhone, Android, laptop)
- [ ] Browser compatibility testing (Chrome, Firefox, Safari, Edge)
- [ ] Performance testing (Lighthouse audits, aim for 90+ scores)
- [ ] Security review (check for exposed secrets, SQL injection, XSS vulnerabilities)
- [ ] Fix all critical bugs and priority UX issues
- [ ] Write README.md with project overview, setup instructions, deployment guide
- [ ] Create user guide or help documentation (basic FAQ)
- **Deliverable**: Production-ready MVP, documented codebase

**Days 29-30: Deployment & Soft Launch**
- [ ] Final deployment to Vercel production
- [ ] Set up custom domain (northernguardian.ca)
- [ ] Configure production environment variables (API keys, database URL)
- [ ] Enable error tracking (Sentry) and analytics (Vercel Analytics)
- [ ] Smoke testing on production URL
- [ ] Soft launch: share with 10-15 beta users (friends, family, outdoor enthusiasts)
- [ ] Create feedback collection mechanism (simple form or email)
- [ ] Monitor for errors and performance issues
- **Deliverable**: Live MVP at northernguardian.ca, gathering user feedback

### Phase 2: Enhanced Features (Months 2-3)

**Timeline**: Weeks 5-12 (8 weeks)

**Priorities**:
1. **Weather Integration (Week 5)**:
   - Environment Canada API or OpenWeatherMap
   - 7-day forecasts on trip details, alerts for severe weather
2. **Community Admin Dashboard (Weeks 6-7)**:
   - Admin authentication and roles
   - Dashboard to view all community member trips
   - Safety alerts to community (email broadcast)
   - Analytics: trip trends, popular areas, safety metrics
3. **Trail Conditions Crowdsourcing (Week 8)**:
   - User-submitted trail reports (conditions, photos, hazards)
   - Moderation system for reports
   - Display recent reports on trip planning map
4. **Indigenous Cultural Integration - Phase 1 (Weeks 9-10)**:
   - Partner outreach to indigenous communities (ongoing)
   - Add traditional place names layer to maps
   - Cultural protocols and land acknowledgment specific to locations
   - Indigenous language support (Inuktitut, Dene) for UI elements
5. **Enhanced Offline Mode (Week 11)**:
   - Larger offline map areas (configurable download size)
   - Sync conflict resolution for trips edited offline
   - Offline trip creation (sync when online)
6. **Mobile App Scoping (Week 12)**:
   - Decide: Progressive Web App sufficient or native app needed?
   - If native: choose React Native or Flutter, start architecture planning

### Phase 3: Production-Ready & Growth (Months 4-6)

**Timeline**: Weeks 13-24 (12 weeks)

**Priorities**:
1. **Real-Time GPS Tracking (Weeks 13-16)**:
   - Requires mobile app (React Native)
   - Background location tracking (battery-optimized)
   - Breadcrumb trail visible to emergency contacts
   - SOS panic button for emergencies
2. **Wildlife & Hazard Database (Weeks 17-18)**:
   - Crowdsourced wildlife sightings (bears, moose, caribou)
   - Known hazard zones (avalanche, unstable ice, rockfall)
   - Integration with Parks Canada and territorial alerts
3. **Social Features (Weeks 19-20)**:
   - Trip discovery: browse public trips for inspiration
   - User profiles with bio and trip history
   - Comments and photos on completed trips
   - Follow system and activity feed
4. **Equipment & Packing Lists (Week 21)**:
   - Activity-specific templates (winter camping, fishing, etc.)
   - Customizable checklists with check-off
   - Partner integrations with local outfitters (affiliate revenue potential)
5. **Community Tier Launch (Week 22)**:
   - Finalize pricing model (per-user, per-community, or hybrid)
   - Onboard 2-3 pilot communities (Yellowknife, Whitehorse, Iqaluit targets)
   - Collect feedback and iterate on admin features
6. **Mobile App Launch (Weeks 23-24)**:
   - Beta test React Native app on TestFlight (iOS) and Google Play Beta
   - App Store and Google Play submission
   - Marketing campaign for app launch

### Risk Mitigation Strategies

**Risk 1: Scope Creep (High Probability, High Impact)**
- **Mitigation**:
  - Strict feature freeze after Day 25 (only bug fixes)
  - Use "Phase 2 Backlog" for all new ideas during MVP
  - Weekly self-review: "Does this feature block launch?"

**Risk 2: Mapbox API Quota Exceeded (Medium Probability, Medium Impact)**
- **Mitigation**:
  - Monitor usage weekly via Mapbox dashboard
  - Implement caching for static map images (CDN)
  - Fallback to OpenStreetMap if quota hit
  - Upgrade to paid tier ($5/month for 100k loads) if approaching limit

**Risk 3: Email Deliverability Issues (Medium Probability, High Impact)**
- **Mitigation**:
  - Use reputable service (Resend) with good deliverability
  - Set up SPF, DKIM, DMARC records for custom domain
  - Test emails in Gmail, Outlook, Yahoo before launch
  - Provide alternative: SMS notifications (Twilio) in Phase 2

**Risk 4: Solo Developer Burnout (High Probability, High Impact)**
- **Mitigation**:
  - Work 6-8 hours/day max, not 12-16 (sustainable pace)
  - Take weekends off or at least 1 full day rest/week
  - Use Claude Code for boilerplate/tedious tasks (leverage AI)
  - Cut scope if needed: offline mode → Phase 2 if time-critical

**Risk 5: Low User Adoption Post-Launch (Medium Probability, High Impact)**
- **Mitigation**:
  - Pre-launch: build email list of interested users (50+ goal)
  - Soft launch with beta users for feedback before public launch
  - Partner with local outdoor clubs, tourism boards for promotion
  - Content marketing: blog posts on northern safety, trip planning tips
  - Social media presence (Instagram, Facebook groups for NT/YT/NU outdoor enthusiasts)

**Risk 6: Security Vulnerability Discovered (Low Probability, Critical Impact)**
- **Mitigation**:
  - Follow OWASP Top 10 best practices (see Security Requirements)
  - Use Auth0 for authentication (reduces attack surface)
  - Regular dependency updates (Dependabot alerts)
  - Security audit before public launch (manual or automated with Snyk)
  - Bug bounty program in Phase 2 (HackerOne or self-hosted)

**Risk 7: Indigenous Community Concerns (Low Probability, High Impact)**
- **Mitigation**:
  - Proactive consultation before Phase 2 cultural integration
  - Avoid sacred symbols or cultural appropriation in MVP design
  - Partner with indigenous advisors for Phase 2 features
  - Revenue sharing model: portion of Community tier fees to indigenous communities
  - Land acknowledgment on homepage, "Learn More" resources

---

## 8. Definition of Done

### MVP Ready Criteria

**Functional Completeness**
- [ ] All Phase 1 features (F1-F7) implemented and tested
- [ ] User can complete full workflow: signup → create trip → share → check in
- [ ] Emergency contacts receive overdue alerts automatically
- [ ] Shared links accessible to non-users without errors

**Cross-Browser & Device Compatibility**
- [ ] Works on Chrome, Firefox, Safari, Edge (latest versions)
- [ ] Responsive design functional on:
  - [ ] Desktop (1920x1080, 1366x768)
  - [ ] Tablet (iPad, 1024x768)
  - [ ] Mobile (iPhone 14, Samsung Galaxy S23, 375x667 to 428x926)
- [ ] PWA installable on iOS (Safari) and Android (Chrome)

**User Experience**
- [ ] All critical user journeys tested and bug-free (see User Stories)
- [ ] No broken links or 404 errors
- [ ] Error messages are helpful and actionable (not just "Error 500")
- [ ] Loading states for all async operations (spinners, skeletons)
- [ ] Success confirmations for all actions (toasts, modals)

**Data Integrity**
- [ ] No data loss during network interruptions (auto-save, retry logic)
- [ ] Database constraints prevent invalid data (foreign keys, unique indexes)
- [ ] Proper transaction handling for multi-step operations (trip + waypoints)

### Technical Performance Standards

**Page Load Performance (Lighthouse)**
- [ ] Performance score: ≥ 85/100 (desktop), ≥ 75/100 (mobile)
- [ ] First Contentful Paint (FCP): < 1.8 seconds
- [ ] Largest Contentful Paint (LCP): < 2.5 seconds
- [ ] Time to Interactive (TTI): < 3.5 seconds
- [ ] Cumulative Layout Shift (CLS): < 0.1

**API Performance**
- [ ] 95th percentile response time: < 500ms for GET requests
- [ ] 95th percentile response time: < 1s for POST/PATCH requests
- [ ] Database queries optimized (no N+1 queries, proper indexes)
- [ ] API rate limiting in place (100 req/15min per user)

**Availability & Reliability**
- [ ] Uptime: ≥ 95% measured over 1 week
- [ ] Error rate: < 5% of requests (tracked in Sentry)
- [ ] Zero critical bugs (data loss, security vulnerabilities, complete feature breakage)
- [ ] Database backups automated (daily, 7-day retention)

**Scalability (MVP)**
- [ ] Support 100 concurrent users without degradation (load test with k6 or Artillery)
- [ ] Database can handle 10,000 trips without performance issues
- [ ] Map tile caching reduces redundant API calls

### Integration & Deployment Standards

**Deployment**
- [ ] Production deployment on Vercel with custom domain (northernguardian.ca)
- [ ] HTTPS enabled with valid SSL certificate (automatic via Vercel)
- [ ] Environment variables properly configured (no secrets in code)
- [ ] Database migrations run successfully in production

**Monitoring & Observability**
- [ ] Sentry configured for error tracking (frontend and backend)
- [ ] Vercel Analytics or Google Analytics tracking page views
- [ ] Uptime monitoring (UptimeRobot or Vercel built-in)
- [ ] Email notifications for critical errors (via Sentry alerts)

**CI/CD (Basic)**
- [ ] Git repository on GitHub with protected main branch
- [ ] Automated deployments on push to main (Vercel GitHub integration)
- [ ] Preview deployments for pull requests (if working with collaborators in future)
- [ ] (Optional) GitHub Actions for running tests before deploy

### Code Quality Standards

**Code Coverage**
- [ ] Unit tests: ≥ 70% coverage for critical logic (validation, calculations, data transformations)
- [ ] Integration tests: All API routes have at least one test
- [ ] E2E tests: 5+ critical user flows covered (signup, create trip, share, check-in, delete)

**Code Review Checklist (Self-Review)**
- [ ] No console.log statements in production code
- [ ] No commented-out code blocks (use git history)
- [ ] Consistent code formatting (Prettier enforced)
- [ ] ESLint warnings resolved (zero linting errors)
- [ ] TypeScript strict mode enabled, no `any` types (except unavoidable)

**Documentation**
- [ ] README.md with:
  - [ ] Project overview and features
  - [ ] Tech stack
  - [ ] Local development setup instructions
  - [ ] Environment variables template
  - [ ] Deployment guide
- [ ] API documentation (OpenAPI/Swagger spec or detailed README)
- [ ] Inline comments for complex logic (JSDoc for public functions)
- [ ] User-facing help/FAQ page

**Security**
- [ ] All secrets in environment variables (never committed to git)
- [ ] OWASP Top 10 vulnerabilities addressed (SQL injection, XSS, CSRF, etc.)
- [ ] Rate limiting on API endpoints
- [ ] Input validation on all user inputs (backend validation, not just frontend)
- [ ] Authentication required for all private routes
- [ ] HTTPS enforced (HTTP redirects to HTTPS)

**Accessibility**
- [ ] WCAG 2.1 AA compliance:
  - [ ] Color contrast ratios ≥ 4.5:1 for normal text, ≥ 3:1 for large text
  - [ ] Keyboard navigation functional (tab order logical, focus indicators visible)
  - [ ] Screen reader compatible (ARIA labels, semantic HTML)
  - [ ] Form labels and error messages accessible
- [ ] Lighthouse Accessibility score: ≥ 90/100

### User Validation

**Beta Testing**
- [ ] Minimum 10 beta users signed up and created trips
- [ ] At least 3 users completed full workflow (create → share → check in)
- [ ] Feedback collected via survey or interviews
- [ ] Critical usability issues identified and fixed

**Success Metrics (1 Week Post-Launch)**
- [ ] 50+ registered users
- [ ] 100+ trips created
- [ ] 2+ community inquiries submitted
- [ ] Average user satisfaction: ≥ 4/5 stars (if collecting ratings)
- [ ] Zero reports of data loss or critical bugs

**Community Validation**
- [ ] At least 1 municipality/community expressed serious interest
- [ ] Shared with relevant stakeholders (tourism boards, SAR organizations) for feedback
- [ ] Positive sentiment on social media or local forums (if shared publicly)

---

## 9. Success Criteria & Metrics

### Development Velocity Metrics

**Sprint Progress (Weekly)**
- **Week 1 Goal**: Foundation complete (auth, database, UI components)
  - **Metric**: All Day 1-7 tasks checked off
  - **Success**: Deployed app with working authentication
- **Week 2 Goal**: Trip creation and map integration functional
  - **Metric**: 10+ test trips created with routes
  - **Success**: Users can create, view, edit trips with maps
- **Week 3 Goal**: Sharing and notifications operational
  - **Metric**: Test emails sent and received for all notification types
  - **Success**: Full sharing workflow end-to-end tested
- **Week 4 Goal**: MVP launch-ready
  - **Metric**: All Definition of Done criteria met
  - **Success**: Live production deployment with beta users

**Code Contribution**
- **Lines of Code**: Not a primary metric (quality over quantity)
- **Features Completed**: Track via GitHub Issues or project board
  - **Target**: 7 major features (F1-F7) in 4 weeks
- **Bug Resolution Rate**:
  - **Target**: 90%+ of bugs fixed within same week discovered
  - **Critical bugs**: Fixed within 24 hours

**Automation & Tooling**
- **Claude Code Usage**: Estimate 40-60% of boilerplate code generated by Claude Code
- **Manual vs Automated Tests**:
  - **Target**: 80% of test coverage automated (unit + integration + E2E)
  - **Manual testing**: Focus on UX/UI polish, cross-device testing

### Quality Assurance Standards

**Test Coverage**
- **Unit Tests**: ≥ 70% coverage for utils, services, validation logic
- **Integration Tests**: 100% of API routes tested
- **E2E Tests**: 5+ critical paths (signup, create trip, share, check-in, delete)
- **Test Execution Time**: Full suite runs in < 5 minutes

**Bug Density**
- **Critical Bugs (P0)**: 0 in production at launch
- **High Priority Bugs (P1)**: < 5 in production at launch
- **Medium/Low Bugs (P2/P3)**: Acceptable, tracked for Phase 2

**Code Quality**
- **ESLint Errors**: 0 (enforced in CI/CD)
- **TypeScript Errors**: 0 (build fails if type errors)
- **Prettier Formatting**: 100% of files formatted (pre-commit hook)
- **Code Review**: Self-review using "Code Review Checklist" before each commit

**Performance**
- **Lighthouse Scores** (averages across 5 key pages):
  - Performance: ≥ 85 (desktop), ≥ 75 (mobile)
  - Accessibility: ≥ 90
  - Best Practices: ≥ 95
  - SEO: ≥ 90
- **Core Web Vitals**: Pass all thresholds (LCP < 2.5s, FID < 100ms, CLS < 0.1)

### User Experience Metrics

**Onboarding & Activation**
- **Signup Completion Rate**: ≥ 80% of users who start signup complete it
- **Time to First Trip**: Average < 10 minutes from signup to first trip created
- **Emergency Contact Setup**: ≥ 70% of users add at least 1 emergency contact within first session

**Engagement**
- **Active Users (Weekly)**: ≥ 60% of signups create at least 1 trip within first week
- **Trips per User**: Average 2+ trips per active user in first 30 days
- **Return Usage**: ≥ 40% of users return to app within 7 days of signup

**Feature Adoption**
- **Trip Sharing**: ≥ 50% of created trips are shared with at least 1 person
- **Offline Download**: ≥ 30% of users download at least 1 trip for offline use
- **Check-In Usage**: ≥ 80% of users check in on time or extend deadline (i.e., don't trigger false overdue alerts)

**User Satisfaction**
- **Net Promoter Score (NPS)**: Target ≥ 40 (measured via post-trip survey)
- **User Feedback**: Collect via in-app survey or email
  - **Target**: ≥ 70% positive feedback, < 10% negative
- **Support Requests**: < 5% of users contact support with issues (indicates good UX)

**Safety Impact**
- **Emergency Contact Coverage**: 100% of trips have at least 1 emergency contact
- **Overdue Alert Accuracy**: < 10% false positive rate (user didn't check in but was safe)
- **User-Reported Safety Incidents**: Track if any users report app helped in emergency (qualitative success)

### Community & Business Metrics

**Community Interest**
- **Inquiries Submitted**: ≥ 2 municipalities submit inquiry forms within first month
- **Follow-Up Meetings**: At least 1 demo/meeting scheduled with interested community
- **Pilot Community**: Sign 1 pilot community for Phase 2 beta (Stretch goal)

**Marketing & Awareness**
- **Website Traffic**: 500+ unique visitors in first month post-launch
- **Social Media**: 200+ followers/likes across platforms (Facebook, Instagram)
- **Press/Media**: 1+ mention in local news, outdoor blogs, or tourism websites

**Revenue Potential (Validation)**
- **Willingness to Pay (Communities)**: Survey indicates ≥ 50% of interested communities would pay $500-$2000/year
- **Individual Upsell Interest**: ≥ 20% of users indicate interest in premium features (real-time tracking, advanced analytics) for $5-10/month

**Partnerships**
- **Outfitter Partnerships**: 1+ local outfitter interested in equipment integration (Phase 2)
- **Indigenous Community Outreach**: Initial contact made with at least 1 indigenous community for cultural consultation
- **SAR Organizations**: Share app with 1+ search & rescue team for feedback

---

## 10. Risk Assessment

### Technical Risks

**TR1: Mapbox API Limitations (Probability: Medium, Impact: High)**
- **Risk**: Free tier quota (50,000 map loads/month) insufficient for user growth
- **Impact**: Maps fail to load for new users, poor user experience
- **Mitigation**:
  - Monitor usage weekly, set up alerts at 70% quota
  - Implement aggressive caching: static map images for thumbnails, CDN caching
  - Fallback to OpenStreetMap (free, unlimited) if quota exceeded
  - Budget $5-25/month for Mapbox paid tier if needed (justifiable if 500+ users)
- **Contingency**: Switch to Leaflet.js + OpenStreetMap entirely (2-3 days refactor)

**TR2: Database Performance Degradation (Probability: Low, Impact: Medium)**
- **Risk**: PostgreSQL free tier (Neon 10 GB, Supabase 500 MB) insufficient or slow queries
- **Impact**: Slow page loads, timeouts, poor UX
- **Mitigation**:
  - Proper database indexing on foreign keys, status, user_id, created_at
  - Implement caching layer (Redis/Upstash) for frequently accessed data
  - Monitor database size weekly; 10 GB sufficient for ~50,000 trips
  - Optimize queries: use EXPLAIN ANALYZE, avoid N+1 queries
- **Contingency**: Upgrade to paid tier ($19/month Neon, $25/month Supabase) or migrate to Railway

**TR3: Third-Party Service Failures (Probability: Medium, Impact: Medium)**
- **Risk**: Auth0, Resend, Mapbox, or Vercel experience outages
- **Impact**: Users can't log in, emails not sent, maps don't load, app unavailable
- **Mitigation**:
  - Choose reliable providers with ≥ 99.9% uptime SLAs
  - Graceful degradation: if email API fails, queue jobs and retry (BullMQ)
  - Status page monitoring for dependencies (track on status.auth0.com, etc.)
  - Communicate transparently with users during outages (status banner in app)
- **Contingency**:
  - Email: Switch to SendGrid or Amazon SES (1-day integration)
  - Auth: Migrate to Supabase Auth or NextAuth.js (3-5 days)
  - Maps: Switch to Leaflet + OSM (2-3 days)

**TR4: Offline Mode Complexity (Probability: High, Impact: Low)**
- **Risk**: Offline map caching and sync logic buggy or unreliable
- **Impact**: Users frustrated by broken offline mode, but core features still work online
- **Mitigation**:
  - Simplify MVP offline mode: limited to map tiles only, not full trip editing
  - Thorough testing in airplane mode, slow 3G, intermittent connections
  - Clear user communication: "Offline mode is beta, use at your own risk"
- **Contingency**: Cut offline mode from MVP, move to Phase 2 (save 4 days of dev time)

**TR5: Mobile Browser Compatibility Issues (Probability: Medium, Impact: Medium)**
- **Risk**: PWA or map features don't work on older iOS/Android versions
- **Impact**: Users on older devices can't use app
- **Mitigation**:
  - Target modern browsers only (iOS 14+, Android 10+) - covers 90%+ users
  - Progressive enhancement: core features work without advanced APIs
  - Test on real devices (borrow/buy used iPhone 12, Samsung Galaxy S21)
  - Polyfills for essential APIs (Intersection Observer, ResizeObserver)
- **Contingency**: Provide fallback experience for old browsers (simplified UI, no offline mode)

### Product Risks

**PR1: Low User Adoption (Probability: Medium, Impact: High)**
- **Risk**: After launch, < 20 users sign up; no traction
- **Impact**: MVP fails to validate product-market fit, demotivating for solo dev
- **Mitigation**:
  - Pre-launch marketing: build email list (50+ interested users)
  - Partner with local outdoor clubs (Yellowknife Hiking Club, Whitehorse Ski Club)
  - Leverage social proof: testimonials from beta users
  - Content marketing: blog posts on northern safety, trip planning guides (SEO)
  - Paid ads on Facebook/Instagram targeting northern outdoor enthusiasts ($50-100 budget)
- **Contingency**: Pivot to B2B focus (municipalities only) if B2C adoption low

**PR2: Feature Expectations Mismatch (Probability: Medium, Impact: Medium)**
- **Risk**: Users expect features not in MVP (real-time tracking, weather, social features)
- **Impact**: Poor reviews, "incomplete app" perception, churn
- **Mitigation**:
  - Clear messaging: "MVP - More features coming soon!"
  - Public roadmap: show Phase 2/3 features with timelines
  - Collect feature requests: in-app feedback form, prioritize based on demand
  - Manage expectations: homepage clearly states current features
- **Contingency**: Fast-follow releases (ship Phase 2 features in 4-6 weeks if high demand)

**PR3: Community Tier Pricing Rejection (Probability: Medium, Impact: Medium)**
- **Risk**: Municipalities unwilling to pay for Community features
- **Impact**: No B2B revenue stream, reliant on individual users only
- **Mitigation**:
  - Validate pricing early: include in inquiry form ("Would you pay $500-2000/year?")
  - Flexible pricing: offer per-user model ($2/resident/year) or flat fee ($1000/year)
  - Demonstrate ROI: case study showing SAR cost savings (1 prevented incident = $10k+ saved)
  - Offer free pilot: first 3 months free for 1-2 communities to prove value
- **Contingency**:
  - Freemium model: basic community dashboard free, charge for premium features (analytics, alerts)
  - Alternative revenue: premium individual tier ($5/month for real-time tracking, weather)

**PR4: Indigenous Cultural Concerns (Probability: Low, Impact: High)**
- **Risk**: Indigenous communities object to use of cultural elements without consultation
- **Impact**: Reputational damage, forced redesign, potential legal issues
- **Mitigation**:
  - Conservative MVP approach: use respectful, generic northern imagery (landscapes, wildlife)
  - Prominent land acknowledgment on homepage
  - Proactive outreach in Phase 1 planning for Phase 2 features
  - Revenue sharing commitment: publicly state intent to share Community revenue with indigenous partners
  - Advisory board: recruit indigenous advisor for Phase 2 features
- **Contingency**: Remove any problematic cultural elements immediately if concerns raised

**PR5: Competitor Launch (Probability: Low, Impact: Medium)**
- **Risk**: Established player (AllTrails, Garmin, Parks Canada) launches similar features
- **Impact**: Harder to differentiate, potential loss of users to bigger brand
- **Mitigation**:
  - Speed to market: MVP in 1 month, iterate faster than large companies
  - Local focus: deep integration with northern communities (hard for outsiders to replicate)
  - Community relationships: build trust with municipalities, indigenous groups
  - Niche positioning: "Built for northern Canada, by someone who cares about the North"
- **Contingency**: Pivot to white-label solution (sell tech to competitor or partner)

### Operational Risks

**OR1: Solo Developer Burnout (Probability: High, Impact: Critical)**
- **Risk**: Unsustainable pace leads to exhaustion, illness, or project abandonment
- **Impact**: MVP delayed or incomplete, poor code quality, health issues
- **Mitigation**:
  - Realistic scope: willing to cut features (offline mode, community page) if needed
  - Sustainable hours: 6-8 hours/day, not 12-16; take weekends off
  - Leverage Claude Code: automate boilerplate, focus energy on creative/strategic work
  - Health habits: exercise, sleep 7-8 hours, eat well (non-negotiable)
  - Celebrate milestones: reward self after each week completed
- **Contingency**: Extend timeline to 6 weeks if needed (better late than burnout)

**OR2: Unforeseen Life Events (Probability: Medium, Impact: High)**
- **Risk**: Illness, family emergency, or other life event disrupts development
- **Impact**: Project delayed or paused indefinitely
- **Mitigation**:
  - Build buffer: treat 4-week timeline as aggressive; 5-6 weeks is acceptable
  - Modular development: each feature standalone, can pause at any week and have partial product
  - Document everything: detailed README, code comments, so project can be resumed after break
- **Contingency**: Pause project if needed; health and family always first priority

**OR3: Budget Overruns (Probability: Low, Impact: Low)**
- **Risk**: Free tiers exhausted, forced to pay for services earlier than expected
- **Impact**: Unexpected costs ($50-200/month) may not be sustainable
- **Mitigation**:
  - Monitor all service usage closely (set up billing alerts)
  - Free tier limits sufficient for MVP scale (100-500 users)
  - Budget $50/month for Phase 2 scaling (Mapbox, database, email)
- **Contingency**: Fundraise via crowdfunding (Kickstarter) or apply for startup grants (Indigenous Business Canada, Northern economic development programs)

**OR4: Data Loss or Security Breach (Probability: Very Low, Impact: Critical)**
- **Risk**: Database corruption, accidental deletion, or hacker attack
- **Impact**: Loss of user data, reputational damage, legal liability
- **Mitigation**:
  - Automated daily backups (Neon/Supabase built-in, 7-day retention)
  - Security best practices: OWASP Top 10, regular dependency updates
  - Use Auth0 (reduces auth-related attack surface)
  - Incident response plan: if breach, immediately notify users, reset passwords, investigate
- **Contingency**: Restore from backup (max 24 hours data loss); transparent communication to users

**OR5: Legal or Compliance Issues (Probability: Very Low, Impact: High)**
- **Risk**: PIPEDA (Canadian privacy law) violations, liability if user injured and blames app
- **Impact**: Fines, lawsuits, forced shutdown
- **Mitigation**:
  - Privacy policy compliant with PIPEDA: clear data collection disclosure, user consent
  - Terms of Service disclaimer: app is planning tool, not substitute for proper safety measures
  - No medical/legal advice: app doesn't claim to guarantee safety
  - Consult lawyer for T&C review (if budget allows, $500-1000 one-time cost)
- **Contingency**: Incorporate as business (limited liability) before Phase 2 revenue

---

## Appendix: Assumptions & Open Questions

### Assumptions Made for This PRD

1. **Target Users**: Primarily individuals (not organizations) for MVP, ages 25-55, moderate tech proficiency
2. **Platform**: Progressive Web App (works on all devices, no native app needed for MVP)
3. **Primary Activities**: Hiking, camping, fishing, hunting, snowmobiling, kayaking
4. **Geographic Focus**: Yukon, Northwest Territories, Nunavut (may expand to northern provinces in Phase 2)
5. **Offline Priority**: Important but can be basic in MVP (limited map caching, not full offline trip creation)
6. **Pricing**: Free for individuals indefinitely (ad-free); revenue from Community tier only
7. **Technology Preferences**: Modern, popular stack (React, Next.js, PostgreSQL) for developer velocity and Claude Code compatibility
8. **Timeline Flexibility**: 4 weeks aggressive, 5-6 weeks acceptable if needed to maintain quality
9. **Success Definition**: MVP validated if 50+ users and 2+ community inquiries in first month

### Open Questions for Future Refinement

1. **Monetization**: Should there be a premium individual tier ($5-10/month) for advanced features, or keep 100% free?
2. **Mobile App Necessity**: After MVP, will PWA suffice or is native app (React Native/Flutter) essential for real-time GPS tracking?
3. **Indigenous Partnerships**: Which communities should we approach first for cultural consultation? What's appropriate compensation/revenue sharing model?
4. **SAR Integration**: Should we proactively integrate with RCMP, Parks Canada, or local SAR organizations, or wait for them to discover app organically?
5. **Weather API**: Environment Canada (free but limited) or OpenWeatherMap (paid, $40/month for 1000 calls/day)?
6. **Liability Insurance**: Do we need insurance if users rely on app for safety and something goes wrong?
7. **Internationalization**: Should app support French (official language in Canada) in MVP or Phase 2?
8. **Offline Map Limits**: What's acceptable download size? 50 MB, 200 MB, or user-configurable?
9. **Social Features Priority**: Are social features (discovery, comments, photos) essential for Phase 2, or lower priority than safety features (real-time tracking, weather)?
10. **Community Tier Pricing**: Flat fee, per-user, or tiered based on population size? Need market research.

---

## Document Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | October 30, 2025 | Product Manager | Initial PRD creation |

---

## Next Steps

1. **Approval**: Review and approve this PRD (or request revisions)
2. **Environment Setup**: Initialize development environment (Day 1)
3. **Kickoff**: Begin Week 1 development (Days 1-7)
4. **Weekly Reviews**: End of each week, review progress against roadmap
5. **Stakeholder Updates**: Share progress with potential beta users, community contacts weekly
6. **Launch Preparation**: Week 4, finalize deployment and marketing materials
7. **Post-Launch**: Collect feedback, prioritize Phase 2 features based on user demand

---

**End of Product Requirements Document**
