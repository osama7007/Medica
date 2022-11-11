import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { randomNums } from "../../utils/randomNums";
import { slugifyDoctor } from "../../utils/slugify";
import Ads from "../Ads";
import SkeletonComponent from "../skeleton";
import styles from "./followDoctor.module.css";
const FollowDoctor = () => {
  // state
  const [doctor, setDoctor] = useState([]);
  const Alldoctor = useSelector((state) => state.doctors.doctors);
  const [res, setRes] = useState([]);
  const [buttonText, setButtonText] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  // handleClick
  function handleFollowClick(index) {
    setButtonText((prevState) => {
      const array = [...prevState];
      array[index] = !array[index];
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
      <h4 className="mb-3 ms-2">You may also like</h4>
      <section className={`${styles.conWidth}  shadow  px-3 py-4 rounded-3`}>
        {doctor.length === 0 ? <SkeletonComponent /> : ""}
        {doctor.map((doc, id) => {
          return (
            <div className="row mb-2 " key={doc.id}>
              <Link
                to={`/doctors/${slugifyDoctor(doc.name)}`}
                className=" col-2 "
              >
                <img
                  src={doc.pImage}
                  className={`${styles.img} rounded-circle`}
                  alt="img of doctor"
                />
              </Link>
              <Link
                to={`/doctors/${slugifyDoctor(doc.name)}`}
                className="col-5 offset-1 text-decoration-none text-dark  d-flex flex-column justify-content-center  align-items-center"
              >
                <p className="fw-bold mb-1">{doc.name}</p>
                <p>{doc.specialty}</p>
              </Link>
              <div className="col-2">
                <button
                  className="btn btn-primary"
                  key={`button-${id}`}
                  onClick={() => {
                    handleFollowClick(id);
                  }}
                >
                  {buttonText[id] ? "following" : "follow"}
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <Ads />
    </section>
  );
};
export default FollowDoctor;
