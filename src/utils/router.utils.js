import { isLoggedIn } from "../api/session";

export const useDefaultRoute = () => {
  if (isLoggedIn()) return "/dashboard";

  return "/";
};
