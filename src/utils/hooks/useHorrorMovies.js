import { useEffect } from "react";
import {
  API_OPTIONS,
  TMDB_URL,
  TMDB_MOVIE_HORROR,
  TMDB_DISCOVER_URL,
} from "../constant/constants";
import { useDispatch } from "react-redux";
import { addHorrorMovies } from "../../store/moviesSlice";
import getMoviePoster from "../constant/getMoviePoster";

const useHorrorMovies = () => {
  //fetch data from tmdb api and update store
  const dispatch = useDispatch();
  //api call
  const getHorrorMovies = async () => {
    try {
      const data = await fetch(TMDB_DISCOVER_URL + TMDB_MOVIE_HORROR, API_OPTIONS);
      const json = await data.json();
      json?.results?.forEach((movie) =>
        getMoviePoster(dispatch, movie, addHorrorMovies)
      );
    } catch (error) {
      console.error("Failed to fetch!", error);
    }
  };

  useEffect(() => {
    getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
