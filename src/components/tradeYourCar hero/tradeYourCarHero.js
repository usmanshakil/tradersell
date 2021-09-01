
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
            step: 2,
            // vin: "5UXKU2C54J0X48668",
            car_details_by_vin: null,

            vin: "",
            drivetrain: '',
            engine: '',
            year: Number,
            make: '',
            model: '',
            state: '',
            city: '',
            zipCode: '',
            phone: '',

            // Additional Information 2

            odometer: '',
            transmission: '',
            trim: '',
            fuel_type: '',
            body_type: '',
            condition: '',
            exterior_color: '',
            primary_photo: [],
            additional_photos: [],


            // Driveability 3

            vehicle_driving: '',
            transmission_issue: '',
            drivetrain_issue: '',
            steering_issue: '',
            brake_issue: '',
            suspension_issue: '',
            suspension_issue: '',

            // Exterior 4
            minor_body_damage: '',
            moderate_body_damage: '',
            major_body_damage: '',
            scratches: '',
            glass_damaged_cracked: '',
            lights_damaged_cracked: '',
            minor_body_rust: '',
            moderate_body_rust: '',
            major_body_rust: '',
            aftermarket_parts_exterior: '',
            mismatched_paint_colors: '',
            previous_paint_work: '',

            // Interior 5

            seat_damage: '',
            carpet_damage: '',
            dashboard_damage: '',
            interior_trim_damage: '',
            sunroof: '',
            navigation: '',
            aftermarket_stereo_equipment: '',
            hvac_not_working: '',
            leather_Or_Leather_type_seats: '',

            // final info  6

            make: '',
            model: '',
            radius: '',
 
            loading: false

        }
    }
    handleNextStep = (e) => {
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
             // for (let i = 0; i < this.state.additional_photos.length; i++) {
        //     data.append('additional_photos[' + i + ']', this.state.additional_photos[i]);
        //     alert(this.state.additional_photos[i])
        //    } 
        //    alert(JSON.stringify(dataobject2))
        e.preventDefault();
        var data = new FormData();
        const dataobject1 = {
            vehicle: this.state.vehicle,
            drivetrain: this.state,
            engine: this.state.drivetrain,
            year: this.state.year,
            make: this.state.make,
            model: this.state.model,
            state: this.state.state,
            city: this.state.city,
            zipCode: this.state.zipCode,
            phone: this.state.phone,
        }
   
        const dataobject2 = {
            odometer: this.state.odometer,
            transmission: this.state.transmission,
            trim: this.state.trim,
            fuel_type: this.state.fuel_type,
            body_type: this.state.body_type,
            condition: this.state.condition,
            exterior_color: this.state.exterior_color,
            primary_photo: this.state.primary_photo,
            additional_photos: this.state.additional_photos,
        }
        // alert(JSON.stringify(dataobject2))


        const dataobject3 = {
            vehicle_driving: this.state.vehicle_driving,
            transmission_issue: this.state.transmission_issue,
            drivetrain_issue: this.state.drivetrain_issue,
            steering_issue: this.state.steering_issue,
            brake_issue: this.state.brake_issue,
            suspension_issue: this.state.suspension_issue,
        }
        // alert(JSON.stringify(dataobject3))

        const dataobject4 = {
            minor_body_damage: this.state.minor_body_damage,
            moderate_body_damage: this.state.moderate_body_damage,
            major_body_damage: this.state.major_body_damage,
            scratches: this.state.scratches,
            glass_damaged_cracked: this.state.glass_damaged_cracked,
            lights_damaged_cracked: this.state.lights_damaged_cracked,
            minor_body_rust: this.state.minor_body_rust,
            moderate_body_rust: this.state.moderate_body_rust,
            major_body_rust: this.state.major_body_rust,
            aftermarket_parts_exterior: this.state.aftermarket_parts_exterior,
            mismatched_paint_colors: this.state.mismatched_paint_colors,
            previous_paint_work: this.state.previous_paint_work,
        }
        //         alert(JSON.stringify(dataobject4))



        const dataobject5 = {
            seat_damage: this.state.seat_damage,
            carpet_damage: this.state.carpet_damage,
            dashboard_damage: this.state.dashboard_damage,
            interior_trim_damage: this.state.interior_trim_damage,
            sunroof: this.state.sunroof,
            navigation: this.state.navigation,
            aftermarket_stereo_equipment: this.state.aftermarket_stereo_equipment,
            hvac_not_working: this.state.hvac_not_working,
            leather_Or_Leather_type_seats: this.state.leather_Or_Leather_type_seats,
        }
        //         alert(JSON.stringify(dataobject5))

        const dataobject6 = {
            make: this.state.make,
            model: this.state.model,
            radius: this.state.radius,

        }
        //   alert(JSON.stringify(dataobject6))
        console.log("Data " + JSON.stringify(dataobject1), JSON.stringify(dataobject2), JSON.stringify(dataobject3), JSON.stringify(dataobject4), JSON.stringify(dataobject5), JSON.stringify(dataobject6))

        this.setState({ step: 1 })
        alert("values Submitted check console")

    }
    getVINData = async () => { 
        if (this.props.user?.isLogin) {
            if (validateSingleField(this.state.vin)) {
                this.setState({ loading: true })
                var FormData = require('form-data');
                var data = new FormData();
                data.append('vin', this.state.vin);
                try {
                    const response = await axios(APIConfig('post', '/check_vin', data));
                    if (response.status === 200) { 
                        this.setState({
                            loading: false
                            , car_details_by_vin: response.data.data
                            , drivetrain: response.data.data.attributes.drivetrain
                            , engine: response.data.data.attributes.engine
                            , year: parseInt(response.data.data.attributes.year)
                            , make: response.data.data.attributes.make
                            , model: response.data.data.attributes.model
                        })

                        toast.success("Data has been fetched successfully", {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 1000,
                        });
                    }
                } catch (error) {
                    toast.error("Vin is incorrect please try again ", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1800,
                    });
                    this.setState({ loading: false })
                }
            }
            else {
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
                                    <h1 className="car-info">Car Information  </h1>
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
                                                        type="text" required value={this.state.vin} onChange={(e) => this.setState({ vin: e.target.value })} name="vin" placeholder="  Vehicle VIN *  "

                                                        // aria-label="Recipient's username"
                                                        // aria-describedby="basic-addon2"
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
                                                    <Form.Control required className="ts-input" type="text" value={this.state.drivetrain} onChange={(e) => this.setState({ drivetrain: e.target.value })} name='drivetrain' placeholder=" Drivetrain*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Engine">
                                                    <Form.Control required className="ts-input" name="engine" value={this.state.engine} onChange={(e) => this.setState({ engine: e.target.value })} type="text" placeholder="   Engine*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="year">
                                                    <Form.Control required className="ts-input" name={"year"} value={this.state.year} onChange={(e) => this.setState({ year: e.target.value })} type="number" placeholder="    Year*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Make">
                                                    <Form.Control required className="ts-input" name="make" value={this.state.make} onChange={(e) => this.setState({ make: e.target.value })} type="text" placeholder="   Make*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Model">
                                                    <Form.Control required  className="ts-input" name="model" value={this.state.model} onChange={(e) => this.setState({ model: e.target.value })} type="text" placeholder="    Model*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="State">
                                                    <Form.Control required className="ts-input" name="state" value={this.state.state} onChange={(e) => this.setState({ state: e.target.value })} type="text" placeholder="   State*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="City">
                                                    <Form.Control required className="ts-input" name="city" value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })} type="text" placeholder="    City*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Zip Code">
                                                    <Form.Control required className="ts-input" name="zipCode" value={this.state.zipCode} onChange={(e) => this.setState({ zipCode: e.target.value })} type="text" placeholder="   Zip Code *" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Phone">
                                                    <Form.Control required className="ts-input" type="text" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} name="phone" placeholder="    Phone*  " />
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
                                                    <Form.Control value={this.state.odometer} className="ts-input" type="text" name="odometer" value={this.state.odometer} onChange={(e) => this.setState({ odometer: e.target.value })} type="text" placeholder="Odometer*  " />
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Transmission">
                                                    <Form.Control name="transmission" value={this.state.transmission} onChange={(e) => this.setState({ transmission: e.target.value })} className="ts-input" type="text" placeholder=" Transmission* " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Trim">
                                                    <Form.Control required name="trim" value={this.state.trim} onChange={(e) => this.setState({ trim: e.target.value })} className="ts-input" type="text" placeholder="  Trim*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Fuel Type">
                                                    <Form.Control name="fuel_type" value={this.state.fuel_type} onChange={(e) => this.setState({ fuel_type: e.target.value })} className="ts-input" type="text" placeholder="  Fuel Type*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="Body Type">
                                                    <Form.Control name="body_type" value={this.state.body_type} onChange={(e) => this.setState({ body_type: e.target.value })} className="ts-input" type="text" placeholder=" Body Type*" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group controlId="formGridState">
                                                    <Form.Select name="condition" value={this.state.condition} onChange={(e) => this.setState({ condition: e.target.value })} className="ts-input" defaultValue="  Condition*">

                                                        <option>Condition  </option>
                                                        <option value="used">Used</option>
                                                        <option value="new">New</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={12} md={12} sm={12}>
                                                <Form.Group className="mb-1" controlId="Exterior Color">
                                                    <Form.Control name="exterior_color" value={this.state.exterior_color} onChange={(e) => this.setState({ exterior_color: e.target.value })} className="ts-input" type="text" placeholder="   Exterior Color*" />
                                                </Form.Group>
                                            </Col> 
                                        </Row>
                                        <Row className="  ">
                                            <Col lg={12} md={12} sm={12}>
                                            <Form.Label className="sell-form-label">       Primary photo</Form.Label>
                                                <Form.Group className="mb-1" controlId="Primary Photo"> 
                                                    <Form.Control   name="primary_photo"
                                                    //  value={this.state.primary_photo} 
                                                     onChange={(e) => this.setState({ primary_photo: e.target.file })} className="ts-input" type="file" placeholder="  Primary Photo " />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="  ">
                                            <Col lg={12} md={12} sm={12}>
                                            <Form.Label className="sell-form-label">    Additional photo</Form.Label>
                                                <Form.Group className="mb-1" controlId=" Additional Photos">
                                                    <Form.Control multiple   name="additional_photos"
                                                    //  value={this.state.additional_photos} 
                                                       onChange={(e) => this.setState({ additional_photos: e.target.files })} 
                                                    accept="image/*"   
                                                     className="ts-input" type="file" placeholder="   Additional Photos*" />
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
                                                    <Form.Select name="vehicle_driving" value={this.state.vehicle_driving} onChange={(e) => this.setState({ vehicle_driving: e.target.value })} className="ts-input" >
                                                        <option> Vehicle Driving</option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="transmission_issue" value={this.state.transmission_issue} onChange={(e) => this.setState({ transmission_issue: e.target.value })} className="ts-input"  >
                                                        <option>Transmission Issue  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="drivetrain_issue" value={this.state.drivetrain_issue} onChange={(e) => this.setState({ drivetrain_issue: e.target.value })} className="ts-input"  >
                                                        <option> Drivetrain Issue</option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="steering_issue" value={this.state.steering_issue} onChange={(e) => this.setState({ steering_issue: e.target.value })} className="ts-input" defaultValue="Steering Issue* ">
                                                        <option>Steering Issue</option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="brake_issue" value={this.state.brake_issue} onChange={(e) => this.setState({ brake_issue: e.target.value })} className="ts-input" defaultValue="Brake Issue* ">
                                                        <option> Brake Issue</option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="suspension_issue" value={this.state.suspension_issue} onChange={(e) => this.setState({ suspension_issue: e.target.value })} className="ts-input" defaultValue="Suspension Issue  * ">
                                                        <option> Suspension Issue  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
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
                                                    <Form.Select name="minor_body_damage" value={this.state.minor_body_damage} onChange={(e) => this.setState({ minor_body_damage: e.target.value })} className="ts-input" >
                                                        <option> Minor Body Damage  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="moderate_body_damage" value={this.state.moderate_body_damage} onChange={(e) => this.setState({ moderate_body_damage: e.target.value })} className="ts-input"  >
                                                        <option>Moderate Body Damage*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="major_body_damage" value={this.state.major_body_damage} onChange={(e) => this.setState({ major_body_damage: e.target.value })} className="ts-input"  >
                                                        <option> Major Body Damage*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="scratches" value={this.state.scratches} onChange={(e) => this.setState({ scratches: e.target.value })} className="ts-input"  >
                                                        <option>Scratches*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="glass_damaged_cracked" value={this.state.glass_damaged_cracked} onChange={(e) => this.setState({ glass_damaged_cracked: e.target.value })} className="ts-input"  >
                                                        <option> Glass Damaged Cracked*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="lights_damaged_cracked" value={this.state.lights_damaged_cracked} onChange={(e) => this.setState({ lights_damaged_cracked: e.target.value })} className="ts-input"  >
                                                        <option> Lights Damaged Cracked*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>



                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="minor_body_rust" value={this.state.minor_body_rust} onChange={(e) => this.setState({ minor_body_rust: e.target.value })} className="ts-input"  >
                                                        <option> Minor Body Rust*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="moderate_body_rust" value={this.state.moderate_body_rust} onChange={(e) => this.setState({ moderate_body_rust: e.target.value })} className="ts-input"  >
                                                        <option> Moderate Body Rust*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="major_body_rust" value={this.state.major_body_rust} onChange={(e) => this.setState({ major_body_rust: e.target.value })} className="ts-input"  >
                                                        <option> Major Body Rust* </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="aftermarket_parts_exterior" value={this.state.aftermarket_parts_exterior} onChange={(e) => this.setState({ aftermarket_parts_exterior: e.target.value })} className="ts-input"  >
                                                        <option> Aftermarket Parts Exterior*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row><Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="mismatched_paint_colors" value={this.state.mismatched_paint_colors} onChange={(e) => this.setState({ mismatched_paint_colors: e.target.value })} className="ts-input" >
                                                        <option>Mismatched Paint Colors</option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="previous_paint_work" value={this.state.previous_paint_work} onChange={(e) => this.setState({ previous_paint_work: e.target.value })} className="ts-input"  >
                                                        <option>Previous Paint Work*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
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
                                                    <Form.Select name="seat_damage" value={this.state.seat_damage} onChange={(e) => this.setState({ seat_damage: e.target.value })} className="ts-input"  >
                                                        <option>Seat Damage*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="carpet_damage" value={this.state.carpet_damage} onChange={(e) => this.setState({ carpet_damage: e.target.value })} className="ts-input"  >
                                                        <option>Carpet Damage* </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="dashboard_damage" value={this.state.dashboard_damage} onChange={(e) => this.setState({ dashboard_damage: e.target.value })} className="ts-input"  >
                                                        <option> Dashboard Damage* </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="interior_trim_damage" value={this.state.interior_trim_damage} onChange={(e) => this.setState({ interior_trim_damage: e.target.value })} className="ts-input"  >
                                                        <option>Interior Trim Damage* </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="sunroof" value={this.state.sunroof} onChange={(e) => this.setState({ sunroof: e.target.value })} className="ts-input"  >
                                                        <option>Sunroof*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="navigation" value={this.state.navigation} onChange={(e) => this.setState({ navigation: e.target.value })} className="ts-input"  >
                                                        <option> Navigation*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>



                                        <Row className="  ">
                                            <Col lg={6} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="aftermarket_stereo_equipment" value={this.state.aftermarket_stereo_equipment} onChange={(e) => this.setState({ aftermarket_stereo_equipment: e.target.value })} className="ts-input"  >
                                                        <option> Aftermarket Stereo Equipment*  </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="hvac_not_working" value={this.state.hvac_not_working} onChange={(e) => this.setState({ hvac_not_working: e.target.value })} className="ts-input"  >
                                                        <option> Hvac Not Working* </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="  ">
                                            <Col lg={12} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="leather_Or_Leather_type_seats" value={this.state.leather_Or_Leather_type_seats} onChange={(e) => this.setState({ leather_Or_Leather_type_seats: e.target.value })} className="ts-input"  >
                                                        <option>Leather Or Leather Type Seats* </option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
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
                                                    <Form.Control className="ts-input" type="text" value={this.state.make} onChange={(e) => this.setState({ make: e.target.value })} name='make' placeholder=" Make*  " />
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6} md={12} sm={12}>

                                                <Form.Group className="mb-3" controlId="Modal">
                                                    <Form.Control className="ts-input" type="text" value={this.state.model} onChange={(e) => this.setState({ model: e.target.value })} name='model' placeholder=" Modal*  " />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="   ">
                                            <Col lg={12} md={12} sm={12}>
                                                <h6>What distance are you willing to sell your car in?</h6>
                                            </Col>
                                            <Col lg={12} md={12} sm={12}>
                                                <Form.Group className="mb-3" controlId="formGridState">
                                                    <Form.Select name="radius" value={this.state.radius} onChange={(e) => this.setState({ radius: e.target.value })} className="ts-input"  >
                                                        <option> Radius</option>
                                                        <option value="5">5 Miles</option>
                                                        <option value="10">10 Miles</option>
                                                        <option value="20">20 Miles</option>
                                                        <option value="30">30 Miles</option>
                                                        <option value="40">40 Miles</option>
                                                        <option value="50">50 Miles</option>
                                                        <option value="75">75 Miles</option>
                                                        <option value="100">100 Miles</option>
                                                        <option value="250">250 Miles</option>
                                                        <option value="500">500 Miles</option>

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