import styles from "./category.module.css";

const CategoryItem = ({ title, img }) => {
  return (
    <>
      <div>
        <img src={img} alt={title} className={`${styles.img} img-fluid`} />
      </div>

      <h4 className="text-center text-uppercase">{title}</h4>
    </>
  );
};

export default CategoryItem;
