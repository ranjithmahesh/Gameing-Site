import React, { useEffect, useState } from "react";
import Genre from "../Components/Genre";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TreandingGames from "../Components/TreandingGames";
import GamesByGener from "../Components/GamesByGener";

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  const [allGamesByGenreid, setAllGamesByGenreid] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  useEffect(() => {
    getAllGameList();
    getGameListById(4);
  }, []);

  const getAllGameList = () => {
    GlobalApi.getAllGames.then((res) => {
      setAllGameList(res.data.results);
      setAllGamesByGenreid(res.data.results);
    });
  };

  const getGameListById = (id) => {
    console.log(id);
    GlobalApi.getGameListByGenreId(id).then((res) => {
      setAllGamesByGenreid(res.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 mx-7 ">
      <div className="  hidden md:block  h-full">
        <Genre
          genreId={(genreId) => getGameListById(genreId)}
          selectedGenresName={(name) => setSelectedGenresName(name)}
        />
      </div>
      <div className="  col-span-4 md:col-span-3 h-full">
        {allGameList.length > 0 && allGamesByGenreid.length > 0 && (
          <div className="px-5">
            <Banner allGameList={allGameList[0]} />
            <TreandingGames allGameList={allGameList} />
            <GamesByGener
              allGamesByGenreid={allGamesByGenreid}
              selectedGenresName={selectedGenresName}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
