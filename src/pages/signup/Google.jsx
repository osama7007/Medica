import { useNavigate } from "react-router-dom";
import styles from "./google.module.css";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";

const Google = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleGoogleSignup = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
      // dispatch(setActiveUser());
      navigate("/home");
    });
  };

  return (
    <div className=" text-center container-fluid">
      <p
        className={`${styles.paragraph} fw-bold text-uppercase mb-4 position-relative text-center`}
      >
        or
      </p>
      <SecondaryBtn
        title={[
          <FcGoogle key={Math.random()} className="fs-4 me-2" />,
          "continue with Google",
        ]}
        action={handleGoogleSignup}
      />

      <p className="text-black-50 mt-4">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default Google;
