// import React from 'react'

import { NavDropdown, Offcanvas } from "react-bootstrap";
import LogoBlack from "../../assets/TheWebFieldn_new_logo_black.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../api/session";
import { useUserContext } from "../../context/UserContext";
import { PersonCircle } from "react-bootstrap-icons";
import { NavItem } from "../common/NavItem";

function NavigationBar() {
  const { user } = useUserContext();

  return (
    <>
      <Navbar
        key={"sm"}
        expand={"sm"}
        className="Navbar-top bg-body-tertiary mb-3 shadow"
      >
        <Container fluid>
          <Link to={"/"} className="nav-brand">
            <img
              src={LogoBlack}
              alt="TheWebFieldn logo"
              className="d-sm-block  logo-img"
              width={150}
            />
          </Link>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="d-flex gap-2 align-items-center justify-content-end flex-grow-1 pe-3">
                <NavItem text="Home" link="/" className="nav-link" />
                <NavItem text="Blog" link="/blog" className="nav-link" />
                <NavItem text="About us" link="/about" className="nav-link" />
                <NavDropdown
                  title={user.name || "Account"}
                  id={`offcanvasNavbarDropdown-expand-md`}
                  align={{ sm: "end" }}
                >
                  {!isLoggedIn() ? (
                    <>
                      <NavItem text="Sign up" link="/signup" />
                      <NavItem text="Login" link="/login" />
                    </>
                  ) : (
                    <>
                      <NavItem
                        text="Dashboard"
                        link="/dashboard"
                        icon={<PersonCircle />}
                      />

                      <NavDropdown.Divider />
                      <NavItem text="Logout" link="/logout" />
                    </>
                  )}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
