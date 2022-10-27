import styles from "./buttons.module.css";

const SecondaryBtn = (props) => {
  let { action, title } = props;

  return (
    <button
      className={`${styles.secondaryBtn} 
      text-uppercase
      border-0
      fw-bold
      mt-4 mb-1 me-4 shadow
       rounded-pill
         px-5 py-2
       text-white  `}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default SecondaryBtn;


// btn btn-outline-primary  border-0 text-uppercase 
//       fw-bold shadow my-4 me-4 shadow
//       rounded-pill
//         px-5 py-2 text-white