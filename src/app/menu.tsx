import Image from "next/image";
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200','400', '500', '700'], // wybierz wagi, które potrzebujesz
    variable: '--font-poppins', // CSS variable do Tailwinda
  })
  



export default function Menu() {
    return (
<div className={`w-full bg-gray-400 flex flex-row py-1.5 ${poppins.className} bg-amber-50`}>
    <div className="ml-[2.5%]">
<Image
    src="/logo.png"
    alt="Logo"
    width={80}
    height={80}
  />
  </div>
<div className="xl:w-[35%] lg:w-[45%] w-[50%] lg:ml-[42.5%] ml-[36.5%] xl:ml-[54%] md:flex flex-row justify-between text-amber-50 font-light xl:text-xl items-center hidden">
<div><Link href="/">Home</Link></div>
<div><Link href="/courses">Courses</Link></div> 
<div><Link href="/news">News</Link></div>
<div><Link href="/offer">Offer</Link></div> 
<div><Link href="/contact">Contact us</Link></div>
</div>
</div>



    );}