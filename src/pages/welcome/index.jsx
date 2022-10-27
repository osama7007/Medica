import Lottie from "react-lottie";
import animationData from "../../assets/images/welcome.json";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import styles from "./welcome.module.css";
const Welcome = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className={`${styles.all} container`}>
      <div className={styles.img} >
          <Lottie  options={defaultOptions} height={400} width={570} />
        </div>
        <div className={`${styles.content} text-center`}>
          <h1 className={`${styles.text} fw-bold text-uppercase`}>
            Welcome to
            
            Medica👋!
          </h1>
          <div className={styles.Btn}>
          <PrimaryBtn title={"SignUp"}/>
          <SecondaryBtn title={"SignIn"}  />
          </div>
        </div>
        </div>
    </>
  );
};

export default Welcome;
