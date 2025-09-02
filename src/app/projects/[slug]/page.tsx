import Image from "next/image"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import Menu from "@/app/menu"
import Footer from "@/app/footer"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '500', '700'], // wybierz wagi, które potrzebujesz
  variable: '--font-poppins', // CSS variable do Tailwinda
})

export default async function ProjectsPage({
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

    <div className="w-full px-20 flex flex-row justify-between my-20">
    <div className="w-[45%]  text-center flex flex-col">
    <h1 className="text-4xl font-black pt-2 text-blue-800 w-[70%] mx-auto">{project.projectName}</h1>
    <div className="text-2xl pt-15">Industry: <span className="font-black">{project.industry}</span></div>
    <div className="text-2xl pt-5">Location: <span className="font-black">{project.location}</span></div>
    <div className="text-2xl pt-5">Year: <span className="font-black">{project.year}</span></div>
    </div>
    <div className="w-[47.5%] aspect-video relative">
    <Image
          src={`/news/${project.photo}`}
          alt={project.projectName}
          fill
          className="object-cover"
        />
</div>
    </div>

    <div className="w-full px-20 flex-col pb-20">

    <div className="w-full px-10 py-10 flex flex-row border-2 border-black">
    <div className="w-[40%]">
    <div className="text-4xl font-bold">Project Overview</div>
    </div>
    <div className="w-[50%] mt-10 text-lg">
    {project.overview}
    </div>
    </div>

    <div className="w-full flex flex-row justify-between mt-20 text-left">
    <div className="w-[47.5%] pl-10 py-10 border-2 border-black">
    <div className="text-4xl font-bold">Scope of Work</div>
    <div className="mt-10 text-md w-[80%] ">
    <ul className="list-disc list-inside space-y-2 ">
    {project.scopeOfWork.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
    </div>
    </div>
    <div className="w-[47.5%] pl-10 py-10 border-2 border-black">
    <div className="text-4xl font-bold">Deliverables</div>
    <div className="mt-10 text-md w-[80%]">
    <ul className="list-disc list-inside space-y-2 ">
    {project.deliverables.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
    </div>
    </div>
    </div>

    <div className="w-full flex flex-row justify-between mt-20 text-left">
    <div className="w-[47.5%] pl-10 py-10 border-2 border-black">
    <div className="text-4xl font-bold">Collaboration</div>
    <div className="mt-10 text-md w-[80%] ">
    <ul className="list-disc list-inside space-y-2 ">
    {project.collaboration.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
    </div>
    </div>
    <div className="w-[47.5%] pl-10 py-10 border-2 border-black">
    <div className="text-4xl font-bold">Project scale</div>
    <div className="mt-10 text-md w-[80%]">
    <ul className="list-disc list-inside space-y-2 ">
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
  )
}
