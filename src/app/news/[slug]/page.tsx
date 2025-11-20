import { getArticle } from "./query";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";
import Image from "next/image";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import { ArrowLeft } from "lucide-react";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200", "400", "500", "700"],
  variable: "--font-poppins",
})

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getArticle(slug);

  return {
    title: article ? `Seaclouds - ${article.title}` : "Article not found",
    description: article?.description || "Article not found",
  };
}

export default async function ArticlePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const article = await getArticle(slug);

  if (!article) return 0;


  return (
    <div className="bg-amber-50 text-black ">
      <Menu />

      {/* HERO */}
      <div className="w-[75%] mx-auto max-w-[1200px] text-xl">
      <div className="flex flex-row w-full mt-20">
    <div className="h-full w-full md:w-[50%] flex flex-col">
      <h1 className="text-stone-800 text-5xl lg:text-7xl font-extralight">
        {article.title}
      </h1>
      <div className="text-start font-bold text-2xl mt-14 text-amber-50 bg-cyan-900 px-6 py-2 rounded-lg w-fit">
        {article.date}
      </div>
    </div>
    <div className="h-[75px] lg:h-[125px] mt-auto rounded-4xl  w-3 bg-cyan-900  border-4 border-cyan-900"></div>
    <div className="w-1/2 flex flex-row justify-end">
    <Link href="/news" className="flex flex-row gap-x-2 text-cyan-900 hover:underline mt-4">
      <ArrowLeft size={60} />
    </Link>   
    </div>
  </div>


      {/* CONTENT */}
      <div className="w-full  pt-30 flex flex-col mb-20 gap-y-10">
        <div> {article.description}</div>
              <div className="md:h-[450px] aspect-video w-full relative">
          {article.photo && (
            <Image
               src={urlFor(article.photo).url()}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          )}
        </div>

        <div>
        <PortableText
  value={article.content}
  components={{
    block: {
      h1: ({children}) => <h1 className=" font-bold">{children}</h1>,
      h2: ({children}) => <h3 className="font-black pb-6">{children}</h3>,
      normal: ({children}) => <p className="my-2">{children}</p>,
    },
    list: {
      bullet: ({children}) => <ul className="list-disc ml-6 mb-10">{children}</ul>,
      number: ({children}) => <ol className="list-decimal ml-6">{children}</ol>,
    },
    listItem: {
      bullet: ({children}) => <li className="mb-1">{children}</li>,
      number: ({children}) => <li className="mb-1">{children}</li>,
    },
  }}
/>
</div>
{article.photo2 && (
        <div className=" aspect-video w-full relative">
          <Image
            src={urlFor(article.photo2).url()}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      </div>

      {/* OPTIONAL PHOTO */}
      
</div>
      <Footer />
    </div>
  );
}