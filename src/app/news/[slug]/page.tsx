import { getArticle } from "./query";
import { PortableText } from "@portabletext/react";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";
import Image from "next/image";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
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
    <div className="bg-amber-50 text-black">
      <Menu />

      {/* HERO */}
      <div className="flex flex-col md:flex-row justify-between w-full md:px-[7.5%] 2xl:px-[15%] mt-10 sm:mt-20 md:h-[45vh]">
        <div className="h-full w-full md:w-[50%] flex flex-col">
          <h1 className="text-blue-800 text-5xl font-bold">
            {article.title}
          </h1>
          <div className="text-right font-bold text-xl mt-auto">
            {article.date}
          </div>
        </div>

        <div className="md:h-[45vh] aspect-video w-full md:w-[50%] relative">
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
      </div>

      {/* CONTENT */}
      <div className="w-full md:px-[7.5%] 2xl:px-[15%] pt-20">
        <PortableText
  value={article.content}
  components={{
    block: {
      h1: ({children}) => <h1 className="text-3xl font-bold">{children}</h1>,
      h2: ({children}) => <h2 className="text-4xl font-black">{children}</h2>,
      normal: ({children}) => <p className="my-2">{children}</p>,
    },
    list: {
      bullet: ({children}) => <ul className="list-disc ml-6">{children}</ul>,
      number: ({children}) => <ol className="list-decimal ml-6">{children}</ol>,
    },
    listItem: {
      bullet: ({children}) => <li className="mb-1">{children}</li>,
      number: ({children}) => <li className="mb-1">{children}</li>,
    },
  }}
/>

      </div>

      {/* OPTIONAL PHOTO */}
      {article.photo2 && (
        <div className="w-full md:w-[80%] 2xl:w-[65%] mx-auto aspect-[16/9] relative mt-10">
          <Image
            src={urlFor(article.photo2).url()}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
