import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About/Index";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import Logout from "./auth/Logout";
import Blog from "./Blog";
import BlogArticle from "./Blog/components/BlogArticle";
import Profile from "./Profile";
import DashboardIndex from "./Dashboard/DashboardIndex";
import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  // PUBLIC ROUTES
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [],
      },
      {
        path: "/blog",
        element: <Blog />,
        children: [],
      },
      {
        path: "/blog/:id",
        element: <BlogArticle />,
        children: [],
      },
      {
        path: "/about",
        element: <About />,
        children: [],
      },
      {
        path: "/login",
        element: <Login />,
        children: [],
      },
      {
        path: "/signup",
        element: <Signup />,
        children: [],
      },

      {
        path: "/logout",
        element: <Logout />,
        children: [],
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
        children: [],
      },
    ],
  },
  // PRIVATE ROUTES
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardIndex />,
        children: [],
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
