# ArcticGuardian - Priority Feature Specifications

## Document Information
- **Date**: October 30, 2025
- **Status**: Detailed Planning / Ready for Implementation
- **Purpose**: Comprehensive specifications for 4 high-priority features for Phase 2-3 development
- **Target Phase**: Phase 2 (Months 2-4 post-MVP)

---

## Table of Contents
1. [Emergency Supply Calculator](#1-emergency-supply-calculator)
2. [Trip Buddy Matching System](#2-trip-buddy-matching-system)
3. [Seasonal Route Planning & Analytics](#3-seasonal-route-planning--analytics)
4. [Emergency Trip Report Export](#4-emergency-trip-report-export)

---

## 1. Emergency Supply Calculator

### 1.1 Feature Overview

**Problem Statement**:
Travelers in northern territories frequently underestimate the supplies needed for safe backcountry trips. SAR teams report that missing persons are often found inadequately prepared with insufficient food, fuel, water, or emergency gear. The harsh northern environment means that minor under-preparation can quickly become life-threatening.

**Solution**:
An intelligent supply calculator that generates customized packing lists based on trip parameters, environmental conditions, and activity type. The system uses northern-specific calculations that account for extreme cold, extended daylight variations, and remote isolation factors.

**User Value**:
- Prevents dangerous under-preparation
- Educational for first-time northern visitors
- Peace of mind for families of travelers
- Reduces SAR incidents caused by supply shortages
- Provides checklist accountability with completion tracking

---

### 1.2 User Stories

**Primary User Story**:
> As a trip planner preparing for a 5-day winter fishing trip, I want to receive a customized packing list that accounts for extreme cold and remote location, so that I don't overlook critical survival supplies.

**Secondary User Stories**:
- As a first-time northern visitor, I want to understand why certain items are necessary, so that I can make informed packing decisions
- As an emergency contact, I want to see the trip readiness score, so that I can encourage my loved one to be better prepared before departing
- As a community safety officer, I want to see aggregate preparedness data, so that I can identify common gaps in community safety education

---

### 1.3 Functional Requirements

#### 1.3.1 Core Calculation Engine

**Input Parameters**:
1. **Trip Details** (from existing trip data):
   - Duration (hours/days)
   - Party size (number of people)
   - Activity type (hiking, camping, fishing, hunting, snowmobiling, etc.)
   - Season/dates (affects daylight, temperature)
   - Starting point and destination (remoteness calculation)

2. **Environmental Factors**:
   - Expected temperature range (pulled from weather API + historical data)
   - Season (affects bug season, ice conditions, daylight)
   - Distance from nearest road/community (remoteness factor)
   - Terrain type (tundra, forest, water routes, mountainous)

3. **User Preferences** (optional customization):
   - Dietary restrictions (vegetarian, allergies, caloric needs)
   - Cooking method (stove, campfire, no-cook)
   - Shelter type (tent, bivy, ice fishing shack, cabin)
   - Experience level (beginner, intermediate, expert - affects safety margin)

**Output - Customized Packing List**:

Categories generated:
1. **Food & Water**
   - Total calories needed (activity-adjusted + cold weather adjustment)
   - Recommended food types (high-calorie, non-freezing options for winter)
   - Water volume or purification method
   - Emergency food reserve (20% buffer for delays)

2. **Fuel**
   - Cooking fuel (stove type-specific)
   - Heating fuel (if winter camping)
   - Vehicle fuel + reserve (if applicable)
   - Fire starting materials

3. **Shelter & Warmth**
   - Shelter type recommendations
   - Sleeping bags (temperature rating specific)
   - Sleeping pads (R-value recommendations)
   - Emergency shelter (bivy, space blanket)
   - Clothing layers (activity and temperature specific)

4. **Navigation & Communication**
   - Map and compass
   - GPS device (recommendations)
   - Satellite communication device (recommended for high remoteness)
   - Emergency signaling (whistle, mirror, flare)
   - Backup navigation method

5. **First Aid & Medical**
   - Basic first aid kit components
   - Cold injury treatment (frostbite, hypothermia)
   - Personal medications
   - Wilderness-specific additions (splints, wound care, pain management)

6. **Safety & Emergency**
   - Emergency shelter materials
   - Fire starting (multiple methods)
   - Repair kit (activity-specific: duct tape, cable ties, sewing kit)
   - Survival tools (knife, multi-tool, saw/axe for winter)
   - Emergency food/warmth (space blanket, heat packs, emergency rations)

7. **Activity-Specific Gear**
   - Hunting: game bags, knives, tags, blaze orange
   - Fishing: tackle, extra line, fish processing tools
   - Winter: ice picks, ice auger, sled, snowshoes/skis
   - Water: PFD, dry bags, paddle float, bilge pump

**Calculation Formulas**:

**Food/Calories**:
```
Base calories per person per day:
- Light activity (casual hiking): 2,500 cal
- Moderate activity (backpacking): 3,500 cal
- High activity (winter snowshoeing, heavy loads): 4,500 cal
- Extreme activity (winter mountaineering, hauling sleds): 5,500 cal

Cold weather adjustment:
- Temps 0°C to -10°C: +10% calories
- Temps -10°C to -25°C: +20% calories
- Temps -25°C to -40°C: +30% calories
- Temps below -40°C: +40% calories

Safety buffer: +20% for unexpected delays

Total = (Base calories × cold adjustment × days × party size) × 1.20
```

**Water**:
```
Base water per person per day:
- Moderate activity: 3 liters
- High activity: 4 liters
- Extreme activity/heat: 5 liters

If snow melting (winter): Add 30% fuel for melting snow
If purification needed: Include purification method (tablets, filter, boiling)
```

**Fuel (Cooking/Heating)**:
```
Cooking fuel:
- Canister stove: 100g per person per day (summer)
- Canister stove: 150g per person per day (winter, includes snow melting)
- Liquid fuel stove: 75ml per person per day

Heating fuel (winter camping):
- Portable heater: Calculate based on manufacturer specs × hours of use × safety margin

Safety buffer: +30% fuel reserve
```

**Remoteness Factor**:
```
Distance to nearest road/community:
- < 10 km: Low remoteness (1.0x multiplier)
- 10-50 km: Moderate remoteness (1.15x multiplier on safety items)
- 50-100 km: High remoteness (1.3x multiplier)
- > 100 km: Extreme remoteness (1.5x multiplier + mandatory sat communication)

Multiplier affects: emergency food, first aid supplies, repair kit comprehensiveness
```

---

#### 1.3.2 Packing List Interface & Interaction

**Display Format**:

1. **Summary Card** (top of page):
   - Readiness Score: 0-100% (percentage of critical items checked off)
   - Color-coded: Red (0-60%), Yellow (61-89%), Green (90-100%)
   - "You're 75% ready for your trip" with progress bar
   - Estimated total pack weight (if items have weight data)
   - Last updated timestamp

2. **Categorized Checklist**:
   - Collapsible sections by category
   - Each item with:
     - Checkbox (to mark as packed)
     - Item name
     - Recommended quantity (e.g., "3 liters water per person per day")
     - Priority indicator: Critical (red star), Recommended (yellow star), Optional (grey star)
     - "Why?" info tooltip (educational explanation)
     - "Shop" link (affiliate links to retailers - revenue opportunity)

3. **Smart Features**:
   - "Mark category as complete" quick action
   - "I already own this" vs "I need to buy/rent this" toggle
   - Notes field for each item (e.g., "Borrowed from John")
   - Photo upload: Take picture of packed gear pile
   - Share packing list with trip companions (each person can manage their own)

**Educational Tooltips** (Examples):

- **Emergency Space Blanket**: "In northern winters, an emergency shelter can be the difference between survival and hypothermia. Space blankets reflect 90% of body heat and weigh only 50g. Critical for unexpected overnight stays."

- **Satellite Communication Device**: "At 120km from the nearest road, cell service is non-existent. A satellite device (inReach, SPOT, PLB) is your only way to call for help. SAR teams recommend this for trips over 50km from civilization."

- **Extra Food (20% Reserve)**: "Weather can change rapidly in the north. A 3-day trip can become 5 days if storms prevent travel. This reserve ensures you have food if delayed."

---

#### 1.3.3 Readiness Scoring System

**Calculation Method**:
```
Total Readiness Score = Weighted average of category completion

Category Weights:
- Food & Water: 25% (critical for survival)
- Shelter & Warmth: 20% (critical in northern climate)
- Safety & Emergency: 20% (critical for self-rescue)
- Navigation & Communication: 15% (critical for remote areas)
- First Aid: 10%
- Fuel: 5%
- Activity-Specific: 5%

Within each category:
- Critical items: 3 points each
- Recommended items: 2 points each
- Optional items: 1 point each

Category Score = (Checked items points / Total possible points) × 100
Overall Score = Σ(Category Score × Category Weight)
```

**Score Interpretation & Messaging**:
- **90-100% (Excellent)**: "You're well prepared! Safe travels."
- **75-89% (Good)**: "Good preparation. Review missing critical items before departing."
- **60-74% (Fair)**: "You're missing important items. Please review the checklist carefully."
- **0-59% (Poor)**: "Warning: You're not adequately prepared. Missing critical safety items could endanger your trip."

**Email Reminders**:
- 48 hours before trip: "Your trip readiness is 65%. Review your packing list: [link]"
- If score < 70% at 24 hours before trip: Send to emergency contacts too: "John's trip readiness is only 60%. You may want to check in with him before departure."

---

#### 1.3.4 Customization & Templates

**Pre-Built Templates** (starting points):
1. "Summer Day Hike (< 8 hours)"
2. "Overnight Backcountry Camping"
3. "Winter Ice Fishing Trip (3-5 days)"
4. "Multi-Day Canoe Trip"
5. "Hunting Expedition (5-7 days)"
6. "Snowmobile Adventure"
7. "Mountaineering/Technical Climbing"

**User Customization**:
- Add custom items to packing list
- Remove items (with warning if critical: "Are you sure? This is considered critical for your trip parameters.")
- Adjust quantities
- Save custom templates: "My Standard Winter Fishing Setup"
- Share templates with community (opt-in)

**Community Templates** (Phase 3):
- Users can publish templates with descriptions
- Upvote/downvote system
- Filter by activity, season, duration
- "Based on 15 successful winter trips by experienced users"

---

### 1.4 User Experience & UI Design

#### 1.4.1 User Flow

1. **Entry Points**:
   - During trip creation: "Generate packing list" button on trip form
   - From trip details page: "Packing List" tab
   - Dashboard: "Create Packing List" for existing trips

2. **Wizard Flow** (if accessed separately from trip):
   ```
   Step 1: Basic trip info (if not attached to existing trip)
   ↓
   Step 2: Customize preferences (dietary, experience level, shelter type)
   ↓
   Step 3: Review generated list
   ↓
   Step 4: Customize (add/remove items)
   ↓
   Step 5: Track packing progress
   ```

3. **Checklist Interaction**:
   - Check off items as packed
   - Real-time readiness score update
   - Visual progress indicators
   - Photo verification option

4. **Pre-Departure Workflow**:
   - 1 week before: Generate list
   - 3 days before: Order/acquire missing items
   - 1 day before: Final check, photo verification
   - Day of: One-click "Print Checklist" for reference

#### 1.4.2 Mobile Experience

**Critical for Pre-Trip Packing**:
- Mobile-responsive checklist
- Large touch targets for checkboxes
- Offline access (PWA) for checking items in garage/car
- Camera integration for photo verification
- Voice input: "Hey Google, mark tent as packed in ArcticGuardian"

---

### 1.5 Technical Implementation

#### 1.5.1 Database Schema

**New Tables**:

```sql
-- Packing list templates (system and user-created)
CREATE TABLE packing_list_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(200) NOT NULL,
  description TEXT,
  activity_type VARCHAR(50),
  season VARCHAR(20), -- summer, winter, shoulder
  duration_days_min INT,
  duration_days_max INT,
  is_system_template BOOLEAN DEFAULT false,
  created_by_user_id UUID REFERENCES users(id),
  is_public BOOLEAN DEFAULT false,
  upvotes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Items within templates
CREATE TABLE template_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES packing_list_templates(id) ON DELETE CASCADE,
  category VARCHAR(50) NOT NULL, -- food_water, shelter, safety, etc.
  item_name VARCHAR(200) NOT NULL,
  quantity_formula VARCHAR(500), -- e.g., "3 * party_size * days"
  unit VARCHAR(50), -- liters, kg, items, etc.
  priority VARCHAR(20) NOT NULL, -- critical, recommended, optional
  educational_text TEXT, -- tooltip explanation
  weight_grams INT, -- for total pack weight calculation
  affiliate_link VARCHAR(500), -- revenue opportunity
  created_at TIMESTAMP DEFAULT NOW()
);

-- User's specific packing list for a trip
CREATE TABLE trip_packing_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id UUID REFERENCES trips(id) ON DELETE CASCADE,
  generated_at TIMESTAMP DEFAULT NOW(),
  last_updated TIMESTAMP DEFAULT NOW(),
  readiness_score DECIMAL(5,2), -- 0.00 to 100.00
  total_weight_grams INT,
  photo_verification_url VARCHAR(500), -- S3 URL for gear photo
  UNIQUE(trip_id) -- one packing list per trip
);

-- Individual items in user's packing list
CREATE TABLE packing_list_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  packing_list_id UUID REFERENCES trip_packing_lists(id) ON DELETE CASCADE,
  category VARCHAR(50) NOT NULL,
  item_name VARCHAR(200) NOT NULL,
  quantity DECIMAL(10,2) NOT NULL,
  unit VARCHAR(50),
  priority VARCHAR(20) NOT NULL,
  is_checked BOOLEAN DEFAULT false,
  checked_at TIMESTAMP,
  notes TEXT, -- user notes
  educational_text TEXT,
  affiliate_link VARCHAR(500),
  weight_grams INT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Track when users check off items (for analytics)
CREATE TABLE packing_checklist_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  trip_id UUID REFERENCES trips(id),
  item_id UUID REFERENCES packing_list_items(id),
  event_type VARCHAR(20), -- checked, unchecked, added, removed
  occurred_at TIMESTAMP DEFAULT NOW()
);
```

**Indexes**:
```sql
CREATE INDEX idx_trip_packing_lists_trip_id ON trip_packing_lists(trip_id);
CREATE INDEX idx_packing_list_items_packing_list_id ON packing_list_items(packing_list_id);
CREATE INDEX idx_template_items_template_id ON template_items(template_id);
CREATE INDEX idx_packing_list_templates_activity_season ON packing_list_templates(activity_type, season);
```

#### 1.5.2 API Endpoints

**Generate Packing List**:
```
POST /api/trips/:tripId/packing-list/generate
Body: {
  preferences: {
    dietary_restrictions?: string[],
    cooking_method?: string,
    shelter_type?: string,
    experience_level?: string
  }
}
Response: {
  packing_list_id: string,
  readiness_score: number,
  categories: Array<{
    name: string,
    items: Array<{
      id: string,
      name: string,
      quantity: number,
      unit: string,
      priority: string,
      educational_text: string,
      is_checked: boolean
    }>
  }>
}
```

**Update Item Status**:
```
PATCH /api/packing-lists/:listId/items/:itemId
Body: {
  is_checked: boolean,
  notes?: string
}
Response: {
  updated_item: {...},
  new_readiness_score: number
}
```

**Add Custom Item**:
```
POST /api/packing-lists/:listId/items
Body: {
  category: string,
  item_name: string,
  quantity: number,
  unit: string,
  priority?: string,
  notes?: string
}
```

**Upload Photo Verification**:
```
POST /api/packing-lists/:listId/photo
Body: multipart/form-data with image file
Response: {
  photo_url: string,
  uploaded_at: timestamp
}
```

**Get Templates**:
```
GET /api/packing-list-templates
Query params: ?activity_type=fishing&season=winter&duration_days=3
Response: {
  templates: Array<{
    id: string,
    name: string,
    description: string,
    upvotes: number,
    is_system_template: boolean
  }>
}
```

#### 1.5.3 Calculation Service

**Modular Calculation Engine**:

```typescript
// services/packingListCalculator.ts

interface TripParameters {
  duration_days: number;
  party_size: number;
  activity_type: string;
  start_date: Date;
  end_date: Date;
  remoteness_km: number; // distance from nearest road/community
  terrain_type: string;
}

interface EnvironmentalFactors {
  avg_temp_celsius: number;
  min_temp_celsius: number;
  season: 'summer' | 'winter' | 'shoulder';
  daylight_hours: number;
}

interface UserPreferences {
  dietary_restrictions?: string[];
  cooking_method?: 'stove' | 'campfire' | 'no-cook';
  shelter_type?: 'tent' | 'bivy' | 'cabin' | 'ice_shack';
  experience_level?: 'beginner' | 'intermediate' | 'expert';
}

class PackingListCalculator {

  calculateCalories(
    trip: TripParameters,
    env: EnvironmentalFactors,
    prefs: UserPreferences
  ): number {
    // Base calories by activity
    const activityCalories = {
      'hiking': 2500,
      'backpacking': 3500,
      'fishing': 2800,
      'hunting': 3200,
      'snowmobiling': 3000,
      'mountaineering': 4500,
      'canoeing': 3300
    };

    let baseCalories = activityCalories[trip.activity_type] || 3000;

    // Cold weather adjustment
    let coldAdjustment = 1.0;
    if (env.avg_temp_celsius < 0 && env.avg_temp_celsius >= -10) coldAdjustment = 1.10;
    else if (env.avg_temp_celsius < -10 && env.avg_temp_celsius >= -25) coldAdjustment = 1.20;
    else if (env.avg_temp_celsius < -25 && env.avg_temp_celsius >= -40) coldAdjustment = 1.30;
    else if (env.avg_temp_celsius < -40) coldAdjustment = 1.40;

    // Safety buffer
    const safetyBuffer = 1.20;

    // Total calories
    const totalCalories = baseCalories * coldAdjustment * trip.duration_days * trip.party_size * safetyBuffer;

    return Math.ceil(totalCalories);
  }

  calculateWater(trip: TripParameters, env: EnvironmentalFactors): {
    liters_per_day: number,
    purification_needed: boolean
  } {
    // Activity-based water needs
    const activityWater = {
      'hiking': 3,
      'backpacking': 4,
      'fishing': 3,
      'hunting': 3.5,
      'snowmobiling': 2.5,
      'mountaineering': 5,
      'canoeing': 3.5
    };

    let litersPerDay = activityWater[trip.activity_type] || 3;

    // Summer heat adjustment
    if (env.avg_temp_celsius > 20) litersPerDay += 1;

    return {
      liters_per_day: litersPerDay,
      purification_needed: trip.terrain_type !== 'urban' && env.season !== 'winter'
    };
  }

  calculateRemoteness(distanceKm: number): {
    factor: number,
    requires_sat_communication: boolean,
    emergency_reserve_multiplier: number
  } {
    if (distanceKm < 10) {
      return { factor: 1.0, requires_sat_communication: false, emergency_reserve_multiplier: 1.0 };
    } else if (distanceKm < 50) {
      return { factor: 1.15, requires_sat_communication: false, emergency_reserve_multiplier: 1.15 };
    } else if (distanceKm < 100) {
      return { factor: 1.3, requires_sat_communication: true, emergency_reserve_multiplier: 1.3 };
    } else {
      return { factor: 1.5, requires_sat_communication: true, emergency_reserve_multiplier: 1.5 };
    }
  }

  async generatePackingList(
    trip: TripParameters,
    env: EnvironmentalFactors,
    prefs: UserPreferences
  ): Promise<PackingList> {
    // Calculate quantities
    const calories = this.calculateCalories(trip, env, prefs);
    const water = this.calculateWater(trip, env);
    const remoteness = this.calculateRemoteness(trip.remoteness_km);

    // Load appropriate template
    const template = await this.selectTemplate(trip, env);

    // Populate items with calculated quantities
    const packingList = this.populateTemplate(template, {
      calories,
      water,
      remoteness,
      trip,
      env,
      prefs
    });

    return packingList;
  }
}
```

#### 1.5.4 Integration with Weather API

**Weather Data Needed**:
- Average temperature for trip dates
- Min/max temperature range
- Precipitation forecast
- Severe weather alerts

**API Options**:
1. **Environment Canada API** (free, Canadian data)
2. **OpenWeatherMap API** (free tier: 1,000 calls/day)
3. **Weatherstack API** (free tier: 1,000 calls/month)

**Implementation**:
```typescript
// Fetch weather when generating packing list
const weatherData = await weatherService.getForecast(
  trip.starting_point.lat,
  trip.starting_point.lng,
  trip.start_date,
  trip.end_date
);

const environmentalFactors: EnvironmentalFactors = {
  avg_temp_celsius: weatherData.avg_temp,
  min_temp_celsius: weatherData.min_temp,
  season: determineSeason(trip.start_date),
  daylight_hours: calculateDaylight(trip.starting_point.lat, trip.start_date)
};
```

---

### 1.6 Success Metrics

**User Engagement**:
- % of trips with generated packing lists (target: 60%+)
- Average readiness score 24 hours before trip (target: 80%+)
- % of users who check off items (target: 70%+)
- Time spent on packing list page (indicator of value)

**Safety Impact**:
- Survey users post-trip: "Did the packing list help you prepare?"
- Track correlation between readiness score and trip completion success
- Partner with SAR teams: "Are missing persons better prepared?"

**Revenue**:
- Affiliate click-through rate (target: 5%+)
- Affiliate conversion rate (target: 2%+)
- Revenue per trip with packing list (target: $2-5)

---

### 1.7 Future Enhancements

**Phase 3 Ideas**:
- **Pack Weight Optimizer**: Suggest lighter alternatives if total weight is too high
- **Shared Packing for Groups**: Coordinate who brings what to avoid duplication
- **Rental Integration**: Direct booking of gear from local outfitters
- **Voice Assistant**: "Alexa, add water purification tablets to my ArcticGuardian packing list"
- **Smart Suggestions**: ML learns from successful trips to refine recommendations
- **Gear Reviews**: Community reviews of specific gear items
- **Seasonal Sales Alerts**: "Your winter sleeping bag is on sale at MEC - 30% off"

---

## 2. Trip Buddy Matching System

### 2.1 Feature Overview

**Problem Statement**:
Solo travelers face significantly higher risk in backcountry environments. Accidents that would be minor inconveniences with a companion (twisted ankle, equipment failure, vehicle breakdown) become serious emergencies when alone. However, many outdoor enthusiasts lack established networks of trip partners, especially newcomers to northern communities or tourists.

**Solution**:
A safety-focused companion matching system that connects travelers with compatible trip partners based on trip plans, experience level, interests, and mutual safety verification. Unlike social/dating apps, this system prioritizes safety, credibility, and trip compatibility.

**User Value**:
- Reduces solo travel risk through companionship
- Builds outdoor community, especially for newcomers
- Creates opportunities for skill sharing (experienced + beginner pairings)
- Particularly valuable for women seeking female trip partners
- Enables trips that individuals wouldn't attempt solo

---

### 2.2 User Stories

**Primary User Story**:
> As a solo female hiker new to Yellowknife, I want to find a compatible female trip partner for weekend hikes, so that I can explore safely without going alone.

**Secondary User Stories**:
- As an experienced hunter, I want to mentor a beginner in exchange for companionship, so that I can share knowledge while having a safety partner
- As a tourist visiting Yukon, I want to find a local guide/companion for a multi-day canoe trip, so that I can experience the wilderness safely with someone who knows the area
- As a parent, I want to verify my adult child's trip partner is a real, credible person, so that I can have peace of mind about who they're traveling with
- As an outdoor enthusiast with a disability, I want to find an adaptive recreation partner who understands accessibility needs, so that I can participate in outdoor activities safely

---

### 2.3 Functional Requirements

#### 2.3.1 User Profile for Matching

**Extended Profile Fields** (beyond basic account):

1. **Outdoor Experience**:
   - Experience level per activity type:
     - Hiking: Beginner / Intermediate / Advanced / Expert
     - Camping: Beginner / Intermediate / Advanced / Expert
     - Fishing: Beginner / Intermediate / Advanced / Expert
     - Hunting: Beginner / Intermediate / Advanced / Expert
     - Canoeing/Kayaking: Beginner / Intermediate / Advanced / Expert
     - Winter activities: Beginner / Intermediate / Advanced / Expert
     - Mountaineering/Technical: Beginner / Intermediate / Advanced / Expert
   - Years of northern experience
   - Wilderness First Aid certification? (Yes/No, expiry date)
   - Wilderness navigation skills (map/compass, GPS)
   - Completed trips count (from ArcticGuardian history)

2. **Preferences & Interests**:
   - Preferred trip types (day trips, overnight, multi-day, extended expeditions)
   - Pace preference (leisurely, moderate, athletic, extreme)
   - Interest in photography, wildlife viewing, fishing, hunting, etc.
   - Preferred group size (solo pair, small group 3-5, larger groups)
   - Camping style (minimalist, comfortable, luxury)
   - Dietary preferences (for meal planning)

3. **Availability**:
   - General availability (weekends, weekdays, flexible)
   - Calendar integration (show available dates)
   - Lead time preference (spontaneous, plan weeks ahead)

4. **Safety & Compatibility**:
   - Gender preference for partners (any, prefer female, prefer male, no preference)
   - Age range preference (optional, for compatibility)
   - Language(s) spoken
   - Accessibility needs or accommodations
   - Smoking/alcohol preferences (important for multi-day trips)
   - Emergency contact visible to matched partners

5. **Verification & Trust**:
   - Profile photo (required)
   - Email verified (required)
   - Phone verified (required)
   - Government ID verified (optional, increases trust score)
   - References from past trip partners (reviews)
   - Background check (optional, premium feature)

**Profile Completeness Score**:
- Basic info: 20%
- Experience details: 20%
- Preferences: 20%
- Verification (email/phone): 20%
- Profile photo: 10%
- Past trip reviews: 10%

Display: "Your profile is 70% complete. Complete your profile to improve match quality."

---

#### 2.3.2 Trip Posting & Matching

**Create Trip Buddy Request**:

Users can create two types of requests:

**Type A: Post Your Trip (Looking for Companion)**
- Link to existing planned trip
- Open slots: "I'm planning this trip and have room for 1-2 companions"
- Required experience level for companions
- What you're offering: "I have vehicle/gear/local knowledge"
- What you're seeking: "Looking for someone to share costs/driving/companionship"
- Deadline for joining (e.g., 2 weeks before trip)

**Type B: General Buddy Seeking (Ongoing Partnership)**
- Not tied to specific trip
- "Looking for regular hiking partner in Yellowknife area"
- Frequency: Weekly / Bi-weekly / Monthly / Occasional
- Types of activities interested in
- Preferences and expectations

**Matching Algorithm**:

```typescript
interface MatchScore {
  user_id: string;
  compatibility_score: number; // 0-100
  breakdown: {
    experience_match: number;
    interest_alignment: number;
    availability_overlap: number;
    location_proximity: number;
    trust_score: number;
    preference_compatibility: number;
  };
  match_highlights: string[]; // e.g., "Both interested in wildlife photography"
  potential_concerns: string[]; // e.g., "Experience level mismatch"
}

function calculateMatchScore(
  requestingUser: UserProfile,
  potentialMatch: UserProfile,
  tripDetails?: Trip
): MatchScore {

  // 1. Experience match (25%)
  // If requester is beginner, prefer intermediate/advanced (mentorship)
  // If requester is advanced, accept similar or beginner (flexibility)
  const experienceMatch = calculateExperienceCompatibility(
    requestingUser.experience,
    potentialMatch.experience,
    tripDetails?.activity_type
  );

  // 2. Interest alignment (20%)
  // Count overlapping interests, preferred activities
  const interestAlignment = calculateInterestOverlap(
    requestingUser.interests,
    potentialMatch.interests
  );

  // 3. Availability overlap (15%)
  // Do their available dates/times overlap?
  const availabilityOverlap = calculateAvailabilityMatch(
    requestingUser.availability,
    potentialMatch.availability
  );

  // 4. Location proximity (10%)
  // Are they in the same community or nearby?
  const locationProximity = calculateLocationScore(
    requestingUser.location,
    potentialMatch.location
  );

  // 5. Trust score (20%)
  // Verification level + past reviews + completed trips
  const trustScore = calculateTrustScore(potentialMatch);

  // 6. Preference compatibility (10%)
  // Gender preference, pace, camping style, etc.
  const preferenceCompatibility = checkPreferenceMatch(
    requestingUser.preferences,
    potentialMatch.preferences
  );

  // Weighted total
  const compatibilityScore =
    experienceMatch * 0.25 +
    interestAlignment * 0.20 +
    availabilityOverlap * 0.15 +
    locationProximity * 0.10 +
    trustScore * 0.20 +
    preferenceCompatibility * 0.10;

  return {
    user_id: potentialMatch.id,
    compatibility_score: Math.round(compatibilityScore * 100),
    breakdown: { ... },
    match_highlights: generateHighlights(...),
    potential_concerns: generateConcerns(...)
  };
}
```

**Match Display**:

Show matches sorted by compatibility score:

```
┌─────────────────────────────────────────────┐
│ Sarah Thompson                    92% Match │
│ ⭐⭐⭐⭐⭐ (12 reviews)                        │
│ Verified: ✓ Email ✓ Phone ✓ ID             │
│                                             │
│ Intermediate Hiker • Yellowknife            │
│ "Love weekend hikes and wildlife photos"    │
│                                             │
│ ✓ Similar experience level                  │
│ ✓ Both interested in photography            │
│ ✓ Both available weekends                   │
│ ✓ Prefers same pace (moderate)              │
│                                             │
│ [View Profile] [Send Message]               │
└─────────────────────────────────────────────┘
```

---

#### 2.3.3 Messaging & Communication

**In-App Messaging System** (before personal contact exchange):

**Why In-App First?**
- Protects user privacy until mutual agreement
- Moderation and safety (flag inappropriate messages)
- Track communication for dispute resolution
- Users can block/report without exposing personal info

**Messaging Features**:
- Direct messages between matched users
- Trip details can be shared within chat
- "Share Trip Plan" button (sends read-only trip link)
- Quick response templates:
  - "I'm interested! Tell me more."
  - "What's the trip difficulty level?"
  - "Can we do a video call to discuss?"
  - "Thanks, but I don't think we're a good match."
- Video call integration (Zoom/Google Meet link generation)
- Message flags: Unread, Starred, Archived

**Safety Features**:
- Report inappropriate messages
- Block users
- Automated filtering of contact info sharing (phone, email) until connection confirmed
- Reminder messages: "Remember to meet in a public place first before any trip"

**Connection Workflow**:
```
1. User finds potential match
   ↓
2. Send introduction message
   ↓
3. Exchange messages (in-app)
   ↓
4. Video call to discuss trip (optional but recommended)
   ↓
5. Both users "Confirm Trip Partner" in app
   ↓
6. Personal contact info exchanged (phone, email)
   ↓
7. Trip plan shared and finalized
   ↓
8. Meet in public before trip departure
```

---

#### 2.3.4 Safety & Verification System

**Trust Score Calculation** (0-100):

```typescript
function calculateTrustScore(user: UserProfile): number {
  let score = 0;

  // Verification (40 points possible)
  if (user.email_verified) score += 10;
  if (user.phone_verified) score += 10;
  if (user.id_verified) score += 15;
  if (user.background_check_passed) score += 5; // optional premium

  // Trip history (30 points possible)
  const completedTrips = user.completed_trips_count;
  if (completedTrips >= 1) score += 5;
  if (completedTrips >= 5) score += 10;
  if (completedTrips >= 10) score += 15;
  // Cap at 30 points
  score += Math.min(completedTrips * 1.5, 30);

  // Reviews (30 points possible)
  const avgReview = user.average_review_rating; // 1-5 stars
  const reviewCount = user.review_count;
  if (reviewCount >= 3 && avgReview >= 4) score += 15;
  if (reviewCount >= 5 && avgReview >= 4.5) score += 30;

  return Math.min(score, 100);
}
```

**Verification Levels**:

1. **Basic** (Email + Phone):
   - Email verification link
   - SMS code to phone number
   - Minimum requirement to use matching system

2. **Enhanced** (+ Government ID):
   - Upload driver's license or government ID
   - Manual review by ArcticGuardian team (or automated with Stripe Identity API)
   - Confirms name matches profile
   - Age verification
   - Displays "ID Verified" badge

3. **Premium** (+ Background Check):
   - Optional paid service ($30-50 via partner like Checkr)
   - Criminal record check
   - Displays "Background Check Passed" badge
   - Significantly increases match visibility and trust

**Review System**:

After each trip with a matched partner:
- Both users prompted to review each other
- 5-star rating + written review
- Categories: Reliability, Communication, Safety-Consciousness, Compatibility
- Reviews are public but moderated
- Users can report fake/retaliatory reviews

**Safety Guidelines & Education**:

Mandatory safety guidelines shown before first match:

```
Trip Buddy Safety Guidelines

Before the Trip:
✓ Video call with potential partner before committing
✓ Meet in a public place before trip departure
✓ Share trip buddy's information with your emergency contacts
✓ Trust your instincts - decline if something feels off
✓ Verify partner's experience level matches their claims

During the Trip:
✓ Check in with emergency contacts as planned
✓ Communicate openly about comfort levels and concerns
✓ Respect boundaries and consent at all times
✓ Have a plan if the partnership isn't working out

Red Flags:
🚩 Pressure to skip safety steps (video call, public meeting)
🚩 Unwillingness to share verifiable information
🚩 Requests for money or financial information
🚩 Inappropriate or uncomfortable messages
🚩 Zero online presence or reviews

Report any concerning behavior to ArcticGuardian immediately.

[I Understand and Agree]
```

---

#### 2.3.5 Browse & Filter Interface

**Trip Buddy Board** (main discovery interface):

**Filters**:
- Activity type (multi-select)
- Experience level required
- Location/community
- Trip type (day trip, overnight, multi-day)
- Trip dates (date range picker)
- Gender preference
- Min. trust score (slider: 0-100)
- Availability (weekends, weekdays, flexible)

**Sort Options**:
- Best match (compatibility score)
- Most recent posts
- Highest trust score
- Leaving soonest (trip date)

**Display Cards**:
```
┌───────────────────────────────────────────────────┐
│ [PHOTO] Looking for Fishing Partner - Great Slave │
│         Lake 3-Day Trip                            │
│                                                    │
│ Posted by: Mike R. (⭐ 4.8, 8 reviews)             │
│ Trust Score: 85/100 ✓ Verified                    │
│                                                    │
│ Trip: Jun 15-17, 2025 • 3 days                    │
│ Activity: Ice Fishing • Experience: Intermediate   │
│ Open Slots: 2 spots available                     │
│                                                    │
│ "Have a cabin and boat. Looking for 1-2 people to │
│ split costs and enjoy great fishing. Experience   │
│ preferred but willing to teach basics."           │
│                                                    │
│ [View Full Trip] [Message Mike]                   │
└───────────────────────────────────────────────────┘
```

---

### 2.4 Technical Implementation

#### 2.4.1 Database Schema

```sql
-- Extended user profile for matching
CREATE TABLE user_matching_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,

  -- Bio
  bio TEXT,
  profile_photo_url VARCHAR(500),

  -- Experience
  experience_level_hiking VARCHAR(20),
  experience_level_camping VARCHAR(20),
  experience_level_fishing VARCHAR(20),
  experience_level_hunting VARCHAR(20),
  experience_level_paddling VARCHAR(20),
  experience_level_winter VARCHAR(20),
  experience_level_mountaineering VARCHAR(20),
  years_northern_experience INT,
  has_wilderness_first_aid BOOLEAN DEFAULT false,
  first_aid_expiry_date DATE,

  -- Preferences
  preferred_trip_types VARCHAR(50)[], -- array: day, overnight, multiday, expedition
  pace_preference VARCHAR(20), -- leisurely, moderate, athletic, extreme
  interests VARCHAR(50)[], -- photography, wildlife, fishing, etc.
  preferred_group_size VARCHAR(20),
  camping_style VARCHAR(20),

  -- Availability
  general_availability VARCHAR(20)[], -- weekends, weekdays, flexible
  lead_time_preference VARCHAR(20),

  -- Compatibility preferences
  gender_preference VARCHAR(20), -- any, prefer_female, prefer_male, no_preference
  age_range_min INT,
  age_range_max INT,
  languages_spoken VARCHAR(20)[],
  accessibility_needs TEXT,
  smoking_preference VARCHAR(20),

  -- Verification
  email_verified BOOLEAN DEFAULT false,
  phone_verified BOOLEAN DEFAULT false,
  id_verified BOOLEAN DEFAULT false,
  id_verification_date DATE,
  background_check_passed BOOLEAN DEFAULT false,
  background_check_date DATE,

  -- Trust metrics
  trust_score INT DEFAULT 0,
  profile_completeness INT DEFAULT 0,

  -- Availability calendar (JSON for flexibility)
  available_dates JSONB,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Trip buddy requests/postings
CREATE TABLE trip_buddy_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  trip_id UUID REFERENCES trips(id) ON DELETE SET NULL, -- null if general request

  request_type VARCHAR(20) NOT NULL, -- trip_specific, ongoing_partnership
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,

  activity_type VARCHAR(50),
  required_experience_level VARCHAR(20),
  open_slots INT, -- how many companions needed

  trip_dates_start DATE,
  trip_dates_end DATE,

  offering TEXT, -- what poster is offering
  seeking TEXT, -- what poster is seeking

  application_deadline DATE,

  is_active BOOLEAN DEFAULT true,
  filled_at TIMESTAMP, -- when all slots filled

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Matches/connections between users
CREATE TABLE trip_buddy_matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID REFERENCES trip_buddy_requests(id) ON DELETE CASCADE,
  requester_user_id UUID REFERENCES users(id),
  matched_user_id UUID REFERENCES users(id),

  compatibility_score INT, -- 0-100
  match_breakdown JSONB, -- detailed scoring

  status VARCHAR(20) DEFAULT 'pending', -- pending, accepted, declined, completed

  requester_confirmed BOOLEAN DEFAULT false,
  matched_confirmed BOOLEAN DEFAULT false,
  confirmed_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(request_id, matched_user_id) -- prevent duplicate matches
);

-- In-app messaging
CREATE TABLE trip_buddy_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id UUID REFERENCES trip_buddy_matches(id) ON DELETE CASCADE,
  sender_user_id UUID REFERENCES users(id),
  recipient_user_id UUID REFERENCES users(id),

  message_text TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMP,

  is_flagged BOOLEAN DEFAULT false,
  flagged_reason TEXT,

  created_at TIMESTAMP DEFAULT NOW()
);

-- Reviews after trip completion
CREATE TABLE trip_buddy_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id UUID REFERENCES trip_buddy_matches(id),
  trip_id UUID REFERENCES trips(id),
  reviewer_user_id UUID REFERENCES users(id),
  reviewed_user_id UUID REFERENCES users(id),

  overall_rating INT CHECK (overall_rating >= 1 AND overall_rating <= 5),
  reliability_rating INT CHECK (reliability_rating >= 1 AND reliability_rating <= 5),
  communication_rating INT CHECK (communication_rating >= 1 AND communication_rating <= 5),
  safety_rating INT CHECK (safety_rating >= 1 AND safety_rating <= 5),
  compatibility_rating INT CHECK (compatibility_rating >= 1 AND compatibility_rating <= 5),

  review_text TEXT,
  would_trip_again BOOLEAN,

  is_verified_trip BOOLEAN DEFAULT false, -- both users completed same trip

  created_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(trip_id, reviewer_user_id, reviewed_user_id) -- one review per trip partnership
);

-- Blocked users
CREATE TABLE user_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blocker_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  blocked_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  reason TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(blocker_user_id, blocked_user_id)
);

-- Reported users/messages
CREATE TABLE user_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_user_id UUID REFERENCES users(id),
  reported_user_id UUID REFERENCES users(id),
  message_id UUID REFERENCES trip_buddy_messages(id),

  report_type VARCHAR(50), -- harassment, inappropriate, safety_concern, spam, fake_profile
  report_details TEXT,

  status VARCHAR(20) DEFAULT 'pending', -- pending, investigating, resolved, dismissed
  reviewed_by_admin_id UUID,
  admin_notes TEXT,
  resolved_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW()
);
```

**Indexes**:
```sql
CREATE INDEX idx_trip_buddy_requests_active ON trip_buddy_requests(is_active, created_at DESC);
CREATE INDEX idx_trip_buddy_requests_user ON trip_buddy_requests(user_id);
CREATE INDEX idx_trip_buddy_matches_users ON trip_buddy_matches(requester_user_id, matched_user_id);
CREATE INDEX idx_trip_buddy_messages_match ON trip_buddy_messages(match_id, created_at DESC);
CREATE INDEX idx_trip_buddy_reviews_reviewed_user ON trip_buddy_reviews(reviewed_user_id);
CREATE INDEX idx_user_matching_profiles_user ON user_matching_profiles(user_id);
```

#### 2.4.2 API Endpoints

**Profile Management**:
```
GET /api/matching/profile - Get current user's matching profile
PUT /api/matching/profile - Update matching profile
POST /api/matching/profile/verify-phone - Send verification code
POST /api/matching/profile/verify-id - Upload ID for verification
GET /api/matching/profile/:userId/public - Get public profile view
```

**Trip Buddy Requests**:
```
GET /api/trip-buddy/requests - Browse requests (with filters)
POST /api/trip-buddy/requests - Create new request
GET /api/trip-buddy/requests/:id - Get request details
PATCH /api/trip-buddy/requests/:id - Update request
DELETE /api/trip-buddy/requests/:id - Delete request
GET /api/trip-buddy/requests/my-requests - Get user's own requests
```

**Matching**:
```
POST /api/trip-buddy/requests/:id/find-matches - Generate matches for a request
GET /api/trip-buddy/matches/:matchId - Get match details
POST /api/trip-buddy/matches/:matchId/confirm - Confirm match
POST /api/trip-buddy/matches/:matchId/decline - Decline match
```

**Messaging**:
```
GET /api/trip-buddy/matches/:matchId/messages - Get message thread
POST /api/trip-buddy/matches/:matchId/messages - Send message
PATCH /api/trip-buddy/messages/:messageId/read - Mark as read
POST /api/trip-buddy/messages/:messageId/flag - Flag inappropriate message
```

**Reviews**:
```
POST /api/trip-buddy/reviews - Submit review
GET /api/trip-buddy/reviews/for-user/:userId - Get user's reviews
```

**Safety**:
```
POST /api/trip-buddy/block - Block user
POST /api/trip-buddy/report - Report user/message
```

---

### 2.5 Success Metrics

**Adoption**:
- % of users who create matching profiles (target: 30%+)
- % of users who post trip buddy requests (target: 15%+)
- Number of active requests at any time (target: 20+ in first 6 months)

**Matching Quality**:
- % of matches that result in confirmed trips (target: 40%+)
- Average compatibility score of confirmed matches (target: 75+)
- % of matched users who trip together multiple times (target: 25%+)

**Safety**:
- % of trips with matched partners that complete safely (target: 99%+)
- Number of safety reports per 100 matches (target: <2)
- % of users who verify ID (target: 50%+)

**User Satisfaction**:
- Average review rating for trip partners (target: 4.2+ / 5)
- % of users who would use matching again (survey) (target: 80%+)
- Net Promoter Score for feature (target: 40+)

---

### 2.6 Future Enhancements

**Phase 4+**:
- **Group Trip Coordination**: Assemble groups of 4-6 for larger expeditions
- **Skill-Sharing Marketplace**: Experienced users offer paid guiding/instruction
- **Trip Buddy Events**: Organized meetups for users to connect in person
- **Integration with Local Clubs**: Partner with hiking clubs, outdoor organizations
- **International Matching**: Expand to connect travelers with local guides globally

---

## 3. Seasonal Route Planning & Analytics

### 3.1 Feature Overview

**Problem Statement**:
Routes in northern territories are dramatically affected by seasonal conditions. A trail that's straightforward in August may be impassable in May due to flooding, or dangerously icy in October. Historical knowledge about optimal timing exists primarily in the minds of local experts, making it inaccessible to newcomers and tourists who often make poor timing decisions that compromise safety and enjoyment.

**Solution**:
A data-driven system that analyzes historical trip data, weather patterns, community reports, and seasonal factors to provide intelligent route recommendations and timing guidance. The system learns from aggregate user experiences to identify optimal seasons for specific routes and warn about problematic periods.

**User Value**:
- Prevents trips during dangerous seasonal transitions (ice breakup, freeze-up)
- Optimizes enjoyment by avoiding peak bug season or poor weather windows
- Educates users about seasonal hazards specific to northern territories
- Builds on community knowledge rather than relying solely on external data
- Reduces SAR incidents caused by poor seasonal timing

---

### 3.2 User Stories

**Primary User Story**:
> As a tourist planning my first canoe trip in Yukon, I want to know the best months to attempt this route and what seasonal hazards to expect, so that I can time my trip for optimal safety and conditions.

**Secondary User Stories**:
- As a local with 20 years of experience, I want to share my seasonal knowledge about favorite routes, so that newcomers can benefit from my experience
- As a trip planner in March, I want to be warned about spring ice breakup danger on my planned water crossing, so that I can adjust my dates or route
- As a SAR coordinator, I want to see when most people attempt dangerous routes, so that I can plan proactive safety campaigns during peak periods
- As a photographer, I want to know when wildlife is most active on certain routes, so that I can time my trip for the best photo opportunities

---

### 3.3 Functional Requirements

#### 3.3.1 Historical Data Collection & Analysis

**Data Sources**:

1. **ArcticGuardian Trip Data** (primary source):
   - All completed trips with dates, routes, activity types
   - User-reported conditions during trip
   - Trip success/completion rate by season
   - User experience ratings by season

2. **Weather Historical Data**:
   - Environment Canada historical weather database
   - Temperature trends by region and date
   - Precipitation patterns
   - Severe weather event frequency

3. **Community Condition Reports** (crowdsourced):
   - Trail conditions (muddy, dry, icy, snowy)
   - Water levels (low, normal, high, flooding)
   - Ice conditions (freeze-up, breakup, stable)
   - Wildlife activity (migration, breeding, hibernation)
   - Bug intensity (black flies, mosquitoes)
   - Daylight hours and darkness timing

4. **Indigenous & Local Knowledge** (partnership content):
   - Traditional seasonal indicators
   - Cultural significance of certain periods (avoid hunting during cultural events)
   - Historical patterns passed down through generations

**Data Aggregation**:

For each route (or route cluster if specific route not available):
- Aggregate all trips by month/week
- Calculate success rate, average duration, user satisfaction
- Identify most popular periods and least popular periods
- Correlate with weather data to understand causation
- Flag periods with elevated risk (SAR incidents, trip cancellations)

**Example Data Structure**:
```typescript
interface RouteSeasonalData {
  route_identifier: string; // hash of route geometry or named route
  seasonal_analysis: {
    month: number; // 1-12
    trip_count: number; // how many trips attempted this route in this month
    success_rate: number; // % of trips completed as planned
    avg_duration_days: number;
    avg_user_rating: number; // 1-5 stars
    common_conditions: string[]; // ["muddy trails", "high water", "mosquitoes"]
    hazards_reported: string[]; // ["river crossing dangerous", "ice unstable"]
    weather_summary: {
      avg_temp: number;
      precipitation_days: number;
      severe_weather_events: number;
    };
    daylight_hours: number;
    recommendation_score: number; // 0-100, higher = better time to go
  }[];
  best_months: number[]; // [6, 7, 8] = June, July, August
  avoid_months: number[]; // [10, 11, 4, 5] = Oct, Nov, Apr, May
  seasonal_warnings: {
    period: string; // "Late April - Early June"
    warning: string; // "Ice breakup makes water crossings extremely dangerous"
    severity: string; // "high" | "moderate" | "low"
  }[];
}
```

---

#### 3.3.2 Recommendation Engine

**When User Enters Trip Dates**:

System analyzes:
1. Selected route (if drawn on map) or region (if general area)
2. Planned trip dates
3. Activity type
4. Historical data for that route/region

**Output: Seasonal Recommendation Card**

```
┌──────────────────────────────────────────────────────┐
│ 📅 Seasonal Trip Assessment                           │
├──────────────────────────────────────────────────────┤
│ Your Trip: Canol Heritage Trail                      │
│ Dates: May 15-22, 2026                               │
│ Activity: Backpacking                                │
│                                                      │
│ ⚠️  CAUTION: Challenging Time of Year                │
│                                                      │
│ Recommendation Score: 45/100 (Fair)                  │
│                                                      │
│ Why:                                                 │
│ ⚠️ Spring runoff typically peaks mid-May. River      │
│    crossings may be dangerous or impassable.         │
│ ⚠️ Trails often muddy and snow-covered at high       │
│    elevations.                                       │
│ ⚠️ Black flies emerge late May in this region.       │
│ ✓ Fewer crowds - only 8% of annual trips happen      │
│   in May.                                            │
│ ✓ Wildlife viewing good (caribou migration).         │
│                                                      │
│ Historical Data:                                     │
│ • 23 trips attempted in May (2020-2025)              │
│ • 17 completed as planned (74% success rate)         │
│ • 6 turned back or rerouted due to conditions        │
│ • Average rating: 3.8/5                              │
│                                                      │
│ Better Timing:                                       │
│ ✓ Late June - August (95% success rate, 4.6/5)       │
│ ✓ Early September (85% success rate, 4.4/5)          │
│                                                      │
│ [View Seasonal Details] [Adjust Dates]               │
└──────────────────────────────────────────────────────┘
```

**Recommendation Scoring Formula**:

```typescript
function calculateRecommendationScore(
  routeData: RouteSeasonalData,
  tripMonth: number,
  activityType: string
): number {
  let score = 50; // baseline

  // Historical success rate (30 points)
  const successRate = routeData.seasonal_analysis[tripMonth].success_rate;
  score += (successRate - 0.5) * 60; // -30 to +30 points

  // User satisfaction (20 points)
  const avgRating = routeData.seasonal_analysis[tripMonth].avg_user_rating;
  score += (avgRating - 3) * 10; // -20 to +20 points

  // Trip count (indicator of popularity) (10 points)
  const tripCount = routeData.seasonal_analysis[tripMonth].trip_count;
  const maxTripCount = Math.max(...routeData.seasonal_analysis.map(m => m.trip_count));
  score += (tripCount / maxTripCount) * 10;

  // Hazards penalty (up to -30 points)
  const hazardCount = routeData.seasonal_analysis[tripMonth].hazards_reported.length;
  score -= hazardCount * 10;

  // Weather severity penalty (up to -20 points)
  const severeWeatherDays = routeData.seasonal_analysis[tripMonth].weather_summary.severe_weather_events;
  score -= severeWeatherDays * 5;

  // Activity-specific adjustments
  if (activityType === 'paddling' && routeData.seasonal_analysis[tripMonth].common_conditions.includes('high water')) {
    score -= 15; // dangerous for paddling
  }
  if (activityType === 'winter' && routeData.seasonal_analysis[tripMonth].avg_temp > 0) {
    score -= 20; // poor conditions for winter activities
  }

  return Math.max(0, Math.min(100, score));
}
```

---

#### 3.3.3 Seasonal Hazard Warnings

**Automatic Warnings Triggered**:

When user selects dates that fall in known hazardous periods:

1. **Ice Breakup Period (Spring)**:
   ```
   🚨 DANGER: Spring Ice Breakup

   Your trip dates (May 10-15) fall within the typical ice breakup period for
   this region. River and lake ice is extremely unstable and unpredictable.

   NEVER trust ice during breakup - what looks solid can give way instantly.

   Recommendation: Delay trip until after June 1, or choose alternative route
   without water crossings.

   SAR Note: 40% of spring water-related SAR incidents occur during breakup.
   ```

2. **Freeze-Up Period (Fall)**:
   ```
   ⚠️  CAUTION: Fall Freeze-Up Season

   Late October and November are transition periods. Lakes and rivers begin
   freezing but ice is NOT safe for travel until late December.

   Your planned snowmobile route (Nov 5-8) crosses several water bodies.
   Ice thickness will be insufficient for safe crossing.

   Recommendation: Wait until late December, or plan overland route.
   ```

3. **Extreme Bug Season**:
   ```
   🦟 Peak Bug Season

   Late June through mid-July is peak black fly and mosquito season in this area.
   Bugs can be intense enough to affect enjoyment and safety (especially for
   inexperienced visitors).

   Recommendation: Bring high-quality bug netting, DEET, and consider bug jacket.
   Or consider mid-August when bugs diminish significantly.
   ```

4. **Extreme Cold Risk**:
   ```
   ❄️  Extreme Cold Warning

   January temperatures in this region average -35°C, with frequent dips below
   -45°C. Frostbite can occur in minutes with exposed skin.

   This trip requires expert-level winter survival skills and specialized cold-
   weather gear.

   If you're not an experienced winter traveler, strongly consider a different
   season or seek an experienced guide.
   ```

5. **Early/Late Season Darkness**:
   ```
   🌙 Limited Daylight Hours

   In early March at this latitude (65°N), you'll have approximately 10 hours
   of daylight. Your planned 40km route may be challenging to complete in
   available light.

   Plan for winter travel (headlamps, reflective gear) or adjust route distance.
   ```

6. **Hunting Season Conflicts**:
   ```
   🦌 Hunting Season Active

   Your hiking dates (Sept 5-10) overlap with caribou hunting season. Trails
   may have hunting activity.

   Recommendation: Wear blaze orange, make noise on trail, camp away from
   game trails.
   ```

---

#### 3.3.4 Seasonal Calendar Visualization

**Interactive Calendar View**:

Display a full-year calendar for a selected route showing:
- Color-coded months by recommendation score:
  - Dark green (90-100): Excellent
  - Light green (75-89): Good
  - Yellow (60-74): Fair
  - Orange (45-59): Caution
  - Red (0-44): Not Recommended
- Hover over month to see summary stats
- Click month for detailed breakdown

**Example Visual**:
```
Canol Heritage Trail - Seasonal Calendar

Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct  Nov  Dec
[🔴] [🔴] [🔴] [🟠] [🟡] [🟢] [🟢] [🟢] [🟢] [🟡] [🟠] [🔴]

🟢 Best Time to Go: Late June - Early September
⚠️  Avoid: October - May (extreme cold, darkness, snow)
⚠️  Caution: May (runoff), October (freeze-up)

Most Popular: July (45% of trips)
Highest Rated: August (4.7/5 average)
```

**Comparison Tool**:

Compare multiple routes side-by-side:

```
Compare Routes - July

Route A: Tombstone Mountains (Yukon)
Recommendation: 95/100 (Excellent) ✓
- Perfect conditions, 18 hrs daylight
- Minimal bugs (high elevation)
- 98% success rate

Route B: Mackenzie River Paddle (NWT)
Recommendation: 72/100 (Good)
- Good paddling, but peak bug season 🦟
- High water levels (fast current)
- 85% success rate

Route C: Nahanni National Park (NWT)
Recommendation: 88/100 (Very Good)
- Excellent conditions, stunning scenery
- Moderate bugs
- 92% success rate, waitlist for permits
```

---

### 3.4 Technical Implementation

#### 3.4.1 Database Schema

```sql
-- Route definitions (simplified - could use PostGIS for geometry)
CREATE TABLE routes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(200),
  region VARCHAR(100), -- Yukon, NWT, Nunavut, or specific area
  route_geohash VARCHAR(50), -- geohash for clustering similar routes
  route_geometry GEOGRAPHY(LineString, 4326), -- PostGIS
  activity_types VARCHAR(50)[], -- hiking, paddling, winter, etc.
  difficulty_level VARCHAR(20),
  distance_km DECIMAL(10,2),
  elevation_gain_m INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Historical seasonal data for routes (pre-aggregated for performance)
CREATE TABLE route_seasonal_analysis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id UUID REFERENCES routes(id) ON DELETE CASCADE,
  month INT CHECK (month >= 1 AND month <= 12),

  -- Trip statistics
  trip_count INT DEFAULT 0,
  success_rate DECIMAL(5,2), -- percentage
  avg_duration_days DECIMAL(5,2),
  avg_user_rating DECIMAL(3,2),

  -- Conditions
  common_conditions JSONB, -- array of condition strings
  hazards_reported JSONB, -- array of hazard strings

  -- Weather data
  avg_temp_celsius DECIMAL(5,2),
  min_temp_celsius DECIMAL(5,2),
  max_temp_celsius DECIMAL(5,2),
  precipitation_days INT,
  severe_weather_events INT,

  -- Daylight
  avg_daylight_hours DECIMAL(4,2),

  -- Recommendation
  recommendation_score INT CHECK (recommendation_score >= 0 AND recommendation_score <= 100),

  -- Metadata
  last_calculated TIMESTAMP DEFAULT NOW(),
  data_points_count INT, -- how many trips contributed to this data

  UNIQUE(route_id, month)
);

-- Seasonal warnings (manually curated + auto-generated)
CREATE TABLE seasonal_warnings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id UUID REFERENCES routes(id) ON DELETE CASCADE,
  region VARCHAR(100), -- can apply to region instead of specific route

  warning_type VARCHAR(50), -- ice_breakup, freeze_up, bugs, cold, darkness, etc.
  severity VARCHAR(20), -- high, moderate, low

  start_month INT,
  end_month INT,
  start_day INT, -- approximate day of month
  end_day INT,

  warning_title VARCHAR(200),
  warning_text TEXT,

  is_active BOOLEAN DEFAULT true,
  created_by_admin BOOLEAN DEFAULT false,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- User condition reports (crowdsourced data)
CREATE TABLE route_condition_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id UUID REFERENCES routes(id),
  trip_id UUID REFERENCES trips(id),
  user_id UUID REFERENCES users(id),

  report_date DATE NOT NULL,

  trail_condition VARCHAR(50), -- dry, muddy, icy, snowy, overgrown, excellent
  water_level VARCHAR(50), -- low, normal, high, flooding
  ice_condition VARCHAR(50), -- stable, unstable, breakup, freezeup, none
  bug_intensity VARCHAR(20), -- none, mild, moderate, severe, extreme

  wildlife_sightings JSONB, -- [{species: "grizzly", location: {...}, date: ...}]

  hazards_encountered TEXT,
  overall_experience_rating INT CHECK (overall_experience_rating >= 1 AND overall_experience_rating <= 5),

  notes TEXT,
  photos JSONB, -- array of photo URLs

  is_verified BOOLEAN DEFAULT false,
  upvotes INT DEFAULT 0,

  created_at TIMESTAMP DEFAULT NOW()
);

-- Pre-calculated "best time to go" recommendations (cached)
CREATE TABLE route_best_times (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id UUID REFERENCES routes(id) ON DELETE CASCADE UNIQUE,

  best_months INT[], -- [6, 7, 8] = June, July, August
  avoid_months INT[],
  shoulder_months INT[],

  best_time_summary TEXT, -- "Late June through August"
  avoid_time_summary TEXT, -- "October through May"

  most_popular_month INT,
  highest_rated_month INT,

  last_calculated TIMESTAMP DEFAULT NOW()
);
```

**Indexes**:
```sql
CREATE INDEX idx_route_seasonal_analysis_route_month ON route_seasonal_analysis(route_id, month);
CREATE INDEX idx_seasonal_warnings_route ON seasonal_warnings(route_id, is_active);
CREATE INDEX idx_route_condition_reports_route_date ON route_condition_reports(route_id, report_date DESC);
CREATE INDEX idx_routes_geohash ON routes(route_geohash);
```

#### 3.4.2 Data Aggregation Job

**Scheduled Job** (runs monthly):

```typescript
// jobs/calculateSeasonalAnalytics.ts

async function aggregateSeasonalData() {
  const routes = await db.query('SELECT * FROM routes');

  for (const route of routes) {
    for (let month = 1; month <= 12; month++) {
      // Get all trips for this route in this month (across all years)
      const trips = await db.query(`
        SELECT * FROM trips
        WHERE route_geohash = $1
        AND EXTRACT(MONTH FROM start_date) = $2
        AND status = 'completed'
      `, [route.route_geohash, month]);

      if (trips.length === 0) continue; // skip months with no data

      // Calculate statistics
      const successRate = trips.filter(t => t.completed_as_planned).length / trips.length * 100;
      const avgDuration = trips.reduce((sum, t) => sum + t.actual_duration_days, 0) / trips.length;

      // Get user ratings
      const ratings = await db.query(`
        SELECT avg(overall_experience_rating) as avg_rating
        FROM route_condition_reports
        WHERE route_id = $1
        AND EXTRACT(MONTH FROM report_date) = $2
      `, [route.id, month]);

      // Get weather data
      const weatherData = await getHistoricalWeather(route.region, month);

      // Calculate recommendation score
      const recommendationScore = calculateRecommendationScore({
        success_rate: successRate,
        avg_rating: ratings[0]?.avg_rating || 3,
        trip_count: trips.length,
        hazards: [], // aggregate from condition reports
        weather: weatherData
      });

      // Upsert into route_seasonal_analysis
      await db.query(`
        INSERT INTO route_seasonal_analysis (
          route_id, month, trip_count, success_rate, avg_duration_days,
          avg_user_rating, recommendation_score, avg_temp_celsius,
          precipitation_days, severe_weather_events, last_calculated, data_points_count
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), $11)
        ON CONFLICT (route_id, month)
        DO UPDATE SET
          trip_count = EXCLUDED.trip_count,
          success_rate = EXCLUDED.success_rate,
          avg_duration_days = EXCLUDED.avg_duration_days,
          avg_user_rating = EXCLUDED.avg_user_rating,
          recommendation_score = EXCLUDED.recommendation_score,
          last_calculated = NOW(),
          data_points_count = EXCLUDED.data_points_count
      `, [...]);
    }

    // Calculate best times
    await calculateBestTimes(route.id);
  }
}

async function calculateBestTimes(routeId: string) {
  const monthlyData = await db.query(`
    SELECT month, recommendation_score, trip_count, avg_user_rating
    FROM route_seasonal_analysis
    WHERE route_id = $1
    ORDER BY month
  `, [routeId]);

  const bestMonths = monthlyData
    .filter(m => m.recommendation_score >= 85)
    .map(m => m.month);

  const avoidMonths = monthlyData
    .filter(m => m.recommendation_score < 50)
    .map(m => m.month);

  const mostPopularMonth = monthlyData.reduce((max, m) =>
    m.trip_count > max.trip_count ? m : max
  ).month;

  const highestRatedMonth = monthlyData.reduce((max, m) =>
    m.avg_user_rating > max.avg_user_rating ? m : max
  ).month;

  await db.query(`
    INSERT INTO route_best_times (
      route_id, best_months, avoid_months, most_popular_month,
      highest_rated_month, last_calculated
    ) VALUES ($1, $2, $3, $4, $5, NOW())
    ON CONFLICT (route_id)
    DO UPDATE SET
      best_months = EXCLUDED.best_months,
      avoid_months = EXCLUDED.avoid_months,
      most_popular_month = EXCLUDED.most_popular_month,
      highest_rated_month = EXCLUDED.highest_rated_month,
      last_calculated = NOW()
  `, [routeId, bestMonths, avoidMonths, mostPopularMonth, highestRatedMonth]);
}
```

#### 3.4.3 API Endpoints

```
GET /api/routes/:routeId/seasonal-analysis
Response: {
  route_name: string,
  best_months: number[],
  avoid_months: number[],
  monthly_data: Array<{
    month: number,
    recommendation_score: number,
    trip_count: number,
    success_rate: number,
    avg_rating: number,
    common_conditions: string[],
    hazards: string[]
  }>,
  warnings: Array<{
    type: string,
    severity: string,
    period: string,
    message: string
  }>
}

POST /api/routes/:routeId/condition-report
Body: {
  report_date: string,
  trail_condition: string,
  water_level: string,
  bug_intensity: string,
  wildlife_sightings: object[],
  hazards_encountered: string,
  rating: number,
  notes: string
}

GET /api/routes/compare
Query: ?route_ids=uuid1,uuid2,uuid3&month=7
Response: {
  routes: Array<{
    route_id: string,
    name: string,
    recommendation_score: number,
    summary: string,
    conditions: object
  }>
}

POST /api/trips/:tripId/seasonal-assessment
Response: {
  recommendation_score: number,
  recommendation_text: string,
  warnings: object[],
  better_timing_suggestions: object[],
  historical_stats: object
}
```

---

### 3.5 Success Metrics

**Data Coverage**:
- % of routes with sufficient seasonal data (target: 60% of popular routes within 12 months)
- Number of condition reports submitted per month (target: 100+ in peak season)
- Geographic coverage (target: all 3 territories represented)

**User Engagement**:
- % of trip creators who view seasonal assessment (target: 70%+)
- % of trip creators who adjust dates based on recommendation (target: 25%+)
- % of completed trips that submit condition reports (target: 40%+)

**Safety Impact**:
- Reduction in SAR incidents during known hazardous periods (track over time)
- % of trips attempted during "avoid" periods (target: decrease 30% year-over-year)
- User satisfaction with seasonal guidance (survey) (target: 4.2+ / 5)

---

### 3.6 Future Enhancements

**Phase 4+**:
- **ML Prediction Models**: Machine learning to predict conditions based on early-season data
- **Climate Change Tracking**: Visualize how seasonal patterns shift over years
- **Real-Time Conditions**: Integration with satellite imagery, stream gauges, webcams
- **Indigenous Knowledge Integration**: Deep partnership for traditional ecological knowledge
- **Automated Alerts**: "Your saved route is entering optimal season - book your trip now!"

---

## 4. Emergency Trip Report Export

### 4.1 Feature Overview

**Problem Statement**:
When a traveler doesn't return as expected, emergency contacts and SAR teams need immediate access to comprehensive trip information in a format that's professional, complete, and easy to share with authorities. Currently, emergency contacts must piece together information from messages, screenshots, and memory - wasting critical time during the golden hours of search operations.

**Solution**:
A one-click export system that generates a beautifully formatted, print-ready, and digitally shareable trip report containing all critical safety information in a standardized format optimized for SAR operations. The report is accessible to emergency contacts without login and can be immediately provided to RCMP, SAR coordinators, and emergency services.

**User Value**:
- Saves critical time in emergencies (minutes matter)
- Provides professional, credible documentation to authorities
- Reduces stress on emergency contacts during crisis
- Standardizes information format for SAR efficiency
- Can be printed, emailed, or shown on mobile device
- Peace of mind knowing family has everything needed

---

### 4.2 User Stories

**Primary User Story**:
> As an emergency contact whose loved one is 6 hours overdue, I want to instantly download a comprehensive trip report with all their plans and GPS coordinates, so that I can provide complete information to RCMP and SAR immediately.

**Secondary User Stories**:
- As a SAR coordinator, I want to receive a standardized trip report from a concerned family member, so that I can assess the situation and plan a search operation without needing to ask dozens of questions
- As a trip planner, I want to know that if something goes wrong, my family has everything authorities need in one professional document, so that I have peace of mind about worst-case scenarios
- As an RCMP officer taking a missing person report, I want a trip report that follows a consistent format with all essential details, so that I can quickly understand the situation and initiate response
- As a parent whose adult child is hiking in Yukon, I want to print the trip report and keep it handy during their trip, so that I'm prepared if they don't check in as expected

---

### 4.3 Functional Requirements

#### 4.3.1 Report Content & Structure

**Standardized Emergency Trip Report Format**:

```
═══════════════════════════════════════════════
        EMERGENCY TRIP REPORT
        ArcticGuardian Trip Safety Platform
═══════════════════════════════════════════════

🚨 URGENT: This person has not returned from their trip as planned.

REPORT GENERATED: Oct 30, 2025 at 14:35 MST
EXPECTED RETURN: Oct 29, 2025 at 18:00 MST
STATUS: ⚠️ OVERDUE BY 20 HOURS

───────────────────────────────────────────────
SECTION 1: MISSING PERSON INFORMATION
───────────────────────────────────────────────

Name: Sarah Thompson
Age: 32
Gender: Female
Phone: (867) 555-1234
Email: sarah.thompson@example.com

Physical Description:
- Height: 5'6" (168 cm)
- Build: Athletic
- Hair: Brown, shoulder-length
- Clothing: Blue Gore-Tex jacket, black hiking pants,
  grey backpack (60L)

Medical Considerations:
- Type 1 Diabetes (requires insulin)
- Insulin supply: 7 days
- EpiPen carried (bee allergy)
- Emergency medication: In red pouch in backpack

Outdoor Experience Level:
- Hiking: Intermediate (5 years experience)
- Winter travel: Beginner
- Wilderness First Aid: Certified (expires Jan 2026)

───────────────────────────────────────────────
SECTION 2: TRIP DETAILS
───────────────────────────────────────────────

Trip Name: Tombstone Range Day Hike
Activity Type: Hiking
Trip ID: AG-TR-20251029-8473

Party Size: 2 people
Companion: Jessica Park (867-555-5678)

Planned Duration:
- Departure: Oct 29, 2025 at 08:00 MST
- Expected Return: Oct 29, 2025 at 18:00 MST
- Duration: 10 hours

Actual Status:
- Last Check-In: Oct 29, 2025 at 09:15 MST
- Location at Check-In: Trailhead parking
- Message: "Starting hike, weather looks good"
- Time Overdue: 20 hours 35 minutes

───────────────────────────────────────────────
SECTION 3: ROUTE & LOCATION
───────────────────────────────────────────────

Starting Point:
Tombstone Mountain Trailhead
Coordinates: 64.4397°N, 138.3253°W
Address: Dempster Highway km 72, Yukon
[MAP IMAGE: Detailed map showing starting point]

Destination:
Grizzly Lake Summit
Coordinates: 64.4521°N, 138.3654°W
[MAP IMAGE: Route overlay on topographic map]

Route Description:
Total Distance: 14.2 km (round trip)
Elevation Gain: 685 meters
Terrain: Alpine tundra, rocky trail, stream crossing at km 4.5

Waypoints:
1. Trailhead Parking: 64.4397°N, 138.3253°W (0 km)
2. Stream Crossing: 64.4445°N, 138.3398°W (4.5 km)
3. Alpine Ridge: 64.4488°N, 138.3521°W (6.8 km)
4. Grizzly Lake Viewpoint: 64.4521°N, 138.3654°W (7.1 km)

⚠️ Planned Route Deviations:
"May explore side trail to Divide Lake if time permits"

Search Priority Zones:
1. PRIMARY: Planned route (see map)
2. SECONDARY: Side trail to Divide Lake (2 km detour)
3. TERTIARY: Return route alternatives

[FULL MAP: High-resolution topographic map with route highlighted,
waypoints marked, and search zones indicated]

───────────────────────────────────────────────
SECTION 4: VEHICLE & EQUIPMENT
───────────────────────────────────────────────

Vehicle Information:
Make/Model: Toyota 4Runner
Color: Silver
License Plate: YUK 842A (Yukon)
Parked Location: Tombstone Trailhead parking lot
Last Seen: Oct 29, 08:00 MST

Equipment Carried:
Essential Gear:
✓ 60L backpack (grey/black)
✓ Tent (2-person, red MSR Hubba)
✓ Sleeping bag (rated -5°C)
✓ Sleeping pad
✓ Stove and fuel
✓ Water filter
✓ Map and compass
✓ GPS device (Garmin eTrex)
✓ Satellite communicator (Garmin inReach) - DEVICE ID: 300234067892345
✓ Headlamp and batteries
✓ First aid kit (large, red pouch)

Clothing:
✓ Blue Gore-Tex jacket
✓ Black hiking pants
✓ Fleece mid-layer (grey)
✓ Down jacket (orange Patagonia)
✓ Toque and gloves
✓ Hiking boots (brown Salomon)

Food and Water:
✓ 3 liters water capacity
✓ 3 days emergency food (freeze-dried meals, energy bars)
✓ Stove and fuel for 5 days

Communication Devices:
✓ Cell phone: (867) 555-1234 (limited signal expected)
✓ Garmin inReach satellite communicator
   Device ID: 300234067892345
   Last ping: Oct 29, 09:15 MST at 64.4397°N, 138.3253°W

Emergency Equipment:
✓ Emergency space blanket
✓ Whistle
✓ Signal mirror
✓ Fire starting kit
✓ Emergency bivvy

───────────────────────────────────────────────
SECTION 5: ENVIRONMENTAL CONDITIONS
───────────────────────────────────────────────

Weather at Departure (Oct 29, 08:00):
- Temperature: 5°C
- Conditions: Partly cloudy
- Wind: 15 km/h NW
- Visibility: Good (15+ km)

Current Weather (Oct 30, 14:35):
- Temperature: 2°C
- Conditions: Light snow
- Wind: 25 km/h N
- Visibility: Moderate (5 km)
- Weather Alert: None active

Forecast Next 24 Hours:
- Temps: -2°C to 3°C
- Light snow continuing
- Winds 20-30 km/h
- Sunset: 17:45 MST
- Sunrise: 08:12 MST

Daylight:
- Sunset Oct 29: 17:52 MST (already occurred)
- Sunrise Oct 30: 08:10 MST (occurred)
- Current daylight hours: ~9.5 hours

Seasonal Hazards:
⚠️ Late October: Early season snow possible at elevation
⚠️ Stream crossings may be icy in morning
⚠️ Shorter daylight hours (sunset before 6 PM)
⚠️ Wildlife: Grizzly bears still active (pre-hibernation)

───────────────────────────────────────────────
SECTION 6: EMERGENCY CONTACTS
───────────────────────────────────────────────

Primary Emergency Contact:
Name: Robert Thompson (Father)
Phone: (867) 555-9876
Email: robert.thompson@example.com
Relationship: Father
Address: 123 Main St, Whitehorse, YT

Secondary Emergency Contact:
Name: Jessica Park (Trip Companion)
Phone: (867) 555-5678
Email: jessica.park@example.com
Relationship: Hiking partner

Additional Contacts:
Name: Dr. Lisa Chen (Family Physician)
Phone: (867) 555-4321
Clinic: Whitehorse Medical Clinic

───────────────────────────────────────────────
SECTION 7: SEARCH & RESCUE INFORMATION
───────────────────────────────────────────────

Recommended SAR Coordinator:
Yukon SAR Association
Phone: (867) 667-5555
24/7 Dispatch: 1-800-YT-SEARCH

RCMP Detachment:
Dawson City RCMP (jurisdiction)
Phone: (867) 993-5555
Non-Emergency: (867) 993-5555
Emergency: 911

Local SAR Resources:
- Yukon Search & Rescue (helicopter capable)
- Parks Canada Wardens (Tombstone Territorial Park)
- Civil Air Search (if needed)

Search Complexity Assessment:
- Terrain: Moderate (alpine, rocky)
- Remoteness: Moderate (roadside trailhead, but backcountry route)
- Weather: Fair (light snow, moderate visibility)
- Subject Profile: Fit, experienced hiker with good equipment
- Communication: Has satellite device (last ping 20+ hrs ago)

Time-Critical Factors:
⚠️ Type 1 Diabetes: Insulin supply for 7 days, but unexpected delay
   could cause medical emergency if rationing or lost supplies
⚠️ Temperatures near/below freezing at night
⚠️ Limited daylight hours (9.5 hrs/day)

───────────────────────────────────────────────
SECTION 8: ADDITIONAL INFORMATION
───────────────────────────────────────────────

Trip Notes from Planner:
"First time hiking in Tombstone but have done similar difficulty
trails. Planning to take lots of photos. May explore side trails
if time allows but will turn back by 2 PM regardless to ensure
daylight return."

Behavioral Profile:
- Safety-conscious (Wilderness First Aid certified)
- Experienced hiker (5+ years)
- Good communication (always checks in)
- Prepared (complete equipment list)

Unusual Circumstances:
None noted. This is out of character - Sarah always checks in
on time or early.

Investigator Notes:
[Space for SAR coordinator to add notes during operation]

───────────────────────────────────────────────
SECTION 9: TRIP REPORT ATTACHMENTS
───────────────────────────────────────────────

Attached Files (available in digital version):
1. High-Resolution Route Map (PDF, 2.4 MB)
2. Topographic Map - 1:50,000 scale (PDF, 3.1 MB)
3. GPX Route File (for GPS devices)
4. Satellite Device Last Known Location (KML)
5. Weather Forecast Details (PDF)
6. Photo of Subject (recent, full-body)
7. Photo of Vehicle (with license plate)
8. Photo of Equipment/Backpack

QR Code for Digital Version:
[QR CODE: Links to online trip report with live updates]

───────────────────────────────────────────────
SECTION 10: REPORT METADATA
───────────────────────────────────────────────

Report Generated By: ArcticGuardian Trip Safety Platform
Report ID: EMERGENCY-AG-TR-20251029-8473
Generated: Oct 30, 2025 at 14:35:15 MST
Generated For: Robert Thompson (Emergency Contact)
Access Link: https://arcticguardian.com/emergency/abc123xyz

Trip Created: Oct 24, 2025
Last Updated: Oct 29, 2025 at 07:45 MST
Emergency Protocol Activated: Oct 30, 2025 at 10:00 MST
  (2 hours after expected return + grace period)

Verification:
This trip report was created by Sarah Thompson using
ArcticGuardian's verified trip planning system. All information
is as provided by the trip planner.

───────────────────────────────────────────────

⚠️  CRITICAL ACTIONS FOR EMERGENCY CONTACTS:

1. ✓ Contact RCMP immediately: (867) 993-5555 or 911
2. ✓ Provide this trip report to investigating officer
3. ✓ Check vehicle is still at trailhead (if safe to do so)
4. ✓ Attempt contact via satellite device (inReach messaging)
5. ✓ Contact trip companion Jessica Park: (867) 555-5678
6. ✓ Monitor weather and check for trail reports from other hikers
7. ✓ Stand by for updates from authorities

DO NOT:
✗ Attempt solo search (risks additional casualties)
✗ Disturb vehicle or equipment at trailhead (potential evidence)
✗ Share on social media until authorized by SAR (can hinder ops)

───────────────────────────────────────────────

This report generated by ArcticGuardian Trip Safety Platform
For questions about this report: support@arcticguardian.com
Emergency SAR Coordinator Support: 1-800-AG-EMERGENCY

═══════════════════════════════════════════════
```

---

#### 4.3.2 Export Formats & Access

**Multiple Export Formats**:

1. **PDF (Primary)**:
   - Professional, print-ready format
   - Embedded high-resolution maps
   - Page breaks optimized for printing
   - Includes QR code linking to digital version
   - File size optimized (typically 5-10 MB)

2. **Web Page (Live)**:
   - Shareable link (no login required)
   - Live updates if trip status changes
   - Interactive maps (zoom, pan)
   - One-click copy of coordinates
   - Mobile-optimized for viewing on phones
   - Print-friendly CSS

3. **Email-Ready Summary**:
   - Concise text version for quick email to authorities
   - Key facts in bullet points
   - Embedded map images
   - Attachment: Full PDF report

4. **GPX/KML Files**:
   - Route waypoints for SAR GPS devices
   - Last known location from satellite device
   - Search zone polygons

**Access Methods**:

**For Emergency Contacts** (no login required):
- Unique shareable link sent via email when trip is created
- Example: `https://arcticguardian.com/emergency/abc123xyz456`
- Link remains active indefinitely
- No authentication needed (link itself is the credential)

**For Trip Planner**:
- Access from trip details page
- "Download Emergency Report" button
- Preview before sharing with family

**For SAR/Authorities** (via emergency contact):
- Receive link from family
- Instant access, no account needed
- Can print or forward immediately

---

#### 4.3.3 Automatic Emergency Activation

**When Trip Becomes Overdue**:

1. **T + 2 hours after expected return**:
   - Email sent to emergency contacts:
     ```
     Subject: ⚠️ TRIP OVERDUE: Sarah Thompson - Tombstone Hike

     Sarah has not checked in and is now 2 hours past expected return.

     IMMEDIATE ACTION NEEDED:
     1. Attempt to contact Sarah: (867) 555-1234
     2. Check satellite device for messages (if equipped)
     3. If no contact within 1 hour, download Emergency Trip Report
        and contact authorities.

     DOWNLOAD EMERGENCY REPORT:
     https://arcticguardian.com/emergency/abc123xyz456

     This report contains all information needed for search and rescue.

     [Check In For Sarah] [Download Report] [Extend Trip Deadline]
     ```

2. **T + 6 hours after expected return**:
   - Escalation email with stronger language:
     ```
     Subject: 🚨 URGENT: Sarah Thompson 6 Hours Overdue

     Sarah has not returned or checked in and is now 6 hours overdue.

     CONTACT AUTHORITIES IMMEDIATELY:
     RCMP: 911 or (867) 993-5555
     SAR: (867) 667-5555

     Provide them with the Emergency Trip Report:
     https://arcticguardian.com/emergency/abc123xyz456

     [Download Report Now]
     ```

3. **Optional: Automatic SAR Notification** (future feature, requires partnerships):
   - With user opt-in, automatically notify SAR dispatch after X hours
   - Requires legal framework and SAR coordination

---

#### 4.3.4 Customization & Branding

**Trip Planner Customization Options**:

When creating trip:
- **Privacy Level**:
  - Standard: All details included
  - Limited: Omit medical/personal details (less comprehensive but more private)

- **Emergency Contact Preferences**:
  - Who can access emergency report (select from emergency contacts list)
  - Auto-notification timing (2 hours, 6 hours, 12 hours, or custom)

- **Additional Notes for SAR**:
  - Behavioral profile (risk-taker vs. cautious)
  - Special skills (pilot, wilderness navigation expert, survival training)
  - Previous outdoor incidents/rescues
  - Medications, allergies (beyond what's in profile)

**Professional Formatting**:
- Clean, scannable layout
- Critical information highlighted (overdue status, medical, coordinates)
- Color-coded sections for quick reference
- Consistent typography and spacing
- Emergency-appropriate tone (serious, factual, urgent but not alarmist)

---

### 4.4 Technical Implementation

#### 4.4.1 Report Generation Service

```typescript
// services/emergencyReportGenerator.ts

import PDFDocument from 'pdfkit';
import { renderToString } from 'react-dom/server';

interface EmergencyReportOptions {
  trip_id: string;
  format: 'pdf' | 'html' | 'email' | 'gpx';
  include_maps: boolean;
  include_photos: boolean;
  privacy_level: 'standard' | 'limited';
}

class EmergencyReportGenerator {

  async generateReport(options: EmergencyReportOptions): Promise<ReportOutput> {
    // Fetch all trip data
    const tripData = await this.fetchTripData(options.trip_id);
    const userData = await this.fetchUserData(tripData.user_id);
    const weatherData = await this.fetchWeatherData(tripData);
    const mapImages = options.include_maps ? await this.generateMapImages(tripData) : null;

    // Compile data into report structure
    const reportData = this.compileReportData({
      trip: tripData,
      user: userData,
      weather: weatherData,
      maps: mapImages,
      privacy_level: options.privacy_level
    });

    // Generate in requested format
    switch (options.format) {
      case 'pdf':
        return await this.generatePDF(reportData);
      case 'html':
        return await this.generateHTML(reportData);
      case 'email':
        return await this.generateEmailSummary(reportData);
      case 'gpx':
        return await this.generateGPX(reportData);
    }
  }

  private async generatePDF(data: ReportData): Promise<Buffer> {
    const doc = new PDFDocument({
      size: 'LETTER',
      margins: { top: 50, bottom: 50, left: 50, right: 50 },
      info: {
        Title: `Emergency Trip Report - ${data.trip.name}`,
        Author: 'ArcticGuardian',
        Subject: 'Emergency Search and Rescue Information',
        Keywords: 'SAR, emergency, trip report, missing person'
      }
    });

    const chunks: Buffer[] = [];
    doc.on('data', chunk => chunks.push(chunk));

    // Header
    doc.fontSize(20).font('Helvetica-Bold')
       .text('EMERGENCY TRIP REPORT', { align: 'center' });
    doc.fontSize(12).font('Helvetica')
       .text('ArcticGuardian Trip Safety Platform', { align: 'center' });
    doc.moveDown();

    // Urgent banner if overdue
    if (data.is_overdue) {
      doc.rect(50, doc.y, doc.page.width - 100, 40)
         .fillAndStroke('#ff4444', '#cc0000');
      doc.fillColor('white').fontSize(14).font('Helvetica-Bold')
         .text(`🚨 URGENT: ${data.overdue_hours} HOURS OVERDUE`, { align: 'center' });
      doc.fillColor('black').moveDown();
    }

    // Section 1: Missing Person Information
    this.addSection(doc, '1. MISSING PERSON INFORMATION');
    doc.fontSize(11).font('Helvetica');
    this.addField(doc, 'Name', data.user.name);
    this.addField(doc, 'Age', data.user.age);
    this.addField(doc, 'Phone', data.user.phone);
    this.addField(doc, 'Email', data.user.email);

    if (data.privacy_level === 'standard' && data.user.medical_notes) {
      doc.moveDown();
      doc.font('Helvetica-Bold').text('Medical Considerations:');
      doc.font('Helvetica').text(data.user.medical_notes);
    }

    // Section 2: Trip Details
    this.addSection(doc, '2. TRIP DETAILS');
    this.addField(doc, 'Trip Name', data.trip.name);
    this.addField(doc, 'Activity', data.trip.activity_type);
    this.addField(doc, 'Party Size', data.trip.party_size);
    this.addField(doc, 'Planned Departure', formatDateTime(data.trip.start_date));
    this.addField(doc, 'Expected Return', formatDateTime(data.trip.end_date));
    this.addField(doc, 'Status', data.trip_status, { color: data.is_overdue ? 'red' : 'green' });

    // Section 3: Route & Location (with maps)
    this.addSection(doc, '3. ROUTE & LOCATION');
    this.addField(doc, 'Starting Point', data.trip.starting_point.description);
    this.addField(doc, 'Coordinates', formatCoordinates(data.trip.starting_point.lat, data.trip.starting_point.lng));

    if (data.maps && data.maps.routeMap) {
      doc.addPage();
      doc.image(data.maps.routeMap, {
        fit: [doc.page.width - 100, 400],
        align: 'center'
      });
      doc.moveDown();
      doc.fontSize(9).fillColor('gray')
         .text('Map: Planned route with waypoints', { align: 'center' });
      doc.fillColor('black').fontSize(11);
    }

    // Waypoints
    doc.addPage();
    doc.font('Helvetica-Bold').text('Waypoints:');
    doc.font('Helvetica');
    data.trip.waypoints.forEach((wp, idx) => {
      doc.text(`${idx + 1}. ${wp.label}: ${formatCoordinates(wp.lat, wp.lng)} (${wp.distance_km} km)`);
    });

    // Section 4: Vehicle & Equipment
    this.addSection(doc, '4. VEHICLE & EQUIPMENT');
    if (data.trip.vehicle_info) {
      doc.font('Helvetica-Bold').text('Vehicle Information:');
      doc.font('Helvetica');
      this.addField(doc, 'Make/Model', data.trip.vehicle_info.make_model);
      this.addField(doc, 'Color', data.trip.vehicle_info.color);
      this.addField(doc, 'License Plate', data.trip.vehicle_info.license_plate);
    }

    if (data.packing_list) {
      doc.moveDown();
      doc.font('Helvetica-Bold').text('Equipment Carried:');
      doc.font('Helvetica');
      data.packing_list.forEach(item => {
        doc.text(`✓ ${item.name} (${item.quantity} ${item.unit})`);
      });
    }

    // Section 5: Environmental Conditions
    this.addSection(doc, '5. ENVIRONMENTAL CONDITIONS');
    doc.font('Helvetica-Bold').text('Weather at Departure:');
    doc.font('Helvetica');
    this.addField(doc, 'Temperature', `${data.weather.departure.temp}°C`);
    this.addField(doc, 'Conditions', data.weather.departure.conditions);
    this.addField(doc, 'Wind', `${data.weather.departure.wind} km/h`);

    doc.moveDown();
    doc.font('Helvetica-Bold').text('Current Weather:');
    doc.font('Helvetica');
    this.addField(doc, 'Temperature', `${data.weather.current.temp}°C`);
    this.addField(doc, 'Conditions', data.weather.current.conditions);

    // Section 6: Emergency Contacts
    this.addSection(doc, '6. EMERGENCY CONTACTS');
    data.emergency_contacts.forEach((contact, idx) => {
      doc.font('Helvetica-Bold').text(`${idx === 0 ? 'Primary' : 'Secondary'} Contact:`);
      doc.font('Helvetica');
      this.addField(doc, 'Name', contact.name);
      this.addField(doc, 'Phone', contact.phone);
      this.addField(doc, 'Email', contact.email);
      this.addField(doc, 'Relationship', contact.relationship);
      doc.moveDown();
    });

    // Section 7: SAR Information
    this.addSection(doc, '7. SEARCH & RESCUE INFORMATION');
    doc.font('Helvetica-Bold').text('Recommended SAR Coordinator:');
    doc.font('Helvetica');
    const sarInfo = this.getSARInfoForRegion(data.trip.region);
    this.addField(doc, 'Organization', sarInfo.name);
    this.addField(doc, 'Phone', sarInfo.phone);
    this.addField(doc, 'Dispatch', sarInfo.dispatch);

    doc.moveDown();
    doc.font('Helvetica-Bold').text('RCMP Detachment:');
    const rcmpInfo = this.getRCMPInfoForRegion(data.trip.region);
    doc.font('Helvetica');
    this.addField(doc, 'Detachment', rcmpInfo.name);
    this.addField(doc, 'Phone', rcmpInfo.phone);

    // Section 8: Additional Information
    this.addSection(doc, '8. ADDITIONAL INFORMATION');
    if (data.trip.notes) {
      doc.font('Helvetica-Bold').text('Trip Notes from Planner:');
      doc.font('Helvetica').text(data.trip.notes);
    }

    // Section 9: Attachments (list)
    this.addSection(doc, '9. ATTACHMENTS');
    doc.font('Helvetica').text('Attached files (available in digital version):');
    doc.text('1. High-Resolution Route Map (PDF)');
    doc.text('2. Topographic Map - 1:50,000 scale (PDF)');
    doc.text('3. GPX Route File (for GPS devices)');
    doc.text('4. Weather Forecast Details (PDF)');

    // QR Code for digital version
    doc.addPage();
    const qrCode = await this.generateQRCode(data.emergency_link);
    doc.image(qrCode, {
      fit: [200, 200],
      align: 'center'
    });
    doc.moveDown();
    doc.fontSize(10).text('Scan for live digital version with updates', { align: 'center' });

    // Section 10: Metadata
    this.addSection(doc, '10. REPORT METADATA');
    this.addField(doc, 'Report ID', data.report_id);
    this.addField(doc, 'Generated', formatDateTime(new Date()));
    this.addField(doc, 'Generated For', data.generated_for);
    this.addField(doc, 'Access Link', data.emergency_link);

    // Critical actions footer
    doc.addPage();
    doc.rect(50, 50, doc.page.width - 100, doc.page.height - 150)
       .fillAndStroke('#fff3cd', '#856404');
    doc.fillColor('black').fontSize(14).font('Helvetica-Bold')
       .text('⚠️  CRITICAL ACTIONS FOR EMERGENCY CONTACTS', { align: 'center' });
    doc.moveDown().fontSize(11).font('Helvetica');
    doc.text('1. ✓ Contact RCMP immediately: 911 or local detachment');
    doc.text('2. ✓ Provide this trip report to investigating officer');
    doc.text('3. ✓ Check vehicle is still at trailhead (if safe to do so)');
    doc.text('4. ✓ Attempt contact via satellite device');
    doc.text('5. ✓ Monitor weather and check for trail reports');
    doc.text('6. ✓ Stand by for updates from authorities');
    doc.moveDown();
    doc.font('Helvetica-Bold').text('DO NOT:');
    doc.font('Helvetica');
    doc.text('✗ Attempt solo search (risks additional casualties)');
    doc.text('✗ Disturb vehicle or equipment at trailhead');
    doc.text('✗ Share on social media until authorized by SAR');

    // Finalize PDF
    doc.end();

    return new Promise((resolve) => {
      doc.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
    });
  }

  private async generateHTML(data: ReportData): Promise<string> {
    // Generate HTML version using React component
    const EmergencyReportComponent = () => (
      <div className="emergency-report">
        <header>
          <h1>EMERGENCY TRIP REPORT</h1>
          <p>ArcticGuardian Trip Safety Platform</p>
          {data.is_overdue && (
            <div className="urgent-banner">
              🚨 URGENT: {data.overdue_hours} HOURS OVERDUE
            </div>
          )}
        </header>

        {/* Similar structure to PDF but with HTML/CSS */}
        {/* ... full HTML structure ... */}

      </div>
    );

    const html = renderToString(<EmergencyReportComponent />);

    // Wrap in full HTML document with styles
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Emergency Trip Report - ${data.trip.name}</title>
        <style>${this.getEmergencyReportCSS()}</style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `;
  }

  private async generateEmailSummary(data: ReportData): Promise<string> {
    return `
Subject: 🚨 EMERGENCY TRIP REPORT: ${data.user.name} - ${data.trip.name}

${data.is_overdue ? `⚠️  OVERDUE BY ${data.overdue_hours} HOURS\n\n` : ''}

MISSING PERSON:
Name: ${data.user.name}
Phone: ${data.user.phone}
Email: ${data.user.email}

TRIP DETAILS:
Trip: ${data.trip.name}
Activity: ${data.trip.activity_type}
Expected Return: ${formatDateTime(data.trip.end_date)}
Party Size: ${data.trip.party_size} people

LOCATION:
Starting Point: ${data.trip.starting_point.description}
Coordinates: ${formatCoordinates(data.trip.starting_point.lat, data.trip.starting_point.lng)}

EMERGENCY CONTACTS:
${data.emergency_contacts.map(c => `${c.name}: ${c.phone}`).join('\n')}

IMMEDIATE ACTIONS:
1. Contact RCMP: 911 or ${this.getRCMPInfoForRegion(data.trip.region).phone}
2. Download full trip report: ${data.emergency_link}
3. Provide full report to authorities

FULL EMERGENCY REPORT:
${data.emergency_link}

This email contains a summary. The full report with maps, equipment details,
and SAR information is available at the link above.

---
Generated by ArcticGuardian Trip Safety Platform
Report ID: ${data.report_id}
    `;
  }

  private async generateGPX(data: ReportData): Promise<string> {
    // Generate GPX file with waypoints
    return `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="ArcticGuardian">
  <metadata>
    <name>${data.trip.name} - Emergency Route</name>
    <desc>Planned route for SAR operation</desc>
    <time>${new Date().toISOString()}</time>
  </metadata>
  <trk>
    <name>${data.trip.name}</name>
    <trkseg>
      ${data.trip.waypoints.map(wp => `
      <trkpt lat="${wp.lat}" lon="${wp.lng}">
        <name>${wp.label}</name>
      </trkpt>
      `).join('')}
    </trkseg>
  </trk>
</gpx>`;
  }

  private addSection(doc: PDFDocument, title: string) {
    doc.addPage();
    doc.fontSize(14).font('Helvetica-Bold')
       .fillColor('#1E3A5F')
       .text(title);
    doc.moveDown();
    doc.fillColor('black').fontSize(11);
  }

  private addField(doc: PDFDocument, label: string, value: string, options?: any) {
    doc.font('Helvetica-Bold').text(`${label}: `, { continued: true });
    if (options?.color) {
      doc.fillColor(options.color);
    }
    doc.font('Helvetica').text(value);
    doc.fillColor('black');
  }
}
```

#### 4.4.2 Database Schema Additions

```sql
-- Emergency report access tracking
CREATE TABLE emergency_report_accesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id UUID REFERENCES trips(id) ON DELETE CASCADE,
  access_token VARCHAR(100) UNIQUE NOT NULL,

  generated_for_contact_id UUID REFERENCES emergency_contacts(id),
  generated_at TIMESTAMP DEFAULT NOW(),

  access_count INT DEFAULT 0,
  last_accessed_at TIMESTAMP,
  last_accessed_ip VARCHAR(50),

  format_preferences JSONB, -- pdf, html, email preferences

  is_active BOOLEAN DEFAULT true,
  expires_at TIMESTAMP -- optional expiration
);

-- Track who downloaded which formats
CREATE TABLE emergency_report_downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_access_id UUID REFERENCES emergency_report_accesses(id),

  format VARCHAR(20), -- pdf, html, gpx, email
  downloaded_at TIMESTAMP DEFAULT NOW(),
  downloaded_ip VARCHAR(50),
  user_agent TEXT
);
```

#### 4.4.3 API Endpoints

```
GET /api/trips/:tripId/emergency-report
Auth: Requires ownership or emergency contact access token
Response: {
  pdf_url: string,
  html_url: string,
  gpx_url: string,
  access_token: string,
  shareable_link: string
}

