import styles from "./bottons.module.css";

const PrimaryBtn = (props) => {
  let { action, title } = props;
  return (
    <>
      <button className={`${styles.pBtn} btn btn-outline-primary border-0 text-uppercase 
      fw-bold shadow my-4 me-4
      rounded-pill
        px-5 py-2`} onClick={action}>{title}</button>

    </>
  )
};

export default PrimaryBtn;
