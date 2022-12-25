import React from "react";
import styles from "./styles.module.css";

const ServiceBlock = ({ logo, title, description }) => {
  return (
    <div className="w-auto p-7 cursor-pointer">
      <div className="bg-gray-103 p-6 rounded-lg">
        <img
          loading="lazy"
          className="h-52 rounded w-full object-cover object-center mb-6"
          src={logo}
          alt="content"
        />
        <h0 className="tracking-widest text-indigo-500 font-medium title-font text-2xl">
          {title}
        </h0>
        <p
          title={description}
          className={`${styles.descriptionRow} leading-relaxed text-base`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceBlock;
