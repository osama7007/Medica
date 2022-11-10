
import { Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card";
import Heading from "../../components/heading";
import { Skeleton } from "antd";
import { motion } from 'framer-motion'


function AllDoctors() {
  const navigate = useNavigate();
  const [topDoctor, setTopDoctor] = useState([]);

  const [val, setVal] = useState("All");

  useEffect(() => {
    getAllDoctors();
  }, [val]);


  const handleChange = (value) => {
    setVal(value);
  };

  const getAllDoctors = () => {
    fetch(`https://doctor4.herokuapp.com/${val}`)
      .then((res) => res.json())
      .then((json) => setTopDoctor(json));
  };

  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
  };

  return (
    <section className="container">
      <div className="d-flex align-items-center justify-content-between m-5">
        <Heading text={val} />
        <Select
          className="text-start"
          defaultValue="All Doctors"
          style={{
            width: 300,
          }}
          onChange={handleChange}
          options={[
            {
              value: "All",
              label: "All Doctors",
            },
            {
              value: "Dermatology",
              label: "Dermatology",
            },
            {
              value: "Pulmonologist",
              label: "Pulmonologist",
            },
            {
              value: "Otolaryngology",
              label: "Otolaryngology",
            },
            {
              value: "Pediatrics",
              label: "Pediatrics",
            },
            {
              value: "InternalMedicine",
              label: "Internal Medicine",
            },
            {
              value: "Psychiatry",
              label: "Psychiatry",
            },

            {
              value: "PlasticSurgery",
              label: "Plastic Surgery",
            },
          ]}
        />
      </div>
      <div className=" mx-auto row ">
        {!topDoctor.length && <Skeleton active />}

        {topDoctor.length &&
          topDoctor.map((doctor) => {
            return (
              <motion.div {...animations}  layout className="col-md-6" key={doctor.id}>
                <Card
                  img={doctor.pImage}
                  title={doctor.name}
                  rate={doctor.rate}
                  position={doctor.position}
                  experince={doctor.experience}
                  specialty={doctor.specialty}
                />
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}

export default AllDoctors;
