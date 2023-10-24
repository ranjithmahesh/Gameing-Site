import axios from "axios";

const key = "61aa24c0bc0a4de984beed25a906b8a0";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get(`/genres?key=` + key);
const getAllGames = axiosCreate.get(`/games?key=` + key);
const getGameListByGenreId = (id) =>
  axiosCreate.get(`/games?key=` + key + `&genres=` + id);

export default { getGenreList, getAllGames, getGameListByGenreId };
