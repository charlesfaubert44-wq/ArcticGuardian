# NorthernGuardian - API Specification

## Document Information
- **Project**: NorthernGuardian
- **Version**: 1.0
- **Date**: October 30, 2025
- **API Base URL**: `https://northernguardian.ca/api`
- **API Style**: RESTful
- **Authentication**: Auth0 JWT tokens

---

## Table of Contents
1. [API Overview](#api-overview)
2. [Authentication](#authentication)
3. [Error Handling](#error-handling)
4. [Rate Limiting](#rate-limiting)
5. [Endpoints](#endpoints)
   - [Authentication](#authentication-endpoints)
   - [Users](#user-endpoints)
   - [Emergency Contacts](#emergency-contact-endpoints)
   - [Trips](#trip-endpoints)
   - [Waypoints](#waypoint-endpoints)
   - [Trip Sharing](#trip-sharing-endpoints)
   - [Check-Ins](#check-in-endpoints)
   - [Community](#community-endpoints)
   - [Public Routes](#public-routes)
   - [Cron Jobs](#cron-job-endpoints)
6. [Data Models](#data-models)
7. [Testing & Examples](#testing--examples)

---

## API Overview

### Design Principles
- **RESTful**: Standard HTTP methods (GET, POST, PATCH, DELETE)
- **JSON**: All requests and responses use `application/json`
- **Stateless**: Each request contains all necessary authentication
- **Idempotent**: Safe retry behavior for all mutations
- **Versioned**: API version in URL path (future: `/api/v1/...`)

### HTTP Methods
- **GET**: Retrieve resources (safe, idempotent, cacheable)
- **POST**: Create new resources or trigger actions
- **PATCH**: Partially update existing resources
- **DELETE**: Remove resources (soft delete for most entities)

### Response Format
All responses follow this structure:

**Success Response**:
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2025-10-30T15:30:00Z",
    "requestId": "req_abc123"
  }
}
```

**Error Response**:
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "End date must be after start date",
    "details": [
      {
        "field": "end_date",
        "message": "Must be after start_date"
      }
    ]
  },
  "meta": {
    "timestamp": "2025-10-30T15:30:00Z",
    "requestId": "req_abc123"
  }
}
```

---

## Authentication

### Auth0 JWT Authentication

**How It Works**:
1. User logs in via Auth0 (email/password or social login)
2. Auth0 returns JWT access token
3. Client includes token in `Authorization` header for all API requests
4. Server validates token and extracts user identity

### Headers Required

```http
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

### Example Token Payload
```json
{
  "sub": "auth0|67890",
  "email": "user@example.com",
  "email_verified": true,
  "iat": 1698753000,
  "exp": 1698839400
}
```

### Public Routes (No Auth Required)
- `GET /api/shared/:token` - View shared trip
- `POST /api/community/inquiry` - Submit community inquiry
- `GET /api/health` - Health check

### Protected Routes
All other routes require valid JWT token.

**401 Unauthorized Response**:
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired authentication token"
  }
}
```

---

## Error Handling

### Standard Error Codes

| HTTP Status | Error Code | Description |
|-------------|------------|-------------|
| 400 | `VALIDATION_ERROR` | Invalid input data |
| 401 | `UNAUTHORIZED` | Missing or invalid auth token |
| 403 | `FORBIDDEN` | Authenticated but not authorized |
| 404 | `NOT_FOUND` | Resource does not exist |
| 409 | `CONFLICT` | Resource conflict (e.g., duplicate email) |
| 422 | `UNPROCESSABLE_ENTITY` | Semantic validation error |
| 429 | `RATE_LIMIT_EXCEEDED` | Too many requests |
| 500 | `INTERNAL_SERVER_ERROR` | Server error |
| 503 | `SERVICE_UNAVAILABLE` | Temporary unavailability |

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid trip data",
    "details": [
      {
        "field": "start_date",
        "message": "Must be a future date"
      },
      {
        "field": "party_size",
        "message": "Must be between 1 and 20"
      }
    ]
  },
  "meta": {
    "timestamp": "2025-10-30T15:30:00Z",
    "requestId": "req_abc123"
  }
}
```

---

## Rate Limiting

### Limits
- **Authenticated Users**: 100 requests per 15 minutes
- **Public Routes**: 20 requests per 15 minutes per IP
- **Cron Jobs**: No limit (authenticated via secret)

### Rate Limit Headers
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1698753900
```

### Rate Limit Exceeded Response
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Try again in 5 minutes.",
    "retryAfter": 300
  }
}
```

---

## Endpoints

## Authentication Endpoints

### POST /api/auth/signup
Create a new user account (handled by Auth0, documented for reference)

**Auth Required**: No

**Request Body**:
```json
{
  "email": "sarah.chen@example.com",
  "password": "SecurePass123!",
  "name": "Sarah Chen",
  "phone": "+1-867-555-0123"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 42,
      "auth0_id": "auth0|12345",
      "email": "sarah.chen@example.com",
      "name": "Sarah Chen",
      "phone": "+1-867-555-0123",
      "created_at": "2025-10-30T15:30:00Z"
    },
    "requiresEmailVerification": true
  }
}
```

**Errors**:
- `409 CONFLICT`: Email already registered
- `400 VALIDATION_ERROR`: Invalid email format or weak password

---

### POST /api/auth/login
Authenticate user (handled by Auth0)

**Auth Required**: No

**Request Body**:
```json
{
  "email": "sarah.chen@example.com",
  "password": "SecurePass123!"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "v1.MRqEAb3ht...",
    "expiresIn": 86400,
    "tokenType": "Bearer",
    "user": {
      "id": 42,
      "email": "sarah.chen@example.com",
      "name": "Sarah Chen"
    }
  }
}
```

**Errors**:
- `401 UNAUTHORIZED`: Invalid credentials

---

### POST /api/auth/logout
End user session

**Auth Required**: Yes

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### GET /api/auth/me
Get current authenticated user information

**Auth Required**: Yes

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 42,
    "auth0_id": "auth0|12345",
    "email": "sarah.chen@example.com",
    "name": "Sarah Chen",
    "phone": "+1-867-555-0123",
    "profile_photo_url": "https://cloudinary.com/...",
    "default_share_preference": "contacts",
    "created_at": "2025-10-30T15:30:00Z",
    "trip_count": 5,
    "active_trips": 1
  }
}
```

---

## User Endpoints

### GET /api/users/:id
Get user profile (public information only)

**Auth Required**: Yes

**Path Parameters**:
- `id` (integer): User ID

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 42,
    "name": "Sarah Chen",
    "profile_photo_url": "https://cloudinary.com/...",
    "created_at": "2025-10-30T15:30:00Z"
  }
}
```

**Errors**:
- `404 NOT_FOUND`: User does not exist

---

### PATCH /api/users/:id
Update user profile

**Auth Required**: Yes (must be own profile)

**Path Parameters**:
- `id` (integer): User ID

**Request Body** (partial updates allowed):
```json
{
  "name": "Sarah Chen-Smith",
  "phone": "+1-867-555-0199",
  "default_share_preference": "public"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 42,
    "name": "Sarah Chen-Smith",
    "phone": "+1-867-555-0199",
    "default_share_preference": "public",
    "updated_at": "2025-10-30T16:00:00Z"
  }
}
```

**Errors**:
- `403 FORBIDDEN`: Cannot update another user's profile
- `400 VALIDATION_ERROR`: Invalid phone format

---

### DELETE /api/users/:id
Delete user account (soft delete)

**Auth Required**: Yes (must be own account)

**Path Parameters**:
- `id` (integer): User ID

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Account deleted successfully. Data will be permanently removed in 30 days."
}
```

---

## Emergency Contact Endpoints

### POST /api/users/:id/emergency-contacts
Add emergency contact

**Auth Required**: Yes (must be own profile)

**Path Parameters**:
- `id` (integer): User ID

**Request Body**:
```json
{
  "name": "Jennifer Chen",
  "relationship": "Sister",
  "phone": "+1-867-555-0199",
  "email": "jennifer.chen@example.com",
  "is_primary": true
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": 15,
    "user_id": 42,
    "name": "Jennifer Chen",
    "relationship": "Sister",
    "phone": "+1-867-555-0199",
    "email": "jennifer.chen@example.com",
    "is_primary": true,
    "created_at": "2025-10-30T15:30:00Z"
  }
}
```

**Errors**:
- `400 VALIDATION_ERROR`: Invalid phone format
- `422 UNPROCESSABLE_ENTITY`: User already has 5 contacts (max limit)

---

### GET /api/users/:id/emergency-contacts
List all emergency contacts for user

**Auth Required**: Yes (must be own profile)

**Path Parameters**:
- `id` (integer): User ID

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "contacts": [
      {
        "id": 15,
        "name": "Jennifer Chen",
        "relationship": "Sister",
        "phone": "+1-867-555-0199",
        "email": "jennifer.chen@example.com",
        "is_primary": true,
        "created_at": "2025-10-30T15:30:00Z"
      },
      {
        "id": 16,
        "name": "Mark Johnson",
        "relationship": "Friend",
        "phone": "+1-867-555-0200",
        "email": "mark.j@example.com",
        "is_primary": false,
        "created_at": "2025-10-30T15:35:00Z"
      }
    ],
    "total": 2
  }
}
```

---

### PATCH /api/users/:id/emergency-contacts/:contactId
Update emergency contact

**Auth Required**: Yes (must be own profile)

**Path Parameters**:
- `id` (integer): User ID
- `contactId` (integer): Emergency contact ID

**Request Body** (partial updates):
```json
{
  "phone": "+1-867-555-0299",
  "is_primary": false
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 15,
    "name": "Jennifer Chen",
    "phone": "+1-867-555-0299",
    "is_primary": false,
    "updated_at": "2025-10-30T16:00:00Z"
  }
}
```

**Errors**:
- `404 NOT_FOUND`: Contact does not exist
- `403 FORBIDDEN`: Cannot update another user's contacts

---

### DELETE /api/users/:id/emergency-contacts/:contactId
Delete emergency contact

**Auth Required**: Yes (must be own profile)

**Path Parameters**:
- `id` (integer): User ID
- `contactId` (integer): Emergency contact ID

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Emergency contact deleted"
}
```

---

## Trip Endpoints

### POST /api/trips
Create new trip

**Auth Required**: Yes

**Request Body**:
```json
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
  "route_geojson": {
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
      "label": "Lunch stop - East shore",
      "lat": 62.5500,
      "lng": -114.2000,
      "order": 0,
      "notes": "Good fishing spot"
    }
  ],
  "vehicle_info": "Red Toyota Tacoma, NT-ABC123",
  "equipment": "Boat, fishing gear, 3-day food supply, satellite phone",
  "notes": "Will check in via satellite phone each evening",
  "visibility": "contacts",
  "emergency_contact_ids": [15, 16]
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": 42,
    "user_id": 5,
    "name": "Great Slave Lake Fishing Trip",
    "activity_type": "fishing",
    "start_date": "2025-11-15T08:00:00Z",
    "end_date": "2025-11-17T18:00:00Z",
    "status": "upcoming",
    "visibility": "contacts",
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
    "distance_km": 47.3,
    "vehicle_info": "Red Toyota Tacoma, NT-ABC123",
    "equipment": "Boat, fishing gear, 3-day food supply, satellite phone",
    "notes": "Will check in via satellite phone each evening",
    "waypoints": [
      {
        "id": 100,
        "label": "Lunch stop - East shore",
        "latitude": 62.5500,
        "longitude": -114.2000,
        "order": 0,
        "notes": "Good fishing spot"
      }
    ],
    "created_at": "2025-10-30T15:30:00Z",
    "updated_at": "2025-10-30T15:30:00Z"
  }
}
```

**Errors**:
- `400 VALIDATION_ERROR`: Invalid dates, party size, or required fields missing
- `422 UNPROCESSABLE_ENTITY`: End date before start date

---

### GET /api/trips
List user's trips (with filters)

**Auth Required**: Yes

**Query Parameters**:
- `status` (string, optional): Filter by status (upcoming, in_progress, completed, overdue)
- `activity_type` (string, optional): Filter by activity (hiking, camping, etc.)
- `start_date_from` (ISO date, optional): Trips starting after this date
- `start_date_to` (ISO date, optional): Trips starting before this date
- `page` (integer, default: 1): Page number for pagination
- `limit` (integer, default: 20, max: 100): Items per page

**Example Request**:
```http
GET /api/trips?status=upcoming&activity_type=hiking&limit=10
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "trips": [
      {
        "id": 15,
        "name": "Cameron Falls Day Hike",
        "activity_type": "hiking",
        "start_date": "2025-11-05T10:00:00Z",
        "end_date": "2025-11-05T18:00:00Z",
        "status": "upcoming",
        "party_size": 2,
        "distance_km": 12.5,
        "thumbnail_map_url": "https://api.mapbox.com/styles/v1/...",
        "created_at": "2025-10-28T12:00:00Z"
      },
      {
        "id": 20,
        "name": "Hidden Lake Trail",
        "activity_type": "hiking",
        "start_date": "2025-11-10T09:00:00Z",
        "end_date": "2025-11-10T17:00:00Z",
        "status": "upcoming",
        "party_size": 3,
        "distance_km": 15.2,
        "thumbnail_map_url": "https://api.mapbox.com/styles/v1/...",
        "created_at": "2025-10-29T14:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 2,
      "totalPages": 1
    }
  }
}
```

---

### GET /api/trips/:id
Get trip details

**Auth Required**: Yes (must be trip owner or have shared access)

**Path Parameters**:
- `id` (integer): Trip ID

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 42,
    "user_id": 5,
    "name": "Great Slave Lake Fishing Trip",
    "activity_type": "fishing",
    "start_date": "2025-11-15T08:00:00Z",
    "end_date": "2025-11-17T18:00:00Z",
    "status": "upcoming",
    "visibility": "contacts",
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
    "route_geojson": {
      "type": "FeatureCollection",
      "features": [...]
    },
    "distance_km": 47.3,
    "vehicle_info": "Red Toyota Tacoma, NT-ABC123",
    "equipment": "Boat, fishing gear, 3-day food supply, satellite phone",
    "notes": "Will check in via satellite phone each evening",
    "waypoints": [
      {
        "id": 100,
        "label": "Lunch stop - East shore",
        "latitude": 62.5500,
        "longitude": -114.2000,
        "order": 0,
        "notes": "Good fishing spot"
      }
    ],
    "user": {
      "id": 5,
      "name": "Sarah Chen",
      "phone": "+1-867-555-0123"
    },
    "created_at": "2025-10-30T15:30:00Z",
    "updated_at": "2025-10-30T15:30:00Z"
  }
}
```

**Errors**:
- `404 NOT_FOUND`: Trip does not exist
- `403 FORBIDDEN`: Not authorized to view this trip

---

### PATCH /api/trips/:id
Update trip

**Auth Required**: Yes (must be trip owner)

**Path Parameters**:
- `id` (integer): Trip ID

**Request Body** (partial updates allowed):
```json
{
  "name": "Great Slave Lake Extended Fishing Trip",
  "end_date": "2025-11-18T18:00:00Z",
  "party_size": 4,
  "notes": "Added one more person to party"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 42,
    "name": "Great Slave Lake Extended Fishing Trip",
    "end_date": "2025-11-18T18:00:00Z",
    "party_size": 4,
    "notes": "Added one more person to party",
    "updated_at": "2025-10-30T16:00:00Z"
  },
  "message": "Trip updated. Shared contacts have been notified."
}
```

**Business Logic**:
- If trip is shared, send email to all recipients notifying of update
- Cannot update trips with status "completed"
- Cannot change start_date if status is "in_progress"

**Errors**:
- `403 FORBIDDEN`: Not trip owner
- `404 NOT_FOUND`: Trip does not exist
- `422 UNPROCESSABLE_ENTITY`: Cannot update completed trip

---

### DELETE /api/trips/:id
Delete trip (soft delete)

**Auth Required**: Yes (must be trip owner)

**Path Parameters**:
- `id` (integer): Trip ID

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Trip deleted successfully"
}
```

