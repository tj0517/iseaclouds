import { getProjects } from "@/sanity/lib/getProject";
import ClientProjects from "./ClientProjects";

export const metadata = {
  title: "Sea Clouds - Projects",
  description:
    "Offshore engineering, technical advisory and client representative projects delivered by Sea Clouds across the Baltic Sea.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <ClientProjects projects={projects} />;
}
