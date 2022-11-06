import { Form, Input, Checkbox } from "antd";
import login from "../../assets/images/loginnn.gif";
import "antd/dist/antd.css";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import FormInput from "../../components/input";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { EmailAddress, Password } = values;
    try {
      await auth.signInWithEmailAndPassword(EmailAddress, Password);
      navigate("/home");

    }
     catch (error) {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <section className="row container mx-3 align-items-center pt-5 mt-0">
      <div className="col-md-8  text-center ">
        <img src={login} alt="login" className="" />
      </div>
      <div className="col-md-4 shadow  rounded-2 mt-5 px-4 py-5">
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
