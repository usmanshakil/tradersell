
import React, { Component } from 'react'
import { connect } from 'react-redux';
import GetRegistered from '../../components/getRegistered';
import Footer from '../_partials/footer';
import TradeYourCarHero from '../../components/tradeYourCar hero/tradeYourCarHero';
class TradeYourCar extends Component {
  render() {
    console.log(this.props.vouched)
    return (
      <React.Fragment>
        <TradeYourCarHero />
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
export default connect(mapStateToProps, mapDispatchToProps)(TradeYourCar);