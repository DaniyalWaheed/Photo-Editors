import React, { Component } from "react";
import contents from "./contents.json";

const DemoNavbar = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed top-0 z-50 w-full">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#home" class="flex items-center">
          <img
            src={"/assets/LOGO.png"}
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Green Hills
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
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
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
    return (
      <DemoNavbar />
      // <div classname="flex flex-col h-screen">
      //   <header className="text-gray-600 body-font fixed top-0 z-50 w-full  bg-gray-200">
      //     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      //       <a
      //         href="#home"
      //         className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      //       >
      //         <img
      //           src={"/assets/LOGO.png"}
      //           alt="logo"
      //           className="w-150 h-20 text-white p-2 rounded-full"
      //         />

      //         <span className="ml-3 text-xl">Green House Hills</span>
      //       </a>
      //       <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      //         <a
      //           className="mr-5 hover:text-gray-900 cursor-pointer"
      //           href={"#home"}
      //         >
      //           Home
      //         </a>
      //         <a
      //           className="mr-5 hover:text-gray-900 cursor-pointer"
      //           href={"#gallery"}
      //         >
      //           Gallery
      //         </a>

      //         <a
      //           className="mr-5 hover:text-gray-900 cursor-pointer"
      //           href={"#services"}
      //         >
      //           Services
      //         </a>
      //         <a
      //           className="mr-5 hover:text-gray-900 cursor-pointer"
      //           href={"#testimonals"}
      //         >
      //           Testimonals
      //         </a>
      //         <a
      //           className="mr-5 hover:text-gray-900 cursor-pointer"
      //           href={"#contactUs"}
      //         >
      //           Contact Us
      //         </a>
      //       </nav>
      //       <button className="inline-flex items-center  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      //         <img
      //           className="w-14 h-14"
      //           src="/assets/WhatsApp.png"
      //           alt="whatsapp"
      //         />
      //         {/* <svg
      //           fill="none"
      //           stroke="currentColor"
      //           stroke-linecap="round"
      //           stroke-linejoin="round"
      //           stroke-width="2"
      //           className="w-4 h-4 ml-1"
      //           viewBox="0 0 24 24"
      //         >
      //           <path d="M5 12h14M12 5l7 7-7 7"></path>
      //         </svg> */}
      //       </button>
      //     </div>
      //   </header>
      // </div>
    );
  }
}

export default Header;
