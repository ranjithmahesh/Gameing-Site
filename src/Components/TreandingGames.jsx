import React, { useEffect } from "react";

function TreandingGames({ allGameList }) {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Treanding Games</h2>
      <div className="    md:grid md:grid-cols-3  lg:grid-cols-4  gap-4 ">
        {allGameList.map(
          (item, i) =>
            i < 4 && (
              <div
                key={i}
                className="bg-[#76a8f75e] rounded-lg group  hover:scale-110 transition-all ease-in-out cursor-pointer mt-5 duration-200"
              >
                <img
                  src={item.background_image}
                  alt={allGameList.slug}
                  className="h-[270px] rounded-t-lg object-cover  "
                />
                <h2 className="dark:text-white text-[20px] font-bold p-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TreandingGames;
