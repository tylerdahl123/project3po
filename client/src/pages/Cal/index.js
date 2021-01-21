import React, { useEffect } from "react";
import Calendar from "../../components/Calendar";
import LoginFirst from "../../components/LoginFirst";
import '../style.css';

export default function Cal(){
   
        return(
            <div className="page-container">
                <div className="content-wrap">
                    <h1>Calendar</h1>
                    <br />
                    <Calendar />
                </div>
            </div>
        )
    }