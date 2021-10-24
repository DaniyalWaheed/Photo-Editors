import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div classname="flex flex-col h-screen">
        <header className="text-gray-600 body-font fixed top-0 z-50 w-full  bg-gray-200">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a
              href="#home"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Photo Editors</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a
                className="mr-5 hover:text-gray-900 cursor-pointer"
                href={"#home"}
              >
                Home
              </a>
              <a
                className="mr-5 hover:text-gray-900 cursor-pointer"
                href={"#gallery"}
              >
                Gallery
              </a>

              <a
                className="mr-5 hover:text-gray-900 cursor-pointer"
                href={"#services"}
              >
                Services
              </a>
              <a
                className="mr-5 hover:text-gray-900 cursor-pointer"
                href={"#testimonals"}
              >
                Testimonals
              </a>
              <a
                className="mr-5 hover:text-gray-900 cursor-pointer"
                href={"#contactUs"}
              >
                Contact Us
              </a>
            </nav>
            <button className="inline-flex items-center  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <img
                className="w-14 h-14"
                src="/assets/WhatsApp.png"
                alt="whatsapp"
              />
              {/* <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg> */}
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
