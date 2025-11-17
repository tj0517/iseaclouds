import Image from "next/image";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Article } from "../types/article";
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/lib/client";
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

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

      {/* HERO */}
      <div className="w-full hidden md:flex flex-row relative md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-4xl ">
        <div className="bg-cyan-900 w-[40%] h-full relative" />
        <div className="w-[60%] h-full relative overflow-hidden">
          {articles[0].photo && (
            <Image
              src={urlFor(articles[0].photo).url()} 
              alt={articles[0].title}
              fill
              className="object-cover object-center"
            />
          )}
        </div>

        <div
          className=" absolute  top-10 left-[20%] lg:top-16 xl:top-24 lg:left-1/6 xl:left-1/5 rounded-2xl
          w-1/2 lg:w-[45%] max-w-[600px] sm:bg-gray-400 bg-cyan-900  
          flex flex-col px-12  py-12 lg:h-3/4 xl:h-2/3 "
        >
          <div className={`${playfair.className} text-3xl font-bold text-black `}>
            {articles[0].title}
          </div>
          <div className="h-[3px] bg-cyan-900 w-1/2 rounded-full my-4" />

          <div className="text-black">{articles[0].date}</div>

          <div className="mt-8 w-[80%] h-[25%] overflow-clip lg:w-2/3 text-black">
            {articles[0].description}
          </div>
          <Link
            href={`/news/${articles[0].slug.current}`}
            className="text-cyan-900 mt-6 w-fit font-bold  hover:cursor-pointer hover:text-white transition-all"
          >
            Show post →
          </Link>
        </div>
      </div>

      {/* ARTICLES */}
      <div className="w-[90%] sm:w-[80%] md:w-[87.5%] max-w-[1440px] mx-auto flex flex-col">
        {/* TITLE */}
        <div
          className={`${playfair.className} text-cyan-900 text-5xl font-bold text-center lg:text-left my-14 mt-24`}
        >
          Latest Articles
        </div>

        {/* ARTICLES LIST */}
        <div className="w-full ml-auto mr-auto flex flex-col md:flex-row justify-between gap-x-10 gap-y-16 md:gap-y-24 xl:gap-y-32 flex-wrap mb-16 md:mb-24">
          {articles.slice(i).map((article) => (
            <div
              key={article.slug.current}
              className="md:w-[45%] lg:w-[29%] flex flex-col gap-y-5 relative"
            >
              <div className="aspect-square relative">
                {article.photo && (
                  <Image
                    src={urlFor(article.photo).url()} 
                    alt={article.title}
                    fill
                    className="object-cover object-center rounded-3xl"
                  />
                )}
              </div>

              <div className="flex flex-col w-[80%] text-cyan-900">
                <div className={`${playfair.className} text-3xl sm:text-4xl lg:text-2xl font-bold`}>
                  {article.title}
                </div>

                <div className="text-black mt-2">{article.date}</div>

                <div className="h-[5px] bg-cyan-900 w-1/5 rounded-full my-4" />

                <div className="mt-3 w-full lg:w-[90%] text-black">
                  {article.description}
                </div>

                <Link
                  href={`/news/${article.slug.current}`}
                  className="text-cyan-800 mt-6 w-fit font-bold  hover:cursor-pointer hover:text-black transition-all"
                >
                  Show post →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
