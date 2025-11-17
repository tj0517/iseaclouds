// app/lib/projects.ts
import { client } from "@/sanity/lib/client";

export interface Project {
  title: string;
  slug: string;
  industry: string;
  location: string;
  year: string;
  photo: string;
  photo2?: string;
  overview: string;
  scopeOfWork: string[];
  deliverables: string[];
  collaboration: string[];
  projectScale: string[];
}

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
