import { Form, Input, Radio } from "antd";
import React, { useState } from "react";
import strip from "../../assets/images/strip-tablet.gif";
import capsula from "../../assets/images/capsule.gif";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { UserOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from '../../pages/patient/patient.module.css'


const DoctorForm = () => {
  const [save, setSaved] = useState("Save");
  const [componentSize, setComponentSize] = useState("default");
  const params = useParams();

  function onFormLayoutChange({ size }) {
    setComponentSize(size);
  }
  const { TextArea } = Input;

  const about = {};

  let onFinish = (values) => {
    about.Biography = values.Biography || "";
    about.Email = values.Email || "";
    about.Facebook = values.Facebook || "";
    about.LinkedIn = values.LinkedIn || "";
    about.Twitter = values.Twitter || "";
    setSaved("Saved");
    if (save === "Save") toast.success("Saved successfully");
    postData(`https://doctor4.herokuapp.com/all/${params.id}`);
  };

  let postData = (url) => {
    axios.patch(url, { about }).then((res) => console.log(res));
  };

  return (
    <div className={` d-flex justify-content-center align-items-center ${styles.contanier}`}>
      <div className={`w-25 ${styles.img}`}>
        <img className="w-100" src={strip} alt=""></img>
      </div>
      <Form
        onFinish={onFinish}
        className= {`mb-5 ms-5 mt-4 p-3 w-100 fw-bold shadow rounded-2 ${styles.formBody}`}
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
        <h2 className="text-center fw-bold mt-4 mb-5 text-decoration-underline text-primary ">
          Manage Profile
        </h2>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Works at" name="Works at">
          <Input placeholder="Alkasr Eleiny" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item label="Email" name="Email">
          <Input
            placeholder="Doctor_Samy@clinc.com"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item label="Facebook" name="Facebook">
          <Input placeholder="Facebooke.com" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item label="Twitter" name="Twitter">
          <Input placeholder="Twitter.com" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item label="LinkedIn" name="LinkedIn">
          <Input placeholder="LinkedIn.com" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item label="Biography" name="Biography">
          <TextArea rows={4} placeholder="maxLength is 250" maxLength={250} />
        </Form.Item>

        <Form.Item className="ms-5 d-flex align-items-center justify-content-center">
          <PrimaryBtn
            title={save}
          />
        </Form.Item>
      </Form>
      <ToastContainer />
      <div className={`w-25 ${styles.img} position-relative ms-3`}>
        <img
          className="w-100 position-absolute bottom-0 start-50 translate-middle"
          src={capsula}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default DoctorForm;
