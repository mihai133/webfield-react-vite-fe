import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import LogoBlack from "../assets/TheWebFieldn_new_logo_black.png";
import { NavItem } from "../components/common/NavItem";
import { useDefaultRoute } from "../utils/router.utils";
import { NavDropdown } from "react-bootstrap";
import { isLoggedIn } from "../api/session";
import { useEffect } from "react";
import { BoxArrowRight, PersonCircle } from "react-bootstrap-icons";

export default function PrivateLayout() {
  const { user } = useUserContext();
  const defaultLandingPage = useDefaultRoute();
  const navigate = useNavigate();

  const PageTitle = useLocation()?.pathname.split("/")[1];

  useEffect(() => {
    if (!isLoggedIn()) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user.name) return <></>;
  return (
    <div className="container-fluid row m-0 p-0">
      <div className="col-12 col-md-2 p-0">
        <div className="d-none d-md-block p-0">
          <div className="sidebar">
            <div className="sidebar-inner">
              <div className="avatar">
                <Link to={defaultLandingPage} className="nav-brand">
                  <img
                    src={LogoBlack}
                    alt="TheWebFieldn logo"
                    className="d-sm-block  logo-img"
                    width={150}
                  />
                </Link>
              </div>
              <div className="mx-auto d-flex flex-column gap-3 w-100 mt-5">
                <NavItem
                  text="Dashboard"
                  link={defaultLandingPage}
                  className="sidebar-nav-item"
                />
                <NavItem
                  text="Projects"
                  link="/projects"
                  className="sidebar-nav-item "
                />
                <NavItem
                  text="Issues"
                  link="/Issues"
                  className="sidebar-nav-item "
                />
                <NavItem
                  text="Contracts"
                  link="/contracts"
                  className="sidebar-nav-item "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-10 mx-auto mt-5 px-3 px-md-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-capitalize">{PageTitle}</h1>

          <NavDropdown
            className="user-nav-dropdown bg-light d-flex flex-column align-items-center p-3 rounded-circle border-dark border border-1 fs-4"
            title={
              user &&
              user?.name
                .split(" ")
                .map((name) => name[0])
                .join("")
            }
            id={`offcanvasNavbarDropdown-expand-md`}
            align={{ sm: "end" }}
          >
            <NavDropdown.Item as={"div"}>
              <NavItem text="Profile" link="/profile" icon={<PersonCircle />} />
            </NavDropdown.Item>

            <NavDropdown.Item as={"div"}>
              <NavItem text="Log out" link="/logout" icon={<BoxArrowRight />} />
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className="container-fluid m-0 pt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
