import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { firebaseInit } from "./FirebaseConfig";
import { addUser } from "../../store/userSlice";

export const userauth = (
  isSignUp,
  userName,
  userEmail,
  userPassword,
  setErrorMessage,
  dispatch
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
        updateProfile(user, {
          displayName: userName,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid,
                email,
                displayName,
              })
            );
            setErrorMessage(null);
          })
          .catch((error) => {
            // An error occurred
            setErrorMessage(error);
          });
        console.log(user, "sign up succesful !");
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

export const userSignOut = () => {
  firebaseInit();
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      
    })
    .catch((error) => {
      console.log("Sign-out unsuccessful.");
    });
};
