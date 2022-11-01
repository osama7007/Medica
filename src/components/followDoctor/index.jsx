import { useEffect, useState } from "react";
import { randomNums } from "../../utils/randomNums";
import styles from "./followDoctor.module.css";
const FollowDoctor = () => {
  // state
  const [doctor, setDoctor] = useState([]);
  const [Alldoctor, setAllDoctor] = useState([]);
  const [res, setRes] = useState([]);
  const [buttonText, setButtonText] = useState("follow");
  // handleClick
  function handleClick(id) {
    setButtonText("following");

    console.log(id);
  }

  useEffect(() => {
    if (res.length > 0 && Alldoctor.length > 0)
      setDoctor(Alldoctor.filter((doc, i) => res.includes(i)));
    console.log(doctor);
  }, [Alldoctor, res]);

  useEffect(() => {
    setRes(randomNums(40, 4));
    getDoctor();
  }, []);
  const getDoctor = () => {
    fetch("https://doctor4.herokuapp.com/all")
      .then((res) => res.json())
      .then((json) => setAllDoctor(json));
  };
  return (
    <>
      <section
        className={`${styles.conWidth}  shadow ms-auto mx-2 my-4 px-3 py-4 rounded-3`}
      >
        {doctor.map((doc, id) => {
          return (
            <div className="row mb-4 ">
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
              <div className="col-2 ">
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(doc.id)}
                >
                  {buttonText}
                  {/* {doc.id !== id ? (
                    //  {buttonText}
                  "follow"

                 ):("following")}  */}
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
