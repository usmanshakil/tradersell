import React from "react";
// import Context from "../context/Context";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import LOGO from "../../assets/imgs/png/nav/logo.png";
// import Circle from "../assets/imgs/App Icon/JPG/circle.jpg";
import * as Icon from 'react-feather';
const NavBar = () => {
    // const { addSideBarClass, setAddSideBarClass } = useContext(Context);

    return (
        <>
            <div className="d-flex justfiy-content-center align-items-center upper-nav flex-wrap">
                <span className="upper-nav-items">support@abc.com </span>
                <span className="upper-nav-items">Mon to Fri : 9:00am to 6:pm </span>
                <span className="upper-nav-items">5132 Otsego st Duluth, MN 55804 </span>
                <span className="upper-nav-items">+ 1 238 675 309 </span>
            </div>
            <Navbar collapseOnSelect expand="lg"   >
                <Container>
                    <Link className="navbar-brand" to="/" ><img src={LOGO} alt="logo" /> </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto main-nav-items">
                            <Link className="nav-link" to="/">Home </Link>
                            <Link className="nav-link" to="/trade-your-car">Trade Your Car </Link>
                            <Link className="nav-link" to="/sell-your-car"> Sell Your Car</Link>
                            <Link className="nav-link" to="/contactus"> Contact Us</Link>
                            <Link className="nav-link" to="/login"> Login</Link>
                            <Link className="nav-link" to="/register"> Register</Link>
                        </Nav>
                        <Nav className="main-nav-social-links">
                            <div className="main-nav-social-links-container">
                                <Nav.Link href="#"> <Icon.Facebook color="white" className=" " />  </Nav.Link>
                                <Nav.Link href="#"> <Icon.Instagram color="white" className=" " />  </Nav.Link>
                                <Nav.Link href="#"> <Icon.Twitter color="white" className=" " />  </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
