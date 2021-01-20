import React, { useEffect } from "react";
import Calendar from "../../components/Calender";
import LoginFirst from "../../components/LoginFirst";

export default function Cal(){

    const [isSignedIn] = useEffect();

    const renderPage = () => {
        if (isSignedIn === true) {
            return < Calendar />;
        } else {
            return <LoginFirst />
        }

    }
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