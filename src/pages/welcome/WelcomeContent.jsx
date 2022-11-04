import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import styles from "./welcome.module.css";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import Slider from "../../components/carousel";
import Category from "../../components/category";
import Services from "../../components/service";
import Faq from "../../components/faq";
import { Link } from "react-router-dom";

const WelcomeContent = () => {
  const navigate = useNavigate();

  const signInNavigate = () => {
    navigate("/login");
  };

  return (
    <section>
      <nav
        className={`${styles.navbar} d-flex align-items-center justify-content-between px-5 py-3`}
      >
        <img src={logo} alt="logo" />
        <div>
          <PrimaryBtn title="log in" action={signInNavigate} />
          <Link
            className="text-decoration-none fw-bold text-uppercase fs-5"
            to="/signup"
          >
            Sign Up
          </Link>
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
