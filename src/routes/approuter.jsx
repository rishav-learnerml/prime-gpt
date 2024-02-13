import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import { Suspense, lazy } from "react";
import Shimmer from "../utils/Shimmer";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const Login = lazy(() => import("../pages/Login"));
const Browse = lazy(() => import("../pages/Browse"));

export const approuter = createBrowserRouter([
  {
    path: "login",
    element: (
      <Suspense fallback={Shimmer}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={Shimmer}>
            <LandingPage />
          </Suspense>
        ),
      },

      {
        path: "browse",
        element: (
          <Suspense fallback={Shimmer}>
            <Browse />
          </Suspense>
        ),
      },
    ],
  },
]);
