import styles from "./google.module.css";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from "../../redux/authSlice";
import { Link } from "react-router-dom";

const Google = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.authSlice.userEmail);
  const userName = useSelector((state) => state.authSlice.userName);

  const handleGoogleSignup = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
      dispatch(
        setActiveUser({
          userName: res.user.displayName,
          userEmail: res.user.email,
        })
      );
    });
  };

  return (
    <div className=" text-center container-fluid">
      <p
        className={`${styles.paragraph} fw-bold text-uppercase mb-3  mt-5 position-relative text-center`}
      >
        or
      </p>

      <button
        className={`${styles.btn} mb-4 border-0 secondaryBtn
         text-uppercase  fw-bold
          shadow my-4 me-4
          rounded-pill
          px-4 py-2`}
        onClick={handleGoogleSignup}
      >
        <FcGoogle className="fs-4 me-2" />
        continue with Google
      </button>

      <p className="text-black-50">
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default Google;
