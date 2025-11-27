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
  // Zakładam, że w plikach schema nazwałeś je 'project' i 'article'
  const projectsQuery = groq`*[_type == "project" && defined(slug.current)] {
    "slug": slug.current,
    "updatedAt": _updatedAt
  }`;

  const articlesQuery = groq`*[_type == "article" && defined(slug.current)] {
    "slug": slug.current,
    "updatedAt": _updatedAt
  }`;

  // 2. Pobieramy dane równolegle (dla wydajności)
  const [sanityProjects, sanityArticles] = await Promise.all([
    client.fetch<SanitySlug[]>(projectsQuery),
    client.fetch<SanitySlug[]>(articlesQuery)
  ]);

  // 3. Mapujemy PROJEKTY (np. seaclouds.eu/projects/...)
  const projectUrls = sanityProjects.map((item) => ({
    url: `${BASE_URL}/projects/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 4. Mapujemy ARTYKUŁY (np. seaclouds.eu/blog/...)
  // ⚠️ WAŻNE: Sprawdź, czy Twoje artykuły są pod /blog/, /news/ czy /articles/
  const articleUrls = sanityArticles.map((item) => ({
    url: `${BASE_URL}/news/${item.slug}`, 
    lastModified: new Date(item.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8, // Artykuły często są ważniejsze dla SEO niż stare projekty
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
    // Jeśli masz stronę zbiorczą bloga:
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