import MovieList from "../utils/MovieList";
import useRecommendations from "../utils/hooks/useRecommendations";

const RecommendedMovies = () => {
  const recomendedMovies = useRecommendations();
  if (!recomendedMovies) return null;

  return (
    <div className="text-white z-20 my-10">
      <h1 className="text-white text-3xl text-center">
        <span className="border-b-2 py-1">Recommended</span>
      </h1>
      <div className="my-3">
        <MovieList
          title={"You might also like"}
          movies={recomendedMovies}
          count={recomendedMovies.length}
        />
      </div>
    </div>
  );
};

export default RecommendedMovies;
