"use client";

import { motion } from "motion/react";
// import { useRef } from "react";

type Testimonial = {
  id: number;
  title: string;
  description: string;
  name: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    title: "Amazing Experience",
    description:
      "This platform completely transformed how we handle payments. Fast, reliable, and easy to use.",
    name: "Rahul Sharma",
  },
  {
    id: 2,
    title: "Game Changer",
    description:
      "Our business cash flow improved instantly. The automation features are a lifesaver.",
    name: "Anita Verma",
  },
  {
    id: 3,
    title: "Highly Recommended",
    description:
      "Clean UI, powerful features, and great support. Exactly what modern businesses need.",
    name: "Vikram Singh",
  },
  {
    id: 4,
    title: "Worth Every Penny",
    description:
      "We scaled faster after switching. Payouts and settlements are now stress-free.",
    name: "Prakash",
  },

   {
    id: 5,
    title: "Worth Every Penny",
    description:
      "We scaled faster after switching. Payouts and settlements are now stress-free.",
    name: "Neha Kapoor",
  },
];

const TestimonialMarquee = () => {
    // const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full overflow-hidden  bg-[#04062D] text-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Heading */}
        <h2 className="mb-10 text-center text-3xl font-bold text-teal-500  ">
          What our customers say
          <div className="w-10 h-1 bg-white mx-auto"></div>
        </h2>

        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden">
          <motion.div

            //  ref={trackRef}
            className="flex gap-6"
            // animate={{ x: ["0%", "-100%"] }} //Right to left move
            animate={{ x: ["-100%", "0%"] }}  //left to right move
          
        //    animate={{
        //     x: trackRef.current
        //       ? -trackRef.current.scrollWidth / 2
        //       : 0,
        //   }}
         

            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >

            {/* Duplicate content for seamless loop */}
            {/* [...TESTIMONIALS, ...TESTIMONIALS] */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="min-w-75 max-w-sm rounded-xl bg-white p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <div className="mt-4 text-sm font-medium text-blue-600">
                  — {item.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
