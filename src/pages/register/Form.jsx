import { Button, Checkbox, Form, Input } from "antd";
import Select from "react-select";
import styles from "./form.module.css";
import "antd/dist/antd.css";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";

const RegisterForm = () => {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const Category = [
    { value: "Doctor", label: "Doctor" },
    { value: "Patient", label: "Patient" },
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="d-flex justify-content-between ps-5 pe-5 ">
        <div>
          <span className={styles.label}>First Name</span>
          <Form.Item
            name="First Name"
            rules={[{ required: true }]}
            className={styles.formItem}
            hasFeedback
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <span className={styles.label}>Last Name</span>
          <Form.Item
            name="Last Name"
            rules={[{ required: true }]}
            className={styles.formItem}
            hasFeedback
          >
            <Input />
          </Form.Item>
        </div>
      </div>

      <div className="d-flex justify-content-between ps-5 pe-5  ">
        <div>
          <span className={styles.label}>Email Address</span>
          <Form.Item
            name="Email Address"
            rules={[{ required: true }, { type: "email" }]}
            className={styles.formItem}
            hasFeedback
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <span className={styles.label}>User Name</span>
          <Form.Item
            name="User Name"
            rules={[{ required: true }]}
            className={styles.formItem}
            hasFeedback
          >
            <Input />
          </Form.Item>
        </div>
      </div>

      <div className="d-flex justify-content-between ps-5 pe-5  ">
        <div>
          <span className={styles.label}>Password</span>

          <Form.Item
            name="password"
            hasFeedback
            rules={[{ required: true }, { min: 8 }]}
            className={styles.formItem}
          >
            <Input.Password />
          </Form.Item>
        </div>

        <div>
          <span className={styles.label}>Confirm Password</span>
          <Form.Item
            name="ConfirmPassword"
            hasFeedback
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            className={styles.formItem}
          >
            <Input.Password />
          </Form.Item>
        </div>
      </div>

      <div className="d-flex justify-content-between ps-5 pe-5 ">
        <div>
          <span className={styles.label}>Gender</span>

          <Form.Item
            name="Gender"
            rules={[{ required: true }]}
            className={styles.formItem}
          >
            <Select options={options} />
          </Form.Item>
        </div>

        <div>
          <span className={styles.label}>Category</span>
          <Form.Item
            name="Category"
            rules={[{ required: true }]}
            className={styles.formItem}
          >
            <Select options={Category} />
          </Form.Item>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between ps-5 pe-5 ">
        <Form.Item
          rules={[{ required: true, message: "checkBox is Requierd" }]}
          name="accept"
          valuePropName="checked"
        >
          <Checkbox> Accept all Terms & Conditions</Checkbox>
        </Form.Item>

        <Form.Item>
          <button
            className="primaryBtn border-0 text-uppercase 
                     fw-bold shadow shadow rounded-pill
                    px-5 py-2 text-light"
            htmlType="submit"
          >
            Sign Up
          </button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default RegisterForm;
