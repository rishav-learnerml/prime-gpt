import { RouterProvider } from "react-router-dom";
import { approuter } from "./routes/approuter";

function App() {
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
}

export default App;
