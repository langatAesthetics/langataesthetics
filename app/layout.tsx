import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
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
  title: 'Langat Aesthetics - Portfolio',
  description: 'I am a Frontend Developer. Explore my projects, skills, and contact me for collaboration.',
  keywords: ['Portfolio', 'Frontend Developer', 'Next.js', 'React',],
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
      <body>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
