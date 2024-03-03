import { useEffect } from "react";
import {
  API_OPTIONS,
  TMDB_DISCOVER_URL,
  VIDEO_LIST_CONFIG,
} from "../../utils/constant/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../store/moviesSlice";
import getMoviePoster from "../constant/getMoviePoster";

const useNowPlayingMovies = () => {
  //memoization
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  //fetch data from tmdb api and update store
  const dispatch = useDispatch();
  //api call
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        TMDB_DISCOVER_URL + VIDEO_LIST_CONFIG,
        API_OPTIONS
      );
      const json = await data.json();
      json?.results?.forEach((movie) =>
        getMoviePoster(dispatch, movie, addNowPlayingMovies)
      );
    } catch (error) {
      console.error("Failed to fetch!", error);
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies?.length) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
