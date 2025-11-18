"use client";

import { JSX } from "react";
import {  useRef,useLayoutEffect } from 'react';
import gsap from 'gsap';
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Menu from "./components/menu";
import Footer from "./components/footer";
import { courses } from "@/data/courses";
import StatsSection from "./components/stact";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 1) => ({ opacity: 1, x: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
};

export const scaleUpDelay = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i = 1) => ({ scale: 1, opacity: 1, transition: { delay: i * 0.2, duration: 0.6 } }),
};

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

interface ClientHomeProps {
  stats: Stat[];
  items: Item[];
   project?: {  // Dodaj ? aby było optional
    title: string;
    industry: string;
    slug: string;
    location: string;
    date: string;
    photo: string;
  };
}



export default function ClientHome({ stats, items,project}: ClientHomeProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // pomocnicza funkcja — określa, ile części sekcji jest widoczne w oknie
  const getRatio = (el: HTMLElement) => {
    return window.innerHeight / (window.innerHeight + el.offsetHeight);
  };

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
    <div className="overflow-x-hidden sm:text-lg md:text-[13.5px] lg:text-[15px]  xl:text-[18px] text-stone-600">
      <div className="block lg:hidden"><Menu /></div>
      
      <div className="w-full flex flex-row h-[650px] md:h-[650px] xl:h-[750px]">
        <div className="w-full lg:w-[45%] 2xl:w-[55%] h-full relative">
          <Image src="/offer/offer3.jpg" alt="Oil&gas" priority={true} fill className="object-cover object-center lg:brightness-100 brightness-30" />
          <div className="absolute top-2.5 lg:top-10 left-2.5 lg:left-10">
            <Image src="/logo.png" alt="Logo" width={150} height={150} priority className="hidden lg:block md:w-32 md:h-32 lg:w-32 lg:h-32" />
          </div>
        </div>

        <div className="lg:bg-gray-400 lg:w-[55%] w-full absolute lg:relative h-full">
          <div className="w-[80%] xl:w-[75%] 2xl:w-[60%] ml-[15%] xl:ml-[20%] mt-10 hidden lg:flex flex-row justify-between font-light text-lg md:text-[16px] xl:text-[17px] text-amber-50">
            <div><Link className="hover:text-cyan-900" href="/">Home</Link></div>
            <div><Link className="hover:text-cyan-900" href="/projects/baltica2-wind">Projects</Link></div>
            <div><Link className="hover:text-cyan-900" href="/courses">Courses</Link></div>
            <div><Link className="hover:text-cyan-900" href="/news">News</Link></div>
            <div><Link className="hover:text-cyan-900" href="/offer">Offer</Link></div>
            <div><Link className="hover:text-cyan-900" href="/about_us">About us</Link></div>
            <div><Link className="hover:text-cyan-900" href="/contact">Contact us</Link></div>
          </div>

          <div className="ml-auto mr-auto lg:ml-[15%] xl:ml-[20%] w-[75%] sm:w-[60%] lg:w-full">
            <h1 className="text-cyan-700 lg:text-cyan-900 w-full lg:w-[70%] text-center lg:text-left text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:w-[50%] font-light mt-16 md:mt-24 lg:mt-16 underline">
              Navigating Offshore Excellence
            </h1>

            <div className="lg:w-[70%] text-center lg:text-left mt-12 lg:mt-8 xl:mt-15 text-amber-50 font-light text-lg xl:text-xl 2xl:w-[50%]">
              Sea Clouds delivers integrated offshore engineering solutions and technical advisory services for Oil & Gas and Wind Farm projects, with a strong focus on quality, safety, and sustainability.
            </div>
            <Link  href="/offer">
            <div className="p-4 bg-cyan-900 text-white w-[40%] ml-[30%] lg:ml-0 mt-12 lg:mt-16 text-center hover:cursor-pointer hover:text-cyan-900 hover:bg-amber-50">
              Explore
            </div>
            </Link>

            <div className="w-[30%] lg:w-[10%] ml-[35%] lg:ml-0 flex flex-row justify-between text-3xl lg:text-2xl xl:text-3xl text-white mt-[70px] lg:mt-[80px]">
              <a href="https://www.instagram.com/seaclouds_offshore/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://pl.linkedin.com/company/sea-clouds" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  mx-auto ">
      

      {/* Sekcje About, Stats, Courses, Why Us */}
     <StatsSection stats={stats} />
    <div className="w-full -50">
<div className="w-full px-[5%] sm:px-[7.5%] max-w-[1500px] mx-auto flex flex-col py-8 md:py-10 relative  pb-20 md:pb-30">
  {/* Nagłówek sekcji */}
   <div className=" absolute top-0 right-0 translate-x-1/3 -translate-y-1/2 opacity-70 z-0 rotate-90">
        <Image 
          src="/bg-2.svg"
          alt="Bg donut"
          width={800}
          height={800}
          className="object-cover"
        />
      </div>
  <div className="w-full flex flex-row justify-between border-b-2 border-black pb-4 mb-10 md:mb-20 z-10">
    <h2 className="text-cyan-900 text-2xl md:text-3xl lg:text-4xl">Last<br/> Projects</h2>
  </div>

  {/* Główna zawartość */}
  <div className="w-full flex flex-col pt-8 md:pt-10 relative z-10">
    {/* Linia pionowa - ukryj na mobile */}
    <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-2 h-full bg-cyan-900 rounded-t-2xl z-10"></div>
    
    {/* Górny wiersz z projektem */}
    <div className="w-full h-auto md:h-72 flex flex-col lg:flex-row z-20 gap-8 md:gap-0">
      {/* Lewa karta - tekst */}
      <div className="w-full lg:w-[40%] text-stone-800 rounded-xl lg:rounded-tr-[100px] px-6 py-6 md:px-10 md:py-10 flex flex-col gap-2 shadow-[-8px_8px_8px_-6px_rgba(0,_0,_0,_0.1)] md:shadow-[-14px_13px_8px_-6px_rgba(0,_0,_0,_0.1)] border-2 border-black bg-white order-1">
        {project ? (
          <>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-thin pr-4 md:pr-10 pb-4 xl:pb-8">{project.title}</h3>
            <p className="font-bold text-sm md:text-base">{project.industry}</p>
            <p className="font-bold text-sm md:text-base">{project.location}</p>
            <p className="font-bold text-sm md:text-base">{project.date}</p>
          </>
        ) : (
          <p>No project data available</p>
        )}
      </div>

      {/* Środkowa strzałka - zmiana pozycji na mobile */}
      <div className="w-full lg:w-1/5 flex flex-row justify-center lg:justify-center h-auto lg:h-full items-center order-3 lg:order-2 my-4 lg:my-0">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-900 rounded-full flex flex-row justify-center items-center text-amber-50 text-2xl md:text-3xl"> 
          <Link href={`/projects/${project?.slug}`}>
            <GoArrowUpRight strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Prawa karta - zdjęcie */}
      <div className="w-full lg:w-[40%] order-2 lg:order-3">
        {project && project.photo ? (
          <div className="w-full h-64 md:h-full relative rounded-xl lg:rounded-tr-[100px] overflow-clip shadow-[-8px_8px_8px_-6px_rgba(0,_0,_0,_0.1)] md:shadow-[-14px_13px_8px_-6px_rgba(0,_0,_0,_0.1)]">
            <Image 
              src={project.photo} 
              alt={project.title} 
              fill 
              className="object-cover object-center hover:scale-105 transition-transform duration-300" 
            />
          </div>
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">No project image available</p>
          </div>
        )}
      </div>
    </div>

    {/* Dolny wiersz - "Wait for more" */}
    <div className="w-full h-auto md:h-56 hidden lg:flex flex-col lg:flex-row z-20 mt-8 md:mt-0">
      
      <div className="w-full lg:w-[40%] order-2 lg:order-1"></div>
      
      <div className="w-full lg:w-1/5 flex flex-row justify-center lg:justify-center h-auto lg:h-full items-center lg:items-end order-1 lg:order-2 mb-4 lg:mb-0">
        <div className="hidden lg:flex  md:w-10 md:h-10 bg-cyan-900 rounded-full flex-row justify-center items-center text-white text-xl md:text-3xl"></div>
      </div>
      
      <div className="w-full lg:w-[40%] flex flex-row justify-center lg:justify-start items-center lg:items-end text-xl md:text-3xl lg:text-5xl font-thin text-stone-900 underline order-3 text-center lg:text-left">
        Wait for more
      </div>
    </div>
  </div>
