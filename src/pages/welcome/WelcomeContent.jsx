import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import styles from "./welcome.module.css";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import Slider from "../../components/carousel";
import Category from "../../components/category";
import Services from "../../components/service";
import Faq from "../../components/faq";

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
