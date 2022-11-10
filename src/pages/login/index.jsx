import { Form, Input, Checkbox } from "antd";
import loginnn from "../../assets/images/loginnn.gif";
import "antd/dist/antd.css";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import FormInput from "../../components/input";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useLoginData from "../../firebase/useAuthStateHandler";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import useAuthStateHandler from "../../firebase/useAuthStateHandler";

import styles from './login.module.css'

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { EmailAddress, Password } = values;
    try {
      auth
        .signInWithEmailAndPassword(EmailAddress, Password)
        .then((user) => {
          console.log("user : " + user);
          navigate("/");
        })
    } catch (error) {
      console.log(error.message);
      toast.error("Invalid Email or Password");
    }
  };

  return (

    <section className="container row m-auto align-items-center">
      <div className={`col-md-7 ${styles.img}`}>
        <img src={loginnn} alt="login" className={`w-75`} />

      </div>
      <div className={` col-lg-4 shadow rounded-2 mt-5 px-4 py-5 ${styles.loginContainer}`}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div>
            <FormInput label="Email Address" name="EmailAddress" type="email" />

            <div className="mb-5">
              <form-label>password</form-label>

              <Form.Item
                name="Password"
                hasFeedback
                rules={[{ required: true }, { min: 8 }]}
                style={{ width: "300px" }}
              >
                <Input.Password />
              </Form.Item>
            </div>

            <div className="d-flex mb-3">
              <Checkbox className="me-4 mt-2" onChange={onChange}>
                Remember me
              </Checkbox>
              <Form.Item>
                <PrimaryBtn title={"Log in"} />
              </Form.Item>
            </div>
          </div>
        </Form>

        <p className="text-black-50 ms-5">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        limit={3}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Login;
