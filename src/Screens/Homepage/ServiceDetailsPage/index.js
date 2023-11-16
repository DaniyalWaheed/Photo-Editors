import React, { useEffect } from "react";
import PageWrapper from "../../../components/PageWrapper";
import ImageSlider from "../../../components/Slider";
import ServiceContainer from "../../../components/ServiceContainer";
import { sliderImages } from "../api-handler";

const ServiceDetailsPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <PageWrapper isHomePage={false}>
      <ImageSlider data={sliderImages()} />
      <ServiceContainer />
    </PageWrapper>
  );
};

export default ServiceDetailsPage;
