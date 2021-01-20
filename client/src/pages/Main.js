import React from "react";
import {Col, Row, Container} from "../components/Grid";
import "./style.css"

export default function Main(){
    return(
        <div className="page-container">
            <Container>
                <div className="content-wrap">
                    <Row>
                        <Col size="md-12">
                            <div className="jumbotron">
                                Jumbotron (potentially unnecessary)
                            </div>
                        </Col>
                    </Row>
                    <h1>Welcome!</h1>
                    <Row>                    
                        <Col size="md-12">
                            <div>
                                <br />
                                This website helps you stay on time!
                                <br /> 
                                <br />
                                Press 'Login' to login or create a new account! 
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
