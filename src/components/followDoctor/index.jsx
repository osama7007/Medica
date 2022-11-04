import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { randomNums } from "../../utils/randomNums";
import SkeletonComponent from "../skeleton";
import styles from "./followDoctor.module.css";
const FollowDoctor = () => {
  // state
  const [doctor, setDoctor] = useState([]);
  const Alldoctor = useSelector((state) => state.doctors.doctors);
  console.log(Alldoctor);
  const [res, setRes] = useState([]);
  const [text, setText] = useState([
    "Follow",
    "Follow",
    "Follow",
    "Follow",
    "Follow",
  ]);
  // handleClick
  function handleClick(index) {
    setText((prevState) => {
      const array = [...prevState];
      array[index] = "Following";
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
    <>
      <h4 className="mb-3 ms-2" >You may also like</h4>
      <section
        className={`${styles.conWidth}  shadow ms-auto mx-2 px-3 py-4 rounded-3`}
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
                  key={`button-${id}`}
                  onClick={() => handleClick(id)}
                >
                  {text[id]}
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default FollowDoctor;
