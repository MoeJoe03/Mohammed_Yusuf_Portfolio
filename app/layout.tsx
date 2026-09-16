import type {Metadata} from 'next';
import {Inter, Instrument_Serif} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic', 'normal'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mohammed Yusuf — Portfolio',
  description: 'A dark, cinematic portfolio landing page featuring creative fullstack work, interactive GSAP parallax, HLS background video, and fluid animations.',
  openGraph: {
    title: 'Mohammed Yusuf — Portfolio',
    description: 'A dark, cinematic portfolio landing page featuring creative fullstack work, interactive GSAP parallax, HLS background video, and fluid animations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Yusuf — Portfolio',
    description: 'A dark, cinematic portfolio landing page featuring creative fullstack work, interactive GSAP parallax, HLS background video, and fluid animations.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-bg text-text-primary font-body antialiased selection:bg-white/20 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
