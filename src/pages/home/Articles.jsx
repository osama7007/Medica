import { Link } from "react-router-dom";
import Heading from "../../components/heading";
import styles from "./articles.module.css";
import { BiRightArrowAlt } from "react-icons/bi";

const Articles = () => {
  return (
    <section className="py-5">
      <Heading text="latest Articles" />
      <div className="row mb-3 gap-4">
        <div className="col shadow-sm rounded-3 d-flex align-items-center">
          <div className={`${styles.imgContainer} me-2`}>
            <img src="https://via.placeholder.com/150" alt="article" />
          </div>
          <div className={`${styles.infoContainer}`}>
            <p className="text-black-50 m-0 pt-1">Dec.22.2022</p>
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis beatae repellendus consequuntur alias molestiae facere!
            </h6>
            <p className={styles.category}>Covid-19</p>
          </div>
        </div>

        <div className="col shadow-sm rounded-3 d-flex align-items-center">
          <div className={`${styles.imgContainer} me-2`}>
            <img src="https://via.placeholder.com/150" alt="article" />
          </div>
          <div className={`${styles.infoContainer}`}>
            <p className="text-black-50 m-0 pt-1">Dec.22.2022</p>
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis beatae repellendus consequuntur alias molestiae facere!
            </h6>
            <p className={styles.category}>Covid-19</p>
          </div>
        </div>
      </div>

      <div className={`${styles.reedMore} text-end`}>
        <Link>Reed More</Link>
        <BiRightArrowAlt className={styles.arrow} />
      </div>
    </section>
  );
};

export default Articles;
