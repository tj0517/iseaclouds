import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return builder.image(source);
}

export async function getArticle(slug: string) {
  return await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      title,
      date,
      description,
      content,
      photo,
      photo2,
      slug
    }`,
    { slug }
  );
}