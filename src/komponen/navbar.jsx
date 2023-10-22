import React from "react";

function NavbarComponent({ currentPage, changePage, isMenuOpen, toggleMenu }) {

  return (
    <nav className="fixed z-50 w-full bg-slate-50 px-10 py-3 font-basierR backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black text-white">
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu} // Tambahkan onClick untuk mengganti status menu
          className="inline-flex  items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto  `}
          id="navbar-dropdown"
        >
          <ul className="uppercase flex    flex-col font-normal  md:p-0 mt-4 text-2xl rounded-lg md:flex-row md:space-x-16 md:mt-0 md:border-0   ">
            <li>
              <a
                href="#"
                onClick={() => changePage("home")}
                className={`rounded-full  block py-2  ${
                  currentPage === "home"
                    ? "text-orange-400 "
                    : "text-gray-800   hover:text-amber-500 "
                } rounded md:bg-transparent md: ${
                  currentPage === "home"
                    ? " text-gray-800 "
                    : " text-gray-800   hover:text-gray-300  "
                } md:p-0 md:dark:${
                  currentPage === "home"
                    ? "text-gray-300"
                    : "hover:text-gray-800"
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => changePage("about")}
                className={`rounded-full block py-2  ${
                  currentPage === "about"
                    ? "text-orange-400 "
                    : "text-gray-800   hover:text-amber-500 "
                } rounded md:bg-transparent md: ${
                  currentPage === "about"
                    ? " text-gray-800 "
                    : " text-gray-800   hover:text-gray-300  "
                } md:p-0 md:dark:${
                  currentPage === "about"
                    ? "text-gray-300"
                    : "hover:text-gray-800"
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => changePage("about")}
                className={`rounded-full block py-2  ${
                  currentPage === "about"
                    ? "text-orange-400 "
                    : "text-gray-800   hover:text-amber-500 "
                } rounded md:bg-transparent md: ${
                  currentPage === "about"
                    ? " text-gray-800 "
                    : " text-gray-800   hover:text-gray-300  "
                } md:p-0 md:dark:${
                  currentPage === "about"
                    ? "text-gray-300"
                    : "hover:text-gray-800"
                }`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => changePage("about")}
                className={`rounded-full block py-2  ${
                  currentPage === "about"
                    ? "text-orange-400 "
                    : "text-gray-800   hover:text-amber-500 "
                } rounded md:bg-transparent md: ${
                  currentPage === "about"
                    ? " text-gray-800 "
                    : " text-gray-800   hover:text-gray-300  "
                } md:p-0 md:dark:${
                  currentPage === "about"
                    ? "text-gray-300"
                    : "hover:text-gray-800"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
