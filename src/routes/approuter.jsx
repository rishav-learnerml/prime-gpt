import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import { Suspense, lazy } from "react";
import Shimmer from "../utils/Shimmer";
import ErrorPage from "../pages/ErrorPage";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const Login = lazy(() => import("../pages/Login"));
const Browse = lazy(() => import("../pages/Browse"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const MovieDetailsPage = lazy(() => import("../components/MoviePlayer"));
const PlayMovie = lazy(() => import("../components/MovieBackground"));

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
        path: "browse/:id",
        element: (
          <Suspense fallback={<Shimmer />}>
            <MovieDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "play/:id",
        element: (
          <Suspense fallback={<Shimmer />}>
            <PlayMovie allowControls="1" />
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
