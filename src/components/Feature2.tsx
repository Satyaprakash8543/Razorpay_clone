"use client";
import Image from "next/image";
import Link from "next/link";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { ChevronRight } from "lucide-react";

const Feature2 = () => {
  const features = [
    "Open a fully digital current account",
    "Automate payables & compliment payments",
    "Simplify and track spends with Corporate cards",
    "View financial insights at a glance",
  ];

  return (
    //top section
  
    <section className="bg-white relative z-0 min-h-screen bg-[url('/img/feature-section2-2BG.svg')] bg-no-repeat bg-cover pb-75 pt-40 overflow-hidden ">
      <div className="w-11/12 max-w-270 relative mx-auto  ">
        <h1 className="text-center text-3xl">
          Explore RazorpayX powered Business Banking
        </h1>
        <div className="w-8 h-1 bg-green-400 mx-auto"></div>

        {/*Main feature box */}
        <div className=" relative w-full min-h-110 mx-auto ">
          {/* img */}
          <Image
            src="/img/x-flame-1-feature2.png"
            alt="img"
            width={150}
            height={100}
            priority
            className="absolute -top-30 -left-30  z-0"
          />

          <Image
            src="/img/featur2.png"
            alt="img"
            width={200}
            height={200}
            priority
            className="absolute  -right-38 bottom-30 z-0"
          />

          {/* content box */}
          {/* bg-[#04062D] */}

          <div className="relative z-10  min-h-100 mt-16 flex flex-col-reverse items-center rounded-md gap-12 border  p-4 md:flex-row">
            {/* Left Section */}
            <div className="flex max-w-xl flex-col justify-between items-start h-full w-full gap-6">
              <h3 className="text-2xl font-bold leading-8">
                Manage your company’s finances and supercharge your business
                banking with
                <Image
                  src="/img/logo.svg"
                  alt="Company Logo"
                  width={120}
                  height={20}
                  priority
                  className="inline-block"
                />
                <span className="text-green-500">Business Banking</span>
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
                <button className=" relative flex items-center justify-start gap-2 rounded-md bg-blue-500 px-3 py-3 pr-11 text-sm font-semibold text-white transition hover:bg-blue-600">
                  Sign Up Now
                  <div className=" absolute right-2 w-8 h-full bg-green-600 flex justify-center items-center skew-x-20 ">
                    <FaArrowRight className="-skew-x-20" />
                  </div>
                </button>

                <Link
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline flex items-center hover:text-gray-400 cursor-pointer transition-all duration-200"
                >
                  <span> Know more</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full max-w-xl">
              <Image
                src="/img/buisness-banking-feature2.png"
                width={800}
                height={600}
                alt="Payment suite dashboard illustration"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default Feature2;
