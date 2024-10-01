
import useNowPlayingMovies from "../customhook/useNowPlayingMovies";
import usePopularMovies from "../customhook/usePopularMovies";
import useTrendingMovie from "../customhook/useTrendingMovie";
import useUpcomingMovies from "../customhook/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovie()
  useUpcomingMovies()
  return (
    <div>
      <Header browsepage={true} />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
