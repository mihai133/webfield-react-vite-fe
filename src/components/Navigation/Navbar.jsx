// import React from 'react'

import { NavDropdown, Offcanvas } from "react-bootstrap";
import LogoBlack from "../../assets/TheWebFieldn_new_logo_black.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../api/session";
import { useUserContext } from "../../context/UserContext";

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
          {/* <Nav className="d-none d-lg-block ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}

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
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
                <Link to={"/blog"} className="nav-link">
                  Blog
                </Link>
                <Link to="/about" className="nav-link">
                  About us
                </Link>
                <NavDropdown
                  title={user.name || "Account"}
                  id={`offcanvasNavbarDropdown-expand-md`}
                  align={{ sm: "end" }}
                >
                  <Link to="#" className="dropdown-item">
                    Profile
                  </Link>
                  <NavDropdown.Divider />
                  {!isLoggedIn() ? (
                    <>
                      <Link to="/signup" className="dropdown-item">
                        Sign up
                      </Link>
                      <Link to="/login" className="dropdown-item">
                        Login
                      </Link>
                    </>
                  ) : (
                    <Link to="/logout" className="dropdown-item">
                      Logout
                    </Link>
                    // <Logout />
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
