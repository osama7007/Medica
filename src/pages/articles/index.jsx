import { useEffect, useState } from "react";
import styles from "./atricles.module.css";
import { randomNums } from "../../utils/randomNums";
import { Link } from "react-router-dom";
import Trending from "../../components/trending";
import { useSelector } from "react-redux";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [res, setRes] = useState([]);
  const Articles = useSelector((state) => state.articles.articles);
  console.log(Articles);
  useEffect(() => {
    if (res.length > 0 && Articles.length > 0)
      setArticles(Articles.filter((article, i) => res.includes(i)));
  }, [Articles, res]);
  useEffect(() => {
    setRes(randomNums(11, 11));
  }, []);

  return (
    <>
      <section className="container w-75">
        <h2 className="text-start  p-3">Trending</h2>
        <Trending />
        <h2 className="text-start my-4  p-3">Articles</h2>
        <div className="row">
          {articles.map((article) => {
            return (
              <div className="col-md-12 mb-5 ">
                <div className={styles.content}>
                  <div className=" me-4">
                    <img
                      src={article.image}
                      alt="article"
                      className={`${styles.trending} rounded-5 me-5 mb-3 `}
                    />
                  </div>
                  <div>
                    <h6 className=" text-dark fs-5 fw-bold text-decoration-none  ">
                      {article.title}
                    </h6>
                    <p className="fs-6 text-black-50 fw-bold">
                      {article.description.split(" ").slice(0, 30).join(" ")}...
                    </p>
                    <Link
                      className="fw-bold text-uppercase"
                      to={`/articles/${article.id}`}
                      key={article.id}
                    >
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Articles;
