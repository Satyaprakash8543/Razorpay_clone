"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider() {
  return (
    <section className="min-h-screen relative w-full bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>

      <div className="w-full max-w-4xl mx-auto py-5 absolute top-5 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-2xl overflow-hidden"
        >
          <SwiperSlide>
            <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              <Image
                src="/img/payment-suite.png"
                width={500}
                height={200}
                alt="img"
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-64 bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
              <Image
                src="/img/payment-suite.png"
                width={800}
                height={600}
                alt="Payment suite dashboard illustration"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-64 bg-purple-500 flex items-center justify-center text-white text-2xl font-bold">
              <Image
                src="/img/payment-suite.png"
                width={800}
                height={600}
                alt="Payment suite dashboard illustration"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-64 bg-purple-500 flex items-center justify-center text-white text-2xl font-bold">
              <Image
                src="/img/hero-img.jpg"
                width={500}
                height={200}
                alt="Payment suite dashboard illustration"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-64 bg-gray-600 flex items-center justify-center text-white text-2xl font-bold">
              <Image
                src="/img/payment-suite.png"
                width={500}
                height={200}
                alt="img"
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
