import { createContext, useContext } from "react";
import { isLoggedIn } from "../api/session";

export const UserContext = createContext({
  user: {
    userId: "",
    email: "",
    company_name: "",
    name: "",
  },

  setUser: () => {},
  isLoggedIn: () => isLoggedIn(),
});

export const useUserContext = () => useContext(UserContext);
