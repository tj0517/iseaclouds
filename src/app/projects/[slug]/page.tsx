import Image from "next/image"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import Menu from "@/app/components/menu"
import Footer from "@/app/components/footer"
import { Poppins } from 'next/font/google'
import type { Metadata } from "next";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '500', '700'], // wybierz wagi, które potrzebujesz
  variable: '--font-poppins', // CSS variable do Tailwinda
})

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await the params first
  const { slug } = await params; 
  const project = projects.find((c) => c.slug === slug);

  return {
    title: project ? `Seaclouds - ${project.projectName}` : "Seaclouds | Course not found",
    description: project?.overview || "Opis kursu",
  };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = projects.find((a) => a.slug === slug)

  if (!project) return notFound()


  return (
    <div className={`${poppins.className} bg-amber-50 text-black`}>
        <Menu/>

        {/* Hero Section */}
        <div className="w-full px-5 sm:px-10 lg:px-20 flex flex-col lg:flex-row justify-between my-10 lg:my-20 gap-8 lg:gap-0">
            <div className="w-full lg:w-[45%] text-center flex flex-col text-lg sm:text-[20px] xl:text-2xl">
                <h1 className="text-2xl sm:text-3xl xl:text-4xl font-black pt-2 text-blue-800 w-full lg:w-[70%] mx-auto">
                    {project.projectName}
                </h1>
                <div className="  pt-6 lg:pt-10 xl:pt-15">
                    Industry: <span className="font-black">{project.industry}</span>
                </div>
                <div className=" pt-3 lg:pt-5">
                    Location: <span className="font-black">{project.location}</span>
                </div>
                <div className=" pt-3 lg:pt-5">
                    Year: <span className="font-black">{project.year}</span>
                </div>
            </div>
            <div className="w-full lg:w-[47.5%] aspect-video relative mt-6 lg:mt-0">
                <Image
                    src={`/projects/${project.photo}`}
                    alt={project.projectName}
                    fill
                    className="object-cover"
                />
            </div>
        </div>

        {/* Content Sections */}
        <div className="w-full px-5 sm:px-10 lg:px-20 flex-col pb-10 lg:pb-20">

            {/* Project Overview */}
            <div className="w-full px-5 sm:px-10 py-8 sm:py-10 flex flex-col lg:flex-row border-2 border-black gap-6 lg:gap-0">
                <div className="w-full lg:w-[40%]">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">Project Overview</div>
                </div>
                <div className="w-full lg:w-[50%] mt-4 lg:mt-10 text-base sm:text-lg">
                    {project.overview}
                </div>
            </div>

            {/* Scope & Deliverables */}
            <div className="w-full flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 text-left gap-6 lg:gap-0">
                <div className="w-full lg:w-[47.5%] px-5 sm:px-10 py-8 sm:py-10 border-2 border-black">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">Scope of Work</div>
                    <div className="mt-6 lg:mt-10 text-sm sm:text-base w-full lg:w-[80%]">
                        <ul className="list-disc list-inside space-y-2">
                            {project.scopeOfWork.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-[47.5%] px-5 sm:px-10 py-8 sm:py-10 border-2 border-black">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">Deliverables</div>
                    <div className="mt-6 lg:mt-10 text-sm sm:text-base w-full lg:w-[80%]">
                        <ul className="list-disc list-inside space-y-2">
                            {project.deliverables.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Collaboration & Project Scale */}
            <div className="w-full flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 text-left gap-6 lg:gap-0">
                <div className="w-full lg:w-[47.5%] px-5 sm:px-10 py-8 sm:py-10 border-2 border-black">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">Collaboration</div>
                    <div className="mt-6 lg:mt-10 text-sm sm:text-base w-full lg:w-[80%]">
                        <ul className="list-disc list-inside space-y-2">
                            {project.collaboration.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-[47.5%] px-5 sm:px-10 py-8 sm:py-10 border-2 border-black">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">Project scale</div>
                    <div className="mt-6 lg:mt-10 text-sm sm:text-base w-full lg:w-[80%]">
                        <ul className="list-disc list-inside space-y-2">
                            {project.projectScale.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
);
}