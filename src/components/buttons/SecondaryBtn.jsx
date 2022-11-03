import styles from "./buttons.module.css";

const SecondaryBtn = (props) => {
  let { action, title } = props;

  return (
    <button
      className={`${styles.secondaryBtn} 
      text-uppercase
      border-0
      fw-bold
      me-4 shadow-sm
       rounded-pill
         px-5 py-2
         `}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default SecondaryBtn;
