"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative w-full  bg-[#04062D] text-white ">
      <div className="flex sm:flex-row flex-col justify-between items-center  mx-auto w-11/12 max-w-270 p-8 sm:p-8 overflow-hidden ">
        {/* Left part */}
        <div className="space-y-8">
          <h1 className="text-[40px] font-bold leading-[1.2]">
            Power your finance, grow your business
            <span className="inline-block  align-middle ml-2">
              <video
                src="/video/video.mp4"
                autoPlay
                loop
                muted
                className="h-10 w-10  rounded-full object-cover"
              />
            </span>
          </h1>
          <div className="h-1 w-6 bg-green-400"></div>
          <p className="opacity-75 leading-7 text-[16px] w-85 ">
            Accept payments from customers. Automate payouts to vendors &
            employees. Never run out of working capital.
          </p>
          <button className="flex items-center gap-1 justify-center  rounded-md bg-blue-400 hover:bg-blue-600 px-2.5 py-3 text-sm font-bold text-white transition-all duration-200 ">
            <span>Sign Up Now</span>
            <FaArrowRight />
          </button>
        </div>
        {/* Right part */}
        <div>
          <Image
            src="/img/hero-img.jpg"
            alt="hero_img"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>

      <div className="absolute left-0 right-0 w-full h-50 bg-white overflow-hidden">
        <Image
          src="/img/hero-shapeimg.svg"
          alt="Hero background shape"
          fill
          priority
          className="object-fill"
        />
      </div>
    </section>
  );
};

export default Hero;
