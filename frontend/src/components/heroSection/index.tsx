"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useImageContext } from "../contextApi/imageContext";

export default function HeroSection() {
  const generatedImage = useImageContext();
  const defaultLoader = useImageContext();
  const loader = defaultLoader.defaultLoader;
  const imageFetch = generatedImage.image;
  const [progress, setProgress] = useState(0);
  // const [imageData, setImageData] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : prevProgress
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);
  const chooseImagList = [
    { title: "Realistic", img: "/Assests/homeAssests/realistic.jpg" },
    { title: "Fantasy", img: "/Assests/homeAssests/fantasy.jpg" },
    { title: "Neon Love", img: "/Assests/homeAssests/neonLove.jpg" },
    { title: "Liquid", img: "/Assests/homeAssests/liquid.jpg" },
    { title: "Chaos", img: "/Assests/homeAssests/chaos.jpg" },
    { title: "Vibrant", img: "/Assests/homeAssests/vibrant.jpg" },
  ];
  return (
    <div
      className="bg-lightGray max-h-max"
      // style={{
      //   height: "calc(100vh - 10px)",
      // }}
    >
      <div className="py-4 md:py-8 max-w-screen-xl px-4 md:px-4 lg:px-10 xl:px-14 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 xl:gap-10">
          <div className="pt-2 md:pt-8 xl:pt-16">
            <div className="flex gap-5 xl:gap-6 max-w-xl pb-5  md:pb-8 items-end">
              <h2 className="text-xl font-inika md:text-3xl xl:text-5xl font-semibold text-black">
                Choose Style
              </h2>
              <div className="flex gap-2 xl:gap-5 font-normal text-gray-600 text-lg md:text-xl lg:text-3xl">
                <Link href={"#"}>New</Link>
                <Link href={"#"}>Hot</Link>
                <Link href={"#"}>Top</Link>
              </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
              {chooseImagList.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-2"
                >
                  <div className="w-16 h-16 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-3xl">
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
              ))}
            </div>
          </div>
          <div className="h-full w-full md:px-2">
            <div
              className="h-[450px] md:h-[500px] lg:h-[710px] w-full bg-green relative z-50 rounded-2xl p-2"
              style={{
                border: `4px solid #fff`,
                transition: "border-width 2s ease-in-out",
              }}
            >
              {loader ? (
                <>
                  {imageFetch ? (
                    <Image
                      src={imageFetch}
                      alt="Generating image..."
                      width={400}
                      height={800}
                      className="w-full h-full rounded-xl"
                    />
                  ) : (
                    <div
                      className="h-full w-full flex rounded-2xl justify-center items-center relative"
                      style={{
                        backgroundImage:
                          "url('/Assests/homeAssests/firstImage.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
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
                        className="text-black relative z-50 bg-lightGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 lg:py-3 lg:pr-10 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
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
                          padding: 4,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          // background: "#000", // Adjust background color as needed
                          height: `${progress}%`, // Adjust width based on the progress state
                          borderRadius: "inherit",
                        }}
                      ></div>
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full">
                  <Image
                    src={"/Assests/homeAssests/firstImage.jpg"}
                    alt="Generating image..."
                    width={400}
                    height={800}
                    className="w-full h-full rounded-xl"
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 md:flex gap-2 xl:gap-4 py-5 xl:pt-10 md:justify-center">
              <button className="order-1 font-inter md:order-2 bg-brown md:text-base lg:text-2xl font-semibold text-white px-5 text-sm md:px-8 xl:px-10 py-4 md:py-2 xl:py- hover:bg-gray-900 rounded-full">
                Share
              </button>
              <button className="order-2 font-inter md:order-1 col-span-2 bg-lightGreen md:text-base lg:text-2xl font-semibold text-gray-700 px-5 text-sm md:px-8 xl:px-10 py-4 xl:py- md:py-2 hover:bg-teal-300 rounded-full">
                Create Again
              </button>
              <button className="bg-brown font-inter md:text-base lg:text-2xl font-semibold text-white px-5 text-sm md:px-8 xl:px-10 md:py-2 py-4 xl:py-6 hover:bg-gray-900 rounded-full">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
