import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

const MainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(!Movies) return;

  const mainMovie=Movies[0];
  

  const {original_title,overview,id}=mainMovie;
  
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg  movieId={id}/>
    </div>
  );
};

export default MainContainer;
