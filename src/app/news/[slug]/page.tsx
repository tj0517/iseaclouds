import Image from "next/image"
import { notFound } from "next/navigation"
import { articles } from "@/data/aticles"
import Menu from "@/app/menu"
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
    <div className={`${poppins.className}`} >
    <Menu/>
      <div className="flex flex-row justify-between w-full px-[7.5%] mt-20 h-[45vh]">
      <div className="h-full w-[50%] flex flex-col">
      <h1 className= "text-blue-800  text-7xl font-bold leading-20 w-[75%]">
 {article.title}
</h1>
<div className="mr-auto mt-auto w-[90%] text-end font-bold text-xl">{article.date}</div>
</div>
      <div className="h-[45vh] w-[50%] relative">
        <Image
          src={`/news/${article.photo}`}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
    <div className="flex flex-col w-full px-[7.5%] pt-20">
      {article.content.map((block, i) => {
    if (block.type === "paragraph") {
      return <p key={i} className="mb-4">{block.text}</p>;
    }
    if (block.type === "list") {
      return (
        <div key={i} className="mb-4">
          <div className="font-bold mb-2">{block.title}</div>
          <ul className="list-disc ml-5">
            {block.items.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        </div>
      );
    }
  })}</div>
    </div>
  )
}
