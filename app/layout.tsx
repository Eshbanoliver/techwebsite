import type { Metadata } from 'next';
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
    default: "Infinex | Infinity: The Next Generation",
    template: "%s | Infinex",
  },
  description:
    "Infinex delivers premium AI, Web, Mobile, Cloud & DevOps solutions. Infinity: The Next Generation of digital transformation and strategic engineering.",
  keywords: [
    "Infinex",
    "MS Infinex Tech",
    "web development",
    "AI solutions",
    "mobile app development",
    "cloud devops",
    "Udaipur",
    "Rajasthan",
    "software company",
    "digital marketing",
    "UI UX design",
  ],
  authors: [{ name: "Infinex Tech" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Infinex | Infinity: The Next Generation",
    description:
      "Premium AI, Web, Mobile, Cloud & DevOps solutions. Architecting the next generation of digital infrastructure.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Infinex Branding",
      },
    ],
    type: "website",
    locale: "en_IN",
    siteName: "Infinex",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <div className="grid-bg" aria-hidden="true" />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
