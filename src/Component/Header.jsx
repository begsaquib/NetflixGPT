import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo_URL, Supported_Lang } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = ({ browsepage }) => {
  const dispatch = useDispatch();
  const showGptsearch=useSelector((store)=>store.gpt.showGptSearch)
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleclicked = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubcribes when component unmounts
    return () => unsubscribe();
  }, []);

  const HandleGptSeachClick = () => {
    dispatch(toggleGptSearchView());
  };
  const HandleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={Logo_URL} alt="logo" />

      {browsepage && (
        <div className="flex">
          {showGptsearch && (<select
            className="p-4 m-3 rounded-xl bg-gray-900 text-white"
            onChange={HandleLangChange}
          >
            {Supported_Lang.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          <button
            className="px-4 py-2 my-2 mx-4 text-white bg-slate-500 hover:bg-slate-300 rounded-lg "
            onClick={HandleGptSeachClick}
          >
            {showGptsearch ? "Homepage" :"GPT Search"}
          </button>
          <img className="pt-2 m-2 h-10 mt-4" src={user?.photoURL} alt="" />
          <button
            className="p-1 rounded-lg h-8 mt-5 text-white"
            onClick={handleclicked}
          >
            (signout)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
