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
    default: "MS Infinex Tech | Infinite Ideas. Intelligent Execution.",
    template: "%s | MS Infinex Tech",
  },
  description:
    "MS Infinex Tech delivers premium AI, Web, Mobile, Cloud & DevOps solutions from Udaipur, Rajasthan. Transform your business with cutting-edge technology.",
  keywords: [
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
  authors: [{ name: "MS Infinex Tech" }],
  openGraph: {
    title: "MS Infinex Tech | Infinite Ideas. Intelligent Execution.",
    description:
      "Premium AI, Web, Mobile, Cloud & DevOps solutions from Udaipur, Rajasthan.",
    type: "website",
    locale: "en_IN",
    siteName: "MS Infinex Tech",
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
