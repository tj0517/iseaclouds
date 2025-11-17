"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function CourseSlider({ images }: { images: string[] }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!images || images.length === 0) return null;
  if (!isMounted) return (
    <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
      <p className="text-gray-500">Ładowanie galerii...</p>
    </div>
  );

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="rounded-xl shadow-lg"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="w-full aspect-auto overflow-hidden rounded-xl">
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="object-cover hover:scale-110 transition-transform duration-500 w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}