import { Link } from "react-router-dom";
import login_bg from "../assets/login-bg.jpeg";
import prime_logo from "../assets/prime-logo.svg";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { checkValidData } from "../utils/constant/validate";
import { userauth } from "../utils/constant/userauth";
import { useDispatch } from "react-redux";
import useAuthChecker from "../utils/hooks/useAuthChecker";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  //check for auth
  useAuthChecker();

  const toggleSignUp = () => {
    setErrorMessage(null);
    setIsSignUp((prevVal) => !prevVal);
  };
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAuth = (e) => {
    e.preventDefault();

    //validation
    const userName = isSignUp ? e.target[0].value : "na";
    const userEmail = isSignUp ? e.target[1].value : e.target[0].value;
    const userPassword = isSignUp ? e.target[2].value : e.target[1].value;

    const validationError = checkValidData(userEmail, userPassword, userName);
    setErrorMessage(validationError);

    if (validationError) return;

    //sign in/sign up -- firebase
    userauth(
      isSignUp,
      userName,
      userEmail,
      userPassword,
      setErrorMessage,
      dispatch
    );
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: `url(${login_bg}) no-repeat center center/cover`,
      }}
    >
      <div className="px-8 bg-gradient-to-b from-black w-60">
        <Link to="/">
          <img src={prime_logo} />
        </Link>
      </div>
      <form
        className="flex flex-col rounded-md w-4/12 p-12 bg-black bg-opacity-80 my-24 mx-auto text-white"
        onSubmit={handleAuth}
      >
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
        <p className="text-purple-500 py-2">{errorMessage}</p>
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
