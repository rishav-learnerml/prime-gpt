import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_URL, TRAILER_CONFIG } from "../constant/constants";
import { addTrailerVideo } from "../../store/moviesSlice";
import { useCallback, useEffect } from "react";

const useMovieTrailer = (movieId) => {
  if (!movieId) return;
  console.log("trailer");
  const dispatch = useDispatch();
  //fetches the trailer video
  const getMovieTrailer = useCallback(async () => {
    const data = await fetch(TMDB_URL + movieId + TRAILER_CONFIG, API_OPTIONS);
    const json = await data.json();

    //filter out trailer
    const filteredResults = json.results.filter(
      (video) => video.type === "Trailer"
    );
    //extract key for fetching trailers
    const trailer = filteredResults.length
      ? filteredResults[0]
      : json.results[0]; //only considering the first trailer if exists, else if not exists, fetch the first video whatever it is
    console.log(trailer, "trailer");
    dispatch(addTrailerVideo(trailer));
  }, [movieId]);

  useEffect(() => {
    getMovieTrailer();
  }, [getMovieTrailer]);
};

export default useMovieTrailer;
