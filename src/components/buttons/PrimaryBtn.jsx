import styles from "./buttons.module.css";
const PrimaryBtn = (props) => {
  let { action, title } = props;

  return (
    <button
      className={`${styles.primaryBtn} border-0 text-uppercase 
      fw-bold shadow  me-4 
      rounded-pill
        px-5 py-2 text-white`}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default PrimaryBtn;
