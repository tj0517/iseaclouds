import { client } from "@/sanity/lib/client";
import { Article } from "@/app/types/article";

export async function getArticle(slug: string): Promise<Article | null> {
  return await client.fetch(
    `
      *[_type == "article" && slug.current == $slug][0]{
        title,
        slug,
        date,
        description,
        "photo": photo.asset->url,
        "photo2": photo2.asset->url,
        content
      }
    `,
    { slug }
  );
}

export async function getArticles(): Promise<Article[]> {
  return await client.fetch(`
    *[_type=='article'] | order(date desc){
      title,
      slug,
      date,
      description,
      "photo": photo.asset->url,
      "photo2": photo2.asset->url,
      content
    }
  `);
}
