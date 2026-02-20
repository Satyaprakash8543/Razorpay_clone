import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const feature = [
  {
    id: 1,
    title: "Payment Links",
    description:
      "Share payment links via email, SMS, messenger, or chatbots and get paid instantly.",
    icon: "/img/payment-linkarrow.svg",
    link: "know more",
  },
  {
    id: 2,
    title: "Payment Links",
    description:
      "Share payment links via email, SMS, messenger, or chatbots and get paid instantly.",
    icon: "/img/payment-linkarrow.svg",
    link: "know more",
  },
];

const FeatureCard = () => {
  return (
    <section className="relative  w-full bg-white text-black overflow-hidden mx-auto ">
      {/* Card section */}
      <div className="w-full grid grid-cols-3 gap-4">
        {/* Box-1 */}
        <div className="w-full min-h-60 relative cursor-pointer p-3 border bg-white">
          <Image
            src="/img/payment-linkarrow.svg"
            width={15}
            height={15}
            alt="svg img"
            aria-hidden="true"
            loading="lazy"
            className="bg-blue-500 absolute right-3 top-3 rounded-full z-8  transition-all duration-200"
          />
          {/* box-content*}
        <div className=" absolute h-full w-full flex flex-col justify-between">
          {/* text-part */}
          <h1 className="text-2xl font-bold ">Payments Links</h1>
          <p className="text-gray-500">
            Share payments link via an email, SMS, messenger, chatbot etc. and
            get paid immediately
          </p>

          {/* hyperlink know more */}

          <Link href="#" className="flex items-center cursor-pointer mb-5 ">
            <span>Know more</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        {/* </div> */}
        {/* Box-2 */}
      </div>
    </section>
  );
};

export default FeatureCard;
