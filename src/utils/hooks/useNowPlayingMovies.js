import { useEffect } from "react";
import {
  API_OPTIONS,
  TMDB_INDIA_URL,
  TMDB_URL,
  VIDEO_LIST_CONFIG,
} from "../../utils/constant/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../store/moviesSlice";

const useNowPlayingMovies = () => {
  //fetch data from tmdb api and update store
  const dispatch = useDispatch();
  //api call
  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_INDIA_URL + VIDEO_LIST_CONFIG, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
