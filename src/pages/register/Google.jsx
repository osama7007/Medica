import styles from "./google.module.css";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";

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
        className={`${styles.paragraph} fw-bold text-uppercase   my-2 position-relative text-center`}
      >
        or
      </p>
      <PrimaryBtn
        title={[ <FcGoogle className="fs-4 me-2" />,"continue with Google"]}
        action={handleGoogleSignup}
      />

      <p className="text-black-50">
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default Google;
