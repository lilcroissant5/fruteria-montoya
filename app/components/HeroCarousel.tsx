"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SlideProps = {
  image: string;
  title: string;
  description: string;
};

const slides: SlideProps[] = [
  {
    image: "/orange-tree.png",
    title: "Fresh Oranges",
    description: "Directly from the farm",
  },
  {
    image: "/image2.jpg",
    title: "100% Natural",
    description: "No chemicals, just nature",
  },
  {
    image: "/image3.jpg",
    title: "Premium Quality",
    description: "Perfect for juice",
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[60vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Slide({ image, title, description }: SlideProps) {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-xl drop-shadow-md">
          {description}
        </p>

        {/* Optional CTA */}
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
