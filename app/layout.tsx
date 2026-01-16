import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ms. Chen Expert Tailor",
  description: "Expert tailoring services - Alterations, Custom Tailoring, and Bridal & Formal Wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cormorantGaramond.variable} lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