GET /emergency/:accessToken
Public endpoint (no auth)
Query: ?format=pdf|html|email
Response: Stream file or render HTML

POST /api/trips/:tripId/emergency-report/generate
Body: {
  format: 'pdf' | 'html' | 'email' | 'gpx',
  privacy_level: 'standard' | 'limited',
  include_maps: boolean
}
Response: Generated report file

POST /api/emergency/:accessToken/notify
Manually trigger emergency notification emails
Body: {
  additional_recipients?: string[]
}
```

---

### 4.5 Success Metrics

**Adoption**:
- % of trips with emergency reports generated/accessible (target: 100% automatically)
- % of emergency contacts who preview report before trip (target: 30%+)
- Number of emergency report downloads (indicator of actual use in crises)

**Effectiveness**:
- Time saved in SAR operations (survey SAR teams) (target: 30+ minutes avg)
- SAR coordinator satisfaction with report format (survey) (target: 4.5+ / 5)
- % of SAR operations where report was used (target: track real incidents)

**User Confidence**:
- User survey: "Do you feel more confident knowing family has this report?" (target: 90%+ yes)
- Emergency contact survey: "Was this report helpful?" (target: 4.5+ / 5)

---

### 4.6 Future Enhancements

**Phase 4+**:
- **Multi-Language Support**: Generate reports in French, Indigenous languages
- **Voice-Activated Generation**: "Alexa, send my emergency trip report to my dad"
- **Integration with 911/SAR Dispatch Systems**: Direct digital transmission
- **Live Tracking Updates**: If user has satellite tracker, show last known position in real-time
- **Automatic Photo Inclusion**: Pull recent photos from trip for identification
- **Blockchain Verification**: Cryptographically verify report hasn't been tampered with

---

## Implementation Priority & Roadmap

### Recommended Implementation Order

**Phase 2** (Months 2-3):
1. **Emergency Trip Report Export** (highest safety impact, builds trust)
   - Effort: 2 weeks
   - Immediate value to all users
2. **Emergency Supply Calculator** (educational, sticky feature)
   - Effort: 2 weeks
   - Drives engagement

**Phase 3** (Months 4-5):
3. **Seasonal Route Planning** (requires historical data accumulation)
   - Effort: 3 weeks
   - Depends on having trip data to analyze
4. **Trip Buddy Matching** (community feature, requires user base)
   - Effort: 4 weeks
   - More valuable with larger user base

### Total Estimated Effort
- Emergency Trip Report: 2 weeks
- Supply Calculator: 2 weeks
- Seasonal Planning: 3 weeks
- Trip Buddy Matching: 4 weeks
- **Total: 11 weeks (2.5-3 months)**

Staggered implementation recommended to gather user feedback between launches.

---

## Conclusion

These four features represent high-impact additions that significantly enhance ArcticGuardian's value proposition:

1. **Emergency Trip Report Export**: Directly addresses the core mission - getting people home safe - by ensuring SAR has perfect information immediately.

2. **Emergency Supply Calculator**: Prevents incidents through better preparation, educational for newcomers, builds user confidence.

3. **Seasonal Route Planning**: Leverages community data to prevent poor timing decisions, unique differentiator for northern focus.

4. **Trip Buddy Matching**: Reduces solo risk, builds community, creates network effects for platform growth.

All four align with the safety-first mission while also driving user engagement, retention, and differentiation from generic outdoor apps.

Next step: User testing and feedback on feature mockups before full implementation.
