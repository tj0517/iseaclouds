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
    title:
    [ 
      "Our",
      "vission"
    ],
    description: [
      "We deliver advanced engineering solutions with strong industry expertise, adapting to the dynamic needs of our clients through both remote and on-site support.",
      "While we focus on building long-term partnerships, we also offer flexible, ad-hoc cooperation for projects that require fast and responsive action.",
    ],
  },
  {
    
    title:    [ 
      "Our",
      "mission"
    ],
    description: [
      "To empower young talent by equipping them with the skills and knowledge. Providing structured courses and a comprehensive mentoring system",
      "Sharing actively experience and knowledge with young employers by fully involvement in projects as well by continuous oversight and supervision of their work.",
    ],
  },
]

const team=[
  {
    image:"ej.png",
    name:"Ernest Jezionek",
    specialization:"Managing Director",
  },
  {
    image:"ml.png",
    name:"Michał Łatacz",
    specialization:"Operational Director (Marine & Construction)",
  },
  {
    image:"kj.png",
    name:"Karol Jacob",
    specialization:"Operational Director (Survey & ROV)",
  },
]

export default function Home() {
  return (
  <div className="bg-amber-50 text-black">  
    <Menu />

    <div className="w-full px-[5%] sm:px-[7.5%] max-w-[1500px] mx-auto flex flex-col gap-y-20 mb-20">
      
      {/* Sekcja About Us */}
      <div className="w-full flex flex-col lg:flex-row bg-amber-50 pt-10 pb-10 border-b-2 gap-y-8 lg:gap-y-0">
        <h2 className="text-cyan-900 w-full lg:w-1/3 underline text-2xl lg:text-4xl">
          About us
        </h2>
        <div className="text-black w-full lg:w-2/3 text-[14px] sm:text-base xl:text-[18px] mt-4 lg:mt-30 xl:mt-36">
          At Sea Clouds Engineering Solutions, we specialize in Integrated Engineering Services for the Offshore Oil & Gas and Wind Farm sectors, delivering innovative solutions with a commitment to quality, safety, and sustainability.
        </div>
      </div>

      {/* Sekcja Offers */}
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-between gap-y-16 lg:gap-x-6">
        {offers.map((offer, index) => (
          <div 
            key={index} 
            className={`w-full sm:w-[90%] lg:w-[47%] mx-auto lg:mx-0 flex flex-col gap-y-6 px-6 sm:px-8 py-8 border-2 border-cyan-900 rounded-4xl ${
              index % 2
                ? "shadow-[-12px_12px_0px_0px_rgba(5,51,69)]"
                : "shadow-[-12px_12px_0px_0px_rgba(5,51,69)] md:shadow-[12px_12px_0px_0px_rgba(5,51,69)]"
            }`}
          >
            <h3 className="text-cyan-900 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-thin text-center md:text-left mt-6 md:mt-0 underline">
              {offer.title.map((parent, id) => (
                <p key={id}>{parent} <br/></p>
              ))}
            </h3>
            <div className="w-full flex flex-col gap-y-4 items-center md:items-end">
              {offer.description.map((parent, id) => (
                <p className="text-[14px] sm:text-base xl:text-[18px] w-3/4 sm:w-2/3 text-center md:text-left" key={id}>
                  {parent}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sekcja Our Team */}
      <h2 className="text-center text-cyan-900 py-10 text-3xl sm:text-4xl">Our Team</h2>
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-between gap-y-10 lg:gap-x-6">
        {team.map((person, index) => (
          <div key={index} className="w-full sm:w-[85%] lg:w-[30%] flex flex-col gap-y-4 rounded-tr-[100px] overflow-clip mx-auto lg:mx-0">
            <div className="w-full h-[500px] md:h-[600px] lg:h-[450px] relative">
              <Image 
                src={`/about_us/${person.image}`}
                alt={person.name}
                fill
                className="object-cover rounded-tr-[100px]"
              />
            </div>
            <h4 className="text-2xl sm:text-3xl text-cyan-900 font-light underline mt-2">{person.name}</h4>
            <div className="w-1/2 h-2 bg-cyan-900"></div>
            <h5 className="font-bold text-lg sm:text-xl">{person.specialization}</h5>
          </div>
        ))}
      </div>

    </div>

    <Footer />
  </div>
);

}