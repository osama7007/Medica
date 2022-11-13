import Heading from "../heading";
import { Calendar, Select } from "antd";
import styles from "./appoinment.module.css";
import { Form } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextArea from "antd/lib/input/TextArea";
import PrimaryBtn from "../buttons/PrimaryBtn";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { deSlugify, deSlugifyDoctor } from "../../utils/slugify";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import firebase from "firebase/compat/app";
import useDoctors from "../../hooks/useDoctors";
const DatePacker = () => {
  const location = useLocation();
  const [docName, setDocName] = useState("");
  const [docId, setDocId] = useState("");

  useDoctors();
  const doctors = useSelector((state) => state.doctors.doctors);

  const userId = useSelector((state) => state.auth.id);
  useEffect(() => {
    if (doctors.length > 0) {
      console.log(deSlugifyDoctor(location.search.split("=")[1]));
      setDocName(deSlugifyDoctor(location.search.split("=")[1]));
      const doctor = doctors.find((doc) => doc.name === docName);
      setDocId(doctor?.id);
    }
  }, [doctors]);

  const onPanelChange = (value) => {
    console.log(value.format("YYYY-MM-DD"));
  };
  const Hours = [
    "1:15 Pm",
    "2:20 Pm",
    "3:30 Pm",
    "4:00 Pm",
    "4:30 Pm",
    "5:00 Pm",
    "5:30 Pm",
    "6:00 Pm",
    "6:30 Pm",
    "7:00 Pm",
    "7:30 Pm",
    "8:00 Pm",
  ];

  const onFinish = (values, errors) => {
    const currentDate = new Date();
    const date = new Date(values.calender._d);
    if (date < currentDate) {
      toast.error("Please select a valid date");
      return;
    }

    console.log("Success:", values);
    toast.success("Appointment Added ");
    console.log(values, docId, userId);
    console.log(values.calender);

    const colRef = db
      .collection("users")
      .doc(userId)
      .update({
        appointments: firebase.firestore.FieldValue.arrayUnion({
          doctorId: docId,
          date: values.calender._d.toLocaleDateString("en-GB"),
          time: values.hour,
        }),
      });
    console.log(colRef);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <section className="container  py-5">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="row">
            <div className="col-lg-12 col-md-12 mb-5">
              <Heading text="Select Date" />

              <Form.Item name="calender" rules={[{ required: true }]}>
                {/* <div className="site-calendar-demo-card mt-4"> */}
                <Calendar
                  fullscreen={false}
                  onChange={onPanelChange}
                  onPanelChange={onPanelChange}
                  name="calender"
                />
                {/* </div>{" "} */}
              </Form.Item>
            </div>

            <div className="col-lg-12 col-md-12  mb-5 ">
              <div className="hour mb-5">
                <Heading text="Select Hour" />
                <Form.Item name="hour" rules={[{ required: true }]}>
                  <Select
                    showSearch
                    style={{ width: 425 }}
                    name="hour"
                    className="mt-4"
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[
                      {
                        value: "1:15 Pm",
                        label: "1:15 Pm",
                      },
                      {
                        value: "2:20 Pm",
                        label: "2:20 Pm",
                      },
                      {
                        value: "3:30 Pm",
                        label: "3:30 Pm",
                      },
                      {
                        value: "4:00 Pm",
                        label: "4:00 Pm",
                      },
                      {
                        value: "5:00 Pm",
                        label: "5:00 Pm",
                      },
                      {
                        value: "5:30 Pm",
                        label: "5:30 Pm",
                      },
                      {
                        value: "6:00 Pm",
                        label: "6:00 Pm",
                      },
                      {
                        value: "7:00 Pm",
                        label: "7:00 Pm",
                      },
                    ]}
                  />
                </Form.Item>
              </div>

              <div className="problem">
                <Heading text="Your Problem" />
                <Form.Item name="problem" rules={[{ required: true }]}>
                  <div className="mt-4 m-auto">
                    <TextArea
                      name="problem"
                      rows={7}
                      placeholder="maxLength is 400"
                      maxLength={400}
                    />
                  </div>
                </Form.Item>
              </div>
            </div>
          </div>
          <Form.Item wrapperCol={{ offset: 10, span: 20 }}>
            <PrimaryBtn title="Booking" />
          </Form.Item>
        </Form>
      </section>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default DatePacker;