# WATurbine Website

Official public website for the University of Waterloo WATurbine team, built with Next.js App Router.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- CSS Modules + global styles
- Framer Motion (interactive sections)
- Resend (contact form email delivery)

## Development

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Useful scripts:

- npm run dev: start local development server
- npm run build: production build
- npm run start: run production build locally
- npm run lint: run Next.js lint checks
- npm run format: format project files with Prettier
- npm run format:check: verify formatting only

## Environment Variables

Public values (client and server):

- NEXT_PUBLIC_SITE_NAME
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_INSTAGRAM_URL
- NEXT_PUBLIC_LINKEDIN_URL
- NEXT_PUBLIC_EMAIL
- NEXT_PUBLIC_DISCORD_URL
- NEXT_PUBLIC_COMPETITION_URL
- NEXT_PUBLIC_SPONSORSHIP_PDF

Server-only values for contact form delivery:

- RESEND_API_KEY
- RESEND_FROM
- RESEND_TO

If a variable is missing, fallback defaults are defined in lib/config.js.

## Content Maintenance Guide

Most updates happen in these files:

- lib/config.js: central site metadata, social links, and shared external URLs
- Components/Navbar.jsx: top navigation labels and links
- Components/Footer.jsx: footer links and social icons
- app/getinvolved/GetInvolvedClient.jsx: subteam cards, copy, accents, and imagery
- app/sponsors/page.js: sponsor tiers and logos
- app/who-we-are/page.js: mission copy and image placeholders
- app/contact/ContactForm.jsx: form fields and submit behavior
- app/api/contact/route.js: contact form validation and outbound email handling

Asset notes:

- Put sponsor logos and similar static assets in public.
- Keep photo assets used with imported Image components under assets when module imports are needed.

## Styling Conventions

- Global typography, colors, and element defaults live in styles/globals.css.
- Page and component styles use CSS Modules in styles/*.module.css.
- Keep spacing for top-level pages aligned with the fixed navbar height (80px).
- Title pills across subpages should use the same size system for visual consistency.

## Project Structure

- app/: routes, layouts, loading/error states, and API handlers
- Components/: reusable UI and animation components
- styles/: CSS modules and global styles
- lib/: shared configuration and helpers
- public/: static assets served from root

## Deployment

Deploy as a standard Next.js app. Ensure required environment variables are set in the deployment platform before release.
