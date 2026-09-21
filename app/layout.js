import { Onest, Instrument_Sans } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const display = Onest({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://schull.io'),
  title: {
    default: 'Schull Academy — Choose your career. Build your future.',
    template: '%s | Schull Academy',
  },
  description:
    'Structured technology career pathways with live sessions, real projects and a certificate that proves you can do the work. Six Career Fields. One clear route into tech.',
  keywords: [
    'Schull Academy',
    'tech career',
    'career pathways',
    'learn tech',
    'AI training',
    'cloud computing',
    'cybersecurity',
    'data analytics',
    'DevOps',
    'product management',
    'quality assurance',
    'Africa tech',
    'Nigeria tech training',
    'online learning',
    'tech certification',
  ],
  authors: [{ name: 'Schull Academy', url: 'https://schull.io' }],
  creator: 'Schull Technologies',
  publisher: 'Schull Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Schull Academy — Choose your career. Build your future.',
    description:
      'Structured technology career pathways with live sessions, real projects and a certificate that proves you can do the work. Six Career Fields. One clear route into tech.',
    url: 'https://schull.io',
    siteName: 'Schull Academy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Schull Academy — Choose your career. Build your future.',
        type: 'image/png',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schull Academy — Choose your career. Build your future.',
    description:
      'Structured technology career pathways with live sessions, real projects and a certificate that proves you can do the work.',
    images: ['/og-image.png'],
    creator: '@schullio',
    site: '@schullio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://schull.io',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Without JS the reveal animations never run, so show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
