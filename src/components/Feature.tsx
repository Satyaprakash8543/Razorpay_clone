// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { MdCheckCircleOutline } from "react-icons/md";
// import { FaArrowRight } from "react-icons/fa6";

// const Feature = () => {
//   return (
//     <section className="relative w-full mt-40 bg-white text-black">
//       <Image
//         src="/img/fetureimg.png"
//         width={233}
//         height={167}
//         alt="img"
//         loading="lazy"
//         className=" absolute -top-5 left-20 inline-block z-20"
//       />

//       <Image
//         src="/img/fetureimg.png"
//         width={233}
//         height={167}
//         loading="lazy"
//         alt="img"
//         className="absolute top-40 right-0 inline-block rotate-180"
//       />

//       <div className="relative w-full max-w-[1080] mx-auto pt-4 ">
//         {/* Heading */}
//         <h1 className="relative font-bold text-2xl  text-center leading-[1.2]">
//           Accept Payments with Razorpay Payment Suite
//         </h1>
//         <div className=" h-1 w-6 bg-green-400 mx-auto mt-3 mb-6"></div>

//         {/* Content Box */}
//         <div className="w-full h-auto flex rounded-md  ">
//           {/* Left section */}
//           <div className="flex flex-col justify-between items-center w-full">
//             <h3 className="text-2xl leading-8 font-bold max-w-100">
//               Supercharge your business with the all-powerful
//               <span className="bg-blue-400">Payment Geteway</span>
//             </h3>
//             <ul className="space-y-1">
//               <li className="flex items-center space-x-2">
//                 <MdCheckCircleOutline className="w-6 h-6" />
//                 <span>100+ Payments Methods</span>
//               </li>
//               <li>✅Industry Leading Success Rate</li>
//               <li>✅Superior Checkout Experience</li>
//               <li>✅Easy to Integrate</li>
//               <li>✅Instant Settlements from day 1</li>
//               <li>✅In-depth Reporting and Insights</li>
//             </ul>

//             <div className="flex justify-center items-center gap-4">
//               <button className="flex items-center gap-1 justify-center  rounded-md bg-blue-400 hover:bg-blue-600 px-2.5 py-3 text-sm font-bold text-white transition-all duration-200 ">
//                 <span>Sign Up Now</span>
//                 <FaArrowRight />
//               </button>
//               <div>
//                 <Link href="#" className="">Know more</Link>
//               </div>
//             </div>
//           </div>
//           {/* Right section */}
//           <div>
//             <Image
//               src="/img/payment-suite.png"
//               width={800}
//               height={600}
//               alt="img "
//               priority
//               className=""
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Feature;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { ChevronRight } from "lucide-react";

const features = [
  "100+ Payment Methods",
  "Industry-leading success rate",
  "Superior checkout experience",
  "Easy to integrate",
  "Instant settlements from day 1",
  "In-depth reporting and insights",
];

const Feature = () => {
  return (
    <section className="relative  w-full bg-white text-black overflow-hidden mx-auto mt-50">
      {/* Decorative Images */}
      <Image
        src="/img/fetureimg.png"
        width={300}
        height={167}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute -top-5 left-20 z-20 hidden md:block"
      />

      <Image
        src="/img/fetureimg.png"
        width={233}
        height={167}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-40 right-0 rotate-180 hidden md:block"
      />

      <div className="relative mx-auto w-10/12 max-w-7xl pt-6 p-3">
        {/* Heading */}
        <h2 className="relative text-center text-2xl font-bold leading-tight">
          Accept Payments with Razorpay Payment Suite
          <div className="mx-auto h-1 w-6  bg-green-400 mt-2"></div>
        </h2>

        {/* Content */}
        <div className="mt-16 flex flex-col-reverse items-center gap-12 border  p-4 md:flex-row">
          {/* Left Section */}
          <div className="flex max-w-xl flex-col gap-6">
            <h3 className="text-2xl font-bold leading-8">
              Supercharge your business with the all-powerful{" "}
              <span className="text-blue-500">Payment Gateway</span>
            </h3>

            <ul className="space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <MdCheckCircleOutline className="h-5 w-5 text-green-500" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <button className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
                Sign Up Now
                <FaArrowRight />
              </button>

              <Link
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline flex items-center hover:text-gray-400 cursor-pointer transition-all duration-200"
              >
                <span> Know more</span>
                <ChevronRight  className="w-5 h-5"/>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full max-w-xl">
            <Image
              src="/img/payment-suite.png"
              width={800}
              height={600}
              alt="Payment suite dashboard illustration"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
