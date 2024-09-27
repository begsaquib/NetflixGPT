import { useState } from "react";
import Header from "./Header";

const Login = () => {
   const [isSignin,setIsSignin]=useState(true)

   const togglesigninform=()=>{
    setIsSignin(!isSignin)
   }


  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black m-[13rem] mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold mb-4">{isSignin ? "Sign in" : "Sign Up"}</h1>
        {!isSignin &&<input
          type="text"
          placeholder="Full Name"
          className="p-2  my-2 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2  my-2 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2  my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-4 w-full bg-red-700 rounded-lg">
        {isSignin ? "Sign in" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={togglesigninform}
        >{isSignin ? "New to Netflix? Sign up now" : "Already a Memebr? Sign in now"}</p>
      </form>
    </div>
  );
};

export default Login;
