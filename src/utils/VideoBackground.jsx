import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { YOUTUBE_EMBED_URL } from "./constant/constants";

const VideoBackground = ({ movieId, currentVideo }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  console.log(trailer[currentVideo]?.key, "key");

  return (
    <div className="w-full h-[50vh] text-5xl text-white">
      <iframe
        className="w-screen h-full ps-[40%] aspect-video"
        src={
          YOUTUBE_EMBED_URL +
          trailer[currentVideo]?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1&rel=0"
        }
        title="video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
