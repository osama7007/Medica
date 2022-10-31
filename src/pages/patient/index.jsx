import { DatePicker, Form, Input, Radio, TreeSelect } from "antd";
import React, { useState } from "react";
import strip from "../../assets/images/strip-tablet.gif";
import capsula from "../../assets/images/capsule.gif";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";

const Patient = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className=" container  d-flex justify-content-center align-items-center">
      <div className="w-25">
        <img className="w-100" src={strip}></img>
      </div>
      <Form
        className=" mb-5 ms-5 mt-4 w-75 fw-bold shadow rounded-2 "
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
          {" "}
          Manage Profile
        </h2>

        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="First name">
          <Input />
        </Form.Item>
        <Form.Item label="Last name">
          <Input />
        </Form.Item>

        <Form.Item label="Gender">
          <TreeSelect
            treeData={[
              {
                title: "Female",
                value: "Female",
              },
              {
                title: "Male",
                value: "Male",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Weight">
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
        <Form.Item label="Height">
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

        <Form.Item label="Blood Type">
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

        <Form.Item className="mb-5" label="Birthday">
          <DatePicker />
        </Form.Item>

        <form className=" ms-5 w-100 ">
          <h4 className="mb-3 fw-bold text-primary">
            Important Questions ...?{" "}
          </h4>
          <Form.Item className="ms-3">
            <label className="fs-6 fw-bold">Have you had surgery before?</label>
            <TreeSelect
              treeData={[
                {
                  title: "YES",
                  value: "YES",
                },
                {
                  title: "NO",
                  value: "NO",
                },
              ]}
            />
          </Form.Item>

          <Form.Item className="ms-3">
            <label className="fs-6 fw-bold">
              What are the genetic diseases in your family?
            </label>

            <Input />
          </Form.Item>
          <Form.Item className="ms-3">
            <label className="fs-6 fw-bold">
              What medications do you take?
            </label>

            <Input />
          </Form.Item>
        </form>

        <Form.Item className="ms-5 d-flex align-items-center justify-content-center">
          <PrimaryBtn title={"Save"} />
        </Form.Item>
      </Form>
      <div className="w-25 position-relative ms-3">
        <img
          className="w-100 position-absolute bottom-0 start-50 translate-middle"
          src={capsula}
        ></img>
      </div>
    </div>
  );
};
export default Patient;
