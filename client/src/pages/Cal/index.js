import React, { Component, useState } from "react";
import {Col, Row, Container} from "../../components/Grid";
import Calendar from "../../components/Calender";
import LoginFirst from "../../components/LoginFirst";

class Cal extends Component{

    state={
        loginState: false,
    }


    renderPage = () => {
        if (this.state.loginState === true) {
            return < Calendar />;
        } else {
            return <LoginFirst />
        }

    }

    render(){
        return(
            <div className="page-container">
                <div className="content-wrap">
                    <h1>Your Calender</h1>
                    { this.renderPage()}
                </div>
            </div>
        )
    }
}

export default Cal;