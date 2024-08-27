/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { setSession } from "./session";
import { useDefaultRoute } from "../utils/router.utils";

export default function SetHeaders(props) {
  const { user } = props;
  const defaultLandingPage = useDefaultRoute();

  const setUserSession = (user) => {
    setSession({
      email: user?.email,
      name: user?.name,
    });
  };
  setUserSession(user);

  useEffect(() => {
    window.location = defaultLandingPage;
  }, [user]);

  return <p>Loading...</p>;
}
