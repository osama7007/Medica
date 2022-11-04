import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setArticles } from "../redux/articlesSlice";

const useArticles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://medical-articles.herokuapp.com/articles")
      .then((res) => res.json())
      .then((json) => setAllArticles(json));
  }, []);
  useEffect(() => {
    if (allArticles.length > 0) {
      dispatch(setArticles([...allArticles]));
    }
  }, [allArticles]);
};

export default useArticles;