import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200','400', '500', '700'], // wybierz wagi, które potrzebujesz
    variable: '--font-poppins', // CSS variable do Tailwinda
  })
  
  

export default function Footer() {
    return (




        <div className="w-[100%]  flex flex-col bg-gray-500 pt-6 pb-6 md:pb-16 justify-between">
<div className="px-[5%]">
<Image
  src="/logo.png"
  alt="Logo"
  width={150}
  height={150}
  className=" w-20 h-20 md:w-32 md:h-32"
/>
</div>
<div className={`${poppins.className} text-amber-50 flex flex-row w-[80%] md:w-[70%] xl:w-[50%] justify-between  text-left ml-[10%] xl:ml-[7%] text-xs md:text-[16px] lg:text-lg`}>
<div className="flex flex-col w-[40%] lg:w-[28%] ">
<div className="text-3xl font-light w-full mb-4 mt-10">Adress</div>
Poland, Gdańsk
Do Studzienki 63
</div>
<div className="flex flex-col w-[40%] lg:w-[28%]">
<div className="text-3xl font-light w-full mb-4 mt-10">Contact</div>
info@seaclouds.eu <br></br>
+48 731-408-236
</div>
</div>
<div className="w-full border-t-2 border-b-2 border-amber-50 mt-20 mb-10 flex flex-row py-6 items-center">
<div className= {`${poppins.className} text-amber-50 text-3xl font-light ml-[6%]`}>Get social</div>
<div className="ml-[2.5%] flex flex-row justify-between text-3xl text-black mt-[2px]">
<a className= "bg-white p-3 rounded-full" href="https://www.instagram.com/seaclouds_offshore/" target="_blank" rel="noopener noreferrer" aria-label="Visit Sea Clouds Instagram">
        <FaInstagram />
      </a>
      <a className=" ml-[25%] bg-white p-3 rounded-full" href="https://pl.linkedin.com/company/sea-clouds" target="_blank" rel="noopener noreferrer" aria-label="Visit Sea Clouds LinkedIn">
        <FaLinkedinIn />
      </a>     
    </div>

</div>

</div>
    );}