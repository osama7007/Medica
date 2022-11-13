import WelcomeLottie from "../../components/welcomeLotie";
import styles from "./welcome.module.css";
import Loader from "../../components/loader";
import { useState } from "react";
import WelcomeContent from "./WelcomeContent";
import useAuthStateHandler from "../../firebase/useAuthStateHandler";

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  // const [transform, setTransform] = useState(false);
  // const transformClass = transform ? styles.transform : "";
  useAuthStateHandler();
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  // setTimeout(() => {
  //   setTransform(true);
  // }, 6000);

  return (
    <>
      {!loading && <WelcomeContent />}
      {loading && <Loader />}

      {/* {loading && (
        <div className={`container pt-4`}>
          <div className={styles.img}>
            <WelcomeLottie />
          </div>
          <div className={`${styles.content} text-center`}>
            <h1 className={`${styles.text} fw-bold text-uppercase mb-4`}>
              Welcome to Medica!👋
            </h1>
            <h5>
              The best online doctor appointment & consultion website of the
              century for your health and medical needs!
            </h5>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Welcome;
