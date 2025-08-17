import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Cormorant_Garamond } from 'next/font/google';
import Footer from "./footer";
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const playfair = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '700',
});



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200','400', '500', '700'], // wybierz wagi, które potrzebujesz
    variable: '--font-poppins', // CSS variable do Tailwinda
  })


export default function Home() {
  return (
  <div className={`${poppins.className} bg-amber-50`}>
<div className="w-full flex flex-row"> 
<div className="w-[45%] h-[95vh] relative">
  <Image
    src="/main1_2.jpg"
    alt="Logo"
    fill
    className="object-cover object-right"  
  />
<div className="absolute top-10 left-10">
<Image
    src="/logo.png"
    alt="Logo"
    width={150}
    height={150}
  />
</div>
</div>
<div className="bg-gray-400 w-[55%]">
<div className="w-[70%] ml-[20%] mt-[50px] flex flex-row justify-between text-amber-50 font-light text-xl">
<div><Link href="/">Home</Link></div>
<div><Link href="/courses">Courses</Link></div> 
<div><Link href="/news">News</Link></div>
<div><Link href="/offer">Offer</Link></div> 
<div><Link href="/contact">Contact us</Link></div>
</div>
<div className="ml-[20%]">
<h1 className=" text-blue-800 w-full text-5xl font-bold mt-[100px]">
  Navigating Offshore Excellence
</h1>
<div className=" w-[70%] mt-[60px] text-amber-50 font-normal text-lg">Sea Clouds delivers integrated offshore engineering solutions and technical advisory services for Oil & Gas and Wind Farm projects, with a strong focus on quality, safety, and sustainability.</div>
<div className="p-4 bg-blue-800 text-white w-[40%] mt-[40px] text-center rounded-full" >Explore</div>
<div className="w-[20%] flex flex-row justify-between text-3xl text-white mt-[100px]">
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>     
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
</div>
</div>
</div>
</div>
<div className="w-full flex flex-row pt-28">
<div className="h-full w-[45%] ml-[10%]">
<h2 className=" text-blue-800 w-full text-6xl font-bold ">
About us
</h2>
<div className="text-slate-400 w-[80%] text-[18px] mt-[50px]">Sea Clouds was founded by a team of experts with over 25 years of professional experience and deep knowledge in the Offshore Oil & Gas and Wind Farm sectors.We specialize in delivering comprehensive offshore engineering solutions and technical advisory services across key disciplines including Marine, Offshore Construction, Survey and Seabed Intervention, as well as ROV (Remotely Operated Vehicle) operations.
Our services are grounded in technical excellence, safety, and efficiency, ensuring that every involvement in our client’s project meets the highest industry standards.
Partner with Sea Clouds for precise and dependable offshore engineering solutions—from concept design and planning to execution and support. Whether you require strategic offshore technical advisory or fully integrated engineering capabilities, we bring clarity and confidence to complex offshore challenges.
Over...</div>
</div>
<div className="w-[35%] h-[75vh] relative ml-[2.5%]">
  <Image
    src="/enginner1.jpg"
    alt="Logo"
    fill
    className="object-cover object-bottom"  
  />
</div>
</div>
<div className="w-[100%] px-[5%] flex flex-row bg-gray-400 pt-3 pb-9 justify-between">
<div  className="w-25%  text-center">
<div className={`${playfair.className} text-blue-800 text-8xl font-bold`}>
25
</div>
<div className=" text-white text-2xl mt-7" >
Years of experience
</div>
</div>
<div  className="w-25%  text-center">
<div className={`${playfair.className} text-blue-800 text-8xl font-bold`}>
50
</div>
<div className=" text-white text-2xl mt-7" >
Large-scale Projects
</div>
</div><div  className="w-25%  text-center">
<div className={`${playfair.className} text-blue-800 text-8xl font-bold`}>
550
</div>
<div className=" text-white text-2xl mt-7" >
Offshore Days Annually
</div>
</div><div  className="w-25%  text-center">
<div className={`${playfair.className} text-blue-800 text-8xl font-bold`}>
1000
</div>
<div className=" text-white text-2xl mt-7" >
Engineering hours
</div>
</div>

</div>

<div className="w-full px-30 py-30 flex flex-row justify-between">
<div className={`${poppins.className} flex-col w-[40%]`}>
<div className="text-5xl text-blue-800 font-bold">Master Offshore Skills with SeaClouds Courses</div>
<div className=" text-[16px]  2xl:text-xl text-black font-light mt-10 2xl:leading-10">
Advance your career in the maritime industry with SeaClouds courses! We offer professional training for aspiring Surveyors, Offshore Technicians, and deck specialists, equipping you for international offshore projects. Our courses combine practical skills with essential theoretical knowledge, while experienced instructors and modern training materials ensure you’re ready to tackle offshore challenges from day one.
</div>
<div className="bg-blue-800 px-4 py-2 text-xl text-amber-50 w-[40%] mt-10">Check out</div>
</div>
<div className="w-[40%] flex flex-row justify-between flex-wrap h-full">
<div className="w-[47.5%] h-[15vw] relative mb-5">
  <Image
    src="/courses1.jpg"
    alt="Logo"
    fill
    className="object-cover object-center"  
  />
  <div className=" flex text-white text-2xl absolute font-bold h-full items-center w-[75%] left-[12.5%] text-center">Project 
surveyor
course (remote)</div>
  </div>
  <div className="w-[47.5%] h-[15vw] relative mb-5">
  <Image
    src="/courses2.jpg"
    alt="Logo"
    fill
    className="object-cover object-right"  
  />
    <div className=" flex text-white text-2xl absolute font-bold h-full items-center w-[75%] left-[12.5%] text-center">Project 
surveyor
course
(stationary)</div>
  </div>
  <div className="w-[47.5%] h-[15vw] relative">
  <Image
  src="/courses3.jpg"
    alt="Logo"
    fill
    className="object-cover object-right"  
  />
    <div className=" flex text-white text-2xl absolute font-bold h-full items-center w-[75%] left-[12.5%] text-center">Survey engineering (Company)</div>
  </div>
  <div className="w-[47.5%] h-[15vw] relative">
  <Image
  src="/courses4.jpg"
    alt="Logo"
    fill
    className="object-cover object-right"  
  />
    <div className=" flex text-white text-2xl absolute font-bold h-full items-center w-[75%] left-[12.5%] text-center">Survey technician (stationary)</div>
</div>
</div>
</div>



<div className="w-full px-[2.5%] flex flex-col pt-10 pb-10 ">
<div className="text-blue-800 text-7xl font-bold text-center w-full">Why us?</div>
<div className="w-[100%] px-[5%] flex flex-row pb-9 justify-between mt-30">
<div className="w-[20%] flex flex-col text-center">
<div className={`${playfair.className} text-black text-4xl font-bold pb-7 border-b-2`}>Offshore<br></br>Engineering</div>
<div className="italic mt-[40px] text-slate-400">Sea Clouds brings together a team of seasoned professionals with deep offshore industry expertise, delivering efficient and effective offshore technical advisory and engineering solutions tailored to the needs of Oil & Gas and Wind Farm projects.</div>
</div>
<div className="w-[20%] flex flex-col text-center">
<div className={`${playfair.className} text-black text-4xl font-bold pb-7 border-b-2`}>Flexible<br></br>

Service</div>
<div className="italic mt-[40px] text-slate-400">The company provides a range of services that include both remote and on-site assistance, allowing for immediate and adaptable responses to client needs.</div>
</div>
<div className="w-[20%] flex flex-col text-center">
<div className={`${playfair.className} text-black text-4xl font-bold pb-7 border-b-2`}>Quality <br></br>
Safety</div>
<div className="italic mt-[40px] text-slate-400">Sea Clouds prioritizes quality, safety, and sustainability in all operations, ensuring projects are executed with the highest standards of integrity and efficiency.</div>
</div>
<div className="w-[20%] flex flex-col text-center">
<div className={`${playfair.className} text-black text-4xl font-bold pb-7 border-b-2`}>Long-term<br></br> Collaboration</div>
<div className="italic mt-[40px] text-slate-400">The company offers a combination of frame agreements for long-term collaboration and ad-hoc cooperation for specific projects, catering to diverse client requirements.</div>
</div>

</div>
</div>
<Footer></Footer>
   </div>);
}