**Business Logic**:
- Cannot delete trips with status "in_progress" (must complete/cancel first)
- Soft delete: sets `deleted_at` timestamp, doesn't remove from database
- If trip is shared, send email to recipients notifying trip was canceled

**Errors**:
- `403 FORBIDDEN`: Not trip owner
- `422 UNPROCESSABLE_ENTITY`: Cannot delete trip in progress

---

## Trip Sharing Endpoints

### POST /api/trips/:id/share
Share trip via link or email

**Auth Required**: Yes (must be trip owner)

**Path Parameters**:
- `id` (integer): Trip ID

**Request Body**:
```json
{
  "recipient_emails": [
    "jennifer.chen@example.com",
    "mark.j@example.com"
  ],
  "message": "Here's my trip plan for this weekend!"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "share_token": "550e8400-e29b-41d4-a716-446655440000",
    "share_url": "https://northernguardian.ca/shared/550e8400-e29b-41d4-a716-446655440000",
    "recipients": [
      {
        "email": "jennifer.chen@example.com",
        "status": "sent"
      },
      {
        "email": "mark.j@example.com",
        "status": "sent"
      }
    ],
    "created_at": "2025-10-30T15:30:00Z"
  },
  "message": "Trip shared with 2 recipients"
}
```

**Email Sent**:
- Subject: "Sarah Chen shared a trip plan with you: Great Slave Lake Fishing Trip"
- Body: Trip summary, map thumbnail, link to full details

