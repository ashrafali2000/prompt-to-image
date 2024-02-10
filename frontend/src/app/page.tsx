"use client";
import HeaderSection from "@/components/headerSection";
import HeroSection from "@/components/heroSection";
import VideoGeneratedSection from "@/components/VideoGeneratedSection";
import AuthModal from "../components/AuthModal";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(false)
  return (
    <>
      {/* <div className="min-h-screen bg-gray-800">
        <HeaderSection />
        <HeroSection />
      </div> */}
      <button
        onClick={() => setData(!data)}
        className="border rounded-full px-8 py-3 text-2xl bg-blue-500 hover:bg-blue-800 text-white my-3 text-center"
      >
        click here
      </button>
      <AuthModal open={data} setOpen={setData} />
      <VideoGeneratedSection />
    </>
  );
}
