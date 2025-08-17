import Image from "next/image";
import Footer from "../footer";
import Menu from "../menu";
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google';

const playfair = Cormorant_Garamond({
    subsets: ['latin'],
    weight: '700',
  });


  const articles = [
    {
        title:"Survey Engineering Course in Orlen",
        date:"30 June 2025",
        description:"Between 24 and 26 June, at the invitation of ORLEN Neptun, we had the pleasure of...",
        photo:"orlen.webp"
    },
    {
        title:"Project Surveyor Course Edition 1",
        date:"20 May 2025",
        description:"The first edition of the Offshore Project Surveyor course has come to a close! Thank...",
        photo:"ps_course1.webp"
    },
    {
        title:"Offshore Project Surveyor Course",
        date:"04 January 2025",
        description:"We believe that knowledge shared is power multiplied – and that’s why we’re excited to announce...",
        photo:"ps_course.webp"
    },
    {
        title:"Continuing the Mission",
        date:"04 January 2025",
        description:"Sharing knowledge and training the next generation have always been at the heart of our founders’...",
        photo:"orlen.webp"
    }
  ]
  


export default function Home() {
    return (
        <div>
<Menu></Menu>
<div className="w'-full flex flex-row relative">
<div className="bg-cyan-900 w-[40%]"></div>
<div className="w-[60%] h-[65vh] relative">
            <Image
              src={`/news/${articles[0].photo}`}
              alt={articles[0].title}
              fill
              className="object-cover object-center"
            />
          </div>
    <div className="absolute top-[10%] left-[15%] w-[35vw]  bg-gray-400 flex flex-col px-12 py-16">
    <div className="text-black font-black">{articles[0].date}</div>
    <div className={`${playfair.className} text-blue-800 text-3xl font-bold mt-3`}>{articles[0].title}</div>
    <div className="text-white italic mt-5 text-[18px] w-[70%]">{articles[0].description}</div>
    <div className="bg-blue-800 text-white text-center p-1.5 mt-7 w-50 text-2xl">Show post</div>

    </div>
</div>
<div className={`${playfair.className} text-blue-800 text-7xl font-bold ml-[10%] mt-24 mb-30`}>Latest Articles</div>
<div className="w-[90%] ml-[5%] mr-[5%]  flex flex-row justify-around wrap-normal mb-20">
{articles.map((article, index) =>
  index  > 0 ? (
    <div key={index}>
<div className="w-[75%] ml-[12.5%] flex flex-col">
<div className="w-full h-[35vh] relative">
            <Image
              src={`/news/${articles[index].photo}`}
              alt={articles[index].title}
              fill
              className="object-cover object-center"
            />
          </div>

    <div className="text-blue-800 font-black">{articles[index].date}</div>
    <div className={`${playfair.className} text-black text-3xl font-bold mt-3 w-[75%]`}>{articles[index].title}</div>
    <div className="text-black italic mt-5 text-[16px] w-full">{articles[index].description}</div>
    <div className=" text-blue-800 mt-5  text-2xl font-black">Check it out  →</div>

</div>
    </div>
  ) : null
)}
</div>
<Footer></Footer>
        </div>
    );}