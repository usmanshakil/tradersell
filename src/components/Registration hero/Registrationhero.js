
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavBar from '../../views/_partials/navbar';
import { Link } from "react-router-dom"
import Logo from "../../assets/imgs/png/nav/logo.png"
class RegistrationHero extends Component {
    render() {
        return (
            <div className="registration-hero-section">
                <NavBar />
                <Container>
                    <Row className="d-flex justify-content-center align-items-center section-registration-t-b-padding">
                        <Col lg={5} md={12} sm={12}>
                            <Form className="login-hero-container">
                                <div className="d-flex justify-content-center algin-center mb-4">
                                    <Link to="/"> <img className=" " src={Logo} alt="social1" /></Link>
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className="ts-input" type="text" placeholder="  Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className="ts-input" type="email" placeholder=" Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control className="ts-input" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control className="ts-input" type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <Form.Group className="mb-3  " controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" className="ts-bbg-text-color" label="Car Owner" />
                                </Form.Group>
                                <Form.Group className="mb-3  " controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" className="ts-bbg-text-color" label="Car Dealer" />
                                </Form.Group>
                                <div className="d-flex justify-content-flex-start">
                                    <Link className="ts-bbg-text-color" to="/register">     Already a member  ?</Link>
                                </div>
                                <div className="  justify-content-center algin-center mt-4 ">
                                    <Button className="ts-btn" variant="primary" type="submit">
                                        Register
                                 </Button>
                                </div>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        vouched: state.app.vouched
    };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationHero);