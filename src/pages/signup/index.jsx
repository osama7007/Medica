import register from "../../assets/images/register.jpg";
import styles from "./register.module.css";
import RegisterForm from "./Form";
import Google from "./Google";
import Thanks from "../../components/thankyou";
import { useSelector } from "react-redux";
import { useState } from "react";

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
            <Google />
          </div>
        </>
      )}
    </section>
  );
};

export default SignUp;
