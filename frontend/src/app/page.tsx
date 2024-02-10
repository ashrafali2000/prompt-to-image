"use client";
import { ImageContext } from "@/components/contextApi/imageContext";
import HeaderSection from "@/components/headerSection";
import HeroSection from "@/components/heroSection";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <div className="">
        {/* <HeaderSection /> */}

        <HeroSection />
      </div>
    </main>
  );
}
