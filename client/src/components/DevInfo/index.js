import React from "react";
import './style.css';

export default function DevInfo({DevPic, DevName, DevFact, EmailDev, DevEmail, DevGit}){

    return(

        <div className="col-md-6">
            <div className="row">
                <div className="col-md-2">
                <img className ="developer" src={DevPic}/> <br/>
                </div>  
            
                <div className="col-md-10">
                <h5 className="dev-name">{DevName}</h5>
                
                <p className="dev-odd-fact">{DevFact}
                <br/>Email: <a href={EmailDev}>{DevEmail}</a>
                <br/><a href={DevGit}>Github</a>
                </p>
                </div>
            </div>
        </div>
    )
}