import { MetadataRoute } from 'next'
// Pamiętaj o imporcie swoich funkcji do pobierania danych, np.:
// import { getPosts, getProjects } from '@/sanity/sanity-utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.seaclouds.eu'

  // 1. Pobieranie danych (zastąp to swoimi funkcjami)
  // const news = await getPosts()
  // const projects = await getProjects()
  
  // Symulacja pustych tablic, żeby kod się nie wywalił przy kopiowaniu
  // (Usuń to, gdy podłączysz swoje dane)
  const news: any[] = [] 
  const projects: any[] = []

  // 2. Generowanie URLi dla Newsów (z naprawą błędu)
  const newsUrls = news.map((item) => ({
    // ⚠️ KLUCZOWA POPRAWKA: .trim() usuwa spacje i entery
    url: `${baseUrl}/news/${item.slug}`.trim(),
    lastModified: new Date(item._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 3. Generowanie URLi dla Projektów (z naprawą błędu)
  const projectUrls = projects.map((item) => ({
    url: `${baseUrl}/projects/${item.slug}`.trim(),
    lastModified: new Date(item._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 4. Statyczne strony i zwrócenie całości
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about_us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...newsUrls,     // Dodajemy dynamiczne newsy
    ...projectUrls,  // Dodajemy dynamiczne projekty
  ]
}