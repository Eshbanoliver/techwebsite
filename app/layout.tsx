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
  metadataBase: new URL('https://msinfinextech.com'),
  title: {
    default: "Best IT Company in Udaipur | MS Infinex Tech – Digital Marketing & Web Development",
    template: "%s | MS Infinex Tech Udaipur",
  },
  description:
    "MS Infinex Tech is the best IT company and digital marketing agency in Udaipur, Rajasthan. We offer expert web development, app development, SEO, social media marketing, graphic design, AI solutions, and e-commerce management services for businesses in Udaipur and beyond.",
  keywords: [
    "best IT company in Udaipur",
    "best digital marketing agency in Udaipur",
    "digital marketing agency in Udaipur",
    "web development company Udaipur",
    "SEO services Udaipur",
    "app development Udaipur",
    "IT company Rajasthan",
    "MS Infinex Tech",
    "social media marketing Udaipur",
    "graphic design Udaipur",
    "AI solutions Udaipur",
    "e-commerce management Udaipur",
    "web design Udaipur",
    "mobile app development Udaipur",
    "digital marketing Rajasthan",
  ],
  authors: [{ name: "MS Infinex Tech", url: "https://msinfinextech.com" }],
  creator: "MS Infinex Tech",
  publisher: "MS Infinex Tech",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Best IT Company in Udaipur | MS Infinex Tech – Digital Marketing & Web Development",
    description:
      "MS Infinex Tech is Udaipur's leading IT company and digital marketing agency. Expert web development, app development, SEO, and branding services for businesses in Rajasthan.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MS Infinex Tech - Best IT Company in Udaipur, Rajasthan",
      },
    ],
    type: "website",
    locale: "en_IN",
    siteName: "MS Infinex Tech",
    url: "https://msinfinextech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IT Company in Udaipur | MS Infinex Tech",
    description:
      "MS Infinex Tech is the best IT company and digital marketing agency in Udaipur, Rajasthan. Web development, SEO, app development & more.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://msinfinextech.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-google-verification-code',
  },
};

export const viewport = {
  themeColor: "#00f0ff",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD Structured Data for LocalBusiness + Organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Organization'],
  name: 'MS Infinex Tech',
  alternateName: 'MS Infinex Tech Pvt. Ltd.',
  url: 'https://msinfinextech.com',
  logo: 'https://msinfinextech.com/logo.png',
  image: 'https://msinfinextech.com/logo.png',
  description: 'MS Infinex Tech is the best IT company and digital marketing agency in Udaipur, Rajasthan. We offer web development, app development, SEO, social media marketing, graphic design, AI solutions, and e-commerce management services.',
  telephone: '+91-98765-43210',
  email: 'info@msinfinextech.com',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Udaipur',
    addressLocality: 'Udaipur',
    addressRegion: 'Rajasthan',
    postalCode: '313001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.5854,
    longitude: 73.7125,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '19:00',
  },
  areaServed: [
    { '@type': 'City', name: 'Udaipur' },
    { '@type': 'State', name: 'Rajasthan' },
    { '@type': 'Country', name: 'India' },
  ],
  sameAs: [
    // Add social media URLs when available
  ],
  priceRange: '₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '80',
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT & Digital Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Digital Marketing', description: 'SEO, content marketing, lead generation and online reputation management for businesses in Udaipur.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Social Media Marketing', description: 'Instagram, Facebook, and influencer marketing for cafes, hotels, and brands in Udaipur.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Web Development', description: 'Business websites, e-commerce stores, and custom web solutions for Udaipur businesses.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'App Development', description: 'Mobile apps, web apps, and startup MVPs built for Udaipur entrepreneurs.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Graphic Design & Branding', description: 'Logo design, brand identity, and marketing materials for local Udaipur brands.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'AI Solutions', description: 'AI chatbots, automation, and data analytics for businesses in Udaipur.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Paid Ads', description: 'Google Ads, Meta Ads, and YouTube advertising campaigns for Udaipur businesses.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'E-Commerce Management', description: 'Amazon, Flipkart, and marketplace management for sellers in Udaipur and Rajasthan.' },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
