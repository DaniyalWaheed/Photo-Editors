import React, { useState } from "react";
import Jello from "react-reveal/Jello";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const DEFAULT_STATE = {
  photoIndex: 0,
  isOpen: false,
};

const IMAGES = [
  "/assets/Gallery/_MG_5266.jpg",
  "/assets/Gallery/_MG_5271.jpg",
  "/assets/003.jpg",
  "/assets/Gallery/Parkveien_15B_039.jpg",
  "/assets/Gallery/Parkveien_15B_057.jpg",
  "/assets/Gallery/Vidars_gate_9A_033.jpg",
];

const Gallery = () => {
  const [state, setState] = useState(DEFAULT_STATE);

  return (
    <div id="gallery">
      <section className="text-gray-600 body-font">
        <Jello left duration={1300}>
          <div
            className="container px-5 py-24 mx-auto flex flex-wrap"
            onClick={() =>
              setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
            }
          >
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                Gallery
              </h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    loading="lazy"
                    alt="gallery"
                    className="w-full object-cover h-full object-center block cursor-pointer"
                    src="/assets/Gallery/_MG_5266.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    loading="lazy"
                    alt="gallery"
                    className="w-full object-cover h-full object-center block cursor-pointer"
                    src="/assets/Gallery/_MG_5271.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    loading="lazy"
                    alt="gallery"
                    className="w-full h-full object-cover object-center block cursor-pointer"
                    src="/assets/003.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    loading="lazy"
                    alt="gallery"
                    className="w-full h-full object-cover object-center block cursor-pointer"
                    src="/assets/Gallery/Parkveien_15B_039.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    loading="lazy"
                    alt="gallery"
                    className="w-full object-cover h-full object-center block cursor-pointer"
                    src="/assets/Gallery/Parkveien_15B_057.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    loading="lazy"
                    alt="gallery"
                    className="w-full object-cover h-full object-center block cursor-pointer"
                    src="/assets/Gallery/Vidars_gate_9A_033.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Jello>
        {state.isOpen && (
          <Lightbox
            mainSrc={IMAGES[state.photoIndex]}
            nextSrc={IMAGES[(state.photoIndex + 1) % IMAGES.length]}
            prevSrc={
              IMAGES[(state.photoIndex + IMAGES.length - 1) % IMAGES.length]
            }
            onCloseRequest={() =>
              setState((prev) => ({ ...prev, isOpen: false }))
            }
            onMovePrevRequest={() =>
              setState((prev) => ({
                ...prev,
                photoIndex:
                  (state.photoIndex + IMAGES.length - 1) % IMAGES.length,
              }))
            }
            onMoveNextRequest={() =>
              setState((prev) => ({
                ...prev,
                photoIndex: (state.photoIndex + 1) % IMAGES.length,
              }))
            }
          />
        )}
      </section>
    </div>
  );
};

export default Gallery;
