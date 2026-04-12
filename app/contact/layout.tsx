import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – MS Infinex Tech | IT Company in Udaipur',
  description: 'Get in touch with MS Infinex Tech, the best IT company and digital marketing agency in Udaipur, Rajasthan. Call us for web development, app development, SEO, and branding services. Located in Udaipur, Rajasthan 313001, India.',
  keywords: ['contact MS Infinex Tech', 'IT company Udaipur contact', 'digital marketing agency Udaipur', 'web development Udaipur contact', 'hire developers Udaipur'],
  openGraph: {
    title: 'Contact MS Infinex Tech – Best IT & Digital Marketing Company in Udaipur',
    description: 'Reach out to Udaipur\'s premier IT and digital marketing agency for web development, app development, SEO, and branding services.',
    url: 'https://msinfinextech.com/contact',
  },
  alternates: {
    canonical: 'https://msinfinextech.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
