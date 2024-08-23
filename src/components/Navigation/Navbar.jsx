// import React from 'react'

import { NavDropdown, Offcanvas } from 'react-bootstrap';
import LogoBlack from '../../assets/TheWebFieldn_new_logo_black.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <>
       <Navbar key={"sm"} expand={"sm"} className="Navbar-top bg-body-tertiary mb-3 shadow">
        <Container fluid>
          <Navbar.Brand href="/"><img src={LogoBlack} alt="TheWebFieldn logo" className="d-sm-block  logo-img" width={150}/></Navbar.Brand>
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
                  <Link to={'/'} className='nav-link'>Home</Link>
                  <Link to="/about" className='nav-link'>About us</Link>
                  <Link to="/login" className='nav-link'>Login</Link>
                  <Link to="/signup" className='nav-link'>Signup</Link>
                  <NavDropdown
                    title="Account"
                    id={`offcanvasNavbarDropdown-expand-md`}
                    align={{sm: "end"}}
                  >
                    <NavDropdown.Item href="#action3">Sign up</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Action TBD
                    </NavDropdown.Item>
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