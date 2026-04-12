import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the MS Infinex Tech privacy policy. Learn how we collect, use, and protect your personal data when you use our IT and digital marketing services in Udaipur.',
  alternates: {
    canonical: 'https://msinfinextech.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
