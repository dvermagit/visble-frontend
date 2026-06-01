// import { getAllPosts, getAllCategories } from '@/lib/posts';
// import { getAllPages } from '@/lib/page';
// import { MetadataRoute } from 'next';

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = 'https://visble.ai';
//   const currentDate = new Date();
  
//   // Get all blog posts
//   const posts = getAllPosts();
//   const categories = getAllCategories();
//   const pages = getAllPages();
  
//   // Blog post URLs
//   const blogUrls = posts.map((post) => ({
//     url: `${baseUrl}/blog/${post.slug}`,
//     lastModified: new Date(post.date),
//     changeFrequency: 'monthly' as const,
//     priority: 0.8,
//   }));

//   // Category URLs
//   const categoryUrls = categories.map((category) => ({
//     url: `${baseUrl}/blog/category/${category.toLowerCase()}`,
//     lastModified: currentDate,
//     changeFrequency: 'weekly' as const,
//     priority: 0.6,
//   }));

//   // Static pages from content
//   const pageUrls = pages.map((page) => ({
//     url: `${baseUrl}/${page.slug}`,
//     lastModified: currentDate,
//     changeFrequency: 'yearly' as const,
//     priority: 0.3,
//   }));

//   // Main static pages
//   const staticPages = [
//     {
//       url: baseUrl,
//       lastModified: currentDate,
//       changeFrequency: 'daily' as const,
//       priority: 1.0,
//     },
//     {
//       url: `${baseUrl}/blogs`,
//       lastModified: currentDate,
//       changeFrequency: 'daily' as const,
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/llms-txt-generator`,
//       lastModified: currentDate,
//       changeFrequency: 'monthly' as const,
//       priority: 0.8,
//     },
//   ];

//   return [...staticPages, ...blogUrls, ...categoryUrls, ...pageUrls];
// }

import { getAllPosts, getAllCategories } from '@/lib/posts';
import { getAllPages } from '@/lib/page';
import { MetadataRoute } from 'next';
import { sanityClient } from '@/lib/sanity.client';
import { allCaseStudySlugsQuery } from '@/lib/queries';

export function generateStaticParams() {
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://visble.ai';
  const currentDate = new Date();
  
  const posts = getAllPosts();
  const categories = getAllCategories();
  const pages = getAllPages();
  const caseStudySlugs = await sanityClient.fetch(allCaseStudySlugsQuery);
  
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/llms-txt-generator`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/geo-analysis`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  const excludedSlugs = [
    'home',           
    'cart',           
    'checkout',       
    'my-account',     
    'shop',           
    'coming-soon',    
    'blogs',          // Already added in staticRoutes above
    'llms-txt-generator',
    'geo-analysis',
    'case-studies',   // Already added in staticRoutes above
  ];

  const pageUrls = pages
    .filter((page) => !excludedSlugs.includes(page.slug)) 
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }));

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.toLowerCase()}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const caseStudyUrls = caseStudySlugs
    .filter((s: any) => s.slug)
    .map((s: any) => ({
      url: `${baseUrl}/case-studies/${s.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  return [...staticRoutes, ...blogUrls, ...categoryUrls, ...caseStudyUrls, ...pageUrls];
}