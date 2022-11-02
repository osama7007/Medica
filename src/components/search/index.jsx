import { Select } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDoctors from "../../hooks/useDoctors";
import { slugify } from "../../utils/slugify";
import PrimaryBtn from "../buttons/PrimaryBtn";
const Search = ({ className }) => {
  const [value, setValue] = useState("Search...");
  const [options, setOptions] = useState([]);

  const doctors = useSelector((state) => state.doctors.doctors);
  const navigate = useNavigate();

  const setInitialStates = () => {
    let specialities = [];
    doctors.map((doctor) =>
      !specialities.includes(doctor.specialty)
        ? specialities.push(doctor.specialty)
        : null
    );
    setOptions([
      ...doctors.map((doctor, i) => ({
        value: doctor.name.toLowerCase(),
        key: doctor.name + i,
        label: doctor.name,
      })),
      ...specialities.map((speciality) => ({
        value: speciality.toLowerCase(),
        key: speciality,
        label: speciality,
      })),
    ]);
  };

  useEffect(() => {
    if (doctors.length > 0) {
      setInitialStates();
    }
  }, [doctors]);

  const handleSearch = () => navigate(`/${slugify(value)}`);
  return (
    <div className={`w-50 d-flex py-4  ${className}`}>
      <Select
        defaultActiveFirstOption={false}
        className={`${className} w-100 me-1`}
        placeholder="Search..."
        value={value}
        onChange={(value) => setValue(value)}
        showSearch
        showArrow={false}
        tokenSeparators={[","]}
        options={options}
      />
      <button
        className="btn btn-primary"
        disabled={!options.find((option) => option.value === value)}
        onClick={handleSearch}
      >
        Go
      </button>
    </div>
  );
};
export default Search;
