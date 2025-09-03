import Image from "next/image"
import { notFound } from "next/navigation"
import { courses } from "@/data/courses"
import Menu from "@/app/menu"
import Footer from "@/app/footer"
import { Poppins } from 'next/font/google'
import { Suspense } from "react"
import dynamic from 'next/dynamic'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '500', '700'],
  variable: '--font-poppins',
})

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
    <div className="bg-amber-50 text-bl">
      <div className={`${poppins.className} mb-10 sm:mb-30`}>
        <Menu />
        <div className="flex flex-col md:flex-row justify-between w-full md:px-[7.5%] mt-10 sm:mt-20 md:h-[45vh] relative">
          <div className="md:h-[45vh] aspect-video w-full md:w-[50%] relative">
            <Image src={`/courses/${course.image1}`} alt={course.title} fill className="object-cover" />
          </div>
          <div className="h-full w-full md:w-[50%] flex flex-col ml-[7.5%]">
            <h1 className="text-blue-800 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-4xl font-bold leading-14 w-full sm:w-[70%] md:w-[85%] lg:w-[75%] text-center md:text-left mb-10 md:mb-0">
              {course.title} COURSE {course.type}
            </h1>
            <div className="text-xl mb-2 sm:mb-5 md:mb-0 mt-4">{course.date}</div>
            <div className="text-lg mt-4">{course.decription}</div>
            <div className="w-[32.5%] flex flex-row justify-between mt-10 text-2xl font-bold absolute bottom-4">
              <div className="w-[40%] text-left pt-4 text-3xl">{course.price}</div>
              <div className="w-[40%] bg-blue-800 text-amber-50 pb-2 pt-2.5 text-center">JOIN</div>
            </div>
          </div>
        </div>
        <div className="w-[55%] mx-auto py-30 text-6xl font-bold text-center text-blue-800">Discover more about the course</div>
        <div className="w-full px-10 flex flex-row justify-between pb-30">
          <div className="w-[45%] mx-auto mt-10">
            <Suspense fallback={
              <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">Ładowanie galerii...</p>
              </div>
            }>
              <CourseSlider images={course.images ?? []} />
            </Suspense>
          </div>
          <div className="w-[45%] mt-10">
            <ul className={course.big ? "text-xl list-disc pl-6 space-y-4" : "text-md list-disc pl-6 space-y-2"}>
              {Object.entries(course.info).map(([key, value]) => (
                <li key={key} className="">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full h-[50vh] relative overflow-hidden mt-20">
          <Image src="/courses/courses_bg1.jpg" alt="contact background" priority={true} fill className="object-cover brightness-70" />
          <div className="absolute inset-0 bg-black/50 "></div>
          <div className="w-full px-[10%] absolute h-full flex flex-row items-center justify-between text-white text-4xl font-bold">
            <div className="w-[25%] text-center">{course.duration}<br/><br/>
              <span className="font-light text-gray-400">Duration</span>
            </div>
            <div className="w-[25%] text-center">{course.place} <br/><br/>
              <span className="font-light text-gray-400">Place</span>
            </div>
            <div className="w-[25%] text-center">{course.date}<br/><br/>
              <span className="font-light text-gray-400">Date</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}