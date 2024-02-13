import { Link } from "react-router-dom";
import login_bg from "../assets/login-bg.jpeg";
import prime_logo from "../assets/prime-logo.svg";
import { Button } from "../components/ui/button";
import { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => setIsSignUp((prevVal) => !prevVal);

  return (
    <div
      className="h-[100vh] w-full"
      style={{
        background: `url(${login_bg}) no-repeat center center/cover`,
      }}
    >
      <div className="px-8 bg-gradient-to-b from-black w-60">
        <Link to="/">
          <img src={prime_logo} />
        </Link>
      </div>
      <form className="flex flex-col rounded-md w-4/12 p-12 bg-black bg-opacity-80 my-24 mx-auto text-white">
        <h1 className="font-bold text-2xl py-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-md bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-md bg-gray-700"
        />
        <Button className="bg-sky-700 hover:bg-sky-600 w-full h-15 my-4 py-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <p className="py-4">
          {isSignUp ? "Already a Prime Member?" : "Not a Prime Member?"}
          <span
            className="text-sky-700 hover:text-sky-600 cursor-pointer pl-2"
            onClick={toggleSignUp}
          >
            {isSignUp ? "Sign In Instead" : "Join Prime Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
