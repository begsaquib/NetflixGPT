import Header from "./Header"


const Login = () => {
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="" />
      </div>
       <form className="relative w-3/12">
        <input type="text" placeholder="Email Address" className="p-2 m-2" />
        <input type="text" placeholder="Email Address" className="p-2 m-2" />
        <button className="">SignIN</button>
       </form>

    </div>
  )
}

export default Login