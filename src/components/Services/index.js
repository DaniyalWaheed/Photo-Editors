import React, { Component } from "react";
import Flash from "react-reveal/Flash";

const ServiceBlock = ({ logo, title, description }) => {
  return (
    // <div>
    <div className="w-auto p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={logo}
          alt="content"
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          SUBTITLE
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.
        </p>
      </div>
    </div>
    // </div>
  );
};

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section className="text-gray-600 body-font relative" id="services">
          <Flash left duration={1300}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
              Our Services
            </h1>
            <div class="grid grid-rows-3 grid-flow-col lg:grid-rows-3 gap-4 p-6 justify-center">
              <ServiceBlock
                logo="/assets/2D-FLOOR-PLAN.jpeg"
                title={"2D Floow Plan"}
              />
              <ServiceBlock
                logo="/assets/Object-Removal-Or-Decluttering.jpg"
                title="Object Removal Or Decluttering"
              />
              <ServiceBlock
                logo="/assets/HDR-Enhancement-and-Blending.jpg"
                title={"HDR Enhancement and Blending"}
              />
              <ServiceBlock
                logo="/assets/Day-To-Dusk-Image.jpg"
                title="Day To Dusk Image"
              />
              <ServiceBlock
                logo="/assets/3D-FLOOR-PLAN.jpeg"
                title="3D FLOOR PLAN"
              />
              <ServiceBlock
                logo="/assets/Virtual-Furnishing.jpg"
                title={"Virtual Furnishing"}
              />
              <ServiceBlock logo="/assets/2D-FLOOR-PLAN.jpeg" />
              <ServiceBlock logo="/assets/2D-FLOOR-PLAN.jpeg" />
              <ServiceBlock logo="/assets/2D-FLOOR-PLAN.jpeg" />
            </div>
          </Flash>
        </section>
      </div>
    );
  }
}

export default Services;
