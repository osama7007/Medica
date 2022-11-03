import Lottie from "react-lottie";
import animationData from "../../assets/images/question.json";

const FaqLottie = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={50} width={50} />;
};

export default FaqLottie;
