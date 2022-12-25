import React, { Component } from "react";
import Slider from "react-slick";
import LightSpeed from "react-reveal/LightSpeed";
import TestimonalsBlock from "./TestimonalsBlock";

class Testimonals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  settings = {
    dots: true,
    // infinite: true,
    speed: 800,
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    // centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          // centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  render() {
    return (
      <section id="testimonals">
        <LightSpeed>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center pb-12">
            Testimonals
          </h1>
          <div className="p-12">
            <Slider {...this.settings}>
              <div>
                <TestimonalsBlock />
              </div>
              <div>
                <TestimonalsBlock />
              </div>
              <div>
                <TestimonalsBlock />
              </div>
              <div>
                <TestimonalsBlock />
              </div>
              <div>
                <TestimonalsBlock />
              </div>
              <div>
                <TestimonalsBlock />
              </div>
            </Slider>
          </div>
        </LightSpeed>
      </section>
    );
  }
}

export default Testimonals;
