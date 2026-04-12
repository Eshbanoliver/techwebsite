import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – Best IT & Digital Marketing Company in Udaipur',
  description: 'Learn about MS Infinex Tech, a leading IT company and digital marketing agency based in Udaipur, Rajasthan. Founded in 2020, we deliver premium web development, app development, AI solutions, and branding services to businesses across India.',
  keywords: ['about MS Infinex Tech', 'IT company Udaipur', 'digital marketing agency Udaipur', 'technology company Rajasthan', 'web development Udaipur'],
  openGraph: {
    title: 'About MS Infinex Tech – Leading IT Company in Udaipur, Rajasthan',
    description: 'Founded in 2020, MS Infinex Tech is Udaipur\'s premier technology firm delivering web development, digital marketing, AI solutions, and app development services.',
    url: 'https://msinfinextech.com/about',
  },
  alternates: {
    canonical: 'https://msinfinextech.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
