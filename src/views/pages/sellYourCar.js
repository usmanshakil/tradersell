
import React, { Component } from 'react'
import { connect } from 'react-redux';
import GetRegistered from '../../components/getRegistered';
import Footer from '../_partials/footer';
import SellYourCarHero from '../../components/sellYourCar hero/sellYourCarHero';
class SellYourCar extends Component {
  render() {
    console.log(this.props.vouched)
    return (
      <React.Fragment>
        <SellYourCarHero />
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
export default connect(mapStateToProps, mapDispatchToProps)(SellYourCar);