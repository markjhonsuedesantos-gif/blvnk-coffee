import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLVNK Coffee | Specialty Coffee Roastery & Slowbar",
  description: "BLVNK Coffee is a specialty coffee roastery and slowbar offering single-origin pour-overs, artisanal espresso, and custom roasted beans.",
  keywords: ["BLVNK Coffee", "Coffee Roastery", "Slowbar", "Specialty Coffee", "Pour Over Coffee", "Artisanal Espresso"],
  authors: [{ name: "BLVNK Coffee" }],
  
  // Only include the verification string (e.g. "EZjnuPQkA_3-SpvUFNmQgPeiIpygKO...")
  verification: {
    google: "EZjnuPQkA_3-SpvUFNmQgPeiIpygKO0mwE7jWfW3ocM", 
  },

  openGraph: {
    title: "BLVNK Coffee | Specialty Coffee Roastery & Slowbar",
    description: "Specialty coffee roastery and slowbar offering single-origin pour-overs and artisanal espresso.",
    url: "https://blvnk-coffee.vercel.app",
    siteName: "BLVNK Coffee",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BLVNK Coffee Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}