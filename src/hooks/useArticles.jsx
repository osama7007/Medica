import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setArticles } from "../redux/articlesSlice";

const useArticles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://medical-articles.herokuapp.com/articles")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          dispatch(setArticles([...data]));
        }
      });
  }, []);
};

export default useArticles;
