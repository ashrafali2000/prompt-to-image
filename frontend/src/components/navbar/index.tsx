"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className="border-gray-200 z-50 md:z-30 relative">
      <div className="flex md:flex-wrap items-end justify-between mx-auto md:px-4 lg:px-0 py-2 md:py-4">
        <Link href="https://flowbite.com/" className="flex items-end">
          <img
            src="/Assests/homeAssests/logonew.png"
            className="h-12 md:h-16 lg:h-20"
            alt="WooPond Logo"
          />
          <span className="text-xl md:text-2xl lg:text-4xl -ml-2 font-bold font-inika text-primary">
            WooPond
          </span>
        </Link>
        <button
          type="button"
          className="ml-24 inline-flex items-center p-2  justify-center text-sm text-lightGray rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lightGreen"
          onClick={() => setToggle(!toggle)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-normal font-inter lg:text-xl xl:text-2xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 xl:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 rounded  md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Text to image
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Text to video
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Bookmarks
              </Link>
            </li> */}
          </ul>
        </div>
        <button>
          <Link
            href="#"
            className="hidden md:inline bg-lightGreen hover:bg-teal-300 font-semibold lg:font-bold lg:text-2xl py-2 px-4 md:border-0 md:py-5 md:px-6 lg:px-8  xl:px-10 lg:py-6 rounded-full text-gray-800"
          >
            Sign Up
          </Link>
        </button>
      </div>
      {/* toggle */}
      {toggle && (
        <div>
          <div className="absolute top-12 z-50 w-full">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-green-200 rounded-lg bg-black">
              <li>
                <Link
                  onClick={() => setToggle(!toggle)}
                  href="/"
                  className="block py-2 px-3 text-white font-semibold "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(!toggle)}
                  href="/our-department/disaster"
                  className="block py-2 px-3 text-white font-semibold "
                  aria-current="page"
                >
                  Feed
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(!toggle)}
                  href="/appeal"
                  className="block py-2 px-3 text-white font-semibold "
                >
                  Styles
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(!toggle)}
                  href="/donation"
                  className="block py-2 px-3 text-white font-semibold "
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(!toggle)}
                  href="/donation"
                  className="block py-2 px-3 text-white font-semibold "
                >
                  Bookmarks
                </Link>
              </li>
              <hr className="my-4 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-25" />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
