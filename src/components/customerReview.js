
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom"
import Customer from "../assets/imgs/png/newcars/2021-ford-edge_100761340_h.png";
class CustomerReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                {
                    image: Customer,
                    message: "Lorem ipsum dolor sit amet, consetetur  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  consetetur sadipscing elitr,  consetetur sadipscing elitr,  consetetur sadipscing elitr,  consetetur sadipscing elitr,",
                    name: "Alexa  Cathy 1",
                    designation: "Customer"
                },
                {
                    image: Customer,
                    message: "Lorem ipsum dolor sit amet, consetetur  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,   consetetur sadipscing elitr,  consetetur sadipscing elitr,  consetetur sadipscing elitr,  consetetur sadipscing elitr,",
                    name: "Alexa  Cathy 2",
                    designation: "Customer"
                },
                {
                    image: Customer,
                    message: "Lorem ipsum dolor sit amet, consetetur  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  consetetur sadipscing elitr,  consetetur sadipscing elitr,  consetetur sadipscing elitr,  consetetur sadipscing elitr,",
                    name: "Alexa  Cathy 3",
                    designation: "Customer"
                }


            ]
        }
    }
    render() {
        return (
            <div className="customer-review-section">
                <Container>
                    <Row>
                        <Col className="how-we-work-text-area" lg={12} md={12} sm={12}>
                            <h1>Customer Review          </h1>
                        </Col>
                        <Col className="mt-5" lg={12} md={12} sm={12}>
                            {/* <Carousel fade>
                                <Carousel.Item>
                                    <Row>

                                        {this.state.reviews?.map((item, index) =>
                                            <Col key={index} className="customer-review-card" lg={4} md={6} sm={12}>
                                                <div style={{ backgroundColor: "#34404E" }} className="customer-review-message-container">
                                                    <p style={{ color: "white" }}>{item.message}</p>
                                                </div>
                                                <div className=' d-flex justify-content-center '>
                                                    <span className="d-flex justify-content-center flex-column customer-review-name-container">
                                                        <h4>{item.name}</h4>
                                                        <h6>{item.designation}</h6>
                                                    </span>
                                                    <Image src={item.image} className="customer-avatar   " alt="customer-" roundedCircle />

                                                </div>
                                            </Col>
                                        )}
                                    </Row>
                                </Carousel.Item>
                            </Carousel> */}
                            <Row>
                                {this.state.reviews?.map((item, index) =>
                                    <Col key={index} className="customer-review-card" lg={4} md={6} sm={12}>
                                        <div style={{ backgroundColor: "#34404E" }} className="customer-review-message-container">
                                            <p style={{ color: "white" }}>{item.message}</p>
                                        </div>
                                        <div className=' d-flex justify-content-center '>
                                            <span className="d-flex justify-content-center flex-column customer-review-name-container">
                                                <h4>{item.name}</h4>
                                                <h6>{item.designation}</h6>
                                            </span>
                                            <Image src={item.image} className="customer-avatar   " alt="customer-" roundedCircle />

                                        </div>
                                    </Col>
                                )}
                            </Row>


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
export default connect(mapStateToProps, mapDispatchToProps)(CustomerReview);