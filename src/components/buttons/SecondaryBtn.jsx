import styles from "./bottons.module.css";

const SecondaryBtn = (props) => {
  let { action, title } = props;

  return (
    <>
      <button className={`${styles.sBtn} btn btn-outline-primary border-0
         text-uppercase text-white fw-bold
          shadow my-4 me-4
          rounded-pill
          px-5 py-2 `} onClick={action}>{title}</button>

    </>
  )
};

export default SecondaryBtn;
