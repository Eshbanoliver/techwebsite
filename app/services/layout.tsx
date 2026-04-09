import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive tech services — AI & ML, Web Development, Mobile Apps, Cloud & DevOps, UI/UX Design, and Digital Marketing at MS Infinix.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
