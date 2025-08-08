import type React from 'react';
import '@/app/globals.css';
import { Inter, Poppins, Unbounded } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PageTransition from '@/components/page-transition';
import ProgressIndicator from '@/components/animations/progress-indicator';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-unbounded',
  display: 'swap',
});

export const metadata = {
  title: 'Polkadot Education Hub',
  description: 'A comprehensive education hub for Polkadot blockchain developers',
  generator: 'v0.dev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${unbounded.variable}`}
    >
      <head>
        {/* Google Analytics Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QVHK13WSH4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QVHK13WSH4');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressIndicator />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
