import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Banner = ({ title, description, buttonText, bannerImg }) => {
  const isLoggedIn = useSelector((store) => store.user.currentUser);

  return (
    <div
      className="text-white pb-[15%] pt-[3%] px-10 bg-cover"
      style={{
        backgroundImage: `linear-gradient( to right, #000 40%, transparent 58% ), url(${bannerImg})`,
      }}
    >
      <div className="text-5xl py-10 font-thin">{title}</div>
      <div className="text-2xl font-thin text-gray-200">{description}</div>
      <Link to={isLoggedIn ? "/browse" : "/login"}>
        <Button className="my-5 bg-sky-700 text-md px-20 py-6 hover:bg-sky-600">
          {buttonText.toLowerCase().includes("sign in") && isLoggedIn
            ? "Browse Now"
            : buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default Banner;
