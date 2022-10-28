import { Button, Form, Input } from "antd";
import login from "../../assets/images/loginPic.gif";
import { Checkbox } from "antd";
import React from "react";
import "antd/dist/antd.css";
// import { useEffect } from "react";
// import { useState } from "react";
// import { FaFacebook } from "react-icons/fa";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Login = ({ history }) => {
  // const [accountService, setAccountService] = useState(0);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const facebookLogin = ({ history }) => {
  //   if (accountService.accountValue) {
  //     history.push("/");
  //   }
  // };

  return (
    <section className={"  row vh-100 container-fluid align-items-center"}>
      <div className="col w-100">
        <img src={login} alt="login" className="w-100 ms-5" />
      </div>
      <div className={" col"}>
        <Form
          className="ms-4"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div>
            <div>
              <form-label> Username</form-label>

              <Form.Item
                hasFeedback
                name="username"
                className="text-danger  fs-6 w-75"
                rules={[
                  { required: true, message: "Please enter your username!" },
                ]}
              >
                <Input className="mb-2 form-control" />
              </Form.Item>
            </div>

            <div>
              <form-label> Password</form-label>
              <Form.Item
                hasFeedback
                name="password"
                className="text-danger fs-6 w-75 "
                rules={[
                  {
                    required: true,
                    minLength: 8,
                    message: "Please enter your password!",
                  },
                ]}
              >
                <Input.Password className="mb-2  form-control " />
              </Form.Item>
            </div>

            {/* <div className="card-body mb-3">
              <button className="btn btn-facebook" onClick={facebookLogin}>
                <i>
                  <FaFacebook />
                </i>
                Login with Facebook
              </button>
            </div> */}

            <div>
              <Checkbox className="mb-2 fs-6" onChange={onChange}>
                Remember me
              </Checkbox>
            </div>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                className="btn btn-primary  px-4 "
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

export default Login;
