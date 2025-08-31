"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../footer";
import Menu from "../menu";
import Link from 'next/link'
import { Poppins } from "next/font/google";
import { articles } from "@/data/aticles"

const playfair = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '500', '700'], // wybierz wagi, które potrzebujesz
  variable: '--font-poppins', // CSS variable do Tailwinda
})


export default function Home() {
  return (
    <div className="overflow-x-hidden bg-amber-50">
      <Menu />

      {/* HERO */}
      <div className="w-full flex flex-row relative">
        <div
          
          className="bg-cyan-900 w-[40%]"
        />
        <div
          
          className="w-[60%] h-[45vh] sm:h-[65vh] relative"
        >
          <Image
            src={`/news/${articles[0].photo}`}
            alt={articles[0].title}
            fill
            className="object-cover object-center"
          />
        </div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="absolute top-0 sm:top-[5%] lg:top-[10%] left-0 sm:left-[15%] lg:left-[20%] xl:left-[15%] 
          w-[50%] sm:w-[60vw] lg:w-[45vw] xl:w-[35vw] sm:bg-gray-400 bg-cyan-900  
          flex flex-col px-12 h-full sm:h-auto py-10 sm:py-16"
        >
          <div className=" text-white sm:text-black font-black">{articles[0].date}</div>
          <div
            className={`${playfair.className} sm:text-blue-800 text-black text-xl sm:text-2xl xl:text-3xl  font-bold mt-3`}
          >
            {articles[0].title}
          </div>
          <div className="text-white italic mt-5 text-[16px] sm:text-[18px] w-[90%] sm:w-[70%] hidden sm:block">
            {articles[0].description}
          </div>
          <Link
            href={`/news/${articles[0].slug}`}
            className="bg-blue-800 text-white text-center p-1.5 mt-7 w-30 sm:w-50 text-xl sm:text-2xl"
          >
            Show post
          </Link>
        </motion.div>
      </div>

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`${playfair.className} text-blue-800 text-5xl md:text-7xl font-bold ml-0 lg:ml-[8%] text-center lg:text-left my-16 md:my-24`}
      >
        Latest Articles
      </motion.div>

      {/* ARTICLES LIST */}
      <div className="xl:w-[90%] w-[95%] ml-auto mr-auto flex flex-col md:flex-row justify-around lg:justify-start flex-wrap md:10 md:mb-20">
        {articles.map((article, index) =>
          index > 0 ? (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="w-full md:ml-0 md:w-[40%] lg:w-[33%] mb-20"
            >
              <div className="w-full md:w-[75%] md:ml-[12.5%] flex flex-row justify-around md:justify-normal md:flex-col">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-[40%] md:w-full aspect-square relative"
                >
                  <Image
                    src={`/news/${article.photo}`}
                    alt={article.title}
                    fill
                    className="object-cover object-center rounded-lg"
                  />
                </motion.div>
                <div className="flex flex-col w-[40%] md:w-full">
                  <div className="text-blue-800 font-black">{article.date}</div>
                  <div
                    className={`${playfair.className} text-black text-xl sm:text-2xl md:text-2xl xl:text-3xl  font-bold mt-3 w-full sm:w-[90%] xl:w-[75%]`}
                  >
                    {article.title}
                  </div>
                  <div className="text-black italic mt-5 text-[16px] w-[80%] hidden sm:block">
                    {article.description}
                  </div>
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-blue-800 mt-4 text-lg font-semibold"
                  >
                    Check it out →
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null
        )}
      </div>

      <Footer />
    </div>
  );}