**Errors**:
- `403 FORBIDDEN`: Not trip owner
- `400 VALIDATION_ERROR`: Invalid email addresses

---

### DELETE /api/trips/:id/share/:token
Revoke shared link

**Auth Required**: Yes (must be trip owner)

**Path Parameters**:
- `id` (integer): Trip ID
- `token` (UUID): Share token

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Share link revoked"
}
```

**Business Logic**:
- Sets `revoked_at` timestamp on trip_shares record
- Shared link URL will return 404 after revocation

---

### GET /api/trips/:id/shares
List all shares for a trip

**Auth Required**: Yes (must be trip owner)

**Path Parameters**:
- `id` (integer): Trip ID

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "shares": [
      {
        "id": 1,
        "share_token": "550e8400-e29b-41d4-a716-446655440000",
        "recipient_email": "jennifer.chen@example.com",
        "view_count": 3,
        "created_at": "2025-10-30T15:30:00Z",
        "revoked_at": null,
        "status": "active"
      },
      {
        "id": 2,
        "share_token": "660f9511-f30c-52e5-b827-557766551111",
        "recipient_email": "mark.j@example.com",
        "view_count": 1,
        "created_at": "2025-10-30T15:30:00Z",
        "revoked_at": null,
        "status": "active"
      }
    ],
    "total": 2
  }
}
```

