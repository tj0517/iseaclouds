import Image from "next/image"
import { notFound } from "next/navigation"
import { articles } from "@/data/aticles"
import Menu from "@/app/menu"
import Footer from "@/app/footer"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '500', '700'], // wybierz wagi, które potrzebujesz
  variable: '--font-poppins', // CSS variable do Tailwinda
})

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const article = articles.find((a) => a.slug === slug)

  if (!article) return notFound()

  return (
    <div className="bg-amber-50 text-black">
    <div className={`${poppins.className} mb-10 sm:mb-30`} >
    <Menu/>
      <div className="flex flex-col md:flex-row justify-between w-full md:px-[7.5%] mt-10 sm:mt-20 md:h-[45vh]">
      <div className="h-full w-full md:w-[50%] flex flex-col">
      <h1 className= "text-blue-800 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-20 sm:ml-[15%] md:ml-0 w-full sm:w-[70%]  md:w-[85%] lg:w-[75%] text-center md:text-left mb-10 md:mb-0">
 {article.title}
</h1>
<div className="mr-auto mt-auto w-[95%] md:w-[90%]  text-end font-bold text-xl mb-2 sm:mb-5 md:mb-0">{article.date}</div>
</div>
      <div className="md:h-[45vh] aspect-video w-full md:w-[50%] relative">
        <Image
          src={`/news/${article.photo}`}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
    <div className="article-content flex flex-col w-full px-[7.5%] pt-20"
     dangerouslySetInnerHTML={{ __html: article.content }}
/>
{article.photo2 && (
  <div className="w-full md:w-[80%] mx-auto aspect-[16/9] relative  mt-10">
  <Image
    src={`/news/${article.photo2}`}
    alt={article.title}
    fill
    className="object-cover"
  />
</div>
)}
</div>
<Footer/>
</div>
  )
}
