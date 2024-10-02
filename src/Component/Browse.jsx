import { useSelector } from "react-redux";
import useNowPlayingMovies from "../customhook/useNowPlayingMovies";
import usePopularMovies from "../customhook/usePopularMovies";
import useTrendingMovie from "../customhook/useTrendingMovie";
import useUpcomingMovies from "../customhook/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovie();
  useUpcomingMovies();
  return (
    <div>
      <Header browsepage={true} />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
