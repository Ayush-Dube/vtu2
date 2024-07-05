import React from "react";
import { Navbar, Image, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <>
            <header>
                {/* //////////////////////////////////// */}
                <Navbar className="navbat-styl px-5" expand="lg">
                    <Navbar.Brand href="#">
                        <Image src="\vtuPics\vtu-logo.png" height={'65px'} />Viswesvaraya Technological University
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-2" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{marginRight:'30px'}} >
                        <Nav className="ml-auto">
                            <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
                            <LinkContainer to='/about'><Nav.Link  >About Us</Nav.Link></LinkContainer>
                            <NavDropdown title="Academics" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#" className="text-primary">Circulars</NavDropdown.Item>
                                <NavDropdown.Item href="#">Admissions</NavDropdown.Item>
                                <NavDropdown.Item href="#">Certifications</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Examinations" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#">Guidelines</NavDropdown.Item>
                                <NavDropdown.Item href="#">TimeTable</NavDropdown.Item>
                                <LinkContainer to='/result/loginpage'><NavDropdown.Item >Results</NavDropdown.Item></LinkContainer>
                            </NavDropdown>
                            <NavDropdown title="Departments" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
                                <NavDropdown.Item href="#">Computer Science</NavDropdown.Item>
                                <NavDropdown.Item href="#">Electronics & Communications</NavDropdown.Item>
                                <NavDropdown.Item href="#">Mechanical Engineering</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Admin Login</NavDropdown.Item>
                                <NavDropdown.Item href="#">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#">SignUP</NavDropdown.Item>
                            </NavDropdown>
                                
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </header>
        </>
    )
}
export default Header;