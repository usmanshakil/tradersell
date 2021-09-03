
import React, { Component } from 'react'  
import Logo from "../assets/imgs/png/nav/logo.png";
class Loader extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center loading-container"  >
            <img src={Logo} className="loading-logo" alt="loader" />
          </div>
        )
    }
}
 
export default  Loader;