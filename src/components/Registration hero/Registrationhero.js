
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import NavBar from '../../views/_partials/navbar';
import { Link } from "react-router-dom"
import Logo from "../../assets/imgs/png/nav/logo.png"
import axios from "axios"
import APIConfig from '../../helpers/api/config';
import { toast } from "react-toastify";
class RegistrationHero extends Component {
    _isMounted = false
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: '',
            user_type: "",
            loading: false
        }
    }
    resetForm = () => {
        this.setState({ email: "", password: "", user_type: "", confirmPassword: "", name: "", loading: false })
    }
    handleRegistration = async () => {
        var FormData = require('form-data');
        var data = new FormData();
        data.append('name', this.state.name);
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        data.append('user_type', this.state.user_type);
        try {
            const response = await axios(APIConfig('post', '/register', data));
            if (response.status === 200) {
                var reduxData = response.data.data
                reduxData["isLogin"] = true
                this.props.UserHandler(reduxData);
                toast.success("Successfully Registered", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500,
                });
                this.props.history.push('/trade-your-car')
                this.resetForm()
            } else if (response.status === 300) {
                toast.warn("Email already Exist", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500,
                });
            }

        } catch (error) {
            toast.warn("Failed to create new user  ", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
            });
            console.log(error);
            this.resetForm()
        }
    }


    validatePassword = () => {
        if (this.state.password !== this.state.confirmPassword) {
            toast.warn("Confirm Password does not match with Password", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
            });
            return false
        }
        else {
            return true
        }
    }
    handleSubmit = async (e) => {
        this._isMounted = true;
        e.preventDefault();
        if (this.validatePassword()) {
            this.setState({ loading: true })
            this.handleRegistration();
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="registration-hero-section">
                <NavBar />
                <Container>
                    <Row className="d-flex justify-content-center align-items-center section-registration-t-b-padding">
                        <Col lg={5} md={12} sm={12}>
                            <Form onSubmit={(e) => { this.handleSubmit(e) }} className="login-hero-container">
                                <div className="d-flex justify-content-center algin-center mb-4">
                                    <Link to="/"> <img className=" " src={Logo} alt="social1" /></Link>
                                </div>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Control value={this.state.name || ""} onChange={(e) => this.setState({ name: e.target.value })} required name="name" className="ts-input" type="text" placeholder="  Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Control value={this.state.email || ""} onChange={(e) => this.setState({ email: e.target.value })} required name="email" className="ts-input" type="email" placeholder="User Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Control value={this.state.password || ""} pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" onChange={(e) => this.setState({ password: e.target.value })} required name="password" className="ts-input" type="password" placeholder="Password" />
                                    <Form.Text className="text-muted">
                                        Minimum eight characters, at least one letter and one number
    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Control value={this.state.confirmPassword || ""} onChange={(e) => this.setState({ confirmPassword: e.target.value })} required onBlur={() => this.validatePassword()} name="confirmPassword" className="ts-input" type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <Form.Group className="mb-3  " controlId="cardOwner">
                                    <Form.Check
                                        value={this.state.user_type === "owner" ? true : false}
                                        onChange={(e) => this.setState({ user_type: e.target.checked ? "Car Owner" : "" })}
                                        name="user_type"
                                        type="radio"
                                        className="ts-bbg-text-color"
                                        required
                                        label="Car Owner" />

                                    <Form.Check
                                        value={this.state.user_type === "dealer" ? true : false}
                                        onChange={(e) => this.setState({ user_type: e.target.checked ? "Car Dealer" : "" })}
                                        name="user_type"
                                        type="radio"
                                        className="ts-bbg-text-color"
                                        required
                                        label="Car Dealer" />
                                </Form.Group>
                                <div className="d-flex justify-content-flex-start">
                                    <Link className="ts-bbg-text-color" to="/register">     Already a member  ?</Link>
                                </div>
                                <div className="  justify-content-center algin-center mt-4 ">

                                    {!this.state.loading ? <Button className="ts-btn" variant="primary" type="submit">
                                        Register
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
        user: state.app.user
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        UserHandler: (value) => dispatch({ type: "USER", value: value }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationHero);