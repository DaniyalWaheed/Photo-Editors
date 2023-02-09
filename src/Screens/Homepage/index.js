import React, { Component } from "react";
import ContactUs from "../../components/ContactUs";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import Services from "../../components/Services";
import ImageSlider from "../../components/Slider";
import Testimonals from "../../components/Testimonals";
import { sliderImages } from "./api-handler";
import PageWrapper from "../../components/PageWrapper";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { sliderData: null };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const data = await Promise.all([sliderImages()]);
    const sliderData = data[0];

    this.setState({ sliderData });
  };

  render() {
    const { sliderData } = this.state;

    if (!sliderData) {
      return <Loader />;
    }

    return (
      <>
        <PageWrapper>
          <ImageSlider data={sliderData} />
          <Gallery />
          <Services />
          <Testimonals />
          <ContactUs />
        </PageWrapper>
      </>
    );
  }
}

export default Homepage;
