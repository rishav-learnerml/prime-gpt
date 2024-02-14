import { RouterProvider } from "react-router-dom";
import { approuter } from "./routes/approuter";


function App() {

  return <RouterProvider router={approuter} />;
}

export default App;
