import React from "react";
import Logo from "../../assets/imgs/png/nav/logo.png"
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div className="   d-flex justify-content-center align-items-center flex-column footer-container mt-auto  ">
        <div className="footer-logo mt-4">
          <Link to="/"> <img className=" " src={Logo} alt="social1" /></Link>
        </div>
        <div className="  d-flex justify-content-center align-items-center  footer-social-links pt-4">
          <Link className="mr-3" to="/">  <Icon.Facebook color="white" className="footer-call  " />     </Link>
          <Link className="mr-3" to="/">  <Icon.Instagram color="white" className="footer-call  " />     </Link>
          <Link to="/">  <Icon.Twitter color="white" className="footer-call  " />     </Link>

        </div>
        <Container>
          <Row className="mt-5 footer-text-area">
            <Col className="  footer-text-area-column-1  d-flex flex-column" lg={4} md={6} sm={12}>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
              <span className="d-flex mt-2">
                <Icon.Map color="white" className="   pr-2" />
              5132 Otsego st Duluth, MN 55804</span>
              <span className="d-flex mt-2">
                <Icon.Mail color="white" className=" l  pr-2" />
              example@gmail.com</span>
              <span className="d-flex mt-2">
                <Icon.Phone color="white" className="   pr-2" />
            Phone: <span className="footer-phone-number">+ 1 23 867 5309</span> </span>
            </Col>
            <Col className="footer-text-area-column-2  d-flex flex-column  " lg={2} md={6} sm={12}>
              <h5>About Tradersell</h5>
              <div className="footer-link-column-container d-flex flex-column">
                <Link className="footer-link" to="/"> <Icon.ChevronRight color="white" className="   pr-2" />   Home  </Link>
                <Link className="footer-link " to="/"> <Icon.ChevronRight color="white" className="   pr-2" />   Trade your car     </Link>
                <Link className="footer-link " to="/"> <Icon.ChevronRight color="white" className="   pr-2" />   Sell your car   </Link>
                <Link className="footer-link " to="/"><Icon.ChevronRight color="white" className="   pr-2" />    Contact us     </Link>
                <Link className="footer-link " to="/"><Icon.ChevronRight color="white" className="   pr-2" />    Login     </Link>
                <Link className="footer-link " to="/"> <Icon.ChevronRight color="white" className="   pr-2" />   Register     </Link>
              </div>
            </Col>
            <Col className="footer-text-area-column-3  d-flex flex-column  " lg={2} md={6} sm={12}>
              <h5>Customer Links  </h5>
              <div className="footer-link-column-container d-flex flex-column">
                <Link className="footer-link" to="/"> <Icon.ChevronRight color="white" className="   pr-2" />   Latest Cars  </Link>
                <Link className="footer-link " to="/"> <Icon.ChevronRight color="white" className="   pr-2" />   Featured Cars     </Link>
                <Link className="footer-link " to="/"> <Icon.ChevronRight color="white" className="   pr-2" />   Sell your car   </Link>
                <Link className="footer-link " to="/"><Icon.ChevronRight color="white" className="   pr-2" />    Buy your car    </Link>
                <Link className="footer-link " to="/"><Icon.ChevronRight color="white" className="   pr-2" />    Reviews     </Link>
                <Link className="footer-link " to="/"> <Icon.ChevronRight color="white" className="   pr-2" />   Latest News     </Link>
              </div>
            </Col>
            <Col className="footer-text-area-column-4   d-flex flex-column" lg={4} md={6} sm={12}>
              <h5>Subscribe Newsletter    </h5>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
              <input type="text" className="news-letter-input" placeholder="Your Email" />
              <button type="submit" className="btn-newsletter">Submit</button>
            </Col>
          </Row>
        </Container>
        <div className=" d-flex justify-content-flex-start align-items-center flex-column flex-wrap footer-links">

        </div>


      </div>
    </>
  );
};
export default Footer;

