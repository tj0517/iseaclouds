import Image from "next/image";
import React from 'react';
import Menu from '../components/menu';
import Footer from '../components/footer';
import { Poppins } from "next/font/google";

const playfair = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-poppins",
});

const offers = [
  {
    image: "1.webp",
    title: "Our mission",
    description: [
      "We deliver advanced engineering solutions with strong industry expertise, adapting to the dynamic needs of our clients through both remote and on-site support.",
      "While we focus on building long-term partnerships, we also offer flexible, ad-hoc cooperation for projects that require fast and responsive action.",
    ],
  },
  {
    image: "offer4.jpg",
    title: "Our vision",
    description: [
      "To empower young talent by equipping them with the skills and knowledge. Providing structured courses and a comprehensive mentoring system",
      "Sharing actively experience and knowledge with young employers by fully involvement in projects as well by continuous oversight and supervision of their work.",
    ],
  },
]

const team=[
  {
    image:"ej.png",
    name:"Ernest Jezionek (CEO)",
    specialization:"Survey & GIS",
  },
  {
    image:"ml.png",
    name:"Michał Łatacz (COO)",
    specialization:"Construction & IRM",
  },
  {
    image:"kj.png",
    name:"Karol Jacob (COO)",
    specialization:"ROV & Offshore Robotics",
  },
]

export default function Home() {
  return (
    <div className={`${playfair.className} w-full bg-amber-50 text-black`}>  
      <Menu />
      
      {/* Hero */}
      <div className="w-full flex flex-col sm:flex-row bg-amber-50 pt-10 px-[10%] pb-10">
        <h1 className="text-cyan-900 w-full sm:w-[40%] text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-thin mb-4 sm:mb-0 sm:mr-10 underline">
          About us
        </h1>
        <div className="text-black w-full sm:w-1/2 text-xs sm:text-base xl:text-[18px] mt-4 sm:mt-20">
          At Sea Clouds Engineering Solutions, we specialize in Integrated Engineering Services for the Offshore Oil & Gas and Wind Farm sectors, delivering innovative solutions with a commitment to quality, safety, and sustainability.
        </div>
      </div>

      {offers.map((offer, index) =>
        index % 2 === 0 ? (
          <div key={index}>
            {/* Pierwszy element z pary */}
            <div className="w-full flex flex-col md:flex-row md:bg-gray-400">
               <div className="w-full md:w-[55%] lg:w-[60%] aspect-square sm:h-[55vh]  md:aspect-video relative order-1 md:order-2 max-w-lg  sm:max-w-full mx-auto sm:mx-0">
                <Image
                  src={`/about_us/${offer.image}`}
                  alt={offer.title}
                  priority={index===0}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="w-full md:w-[45%] flex flex-col sm:flex-row md:flex-col lg:w-[40%] sm:pl-5 md:pl-0 lg:pl-12 xl:pl-16 pt-5 lg:pt-12 order-1 md:order-2">
                  <h3 className="text-cyan-900 w-full sm:w-[45%] md:w-full text-3xl xl:text-4xl font-thin underline text-center sm:text-left md:text-center lg:text-left mt-4 sm:mt-4">
                  {offer.title}
                </h3>
                <ul className="list-none w-[80%] sm:w-[45%] md:w-[70%] lg:w-[80%] mx-auto sm:mx-0 md:mx-auto lg:pl-4 space-y-1 mt-6 sm:mt-20 md:mt-12 lg:mt-8 italic text-sm md:text-[13px] lg:text-[15px] xl:text-[17px] mb-6 md:mb-0 text-center sm:text-left md:text-center lg:text-left pb-4">
                  {offer.description.map((item, i) => (
                    <li key={i} className="mb-4 md:mb-3 lg:mb-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Drugi element z pary */}
            {offers[index + 1] && (
              <div className="w-full flex flex-col md:flex-row bg-amber-50">
               <div className="w-full md:w-[55%] lg:w-[60%] aspect-square sm:h-[55vh]  md:aspect-video relative order-1 md:order-2 max-w-lg  sm:max-w-full mx-auto sm:mx-0">
                  <Image
                    src={`/about_us/${offers[index + 1].image}`}
                    alt={offers[index + 1].title}
                    priority={index===1}
                    fill
                    className="object-cover object-center "
                  />
                </div>

                <div className="w-full md:w-[45%] flex flex-col sm:flex-row md:flex-col lg:w-[40%] sm:pl-5 md:pl-0 lg:pl-12 xl:pl-16 pt-5 lg:pt-12 order-1 md:order-1">
                  <h3 className="text-cyan-900 w-full sm:w-[45%] md:w-full text-3xl xl:text-4xl font-thin underline text-center sm:text-left md:text-center lg:text-left mt-4 sm:mt-4">
                    {offers[index + 1].title}
                  </h3>
                  <ul className="list-none w-[80%] sm:w-[45%] md:w-[70%] lg:w-[80%] mx-auto sm:mx-0 md:mx-auto lg:pl-4 space-y-1 mt-6 sm:mt-20 md:mt-12 lg:mt-8 italic text-sm md:text-[13px] lg:text-[15px] xl:text-[17px] mb-6 md:mb-0 text-center sm:text-left md:text-center lg:text-left pb-4">
                    {offers[index + 1].description.map((item, i) => (
                      <li key={i} className="mb-4 md:mb-3 lg:mb-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ) : null
      )}

      <div className="w-full">
        {/* Wersja desktop - zdjęcia i opisy w linii */}
        <div className="hidden sm:flex sm:flex-row mb-10">
          {team.map((member, index) => (
            <div key={index} className="w-full sm:w-1/3 flex flex-col items-center">
              <div className="w-full aspect-square relative bg-white">
                <Image
                  src={`/about_us/${member.image}`}
                  alt={member.name}
                  priority={index === 1}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full relative text-center py-5 text-lg lg:text-xl">
                <div className="border-b-2 w-[80%] mx-auto pb-2">{member.name}</div>
                <div className="pt-3 text-base lg:text-lg text-cyan-900 font-black">{member.specialization}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Wersja mobile - zdjęcie i opis pod sobą dla każdej osoby */}
        <div className="flex flex-col sm:hidden">
          {team.map((member, index) => (
            <div key={index} className="mb-8">
              <div className="w-full aspect-square relative bg-white max-w-md mx-auto">
                <Image
                  src={`/about_us/${member.image}`}
                  alt={member.name}
                  priority={index === 1}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full relative text-center py-5">
                <div className="border-b-2 w-[70%] mx-auto pb-2 text-xl">{member.name}</div>
                <div className="pt-3 text-base text-cyan-900 font-black">{member.specialization}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}