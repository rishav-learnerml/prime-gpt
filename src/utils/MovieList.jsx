import React from "react";
import MovieCard from "./MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-10 mx-16">
      <div>
        <h1 className="text-white font-semibold text-xl py-4">{title}</h1>
        <div className="hide-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {movies?.slice(6)?.map((movie) => {
                return (
                  <CarouselItem
                    key={movie.id}
                    className="md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="p-1">
                      <MovieCard
                        posterPath={movie?.backdrop_path}
                        title={movie?.title}
                        logo={movie?.movie_logo}
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
