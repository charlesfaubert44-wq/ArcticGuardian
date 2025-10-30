# NorthernGuardian - Database Schema

## Document Information
- **Project**: NorthernGuardian
- **Version**: 1.0
- **Date**: October 30, 2025
- **Database**: PostgreSQL 15+
- **ORM**: Prisma

---

## Table of Contents
1. [Schema Overview](#schema-overview)
2. [Entity Relationship Diagram](#entity-relationship-diagram)
3. [Table Definitions](#table-definitions)
4. [Indexes & Performance](#indexes--performance)
5. [Constraints & Validation](#constraints--validation)
6. [Sample Data](#sample-data)
7. [Migration Strategy](#migration-strategy)

---

## Schema Overview

### Database Design Principles
- **Normalized**: 3NF to reduce redundancy and maintain data integrity
- **Relational**: Clear foreign key relationships for data consistency
- **Scalable**: Indexes on high-query columns, prepared for growth
- **Audit-Ready**: Created/updated timestamps on all tables
- **Soft Deletes**: Important data flagged as deleted, not removed (for recovery)

### Table Count: 8 Core Tables
1. `users` - User accounts and profiles
2. `emergency_contacts` - User's emergency contact information
3. `trips` - Trip plans and details
4. `waypoints` - Route waypoints for trips
5. `trip_shares` - Shared trip links and recipients
6. `trip_views` - Analytics for shared trip views
7. `check_ins` - Trip check-in records
8. `community_inquiries` - Community tier interest forms

### Technology Stack
- **Database**: PostgreSQL 15+ (Neon.tech or Supabase)
- **Extensions**:
  - `uuid-ossp` - UUID generation
  - `postgis` - Geospatial queries (optional for Phase 2)
  - `pg_trgm` - Text search indexing
- **ORM**: Prisma (type-safe queries, migrations)

---

## Entity Relationship Diagram

```
┌─────────────────┐
│     users       │
│─────────────────│
│ id (PK)         │
│ auth0_id        │◄────────┐
│ email           │         │
│ name            │         │
│ phone           │         │
│ profile_photo   │         │
│ created_at      │         │
│ updated_at      │         │
└─────────────────┘         │
         │                  │
         │ 1:N              │ 1:N
         ▼                  │
┌─────────────────┐         │
│emergency_contacts│        │
│─────────────────│         │
│ id (PK)         │         │
│ user_id (FK)────┘         │
│ name            │         │
│ relationship    │         │
│ phone           │         │
│ email           │         │
│ is_primary      │         │
│ created_at      │         │
│ updated_at      │         │
└─────────────────┘         │
                            │
         ┌──────────────────┘
         │
         │ 1:N
         ▼
┌─────────────────┐
│     trips       │
│─────────────────│
│ id (PK)         │
│ user_id (FK)────┘
│ name            │
│ activity_type   │
│ start_date      │
│ end_date        │
│ status          │
│ visibility      │
│ party_size      │
│ starting_point  │ (JSON: {lat, lng, address})
│ destination     │ (JSON: {lat, lng, address})
│ route_geojson   │ (JSONB: GeoJSON)
│ vehicle_info    │
│ equipment       │
│ notes           │
│ distance_km     │
│ created_at      │
│ updated_at      │
│ deleted_at      │ (soft delete)
└─────────────────┘
         │
         │ 1:N
         ├──────────────────┐
         │                  │
         ▼                  ▼
┌─────────────────┐  ┌─────────────────┐
│   waypoints     │  │  trip_shares    │
│─────────────────│  │─────────────────│
│ id (PK)         │  │ id (PK)         │
│ trip_id (FK)────┘  │ trip_id (FK)────┘
│ label           │  │ share_token     │ (UUID)
│ latitude        │  │ recipient_email │
│ longitude       │  │ view_count      │
│ order           │  │ created_at      │
│ notes           │  │ revoked_at      │
│ created_at      │  └─────────────────┘
└─────────────────┘           │
                              │ 1:N
                              ▼
                     ┌─────────────────┐
                     │  trip_views     │
                     │─────────────────│
                     │ id (PK)         │
                     │ trip_share_id(FK)
                     │ viewed_at       │
                     │ ip_hash         │ (anonymized)
                     │ user_agent      │
                     └─────────────────┘

┌─────────────────┐
│   check_ins     │
│─────────────────│
│ id (PK)         │
│ trip_id (FK)────┼──▶ trips.id
│ checked_in_at   │
│ check_in_type   │ (manual, email_link, extended)
│ extension_hours │
│ notes           │
└─────────────────┘

┌─────────────────────┐
│community_inquiries  │
│─────────────────────│
│ id (PK)             │
│ community_name      │
│ contact_name        │
│ email               │
│ phone               │
│ population          │
│ message             │
│ status              │ (new, contacted, demo_scheduled, closed)
│ created_at          │
│ updated_at          │
└─────────────────────┘
```

---

## Table Definitions

### 1. users

**Purpose**: Store user account information and profile data

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth0_id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    profile_photo_url TEXT,
    default_share_preference VARCHAR(50) DEFAULT 'private',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_auth0_id ON users(auth0_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at DESC);

-- Comments
COMMENT ON TABLE users IS 'User accounts and profile information';
COMMENT ON COLUMN users.auth0_id IS 'Auth0 unique user identifier for authentication';
COMMENT ON COLUMN users.default_share_preference IS 'Default visibility for new trips: private, contacts, public';
```

**Field Details**:
- `id`: Sequential integer, primary key
- `auth0_id`: External ID from Auth0 (e.g., "auth0|123456789")
- `email`: User's email address (validated format)
- `name`: Full name or display name
- `phone`: Optional phone number (E.164 format recommended: +1-555-555-5555)
- `profile_photo_url`: URL to profile image (Cloudinary or Vercel Blob)
- `default_share_preference`: Default trip visibility (enum: private, contacts, public)
- `created_at`: Account creation timestamp (UTC)
- `updated_at`: Last profile update timestamp (UTC)

**Example Row**:
```sql
INSERT INTO users (auth0_id, email, name, phone, default_share_preference) VALUES
('auth0|67890', 'sarah.chen@example.com', 'Sarah Chen', '+1-867-555-0123', 'contacts');
```

---

### 2. emergency_contacts

**Purpose**: Store emergency contact information for users

```sql
CREATE TABLE emergency_contacts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    relationship VARCHAR(100),
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_emergency_contacts_user_id ON emergency_contacts(user_id);
CREATE INDEX idx_emergency_contacts_is_primary ON emergency_contacts(user_id, is_primary)
    WHERE is_primary = TRUE;

-- Constraints
ALTER TABLE emergency_contacts ADD CONSTRAINT chk_phone_format
    CHECK (phone ~ '^\+?[1-9]\d{1,14}$');

-- Comments
COMMENT ON TABLE emergency_contacts IS 'User emergency contacts for trip notifications';
COMMENT ON COLUMN emergency_contacts.is_primary IS 'Primary contact for overdue alerts (only one per user)';
```

**Field Details**:
- `id`: Sequential integer, primary key
- `user_id`: Foreign key to users table (cascade delete)
- `name`: Contact's full name
- `relationship`: Relationship to user (e.g., "Spouse", "Parent", "Friend")
- `phone`: Contact's phone number (required, E.164 format)
- `email`: Contact's email address (optional)
- `is_primary`: Boolean flag for primary contact (only one per user)
- `created_at`: Record creation timestamp (UTC)
- `updated_at`: Last update timestamp (UTC)

**Business Rules**:
- Each user can have up to 5 emergency contacts (enforced in application logic)
- Only one contact per user can be marked as `is_primary`
- At least one contact should have an email OR phone (enforced in app)

**Example Row**:
```sql
INSERT INTO emergency_contacts (user_id, name, relationship, phone, email, is_primary) VALUES
(1, 'Jennifer Chen', 'Sister', '+1-867-555-0199', 'jennifer.chen@example.com', TRUE);
```

---

### 3. trips

**Purpose**: Store trip plans with route information and safety details

```sql
CREATE TABLE trips (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    activity_type VARCHAR(50) NOT NULL,
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'draft',
    visibility VARCHAR(50) NOT NULL DEFAULT 'private',
    party_size INTEGER NOT NULL DEFAULT 1,
    starting_point JSONB NOT NULL,
    destination JSONB,
    route_geojson JSONB,
    vehicle_info TEXT,
    equipment TEXT,
    notes TEXT,
    distance_km DECIMAL(10, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

-- Indexes
CREATE INDEX idx_trips_user_id ON trips(user_id);
CREATE INDEX idx_trips_status ON trips(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_trips_start_date ON trips(start_date DESC);
CREATE INDEX idx_trips_end_date ON trips(end_date);
CREATE INDEX idx_trips_activity_type ON trips(activity_type);
CREATE INDEX idx_trips_visibility ON trips(visibility) WHERE visibility = 'public';
CREATE INDEX idx_trips_deleted ON trips(deleted_at) WHERE deleted_at IS NULL;

-- GIN index for GeoJSON searches (Phase 2 with PostGIS)
CREATE INDEX idx_trips_route_geojson ON trips USING GIN (route_geojson);

-- Constraints
ALTER TABLE trips ADD CONSTRAINT chk_end_after_start
    CHECK (end_date > start_date);
ALTER TABLE trips ADD CONSTRAINT chk_party_size
    CHECK (party_size >= 1 AND party_size <= 20);
ALTER TABLE trips ADD CONSTRAINT chk_activity_type
    CHECK (activity_type IN ('hiking', 'camping', 'fishing', 'hunting', 'snowmobiling', 'kayaking', 'canoeing', 'other'));
ALTER TABLE trips ADD CONSTRAINT chk_status
    CHECK (status IN ('draft', 'upcoming', 'in_progress', 'completed', 'overdue', 'canceled'));
ALTER TABLE trips ADD CONSTRAINT chk_visibility
    CHECK (visibility IN ('private', 'contacts', 'public'));

-- Comments
COMMENT ON TABLE trips IS 'Trip plans with routes, safety info, and status';
COMMENT ON COLUMN trips.status IS 'Trip lifecycle: draft → upcoming → in_progress → completed/overdue/canceled';
COMMENT ON COLUMN trips.starting_point IS 'JSON: {lat: number, lng: number, address: string}';
COMMENT ON COLUMN trips.destination IS 'JSON: {lat: number, lng: number, address: string}';
COMMENT ON COLUMN trips.route_geojson IS 'GeoJSON FeatureCollection for route line and points';
COMMENT ON COLUMN trips.deleted_at IS 'Soft delete timestamp (NULL = active, NOT NULL = deleted)';
```

**Field Details**:
- `id`: Sequential integer, primary key
- `user_id`: Foreign key to users table (cascade delete)
- `name`: Trip name/title (e.g., "Great Slave Lake Fishing Trip")
- `activity_type`: Enum: hiking, camping, fishing, hunting, snowmobiling, kayaking, canoeing, other
- `start_date`: Trip start date/time (UTC)
- `end_date`: Expected return date/time (UTC)
- `status`: Enum: draft, upcoming, in_progress, completed, overdue, canceled
- `visibility`: Enum: private, contacts, public
- `party_size`: Number of people (1-20)
- `starting_point`: JSONB: `{lat: 62.4540, lng: -114.3718, address: "Yellowknife, NT"}`
- `destination`: JSONB: `{lat: 62.6789, lng: -113.9876, address: "North Arm"}` (optional)
- `route_geojson`: JSONB: GeoJSON FeatureCollection with LineString and Point features
- `vehicle_info`: Free text (e.g., "Red Toyota Tacoma, NT-ABC123")
- `equipment`: Free text equipment list
- `notes`: Private notes for safety (medical conditions, alternate plans)
- `distance_km`: Calculated route distance in kilometers
- `created_at`: Trip creation timestamp (UTC)
- `updated_at`: Last modification timestamp (UTC)
- `deleted_at`: Soft delete timestamp (NULL = active)

**Status Lifecycle**:
1. **draft**: Trip being created, not finalized
2. **upcoming**: Trip finalized, start_date in future
3. **in_progress**: Current time between start_date and end_date
4. **completed**: User checked in or marked complete
5. **overdue**: Current time > end_date + 2 hours, no check-in
6. **canceled**: User canceled trip

**Example Row**:
```sql
INSERT INTO trips (
    user_id, name, activity_type, start_date, end_date,
    status, visibility, party_size, starting_point, destination,
    route_geojson, vehicle_info, equipment, distance_km
) VALUES (
    1,
    'Cameron Falls Day Hike',
    'hiking',
    '2025-11-15 10:00:00+00',
    '2025-11-15 18:00:00+00',
    'upcoming',
    'contacts',
    2,
    '{"lat": 62.4540, "lng": -114.3718, "address": "Yellowknife, NT"}'::jsonb,
    '{"lat": 62.6789, "lng": -113.9876, "address": "Cameron Falls"}'::jsonb,
    '{"type": "FeatureCollection", "features": [{"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[-114.3718, 62.4540], [-114.2000, 62.5500], [-113.9876, 62.6789]]}}]}'::jsonb,
    'Red Subaru Outback, NT-XYZ789',
    'Daypack, water, first aid kit, GPS, bear spray',
    24.5
);
```

---

### 4. waypoints

**Purpose**: Store labeled waypoints along trip routes

```sql
CREATE TABLE waypoints (
    id SERIAL PRIMARY KEY,
    trip_id INTEGER NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
    label VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 7) NOT NULL,
    longitude DECIMAL(10, 7) NOT NULL,
    "order" INTEGER NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_waypoints_trip_id ON waypoints(trip_id);
CREATE INDEX idx_waypoints_order ON waypoints(trip_id, "order");

-- Constraints
ALTER TABLE waypoints ADD CONSTRAINT chk_latitude
    CHECK (latitude >= -90 AND latitude <= 90);
ALTER TABLE waypoints ADD CONSTRAINT chk_longitude
    CHECK (longitude >= -180 AND longitude <= 180);
ALTER TABLE waypoints ADD CONSTRAINT chk_order_positive
    CHECK ("order" >= 0);
ALTER TABLE waypoints ADD CONSTRAINT uq_trip_order
    UNIQUE (trip_id, "order");

-- Comments
COMMENT ON TABLE waypoints IS 'Labeled waypoints along trip routes';
COMMENT ON COLUMN waypoints."order" IS 'Sequential order of waypoint in route (0-indexed)';
```

**Field Details**:
- `id`: Sequential integer, primary key
- `trip_id`: Foreign key to trips table (cascade delete)
- `label`: Waypoint label (e.g., "Campsite", "Fishing Spot", "Scenic Overlook")
- `latitude`: Latitude (-90 to 90)
- `longitude`: Longitude (-180 to 180)
- `order`: Sequential order in route (0-indexed, unique per trip)
- `notes`: Optional notes about waypoint
- `created_at`: Record creation timestamp (UTC)

**Example Rows**:
```sql
INSERT INTO waypoints (trip_id, label, latitude, longitude, "order", notes) VALUES
(1, 'Trailhead Parking', 62.4540, -114.3718, 0, 'Park at north end of lot'),
(1, 'Creek Crossing', 62.5500, -114.2000, 1, 'Use log bridge, may be slippery'),
(1, 'Summit Viewpoint', 62.6789, -113.9876, 2, 'Great photo spot');
```

---

### 5. trip_shares

**Purpose**: Track shared trip links and recipients

```sql
CREATE TABLE trip_shares (
    id SERIAL PRIMARY KEY,
    trip_id INTEGER NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
    share_token UUID UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    recipient_email VARCHAR(255),
    view_count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    revoked_at TIMESTAMP WITH TIME ZONE
);

-- Indexes
CREATE UNIQUE INDEX idx_trip_shares_token ON trip_shares(share_token);
CREATE INDEX idx_trip_shares_trip_id ON trip_shares(trip_id);
CREATE INDEX idx_trip_shares_recipient ON trip_shares(recipient_email);
CREATE INDEX idx_trip_shares_active ON trip_shares(trip_id) WHERE revoked_at IS NULL;

-- Comments
COMMENT ON TABLE trip_shares IS 'Shared trip links and view tracking';
COMMENT ON COLUMN trip_shares.share_token IS 'Unique UUID for shareable link (non-guessable)';
COMMENT ON COLUMN trip_shares.recipient_email IS 'Optional: email address link was sent to';
COMMENT ON COLUMN trip_shares.view_count IS 'Cached count of views (incremented from trip_views)';
COMMENT ON COLUMN trip_shares.revoked_at IS 'If set, link is no longer valid';
```

**Field Details**:
- `id`: Sequential integer, primary key
- `trip_id`: Foreign key to trips table (cascade delete)
- `share_token`: UUID v4 for unique, non-guessable share links
- `recipient_email`: Optional email of recipient (if shared via email)
- `view_count`: Number of times shared link was viewed
- `created_at`: Share creation timestamp (UTC)
- `revoked_at`: If set, share link is revoked (NULL = active)

**Example Row**:
```sql
INSERT INTO trip_shares (trip_id, share_token, recipient_email) VALUES
(1, '550e8400-e29b-41d4-a716-446655440000', 'jennifer.chen@example.com');
```

---

### 6. trip_views

**Purpose**: Track individual views of shared trips (analytics)

```sql
CREATE TABLE trip_views (
    id SERIAL PRIMARY KEY,
    trip_share_id INTEGER NOT NULL REFERENCES trip_shares(id) ON DELETE CASCADE,
    viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_hash VARCHAR(64),
    user_agent TEXT
);

-- Indexes
CREATE INDEX idx_trip_views_share_id ON trip_views(trip_share_id);
CREATE INDEX idx_trip_views_viewed_at ON trip_views(viewed_at DESC);

-- Trigger to update view_count in trip_shares
CREATE OR REPLACE FUNCTION increment_share_view_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE trip_shares
    SET view_count = view_count + 1
    WHERE id = NEW.trip_share_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_increment_view_count
AFTER INSERT ON trip_views
FOR EACH ROW
EXECUTE FUNCTION increment_share_view_count();

-- Comments
COMMENT ON TABLE trip_views IS 'Individual view events for shared trips (analytics)';
COMMENT ON COLUMN trip_views.ip_hash IS 'SHA256 hash of IP address (anonymized for privacy)';
```

**Field Details**:
- `id`: Sequential integer, primary key
- `trip_share_id`: Foreign key to trip_shares table (cascade delete)
- `viewed_at`: Timestamp of view (UTC)
- `ip_hash`: SHA256 hash of viewer IP address (privacy-friendly, prevents tracking)
- `user_agent`: Browser/device user agent string

**Privacy Note**: IP addresses are hashed (one-way) to prevent tracking while allowing abuse detection.

**Example Row**:
```sql
INSERT INTO trip_views (trip_share_id, ip_hash, user_agent) VALUES
(1, 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)');
```

---

### 7. check_ins

**Purpose**: Record trip check-ins and deadline extensions

```sql
CREATE TABLE check_ins (
    id SERIAL PRIMARY KEY,
    trip_id INTEGER NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
    checked_in_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    check_in_type VARCHAR(50) NOT NULL,
    extension_hours INTEGER,
    notes TEXT
);

-- Indexes
CREATE INDEX idx_check_ins_trip_id ON check_ins(trip_id);
CREATE INDEX idx_check_ins_checked_in_at ON check_ins(checked_in_at DESC);

-- Constraints
ALTER TABLE check_ins ADD CONSTRAINT chk_check_in_type
    CHECK (check_in_type IN ('manual', 'email_link', 'extended', 'auto'));
ALTER TABLE check_ins ADD CONSTRAINT chk_extension_hours
    CHECK (extension_hours IS NULL OR (extension_hours > 0 AND extension_hours <= 72));

-- Comments
COMMENT ON TABLE check_ins IS 'Trip check-in events and deadline extensions';
COMMENT ON COLUMN check_ins.check_in_type IS 'manual (app), email_link (from email), extended (deadline extended), auto (system)';
COMMENT ON COLUMN check_ins.extension_hours IS 'If check_in_type=extended, hours added to deadline';
```

**Field Details**:
- `id`: Sequential integer, primary key
- `trip_id`: Foreign key to trips table (cascade delete)
- `checked_in_at`: Check-in timestamp (UTC)
- `check_in_type`: Enum: manual, email_link, extended, auto
  - **manual**: User checked in via app
  - **email_link**: User clicked "I'm safe" link in email
  - **extended**: User extended trip deadline
  - **auto**: System marked as complete (fallback)
- `extension_hours`: If extended, number of hours added (4, 8, 12, 24)
- `notes`: Optional user notes ("Running late but safe")

**Example Row**:
```sql
INSERT INTO check_ins (trip_id, check_in_type, notes) VALUES
(1, 'email_link', 'Made it back safely, great trip!');
```

---

### 8. community_inquiries

**Purpose**: Store community tier interest inquiries

```sql
CREATE TABLE community_inquiries (
    id SERIAL PRIMARY KEY,
    community_name VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    population INTEGER,
    message TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_community_inquiries_status ON community_inquiries(status);
CREATE INDEX idx_community_inquiries_created_at ON community_inquiries(created_at DESC);
CREATE INDEX idx_community_inquiries_email ON community_inquiries(email);

-- Constraints
ALTER TABLE community_inquiries ADD CONSTRAINT chk_inquiry_status
    CHECK (status IN ('new', 'contacted', 'demo_scheduled', 'pilot', 'closed'));

-- Comments
COMMENT ON TABLE community_inquiries IS 'Community tier interest form submissions';
COMMENT ON COLUMN community_inquiries.status IS 'Lead status: new → contacted → demo_scheduled → pilot/closed';
```

**Field Details**:
- `id`: Sequential integer, primary key
- `community_name`: Name of municipality/hamlet (e.g., "Town of Yellowknife")
- `contact_name`: Contact person's name
- `email`: Contact email
- `phone`: Contact phone (optional)
- `population`: Community population size (helps with pricing)
- `message`: Inquiry message/notes
- `status`: Enum: new, contacted, demo_scheduled, pilot, closed
- `created_at`: Inquiry submission timestamp (UTC)
- `updated_at`: Last status update timestamp (UTC)

**Example Row**:
```sql
INSERT INTO community_inquiries (community_name, contact_name, email, phone, population, message, status) VALUES
('Hamlet of Fort Simpson', 'Michael Nahanni', 'michael.nahanni@fortsimpson.ca', '+1-867-695-2253', 1200, 'Interested in community dashboard for winter safety', 'new');
```

---

## Indexes & Performance

### Primary Indexes (Already Defined Above)

**High-Priority Indexes**:
1. `idx_trips_user_id` - Fast user trip lookups
2. `idx_trips_status` - Filter by status (dashboard)
3. `idx_trips_start_date` - Sort upcoming trips
4. `idx_trips_end_date` - Find overdue trips (cron jobs)
5. `idx_trip_shares_token` - Fast shared link lookups
6. `idx_emergency_contacts_user_id` - Fast emergency contact retrieval

### Composite Indexes (For Complex Queries)

```sql
-- Find active trips for a user
CREATE INDEX idx_trips_user_status ON trips(user_id, status)
    WHERE deleted_at IS NULL;

-- Find upcoming trips in date range
CREATE INDEX idx_trips_upcoming ON trips(start_date, status)
    WHERE status IN ('upcoming', 'in_progress') AND deleted_at IS NULL;

-- Find overdue trips for cron job
CREATE INDEX idx_trips_overdue_check ON trips(end_date, status)
    WHERE status = 'in_progress' AND deleted_at IS NULL;

-- Find public trips (Phase 2 for trip discovery)
CREATE INDEX idx_trips_public_visible ON trips(visibility, start_date DESC)
    WHERE visibility = 'public' AND deleted_at IS NULL;
```

### Full-Text Search (Phase 2)

```sql
-- Full-text search on trip names and notes
CREATE INDEX idx_trips_search ON trips USING GIN (to_tsvector('english', name || ' ' || COALESCE(notes, '')));

-- Search query example:
-- SELECT * FROM trips WHERE to_tsvector('english', name || ' ' || COALESCE(notes, '')) @@ to_tsquery('english', 'fishing & lake');
```

### Geospatial Indexes (Phase 2 with PostGIS)

```sql
-- Enable PostGIS extension
CREATE EXTENSION IF NOT EXISTS postgis;

-- Add geometry column for starting point
ALTER TABLE trips ADD COLUMN starting_point_geom GEOMETRY(Point, 4326);

-- Update geometry from JSONB (one-time migration)
UPDATE trips SET starting_point_geom = ST_SetSRID(
    ST_MakePoint(
        (starting_point->>'lng')::float,
        (starting_point->>'lat')::float
    ), 4326
);

-- Create spatial index
CREATE INDEX idx_trips_starting_point_geom ON trips USING GIST (starting_point_geom);

-- Find trips within 50km of a location
-- SELECT * FROM trips WHERE ST_DWithin(starting_point_geom, ST_SetSRID(ST_MakePoint(-114.3718, 62.4540), 4326)::geography, 50000);
```

---

## Constraints & Validation

### Database-Level Constraints

**Primary Keys**: All tables have auto-incrementing SERIAL primary keys

**Foreign Keys**: All relationships enforce referential integrity with CASCADE delete
```sql
-- Example: Deleting a user deletes all their trips, contacts, etc.
user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
```

**Unique Constraints**:
```sql
-- Email must be unique
ALTER TABLE users ADD CONSTRAINT uq_users_email UNIQUE (email);

-- Auth0 ID must be unique
ALTER TABLE users ADD CONSTRAINT uq_users_auth0_id UNIQUE (auth0_id);

-- Share tokens must be unique
ALTER TABLE trip_shares ADD CONSTRAINT uq_share_token UNIQUE (share_token);

-- Only one primary emergency contact per user
-- (Enforced via partial index and application logic)
```

**Check Constraints**:
- Date validation: `end_date > start_date`
- Enum validation: `status IN ('draft', 'upcoming', ...)`
- Range validation: `party_size >= 1 AND party_size <= 20`
- Geospatial validation: `latitude BETWEEN -90 AND 90`

### Application-Level Validation

**Enforced in Prisma Schema / API Layer**:
1. **Email format**: Regex validation for valid email addresses
2. **Phone format**: E.164 format (+1-XXX-XXX-XXXX)
3. **Business rules**:
   - User can have max 5 emergency contacts
   - Trip names max 100 characters
   - Equipment/notes max 1000 characters
   - Only trip owner can edit/delete trips
   - Can't delete trips in "in_progress" status (must complete/cancel first)

---

## Sample Data

### Seed Data for Development

```sql
-- Insert test user
INSERT INTO users (auth0_id, email, name, phone, default_share_preference) VALUES
('auth0|test123', 'test.user@example.com', 'Test User', '+1-867-555-0100', 'contacts')
RETURNING id; -- Returns user_id = 1

-- Insert emergency contacts
INSERT INTO emergency_contacts (user_id, name, relationship, phone, email, is_primary) VALUES
(1, 'Jane Doe', 'Spouse', '+1-867-555-0101', 'jane.doe@example.com', TRUE),
(1, 'John Smith', 'Friend', '+1-867-555-0102', 'john.smith@example.com', FALSE);

-- Insert sample trip
INSERT INTO trips (
    user_id, name, activity_type, start_date, end_date,
    status, visibility, party_size, starting_point, destination,
    vehicle_info, equipment, notes, distance_km
) VALUES (
    1,
    'Hidden Lake Trail Hike',
    'hiking',
    NOW() + INTERVAL '2 days',
    NOW() + INTERVAL '2 days 8 hours',
    'upcoming',
    'contacts',
    3,
    '{"lat": 62.4540, "lng": -114.3718, "address": "Yellowknife, NT"}'::jsonb,
    '{"lat": 62.5840, "lng": -114.2518, "address": "Hidden Lake"}'::jsonb,
    'Blue Honda CR-V, NT-ABC123',
    'Daypacks, water, snacks, first aid, GPS, bear spray, trekking poles',
    'Trail may be muddy after recent rain',
    15.2
) RETURNING id; -- Returns trip_id = 1

-- Insert waypoints
INSERT INTO waypoints (trip_id, label, latitude, longitude, "order", notes) VALUES
(1, 'Trailhead', 62.4540, -114.3718, 0, 'Park at designated lot'),
(1, 'Forest Junction', 62.5190, -114.3118, 1, 'Turn right at fork'),
(1, 'Hidden Lake', 62.5840, -114.2518, 2, 'Scenic viewpoint, photo spot');

-- Insert trip share
INSERT INTO trip_shares (trip_id, share_token, recipient_email) VALUES
(1, gen_random_uuid(), 'jane.doe@example.com');

-- Insert community inquiry
INSERT INTO community_inquiries (community_name, contact_name, email, phone, population, message, status) VALUES
('Town of Inuvik', 'Sarah Thompson', 'sarah.thompson@inuvik.ca', '+1-867-777-8600', 3200, 'Interested in community dashboard for SAR operations', 'new');
```

---

## Migration Strategy

### Prisma Schema (prisma/schema.prisma)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id                     Int                 @id @default(autoincrement())
  auth0Id                String              @unique @map("auth0_id")
  email                  String              @unique
  name                   String
  phone                  String?
  profilePhotoUrl        String?             @map("profile_photo_url")
  defaultSharePreference String              @default("private") @map("default_share_preference")
  createdAt              DateTime            @default(now()) @map("created_at")
  updatedAt              DateTime            @updatedAt @map("updated_at")

  emergencyContacts      EmergencyContact[]
  trips                  Trip[]

  @@index([auth0Id])
  @@index([email])
  @@map("users")
}

model EmergencyContact {
  id           Int      @id @default(autoincrement())
  userId       Int      @map("user_id")
  name         String
  relationship String?
  phone        String
  email        String?
  isPrimary    Boolean  @default(false) @map("is_primary")
  createdAt    DateTime @default(now()) @map("created_at")
  updatedAt    DateTime @updatedAt @map("updated_at")

  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@map("emergency_contacts")
}

model Trip {
  id             Int       @id @default(autoincrement())
  userId         Int       @map("user_id")
  name           String
  activityType   String    @map("activity_type")
  startDate      DateTime  @map("start_date")
  endDate        DateTime  @map("end_date")
  status         String    @default("draft")
  visibility     String    @default("private")
  partySize      Int       @default(1) @map("party_size")
  startingPoint  Json      @map("starting_point")
  destination    Json?
  routeGeojson   Json?     @map("route_geojson")
  vehicleInfo    String?   @map("vehicle_info")
  equipment      String?
  notes          String?
  distanceKm     Decimal?  @map("distance_km") @db.Decimal(10, 2)
  createdAt      DateTime  @default(now()) @map("created_at")
  updatedAt      DateTime  @updatedAt @map("updated_at")
  deletedAt      DateTime? @map("deleted_at")

  user           User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  waypoints      Waypoint[]
  shares         TripShare[]
  checkIns       CheckIn[]

  @@index([userId])
  @@index([status])
  @@index([startDate])
  @@index([endDate])
  @@map("trips")
}

model Waypoint {
  id         Int      @id @default(autoincrement())
  tripId     Int      @map("trip_id")
  label      String
  latitude   Decimal  @db.Decimal(10, 7)
  longitude  Decimal  @db.Decimal(10, 7)
  order      Int
  notes      String?
  createdAt  DateTime @default(now()) @map("created_at")

  trip       Trip     @relation(fields: [tripId], references: [id], onDelete: Cascade)

  @@unique([tripId, order])
  @@index([tripId])
  @@map("waypoints")
}

model TripShare {
  id             Int        @id @default(autoincrement())
  tripId         Int        @map("trip_id")
  shareToken     String     @unique @default(uuid()) @map("share_token") @db.Uuid
  recipientEmail String?    @map("recipient_email")
  viewCount      Int        @default(0) @map("view_count")
  createdAt      DateTime   @default(now()) @map("created_at")
  revokedAt      DateTime?  @map("revoked_at")

  trip           Trip       @relation(fields: [tripId], references: [id], onDelete: Cascade)
  views          TripView[]

  @@index([tripId])
  @@index([shareToken])
  @@map("trip_shares")
}

model TripView {
  id          Int       @id @default(autoincrement())
  tripShareId Int       @map("trip_share_id")
  viewedAt    DateTime  @default(now()) @map("viewed_at")
  ipHash      String?   @map("ip_hash")
  userAgent   String?   @map("user_agent")

  tripShare   TripShare @relation(fields: [tripShareId], references: [id], onDelete: Cascade)

  @@index([tripShareId])
  @@map("trip_views")
}

model CheckIn {
  id             Int      @id @default(autoincrement())
  tripId         Int      @map("trip_id")
  checkedInAt    DateTime @default(now()) @map("checked_in_at")
  checkInType    String   @map("check_in_type")
  extensionHours Int?     @map("extension_hours")
  notes          String?

  trip           Trip     @relation(fields: [tripId], references: [id], onDelete: Cascade)

  @@index([tripId])
  @@map("check_ins")
}

model CommunityInquiry {
  id            Int      @id @default(autoincrement())
  communityName String   @map("community_name")
  contactName   String   @map("contact_name")
  email         String
  phone         String?
  population    Int?
  message       String?
  status        String   @default("new")
  createdAt     DateTime @default(now()) @map("created_at")
  updatedAt     DateTime @updatedAt @map("updated_at")

  @@index([status])
  @@index([createdAt])
  @@map("community_inquiries")
}
```

### Migration Commands

```bash
# Initialize Prisma
npx prisma init

# Create migration from schema
npx prisma migrate dev --name init

# Apply migrations to production
npx prisma migrate deploy

# Generate Prisma Client
npx prisma generate

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database (development only)
npx prisma migrate reset
```

### Migration Timeline

**Phase 1 (MVP - Week 1)**:
- Create all 8 core tables
- Add basic indexes
- Seed development data

**Phase 2 (Months 2-3)**:
- Add full-text search indexes
- Add PostGIS extension and spatial indexes
- Add tables for weather cache, trail conditions

**Phase 3 (Months 4-6)**:
- Add tables for social features (follows, comments, photos)
- Add tables for real-time tracking (location_pings)
- Optimize indexes based on production query patterns

---

## Backup & Recovery

### Automated Backups

**Neon.tech**:
- Automatic daily backups (7-day retention)
- Point-in-time recovery (PITR) available on paid plans

**Supabase**:
- Daily backups (7-day retention on free tier)
- Manual backup via dashboard

### Manual Backup Command

```bash
# Full database dump
pg_dump -h <host> -U <user> -d <database> -F c -f backup_$(date +%Y%m%d).dump

# Restore from dump
pg_restore -h <host> -U <user> -d <database> -c backup_20251030.dump

# Backup specific table
pg_dump -h <host> -U <user> -d <database> -t trips -F c -f trips_backup.dump
```

### Disaster Recovery Plan

1. **Data Loss < 24 hours**: Restore from daily backup (max 24h data loss)
2. **Database Corruption**: Restore to new database, update connection string
3. **Accidental Delete**: Use soft deletes (`deleted_at`), recover flagged records
4. **Schema Migration Failure**: Rollback migration, fix, re-run
5. **Downtime Target**: < 1 hour recovery time for critical issues

---

## Performance Benchmarks

### Target Query Performance

| Query Type | Target Time | Example |
|------------|-------------|---------|
| Get user by ID | < 10ms | `SELECT * FROM users WHERE id = 1` |
| List user trips | < 50ms | `SELECT * FROM trips WHERE user_id = 1 AND deleted_at IS NULL` |
| Get trip details | < 30ms | `SELECT * FROM trips WHERE id = 42` (with joins for waypoints, shares) |
| Find overdue trips | < 100ms | `SELECT * FROM trips WHERE status = 'in_progress' AND end_date < NOW() - INTERVAL '2 hours'` |
| Insert new trip | < 100ms | `INSERT INTO trips (...) VALUES (...)` |
| Share trip | < 50ms | `INSERT INTO trip_shares (...) VALUES (...)` |

### Optimization Strategies

1. **Indexes**: Ensure all foreign keys and filter columns indexed
2. **Connection Pooling**: Use Prisma's connection pooling (max 10 connections for MVP)
3. **Caching**: Cache frequently accessed data in Redis (user profiles, public trips)
4. **Query Optimization**: Use `EXPLAIN ANALYZE` to identify slow queries
5. **Pagination**: Limit large result sets (20-50 items per page)

---

## Next Steps

1. **Review Schema**: Ensure all fields and relationships match PRD requirements
2. **Initialize Prisma**: Set up Prisma in Next.js project
3. **Create Migration**: Run `npx prisma migrate dev --name init`
4. **Seed Database**: Create seed script with sample data
5. **Test Queries**: Verify all CRUD operations work as expected
6. **Document Changes**: Update this file as schema evolves

---

**End of Database Schema Document**
