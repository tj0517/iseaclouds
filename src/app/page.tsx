import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Cormorant_Garamond } from 'next/font/google';
import Footer from "./footer";
import Menu from "./menu";
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
  <div className={`${poppins.className} bg-amber-50 overflow-x-hidden`}>

<div className=" block lg:hidden"><Menu/></div>
<div className="w-full flex flex-row h-[90vh] sm:h-[95vh] lg:h-[90vh]"> 

<div className="w-full lg:w-[45%] h-[85vh] md:h-full relative">
  <Image
    src="/offer/offer3.jpg"
    alt="Logo"
    fill
    className="object-cover object-center lg:brightness-100 brightness-30"  
  />
<div className="absolute top-2.5 lg:top-10 left-2.5 lg:left-10">
<Image
  src="/logo.png"
  alt="Logo"
  width={150}
  height={150}
  className="hidden lg:block md:w-32 md:h-32  lg:w-32 lg:h-32"
/>

</div>
</div>


<div className="lg:bg-gray-400 lg:w-[55%] w-full absolute lg:relative h-full">
<div className="xl:w-[70%] w-[80%] ml-[15%]  xl:ml-[20%] mt-10 hidden lg:flex flex-row justify-between text-amber-50 font-light text-lg md:text-[16px] xl:text-xl">
<div><Link href="/">Home</Link></div>
<div><Link href="/courses">Courses</Link></div> 
<div><Link href="/news">News</Link></div>
<div><Link href="/offer">Offer</Link></div> 
<div><Link href="/contact">Contact us</Link></div>
</div>
<div className="ml-auto mr-auto lg:ml-[15%] xl:ml-[20%] w-[75%] sm:w-[50%]  lg:w-full  ">
<h1 className=" text-blue-500 lg:text-blue-800 w-full lg:w-[70%] text-center lg:text-left text-4xl sm:text-5xl md:text-5xl  lg:text-4xl xl:text-5xl 2xl:w-[75%] font-bold mt-16 md:mt-24 lg:mt-16 ">
  Navigating Offshore Excellence
</h1>
<div className=" lg:w-[70%] text-center lg:text-left mt-12 lg:mt-8 xl:mt-15  text-amber-50 font-light text-lg xl:text-xl 2xl:w-[60%]">Sea Clouds delivers integrated offshore engineering solutions and technical advisory services for Oil & Gas and Wind Farm projects, with a strong focus on quality, safety, and sustainability.</div>
<div className="p-4 bg-blue-800 text-white w-[40%] ml-[30%] lg:ml-0 mt-12 lg:mt-16 text-center rounded-full" >Explore</div>
<div className="w-[40%] lg:w-[20%] ml-[30%] lg:ml-0 flex flex-row justify-between text-3xl lg:text-2xl xl:text-3xl text-white mt-[70px] lg:mt-[80px]">
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


<div className="w-full flex flex-col md:flex-row  pt-0 md:pt-20 lg:pt-28">
<div className="h-full w-full md:w-[45%] ml-[10%]">
<h2 className=" text-blue-800 w-full text-5xl xl:text-6xl font-bold">
About us
</h2>
<div className="text-slate-400 w-[80%]  text-[14px] md:text-[13.5px] lg:text-[15px]  xl:text-[18px] mt-10 lg:mt-[50px] mb-16 md:mb-0">Sea Clouds was founded by a team of experts with over 25 years of professional experience and deep knowledge in the Offshore Oil & Gas and Wind Farm sectors.We specialize in delivering comprehensive offshore engineering solutions and technical advisory services across key disciplines including Marine, Offshore Construction, Survey and Seabed Intervention, as well as ROV (Remotely Operated Vehicle) operations.
Our services are grounded in technical excellence, safety, and efficiency, ensuring that every involvement in our client’s project meets the highest industry standards.
Partner with Sea Clouds for precise and dependable offshore engineering solutions—from concept design and planning to execution and support. Whether you require strategic offshore technical advisory or fully integrated engineering capabilities, we bring clarity and confidence to complex offshore challenges.
Over...</div>
</div>
<div className="hidden md:block md:w-[50%] xl:w-[40%] h-[60vh] md:h-[75vh] relative xl:ml-[2.5%] mt-12 lg:mt-0">
  <Image
    src="/engineer1.jpg"
    alt="Logo"
    fill
    className="object-cover object-bottom"  
  />
</div>
</div>


<div className="w-[100%] px-[5%] flex flex-row flex-wrap md:flex-nowrap bg-gray-400 pt-3 pb-9 justify-between  text-6xl lg:text-7xl xl:text-8xl  font-bold text-blue-800">
<div  className="w-[50%] md:w-25%  text-center">
<div className={`${playfair.className} text-blue-800  font-bold`}>
25
</div>
<div className=" text-white text-lg md:text-xl lg:text-2xl mt-7 font-light" >
Years of experience
</div>  
</div>
<div  className="w-[50%] md:w-25%  text-center">
<div className={`${playfair.className} `}>
50
</div>
<div className=" text-white text-lg md:text-xl lg:text-2xl mt-7 font-light" >
Large-scale Projects
</div>
</div><div  className="w-[50%] md:w-25% text-center font-light">
<div className={`${playfair.className}`}>
550
</div>
<div className=" text-white text-lg md:text-xl lg:text-2xl mt-7 font-light" >
Offshore Days Annually
</div>
</div><div  className="w-[50%] md:w-25%  text-center">
<div className={`${playfair.className}`}>
1000
</div>
<div className=" text-white text-lg md:text-xl lg:text-2xl mt-7 font-light" >
Engineering hours
</div>
</div>

