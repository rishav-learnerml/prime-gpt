import { API_OPTIONS, TMDB_MOVIE_IMAGES, TMDB_URL } from "./constants";

const getMoviePoster = async (dispatch, movie, dispatcherFn) => {
  try {
    //fetch logos
    const logoData = await fetch(
      TMDB_URL + movie.id + TMDB_MOVIE_IMAGES,
      API_OPTIONS
    );
    const logoJson = await logoData.json();

    //filter out logo image
    const filteredLogo = logoJson.logos.filter(
      (image) => image.iso_639_1 === "en"
    );
    const logo_key = filteredLogo?.file_path ?? logoJson?.logos[0]?.file_path;

    // Inside the try block
    const modifiedMovie = { ...movie, movie_logo: logo_key };
    dispatch(dispatcherFn(modifiedMovie));
  } catch (error) {
    console.error("failed to fetch movie poster!", error);
    // Inside the catch block
    const modifiedMovieWithError = { ...movie, movie_logo: null };
    dispatch(dispatcherFn(modifiedMovieWithError));
  }
};

export default getMoviePoster;
