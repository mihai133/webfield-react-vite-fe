import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import { getUserFromSession, isLoggedIn } from "./api/session";
import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const [user, setUser] = useState({ ...getUserFromSession() });
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ user, setUser, isLoggedIn: isLoggedIn }}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </QueryClientProvider>
    </>
  );
}
