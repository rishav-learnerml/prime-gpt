import { useEffect } from "react";
import {
  API_OPTIONS,
  TMDB_URL,
  TMDB_MOVIE_LATEST,
} from "../constant/constants";
import { useDispatch } from "react-redux";
import { addLatestMovies } from "../../store/moviesSlice";
import getMoviePoster from "../constant/getMoviePoster";

const useLatestMovies = () => {
  //fetch data from tmdb api and update store
  const dispatch = useDispatch();
  //api call
  const getLatestMovies = async () => {
    try {
      const data = await fetch(TMDB_URL + TMDB_MOVIE_LATEST, API_OPTIONS);
      const json = await data.json();
      json?.results?.forEach((movie) =>
        getMoviePoster(dispatch, movie, addLatestMovies)
      );
    } catch (error) {
      console.error("Failed to fetch!", error);
    }
  };

  useEffect(() => {
    getLatestMovies();
  }, []);
};

export default useLatestMovies;
