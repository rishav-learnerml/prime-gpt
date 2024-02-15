import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";

const Browse = () => {
  //fetches now playing movies and updates the store
  useNowPlayingMovies();

  return (
    <div>
      {/* 
    Main Container
        - video background
        -video title
    Secondary Container
        -MoviesList*n
        -cards*n
    */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
