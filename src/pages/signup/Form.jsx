import { Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import FormInput from "../../components/input";
import FormSelect from "../../components/input/Select";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import { db } from "../../firebase/firebase";

const RegisterForm = ({ userAuth }) => {
  const navigate = useNavigate();

  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const Category = [
    { value: "Doctor", label: "Doctor" },
    { value: "Patient", label: "Patient" },
  ];

  const onFinish = (values) => {
    const { FirstName, LastName, EmailAddress, UserName, password } = values;
    db.collection("users").add({
      firstName: FirstName,
      lastNAme: LastName,
      email: EmailAddress,
      userName: UserName,
      password: password,
      gender: values.Gender.value,
      category: values.Category.value,
    });
    userAuth(true);
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <div
        className={`${styles.inputWrapper} d-flex align-items-center justify-content-between ps-5 pe-5`}
      >
        <FormInput label="First Name" name="FirstName" />
        <FormInput label="Last Name" name="LastName" />
      </div>

      <div
        className={`${styles.inputWrapper} d-flex align-items-center justify-content-between ps-5 pe-5`}
      >
        <FormInput label="Email Address" name="EmailAddress" type="email" />
        <FormInput label="User Name" name="UserName" />
      </div>

      <div
        className={`${styles.inputWrapper} d-flex align-items-center justify-content-between ps-5 pe-5`}
      >
        <div>
          <form-label>password </form-label>

          <Form.Item
            name="password"
            hasFeedback
            rules={[{ required: true }, { min: 8 }]}
            style={{ width: "300px" }}
          >
            <Input.Password />
          </Form.Item>
        </div>

        <div>
          <form-label>Confirm Password </form-label>
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
            style={{ width: "300px" }}
          >
            <Input.Password />
          </Form.Item>
        </div>
      </div>

      <div
        className={`${styles.inputWrapper} d-flex align-items-center justify-content-between ps-5 pe-5`}
      >
        <FormSelect label="Gender" name="Gender" option={options} />
        <FormSelect label="Category" name="Category" option={Category} />
      </div>

      <div
        className={`${styles.inputWrapper} d-flex align-items-center justify-content-between ps-5 pe-5`}
      >
        <Form.Item
          rules={[{ required: true, message: "checkBox is Requierd" }]}
          name="accept"
          valuePropName="checked"
        >
          <Checkbox> Accept all Terms & Conditions</Checkbox>
        </Form.Item>

        <Form.Item>
          <PrimaryBtn title={"Sign Up"} />
        </Form.Item>
      </div>
    </Form>
  );
};

export default RegisterForm;
