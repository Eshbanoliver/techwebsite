import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog-data';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);
  if (!post) return {};
  return {
    title: `${post.title} | MS Infinex Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);
  if (!post) notFound();

  return <BlogPostClient post={post} />;
}
