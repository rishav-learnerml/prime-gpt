import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../../utils/constant/constants";

const useRecommendations = () => {
  
  const [recomendedMovies, setRecommendedMovies] = useState(null);

  const { id: movieId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
        API_OPTIONS
      );
      const json = await response.json();
      console.log(json.results, "ress");
      setRecommendedMovies(json.results);
    })();
  }, []);

  return recomendedMovies;
};

export default useRecommendations;
