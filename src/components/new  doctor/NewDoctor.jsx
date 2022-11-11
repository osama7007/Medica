import styles from "./NewDoctor.module.css";

import { Form, Input, Radio } from "antd";
import React, { useState } from "react";
import strip from "../../assets/images/strip-tablet.gif";
import capsula from "../../assets/images/capsule.gif";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { UserOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "react-lottie";
import underVerify from "../../assets/images/80162-document-check-true.json";
import axios from "axios";
import { motion } from "framer-motion";
import Heading from "../heading";

function NewDoctor() {
  const [save, setSaved] = useState("Save");
  const [componentSize, setComponentSize] = useState("default");

  function onFormLayoutChange({ size }) {
    setComponentSize(size);
  }
  const { TextArea } = Input;

  const about = {};
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: underVerify,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { delay: 0.5 },
    duration: 5,
  };

  let onFinish = (values) => {
    about.Works_at = values.Works_at || "";
    about.specialty = values.specialty || "";
    about.phone = values.phone || "";
    about.national_id = values.national_id || "";
    about.graduation = values.graduation || "";
    about.Address = values.Address || "";
    about.Biography = values.Biography || "";
    setSaved("Saved");
    if (save === "Save") toast.success("Saved successfully");
    //postData(`https://doctor4.herokuapp.com/all`);
  };

  let postData = (url) => {
    axios.post(url, { about }).then((res) => console.log(res));
  };

  return (
    <>
      {save !== "Saved" && (
        <div
          className={` d-flex justify-content-center align-items-center ${styles.contanier}`}
        >
          <div className={`w-25 ${styles.img}`}>
            <img className="w-100" src={strip} alt=""></img>
          </div>
          <Form
            onFinish={onFinish}
            className={`mb-5 ms-5 mt-4 p-3 w-100 fw-bold shadow rounded-2 ${styles.formBody}`}
            labelCol={{
              span: 4,
            }}
            method="PUT"
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <h2 className="text-center fw-bold mt-4 mb-5 text-decoration-underline text-blue text-capitalize ">
              upload data
            </h2>
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Works at" name="Works_at">
              <Input placeholder="Alkasr Eleiny" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item label="specialty" name="specialty">
              <Input placeholder="dermatology" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input placeholder="012345678912" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item label="National ID" name="national_id">
              <Input
                type="file"
                accept=".pdf"
                placeholder="please upload your national id in .pdf"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item label="Graduation" name="graduation">
              <Input placeholder="grade" prefix={<UserOutlined />} />
              <Input placeholder="year" prefix={<UserOutlined />} />
              <Input placeholder="university" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item label="Address" name="Address">
              <Input placeholder="street" prefix={<UserOutlined />} />
              <Input placeholder="city" prefix={<UserOutlined />} />
              <Input placeholder="government" prefix={<UserOutlined />} />
              <Input placeholder="country" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item label="Biography" name="Biography">
              <TextArea
                rows={4}
                placeholder="maxLength is 250"
                maxLength={250}
              />
            </Form.Item>
            <Form.Item className="ms-5 d-flex align-items-center justify-content-center">
              <PrimaryBtn title={save} disabled={save} />
            </Form.Item>
          </Form>

          <div className={`w-25 ${styles.img} position-relative ms-3`}>
            <img
              className="w-100 position-absolute bottom-0 start-50 translate-middle"
              src={capsula}
              alt=""
            ></img>
          </div>
        </div>
      )}
      {save === "Saved" && (
        <motion.div
          {...animations}
          className="d-flex flex-column align-items-center mt-5"
        >
          <div className="heading">
			<Heading  text='Under verification' />
          </div>
          <div className={`${styles.overlay}`}>
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
        </motion.div>
      )}

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
}

export default NewDoctor;
