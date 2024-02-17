import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  TMDB_MOVIE_IMAGES,
  TMDB_URL,
  TRAILER_CONFIG,
} from "../constant/constants";
import { addTrailerVideo } from "../../store/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  if (!movieId) return;
  console.log("trailer");
  const dispatch = useDispatch();
  //fetches the trailer video
  const getMovieTrailer = async () => {
    const data = await fetch(TMDB_URL + movieId + TRAILER_CONFIG, API_OPTIONS);
    const json = await data.json();

    //filter out trailer
    const filteredResults = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    //extract key for fetching trailers
    const trailer = filteredResults.length
      ? filteredResults[0]
      : json.results[0]; //only considering the first trailer if exists, else if not exists, fetch the first video whatever it is

    //fetch logos
    const logoData = await fetch(
      TMDB_URL + movieId + TMDB_MOVIE_IMAGES,
      API_OPTIONS
    );
    const logoJson = await logoData.json();
    console.log(logoJson, "logo json");

    //filter out logo image
    const filteredLogo = logoJson.logos.filter(
      (image) => image.iso_639_1 === "en"
    );
    const logo_key = filteredLogo?.file_path ?? logoJson.logos[0].file_path;

    console.log(logo_key, "logo key");

    dispatch(
      addTrailerVideo({
        trailer: trailer,
        movie_logo: logo_key,
      })
    );
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
