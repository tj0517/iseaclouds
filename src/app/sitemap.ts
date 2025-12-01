import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export const revalidate = 3600; // Odświeżanie co godzinę

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.seaclouds.eu';

interface SanitySlug {
  slug: string;
  updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  // 1. Definiujemy zapytania GROQ dla obu typów
  const projectsQuery = groq`*[_type == "project" && defined(slug.current)] {
    "slug": slug.current,
    "updatedAt": _updatedAt
  }`;

  const articlesQuery = groq`*[_type == "article" && defined(slug.current)] {
    "slug": slug.current,
    "updatedAt": _updatedAt
  }`;

  // 2. Pobieramy dane równolegle
  const [sanityProjects, sanityArticles] = await Promise.all([
    client.fetch<SanitySlug[]>(projectsQuery),
    client.fetch<SanitySlug[]>(articlesQuery)
  ]);

  // 3. Mapujemy PROJEKTY
  const projectUrls = sanityProjects.map((item) => ({
    // ✅ POPRAWKA: .trim() usuwa niewidoczne znaki nowej linii i spacje
    url: `${BASE_URL}/projects/${item.slug}`.trim(),
    lastModified: new Date(item.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 4. Mapujemy ARTYKUŁY
  const articleUrls = sanityArticles.map((item) => ({
    // ✅ POPRAWKA: Tutaj również dodano .trim()
    url: `${BASE_URL}/news/${item.slug}`.trim(), 
    lastModified: new Date(item.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 5. Strony statyczne
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/service`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about_us`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // 6. Łączymy wszystko w jedną tablicę
  return [...staticRoutes, ...projectUrls, ...articleUrls];
}