import Image from "next/image";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Article } from "../types/article";
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/lib/client";
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ArrowRight } from "lucide-react";

const playfair = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-poppins",
});

interface Props {
  articles: Article[];
  i: number;
}
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default function ClientNews({ articles, i }: Props) {
  if (!articles.length) return <div>Brak artykułów do wyświetlenia</div>;

  return (
    <div className="overflow-x-hidden bg-amber-50 text-2xl lg:text-xl">
      <Menu />
      <div className="w-[80%] mx-auto max-w-[1400px] flex flex-col pt-20 text-left">
      <h1 className="mb-20 text-7xl">Latest<br/> Articles</h1>
      <div className="w-full flex flex-col gap-y-6 md:gap-y-14  mb-20">
        {articles.map((article, index) => (
          <div key={index} className="w-full">
          <div className="w-full h-0.5 bg-black mb-6"></div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-[45%] lg:w-1/3 md:pr-6">
            {article.photo&&
              <Link href={`/news/${article.slug.current}`}>
                <Image
                  src={urlFor(article.photo).width(600).height(400).url()}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl"
                />
            </Link>
}
            </div>
            <div className="w-3/4 md:w-[45%] lg:w-1/2 xl:w-1/3 flex flex-col lg:pl-4 mt-4 lg:mt-0 ">
                <h3 className={`text-3xl lg:text-4xl mb-4 font-thin underline `}>{article.title}</h3>
              <p className="text-[14px] md:hidden lg:block lg:text-[16px]">{article.overview}</p>
              <div className="mt-4 text-[14px] font-bold md:mt-auto">{article.date}</div>
            </div>
            <div className="w-fit ml-auto pl-6 flex justify-end ">
              <Link href={`/news/${article.slug.current}`} className="text-lg underline">
                <ArrowRight className="w-10 h-10 text-cyan-900"/>
              </Link>
            </div>
          </div>  





      </div>
        ))}

</div>
</div>
      <Footer />
    </div>
  );
}
