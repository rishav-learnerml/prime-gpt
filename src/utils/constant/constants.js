import prime_footer from "../../assets/prime-footer-logo.png";
import firestick_bg from "../../assets/firestick-bg.jpeg";
import banner_2 from "../../assets/banner-2.jpeg";
import banner_1 from "../../assets/banner-1.jpeg";
import { TMDB_CREDENTIALS } from "../../credentials/credentials";

export const HOME_BANNER1 = banner_1;

export const HOME_BANNER2 = banner_2;

export const FIRE_STICK_BANNER = firestick_bg;

export const LOGO_FOOTER = prime_footer;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: TMDB_CREDENTIALS,
  },
};
export const TMDB_URL = "https://api.themoviedb.org/3/movie/";
export const TMDB_INDIA_URL = "https://api.themoviedb.org/3/discover/movie?";
export const VIDEO_LIST_CONFIG =
  "?region=IN&language=hi-IN&release_date.gte=2017-08-01&with_original_language=hi";
export const TRAILER_CONFIG = "/videos?language=en-US";
export const TMDB_MOVIE_IMAGES = "/images";
export const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/";
export const TMDB_MOVIE_POSTER = "https://image.tmdb.org/t/p/original";
