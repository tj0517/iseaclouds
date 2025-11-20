import { getProject } from "@/sanity/lib/getProject";
import Clientproject from "./Clientproject";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>; // ← Change this line
}

// ———————————————————————————————————————
//  METADATA (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Now this works correctly
  const project = await getProject(slug);

  return {
    title: project ? `Seaclouds - ${project.title}` : "Seaclouds | Project not found",
    description: project?.overview || "Opis projektu",
  };
}

// ———————————————————————————————————————
//  PAGE COMPONENT
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; // Now this works correctly
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