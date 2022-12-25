import React, { Component, useState } from "react";
import contents from "./contents.json";

const DemoNavbar = () => {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed top-0 z-50 w-full  body-font bg-gray-200">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#home" class="flex items-center">
          <img src={"/assets/LOGO.png"} class="h-14 " alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Green Hills
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setShowToggle(!showToggle)}
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          class={`w-full md:block md:w-auto ${showToggle ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {contents.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="mr-5 hover:text-gray-900 cursor-pointer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <DemoNavbar />;
  }
}

export default Header;
