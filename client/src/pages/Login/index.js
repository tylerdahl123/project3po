import React, {Component} from "react";
import {Col, Row, Container} from "../../components/Grid";

export default function Login(){
    return(
        <Container className="page-container">
            <div className="content-wrap">
                <Row>
                    <Col size="md-12" className="jumbotron">
                        Jumbotron?
                    </Col>
                </Row>
                <Row>                    
                    <Col size="md-12" className="loginbox">
                        Login
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
