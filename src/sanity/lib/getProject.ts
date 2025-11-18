// app/lib/projects.ts
import { client } from "@/sanity/lib/client";
import { Project } from "@/app/types/project";


export async function getProject(slug: string): Promise<Project | null> {
  return await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      industry,
      location,
      year,
      "photo": photo.asset->url,
      "photo2": photo2.asset->url,
      overview,
      scopeOfWork,
      deliverables,
      collaboration,
      projectScale
    }
    `,
    { slug }
  );
}

export async function getProjects(): Promise<Project[]> {
  return await client.fetch(`
    *[_type == "project"] | order(date desc){
      title,
      "slug": slug.current,
      industry,
      location,
      year,
      "photo": photo.asset->url,
      "photo2": photo2.asset->url,
      overview,
      scopeOfWork,
      deliverables,
      collaboration,
      projectScale
    }
  `);
}
