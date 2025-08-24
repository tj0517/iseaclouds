import Image from "next/image";
import Footer from "../footer";
import Menu from "../menu";
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google';
import { Poppins } from 'next/font/google'

const playfair = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '500', '700'], // wybierz wagi, które potrzebujesz
  variable: '--font-poppins', // CSS variable do Tailwinda
})

  const courses = [
    {
      image: 'ps_o.webp',
      title: 'PROJECT SURVEYOR',
      type:" (ON-SITE)",
      price: "2088 PLN"
    },
    {
        image: 'ps_r.webp',
        title: 'PROJECT SURVEYOR',
        type:" (REMOTE)",
        price: "1894 PLN"
      },
      {
        image: 'se_c.webp',
        title: 'SURVEY ENGINEERING',
        type:"(COMPANY)",
        price: "POA PLN"
      },
      {
        image: 'st_o.webp',
        title: 'SURVEY TECHNICIAN',
        type:" (ON-SITE)",
        price: "2900 PLN"
      }
  ]
  


export default function Home() {
    return (
        <div>
<Menu></Menu>
<div className="w-full h-[50vh] relative">
        <Image
          src="/courses/courses_bg.jpg"
          alt="contact background"
          fill
          className="object-cover object-top"
        />
         <div className="absolute inset-0 bg-black/50"></div>
        <div
          className={`${playfair.className} top-[30%] text-center w-full absolute text-white text-7xl font-bold flex flex-col`}
        >
          Our courses
          <div className="font-normal text-xl mt-6">Grow in offshore wind — built on our oil & gas expertise</div> 
        </div>
      </div>
      <div className="flex flex-row w-full pl-[5%] pr-[5%] flex-wrap py-20 bg-amber-50 justify-between xl:pt-30 pb-20">
      {courses.map((course, index) =>
      (
        <div key={index} className={`${playfair.className} xl:w-[25%] w-[22.5%] mx-10 lg:flex flex-col xl:pb-24 pb-16 text-2xl text-black hidden`}>
        <div className="relative w-full aspect-square">
          <Image
            src={`/courses/${course.image}`}
            alt={course.title}
            fill
            className="object-cover object-right"
          />
        </div>
        <div className="font-normal text-2xl xl:text-3xl mt-5">
        {course.title}
        </div>
        <div className=" font-light text-2xl xl:text-3xl mt-1">
        {course.type}
        </div>
        <div className="w-full flex flex-row justify-between">
        <div className=" xl:text-3xl text-2xl font-bold mt-3">{course.price}</div>
        <div className="w-[35%] xl:w-[40%]  items-center bg-blue-800 text-amber-50 text-center py-2 xl:text-2xl text-lg">JOIN</div>
        </div>
      </div>
      
      ))}
      </div>
    
<Footer></Footer>
        </div>
    );}