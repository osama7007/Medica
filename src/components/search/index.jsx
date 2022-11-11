import { Select } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { slugify, slugifyDoctor } from "../../utils/slugify";
const Search = ({ className }) => {
  const [value, setValue] = useState("Search...");
  const [options, setOptions] = useState([]);

  const doctors = useSelector((state) => state.doctors.doctors);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(value);
  }, [value]);
  const setInitialStates = () => {
    let specialities = [];
    doctors.map((doctor) =>
      !specialities.includes(doctor.specialty)
        ? specialities.push(doctor.specialty)
        : null
    );
    setOptions([
      ...specialities.map((speciality) => ({
        value: speciality?.toLowerCase(),
        key: speciality + 1,
        label: speciality,
      })),
      ...doctors.map((doctor, i) => ({
        value: doctor?.name?.toLowerCase(),
        key: doctor.name + i,
        label: doctor.name,
      })),
    ]);
  };

  useEffect(() => {
    if (doctors.length > 0) {
      setInitialStates();
    }
  }, [doctors]);

  const handleSearch = () =>
    value[0] + value[1] === "dr"
      ? navigate(`/doctors/${slugifyDoctor(value)}`)
      : navigate(`/doctors?specialty=${slugify(value)}`);
  return (
    <div className={`w-100 d-flex  ${className}`}>
      <Select
        defaultActiveFirstOption={false}
        className={`${className} mt-2 py-1 mx-1`}
        placeholder="Search..."
        value={value}
        onChange={(value) => setValue(value)}
        showSearch
        showArrow={false}
        // tokenSeparators={[","]}
        options={options}
      />
      {/* <button
        className="btn btn-primary"
        disabled={!options.find((option) => option.value === value)}
        onClick={handleSearch}
      >
        Go
      </button> */}
      <button
        disabled={!options.find((option) => option.value === value)}
        onClick={handleSearch}
        className="border-0 bg-white"
      >
        <BiSearchAlt className="fs-2 text-blue  mx-1 " />
      </button>
    </div>
  );
};
export default Search;
