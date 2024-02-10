"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const VideoGeneratedSection = () => {
  const images = [
    { title: "Realistic", img: "/Assests/homeAssests/realistic.jpg" },
    { title: "Fantasy", img: "/Assests/homeAssests/fantasy.jpg" },
    { title: "Neon Love", img: "/Assests/homeAssests/neonLove.jpg" },
    { title: "Liquid", img: "/Assests/homeAssests/liquid.jpg" },
    { title: "Chaos", img: "/Assests/homeAssests/chaos.jpg" },
    { title: "Vibrant", img: "/Assests/homeAssests/vibrant.jpg" },
  ];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : prevProgress
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-lightGray">
      <div className="relative z-30 max-w-screen-xl mx-auto text-center px-4 lg:px-10 xl:px-14">
        <div className="flex gap-4 justify-start items-center max-w-5xl py-5 md:py-8">
          <h2 className="text-xl md:text-3xl font-semibold font-inika">
            Choose Style
          </h2>
          <ul className="flex gap-2 font-light text-lg md:text-xl text-gray-700">
            <li>New</li>
            <li>Hot</li>
            <li>Top</li>
          </ul>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-6 md:grid-cols-3  mx-auto gap-2 md:gap-4">
          {images.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="w-16 h-16 md:w-36 md:h-36 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-3xl">
                  <Image
                    src={data.img}
                    alt="images"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-3xl"
                  />
                </div>
                <h3 className="text-xs md:text-xl font-semibold font-inika">
                  {data.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="h-64 md:h-96 lg:h-[460px] py-4 md:px-10 lg:px-0">
          <div className="relative lg:w-[850px] h-full mx-auto">
            <video
              controls
              className="h-full my-5 border border-green-800 rounded-2xl"
            >
              <source
                src="https://www.youtube.com/watch?v=xIBLZrxyQ3w"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div
              className="h-full w-full flex rounded-2xl justify-center items-center"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                disabled
                type="button"
                className="text-black relative z-20 bg-lightGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 lg:py-3 lg:pr-10 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
              >
                <span className="pr-6">Generating</span>
                <span className="absolute top-1/2 right-6 lg:right-10 translate-y-[-50%] dot delay-300"></span>
                <span className="absolute top-1/2 right-5 lg:right-9 translate-y-[-50%] dot delay-200"></span>
                <span className="absolute top-1/2 right-4 lg:right-8 translate-y-[-50%] dot delay-100"></span>
              </button>

              <div
                style={{
                  position: "absolute",
                  // top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "#000", // Adjust background color as needed
                  height: `${progress}%`, // Adjust width based on the progress state
                  borderRadius: "inherit",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex gap-2 xl:gap-4 py-5 xl:pt-10 md:justify-center">
          <button className="order-1 font-inter md:order-2 bg-brown md:text-base lg:text-2xl font-semibold text-white px-5 text-sm md:px-8 xl:px-10 py-4 md:py-4 xl:py- hover:bg-gray-900 rounded-full">
            Share
          </button>
          <button className="order-2 font-inter md:order-1 col-span-2 bg-lightGreen md:text-base lg:text-2xl font-semibold text-gray-700 px-5 text-sm md:px-8 xl:px-10 py-4 xl:py- md:py-2 hover:bg-teal-300 rounded-full">
            Create Again
          </button>
          <button className="bg-brown font-inter md:text-base lg:text-2xl font-semibold text-white px-5 text-sm md:px-8 xl:px-10 md:py-4 py-4 xl:py-6 hover:bg-gray-900 rounded-full">
            Save
          </button>
        </div>
        {/* 
 <div>
      <li className="bg-[#CEFAE5]">Top</li>
      <li className="bg-[#514A4A]">Top</li>
      <li className="bg-[#FFFFFF]">Top</li>
      <li className="bg-[#000000]">Top</li>
      <li className="bg-[#DCD8F8]">Top</li>
      <li className="bg-[#076857]">Top</li>
      <li className="bg-[#B8EEEB]">Top</li>
      <li className="bg-[#0B1618]">Top</li>
      </div>
      */}
      </div>
    </section>
  );
};

export default VideoGeneratedSection;
