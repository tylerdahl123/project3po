import React, { Component, useState } from "react";
import Calendar from "../../components/Calender";
import LoginFirst from "../../components/LoginFirst";

class Cal extends Component{

    renderPage = () => {
        if (useState.loginState === true) {
            return < Calendar />;
        } else {
            return <LoginFirst />
        }

    }

    render(){
        return(
            <div className="page-container">
                <div className="content-wrap">
                    <h1>
                        Calender
                    </h1>
                    { this.renderPage()}
                </div>
            </div>
        )
    }
}

export default Cal;