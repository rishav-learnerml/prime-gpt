import { useSelector } from "react-redux";
import MovieList from "../utils/MovieList";
import useLatestMovies from "../utils/hooks/useLatestMovies";
import useTopRated from "../utils/hooks/useTopRated";
import useUpcoming from "../utils/hooks/useUpcoming";
import useHorrorMovies from "../utils/hooks/useHorrorMovies";
import { useRef } from "react";

const SecondaryContainer = () => {
  const count = useRef(0);
  //subscribing to store --> only what is required
  useLatestMovies();
  useTopRated();
  useUpcoming();
  useHorrorMovies();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const latestMovies = useSelector((store) => store.movies.latestMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const horrorMovies = useSelector((store) => store.movies.horrorMovies);

  return (
    <div className="relative overflow-auto">
      {/*
          MovieList
            -moviecard *n
      -popular
      -trending
      -now playing
      -genres
      */}

      {nowPlayingMovies && (
        <MovieList
          title="Dil Hai Hindustani"
          movies={nowPlayingMovies}
          count={6}
        />
      )}
      {latestMovies && (
        <MovieList title="Popular" movies={latestMovies} count={20} />
      )}
      {topRatedMovies && (
        <MovieList title="Top Rated" movies={topRatedMovies} count={34} />
      )}
      {upcomingMovies && (
        <MovieList title="Upcoming" movies={upcomingMovies} count={48} />
      )}
      {horrorMovies && (
        <div className="mb-80">
          <MovieList title="Horror" movies={horrorMovies} count={62} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
