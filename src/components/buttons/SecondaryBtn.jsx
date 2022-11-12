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
      mb-2
       rounded-pill
         `}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default SecondaryBtn;
