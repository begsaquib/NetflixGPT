import { useSelector } from "react-redux";
import useTrailerVideo from "../customhook/useTrailerVideo";

const VideoBg = ({ movieId }) => {
  const VideoTrailer = useSelector((store) => store.movies.movieTrailer);
 
  
  useTrailerVideo(movieId);
  return (
    <div className="">
      <iframe
       className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + VideoTrailer?.key +"?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
