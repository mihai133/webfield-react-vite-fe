import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About/Index";
import Layout from "../components/Layout";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import Logout from "./auth/Logout";
import Blog from "./Blog";
import BlogArticle from "./Blog/components/BlogArticle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
]);
