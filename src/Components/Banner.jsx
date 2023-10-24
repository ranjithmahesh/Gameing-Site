import React, { useEffect } from "react";

function Banner({ allGameList }) {
  
  return (
    <div className=" relative my-3">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold">{allGameList.name}</h2>
        <button className="bg-blue-700 text-white px-2 py-1 rounded-lg ">Get Now</button>
      </div>
      <img
        src={allGameList.background_image}
        alt={allGameList.slug}
        className="md:h-[320px] w-full object-cover rounded-xl "
      />
    </div>
  );
}

export default Banner;
