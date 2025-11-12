import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Langat Aesthetics - Portfolio',
  description: 'I am a Frontend Developer. Explore my projects, skills, and contact me for collaboration.',
  keywords: ['Portfolio', 'Frontend Developer', 'Next.js', 'React',],
  authors: [{ name: 'Langat', url: 'https://langataesthetics.vercel.app' }],
  viewport: 'width=device-width, initial-scale=1',
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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
