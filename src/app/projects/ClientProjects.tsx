"use client";

import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import { Project } from "@/app/types/project";
import {
  FadeInWhenVisible,
  SlideFromLeft,
} from "@/app/components/animations";

interface ClientProjectsProps {
  projects: Project[];
}

export default function ClientProjects({ projects }: ClientProjectsProps) {
  return (
    <div className="bg-amber-50 text-black min-h-screen">
      <Menu />

      <div className="w-[85%] mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="w-full my-10 lg:my-20">
          <SlideFromLeft delay={0.1}>
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-thin text-cyan-900 underline">
              Our Projects
            </h1>
          </SlideFromLeft>
          <FadeInWhenVisible delay={0.3}>
            <p className="pt-6 lg:pt-10 text-base sm:text-lg text-stone-600 w-full lg:w-[60%]">
              Offshore engineering, technical advisory and client representative
              services delivered across the Baltic Sea and beyond.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Project cards */}
        <div className="w-full flex flex-col gap-10 lg:gap-16 pb-10 lg:pb-20">
          {projects.map((project, i) => (
            <FadeInWhenVisible key={project.slug} delay={0.15 + (i % 2) * 0.1}>
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View project details: ${project.title}`}
                className="group block"
              >
                <div
                  className={`w-full flex flex-col ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } border-2 border-black bg-amber-50 shadow-[-8px_8px_0px_0px_rgba(5,51,69)] md:shadow-[-12px_12px_0px_0px_rgba(5,51,69)] transition-transform duration-300 group-hover:-translate-y-1`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-[55%] aspect-video relative overflow-hidden">
                    {project.photo ? (
                      <Image
                        src={project.photo}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-500">No image</p>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-[45%] px-5 sm:px-10 py-8 sm:py-10 flex flex-col justify-between gap-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-cyan-900 group-hover:underline">
                        {project.title}
                      </h2>
                      <div className="pt-4 sm:pt-6 flex flex-col gap-2 text-sm sm:text-base text-stone-600">
                        <div>
                          Industry:{" "}
                          <span className="font-black text-black">
                            {project.industry}
                          </span>
                        </div>
                        <div>
                          Location:{" "}
                          <span className="font-black text-black">
                            {project.location}
                          </span>
                        </div>
                        <div>
                          Year:{" "}
                          <span className="font-black text-black">
                            {project.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row items-center gap-3">
                      <span className="text-sm sm:text-base font-bold">
                        Read more
                      </span>
                      <span className="w-10 h-10 bg-cyan-900 rounded-full flex flex-row justify-center items-center text-amber-50 text-2xl transition-transform duration-300 group-hover:scale-110">
                        <GoArrowUpRight strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
