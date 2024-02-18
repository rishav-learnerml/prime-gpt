import { bannerContent, cardImgUrls } from "../utils/constant/MockData";
import Banner from "../utils/Banner";
import { FIRE_STICK_BANNER } from "../utils/constant/constants";
import { Button } from "@/components/ui/button";
import Footer from "../utils/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="mt-3">
        {bannerContent?.map((item) => (
          <Banner {...item} key={item.title} />
        ))}
      </div>
      <div className="py-4 px-10 flex mx-auto bg-white">
        <div className="w-[50%] p-5">
          <div className="text-5xl font-thin">
            Your favorite channels all in one place
          </div>
          <div className="text-2xl font-thin my-5">
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice
          </div>
        </div>
        <div className="w-[50%] flex flex-wrap justify-center">
          {cardImgUrls?.map((imgUrl) => (
            <div
              className="p-1 cursor-pointer hover:scale-105 hover:shadow-lg"
              key={imgUrl}
            >
              <img src={imgUrl} alt="icon" width={200} />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          background: `url(${FIRE_STICK_BANNER}) no-repeat center center/cover`,
        }}
        className="text-white pb-[40%] pt-[1%] px-10"
      >
        <div className="w-[50%] float-end">
          <div className="text-5xl py-10 font-thin">
            Even better with Fire TV Stick
          </div>
          <div className="text-2xl font-thin text-gray-200">
            The biggest movies and TV shows are always better on a big screen.
            Simply plug in your Amazon Fire TV Stick and stream on any HDTV.
            Press the voice button on the remote and say the name of the title
            you want to watch to find it in seconds.
          </div>
          <Button className="my-5 bg-sky-700 text-md px-20 py-6 hover:bg-sky-600">
            Get started
          </Button>
        </div>
      </div>
      <div className=" bg-neutral-800 ">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
