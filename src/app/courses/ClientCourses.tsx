"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { courses } from "@/data/courses";

const playfair = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '500', '700'],
  variable: '--font-poppins',
});

export default function ClientCourses() {
  return (
    <div>
      <Menu />

      {/* HERO */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <Image
          src="/courses/courses_bg1.jpg"
          alt="contact background"
          priority={true}
          fill
          className="object-cover brightness-70"
        />
        <div className="absolute inset-0 bg-black/50 "></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${playfair.className} top-[30%] text-center w-full absolute text-white text-5xl lg:text-7xl font-bold flex flex-col`}
        >
          Our courses
          <div className="font-normal ml-auto mr-auto lg:ml-0 lg:mr-0 w-[80%] lg:w-full text-lg lg:text-xl mt-6">
            Grow in offshore wind — built on our oil & gas expertise
          </div>
        </motion.div>
      </div>

      {/* COURSES */}
      <div className="flex flex-row w-full px-[10%] lg:px-[5%] flex-wrap py-20 bg-amber-50 justify-between pb-5 sm:pb-20 xl:pt-30">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`${playfair.className} w-[40%] lg:w-[22.5%] xl:w-[25%] lg:mx-10 flex flex-col xl:pb-24 pb-16 text-2xl text-black`}
          >
            <div className="relative w-full aspect-square overflow-hidden shadow-md">
              <Image
                src={`/courses/${course.image}`}
                alt={course.title}
                fill
                className="object-cover object-right hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="font-normal text-xl sm:text-2xl xl:text-3xl mt-5">
              {course.title}
            </div>
            <div className="font-light text-xl sm:text-2xl xl:text-3xl mt-1">
              {course.type}
            </div>

            <div className="w-full flex flex-row justify-between">
              <div className="text-2xl md:text-2xl xl:text-3xl font-bold mt-3 w-[40%] sm:w-[60%]">
                {course.price}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[35%] xl:w-[40%] h-[70%] sm:h-auto mt-[6%] sm:mt-0 items-center bg-cyan-900 text-amber-50 text-center py-2 text-xs sm:text-lg xl:text-2xl cursor-pointer flex justify-center"
              >
                <Link href={`/courses/${course.slug}`}>
                  JOIN
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
