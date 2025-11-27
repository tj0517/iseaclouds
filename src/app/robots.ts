import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Pobieramy adres strony, żeby link do sitemapy był zawsze poprawny
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.seaclouds.eu'

  return {
    rules: {
      userAgent: '*',     // Zasady dla wszystkich robotów (Google, Bing itp.)
      allow: '/',         // Pozwól indeksować całą stronę
      disallow: '/studio/', // ⚠️ WAŻNE: Zablokuj panel Sanity Studio (jeśli masz go pod tym adresem)
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Wskazujemy Google'owi, gdzie jest mapa
  }
}