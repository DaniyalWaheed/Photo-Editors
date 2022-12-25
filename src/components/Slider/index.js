import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import styles from "./styles.module.css";
import SliderDots from "../SliderDots";
import Img from "../Img";
import Slide from "react-reveal/Slide";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const ImageSlider = (props) => {
  console.log("props", props.data);
  const children = images(props.data);

  return (
    <div id="home">
      <section>
        <Slide effect="fadeInUp" effectOut="fadeOutLeft" top duration="1300">
          <Carousel
            partialVisbile={false}
            minimumTouchDrag={80}
            additionalTransfrom={0}
            arrows={true}
            centerMode={false}
            autoPlay={true}
            autoPlaySpeed={4000}
            draggable={true}
            swipeable={true}
            focusOnSelect={false}
            infinite
            keyBoardControl
            renderButtonGroupOutside={false}
            containerClass="container-with-dots"
            itemClass={styles.offerImgContainer}
            responsive={responsive}
            customDot={<SliderDots />}
            dotListClass={styles.sliderDots}
            showDots
          >
            {children}
          </Carousel>
        </Slide>
      </section>
    </div>
  );
};

const images = (data) => {
  return data.map((item) => (
    <Img
      className={styles.offerImg}
      style={{ height: "400px" }}
      key={item.src}
      alt="main-offer"
      src={item.src}
      loading="lazy"
    />
  ));
};

export default ImageSlider;
