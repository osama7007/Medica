import { DatePicker, Select, Space, TimePicker } from "antd";
import React, { useState } from "react";
import BlueBtn from "../buttons/blueBtn";

const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};
const Appointment = () => {
  const [type, setType] = useState("time");
  return (
    <Space className="mb-3 d-block  ">
      <Select className="w-75 mb-3 " value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
      </Select>
      
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
      <br />
      <BlueBtn title="Done" />
    </Space>
  );
};

export default Appointment;
