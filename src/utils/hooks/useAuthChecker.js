import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../store/userSlice";
import { firebaseInit } from "../constant/FirebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useAuthChecker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname: currentRoute } = useLocation();

  useEffect(() => {
    firebaseInit();
    const auth = getAuth();

    const unsubscribeEL = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signed in
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
        if (currentRoute === "/login" || currentRoute === "/")
          navigate("/browse");
      } else {
        // User is signed out -- login sould be accesible
        dispatch(removeUser());
        if (!(currentRoute === "/" || currentRoute === "/login")) navigate("/");
      }
    });

    //cleanup
    () => unsubscribeEL();
  }, []);
};

export default useAuthChecker;
