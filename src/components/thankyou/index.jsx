import Lottie from "react-lottie";
import animationData from "../../assets/images/register.json";

const Thanks = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={600} width={700} />;
};

export default Thanks;
