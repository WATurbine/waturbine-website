export const config = {
  site: {
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'WATurbine',
    description: 'University of Waterloo small wind turbine design team dedicated to driving innovation in renewable energy and sustainable technology.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://waturbine.ca',
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/uwwaturbine/',
    email: process.env.NEXT_PUBLIC_EMAIL || 'admin@waturbine.ca',
    discord: process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/QJhDqWywaP',
  },
  external: {
    competition: process.env.NEXT_PUBLIC_COMPETITION_URL || 'https://www.hanze.nl/en/research/centres/entrance-centre-of-expertise-energy/projects/international-small-wind-turbine-contest-iswtc',
    sponsorshipPdf: process.env.NEXT_PUBLIC_SPONSORSHIP_PDF || '/Waturbine_Sponsorship.pdf',
  },
};
