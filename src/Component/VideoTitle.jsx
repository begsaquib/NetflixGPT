const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" px-24 w-screen aspect-video absolute pt-[20%] bg-gradient-to-r from-black text-white">
      <h1 className=" text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 ">{overview}</p>
      <div className="">
        <button className=" bg-white text-black  rounded-lg p-4 px-16 text-xl hover:bg-opacity-55">
          {" "}
          ▶️Play{" "}
        </button>
        <button className="mx-2 bg-white text-black bg-opacity-55 rounded-sm p-4 px-15 text-xl hover:bg-slate-300">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
