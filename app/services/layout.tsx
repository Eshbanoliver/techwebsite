import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services – Digital Marketing, Web & App Development in Udaipur',
  description: 'Explore MS Infinex Tech\'s comprehensive IT services in Udaipur: Digital Marketing, Social Media Marketing, Paid Ads, Web Development, App Development, Graphic Design & Branding, AI Solutions, and E-Commerce Management. Tailored for Udaipur businesses.',
  keywords: [
    'digital marketing services Udaipur',
    'web development services Udaipur',
    'app development services Udaipur',
    'SEO services Udaipur',
    'social media marketing Udaipur',
    'graphic design Udaipur',
    'AI solutions Udaipur',
    'e-commerce management Udaipur',
    'IT services Rajasthan',
  ],
  openGraph: {
    title: 'IT & Digital Marketing Services in Udaipur | MS Infinex Tech',
    description: 'Full-stack IT services for Udaipur businesses – Digital Marketing, Web Development, App Development, SEO, Graphic Design, AI Solutions & more.',
    url: 'https://msinfinextech.com/services',
  },
  alternates: {
    canonical: 'https://msinfinextech.com/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