---

## Check-In Endpoints

### POST /api/trips/:id/check-in
Check in after trip completion

**Auth Required**: Yes (must be trip owner) OR valid check-in token

**Path Parameters**:
- `id` (integer): Trip ID

**Query Parameters** (for email link check-ins):
- `token` (string, optional): One-time check-in token (bypasses auth)

**Request Body** (optional):
```json
{
  "notes": "Made it back safely. Great trip!"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "trip_id": 42,
    "checked_in_at": "2025-11-17T18:15:00Z",
    "check_in_type": "manual",
    "notes": "Made it back safely. Great trip!"
  },
  "message": "Welcome back! Trip marked as completed."
}
```

**Business Logic**:
- Updates trip status to "completed"
- Creates check_ins record
- Prevents overdue alert from triggering

**Errors**:
- `403 FORBIDDEN`: Not trip owner (if no valid token)
- `404 NOT_FOUND`: Trip does not exist
- `422 UNPROCESSABLE_ENTITY`: Trip already checked in

---

### POST /api/trips/:id/extend
Extend trip deadline

**Auth Required**: Yes (must be trip owner) OR valid extend token

**Path Parameters**:
- `id` (integer): Trip ID

**Request Body**:
```json
{
  "extension_hours": 8
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "trip_id": 42,
    "old_end_date": "2025-11-17T18:00:00Z",
    "new_end_date": "2025-11-18T02:00:00Z",
    "extension_hours": 8
  },
  "message": "Trip deadline extended by 8 hours"
}
```

