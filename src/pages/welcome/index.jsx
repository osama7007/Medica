import WelcomeLottie from "../../components/welcomeLotie";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import styles from "./welcome.module.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const signInNavigate = () => {
    navigate("/login");
  };
  const signUpNavigate = () => {
    navigate("/signup");
  };
  return (
    <div className={`${styles.all} container pt-4`}>
      <div className={styles.img}>
        <WelcomeLottie />
      </div>
      <div className={`${styles.content} text-center`}>
        <h1 className={`${styles.text} fw-bold text-uppercase mb-4`}>
          Welcome to Medica!👋
        </h1>
        {/* <h5>
          The best online doctor appointment & consultation website of the
          century for your health and medical needs!
        </h5> */}
        <div className={styles.Btn}>
          <PrimaryBtn title={"LogIn"} action={signInNavigate} />
          <SecondaryBtn title={"SignUp"} action={signUpNavigate} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
