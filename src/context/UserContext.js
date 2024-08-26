import { createContext, useContext } from "react";
import { isLoggedIn } from "../api/session";

export const UserContext = createContext({
  user: {
    email: "",
    name: "",
  },

  setUser: () => {},
  isLoggedIn: () => isLoggedIn(),
});

export const useUserContext = () => useContext(UserContext);
