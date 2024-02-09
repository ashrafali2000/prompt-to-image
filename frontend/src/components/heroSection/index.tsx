"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [progress, setProgress] = useState(0);

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
          <div className="h-full w-full px-2">
            <div
              className="h-[500px] lg:h-[710px] w-full bg-green relative z-50 rounded-2xl p-2"
              style={{
                border: `4px solid #fff`,
                transition: "border-width 2s ease-in-out",
              }}
            >
              {/* <Image
                src={"/Assests/homeAssests/firstImage.jpg"}
                alt="Generating image..."
                width={400}
                height={800}
                className="w-full h-full rounded-xl"
              /> */}
              {/* <div className="h-full w-full flex justify-center items-center">
                <button
                  disabled
                  type="button"
                  className="text-black bg-lightGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 lg:py-3 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 lg:w-8 lg:h-8 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#f00"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              </div> */}
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
                {/* <button
                  disabled
                  type="button"
                  className="text-black relative z-20 bg-lightGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 lg:py-3 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  Generating
                  <span
                    className="absolute top-1/2 right-2 translate-y-[-50%] before:content before:block before:w-2 before:h-2 before:bg-white before:rounded-full before:absolute before:right-0 before:-translate-x-full before:animate-bounce1"
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      position: "absolute",
                      right: 0,
                      animation: "bounce1 1s infinite",
                    }}
                  ></span>
                  <span
                    className="absolute top-1/2 right-2 translate-y-[-50%] before:content before:block before:w-2 before:h-2 before:bg-white before:rounded-full before:absolute before:right-0 before:-translate-x-full before:animate-bounce2"
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      position: "absolute",
                      right: 0,
                      animation: "bounce2 1s infinite",
                      animationDelay: "0.1s",
                    }}
                  ></span>
                  <span
                    className="absolute top-1/2 right-2 translate-y-[-50%] before:content before:block before:w-2 before:h-2 before:bg-white before:rounded-full before:absolute before:right-0 before:-translate-x-full before:animate-bounce3"
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      position: "absolute",
                      right: 0,
                      animation: "bounce3 1s infinite",
                      animationDelay: "0.2s",
                    }}
                  ></span>
                </button> */}
                <button
                  disabled
                  type="button"
                  className="text-black relative z-20 bg-lightGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 lg:py-3 lg:pr-10 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <span className="pr-6">Generating</span>
                  <span className="absolute top-1/2 right-10 translate-y-[-50%] dot delay-300"></span>
                  <span className="absolute top-1/2 right-9 translate-y-[-50%] dot delay-200"></span>
                  <span className="absolute top-1/2 right-8 translate-y-[-50%] dot delay-100"></span>
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
