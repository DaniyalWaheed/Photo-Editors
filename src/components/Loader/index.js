import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactLoder from "react-loader-spinner";

const Loader = (props) => {
  const data = {
    color: props.color || "#00BFFF",
    height: props.height || 80,
    width: props.width || 80,
    type: props.type || "TailSpin",
  };

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ReactLoder {...data} />
    </div>
  );
};

export default Loader;
