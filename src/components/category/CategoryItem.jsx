import styles from "./category.module.css";

const CategoryItem = ({ title, img }) => {
  return (
    <div className="mx-5" >
      <div>
        <img src={img} alt={title} className={`${styles.img} img-fluid`} />
      </div>
      <h4 className="text-center text-uppercase">{title}</h4>
    </div>
  );
};

export default CategoryItem;
