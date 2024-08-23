
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Index";
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