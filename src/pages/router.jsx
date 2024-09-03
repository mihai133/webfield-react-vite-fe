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
import ProjectsIndex from "./Dashboard/Projects/ProjectsIndex";
import Project from "./Dashboard/Projects/Project";
import ProjectNew from "./Dashboard/Projects/ProjectNew";

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
      {
        path: "/projects",
        element: <ProjectsIndex />,
        children: [],
      },
      {
        path: "/projects/new",
        element: <ProjectNew />,
        children: [],
      },
      {
        path: "/projects/:id",
        element: <Project />,
        children: [],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
