import { Star, Check, Play, Info, Plus, ShoppingBagIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { TMDB_MOVIE_POSTER } from "./constant/constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({
  title,
  language,
  isAdult,
  rating,
  thumbnail,
  currentIndex,
}) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const isTrailerAvailable = trailer[currentIndex]?.name;
  const movieLogo = trailer[currentIndex]?.movie_logo ? (
    <img
      src={TMDB_MOVIE_POSTER + trailer[currentIndex]?.movie_logo}
      alt={title}
      className="w-72 md:max-h-[120px] lg:max-w-[80%]"
    />
  ) : (
    <div>{title}</div>
  );

  const [backgroundImage, setBackgroundImage] = useState(
    TMDB_MOVIE_POSTER + thumbnail
  );
  //get language name from code
  const languageNames = new Intl.DisplayNames(["en"], {
    type: "language",
  });

  useEffect(() => {
    setBackgroundImage(TMDB_MOVIE_POSTER + thumbnail);
    if (!isTrailerAvailable) return; //if trailer is not availlable skip

    const timer = setTimeout(() => {
      setBackgroundImage("");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, isTrailerAvailable, thumbnail]);

  return (
    <div
      className="px-20 py-10 absolute bg-gradient-to-r from-black from-40% w-screen aspect-video z-10"
      style={{
        background: `linear-gradient(to right, black ${
          backgroundImage ? "20%" : "40%"
        }, transparent), url(${backgroundImage}) no-repeat center center/cover`,
      }}
    >
      <div>
        <div className="flex">
          <span className="flex text-lg pe-2">
            <div className="bg-yellow-500 rounded-sm px-1 text-black font-extrabold me-2 ">
              TMDb
            </div>{" "}
            {rating?.toFixed(1)}
          </span>
          <Star
            size={15}
            color="#f4d50b"
            fill="#f4d50b"
            strokeWidth={3}
            className="mt-[6px]"
          />
        </div>
        <div className="max-w-fit">
          <h1 className="text-6xl mt-5 py-2 rounded-lg mb-1 bg-gradient-to-r from-transparent via-sky-600 to-transparent">
            {movieLogo}
          </h1>
          <p className="text-center">{languageNames.of(language)}</p>
        </div>
        <div className="mt-12 lg:mt-6 flex">
          {isTrailerAvailable ? (
            <span className="flex text-lg">
              <Check
                size={20}
                strokeWidth={5}
                color="#000000"
                className="bg-sky-500 rounded-full p-1 me-2 mt-1"
              />
              Included with Prime
            </span>
          ) : (
            <span className="flex text-lg">
              <ShoppingBagIcon
                size={25}
                strokeWidth={2}
                color="#fbbf24"
                className="me-2"
              />
              Available to rent
            </span>
          )}
          <span className="text-md font-semibold px-2 py-[2px] mx-3 bg-neutral-700 rounded-md">
            {isAdult ? "A 18+" : "U/A 13+"}
          </span>
        </div>
        <div className="flex mt-4">
          {isTrailerAvailable ? (
            <div className="bg-white rounded-full w-fit p-4 hover:scale-105 hover:opacity-90 cursor-pointer">
              <Play
                size={45}
                color="#000000"
                strokeWidth={3}
                fill="#000000"
                className="color-black ps-1"
              />
            </div>
          ) : (
            <div className="bg-white rounded-lg w-fit p-4 hover:scale-105 hover:opacity-90 cursor-pointer text-black text-xl font-medium">
              More Details
            </div>
          )}
          {isTrailerAvailable && (
            <div className="ps-5 text-xl flex items-center">Play Trailer</div>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="bg-neutral-700 rounded-full p-3 w-fit h-fit ms-10 cursor-pointer">
                  <Plus size={28} color="#ffffff" strokeWidth={3} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-lg">Watchlist </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="bg-neutral-700 rounded-full p-3 w-fit h-fit ms-2 cursor-pointer">
                  <Info size={30} color="#ffffff" strokeWidth={2} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-lg">Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
