import React from "react";
import {Col, Row, Container} from "../../components/Grid";

export default function About(){
    return(
        <div className="page-container">
            <div className="content-wrap">
                <Container>
                    <Row>
                        <Col size="md-12">                   
                                <h1>About Page</h1>
                                <br />
                                <p>This is the about page</p>
                                <br />
                                <br />
                                <p> info about the project and concept go here </p>
                                <br />
                                <p> button here to go to sub-page that has about info for each of us (a photo, a hobby, github/linkedin link?)</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
