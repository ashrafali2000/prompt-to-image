import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="border-gray-200 z-30 relative">
      <div className="flex flex-wrap items-end justify-between mx-auto py-4">
        <Link href="https://flowbite.com/" className="flex items-end">
          <img
            src="/Assests/homeAssests/logonew.png"
            className="h-20"
            alt="WooPond Logo"
          />
          <span className="text-2xl font-semibold  text-white">WooPond</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
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
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded  md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Feed
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Styles
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Bookmarks
              </a>
            </li>
          </ul>
        </div>
        <button>
          <Link
            href="#"
            className="bg-teal-200 font-semibold py-2 px-4 md:border-0 md:p-4 rounded-3xl text-gray-800"
          >
            Sign Up
          </Link>
        </button>
      </div>
    </nav>
  );
}
