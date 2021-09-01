
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavBar from '../../views/_partials/navbar';
import { Link } from "react-router-dom"
import Logo from "../../assets/imgs/png/nav/logo.png"
class ContactUsHero extends Component {
    render() {
        return (
            <div className="contact-hero-section">
                <NavBar />
                <Container>
                    <Row className="d-flex justify-content-center align-items-center section-contact-t-b-padding">
                        <Col className="text-area p-3 mb-2" lg={12} md={12} sm={12}>
                            <h2>Contact us </h2>
                            <p>Whether your trading-in or selling let us help you
get the most value from your current vehicle. </p>
                        </Col>
                        <Col lg={8} md={12} sm={12}>
                            <Form className="login-hero-container margin-top-medium">
                                <div className="d-flex justify-content-center algin-center mb-4">
                                    <h1 classname="your-info">Your Information</h1>
                                </div>
                                <Row className="   ">
                                    <Col lg={6} md={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control className="ts-input" type="text" placeholder="  First Name" />
                                        </Form.Group>

                                    </Col>
                                    <Col lg={6} md={12} sm={12}>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control className="ts-input" type="text" placeholder=" Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control className="ts-input" type="text" placeholder="Company" />
                                </Form.Group>

                                <Row className="  ">
                                    <Col lg={6} md={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control className="ts-input" type="email" placeholder="   Email" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control className="ts-input" type="number" placeholder="   Phone Number" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control className="ts-input" rows="4" cols="50" as="textarea"
                                        style={{ height: '100px' }} type="text" placeholder="    Message  " />
                                </Form.Group>

                                <div className="  justify-content-center algin-center mt-4 ">
                                    <Button className="ts-btn" variant="primary" type="submit">
                                        Send
                                 </Button>
                                </div>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div >

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
export default connect(mapStateToProps, mapDispatchToProps)(ContactUsHero);