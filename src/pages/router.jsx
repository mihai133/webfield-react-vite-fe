
import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: []
  },{
    path: "/about",
    element: <About />,
    children: []
  }
]);