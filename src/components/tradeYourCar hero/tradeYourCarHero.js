
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavBar from '../../views/_partials/navbar';
import { Link } from "react-router-dom"
import Logo from "../../assets/imgs/png/nav/logo.png"
class TradeYourCarHero extends Component {

    render() {
        return (
            <div className="contact-hero-section">
                <NavBar />
                <Container>
                    <Row className="d-flex justify-content-center align-items-center section-contact-t-b-padding">
                        <Col className="text-area p-3 mb-2" lg={12} md={12} sm={12}>
                            <h2>Trade Your Car   </h2>
                            <p>Whether your trading-in or selling let us help you get the most value from your current vehicle. </p>
                        </Col>
                        <Col lg={8} md={12} sm={12}>
                            <Form className="login-hero-container margin-top-medium">
                                <div className="d-flex justify-content-center algin-center mb-4">
                                    <h1>Car Informaition  </h1>
                                </div>

                                <Row className="   ">
                                    <Col lg={12} md={12} sm={12}>
                                        Steps
                                    </Col>


                                    <Col lg={6} md={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="Vehicle">
                                            <Form.Control className="ts-input" type="text" placeholder="  Vehicle VIN(Minimum 17 characters)*  " />
                                        </Form.Group>

                                    </Col>
                                    <Col lg={6} md={12} sm={12}>

                                        <Form.Group className="mb-3" controlId="Drivetrain">
                                            <Form.Control className="ts-input" type="text" placeholder=" Drivetrain*  " />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="  ">
                                    <Col lg={6} md={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="Engine">
                                            <Form.Control className="ts-input" type="text" placeholder="   Engine*" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>

                                        <Form.Group className="mb-3" controlId="year">
                                            <Form.Control className="ts-input" type="text" placeholder="    Year*  " />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="  ">
                                    <Col lg={6} md={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="Engine">
                                            <Form.Control className="ts-input" type="text" placeholder="   Make*" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>

                                        <Form.Group className="mb-3" controlId="year">
                                            <Form.Control className="ts-input" type="text" placeholder="    Model*  " />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="  ">
                                    <Col lg={6} md={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="Engine">
                                            <Form.Control className="ts-input" type="text" placeholder="   State*" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>

                                        <Form.Group className="mb-3" controlId="year">
                                            <Form.Control className="ts-input" type="text" placeholder="    City*  " />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="  ">
                                    <Col lg={6} md={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="Engine">
                                            <Form.Control className="ts-input" type="text" placeholder="   Zip Code *" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>

                                        <Form.Group className="mb-3" controlId="year">
                                            <Form.Control className="ts-input" type="text" placeholder="    Phone*  " />
                                        </Form.Group>
                                    </Col>
                                </Row>

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
export default connect(mapStateToProps, mapDispatchToProps)(TradeYourCarHero);