</div>
</div>

        <div className="w-full px-[7.5%] max-w-[1500px] mx-auto  flex flex-col py-10 relative">
           <div className=" absolute top-0 left-0 -translate-x-2/3 -translate-y-1/3 opacity-70 z-0 rotate-90">
        <Image 
          src="/bg-2.svg"
          alt="Bg donut"
          width={800}
          height={800}
          className="object-cover"
        />
      </div>
        <h2 className="text-center text-cyan-900 z-10">Why us?</h2>
        <div className="w-full flex flex-row flex-wrap pb-9 justify-between mt-10 md:mt-20 text-[12px] md:text-[14px] xl:text-[16px] gap-y-10 z-10">
          {items.map((item, index) => (
            <div key={index} className="w-[47.5%] lg:w-[20%] flex flex-col text-center  lg:mb-0">
              <div className="text-cyan-900 text-2xl md:text-3xl xl:text-3xl font-light pb-7 border-b-2 border-b-cyan-900 whitespace-pre-line">{item.title}</div>
              <div className="italic mt-6 xl:mt-10 text-stone-600">{item.text}</div>
            </div>
          ))}
        </div>
      </div>

     <div
  ref={sectionRef}
  className="parallax_container relative w-full h-[250px] overflow-hidden"
>
  <div
    className="bg absolute left-0 top-0 w-full h-full bg-cover bg-center brightness-50"
    style={{ backgroundImage: "url('/offer/offer3.jpg')" }}
  ></div>

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl lg:text-5xl font-light text-center">
    Your Trusted Offshore Engineering Partner
  </div>
