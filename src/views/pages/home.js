
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../../components/hero/hero";
import Welcome from '../../components/welcome';
import GetRegistered from '../../components/getRegistered';
import HowWeWork from '../../components/howWeWork';
import BuyOrSell from '../../components/buyOrSell';
import NewCars from '../../components/newcars';
import CustomerReview from '../../components/customerReview';
import NewsAndArticals from '../../components/newsAndArticals';
import Footer from '../_partials/footer';
class Home extends Component {
  render() {
    console.log(this.props.vouched)
    return (
      <React.Fragment>
        <Hero />
        <Welcome />
        <HowWeWork />
        <BuyOrSell />
        <NewCars />
        <CustomerReview />
        <NewsAndArticals />
        <GetRegistered />
        <Footer />
      </React.Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);