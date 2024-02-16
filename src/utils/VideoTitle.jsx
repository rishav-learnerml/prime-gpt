import { Star, Check, Play, Info, Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

const VideoTitle = ({ title, language, isAdult, rating }) => {
  //get language name from code
  const languageNames = new Intl.DisplayNames(["en"], {
    type: "language",
  });

  return (
    <div className="px-20 py-10 absolute bg-gradient-to-r from-black via-neutral-800 to-transparent w-screen aspect-video">
      <div className="flex">
        <span className="text-lg pe-2">IMDB {rating?.toFixed(1)}</span>{" "}
        <Star
          size={20}
          color="#f4d50b"
          fill="#f4d50b"
          strokeWidth={3}
          className="mt-1"
        />
      </div>
      <div className="max-w-fit">
        <h1 className="text-6xl pt-5 pb-1">{title}</h1>
        <p className="text-center">{languageNames.of(language)}</p>
      </div>
      <div className="mt-12 flex">
        <span className="flex text-lg">
          <Check
            size={20}
            strokeWidth={3}
            color="#000000"
            className="bg-sky-500 rounded-full p-1 me-2 mt-1"
          />
          Included with Prime
        </span>
        <span className="text-md font-semibold px-2 py-[2px] mx-3 bg-neutral-700 rounded-md">
          {isAdult ? "A 18+" : "U/A 13+"}
        </span>
      </div>
      <div className="flex mt-4">
        <div className="bg-white rounded-full w-fit p-4 hover:scale-105 hover:opacity-90 cursor-pointer">
          <Play
            size={45}
            color="#000000"
            strokeWidth={3}
            fill="#000000"
            className="color-black ps-1"
          />
        </div>
        <div className="ps-5 text-xl flex items-center">Play Trailer</div>
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
  );
};

export default VideoTitle;
