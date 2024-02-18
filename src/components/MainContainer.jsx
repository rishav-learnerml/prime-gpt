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

const MainContainer = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
  if (!movies) return;
  const trailerMovies = movies.slice(0, 6);

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
            } = movie;

            return (
              <CarouselItem key={id}>
                <div
                  className={`p-1 ml-5 ${current !== index && "opacity-30"}`}
                >
                  <VideoTitle
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
        {Array.from({ length: count }).map((_, index) =>
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
