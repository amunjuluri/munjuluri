import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anand Munjuluri | Software Developer",
  description: "Brewing something special - A software developer crafting elegant solutions through code. Exploring the intersection of technology and innovation.",
  keywords: ["Anand Munjuluri", "software developer", "full-stack developer", "programmer", "coding", "web development"],
  openGraph: {
    title: "Anand Munjuluri | Software Developer",
    description: "Brewing something special - A software developer crafting elegant solutions through code.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Munjuluri | Software Developer",
    description: "Brewing something special - A software developer crafting elegant solutions through code.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000", // Changed to black for a more developer-centric theme
  authors: [{ name: "Anand Munjuluri" }],
  generator: "Next.js",
  applicationName: "Anand Munjuluri Portfolio",
  icons: {
    icon: '/favicon.svg',  // Using SVG directly for better scaling
    apple: '/apple-touch-icon.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
