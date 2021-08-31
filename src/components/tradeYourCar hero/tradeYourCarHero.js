
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button, Image, FormControl, Spinner } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import NavBar from '../../views/_partials/navbar';
import Step1 from "../../assets/imgs/png/tradeSteps/1.png"
import Step2 from "../../assets/imgs/png/tradeSteps/2.png"
import Step3 from "../../assets/imgs/png/tradeSteps/3.png"
import Step4 from "../../assets/imgs/png/tradeSteps/4.png"
import Step5 from "../../assets/imgs/png/tradeSteps/5.png"
import Step6 from "../../assets/imgs/png/tradeSteps/6.png"
import APIConfig from '../../helpers/api/config';
import { toast } from "react-toastify";
import axios from "axios"
import { validateSingleField } from '../../helpers/validation'; 
class TradeYourCarHero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            vehicle: '',
            drivetrain: '',
            engine: '',
            year: 0,
            make: '',
            model: 0,
            state: '',
            city: '',
            zipCode: 0,
            phone: 0,
            // vin: "5UXKU2C54J0X48668",
            vin: "",
            loading: false

        }
    }
    handleNextStep = (e) => {
       
        // const dataobject = {
        //     vehicle: this.state.vehicle,
        //     drivetrain: this.state,
        //     engine: this.state.drivetrain,
        //     year: this.state.year,
        //     make: this.state.make,
        //     model: this.state.model,
        //     state: this.state.state,
        //     city: this.state.city,
        //     zipCode: this.state.zipCode,
        //     phone: this.state.phone,
        // }
        // alert(JSON.stringify(dataobject))
        e.preventDefault();
        if (this.props.user?.isLogin) {

            this.setState({ step: this.state.step + 1 })
        }
        else {
            toast.warning("Please login before proceed .", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1800,
            });
            this.props.history.push("/login")
        }
        
    }
    handlePreviousStep = (e) => {
        e.preventDefault();
        this.setState({ step: this.state.step - 1 })
    }
    handleFinalSubmit = (e) => {
        e.preventDefault();
        this.setState({ step: 1 })
        alert("values Submitted")
    }
    getVINData = async () => { 
        if (this.props.user?.isLogin ) {
           if(validateSingleField(this.state.vin)){
            this.setState({ loading: true })
            var FormData = require('form-data');
            var data = new FormData();
            data.append('vin', this.state.vin);
            try {
                const response = await axios(APIConfig('post', '/check_vin', data));
                if (response.status === 200) {
                    toast.success("Data has been fetched successfully", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                    });
                    this.setState({ loading: false })
                    // this.props.history.push('/trade-your-car') 
                }
            } catch (error) {
                toast.error("Vin is incorrect please try again ", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1800,
                });
                this.setState({ loading: false })
            } 
           }
           else{
            toast.warning("Please fill VIN number before proceed.", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1800,
            }); 
           }
        } else {
            toast.warning("Please login before proceed .", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1800,
            });
            this.props.history.push("/login")
        }

    }
 
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
                            <div className="login-hero-container margin-top-medium">
                                <div className="d-flex justify-content-center algin-center mb-4">
                                    <h1>Car Information  </h1>
                                </div>
                                {/* step 1  Main Info started */}
                                {this.state.step === 1 ?
                                    <Form onSubmit={(e) => { this.handleNextStep(e) }}>


                                        <Row className="   ">
                                            <Col className="d-flex justify-content-center align-items-center steps-row-image" lg={12} md={12} sm={12}>
                                                <img src={Step1} className="  " alt="steps" />
                                            </Col>


                                            <Col lg={6} md={12} sm={12}> 
                                                <InputGroup className="mb-3">
                                                    <FormControl
                                                        type="text" required value={this.state.vin} onChange={(e) => this.setState({ vin: e.target.value })} name="vin" placeholder="  Vehicle VIN(Minimum 17 characters)*  "

                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                        className="ts-input"
                                                    />
                                                    {!this.state.loading ? <Button onClick={() => this.getVINData()} variant=" btn-start outline-secondary" id="button-addon2">
                                                        Start
                                                      </Button>
                                                        :
                                                        <Button disabled className="btn-start" variant="primary" type="submit">
                                                            <Spinner animation="grow" variant="dark" size="sm" />
                                                        </Button>}
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Drivetrain">
                                                    <Form.Control className="ts-input" type="text" value={this.state.drivetrain} onChange={(e) => this.setState({ drivetrain: e.target.value })} name='drivetrain' placeholder=" Drivetrain*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Engine">
                                                    <Form.Control className="ts-input" name="engine" value={this.state.engine} onChange={(e) => this.setState({ engine: e.target.value })} type="text" placeholder="   Engine*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="year">
                                                    <Form.Control className="ts-input" name={"year"} value={this.state.year} onChange={(e) => this.setState({ year: e.target.value })} type="number" placeholder="    Year*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Make">
                                                    <Form.Control className="ts-input" name="make" value={this.state.make} onChange={(e) => this.setState({ make: e.target.value })} type="text" placeholder="   Make*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Model">
                                                    <Form.Control className="ts-input" name="model" value={this.state.model} onChange={(e) => this.setState({ model: e.target.value })} type="number" placeholder="    Model*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="State">
                                                    <Form.Control className="ts-input" name="state" value={this.state.state} onChange={(e) => this.setState({ state: e.target.value })} type="text" placeholder="   State*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="City">
                                                    <Form.Control className="ts-input" name="city" value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })} type="text" placeholder="    City*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Zip Code">
                                                    <Form.Control className="ts-input" name="zipCode" value={this.state.zipCode} onChange={(e) => this.setState({ zipCode: e.target.value })} type="number" placeholder="   Zip Code *" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Phone">
                                                    <Form.Control className="ts-input" type="number" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} name="phone" placeholder="    Phone*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <div className="d-flex  justify-content-center algin-items-center mt-4 ">


                                            {!this.state.loading ? <Button type="submit" variant=" btn-next" id="button-addon2a">
                                                Start
                                                      </Button>
                                                : <Button disabled className="btn-next" variant="primary"  >
                                                    <Spinner animation="grow" variant="dark" size="sm" />
                                                </Button>
                                            }
                                        </div>
                                        {/* step 1 Main Info  started ended */}

                                    </Form>
                                    : ""}
                                {/* step 1  Main Info ended */}





                                {/* step 2 Additional Info started */}
                                {this.state.step === 2 ?
                                    <Form onSubmit={this.handleNextStep}>

                                        <Row className="   ">
                                            <Col className="d-flex justify-content-center align-items-center steps-row-image" lg={12} md={12} sm={12}>
                                                <img src={Step2} className="  " alt="steps" />
                                            </Col>


                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Odometer">
                                                    <Form.Control className="ts-input" type="text" placeholder="Odometer*  " />
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Transmission">
                                                    <Form.Control className="ts-input" type="text" placeholder=" Transmission* " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Trim">
                                                    <Form.Control className="ts-input" type="text" placeholder="  Trim*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Fuel Type">
                                                    <Form.Control className="ts-input" type="number" placeholder="  Fuel Type*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Body Type">
                                                    <Form.Control className="ts-input" type="text" placeholder=" Body Type*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="  Condition*">
                                                        <option> Condition*</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Exterior Color">
                                                    <Form.Control className="ts-input" type="text" placeholder="   Exterior Color*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Primary Photo">
                                                    <Form.Control className="ts-input" type="file" placeholder="  Primary Photo " />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="  ">
                                            <Col lg={12} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId=" Additional Photos">
                                                    <Form.Control className="ts-input" type="file" placeholder="   Additional Photos*" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex  justify-content-center algin-items-center mt-4 ">
                                            <Button onClick={(e) => this.handlePreviousStep(e)} className="btn-back" variant="primary"  >
                                                Back
                                 </Button>
                                            <Button className="btn-next btn-margin-left" variant="primary" type="submit">
                                                Next
                                 </Button>
                                        </div>
                                    </Form>
                                    : ""}
                                {/* step 2  Additional Info started ended */}





                                {/* step 3  Driveability started */}
                                {this.state.step === 3 ?
                                    <Form onSubmit={this.handleNextStep}>

                                        <Row className="   ">
                                            <Col className="d-flex justify-content-center align-items-center steps-row-image" lg={12} md={12} sm={12}>
                                                <img src={Step3} className="  " alt="steps" />
                                            </Col>


                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Vehicle Driving* ">
                                                        <option> Vehicle Driving</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Vehicle Driving*">
                                                        <option>Vehicle Driving</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Drivetrain Issue* ">
                                                        <option> Drivetrain Issue</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Steering Issue* ">
                                                        <option>Steering Issue</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Brake Issue* ">
                                                        <option> Brake Issue</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Brake Issue* ">
                                                        <option> Brake Issue</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>



                                        <div className="d-flex  justify-content-center algin-items-center mt-4 ">
                                            <Button onClick={(e) => this.handlePreviousStep(e)} className="btn-back" variant="primary"  >
                                                Back
                                 </Button>
                                            <Button className="btn-next btn-margin-left" variant="primary" type="submit">
                                                Next
                                 </Button>
                                        </div>
                                    </Form>
                                    : ""}
                                {/* step 3 Driveability   started ended */}






                                {/* step 4  Exterior started */}
                                {this.state.step === 4 ?
                                    <Form onSubmit={this.handleNextStep}>

                                        <Row className="   ">
                                            <Col className="d-flex justify-content-center align-items-center steps-row-image" lg={12} md={12} sm={12}>
                                                <img src={Step4} className="  " alt="steps" />
                                            </Col>


                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Minor Body Damage* ">
                                                        <option> Minor Body Damage  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue=" Moderate Body Damage*">
                                                        <option>Moderate Body Damage*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Major Body Damage* ">
                                                        <option> Major Body Damage*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue=" Scratches* ">
                                                        <option>Scratches*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Glass Damaged Cracked* ">
                                                        <option> Glass Damaged Cracked*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Lights Damaged Cracked* ">
                                                        <option> Lights Damaged Cracked*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>



                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Minor Body Rust* ">
                                                        <option> Minor Body Rust*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Moderate Body Rust* ">
                                                        <option> Moderate Body Rust*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Moderate Body Rust* ">
                                                        <option>Moderate Body Rust* </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Major Body Rust* ">
                                                        <option> Major Body Rust* </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row><Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Aftermarket Parts Exterior*   ">
                                                        <option> Aftermarket Parts Exterior*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Previous Paint Work* ">
                                                        <option>Previous Paint Work*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row><Row className="  ">
                                            <Col lg={12} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Previous Paint Work*  ">
                                                        <option> Previous Paint Work* </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>



                                        <div className="d-flex  justify-content-center algin-items-center mt-4 ">
                                            <Button onClick={(e) => this.handlePreviousStep(e)} className="btn-back" variant="primary"  >
                                                Back
                                 </Button>
                                            <Button className="btn-next btn-margin-left" variant="primary" type="submit">
                                                Next
                                 </Button>
                                        </div>
                                    </Form>
                                    : ""}
                                {/* step 4 Exterior   started ended */}






                                {/* step 5  Interior started */}
                                {this.state.step === 5 ?
                                    <Form onSubmit={this.handleNextStep}>

                                        <Row className="   ">
                                            <Col className="d-flex justify-content-center align-items-center steps-row-image" lg={12} md={12} sm={12}>
                                                <img src={Step5} className="  " alt="steps" />
                                            </Col>


                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Seat Damage* ">
                                                        <option>Seat Damage*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Carpet Damage*">
                                                        <option>Carpet Damage* </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Dashboard Damage* ">
                                                        <option> Dashboard Damage* </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue=" Interior Trim Damage* ">
                                                        <option>Interior Trim Damage* </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Sunroof* ">
                                                        <option>Sunroof*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Navigation* ">
                                                        <option> Navigation*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>



                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Aftermarket Stereo Equipment*">
                                                        <option> Aftermarket Stereo Equipment*  </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Hvac Not Working* ">
                                                        <option> Hvac Not Working* </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="  ">
                                            <Col lg={12} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Moderate Body Rust* ">
                                                        <option>Leather Or Leather Type Seats* </option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>



                                        <div className="d-flex  justify-content-center algin-items-center mt-4 ">
                                            <Button onClick={(e) => this.handlePreviousStep(e)} className="btn-back" variant="primary"  >
                                                Back
                                 </Button>
                                            <Button className="btn-next btn-margin-left" variant="primary" type="submit">
                                                Next
                                 </Button>
                                        </div>
                                    </Form>
                                    : ""}
                                {/* step 5 Interior   started ended */}





                                {/* step 6   Final Details started */}
                                {this.state.step === 6 ?
                                    <Form onSubmit={this.handleFinalSubmit}>

                                        <Row className="   ">
                                            <Col className="d-flex justify-content-center align-items-center steps-row-image" lg={12} md={12} sm={12}>
                                                <img src={Step6} className="  " alt="steps" />
                                            </Col>
                                        </Row>
                                        <Row className="   ">
                                            <Col lg={12} md={12} sm={12}>
                                                <h6 className="form-subheading">Are you shopping for another car?</h6>
                                                <p className="form-small-text">If so, tell us about the car you're considering. This helps us match you with the best dealer for a trade-in.</p>
                                            </Col>
                                        </Row>
                                        <Row className="   ">


                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Vehicle">
                                                    <Form.Control className="ts-input" type="text" placeholder="Make  " />
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Modal">
                                                    <Form.Control className="ts-input" type="text" placeholder="Modal  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="   ">
                                            <Col lg={12} md={12} sm={12}>
                                                <h6>What distance are you willing to sell your car in?</h6>
                                            </Col>
                                            <Col lg={12} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select className="ts-input" defaultValue="Radius ">
                                                        <option> Radius</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <h6>Create Your Account</h6>
                                            <Form.Group className="mb-3" controlId="Vehicle">
                                                <Form.Control className="ts-input" type="text" placeholder="UserName  " />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="Vehicle">
                                                <Form.Control className="ts-input" type="email" placeholder="Email  " />
                                            </Form.Group>
                                        </Row>





                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Vehicle">
                                                    <Form.Control className="ts-input" type="password" placeholder="Password  " />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Vehicle">
                                                    <Form.Control className="ts-input" type="password" placeholder="Confirm Password " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <div className="d-flex  justify-content-center algin-items-center mt-4 ">
                                            <Button onClick={(e) => this.handlePreviousStep(e)} className="btn-back" variant="primary"  >
                                                Back
                                 </Button>
                                            <Button className="btn-next btn-margin-left" variant="primary" type="submit">
                                                Next
                                 </Button>
                                        </div>
                                    </Form>
                                    : ""}
                                {/* step 6 Final Details   started ended */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >

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

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TradeYourCarHero);