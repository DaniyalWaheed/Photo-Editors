import React, { Component } from "react";
import Flash from "react-reveal/Flash";

const ServiceBlock = () => {
  return (
    // <div>
    <div class="w-auto p-4">
      <div class="bg-gray-100 p-6 rounded-lg">
        <img
          class="h-40 rounded w-full object-cover object-center mb-6"
          src="/assets/03.jpg"
          alt="content"
        />
        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
          SUBTITLE
        </h3>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
          Colosseum Roma
        </h2>
        <p class="leading-relaxed text-base">
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
              <ServiceBlock />
              <ServiceBlock />
              <ServiceBlock />
              <ServiceBlock />
              <ServiceBlock />
              <ServiceBlock />
              <ServiceBlock />
              <ServiceBlock />
              <ServiceBlock />
            </div>
          </Flash>
        </section>
      </div>
    );
  }
}

export default Services;
