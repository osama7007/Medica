import register from "../../assets/images/register.jpg";
import Thanks from "../../components/thankyou";
import styles from "./register.module.css";
import { Button, Form, Input } from "antd";
import Select from "react-select";

const Rgeister = () => {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section
      className={`${styles.main}  row vh-100 container-fluid align-items-center`}
    >
      <div className="col w-50">
        <img src={register} alt="register" className="w-100" />
      </div>
      <div className={` ${styles.form} col`}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          
        >
          <div>

       
          <div className="d-flex" >
            <Form.Item
              label="First Name"
              name="First Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="Last Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
          </div>

          <div>
            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          <div>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="ConfirmPassword"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Select options={options} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              className="btn btn-primary"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Rgeister;