**Business Logic**:
- Updates `end_date` on trip
- Creates check_ins record with type "extended"
- Sends email to emergency contacts: "Trip extended, no need to worry"

**Errors**:
- `400 VALIDATION_ERROR`: Extension hours must be 4, 8, 12, or 24

---

## Community Endpoints

### POST /api/community/inquiry
Submit community interest form

**Auth Required**: No (public endpoint)

**Request Body**:
```json
{
  "community_name": "Hamlet of Fort Simpson",
  "contact_name": "Michael Nahanni",
  "email": "michael.nahanni@fortsimpson.ca",
  "phone": "+1-867-695-2253",
  "population": 1200,
  "message": "Interested in community dashboard for winter safety programs"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": 5,
    "community_name": "Hamlet of Fort Simpson",
    "status": "new",
    "created_at": "2025-10-30T15:30:00Z"
  },
  "message": "Thank you for your inquiry! We'll contact you within 2 business days."
}
```

**Business Logic**:
- Stores inquiry in database
- Sends email to admin: "New community inquiry from Fort Simpson"
- Sends confirmation email to inquirer

**Errors**:
- `400 VALIDATION_ERROR`: Invalid email or required fields missing

---

## Public Routes

### GET /api/shared/:token
View shared trip (public, no auth)

**Auth Required**: No

