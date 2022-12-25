import React, { Component } from "react";
import Flash from "react-reveal/Flash";
import ServiceBlock from "./ServiceBlock";
import SERVICES_LIST from "./services.json";
import styles from "./styles.module.css";

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
            <div
              className={`${styles.services__container} grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3 p-10`}
            >
              {SERVICES_LIST.map((item) => {
                return (
                  <div className="hover:shadow-xl">
                    <ServiceBlock
                      key={item.id}
                      {...item}
                      // logo={item.logo}
                      // title={item.title}
                    />
                  </div>
                );
              })}
            </div>
          </Flash>
        </section>
      </div>
    );
  }
}

export default Services;
