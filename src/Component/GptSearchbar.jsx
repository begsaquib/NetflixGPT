import { useSelector } from "react-redux";
import lang from "../utils/langConstant";
const GptSearchbar = () => {
  const langKey=useSelector(store=> store.config.lang)
  return (
    <div className="pt-[15%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
