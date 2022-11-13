import { Select } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import Card from "../../components/card";
import Heading from "../../components/heading";
import { deSlugify, slugify, slugifyDoctor } from "../../utils/slugify";
import { Skeleton } from "antd";
import { motion } from "framer-motion";

const DoctorsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [doctors, setDoctors] = useState([]);
  const [val, setVal] = useState("All Doctors");
  const allDoctors = useSelector((state) => state.doctors.doctors);
  const specialities = [
    "All Doctors",
    ...new Set(allDoctors.map((doctor) => doctor.specialty)),
  ];

  useEffect(() => {
    if (location.search === "") {
      setDoctors(allDoctors);
    } else {
      console.log(deSlugify(location.search.split("=")[1]));
      setDoctors(
        allDoctors.filter(
          (doctor) =>
            doctor.specialty === deSlugify(location.search.split("=")[1])
        )
      );
    }
  }, [location.search, allDoctors]);

  const getSpecialty = (value) => {
    if (value !== "All Doctors") {
      navigate(`/doctors?specialty=${slugify(value)}`);
    } else {
      navigate(`/doctors`);
    }
  };

  useEffect(() => {
    getSpecialty(val);
  }, [val]);

  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
  };
  return (
    <section className="container">
      <div className="d-flex flex-column 
      flex-md-row align-items-center
       justify-content-between m-5">
        <Heading text={val} />
        <Select
          className="text-start"
          defaultValue="All Doctors"
          style={{
            width: 300,
          }}
          onChange={(value) => setVal(value)}
          options={[
            {
              value: "All Doctors",
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
              value: "Internal Medicine",
              label: "Internal Medicine",
            },
            {
              value: "Psychiatry",
              label: "Psychiatry",
            },

            {
              value: "Plastic Surgery",
              label: "Plastic Surgery",
            },
          ]}
        />
      </div>
      <div className=" row m-auto">
        {doctors.length ? (
          doctors.map((doctor) => {
            return (

              <motion.div {...animations}  layout className="col-xl-6 mb-3 col-md-12" key={doctor.id}>
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
          })
        ) : (
          <Skeleton active />
        )}
      </div>
    </section>
  );
};

export default DoctorsPage;
