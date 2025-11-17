"use client";

import { JSX, use } from "react";
import { useEffect, useRef,useLayoutEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaCalendarAlt, FaBuilding, FaShip, FaClock } from "react-icons/fa";
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
}



export default function ClientHome({ stats, items}: ClientHomeProps) {
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
          <div className="w-[80%] xl:w-[75%] 2xl:w-[60%] ml-[15%] xl:ml-[20%] mt-10 hidden lg:flex flex-row justify-between text-amber-50 font-light text-lg md:text-[16px] xl:text-[17px]">
            <div><Link href="/">Home</Link></div>
            <div><Link href="/projects/baltica2-wind">Projects</Link></div>
            <div><Link href="/courses">Courses</Link></div>
            <div><Link href="/news">News</Link></div>
            <div><Link href="/offer">Offer</Link></div>
            <Link href="/about_us">About us</Link>
            <div><Link href="/contact">Contact us</Link></div>
          </div>

          <div className="ml-auto mr-auto lg:ml-[15%] xl:ml-[20%] w-[75%] sm:w-[60%] lg:w-full">
            <h1 className="text-cyan-600 lg:text-cyan-900 w-full lg:w-[70%] text-center lg:text-left text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:w-[50%] font-light mt-16 md:mt-24 lg:mt-16">
              Navigating Offshore Excellence
            </h1>

            <div className="lg:w-[70%] text-center lg:text-left mt-12 lg:mt-8 xl:mt-15 text-amber-50 font-light text-lg xl:text-xl 2xl:w-[50%]">
              Sea Clouds delivers integrated offshore engineering solutions and technical advisory services for Oil & Gas and Wind Farm projects, with a strong focus on quality, safety, and sustainability.
            </div>

            <div className="p-4 bg-cyan-900 text-white w-[40%] ml-[30%] lg:ml-0 mt-12 lg:mt-16 text-center hover:cursor-pointer hover:text-cyan-900 hover:bg-amber-50">
              <Link href="/offer">Explore</Link>
            </div>

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


        <div className="w-full px-[7.5%] max-w-[1500px] mx-auto  flex flex-col pt-10 pb-10 ">
        <h2 className="text-center">Why us?</h2>
        <div className="w-full flex flex-row flex-wrap pb-9 justify-between mt-10 md:mt-20 text-[12px] md:text-[14px] xl:text-[16px] gap-y-10">
          {items.map((item, index) => (
            <div key={index} className="w-[40%] lg:w-[20%] flex flex-col text-center  lg:mb-0">
              <div className="text-black text-2xl md:text-3xl xl:text-3xl font-light pb-7 border-b-2 border-b-cyan-900 whitespace-pre-line">{item.title}</div>
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


     <div className="w-full max-w-[1500px] mx-auto px-10 md:px-20 xl:px-30 py-16 flex lg:flex-row flex-col justify-between">
        <div className="flex-col w-[80%] ml-auto mr-auto xl:mr-0 xl:ml-0 lg:w-[40%] text-center lg:text-left" >
          <div className="text-4xl xl:text-5xl text-cyan-900 font-light">Master Offshore Skills with SeaClouds Courses</div>
          <div className="text-[16px] 2xl:text-xl text-black font-light mt-10 md:mt-6 xl:mt-10 2xl:leading-10 w-full md:w-[80%] lg:w-full md:ml-[10%] lg:ml-0">
          Advance your career in the maritime industry with SeaClouds courses! We offer professional training for aspiring Surveyors, Offshore Technicians, and deck specialists, equipping you for international offshore projects. Our courses combine practical skills with essential theoretical knowledge, while experienced instructors and modern training materials ensure you’re ready to tackle offshore challenges from day one.
          </div>
          <div className="bg-cyan-900 px-4 py-2 text-xl text-amber-50 xl:w-[40%] w-[60%] ml-[20%] lg:ml-0 mt-10 hover:cursor-pointer">
          <Link href="/courses">Check out</Link>
          </div>
        </div>

        <div className="w-[90%] md:w-[80%] lg:w-[50%] ml-auto mr-auto md:mr-0 md:ml-[10%] lg:ml-0 xl:w-[42.5%] flex flex-row justify-between flex-wrap h-full mt-20 lg:mt-0">
          {courses.map((src, index) => (
            <div key={index} className="w-[47.5%] aspect-square relative mb-5 rounded-3xl overflow-clip" >
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