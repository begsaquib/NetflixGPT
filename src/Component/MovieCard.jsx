import { Img_CDN } from "../utils/constants"


const MovieCard = ({poster_path}) => {
  return (
    <div className="w-[200px] pr-4">
      <img src={Img_CDN+poster_path} alt="imgcard" />
    </div>
  )
}

export default MovieCard