**Path Parameters**:
- `token` (UUID): Share token

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "trip": {
      "id": 42,
      "name": "Great Slave Lake Fishing Trip",
      "activity_type": "fishing",
      "start_date": "2025-11-15T08:00:00Z",
      "end_date": "2025-11-17T18:00:00Z",
      "status": "in_progress",
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
      "route_geojson": { ... },
      "distance_km": 47.3,
      "vehicle_info": "Red Toyota Tacoma, NT-ABC123",
      "equipment": "Boat, fishing gear, 3-day food supply, satellite phone",
      "waypoints": [ ... ],
      "user": {
        "name": "Sarah Chen",
        "phone": "+1-867-555-0123"
      }
    },
    "status_message": "This trip is currently in progress. Expected return: Nov 17, 6:00 PM"
  }
}
```

**Business Logic**:
- Increments view_count for share
- Logs view in trip_views table (IP hash, user agent)
- Does NOT return private notes field

**Errors**:
- `404 NOT_FOUND`: Invalid or revoked share token
- `410 GONE`: Trip has been deleted/canceled

---

### GET /api/trips/:id/export-gpx
Export trip route as GPX file

**Auth Required**: Yes (trip owner) OR valid share token

**Path Parameters**:
- `id` (integer): Trip ID

**Query Parameters**:
- `token` (UUID, optional): Share token (for public access)

**Response** (200 OK):
```xml
Content-Type: application/gpx+xml
Content-Disposition: attachment; filename="great-slave-lake-fishing-trip.gpx"

<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="NorthernGuardian">
  <metadata>
    <name>Great Slave Lake Fishing Trip</name>
    <desc>Fishing trip route</desc>
    <time>2025-11-15T08:00:00Z</time>
  </metadata>
  <trk>
    <name>Route</name>
    <trkseg>
      <trkpt lat="62.4540" lon="-114.3718">
        <ele>0</ele>
      </trkpt>
      <trkpt lat="62.5500" lon="-114.2000">
        <ele>0</ele>
      </trkpt>
      <trkpt lat="62.6789" lon="-113.9876">
        <ele>0</ele>
      </trkpt>
    </trkseg>
  </trk>
  <wpt lat="62.5500" lon="-114.2000">
    <name>Lunch stop - East shore</name>
    <desc>Good fishing spot</desc>
  </wpt>
</gpx>
```

**Errors**:
- `404 NOT_FOUND`: Trip not found or no route data

---

## Cron Job Endpoints

### GET /api/cron/check-overdue
Check for overdue trips and send alerts

**Auth Required**: Cron secret token

**Headers**:
```http
Authorization: Bearer <CRON_SECRET>
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "checked_trips": 42,
    "overdue_trips": 3,
    "alerts_sent": 3,
    "errors": 0
  },
  "timestamp": "2025-10-30T15:30:00Z"
}
```

**Business Logic**:
1. Find all trips with status "in_progress" and end_date < (NOW - 2 hours)
2. Update status to "overdue"
3. Send email alerts to emergency contacts
4. Log results

---

### GET /api/cron/send-reminders
Send check-in reminders

**Auth Required**: Cron secret token

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "reminders_sent": 5,
    "errors": 0
  },
  "timestamp": "2025-10-30T15:30:00Z"
}
```

