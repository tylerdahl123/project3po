import React from "react";
import {Col, Row, Container} from "../components/Grid";
import "./style.css"


export default function Main(){
    return(
        <div className="page-container view">
            <Container>
                <div className="content-wrap gap">
                    <div className="size">Welcome!</div>
                    <Row>                    
                        <Col size="md-12">
                            <div>
                                <br />
                                This website helps you stay on time!
                                <br /> 
                                <br />
                                Press 'Login' to login or create a new account! 
                            </div>
                            <br/>
                            <div>Maybe some more information about how the application works or a nice picture?</div>
                            <br/>
                            <div>Maybe some more information about how the application works or a nice picture?</div>
                            <br/>
                            <div>Maybe some more information about how the application works or a nice picture?</div>
                            <br/>
                            <div>Maybe some more information about how the application works or a nice picture?</div>
                            <br/>
                            <div>Maybe some more information about how the application works or a nice picture?</div>
                        </Col>
                    </Row>
                </div>
                <h1>Definitely change the colors!</h1>
            </Container>
            {/* Places the 3 boxes at the bottom of the screen */}
            <div className="boxes">
            <Row size="md-12">
            <Col size="md-4">
                                <div>
                                    <h2>Get Started</h2>
                                    <p>We all have those moments where we think we have our schedule under control. Suddenly, we realize we only have 5 minutes to get somewhere 30 mintutes away. </p>
                                </div>
                            </Col>
                            <Col size="md-4">
                                <div>
                                    <h2>Login</h2>
                                    <p>Login to be able to use this application across all your devices and never lose your schedule.(Mobile application coming soon.)</p>
                                </div>
                            </Col>
                            <Col size="md-4">
                                <div>
                                    <h2>Never Be Late Again</h2>
                                    <p>The application that takes into account the little things in life that add up to a lot of time. The time it takes for you to brush your teeth, take a shower, put on clothes, etc. all taken into account when creating your schedule.</p>
                                </div>
            </Col>
            </Row>
            </div>
        </div>
    )
}
