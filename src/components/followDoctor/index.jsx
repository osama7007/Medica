import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { randomNums } from "../../utils/randomNums";
import SkeletonComponent from "../skeleton";
import styles from "./followDoctor.module.css";
const FollowDoctor = () => {
  // state
  const [doctor, setDoctor] = useState([]);
  const Alldoctor = useSelector((state) => state.doctors.doctors);
  const [res, setRes] = useState([]);
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState([
    "Follow",
    "Follow",
    "Follow",
    "Follow",
    "Follow",
  ]);;
  // handleClick
  function handleFollowClick(index) {
    setButtonText((prevState) => {
      const array = [...prevState];
      array[index] = "Following";
      // setDisable(true)
      return array;
    });
  }


  
  useEffect(() => {
    if (res.length > 0 && Alldoctor.length > 0)
      setDoctor(Alldoctor.filter((doc, i) => res.includes(i)));
  }, [Alldoctor, res]);

  useEffect(() => {
    setRes(randomNums(40, 5));
  }, []);
  return (
    <section className={styles.following}>
      <h4 className="mb-3 ms-2" >You may also like</h4>
      <section
        className={`${styles.conWidth}  shadow  px-3 py-4 rounded-3`}
      >
        {doctor.length === 0 ? <SkeletonComponent /> : ""}
        {doctor.map((doc, id) => {
       
          return (
            <div className="row mb-2 " key={doc.id}>
              <div className=" col-2 ">
                <img
                  src={doc.pImage}
                  className={`${styles.img} rounded-circle`}
                  alt="img of doctor"
                />
              </div>
              <div className="col-5 offset-1">
                <p className="fw-bold">{doc.name}</p>
                <p>{doc.specialty}</p>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-primary"
                  disabled={disable}
                  key={`button-${id}`}
                  onClick={() => { handleFollowClick(id)}}
                >
                  
                  {buttonText[id]}
                </button>
                {/* <button
                  onClick={() => toggleText(id)}
                  key={`button-${id}`}
                                  >{textState[id]}</button> */}

              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
export default FollowDoctor;
