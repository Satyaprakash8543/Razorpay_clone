// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa6";

// const navItems = [
//   "Payments",
//   "Banking Plus",
//   "Use Cases",
//   "Help & Docs",
//   "Partners",
//   "Pricing",
// ];

// const Navbar = () => {
//   return (
//     <nav className=" bg-[#04062D]">
//       <div className="mx-auto flex w-10/12 max-w-270 items-center justify-between">

//         {/* Logo */}
//         <Link href="/" className="py-5 pr-7">
//           <Image
//             src="/img/logo.svg"
//             alt="Company Logo"
//             width={120}
//             height={40}
//             priority
//           />
//         </Link>

//         {/* Nav Links */}
//         <ul className="flex items-center space-x-6">
//           {navItems.map((item) => (
//             <li
//               key={item}
//               className="relative cursor-pointer py-5 font-medium text-white transition-colors duration-200 hover:text-blue-400 group"
//             >
//               <Link href="#">{item}</Link>
//               <span className="absolute bottom-0 left-0 hidden h-1 w-full bg-blue-500 group-hover:block transition-all duration-200" />
//             </li>
//           ))}
//         </ul>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-4">
//           <button
//             className="h-10 rounded-md border border-blue-500 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-500 hover:text-white"
//           >
//             Login
//           </button>

//           <button
//             className="flex items-center gap-1 justify-center h-10 rounded-md bg-white px-5 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
//           >
//            <span> Sign Up</span>
//            <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Responsove code

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Menu, X } from "lucide-react";

import { motion } from "motion/react";

const NAV_ITEMS = [
  "Payments",
  "Banking Plus",
  "Use Cases",
  "Help & Docs",
  "Partners",
  "Pricing",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#04062D] overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ x: -200 }} //Start
          animate={{ x: 0 }} //Original position
          transition={{
            duration: 0.8,
            delay: 1,
            ease: "easeInOut",
          }}
        >
          <Link href="/#" className="flex items-center">
            <Image
              src="/img/logo.svg"
              alt="Company Logo"
              width={120}
              height={40}
              priority
             
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item}
              initial={{ y: -100 }} //Start
              animate={{ y: 0 }} //Original Position
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="group relative text-sm font-medium text-white"
            >
              <Link
                href="#"
                className="transition-colors duration-200 hover:text-blue-400"
              >
                {item}
              </Link>
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex  ">
          <button className="h-10 rounded-md border border-blue-500 px-5 text-sm font-semibold text-white transition hover:bg-blue-500">
            Login
          </button>

          <button className="flex h-10 mr-4 items-center gap-2 rounded-md bg-white px-3 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
            Sign Up <FaArrowRight />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="space-y-4 border-t border-white/10 bg-[#04062D] px-6 py-6">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-medium text-white transition hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile device */}
            <div className="mt-6 flex flex-col gap-3 ">
              <button className="h-10 rounded-md border border-blue-500 text-sm font-semibold text-white transition hover:bg-blue-500">
                Login
              </button>

              <button className="flex h-10  items-center justify-center gap-2 rounded-md bg-white text-sm font-semibold text-blue-600 transition hover:text-blue-700">
                Sign Up <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
