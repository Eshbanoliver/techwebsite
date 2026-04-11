import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | MS Infinex Tech Udaipur',
  description: 'Digital Marketing, Social Media, Paid Ads, Web Development, App Development, Graphic Design, AI Solutions & E-Commerce Management — tailored for Udaipur businesses.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
