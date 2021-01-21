import React from 'react';
import { Container, Row, Col } from "../../components/Grid";
import Login from '../../components/Login.js';
import Logout from '../../components/Logout.js';
import '../style.css';

export default function LoginPage(){
    return(
        <div className="page-container">
            <div className="content-wrap">
                <Container>
                    <h1>Login</h1>
                    <Row>
                        <br />
                        <Col size="md-12">
                            <div>
                                <h3>Login through google to have your events linked to your google calendar!</h3>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col size ="md-12">
                            <Login />
                            <Logout />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}