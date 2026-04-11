import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allServices, getServiceBySlug } from '@/lib/services-data';
import ServiceMainClient from './ServiceMainClient';

export function generateStaticParams() {
  return allServices.map(s => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | MS Infinex Tech Udaipur`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Serialize for client component
  const serviceData = {
    slug: service.slug,
    title: service.title,
    tagline: service.tagline,
    description: service.description,
    icon: service.icon,
    color: service.color,
    gradient: service.gradient,
    image: service.image,
    subpages: service.subpages.map(sp => ({
      slug: sp.slug,
      title: sp.title,
      tagline: sp.tagline,
      description: sp.description,
      icon: sp.icon,
      highlightCount: sp.highlights.length,
    })),
  };

  return <ServiceMainClient service={serviceData} />;
}
