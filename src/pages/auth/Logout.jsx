import { logout } from "../../api/fetch";
import { removeSession } from "../../api/session";
import { useEffect } from "react";
import { useDefaultRoute } from "../../utils/router.utils";

export default function Logout() {
  // const { fetchData } = useFetch();

  const defaultLandingPage = useDefaultRoute();

  useEffect(() => {
    logout().then(() => {
      removeSession();
      window.location = defaultLandingPage;
    });
  }, []);

  return <>loggedOut</>;
}
