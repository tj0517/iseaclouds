import Image from "next/image"
import { notFound } from "next/navigation"
import { courses } from "@/data/courses"
import Menu from "@/app/components/menu"
import Footer from "@/app/components/footer"
import { Poppins } from 'next/font/google'
import { Suspense } from "react"
import dynamic from 'next/dynamic'
import PurchaseFormModal from "../form"
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '500', '700'],
  variable: '--font-poppins',
})


// Poprawna definicja Props dla App Router
interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Dodaj await przed params
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  return {
    title: course ? `Seaclouds - ${course.title}` : "Seaclouds | Course not found",
    description: course?.description || "Course not found",
  };
}

// Dynamic import dla CourseSlider z wyłączonym SSR
const CourseSlider = dynamic(() => import("../courseslider"), {
  loading: () => (
    <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
      <p className="text-gray-500">Ładowanie galerii...</p>
    </div>
  )
})

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = courses.find((a) => a.slug === slug)

  if (!course) return notFound()

  return (
    <div className="bg-amber-50 text-bl overflow-x-hidden text-black">
      <div className={`${poppins.className} mb-10 sm:mb-30`}>
        <Menu />
        <div className="flex flex-col md:flex-row justify-between w-full md:px-[7.5%] 2xl:px-[20%] mt-10 sm:mt-20  relative text-lg md:text-[13px] lg:text-[15px] xl:text-xl text-center md:text-left">
          <div className="md:aspect-square aspect-video w-full md:w-[50%] relative">
            <Image src={`/courses/${course.image1}`} alt={course.title} priority={true} fill className="object-cover" />
          </div>
          <div className="h-full w-[80%] md:w-[55%] flex flex-col ml-[10%] ">
            <h1 className="text-blue-800 text-4xl md:text-2xl xl:text-4xl font-bold leading-14 w-full   text-center md:text-left mb-10 md:mb-0 mt-10 md:mt-0">
              {course.title} COURSE {course.type}
            </h1>
            <div className=" my-6 font-bold">DATE: {course.date}</div>
            <div className="w-full ">{course.description?.includes("<")
  ? (
    <div dangerouslySetInnerHTML={{ __html: course.description }} />
  ) : (
    <p>{course.description}</p>
  )
}</div>
            <div className="w-[90%] xl:w-[80%]  flex flex-row justify-between mt-10 text-2xl font-bold mb-20 md:mb-0 ml-[5%] md:ml-0">
              <div className="w-[60%] text-left items-center pt-2 text-3xl">{course.price}</div>
              <div className="w-[35%] xl:w-[30%] ">
  <PurchaseFormModal course={course} />
</div>
            </div>
          </div>
        </div>
        <div className="w-[70%] lg:w-[55%] mx-auto py-10 md:py-20 xl:py-30 text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-800">Discover more about the course</div>
        <div className="w-full px-10 flex flex-col lg:flex-row justify-between pb-15 md:pb-30">
          <div className="w-[95%] md:w-[70%] lg:w-[45%] 2xl:w-[35%] mx-auto mt-10">
            <Suspense fallback={
              <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">Ładowanie galerii...</p>
              </div>
            }>
              <CourseSlider images={course.images ?? []} />
            </Suspense>
          </div>
          <div className="md:mx-auto lg:mx-0 md:w-[80%] lg:w-[45%]   mt-10">
            <ul className={course.big ? "md:text-[16px] lg:text-[16px] xl:text-xl 2xl:text-lg leading-6 lg:leading-5 xl:leading-normal list-disc pl-6 space-y-4 mt-10 lg:mt-0 2xl:w-[80%]" : "2xl:w-[90%] md:text-[16px] lg:text-[13px] xl:text-lg 2xl:text-[17px]  leading-6 lg:leading-5 xl:leading-normal list-disc pl-6 space-y-2"}>
              {Object.entries(course.info).map(([key, value]) => (
                <li key={key} className="">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full h-[75vh] md:h-[50vh] relative overflow-hidden  xl:mt-20">
          <Image src="/courses/courses_bg1.jpg" alt="contact background" priority={true} fill className="object-cover brightness-70" />
          <div className="absolute inset-0 bg-black/50 "></div>
          <div className="w-full px-[10%] absolute h-full flex flex-col md:flex-row items-center justify-between text-white text-2xl sm:text-3xl xl:text-4xl font-bold py-10">
            <div className="w-[50%] md:w-[25%] text-center">{course.duration}<br/><br/>
              <span className="font-light text-gray-400">Duration</span>
            </div>
            <div className="w-[50%] md:w-[25%] text-center">{course.place} <br/><br/>
              <span className="font-light text-gray-400">Place</span>
            </div>
            <div className="w-[50%] md:w-[25%] text-center">{course.date}<br/><br/>
              <span className=" font-light text-gray-400 text-center">Date</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 