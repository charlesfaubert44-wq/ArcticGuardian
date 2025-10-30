# Auth0 Setup Guide for ArcticGuardian

This guide will walk you through setting up Auth0 authentication for ArcticGuardian.

## Step 1: Create an Auth0 Account

1. Go to [auth0.com](https://auth0.com) and sign up for a free account
2. Create a new tenant (e.g., `arcticguardian` or `yourname-arctic`)

## Step 2: Create a New Application

1. In the Auth0 Dashboard, go to **Applications** → **Applications**
2. Click **Create Application**
3. Name it `ArcticGuardian` (or your preferred name)
4. Select **Regular Web Applications**
5. Click **Create**

## Step 3: Configure Application Settings

In your application's **Settings** tab:

### Allowed Callback URLs
```
http://localhost:3001/api/auth/callback
```
(Add production URL later: `https://yourdomain.com/api/auth/callback`)

### Allowed Logout URLs
```
http://localhost:3001
```
(Add production URL later: `https://yourdomain.com`)

### Allowed Web Origins
```
http://localhost:3001
```
(Add production URL later: `https://yourdomain.com`)

Click **Save Changes** at the bottom.

## Step 4: Get Your Credentials

From the same **Settings** tab, copy:
- **Domain** (e.g., `your-tenant.us.auth0.com`)
- **Client ID**
- **Client Secret**

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your Auth0 credentials:

   ```env
   # Auth0
   AUTH0_SECRET="<run: openssl rand -hex 32>"
   AUTH0_BASE_URL="http://localhost:3001"
   AUTH0_ISSUER_BASE_URL="https://YOUR_DOMAIN.auth0.com"
   AUTH0_CLIENT_ID="YOUR_CLIENT_ID"
   AUTH0_CLIENT_SECRET="YOUR_CLIENT_SECRET"
   ```

3. Generate a secure random secret for `AUTH0_SECRET`:
   ```bash
   openssl rand -hex 32
   ```
   Copy the output and paste it as the value for `AUTH0_SECRET`.

## Step 6: Customize the Auth0 Login Page (Optional)

To match ArcticGuardian's arctic theme:

1. Go to **Branding** → **Universal Login**
2. Click **Customize** on the New Universal Login Experience
3. Customize colors:
   - **Primary Color**: `#00D9A3` (aurora green)
   - **Page Background**: `#0A1929` (arctic night)

## Step 7: Test Your Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3001

3. Click **Get Started** or **Login**

4. You should be redirected to Auth0's login page

5. Create a test account and login

6. You should be redirected back to `/dashboard`

## Step 8: Database Setup

After authentication is working, you'll need to set up the database to store user information:

1. Set up PostgreSQL (if you haven't already)
2. Update `DATABASE_URL` in `.env`
3. Run Prisma migrations:
   ```bash
   npm run db:push
   ```

## Troubleshooting

### "Callback URL mismatch" error
- Make sure `http://localhost:3001/api/auth/callback` is in **Allowed Callback URLs**
- Check that `AUTH0_BASE_URL` in `.env` matches (no trailing slash)

### "Invalid state" error
- Clear your browser cookies and cache
- Restart the dev server
- Try again

### Auth0 redirects to port 3000 instead of 3001
- Make sure `AUTH0_BASE_URL` in `.env` is set to `http://localhost:3001`

### "Access Denied" after login
- Check that your **Allowed Callback URLs** are correct
- Verify `AUTH0_CLIENT_SECRET` is correct

## Next Steps

Once authentication is working:
1. Set up the database connection
2. Create an API route to sync Auth0 users with your database
3. Configure email notifications with Resend
4. Set up Mapbox for trip planning features

## Security Notes

- **Never commit `.env` to Git** - it's already in `.gitignore`
- Use strong, unique values for `AUTH0_SECRET` in production
- Enable MFA (Multi-Factor Authentication) in Auth0 for production
- Set up proper CORS policies for production
