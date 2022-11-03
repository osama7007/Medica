import styles from "./buttons.module.css";

const Btn = (props) => {
  let { action, title } = props;

  return (
    <button
      className={`${styles.btn} text-uppercase
      border-0
      fs-6
      fw-bold
      me-2 shadow
       rounded-pill
         px-4 py-2 mb-2
         `}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default Btn;
