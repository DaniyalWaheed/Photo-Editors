import React from "react";
import BeforeAfterView from "../BeforeAfterView";

const ServiceInfo = ({ title, subtitle, images }) => (
  <div className="py-5">
    <div className="text-xl font-semibold">{title}</div>
    <div className="text-lg font-normal">{subtitle}</div>
    <div className="pt-5">
      <BeforeAfterView beforeImg={images[0]} afterImg={images[1]} />
    </div>
  </div>
);

export default ServiceInfo;
