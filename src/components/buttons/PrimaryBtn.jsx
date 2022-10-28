import styles from "./buttons.module.css";
const PrimaryBtn = (props ) => {


  let { action, title } = props;

  return (
    <button
      className={`${styles.primaryBtn} border-0 text-uppercase 
      fw-bold shadow mt-4 mb-1 me-4 
      rounded-pill
        px-5 py-2`}
        onClick={action}>{title}
    </button>
  );
};

export default PrimaryBtn;
