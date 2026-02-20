"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

export default function App() {
  return (
    <>
     <section className=" min-h-screen flex items-center justify-center rounded-2xl">
        <div className="w-full max-w-4xl">
         <Swiper className="mySwiper" >
        <SwiperSlide><div className="h-80   bg-green-400 rounded-xl">
            </div></SwiperSlide>
        <SwiperSlide><div className="h-80  bg-amber-400 rounded-xl"></div></SwiperSlide>
        <SwiperSlide><div className="h-80  bg-red-600 rounded-xl"></div></SwiperSlide>
        <SwiperSlide><div className="h-80  bg-pink-500 rounded-xl"></div></SwiperSlide>
        <SwiperSlide><div className="h-80  bg-gray-600 rounded-xl"></div></SwiperSlide>
        <SwiperSlide><div className="h-80  bg-yellow-900"></div></SwiperSlide>
    
      </Swiper>
      </div>
     </section>
    </>
  );
}
