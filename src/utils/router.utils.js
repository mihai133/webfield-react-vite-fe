import { isLoggedIn } from "../api/session";
import { useUserContext } from "../context/UserContext";

export const useDefaultRoute = () => {
  if (isLoggedIn()) return "/dashboard";

  return "/";
};
