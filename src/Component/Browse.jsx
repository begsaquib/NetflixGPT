
import useNowPlayingMovies from "../customhook/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header browsepage={true} />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
