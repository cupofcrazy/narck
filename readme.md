# Narck

A modern Next.js application with Turso database integration, authentication, and a dashboard UI.

## Tech Stack

- **frontend**: Next.js 15 with React 19
- **database**: Turso (SQLite) with Drizzle ORM
- **authentication**: Better-Auth
- **styling**: TailwindCSS 4
- **state management**: TanStack React Query

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Set up environment variables:
   Create a `.env` file with the following:

```
TURSO_DATABASE_URL=your_turso_database_url
TURSO_AUTH_TOKEN=your_turso_auth_token

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

BETTER_AUTH_SECRET=secret
BETTER_AUTH_URL=http://localhost:4321

TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=

TWITCH_CLIENT_ID=
TWITCH_CLIENT_SECRET=
```

4. Start the development server:

```bash
npm run dev
# or
bun dev
```

The server will run on [http://localhost:4321](http://localhost:4321)

## Database Management

This project uses Drizzle ORM with Turso (SQLite). The following commands are available:

```bash
# Push schema changes to database
npm run db:push

# Generate migrations
npm run db:generate

# Apply migrations
npm run db:migrate

# Open Drizzle Studio
npm run db:studio
```

## Project Structure

- `app/` - Next.js application routes
  - `(auth)/` - Authentication pages
  - `(dashboard)/` - Dashboard interface
- `components/` - Reusable React components
- `db/` - Database schemas and migrations
- `lib/` - Utility functions and shared code
- `public/` - Static assets
- `server/` - Server-side code and API handlers
- `styles/` - Global styles and Tailwind configuration

## Building for Production

```bash
npm run build
npm run start
```