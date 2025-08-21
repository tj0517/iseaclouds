import Image from "next/image";
import Footer from "../footer";
import Menu from "../menu";
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google';
import { articles } from "@/data/aticles"

const playfair = Cormorant_Garamond({
    subsets: ['latin'],
    weight: '700',
  });


  
  


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
    <Link
              href={`/news/${articles[0].slug}`}
              className="bg-blue-800 text-white text-center p-1.5 mt-7 w-50 text-2xl"
            >
              Show post
            </Link>

    </div>
</div>
<div className={`${playfair.className} text-blue-800 text-7xl font-bold ml-[10%] mt-24 mb-30`}>Latest Articles</div>
<div className="w-[90%] ml-[5%] mr-[5%]  flex flex-row justify-start flex-wrap mb-20">
{articles.map((article, index) =>
  index  > 0 ? (
    <div className="w-[33%] mb-20" key={article.slug}>
<div className="w-[75%] ml-[12.5%] flex flex-col">
<div className="w-full h-[35vh] relative">
            <Image
              src={`/news/${article.photo}`}
              alt={article.title}
              fill
              className="object-cover object-center"
            />
          </div>

    <div className="text-blue-800 font-black">{article.date}</div>
    <div className={`${playfair.className} text-black text-3xl font-bold mt-3 w-[75%]`}>{article.title}</div>
    <div className="text-black italic mt-5 text-[16px] w-[80%]">{article.description}</div>
    <Link
              href={`/news/${article.slug}`}
              className="text-blue-800 mt-4 text-lg font-semibold"
            >
              Check it out →
            </Link>

</div>
    </div>
  ) : null
)}
</div>
<Footer></Footer>
        </div>
    );}