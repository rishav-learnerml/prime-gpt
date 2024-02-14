import { RouterProvider } from "react-router-dom";
import { approuter } from "./routes/approuter";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./store/userSlice";
import { firebaseInit } from "./utils/constant/FirebaseConfig";

function App() {
  //only place to dispatch central auth state change --provided by firebase
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseInit();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user,'uuuu')
        //user signed in
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={approuter} />;
}

export default App;
