import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import styles from "./trending.module.css";

const Trending=()=> {
    const [index, setIndex] = useState(0);
    const [articles, setArticles] = useState([]);
    useEffect(() => {

    getArticles();
  }, []);
  const getArticles = () => {
    fetch("https://medical-articles.herokuapp.com/articles?_limit=3")
      .then((res) => res.json())
      .then((json) => setArticles(json));
    console.log(articles);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className={`${styles.trendWidth} m-auto my-4`}>
      <Carousel activeIndex={index} onSelect={handleSelect} 
      >
          {articles.map((article) => {
              return (
                <Carousel.Item>
                      <div >
                      <img
                  className={`${styles.trending} d-block w-100 rounded-5`}
                  src={article.image}
                  alt="trending article"
                />
               </div>
                
                      <Carousel.Caption>
                    <Link
                      to={`/articles/${article.id}`} key={article.id}

                      className='text-white text-decoration-none  fw-bold fs-2'>{article.title}</Link>
                </Carousel.Caption>
                      </Carousel.Item>
                  
              )
          })}

      </Carousel>
      

      {/* <div className="d-flex">
        {articles.map((article) => {
          return (
          
        <div className='me-2' >
                      <img
                  className={`${styles.trending} d-block w-100 rounded-5`}
                  src={article.image}
                  alt="trending article"
                />
               </div>
        )
      })} 
      </div>*/}
      </section>
  );
}

export default Trending;