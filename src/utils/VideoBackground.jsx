import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { YOUTUBE_EMBED_URL } from "./constant/constants";

const VideoBackground = ({
  movieId,
  currentIndex,
  videoIndex,
  description,
}) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId, description);

  return (
    <div className="w-screen h-[22vh] md:h-[50vh] text-5xl text-white cursor-pointer aspect-auto overflow-hidden scale-125">
      <iframe
        className="w-screen h-full ps-[37%] md:ps-[25%] aspect-auto scale-125 md:scale-150"
        src={
          YOUTUBE_EMBED_URL +
          trailer?.[movieId]?.key +
          `?showinfo=0&autoplay=${
            currentIndex === videoIndex
          }&mute=1&controls=0&loop=1&rel=0&autohide=1&start=5`
        }
        title="video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
