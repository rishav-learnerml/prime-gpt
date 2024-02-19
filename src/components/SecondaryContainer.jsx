import { useSelector } from "react-redux";
import MovieList from "../utils/MovieList";
import useLatestMovies from "../utils/hooks/useLatestMovies";
import useTopRated from "../utils/hooks/useTopRated";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import useUpcoming from "../utils/hooks/useUpcoming";
import useHorrorMovies from "../utils/hooks/useHorrorMovies";

const SecondaryContainer = () => {
  //subscribing to store --> only what is required
  useLatestMovies();
  useTopRated();
  useNowPlayingMovies();
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
        <MovieList title="Dil Hai Hindustani" movies={nowPlayingMovies} />
      )}
      {latestMovies && <MovieList title="Popular" movies={latestMovies} />}
      {topRatedMovies && (
        <div className="relative -z-1">

          <MovieList title="Top Rated" movies={topRatedMovies} />
        </div>
      )}
      {upcomingMovies && <MovieList title="Upcoming" movies={upcomingMovies} />}
      {horrorMovies && (
        <div className="mb-80">
          <MovieList title="Horror" movies={horrorMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
