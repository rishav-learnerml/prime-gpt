import { useSelector } from "react-redux";
import VideoTitle from "../utils/VideoTitle";
import VideoBackground from "../utils/VideoBackground";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useEffect, useState } from "react";
import { Circle } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";

const MainContainer = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useNowPlayingMovies();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailerMovies = movies.slice(0, 6);
  if (!trailerMovies.length)
    return <Skeleton className="h-96 w-[90vw] rounded-xl mx-auto mt-3" />;

  return (
    <div className="text-white px-4 mx-auto w-[95%] mt-5">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 15000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {trailerMovies?.map((movie, index) => {
            const {
              adult,
              title,
              original_language,
              vote_average,
              id,
              backdrop_path,
              description,
            } = movie;

            return (
              <CarouselItem key={id}>
                <div className={`ml-5 ${current !== index && "opacity-30"}`}>
                  <VideoTitle
                    movieId={id}
                    title={title}
                    language={original_language}
                    isAdult={adult}
                    rating={vote_average}
                    thumbnail={backdrop_path}
                    currentIndex={current}
                  />
                  <VideoBackground
                    movieId={id}
                    currentIndex={current}
                    videoIndex={index}
                    description={description}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-5 text-center flex justify-center text-sm text-muted-foreground gap-4">
        {Array.from({ length: trailerMovies?.length || 6 }).map((_, index) =>
          index === current ? (
            <Circle size={10} fill="#ffffff" key={index} />
          ) : (
            <Circle size={10} fill="#808080" color="#808080" key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default MainContainer;
