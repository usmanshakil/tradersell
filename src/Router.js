import React, {   lazy } from 'react';
import { BrowserRouter , Switch, Route  } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import { history } from './helpers/history';

const Home = lazy(() => import('./views/pages/home'));
const Login = lazy(() => import('./views/pages/login'));
const Registration = lazy(() => import('./views/pages/registration'));
const Contactus = lazy(() => import('./views/pages/contactus'));
const TradeYourCar = lazy(() => import('./views/pages/tradeYourCar'));
const SellYourCar = lazy(() => import('./views/pages/sellYourCar'));

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter basename={window.location.pathname || ''} history={history}  >
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                ></ToastContainer>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/contactus" component={Contactus} />
                    <Route exact path="/trade-your-car" component={TradeYourCar} />
                    <Route exact path="/Sell-your-car" component={SellYourCar} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // vouched: state.app.user.isVoucehdVerified,
    };
};
export default connect(mapStateToProps)(AppRouter);
