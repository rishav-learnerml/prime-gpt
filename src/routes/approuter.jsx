import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import { Suspense, lazy } from "react";
import Shimmer from "../utils/Shimmer";
import ErrorPage from "../pages/ErrorPage";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const Login = lazy(() => import("../pages/Login"));
const Browse = lazy(() => import("../pages/Browse"));
const SearchPage = lazy(() => import("../pages/SearchPage"));

export const approuter = createBrowserRouter([
  {
    path: "login",
    errorElement: <ErrorPage />,
    element: (
      <Suspense fallback={<Shimmer />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Shimmer />}>
            <LandingPage />
          </Suspense>
        ),
      },

      {
        path: "browse",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Browse />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<Shimmer />}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
]);
