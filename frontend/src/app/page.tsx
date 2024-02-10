"use client";
import HeaderSection from "@/components/headerSection";
import HeroSection from "@/components/heroSection";
import VideoGeneratedSection from'@/components/VideoGeneratedSection'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(false)
  return (
    <main>
      <div className="">
        {/* <HeaderSection /> */}
        <HeroSection />
      </div> */}
      {/* bh */}
      <VideoGeneratedSection />
      </>  
  );
}
