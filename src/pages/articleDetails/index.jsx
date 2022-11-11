import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./articleDetails.module.css";

const ArticleDetailes = () => {
  const params = useParams();
  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = () => {
    fetch(`https://medical-articles.herokuapp.com/articles/${params.id}`)
      .then((res) => res.json())
      .then((json) => setArticles(json));
    console.log(articles);
  };
  const [articles, setArticles] = useState([]);
  return (
    <>
      {articles.length === 0 ? (
        <div className="container mt-5 w-50">
          <Skeleton active />
        </div>
      ) : (
        ""
      )}
      <div className="container py-2 text-center">
        <div className="w-75  m-auto">
          <img
            src={articles?.image}
            alt={articles?.title}
            loading="lazy"
            className={`${styles.imgHeight} w-100 mb-3 rounded-4`}
          />
        </div>
        <h4 className="text-dark mb-4 fs-4 ">{articles?.title}</h4>
        <p className={`${styles.content} m-4 fs-5`}>
          {articles?.description}
        </p>
      </div>
    </>
  );
};
export default ArticleDetailes;
