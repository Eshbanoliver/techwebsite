import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the MS Infinix privacy policy. Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
