import Lottie from "react-lottie";
import animationData from "../../assets/images/loader.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="d-flex align-items-center vh-100">
      <Lottie options={defaultOptions} height={200} width={200} />;
    </div>
  );
};

export default Loader;
