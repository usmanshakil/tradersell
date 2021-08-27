
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import backGroundImage1 from "../assets/imgs/png/newcars/2021-ford-edge_100761340_h.png";
import backGroundImage2 from "../assets/imgs/png/newcars/wed.png";
import backGroundImage3 from "../assets/imgs/png/newcars/download.png";
class NewCars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newCars: [
                {
                    image: backGroundImage1,
                    title: "Lincoln Nautilus",
                    model: "2020",
                    manual: "Manual",
                    petorl: "Petrol",
                    power: "300 hp"
                },
                {
                    image: backGroundImage1,
                    title: "Ford Rapter ",
                    model: "2020",
                    manual: "Manual",
                    petorl: "Petrol",
                    power: "400 hp"
                },
                {
                    image: backGroundImage3,
                    title: "Dodge Chellenger",
                    model: "2020",
                    manual: "Manual",
                    petorl: "Petrol",
                    power: "600 hp"
                }
            ]
        }
    }
    render() {
        return (
            <div className="new-cars-section">
                <Container fluid >
                    <Row className=" default-margin new-cars-container ">
                        {this.state.newCars.map((item, index) =>
                            <Col key={index} style={{ background: `linear-gradient(rgb(0 0 0 / 19%), rgb(0 0 0 / 48%)), url(${item.image})` }} className="new-car-card-full" lg={4} md={12} sm={12}>
                                <span className="new-badge">New</span>
                                <h1>{item.title}</h1>
                                <span className="new-card-ul">
                                    <span className="new-card-list-item border-right">{item.model}2020</span>
                                    <span className="new-card-list-item border-right">{item.manual}Manual</span>
                                    <span className="new-card-list-item border-right">{item.petorl}Pertol</span>
                                    <span className="new-card-list-item pl-2">{item.power}300 hp</span>
                                </span>
                            </Col>
                        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(NewCars);