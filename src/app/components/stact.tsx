"use client";
import { JSX } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeInWhenVisible, SlideFromLeft, ScaleIn, SlideFromRight } from "@/app/components/animations"

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
      <div className="content_box h-fit w-full lg:w-[55%] flex flex-col z-10">
        <ScaleIn>
          {/* H2 - Przejmuje globalne style (Bold, Underline, Cyan) */}
          <h2>About our Offshore Engineering Team</h2>
        </ScaleIn>
        
        <FadeInWhenVisible delay={0.2}>
          {/* P - Zastąpił div, usunięto zbędne style tekstu */}
          <div className="mt-6 md:mt-16 mb-10 sm:mb-16 w-full sm:w-[80%] 2xl:w-[60%] text-stone-600">
<p>
              Sea Clouds was founded by a team of experts with over 25 years of professional experience and deep knowledge in the global Offshore and Offshore Wind Farm sectors. We specialize in delivering comprehensive Offshore Engineering Services and strategic Offshore Technical Advisory across key disciplines including Marine, Offshore Construction, Survey, and ROV operations.
            </p>
            <p>
             Our services are grounded in technical excellence, ensuring that every project meets the highest industry standards. Partner with Sea Clouds for precise and dependable solutions—from concept design to execution. Whether you require specialized marine consultancy or fully integrated operational support, we bring clarity and confidence to complex offshore challenges.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Right stats */}
      <div className="w-full h-fit lg:w-[45%] flex flex-col gap-y-6 sm:gap-y-10 lg:mt-36">
        {stats.map((stat, index) => (
          <SlideFromRight key={index} delay={index * 0.5}>
            <div
              className="stat-item w-full h-fit flex flex-col py-4 sm:py-6 px-6 sm:px-10 rounded-2xl bg-amber-50 border-1 border-cyan-900 shadow-[-8px_8px_0px_0px_rgba(5,51,69)]"
              style={{ zIndex: 10 + index * 10 }}
            >
              <div className="w-full flex flex-row items-center gap-4 sm:gap-8 h-16">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyan-900 text-amber-50 text-xl sm:text-2xl flex-shrink-0">
                  {stat.icon}
                </div>

                {/* Number + Label */}
                <div className="flex flex-col justify-center h-16 mt-4 gap-y-2">
                  {/* H4 - Używamy H4 dla liczby (Globalnie: Bold, Cyan, Bez linii). !mb-0 usuwa margines. */}
                  <div className="!mb-0 leading-none font-bold text-cyan-900 text-xl sm:text-2xl">
                    {stat.number}+
                  </div>
                  {/* P - Etykieta */}
                  <p className="text-stone-700 leading-none text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          </SlideFromRight>
        ))}
      </div>
    </div>
  );
}