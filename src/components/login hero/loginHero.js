
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import NavBar from '../../views/_partials/navbar';
import { Link, useHistory } from "react-router-dom"
import Logo from "../../assets/imgs/png/nav/logo.png"
import axios from "axios"
import APIConfig from '../../helpers/api/config';
import { toast } from "react-toastify";

class LoginHero extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            loading: false
        }
    }

    resetForm = () => {
        this.setState({ email: "", password: "", loading: false })
    }
    handleLogin = async () => {
        var FormData = require('form-data');
        var data = new FormData();
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        try {
            const response = await axios(APIConfig('post', '/login', data));
            if (response.status === 200) {
                var reduxData = response.data.data
                reduxData["isLogin"] = true
                this.props.UserHandler(reduxData);
                toast.success("Login SuccessFully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                });
                this.props.history.push('/trade-your-car')
                this.resetForm()
            }
        } catch (error) {
            toast.error("Network Error ", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000,
            });
            this.resetForm()
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        this.handleLogin();
        this.resetForm()
    }


    render() {
        return (
            <div className="login-hero-section">
                <NavBar />
                <Container>
                    <Row className="d-flex justify-content-center align-items-center section-t-b-padding">
                        <Col lg={5} md={12} sm={12}>
                            <Form onSubmit={(e) => { this.handleSubmit(e) }} className="login-hero-container">
                                <div className="d-flex justify-content-center algin-center mb-4">
                                    <Link to="/"> <img className=" " src={Logo} alt="social1" /></Link>
                                </div>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Control value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} name="email" className="ts-input" required type="email" placeholder="User Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Control value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} name="password" className="ts-input" required type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" className="ts-bbg-text-color" label="Remember me" />
                                    <Link className="ts-bbg-text-color" to="/register">Register</Link>
                                </Form.Group>
                                <div className="d-flex justify-content-flex-start">
                                    <Link className="ts-bbg-text-color" to="/register">Forgot your password ?</Link>
                                </div>
                                <div className="  justify-content-center algin-center mt-4 ">
                                    {!this.state.loading ? <Button className="ts-btn" variant="primary" type="submit">
                                        Login
                                 </Button> :
                                        <Button disabled className="ts-btn" variant="primary" type="submit">
                                            <Spinner animation="grow" variant="dark" size="md" />
                                        </Button>}
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
        user: state.app.user,
        showAlert: state.app.showAlert,
        alertMessage: state.app.alertMessage,
        alertType: state.app.alertType,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        UserHandler: (value) => dispatch({ type: "USER", value: value }),
        hanleShowAlert: (value) => dispatch({ type: "SHOW_ALERT", value: value }),
        handleAlertMessage: (value) => dispatch({ type: "ALERT_MESSAGE", value: value }),
        handleAlertType: (value) => dispatch({ type: "ALERT_TYPE", value: value }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginHero);