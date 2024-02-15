import { useSelector } from "react-redux";
import VideoTitle from "../utils/VideoTitle";
import VideoBackground from "../utils/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie, "main");
  const { adult, title, original_language } = mainMovie;

  return (
    <div className="text-white">
      <VideoTitle title={title} language={original_language} isAdult={adult} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
