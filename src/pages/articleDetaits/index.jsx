import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './articleDetails.module.css';

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
      <div className="container p-3 w-75 text-center">
        <div className="w-75  m-auto">
          <img src={articles?.image} alt="" className={`${styles.imgHeight} w-100 mb-3`} />
        </div>
        <h4 className="text-dark  my-3 fs-4 ">{articles?.title}</h4>
        <p className={`${styles.content} fs-5 ms-3 text-start`}>{articles?.description} </p>
      </div>
    </>
  );
};
export default ArticleDetailes;
