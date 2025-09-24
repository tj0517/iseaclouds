import Image from "next/image";
import React from 'react';
import Menu from '../components/menu';
import Footer from '../components/footer';
import { Poppins } from "next/font/google";
import { image } from "framer-motion/client";


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
    image: "2.webp",
    title: "Tenders Support",
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
    <div className={`${playfair.className}w-full bg-amber-50 text-black`}>  
    <Menu />
{/* Hero */}
      <div
        className="w-full flex flex-row bg-amber-50 pt-10 px-[10%] pb-10"

      >
        <h2
          className={`${playfair.className} text-blue-800 w-full text-3xl sm:text-5xl xl:text-6xl font-bold mr-10 sm:mr-0`}
        >
          About us
        </h2>
        <div
          className="text-black mt-20 text-xs  xl:text-[18px]"
        
        >
        At Sea Clouds Engineering Solutions, we specialize in Integrated Engineering Services for the Offshore Oil & Gas and Wind Farm sectors, delivering innovative solutions with a commitment to quality, safety, and sustainability.
        </div>
      </div>

      {offers.map((offer, index) =>
        index % 2 === 0 ? (
          <div key={index}>
            {/* Pierwszy element z pary */}
            <div className="w-full flex flex-col md:flex-row md:bg-gray-400">
              <div className="w-full md:w-[60%] aspect-square md:aspect-video relative">
                <Image
                  src={`/about_us/${offer.image}`}
                  alt={offer.title}
                  priority={index===0?true:false}
                  fill
                  className="object-cover object-right"
                />
              </div>

              <div
                className="w-full md:w-[45%] flex flex-col sm:flex-row md:flex-col lg:w-[40%] sm:pl-5 lg:pl-16 pt-5 lg:pt-12"
            
              >
                <h2
                  className={`${playfair.className} text-blue-800 w-full sm:w-[50%] md:w-full text-4xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center sm:text-left mt-10 sm:mt-4`}
                >
                  {offer.title}
                </h2>
                <ul
                    className="list-none w-[75%]  pl-12 space-y-1 mt-10 sm:mt-20 md:mt-5 lg:mt-12 italic text-[17px]   mb-10 md:mb-0 text-center sm:text-left pb-4"
                
                  >
                    {offers[index].description.map((item, i) => (
                      <li
                        key={i}
                        className="mb-8"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>

            {/* Drugi element z pary */}
            {offers[index + 1] && (
              <div className="w-full flex flex-col md:flex-row bg-amber-50">
                <div className="w-full md:w-[60%] aspect-square md:aspect-video relative order-1 md:order-2">
                  <Image
                    src={`/about_us/${offers[index + 1].image}`}
                    alt={offers[index + 1].title}
                    priority={index===1?true:false}
                    fill
                    className="object-cover object-center md:object-right"
                  />
                </div>

                <div
                  className="w-full md:w-[45%] flex flex-col sm:flex-row md:flex-col lg:w-[40%] sm:pl-5 lg:pl-16 pt-5 lg:pt-12 order-2 md:order-1"
              
                >
                  <h2
                    className={`${playfair.className} text-blue-800 w-full sm:w-[50%] md:w-full text-4xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center sm:text-left mt-16 sm:mt-4`}
                  >
                    {offers[index + 1].title}
                  </h2>
                  <ul
                    className="list-none w-[75%]  pl-12 space-y-1 mt-10 sm:mt-20 md:mt-5 lg:mt-12 italic text-[17px]   mb-10 md:mb-0 text-center sm:text-left pb-4"
                
                  >
                    {offers[index + 1].description.map((item, i) => (
                      <li
                        key={i}
                        className="mb-8"
                      >
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
<div className="w-full flex flex-row">
{team.map((member,index)=>(
<div key={index} className="w-[33.33%] aspect-square relative bg-white">   
 <Image
    src={`/about_us/${member.image}`}
    alt={member.name}
    priority={index===1?true:false}
    fill
    className="object-cover border-black border-l-1"
/>
</div>
))}
</div>
<div className="w-full flex flex-row text-center">
{team.map((member,index)=>(
<div key={index} className="w-[33.33%] relative text-2xl py-5 pb-30">   
<div className="border-b-2 w-[60%] mx-auto pb-2">{member.name}</div>
<div className="pt-3 text-xl text-blue-800 font-black">{member.specialization}</div>
</div>
))}
</div>




    <Footer />
    </div>
  );
}