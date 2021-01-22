import React, { useEffect } from "react";

import LoginFirst from "../../components/LoginFirst";
import TimeTable from "../../components/TimeTable";
import '../style.css';



export default function Cal(){  

        return(
            <div className="page-container">
                <div className="content-wrap">
                    <h1>
                        Calendar
                    </h1>
                    <TimeTable />

                </div>
            </div>
        )
    }