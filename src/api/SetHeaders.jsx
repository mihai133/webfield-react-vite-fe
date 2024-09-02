import { useEffect } from "react";
import { setSession } from "./session";
import { useDefaultRoute } from "../utils/router.utils";

export default function SetHeaders(props) {
  const { user } = props;
  const defaultLandingPage = useDefaultRoute();

  const setUserSession = (user) => {
    setSession({
      userId: user?.id,
      email: user?.email,
      company_name: user?.company_name,
      name: user?.name,
    });
  };
  setUserSession(user);

  useEffect(() => {
    window.location = defaultLandingPage;
  }, [user]);

  return <p>Loading...</p>;
}
