import styles from "./heading.module.css";

const Heading = ({ text }) => {
  return (
    <h3
      className={` ${styles.heading} text-uppercase fw-bold  position-relative  `}
    >
      {text}
    </h3>
  );
};

export default Heading;
