import React, { useState } from "react";
import MovieCard from "./MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShimmerCards from "./ShimmerCards";

const MovieList = ({ title, movies }) => {
  const [showInfo, setShowInfo] = useState(-1);

  if (!movies.length) {
    return <ShimmerCards />;
  }
  return (
    <div className="mb-10 mx-16">
      <div className="hover:relative hover:z-10">
        <h1 className="text-white font-semibold text-xl py-4">{title}</h1>
        <div className="hide-scroll">
          <Carousel
            opts={{
              align: "start",
              // loop: true,
            }}
            className="w-full h-[20vh] overflow-visible"
          >
            <CarouselContent>
              {movies?.slice(6)?.map((movie, index) => {
                return (
                  <CarouselItem
                    key={movie.id}
                    className={`md:basis-1/3 lg:basis-1/5 relative ${
                      showInfo === index ? "h-[60vh]" : "h-[20vh]"
                    }`}
                  >
                    <div className={`p-1`}>
                      <MovieCard
                        posterPath={movie?.backdrop_path}
                        title={movie?.title}
                        logo={movie?.movie_logo}
                        description={movie?.overview}
                        isAdult={movie?.adult}
                        releaseDate={movie?.release_date?.split("-")?.[0]}
                        setShowInfo={setShowInfo}
                        showInfo={showInfo}
                        index={index}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
