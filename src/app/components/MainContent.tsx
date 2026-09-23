"use client";

import { JSX, useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import StatsSection from "./stact";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeInWhenVisible, ScaleIn } from "@/app/components/animations";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
    number: number;
    label: string;
    icon: JSX.Element;
    description: string;
}

interface Item {
    title: string;
    text: string;
}

interface FeaturedProject {
    title: string;
    industry: string;
    slug: string;
    location: string;
    date: string;
    photo: string;
    photoAspect?: number;
}

interface LatestArticle {
    title: string;
    slug: string;
    date?: string;
    photo?: string;
}

interface MainContentProps {
    stats: Stat[];
    items: Item[];
    projects?: FeaturedProject[];
    articles?: LatestArticle[];
}

export default function MainContent({ stats, items, projects = [], articles = [] }: MainContentProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const bg = section.querySelector(".bg") as HTMLDivElement;
        if (!bg) return;

        gsap.fromTo(
            bg,
            { backgroundPosition: "50% 0%" },
            {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div className="overflow-x-hidden text-stone-600">
            <div className="w-full mx-auto">
                {/* Sekcje About, Stats, Courses, Why Us */}
                <StatsSection stats={stats} />
                <div className="w-full">
                    <section className="w-full px-[5%] sm:px-[7.5%] max-w-[1500px] mx-auto flex flex-col py-8 md:py-10 relative pb-6 md:pb-30">
                        {/* Nagłówek sekcji */}
                        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/2 opacity-70 z-0 rotate-90"></div>

                        <div className="w-full flex flex-row justify-between pb-4 mb-10 md:mb-20 z-10 border-b-2 border-b-black">
                            <ScaleIn>
                                {/* H2 - Nagłówek sekcji */}
                                <h2>Featured<br />Offshore Projects</h2>
                            </ScaleIn>
                        </div>

                        {/* Główna zawartość - siatka kart projektów */}
                        <div className="w-full flex flex-col relative z-10">
                            {projects.length > 0 ? (
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {projects.map((project, index) => (
                                        <FadeInWhenVisible key={project.slug} delay={index * 0.15}>
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                aria-label={`View project details: ${project.title}`}
                                                className="group flex flex-col h-full border-2 border-cyan-900 bg-amber-50 rounded-xl overflow-hidden shadow-[-8px_8px_0px_0px_rgba(5,51,69)] transition-transform duration-300 hover:-translate-y-1"
                                            >
                                                {/* Obraz */}
                                                <div className="w-full aspect-video relative overflow-hidden">
                                                    {project.photo ? (
                                                        <Image
                                                            src={project.photo}
                                                            alt={project.title}
                                                            fill
                                                            className={`object-cover ${project.photoAspect && project.photoAspect < 1 ? "object-top" : "object-center"} transition-transform duration-500 group-hover:scale-105`}
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                            <p className="text-gray-500">No image</p>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Tekst */}
                                                <div className="flex flex-col flex-grow gap-2 px-5 py-5 md:px-6 md:py-6">
                                                    <h3 className="!text-lg xl:!text-xl group-hover:text-cyan-900 transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <p className="!m-0">{project.industry}</p>
                                                    <p className="!m-0">{project.location}</p>
                                                    <p className="!m-0">{project.date}</p>
                                                    <div className="mt-auto pt-4 flex flex-row items-center gap-2 text-cyan-900">
                                                        <span className="text-sm font-bold">Read more</span>
                                                        <GoArrowUpRight strokeWidth={1.5} className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </FadeInWhenVisible>
                                    ))}
                                </div>
                            ) : (
                                <p>No project data available</p>
                            )}

                            {/* "View all projects" */}
                            <div className="w-full flex flex-row justify-center md:justify-end mt-10 md:mt-12">
                                <Link href="/projects" className="group flex flex-row items-center gap-3">
                                    <span className="text-lg md:text-xl font-medium group-hover:text-cyan-900 transition-colors duration-300">View all projects</span>
                                    <span className="w-10 h-10 bg-cyan-900 rounded-full flex flex-row justify-center items-center text-amber-50 text-2xl group-hover:scale-110 transition-transform duration-300">
                                        <GoArrowUpRight strokeWidth={1.5} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="w-full px-[7.5%] max-w-[1500px] mx-auto flex flex-col py-10 relative">
                    <div className="absolute top-0 left-0 -translate-x-2/3 -translate-y-1/3 opacity-70 z-0 rotate-90"></div>
                    <ScaleIn>
                        {/* H2 - Nagłówek sekcji */}
                        <h2 className="text-center z-10">Why us?</h2>
                    </ScaleIn>

                    <div className="w-full flex flex-row flex-wrap pb-9 justify-between mt-10 md:mt-20 gap-y-10 z-10">
                        {items.map((item, index) => (
                            <div key={index} className="w-[47.5%] lg:w-[20%] flex flex-col text-center lg:mb-0">
                                <FadeInWhenVisible delay={index * 0.3}>
                                    {/* H3 - Tytuł elementu (zastąpił div z klasami) */}
                                    <h3 className="whitespace-pre-line pb-7 border-b-2 border-b-cyan-900 ">{item.title}</h3>
                                    {/* P - Tekst elementu */}
                                    <p className="italic mt-6 xl:mt-10 text-stone-600">{item.text}</p>
                                </FadeInWhenVisible>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    ref={sectionRef}
                    className="parallax_container relative w-full h-[300px] md:h-[360px] overflow-hidden"
                >
                    <div
                        className="bg absolute left-0 top-0 w-full h-full bg-cover bg-center brightness-50"
                        style={{ backgroundImage: "url('/offer/offer3.jpg')" }}
                        aria-label="Marine and Subsea Engineering operations supporting Offshore Wind Farm construction"
                    ></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 md:gap-8 px-[7.5%] text-center">
                        {/* H2 - Hasło na zdjęciu (override kolorów na biały i usunięcie linii) */}
                        <h2 className="!text-amber-50 no-underline !text-3xl sm:!text-4xl lg:!text-5xl font-thin max-w-[900px]">
                            Ready to take your offshore project further?
                        </h2>
                        <Link
                            href="/contact"
                            className="bg-amber-50 text-cyan-900 px-8 py-3 text-lg md:text-xl font-bold hover:bg-cyan-900 hover:text-amber-50 border-2 border-amber-50 transition-colors duration-300"
                        >
                            Get in touch
                        </Link>
                    </div>
                </section>

                {/* Sekcja Latest News */}
                {articles.length > 0 && (
                    <section className="w-full px-[5%] sm:px-[7.5%] max-w-[1500px] mx-auto flex flex-col py-14 md:py-20 relative">
                        <div className="w-full flex flex-row justify-between items-end pb-4 mb-10 md:mb-14 z-10 border-b-2 border-b-black">
                            <ScaleIn>
                                {/* H2 - Nagłówek sekcji */}
                                <h2>Latest<br />News</h2>
                            </ScaleIn>
                        </div>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {articles.map((article, index) => (
                                <FadeInWhenVisible key={article.slug} delay={index * 0.15}>
                                    <Link
                                        href={`/news/${article.slug}`}
                                        aria-label={`Read article: ${article.title}`}
                                        className="group flex flex-col h-full border-2 border-cyan-900 bg-amber-50 rounded-xl overflow-hidden shadow-[-8px_8px_0px_0px_rgba(5,51,69)] transition-transform duration-300 hover:-translate-y-1"
                                    >
                                        <div className="w-full aspect-video relative overflow-hidden">
                                            {article.photo ? (
                                                <Image
                                                    src={article.photo}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                    <p className="text-gray-500">No image</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col flex-grow gap-2 px-5 py-5 md:px-6 md:py-6">
                                            {article.date && (
                                                <p className="!m-0 text-sm uppercase tracking-widest">
                                                    {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                                                </p>
                                            )}
                                            <h3 className="!text-lg xl:!text-xl group-hover:text-cyan-900 transition-colors duration-300">
                                                {article.title}
                                            </h3>
                                            <div className="mt-auto pt-4 flex flex-row items-center gap-2 text-cyan-900">
                                                <span className="text-sm font-bold">Read more</span>
                                                <GoArrowUpRight strokeWidth={1.5} className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </FadeInWhenVisible>
                            ))}
                        </div>

                        <div className="w-full flex flex-row justify-center md:justify-end mt-10 md:mt-12">
                            <Link href="/news" className="group flex flex-row items-center gap-3">
                                <span className="text-lg md:text-xl font-medium group-hover:text-cyan-900 transition-colors duration-300">All news</span>
                                <span className="w-10 h-10 bg-cyan-900 rounded-full flex flex-row justify-center items-center text-amber-50 text-2xl group-hover:scale-110 transition-transform duration-300">
                                    <GoArrowUpRight strokeWidth={1.5} />
                                </span>
                            </Link>
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
}
