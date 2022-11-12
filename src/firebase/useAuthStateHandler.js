import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login, logout, setLoginData } from "../redux/authSlice";
const useAuthStateHandler = () => {
  
  const dispatch = useDispatch();
  const [uid, setUid] = useState("");
  const [userData, setUserData] = useState({});
  const unSub = onAuthStateChanged(auth, (user) => {
    setUid(user?.uid || "");
  });
  unSub();

  useEffect(() => {
    if (uid !== "") {
      const userRef = doc(db, "users", uid);
      onSnapshot(userRef, (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          const { firstName, lastName, userName, email, gender, category } =
            data;
          dispatch(
            setLoginData({
              id: uid,
              firstName,
              lastName,
              userName,
              email,
              gender,
              category,
              weight: data?.weight || "",
              height: data?.height || "",
              birthDay: data?.birthDay || "",
              blood: data?.blood || "",
              geneticDiseases: data?.geneticDiseases || "",
              medications: data?.medications || "",
              surgeryBefore: data?.surgeryBefore || "",
              profileImg: data?.profileImg || "",
            })
          );
          localStorage.setItem(
            "auth",
            JSON.stringify({ isAuth: true, id: uid, ...data })
          );
        }
      });
    }
    // else {
    //   dispatch(logout());
    //   localStorage.setItem("auth", JSON.stringify({ isAuth: false }));
    // }
  }, [uid]);
};

export default useAuthStateHandler;
