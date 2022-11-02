import { useEffect, useState } from "react";
import styles from "./atricles.module.css";
import { randomNums } from "../../utils/randomNums";
import { Link } from "react-router-dom";
import Trending from "../../components/trending";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [AllArticles, setAllArticles] = useState([]);
  const [res, setRes] = useState([]);

  useEffect(() => {
    if (res.length > 0 && AllArticles.length > 0)
      setArticles(AllArticles.filter((doc, i) => res.includes(i)));
  }, [AllArticles, res]);
  useEffect(() => {
    setRes(randomNums(11, 11));

    getArticles();
  }, []);
  const getArticles = () => {
    fetch("https://medical-articles.herokuapp.com/articles")
      .then((res) => res.json())
      .then((json) => setAllArticles(json));
  };

  return (
    <>
      <section className="container w-75">
        <h2 className="text-start mt-3">Trending</h2>
        <Trending />
        <h2 className="text-start mb-5">Articles</h2>
        <div className="row">
          {articles.map((article) => {
            return (
              <div className="col-md-12 mb-5 ">
                <div className="d-flex ">
                  <div className=" me-4">
                    <img
                      src={article.image}
                      alt="article"
                      className={`${styles.trending} rounded-5 me-5  `}
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
                      to={`/articles/${article.id}`} key={article.id}>
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
