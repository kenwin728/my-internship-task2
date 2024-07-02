import React from "react";

function Header() {
  return (
    <header className="pb-6 bg-black lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 font-bold">
            <button className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://static.vecteezy.com/system/resources/thumbnails/013/760/485/small_2x/abstract-connection-logo-illustration-in-trendy-and-minimal-style-png.png"
                alt="logo"
              />
              <h2 className="text-white px-1 text-2xl transition-all duration-200 hover:text-gray-400">
                InnoVantage Tech
              </h2>
            </button>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-400 hover:bg-gray-400"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <button className="text-base font-medium text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400">
              {" "}
              Features{" "}
            </button>

            <button className="text-base font-medium text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400">
              {" "}
              Solutions{" "}
            </button>

            <button className="text-base font-medium text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400">
              {" "}
              Resources{" "}
            </button>

            <button className="text-base font-medium text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400">
              {" "}
              Pricing{" "}
            </button>
          </div>

          <button className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-black transition-all duration-200 bg-white border border-transparent rounded-md lg:inline-flex hover:bg-gray-400 focus:bg-gray-400">
            {" "}
            Get started now{" "}
          </button>
        </nav>
        <nav className="pt-4 pb-6 bg-black border border-gray-200 rounded-md shadow-md lg:hidden">
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <button className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400">
                {" "}
                Features{" "}
              </button>

              <button class="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400">
                {" "}
                Solutions{" "}
              </button>

              <button className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400">
                {" "}
                Resources{" "}
              </button>

              <button className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400">
                {" "}
                Pricing{" "}
              </button>
            </div>
          </div>

          <div className="px-6 mt-6">
            <button className="inline-flex justify-center px-4 py-3 text-base font-semibold text-black transition-all duration-200 bg-white border border-transparent rounded-md tems-center hover:bg-gray-400 focus:bg-gray-400">
              {" "}
              Get started now{" "}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
