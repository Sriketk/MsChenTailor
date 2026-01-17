import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Ms. Chen Expert Tailoring",
    template: "%s | Ms. Chen Expert Tailoring",
  },
  description:
    "Expert tailoring services in NYC - Alterations, Custom Tailoring, and Bridal & Formal Wear. Located at 88 E Broadway, Basement Level B42. Over 16 years of craftsmanship and expertise.",
  keywords: [
    "tailor",
    "tailoring",
    "alterations",
    "custom tailoring",
    "bridal alterations",
    "NYC tailor",
    "Chinatown tailor",
    "East Broadway",
    "dress alterations",
    "suit alterations",
    "Ms. Chen",
  ],
  authors: [{ name: "Ms. Chen Expert Tailoring" }],
  creator: "Ms. Chen Expert Tailoring",
  publisher: "Ms. Chen Expert Tailoring",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  metadataBase: new URL("https://mschentailoring.com"), // Update with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mschentailoring.com", // Update with actual domain
    siteName: "Ms. Chen Expert Tailoring",
    title: "Ms. Chen Expert Tailoring - Expert Tailoring Services in NYC",
    description:
      "Expert tailoring services in NYC - Alterations, Custom Tailoring, and Bridal & Formal Wear. Located at 88 E Broadway, Basement Level B42. Over 16 years of craftsmanship.",
    images: [
      {
        url: "https://mschentailoring.com/chen/chen_profile.jpg", // Update with actual domain
        width: 800,
        height: 800,
        alt: "Ms. Chen Expert Tailoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ms. Chen Expert Tailoring - Expert Tailoring Services in NYC",
    description:
      "Expert tailoring services in NYC - Alterations, Custom Tailoring, and Bridal & Formal Wear. Over 16 years of craftsmanship.",
    images: ["https://mschentailoring.com/chen/chen_profile.jpg"], // Update with actual domain
  },
  icons: {
    icon: "/chen/chen_profile.jpg",
    apple: "/chen/chen_profile.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cormorantGaramond.variable} lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