</div>


<div className="w-full px-10 md:px-20 xl:px-30 py-16  md:py-30 flex lg:flex-row flex-col justify-between">
<div className={`${poppins.className} flex-col w-[80%] ml-auto mr-auto xl:mr-0 xl:ml-0 lg:w-[40%] text-center lg:text-left`}>
<div className="text-4xl xl:text-5xl  text-blue-800 font-bold">Master Offshore Skills with SeaClouds Courses</div>
<div className=" text-[16px] 2xl:text-xl text-black font-light mt-10 md:mt-6 xl:mt-10  2xl:leading-10 w-full md:w-[80%] lg:w-full  md:ml-[10%] lg:ml-0">
Advance your career in the maritime industry with SeaClouds courses! We offer professional training for aspiring Surveyors, Offshore Technicians, and deck specialists, equipping you for international offshore projects. Our courses combine practical skills with essential theoretical knowledge, while experienced instructors and modern training materials ensure you’re ready to tackle offshore challenges from day one.
</div>
<div className="bg-blue-800 px-4 py-2 text-xl text-amber-50 xl:w-[40%] w-[60%] ml-[20%] lg:ml-0 mt-10">Check out</div>
</div>
<div className="w-[90%] md:w-[80%] lg:w-[50%] ml-auto mr-auto md:mr-0 md:ml-[10%] lg:ml-0 xl:w-[42.5%] flex flex-row justify-between flex-wrap h-full mt-20 lg:mt-0">
<div className="w-[47.5%] aspect-square relative mb-5">
  <Image
    src="/courses/ps_r.webp"
    alt="Logo"
    fill
    className="object-cover object-center grayscale hover:grayscale-0 hover:cursor-pointer transition duration-300"  
  />
  </div>
  <div className="w-[47.5%] aspect-square relative mb-5">
  <Image
    src="/courses/ps_o.webp"
    alt="Logo"
    fill
    className="object-cover object-right grayscale hover:grayscale-0 hover:cursor-pointer transition duration-300"  
  />

  </div>
  <div className="w-[47.5%] aspect-square relative">
  <Image
  src="/courses/se_c.webp"
    alt="Logo"
    fill
    className="object-cover object-right grayscale hover:grayscale-0 hover:cursor-pointer transition duration-300"  
  />

  </div>
  <div className="w-[47.5%] aspect-square relative">
  <Image
  src="/courses/st_o.webp"
    alt="Logo"
    fill
    className="object-cover object-right grayscale hover:grayscale-0 hover:cursor-pointer transition duration-300"  
  />
    
</div>
</div>
</div>


<div className="w-full px-[2.5%] flex flex-col pt-10 pb-10 ">
<div className="text-blue-800 xl:text-7xl text-6xl font-bold text-center w-full">Why us?</div>
<div className="w-[100%] px-[5%] flex flex-row flex-wrap pb-9 justify-between mt-20 md:mt-30 text-[12px] md:text-[14px] xl:text-[16px] ">
<div className=" w-[40%] lg:w-[20%] flex flex-col text-center mb-20 lg:mb-0">
<div className={`${playfair.className} text-black text-2xl md:text-3xl xl:text-4xl font-bold pb-7 border-b-2`}>Offshore<br></br>Engineering</div>
<div className="italic mt-6 xl:mt-10 text-slate-400">Sea Clouds brings together a team of seasoned professionals with deep offshore industry expertise, delivering efficient and effective offshore technical advisory and engineering solutions tailored to the needs of Oil & Gas and Wind Farm projects.</div>
</div>
<div className="w-[40%] lg:w-[20%] flex flex-col text-center mb-20 lg:mb-0">
<div className={`${playfair.className} text-black text-2xl md:text-3xl xl:text-4xl font-bold pb-7 border-b-2`}>Flexible<br></br>
Service</div>
<div className="italic mt-6 xl:mt-10 text-slate-400">The company provides a range of services that include both remote and on-site assistance, allowing for immediate and adaptable responses to client needs.</div>
</div>
<div className="w-[40%] lg:w-[20%] flex flex-col text-center">
<div className={`${playfair.className} text-black text-2xl md:text-3xl xl:text-4xl font-bold pb-7 border-b-2`}>Quality <br></br>
Safety</div>
<div className="italic mt-6 xl:mt-10 text-slate-400">Sea Clouds prioritizes quality, safety, and sustainability in all operations, ensuring projects are executed with the highest standards of integrity and efficiency.</div>
</div>
<div className="w-[40%] lg:w-[20%] flex flex-col text-center">
<div className={`${playfair.className} text-black text-2xl md:text-3xl xl:text-4xl font-bold pb-7 border-b-2`}>Long-term<br></br> Collaboration</div>
<div className="italic mt-6 xl:mt-10 text-slate-400">The company offers a combination of frame agreements for long-term collaboration and ad-hoc cooperation for specific projects, catering to diverse client requirements.</div>
</div>

</div>
</div>
<Footer></Footer>
   </div>);
}
