import { client } from "@/sanity/lib/client";
import ClientNews from "./ClientWrapper";

export const metadata = {
  title: "Sea Clouds - News",
  description: "Discover articles on offshore engineering services...",
};

export default async function Page() {
  const articles = await client.fetch(`
    *[_type=='article'] | order(date desc){
      title,
      overview,
      slug,
      date,
      description,
      "photo": photo.asset->url,
      "photo2": photo2.asset->url,
      content
    }
  `);

  return <ClientNews articles={articles} />;
}
