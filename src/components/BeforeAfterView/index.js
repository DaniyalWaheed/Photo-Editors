import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import "./index.css";

const BeforeAfterView = ({ beforeImg, afterImg, className = "" }) => {
  const FIRST_IMAGE = {
    imageUrl: beforeImg,
    height: "200px",
  };
  const SECOND_IMAGE = {
    imageUrl: afterImg,
    height: "200px",
  };

  console.log({ FIRST_IMAGE, SECOND_IMAGE, beforeImg, afterImg });

  return (
    <div>
      <ReactBeforeSliderComponent
        firstImage={beforeImg}
        secondImage={afterImg}
        delimiterColor={"yellow"}
      />
    </div>
  );
};

export default BeforeAfterView;
