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

export const TMDB_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
