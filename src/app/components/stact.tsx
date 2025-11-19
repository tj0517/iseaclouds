"use client";
import {JSX} from "react";
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
  

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  number: number;
  label: string;
  description: string;
  icon: JSX.Element;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {



 return (
  <div className="main h-auto max-w-[1500px] mx-auto overflow-clip w-full py-10 px-[5%] sm:px-[7.5%] flex flex-col lg:flex-row justify-between flex-wrap pb-10 md:pb-20 lg:pb-30 relative">


    {/* Left content */}
    <div className="content_box w-full lg:w-[55%] flex flex-col z-10">
      <h2 className="w-full text-4xl sm:text-5xl xl:text-7xl font-light text-cyan-900">
        About us
      </h2>
      <div className="text-stone-600 w-full sm:w-[80%] 2xl:w-[60%] mt-6 sm:mt-10 mb-10 sm:mb-16 text-base sm:text-lg">
        Sea Clouds was founded by a team of experts with over 25 years of professional experience and deep knowledge in the Offshore Oil & Gas and Wind Farm sectors. We specialize in delivering comprehensive offshore engineering solutions and technical advisory services across key disciplines including Marine, Offshore Construction, Survey and Seabed Intervention, as well as ROV (Remotely Operated Vehicle) operations. Our services are grounded in technical excellence, safety, and efficiency, ensuring that every involvement in our client’s project meets the highest industry standards. Partner with Sea Clouds for precise and dependable offshore engineering solutions—from concept design and planning to execution and support. Whether you require strategic offshore technical advisory or fully integrated engineering capabilities, we bring clarity and confidence to complex offshore challenges. Over...
      </div>
    </div>

    {/* Right stats */}
    <div className="w-full lg:w-[45%] flex flex-col gap-y-6 sm:gap-y-10 lg:mt-24">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-item w-full flex flex-col py-4 sm:py-6 px-6 sm:px-10 rounded-2xl text-[14px] sm:text-[16px] bg-amber-50 border-1"
          style={{ zIndex: 10 + index * 10 }}
        >
          <div className="w-full flex flex-row items-center gap-4 sm:gap-8 h-16">
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyan-900 text-amber-50 text-xl sm:text-2xl">
              {stat.icon}
            </div>

            {/* Number + Label */}
            <div className="flex flex-col justify-center h-16 gap-1 sm:gap-2">
              <div className="text-xl sm:text-2xl font-bold text-black leading-none">
                {stat.number}+
              </div>
              <div className="text-stone-700 leading-none text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);}
