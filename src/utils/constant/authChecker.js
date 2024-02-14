import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../store/userSlice";
import { firebaseInit } from "./FirebaseConfig";
import { useLocation } from "react-router-dom";

const authChecker = (dispatch, navigate) => {
  const currentRoute = window.location.pathname;
  console.log(location);
  firebaseInit();
  const auth = getAuth();
  const unsubscribeEL = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user, "uuuu");
      //user signed in
      const { uid, email, displayName } = user;
      dispatch(
        addUser({
          uid,
          email,
          displayName,
        })
      );
      navigate("/browse");
    } else {
      // User is signed out -- login sould be accesible
      dispatch(removeUser());
      if (!(currentRoute === "/" || currentRoute === "/login")) navigate("/");
    }
  });

  return unsubscribeEL;
};

export default authChecker;
