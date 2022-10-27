import styles from "./google.module.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from "../../redux/authSlice";

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
    <div className=" mt-5 text-center container-fluid">
      <p
        className={`${styles.paragraph} fw-bold text-uppercase mb-3  mt-5 position-relative text-center`}
      >
        or
      </p>

      <button className="mb-4" onClick={handleGoogleSignup}>
        <FcGoogle className="fs-4 me-2" />
        continue with Google
      </button>

      <p className="text-black-50">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </div>
  );
};

export default Google;
