import React, { Component } from "react";
import { connect } from 'react-redux';
// import Context from "../context/Context";
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"; 
// import Circle from "../assets/imgs/App Icon/JPG/circle.jpg";
import { ReactComponent as Logo } from "../../assets/imgs/svgs/nav/1615889129-78426.svg";
import * as Icon from 'react-feather';
import { toast } from "react-toastify";

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: "",
            showAlert: true,
            message: "testing phase"
        }
    }
    handleNotify = () => {
        if (this.props.alert?.alertType === "Error") {
            toast.error(this.props.alert?.alertMessage, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });

        }
        else if (this.props.alert?.alertType === "Success") {
            toast.success(this.props.alert?.alertMessage, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
        else if (this.props.alert?.alertType === "Warning") {
            toast.warn(this.props.alert?.alertMessage, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    }
    handleLogout = () => {
        this.props.UserHandler([])
    }
    render() {
        return (
            <>

                {/* {this.props.alert?.showAlert ? this.handleNotify() : ""} */}
                <div className="d-flex justfiy-content-center align-items-center upper-nav flex-wrap">
                    <span className="upper-nav-items">support@abc.com </span>
                    <span className="upper-nav-items">Mon to Fri : 9:00am to 6:pm </span>
                    <span className="upper-nav-items">5132 Otsego st Duluth, MN 55804 </span>
                    <span className="upper-nav-items"> <Icon.Phone color="white" className="ml-1 pr-2" />
                + 1 238 675 309 </span>
                </div>
                <Navbar collapseOnSelect expand="lg"   >
                    <Container>
                        <Link className="navbar-brand" to="/" >
                            {/* <img className="logo" src={LOGO} alt="logo" /> */}
                            <Logo className="logo" />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>

                            <Nav className="me-auto main-nav-items">
                                <Link className="nav-link" to="/">Home </Link>
                                <Link className="nav-link" to="/trade-your-car">Trade Your Car </Link>
                                <Link className="nav-link" to="/sell-your-car"> Sell Your Car</Link>
                                <Link className="nav-link" to="/contactus"> Contact Us</Link>
                                {this.props.user?.isLogin ?
                                    <a     className="nav-link main-nav-items-span" onClick={() => this.handleLogout()}> Logout</a>
                                    :
                                    <React.Fragment>
                                        <Link className="nav-link" to="/login"> Login</Link>
                                        <Link className="nav-link" to="/register"> Register</Link>
                                    </React.Fragment>
                                }
                            </Nav>
                            <Nav className="main-nav-social-links">
                                <div className="main-nav-social-links-container">
                                    <div className="pr-3">
                                        <Nav.Link href="#" > <Icon.Facebook color="white" className=" " />  </Nav.Link>
                                    </div>
                                    <div className="pr-3">
                                        <Nav.Link href="#"> <Icon.Instagram color="white" className=" " />  </Nav.Link>
                                    </div>
                                    <div className="pr-3">
                                        <Nav.Link href="#"> <Icon.Twitter color="white" className=" " />  </Nav.Link>
                                    </div>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        alert: state.app.alert,
        user: state.app.user
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        AlertHandler: (value) => dispatch({ type: "ALERT", value: value }),
        UserHandler: (value) => dispatch({ type: "USER", value: value }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);