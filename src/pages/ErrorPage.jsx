import React from "react";
import errorimg from "../assets/error.png";
import Header from "../components/common/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <img src={errorimg} />
    </div>
  );
};

export default ErrorPage;
