import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import styles from "./welcome.module.css";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import Slider from "../../components/carousel";
import Category from "../../components/category";
import Services from "../../components/service";
import Faq from '../../components/faq'

const WelcomeContent = () => {
  const navigate = useNavigate();

  const signInNavigate = () => {
    navigate("/login");
  };
  const signUpNavigate = () => {
    navigate("/signup");
  };

  return (
    <section>
      <nav
        className={`${styles.navbar} d-flex align-items-center justify-content-between container-fluid py-3 px-5 shadow-sm`}
      >
        <img src={logo} alt="logo" />
        <div>
          <PrimaryBtn title="Log in" action={signInNavigate} />
          <button
            className="btn fw-bold text-uppercase"
            onClick={signUpNavigate}
          >
            Sign up
          </button>
        </div>
      </nav>
      <Slider />
      <div className="container">
        <Services />
        <Category />
        <Faq />
      </div>
    </section>
  );
};

export default WelcomeContent;
