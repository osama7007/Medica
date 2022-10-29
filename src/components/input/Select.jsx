import Select from "react-select";
import { Form } from "antd";

import styles from "./input.module.css";

const FormSelect = ({ label, name, option }) => {
  return (
    <div>
      <form-label className={styles.label}> {label}</form-label>
      <Form.Item
        name={name}
        rules={[{ required: true }]}
        className={styles.formItem}
      >
        <Select options={option} />
      </Form.Item>
    </div>
  );
};

export default FormSelect;
