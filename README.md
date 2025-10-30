# ArcticGuardian

**Guard Your Arctic Adventure**

Navigate Canada's remote northern wilderness with confidence. Create detailed trip plans, stay connected with loved ones, and embrace the aurora with safety at your side.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ArcticGuardian
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and fill in your credentials:
   - Database connection string
   - Auth0 credentials (see [AUTH0_SETUP.md](AUTH0_SETUP.md) for detailed guide)
   - Mapbox token
   - Resend API key (for emails)

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

```
ArcticGuardian/
├── app/                # Next.js App Router pages
│   ├── api/           # API routes
│   ├── dashboard/     # Dashboard pages
│   ├── trips/         # Trip management pages
│   └── layout.tsx     # Root layout
├── components/        # Reusable React components
├── lib/              # Utility functions and configurations
│   └── prisma.ts     # Prisma client instance
├── prisma/           # Database schema and migrations
│   └── schema.prisma # Database schema
├── public/           # Static assets
└── planning/         # Project documentation
    ├── prd.md
    ├── database-schema.md
    ├── api-specification.md
    └── mockups/
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Auth0
- **Maps**: Mapbox GL JS
- **Email**: Resend
- **Deployment**: Vercel (recommended)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## 🗺️ Features

- **Trip Planning**: Create detailed trip plans with routes and waypoints
- **Interactive Maps**: Mapbox integration for route visualization
- **Safety Alerts**: Automated check-ins and emergency notifications
- **Trip Sharing**: Share trips with emergency contacts via unique links
- **Offline Support**: Export trip data for offline GPS devices
- **Community Tier**: Special features for municipalities

## 📚 Documentation

See the `/planning` folder for detailed documentation:
- Product Requirements Document (PRD)
- Database Schema
- API Specification
- Wireframes & Mockups

## 🤝 Contributing

This is a solo developer project for Canada's northern territories. Contributions are welcome!

## 📄 License

MIT License - See LICENSE file for details

## 🌟 About

Built with ❄️ for Canada's North
