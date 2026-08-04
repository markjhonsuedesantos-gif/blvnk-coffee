import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jayagiriSans = localFont({
  src: "./fonts/ja.ttf",
  variable: "--font-jayagiri",
});

const nunitoSans = localFont({
  src: "./fonts/NunitoSans.ttf",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "BLVNK Coffee | Coming Soon",
  description: "Specialty Coffee Roastery & Slowbar. Coming Soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${jayagiriSans.variable}`}>
      <body className="bg-white text-black antialiased font-sans">{children}</body>
    </html>
  );
}