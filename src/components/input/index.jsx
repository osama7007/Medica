import styles from "./input.module.css";
import { Form, Input } from "antd";

const FormInput = ({ label, name, type }) => {
  return (
    <div>
      <form-label className={styles.label}> {label}</form-label>
      <Form.Item
        name={name}
        rules={[{ required: true },  { type }]}
        className={styles.formItem}
        hasFeedback
      >
        <Input />
      </Form.Item>
    </div>
  );
};

export default FormInput;
