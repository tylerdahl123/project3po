import React, {Component} from "react";
import {Col, Row, Container} from "../../components/Grid";

export default function Login(){
    return(
        <div className="page-container">
            <Container>
                <div className="content-wrap">
                    <Row>                    
                        <Col size="md-12">                         
                               <h1>Login</h1>
                                <br />
                                <br />   
                                <div className="loginbox">
                                loginform here
                                <br />
                                <br />
                                if press button to create account, 
                                hide login box component and show createform component
                                <br />
                                <br />
                                have button switch from login to logout when login is successful
                                when login is successful calendar shows on /cal
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
