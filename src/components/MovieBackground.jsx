import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { YOUTUBE_EMBED_URL } from "../utils/constant/constants";

const MovieBackground = ({ allowControls = 0 }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const { id: movieId } = useParams();
  return (
    <iframe
      className={`w-full aspect-video relative ${
        !allowControls && "scale-y-125"
      } overflow-hidden`}
      src={
        YOUTUBE_EMBED_URL +
        trailer?.[movieId]?.key +
        `?showinfo=0&autoplay=1&mute=1&controls=${allowControls}&loop=1&rel=0&autohide=1&start=5`
      }
      title="video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      loading="lazy"
    ></iframe>
  );
};

export default MovieBackground;
