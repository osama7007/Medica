import { useEffect, useState } from "react";
import styles from "./atricles.module.css";
import { randomNums } from "../../utils/randomNums";
import { Link } from "react-router-dom";
import Trending from "../../components/trending";
import { useSelector } from "react-redux";
import SkeletonComponent from "../../components/skeleton";
import { Skeleton } from "antd";
import Heading from "../../components/heading";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [res, setRes] = useState([]);
  const Articles = useSelector((state) => state.articles.articles);

  useEffect(() => {
    if (res.length > 0 && Articles.length > 0)
      setArticles(Articles.filter((article, i) => res.includes(i)));
  }, [Articles, res]);
  useEffect(() => {
    setRes(randomNums(11, 11));
  }, []);

  return (
    <section className=' container m-auto p-5'>
      <Heading text="trending" />
      <Trending className={styles.trendingCard} />

      <Heading text="Articles" />
      <div className="row my-5">
        {articles.length === 0 ? <Skeleton active /> : ""}

        {articles.map((article) => {
          return (
            <div className="col-md-12 mb-5 ">
              <div className={styles.content}>
                <div className="me-4">
                  <img
                    src={article.image}
                    alt="article"
                    loading="lazy"
                    className={`${styles.trending} rounded-5 me-5 mb-3 `}
                  />
                </div>
                <div>
                  <h6 className="text-dark fs-5 fw-bold">
                    {article.title}
                  </h6>
                  <p className="fs-6 text-black-50 fw-bold pe-5">
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
  );
};
export default Articles;
