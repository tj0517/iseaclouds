"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Slider({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

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
