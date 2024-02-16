import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { YOUTUBE_EMBED_URL } from "./constant/constants";
import { memo } from "react";

const VideoBackground = memo(({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies.trailerVideo);
  console.log(trailer?.key, "key");

  return (
    <div className="w-screen h-[50vh]">
      <iframe
        className="w-screen aspect-video pb-[20%] ps-[25%]"
        src={YOUTUBE_EMBED_URL + trailer?.key + "?&autoplay=1&mute=1"}
        title="video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
});

export default VideoBackground;
