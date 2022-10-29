import styles from "./input.module.css";
import { Form, Input } from "antd";

const PasswordInput = ({ label, name }) => {
  return (
    <div>
      <form-label className={styles.label}> {label}</form-label>
      <Form.Item
        name={name}
        rules={[{ required: true }, { min: 8 }]}
        className={styles.formItem}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
    </div>
  );
};

export default PasswordInput;
