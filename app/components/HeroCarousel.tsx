"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Londrina_Solid } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const libreBodoni = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
type SlideProps = {
  image: string;
  title: string;
  description: string;
  index: number;
};

const slides: SlideProps[] = [
  { image: "/gladys-hero.jpeg", title: "Fresh Oranges", description: "Directly from the farm", index: 0 },
  { image: "/image2.jpg", title: "100% Natural", description: "No chemicals, just nature", index: 1 },
  { image: "/image3.jpg", title: "Premium Quality", description: "Perfect for juice", index: 2 },
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[60vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.index}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center cursor-pointer z-10 hover:bg-black/60">
          <span className="text-white text-lg">{"<"}</span>
        </div>
        <div className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center cursor-pointer z-10 hover:bg-black/60">
          <span className="text-white text-lg">{">"}</span>
        </div>
      </Swiper>
    </div>
  );
}

function Slide({ image, title, description, index }: SlideProps) {
  const isFirst = index === 0;

  return (
    <div className="relative w-full h-full">
      <Image src={image} alt={title} fill className="object-cover" priority />

      <div
        className={`absolute inset-0 flex flex-col justify-center text-white px-6
          ${isFirst ? "items-start text-left pl-12 md:pl-20" : "items-center text-center"}
        `}
      >
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg ${libreBodoni.className}`}>{title}</h1>
        <p className="text-lg md:text-xl max-w-xl drop-shadow-md">{description}</p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
