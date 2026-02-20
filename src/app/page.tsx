import Image from "next/image";
// import Navbar from "@/components/Navbar"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Feature from "@/components/Feature"
// import FeatureCard from "@/components/FeatureCard"
import CardFeature from "@/components/CardFeature"
import TestimonialMarquee from "@/components/TestimonialMarquee";
import Feature2 from "@/components/Feature2";
import AdminDashboard from "@/pages/AdminDashboard";

import ImageSlider from "@/components/ImageSlider"
// import Swiper from "@/components/Swiper"

export default function Home() {
  return (
  <div>
     {/* <Navbar/> */}
     <Nav/>
     <Hero/>
     <Feature/>
     {/* <FeatureCard/> */}
     <CardFeature/>
     <TestimonialMarquee/>
     <Feature2/>
     <AdminDashboard/>
     {/* <Imgslider/> */}
     <ImageSlider/>
     {/* <Swiper/> */}
  </div>
  );
}
