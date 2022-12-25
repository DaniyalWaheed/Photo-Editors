import React from "react";
import placeholder from "./placeholder.svg";

class Img extends React.Component {
  state = {
    loaded: false,
  };

  render() {
    const { loaded } = this.state;

    const style = !loaded ? { display: "none" } : { ...this.props.style };

    return (
      <>
        <img
          alt={this.props.alt}
          {...this.props}
          style={style}
          loading="lazy"
          onLoad={() => this.setState({ loaded: true })}
        />
        {loaded ? null : (
          <img
            alt={this.props.alt}
            {...this.props}
            loading="lazy"
            src={placeholder}
          />
        )}
      </>
    );
  }
}

export default Img;
