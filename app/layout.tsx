import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLVNK Coffee: Roastery and Slowbar | Specialty Coffee",
  description: "Experience handcrafted slowbar pour-overs and fresh, locally roasted specialty coffee at BLVNK Coffee.",
  keywords: ["BLVNK Coffee", "specialty coffee", "coffee roastery", "slowbar", "pour over coffee"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}