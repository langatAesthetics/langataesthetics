import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import type { Viewport } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  display: "swap",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Langat Aesthetics - Personal Website',
  description: 'I am a Fullstack Developer. Explore my projects, skills, and contact me for collaboration.',
  keywords: ['Langat Aesthetics', 'Fullstack Developer', 'Javascript', 'Software Developer Kenya', 'Web Developer Kenya' ],
  authors: [{ name: 'Langat', url: 'https://langataesthetics.vercel.app' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">
          {children}
        </main>
        <SpeedInsights />

        {/* Google Analytics Script */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XSZ2L0JCJ5"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-XSZ2L0JCJ5');
  `}
        </Script>
        <Footer />
      </body>
    </html>
  );
}
