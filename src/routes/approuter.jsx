import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Browse from "../pages/Browse";
import Home from "../pages/Home";
import Layout from "../components/common/Layout";

export const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
  },
]);
