import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import styles from "./trending.module.css";
import { Skeleton } from "antd";

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    fetch("https://medical-articles.herokuapp.com/articles?_limit=6")
      .then((res) => res.json())
      .then((json) => setArticles(json));
  };

  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // slidesPerView={4}
      breakpoints={{
        300: {
          width: 300,
          slidesPerView: 1,
        },
      
      }}
      spaceBetween={30}
      modules={[Autoplay, Navigation]}
      className={`${styles.trendWidth} text-center m-auto my-4`}
    >
      {articles.length === 0 ? <Skeleton active /> : ""}

      {articles.map((article) => {
        return (
          <>
            <SwiperSlide className="mt-4" >
              <img
                src={article.image}
                className={` ${styles.trendingImg} img-fluid mb-3 rounded-5`}
                alt="trending article"
              />

              <Link
                to={`/articles/${article.id}`}
                key={article.id}
                className="text-dark text-decoration-none  fw-bold fs-5"
              >
                {article.title}
              </Link>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
}
