import { Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import FormInput from "../../components/input";
import FormSelect from "../../components/input/Select";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import { auth, createUserDocument } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import useAuthStateHandler from "../../firebase/useAuthStateHandler";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refreshAuthState = useAuthStateHandler();

  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const Category = [
    { value: "Doctor", label: "Doctor" },
    { value: "Patient", label: "Patient" },
  ];

  const onFinish = async (values) => {
    const { FirstName, LastName, EmailAddress, UserName, Password } = values;
    const Gender = values.Gender.value;
    const Category = values.Category.value;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        EmailAddress,
        Password
      );
      if (user) {
        const newUser = await createUserDocument(user, {
          firstName: FirstName,
          lastName: LastName,
          userName: UserName,
          category: Category,
          gender: Gender,
        });
        setTimeout(() => {
          refreshAuthState();
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      toast.error("Email Already Exist");
    }
  };
  return (
    <>
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
              name="Password"
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
                    if (!value || getFieldValue("Password") === value) {
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
    </>
  );
};

export default RegisterForm;
