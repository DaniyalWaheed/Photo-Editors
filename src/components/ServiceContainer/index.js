import React from "react";
import ServiceInfo from "../ServiceInfo";
import SERVICES from "./services.json";

const ServiceContainer = () => {
  return (
    <div className="p-10">
      <div className="max-w-5xl m-auto py-10">
        <div className="w-full text-2xl font-medium text-center py-5">
          Real Estate Photo Editing Services
        </div>
        <div className="text-center">
          Green Hills is now the number one real estate photo editing service
          with thousands of satisfied customers worldwide. We have been edited
          real estate photos for 17 years having assisted people in buying,
          selling or renting buildings through professionally edited photos. Let
          us help you create a dream home with the help of real estate
          retouching.
        </div>
        <div className="w-full text-2xl font-medium text-center py-5">
          Real Estate Photo Editing Services We Provide:
        </div>
        <div className="w-full grid sm:grid-rows-1 md:grid-cols-2 gap-10">
          {SERVICES.map((item) => (
            <ServiceInfo {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
