import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function Genre({ genreId,selectedGenresName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGeneralList();
  }, []);
  const getGeneralList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  return (
    <div className=" dark:text-white">
      <h2 className="text-[30px] font-bold dark:text-white ">Genre</h2>
      {genreList.map((item, i) => (
        <div
          onClick={() => {
            setActiveIndex(i);
            genreId(item.id);
            selectedGenresName(item.name)
          }}
          key={i}
          className={`flex gap-2 items-center mb-2 hover:bg-gray-300 p-2 cursor-pointer rounded-lg hover:dark:bg-gray-600 group ${
            activeIndex === i ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
        >
          <img
            src={item.image_background}
            alt={item.slug}
            className={`w-[40px] h-[40px] object-cover rounded-lg   group-hover:scale-110 transition-all ease-out duration-200   ${
              activeIndex === i ? "scale-110   " : null
            } `}
          />
          <h3
            className={`text-[18px]   group-hover:font-bold   transition-all ease-out duration-200    ${
              activeIndex === i ? "font-bold " : null
            } `}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Genre;
