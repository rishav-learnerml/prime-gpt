import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseInit } from "./FirebaseConfig";

export const userauth = (
  isSignUp,
  userEmail,
  userPassword,
  setErrorMessage,
  navigate
) => {
  //initialize firebase
  firebaseInit();
  const auth = getAuth();

  if (isSignUp) {
    //sign up
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user, "sign up succesful !");
        setErrorMessage(null);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage, "sign up unsuccesful !");
        // Using regular expression to extract the sentence within brackets
        const match = errorMessage.match(/\(([^)]+)\)/);

        // Check if there is a match and extract the content within brackets
        const extractedSentence = match ? match[1].replace("auth/", "") : null;
        setErrorMessage("sign up unsuccesful :( " + extractedSentence + " !");
      });
  } else {
    //sign in
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "sign in succesful !");
        setErrorMessage(null);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage, "sign in unsuccesful !");
        // Using regular expression to extract the sentence within brackets
        const match = errorMessage.match(/\(([^)]+)\)/);

        // Check if there is a match and extract the content within brackets
        const extractedSentence = match ? match[1].replace("auth/", "") : null;
        setErrorMessage("sign in unsuccesful :( " + extractedSentence + " !");
      });
  }
};

export const userSignOut = (navigate) => {
  firebaseInit();
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      navigate("/");
    })
    .catch((error) => {
      console.log("Sign-out unsuccessful.");
    });
};
