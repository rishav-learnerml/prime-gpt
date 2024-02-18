import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    latestMovies: [],
    trailerVideo: [],
    topRatedMovies: [],
    upcomingMovies: [],
    horrorMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies.push(action.payload);
    },
    addLatestMovies: (state, action) => {
      state.latestMovies.push(action.payload);
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies.push(action.payload);
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies.push(action.payload);
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies.push(action.payload);
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo.push(action.payload);
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addLatestMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addHorrorMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
