import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addMovieTrailer } from "../utils/MovieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();

    const filterdata = json.results.filter(
      (videos) => videos.type == "Trailer"
    );
    const trailer = filterdata.length ? filterdata[0] : json.results[0];

    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;