</div>


     <div className="w-full max-w-[1500px] mx-auto px-[7.5%] py-16 pb-24 flex lg:flex-row flex-col justify-between overflow-clip  relative">
      <div className=" absolute top-0 left-0 -translate-x-1/3 -translate-y-1/2 opacity-70 z-0 rotate-90">
        <Image 
          src="/bg-2.svg"
          alt="Bg donut"
          width={800}
          height={800}
          className="object-cover"
        />
      </div>
        <div className="flex-col w-[90%] ml-auto mr-auto xl:mr-0 xl:ml-0 lg:w-[45%] text-center lg:text-left z-10" >
          <h4 className="text-4xl md:text-5xl text-cyan-900 font-thin underline">Master Offshore Skills with SeaClouds Courses</h4>
          <div className="text-base sm:text-lg text-cyan-900 font-light mt-10 md:mt-6 xl:mt-10 2xl:leading-10 w-full md:w-[80%] lg:w-full md:ml-[10%] lg:ml-0">
          Advance your career in the maritime industry with SeaClouds courses! We offer professional training for aspiring Surveyors, Offshore Technicians, and deck specialists, equipping you for international offshore projects. Our courses combine practical skills with essential theoretical knowledge, while experienced instructors and modern training materials ensure you’re ready to tackle offshore challenges from day one.
          </div>
          <div className="bg-cyan-900 px-4 py-2 text-xl text-amber-50 xl:w-[40%] w-[60%] ml-[20%] lg:ml-0 mt-10 hover:cursor-pointer hover:bg-gray-400">
          <Link href="/courses">Check out</Link>
          </div>
        </div>

        <div className="w-[90%] md:w-[80%] lg:w-[40%] ml-auto mr-auto md:mr-0 md:ml-[10%] lg:ml-0 xl:w-[42.5%] flex flex-row justify-between flex-wrap h-full mt-10 lg:mt-auto gap-y-5">
          {courses.map((src, index) => (
            <div key={index} className="w-[47.5%] aspect-square relative rounded-3xl overflow-clip shadow-2xl" >
              <Link href={`/courses/${src.slug}`}><Image src={`/courses/${src.image}`} alt={`Course ${index + 1}`} fill className="object-cover object-center grayscale hover:grayscale-0 hover:cursor-pointer transition duration-300" /></Link>
            </div>
          ))}
        </div>
      </div>

</div>
      <Footer />
    </div>
  );
}