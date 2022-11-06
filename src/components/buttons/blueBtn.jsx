import styles from "./buttons.module.css";
const BlueBtn = (props) => {
  let { action, title } = props;

  return (
    <button
      className={`${styles.primaryBtn} border-0 text-uppercase 
      fw-bold shadow-sm   
      rounded-pill
        px-4 py-2 text-white  `}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default BlueBtn;
