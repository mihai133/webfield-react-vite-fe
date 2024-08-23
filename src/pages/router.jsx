
import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About/Index";
import Layout from "../components/Layout";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: []
      },
      {
        path: "/about",
        element: <About />,
        children: []
      },
      {
        path: "/login",
        element: <Login />,
        children: []
      }, 
      {
        path: "/signup",
        element: <Signup />,
        children: []
      }
      , 
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
        children: []
      }
    ]
  },
]);