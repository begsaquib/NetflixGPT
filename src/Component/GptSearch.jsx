import { Bg_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchbar from "./GptSearchbar";

const GptSearch = () => {
  return <div>
    <div className="-z-10 absolute">
      <img src={Bg_URL} alt="bg"  />
    </div>
    <GptSearchbar/>
    <GptMovieSuggestion/>
  </div>;
};

export default GptSearch;
