import { DatePicker, Form, Input, Radio, TreeSelect } from "antd";
import React, { useState } from "react";
import strip from "../../assets/images/strip-tablet.gif";
import capsula from "../../assets/images/capsule.gif";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import "./patient.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import useAuthStateHandler from "../../firebase/useAuthStateHandler";
import { doc, updateDoc } from "firebase/firestore";

import styles from './patient.module.css'

const Patient = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [save, setSaved] = useState("Save");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const refreshAuth = useAuthStateHandler;
  const id = useSelector((state) => state.auth.id);

  const handleSubmit = (values) => {
    const {
      weight,
      height,
      birthDay,
      blood,
      geneticDiseases,
      medications,
      surgeryBefore,
    } = values;
    const docRef = doc(db, "users", id);
    updateDoc(docRef, {
      weight,
      height,
      birthDay: birthDay._d,
      blood,
      geneticDiseases,
      medications,
      surgeryBefore,
    }).then(() => {
      toast.success("Saved Successfully");
      refreshAuth();
    });
  };

  return (

    <div className={` d-flex justify-content-center align-items-center ${styles.contanier}`}>
      <div className={`w-25 ${styles.img}`}>
        <img className="w-100" alt="" src={strip}></img>
      </div>
      <Form
        onFinish={handleSubmit}
        className= {`mb-5 ms-5 mt-4 p-3 w-100 fw-bold shadow rounded-2 ${styles.formBody}`}

        labelCol={{
          span: 4,
        }}
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
        <Form.Item label="Form Size">
          <Radio.Group>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
      
        <div className=" ">

        <Form.Item label="Weight" name="weight">
          <TreeSelect
            treeData={[
              {
                title: "45:55",
                value: "45:55",
              },
              {
                title: "55:65",
                value: "55:65",
              },
              {
                title: "65:75",
                value: "65:75",
              },
              {
                title: "75:85",
                value: "75:85",
              },
              {
                title: "90+",
                value: "90+",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="height" name="height">
          <TreeSelect
            treeData={[
              {
                title: "140cm :150cm",
                value: "140cm :150cm",
              },
              {
                title: "150cm :160cm",
                value: "150cm :160cm",
              },
              {
                title: "160cm :170cm",
                value: "160cm :170cm",
              },
              {
                title: "170cm :180cm",
                value: "170cm :180cm",
              },
              {
                title: "180cm :190cm",
                value: "180cm :190cm",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Blood Type" name="blood">
          <TreeSelect
            treeData={[
              {
                title: "A",
                value: "A",
              },
              {
                title: "B",
                value: "B",
              },
              {
                title: "AB",
                value: "AB",
              },
              {
                title: "O",
                value: "O",
              },
            ]}
          />
        </Form.Item>
        <Form.Item className="mb-5" label="Birthday" name="birthDay">
          <DatePicker />
        </Form.Item>

        </div>
        <div className="" >

          <h4 className="mb-3 fw-bold text-primary">
            Important Questions ...?{" "}
          </h4>
          <label className="fs-6 fw-bold">Have you had surgery before?</label>
          <Form.Item className="ms-3" name="surgeryBefore">
            <TreeSelect
              treeData={[
                {
                  title: "Yes",
                  value: "Yes",
                },
                {
                  title: "No",
                  value: "No",
                },
              ]}
            />
          </Form.Item>

          <label className="fs-6 fw-bold">
            What are the genetic diseases in your family?
          </label>
          <Form.Item className="ms-3" name={"geneticDiseases"}>
            <Input />
          </Form.Item>
          <label className="fs-6 fw-bold">What medications do you take?</label>
          <Form.Item className="ms-3" name="medications">
            <Input name="medications" />
          </Form.Item>
        </div>
        <Form.Item className="ms-5 d-flex align-items-center justify-content-center">
          <PrimaryBtn title={save} />
        </Form.Item>
      </Form>
      <ToastContainer  position="bottom-right"
        autoClose={1000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />

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
export default Patient;
