import styles from "./circle.module.css";

const Circle = ({ title, img }) => {
  return (
    <>
      <div className={`${styles.circle} mx-3 mb-2 d-flex align-items-center`}>
        <img src={img} alt={title} className="w-100" />
      </div>
      <p className=" text-center fw-bold ">{title}</p>
    </>
  );
};

export default Circle;
