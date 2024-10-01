import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import {   addTrendingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useTrendingMovie= () => {
  const dispatch = useDispatch();

  const getTrendingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      
      API_OPTION
    );
    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovie();
  }, []);
};
export default useTrendingMovie;
