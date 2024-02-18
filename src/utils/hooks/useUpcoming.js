import { useEffect } from "react";
import {
  API_OPTIONS,
  TMDB_URL,
  TMDB_MOVIE_TOP_RATED,
  TMDB_MOVIE_UPCOMING,
} from "../constant/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../../store/moviesSlice";
import getMoviePoster from "../constant/getMoviePoster";

const useUpcoming = () => {
  //fetch data from tmdb api and update store
  const dispatch = useDispatch();
  //api call
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(TMDB_URL + TMDB_MOVIE_UPCOMING, API_OPTIONS);
      const json = await data.json();
      json?.results?.forEach((movie) =>
        getMoviePoster(dispatch, movie, addUpcomingMovies)
      );
    } catch (error) {
      console.error("Failed to fetch!", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcoming;
