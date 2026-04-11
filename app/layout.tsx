import type { Metadata } from 'next';
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MS Infinex Tech | Infinity: The Next Generation",
    template: "%s | MS Infinex",
  },
  description:
    "MS Infinex Tech delivers enterprise-grade AI, Cloud, Web, and Mobile solutions. Architecting infinity through next-generation digital transformation and high-performance technical engineering in Udaipur and beyond.",
  keywords: [
    "Infinex",
    "MS Infinex Tech",
    "web development Udaipur",
    "AI solutions India",
    "mobile app development",
    "cloud devops",
    "Udaipur",
    "Rajasthan",
    "software company",
    "digital marketing",
    "UI UX design",
    "Infinity The Next Generation"
  ],
  authors: [{ name: "MS Infinex Tech" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "MS Infinex Tech | Infinity: The Next Generation",
    description:
      "Premium AI, Web, Mobile, Cloud & DevOps solutions. Architecting the next generation of digital infrastructure with absolute precision.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MS Infinex Branding",
      },
    ],
    type: "website",
    locale: "en_IN",
    siteName: "MS Infinex Tech",
  },
  alternates: {
    canonical: "https://msinfinex.com",
  },
};

export const viewport = {
  themeColor: "#00f0ff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <ScrollToTop />
        <div className="grid-bg" aria-hidden="true" />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
