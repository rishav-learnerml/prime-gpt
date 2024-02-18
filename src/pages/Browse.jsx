import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import Footer from "../utils/Footer";

const Browse = () => {
  //fetches now playing movies and updates the store

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
      <Footer />
    </div>
  );
};

export default Browse;
