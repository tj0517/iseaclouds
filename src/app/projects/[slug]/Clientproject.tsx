"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import { Project } from "@/app/types/project";

// 👉 import animacji z Twojego `animations/index.ts`
import {
  FadeInWhenVisible,
  SlideFromLeft,
  SlideFromRight,
  ScaleIn,
} from "@/app/components/animations";

interface ClientProjectProps {
  project: Project;
}

export default function Clientproject({ project }: ClientProjectProps) {
  if (!project) return notFound();

  return (
    <div className="bg-amber-50 text-black">
      <Menu />

      {/* HERO */}
      <div className="w-[85%] mx-auto max-w-[1400px]">
        <div className="w-full flex flex-col lg:flex-row justify-between my-10 lg:my-20 gap-8 lg:gap-0">
          {/* Tekst lewy */}
          
            <div className="w-full lg:w-[42.5%] text-left flex flex-col text-[14px] sm:text-base xl:text-[18px]">
                <SlideFromLeft delay={0.1}>
              <h1 className="text-2xl sm:text-5xl xl:text-6xl font-thin pt-2 text-cyan-900 w-full lg:w-[70%] underline">
                {project.title}
              </h1>
</SlideFromLeft>

              <FadeInWhenVisible delay={0.2}>
                <div className="pt-6 lg:pt-10">
                  Industry:{" "}
                  <span className="font-black">{project.industry}</span>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.3}>
                <div className="pt-3 lg:pt-5">
                  Location:{" "}
                  <span className="font-black">{project.location}</span>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.4}>
                <div className="pt-3 lg:pt-5">
                  Year: <span className="font-black">{project.year}</span>
                </div>
              </FadeInWhenVisible>
            </div>
          

          {/* Obraz po prawej */}
            <div className="w-full lg:w-[55%] aspect-video relative mt-6 lg:mt-0 shadow-[-8px_8px_0px_0px_rgba(5,51,69)] md:shadow-[-12px_12px_0px_0px_rgba(5,51,69)]">
              <Image
                src={project.photo}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
        </div>

        {/* CONTENT */}
        <div className="w-full flex-col pb-10 lg:pb-20">
          {/* Project Overview */}
          <FadeInWhenVisible delay={0.2}>
            <div className="w-full px-5 sm:px-10 py-8 sm:py-10 flex flex-col lg:flex-row border-2 border-black gap-6 shadow-[-8px_8px_0px_0px_rgba(5,51,69)]">
              <div className="w-full lg:w-[40%]">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Project Overview
                </div>
              </div>
              <div className="w-full lg:w-[50%] mt-4 lg:mt-10 text-base sm:text-lg">
                {project.overview}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Scope & Deliverables */}
          <div className="w-full flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 text-left gap-6">
              <div className="w-full lg:w-[47.5%] px-5 sm:px-10 py-8 border-2 border-black shadow-[-8px_8px_0px_0px_rgba(5,51,69)]">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Scope of Work
                </div>
                <ul className="mt-6 list-disc list-inside space-y-2 text-sm sm:text-base w-[90%]">
                  {project.scopeOfWork.map((item, i) => (
                    <FadeInWhenVisible key={i} delay={0.3 + i * 0.1}>
                      <li>{item}</li>
                    </FadeInWhenVisible>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-[47.5%] px-5 sm:px-10 py-8 border-2 border-black shadow-[-8px_8px_0px_0px_rgba(5,51,69)]">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Deliverables
                </div>
                <ul className="mt-6 list-disc list-inside space-y-2 text-sm sm:text-base w-[90%]">
                  {project.deliverables.map((item, i) => (
                    <FadeInWhenVisible key={i} delay={0.4 + i * 0.1}>
                      <li>{item}</li>
                    </FadeInWhenVisible>
                  ))}
                </ul>
              </div>
          </div>

          {/* Collaboration & Project Scale */}
          <div className="w-full flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 text-left gap-6">
              <div className="w-full lg:w-[47.5%] px-5 sm:px-10 py-8 border-2 border-black shadow-[-8px_8px_0px_0px_rgba(5,51,69)]">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Collaboration
                </div>
                <ul className="mt-6 list-disc list-inside space-y-2 text-sm sm:text-base w-[90%]">
                  {project.collaboration.map((item, i) => (
                    <FadeInWhenVisible key={i} delay={0.3 + i * 0.1}>
                      <li>{item}</li>
                    </FadeInWhenVisible>
                  ))}
                </ul>
              </div>


              <div className="w-full lg:w-[47.5%] px-5 sm:px-10 py-8 border-2 border-black shadow-[-8px_8px_0px_0px_rgba(5,51,69)]">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Project Scale
                </div>
                <ul className="mt-6 list-disc list-inside space-y-2 text-sm sm:text-base w-[90%]">
                  {project.projectScale.map((item, i) => (
                    <FadeInWhenVisible key={i} delay={0.4 + i * 0.1}>
                      <li>{item}</li>
                    </FadeInWhenVisible>
                  ))}
                </ul>
              </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
