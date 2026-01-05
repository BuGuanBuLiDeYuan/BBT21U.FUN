import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bbt21u.fun'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2024-10-05'),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2024-10-09'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Article pages
  const articlePages = Object.keys(articles).map((id) => ({
    url: `${baseUrl}/articles/${id}`,
    lastModified: new Date('2024-10-05'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...articlePages]
}