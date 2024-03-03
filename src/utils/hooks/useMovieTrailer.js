import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_URL, TRAILER_CONFIG } from "../constant/constants";
import { addTrailerVideo } from "../../store/moviesSlice";
import { useEffect } from "react";
import getMoviePoster from "../constant/getMoviePoster";

const useMovieTrailer = (movieId, description) => {
  //memoization
  const movieTrailer = useSelector(
    (store) => store.movies.trailerVideo?.[movieId]
  );

  if (!movieId) return;
  const dispatch = useDispatch();
  //fetches the trailer video
  const getMovieTrailer = async () => {
    try {
      const data = await fetch(
        TMDB_URL + movieId + TRAILER_CONFIG,
        API_OPTIONS
      );
      const json = await data.json();

      //filter out trailer
      const filteredResults = json?.results?.filter(
        (video) => video.type === "Trailer"
      );
      //extract key for fetching trailers
      const trailer = filteredResults.length
        ? filteredResults[0]
        : json.results[0]; //only considering the first trailer if exists, else if not exists, fetch the first video whatever it is
      const trailerwithMovieId = {
        ...trailer,
        id: movieId,
        description,
      };

      getMoviePoster(dispatch, trailerwithMovieId, addTrailerVideo);
    } catch (error) {
      console.error("failed to fetch trailer!", error);
    }
  };

  useEffect(() => {
    if (!movieTrailer?.length) getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