**Business Logic**:
1. Find trips with end_date between (NOW + 30 minutes) and (NOW + 90 minutes)
2. Send reminder email: "Your trip ends soon. Remember to check in!"

---

### GET /api/cron/cleanup-maps
Clean up expired offline maps

**Auth Required**: Cron secret token

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "maps_cleaned": 12,
    "space_freed_mb": 456
  },
  "timestamp": "2025-10-30T15:30:00Z"
}
```

---

## Data Models

### User
```typescript
interface User {
  id: number;
  auth0_id: string;
  email: string;
  name: string;
  phone?: string;
  profile_photo_url?: string;
  default_share_preference: 'private' | 'contacts' | 'public';
  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601
}
```

### EmergencyContact
```typescript
interface EmergencyContact {
  id: number;
  user_id: number;
  name: string;
  relationship?: string;
  phone: string;
  email?: string;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
}
```

### Trip
```typescript
interface Trip {
  id: number;
  user_id: number;
  name: string;
  activity_type: 'hiking' | 'camping' | 'fishing' | 'hunting' | 'snowmobiling' | 'kayaking' | 'canoeing' | 'other';
  start_date: string; // ISO 8601
  end_date: string; // ISO 8601
  status: 'draft' | 'upcoming' | 'in_progress' | 'completed' | 'overdue' | 'canceled';
  visibility: 'private' | 'contacts' | 'public';
  party_size: number;
  starting_point: Location;
  destination?: Location;
  route_geojson?: GeoJSON.FeatureCollection;
  vehicle_info?: string;
  equipment?: string;
  notes?: string;
  distance_km?: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

interface Location {
  lat: number;
  lng: number;
  address: string;
}
```

### Waypoint
```typescript
interface Waypoint {
  id: number;
  trip_id: number;
  label: string;
  latitude: number;
  longitude: number;
  order: number;
  notes?: string;
  created_at: string;
}
```

### TripShare
```typescript
interface TripShare {
  id: number;
  trip_id: number;
  share_token: string; // UUID
  recipient_email?: string;
  view_count: number;
  created_at: string;
  revoked_at?: string;
}
```

### CheckIn
```typescript
interface CheckIn {
  id: number;
  trip_id: number;
  checked_in_at: string;
  check_in_type: 'manual' | 'email_link' | 'extended' | 'auto';
  extension_hours?: number;
  notes?: string;
}
```

---

## Testing & Examples

### cURL Examples

**Login (via Auth0)**:
```bash
curl -X POST https://northernguardian.ca/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "sarah.chen@example.com",
    "password": "SecurePass123!"
  }'
```

**Create Trip**:
```bash
curl -X POST https://northernguardian.ca/api/trips \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Hidden Lake Hike",
    "activity_type": "hiking",
    "start_date": "2025-11-05T10:00:00Z",
    "end_date": "2025-11-05T18:00:00Z",
    "party_size": 2,
    "starting_point": {
      "lat": 62.4540,
      "lng": -114.3718,
      "address": "Yellowknife, NT"
    },
    "visibility": "contacts"
  }'
```

**Share Trip**:
```bash
curl -X POST https://northernguardian.ca/api/trips/42/share \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "recipient_emails": ["jennifer.chen@example.com"],
    "message": "Here is my trip plan!"
  }'
```

**View Shared Trip (Public)**:
```bash
curl https://northernguardian.ca/api/shared/550e8400-e29b-41d4-a716-446655440000
```

### Postman Collection
(To be created: `planning/postman-collection.json`)

### Integration Tests
See `tests/integration/api.test.ts` for full test suite

---

## Versioning & Deprecation

### Current Version
- **v1** (implicit): All endpoints documented above
- No explicit version in URL for MVP

### Future Versioning Strategy
- Major version in URL path: `/api/v2/trips`
- Breaking changes require new major version
- Old versions supported for 6 months minimum
- Deprecation warnings in response headers

---

## API Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2025-10-30 | 1.0 | Initial API specification for MVP |

---

**End of API Specification Document**
