import { Inter, Staatliches, Tajawal } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import '@/styles/globals.css';
import { config } from '@/lib/config';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const staatliches = Staatliches({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-staatliches',
  display: 'swap',
});

const tajawal = Tajawal({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${config.site.name} - Renewable Energy Innovation`,
    template: `%s | ${config.site.name}`,
  },
  description: config.site.description,
  keywords: ['wind turbine', 'renewable energy', 'University of Waterloo', 'sustainable technology', 'engineering'],
  authors: [{ name: 'WATurbine Team' }],
  creator: 'WATurbine',
  metadataBase: new URL(config.site.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: config.site.url,
    title: config.site.name,
    description: config.site.description,
    siteName: config.site.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WATurbine - Renewable Energy Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.site.name,
    description: config.site.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192x192.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'WATurbine',
  },
};

export const generateViewport = () => ({
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7675ED',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${staatliches.variable} ${tajawal.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
