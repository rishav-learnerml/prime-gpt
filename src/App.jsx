import { RouterProvider } from "react-router-dom";
import { approuter } from "./routes/approuter";

function App() {
  return (
    <>
      <div id="google_translate_element"></div>

      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
