import register from "../../assets/images/register.jpg";
import styles from "./register.module.css";
import RegisterForm from "./Form";
import Google from "./Google";
import Thanks from "../../components/thankyou";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <section className=" row  container-fluid vh-100 align-items-center ">
      {isSubmitted ? (
        <Thanks className={styles.thanks} />
      ) : (
        <>
          <div className={`${styles.imgWrapper} col`}>
            <img
              src={register}
              loading="lazy"
              alt="register"
              className="w-100"
            />
          </div>
          <div className={`${styles.form} col shadow-sm ms-3 rounded-2 `}>
            <RegisterForm setIsSubmitted={setIsSubmitted} />
            <div className=" text-center container-fluid">
              <p className="text-black-50 mt-4">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SignUp;
