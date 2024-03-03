import { useEffect } from "react";
import {
  API_OPTIONS,
  TMDB_URL,
  TMDB_MOVIE_TOP_RATED,
} from "../constant/constants";
import { useDispatch,useSelector } from "react-redux";
import { addTopRatedMovies } from "../../store/moviesSlice";
import getMoviePoster from "../constant/getMoviePoster";

const useTopRated = () => {
  //memoization
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  //fetch data from tmdb api and update store
  const dispatch = useDispatch();
  //api call
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(TMDB_URL + TMDB_MOVIE_TOP_RATED, API_OPTIONS);
      const json = await data.json();
      json?.results?.forEach((movie) =>
        getMoviePoster(dispatch, movie, addTopRatedMovies)
      );
    } catch (error) {
      console.error("Failed to fetch!", error);
    }
  };

  useEffect(() => {
    if (!topRatedMovies?.length) getTopRatedMovies();
  }, []);
};

export default useTopRated;
