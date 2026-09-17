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
    'Structured technology career pathways with live sessions, real projects and a certificate that proves you can do the work. Seven Career Schools. One clear route into tech.',
  openGraph: {
    title: 'Schull Academy — Choose your career. Build your future.',
    description:
      'Structured technology career pathways with live sessions, real projects and a certificate that proves you can do the work.',
    type: 'website',
    locale: 'en_GB',
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
