import React, { Component } from "react";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Services from "../../components/Services";
import ImageSlider from "../../components/Slider";
import Testimonals from "../../components/Testimonals";
import { sliderImages } from "./api-handler";

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

    console.log("DATA:", sliderData);

    this.setState({ sliderData });
  };

  render() {
    const { sliderData } = this.state;

    if (!sliderData) {
      return <Loader />;
    }

    return (
      <>
        <Header />
        <ImageSlider data={sliderData} />
        <Gallery />
        <Services />
        <Testimonals />
        <ContactUs />
        <Footer />
      </>
    );
  }
}

export default Homepage;
