import React from "react";
import styles from "./styles.module.css";

const SliderDots = (props) => {
  const { active, onClick } = props;

  const className = `${styles.sliderDot} ${
    active ? styles.activeSliderDot : ""
  }`;

  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    />
  );
};

export default SliderDots;
