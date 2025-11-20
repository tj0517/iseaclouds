import { getProject } from "@/sanity/lib/getProject";
import Clientproject from "./Clientproject";
import type { Metadata } from "next";

interface Props {
  params: { slug: string }; 
}

// ———————————————————————————————————————
//  METADATA (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await the params object first
  const { slug } = await params;
  const project = await getProject(slug);

  return {
    title: project ? `Seaclouds - ${project.title}` : "Seaclouds | Project not found",
    description: project?.overview || "Opis projektu",
  };
}

// ———————————————————————————————————————
//  PAGE COMPONENT
export default async function ProjectPage({ params }: Props) {
  // Await the params object here as well for consistency
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center text-xl text-gray-600">
        Project not found.
      </div>
    );
  }

  return <Clientproject project={project} />;
}