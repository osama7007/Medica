import Lottie from "react-lottie";
import animationData from "../../assets/images/welcome.json";

const WelcomeLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <Lottie options={defaultOptions} height={400} width={570} />
  )
}

export default WelcomeLottie