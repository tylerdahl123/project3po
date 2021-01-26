import React from "react";
import {Col, Row, Container} from "../../components/Grid";
import "./style.css"
import DevInfo from "../../components/DevInfo"

export default function About(){
    return(
        <div className="page-container">
            <div className="content-wrap">
                <Container>
                    <Row>
                        <Col size="md-12">
                        <h1>About Page</h1>
                                <br />
                                
                                <br />
                                <br />
                                <p> This application is designed to allow the user to integrate tasks, appointments, reminders and more into a calendar. This calendar will then remind the user of the items input at a desired interval and also helpshow the user how much time needs to be allocated to accomplish that task on time.</p>
                                <br />
                                <p> A lot of us struggle with time management. The goal of this application is to aid those in need of morestructure and guidance into managing their time, as well as, those who just simply want reminders to keepthemselves on track.</p>
                                <br />      
                            <div className="card">
                                <h5 className="card-header">Meet the Creators!</h5>
                                <div className="card-body">
                                    <div id="about-developers-text">
                                    <div className= "row">

                                    <DevInfo DevPic={"https://avatars.githubusercontent.com/u/71345539?s=460&u=a726dbdbfd9076fe93775d98e1e199af37980b85&v=4"} DevName={"Tyler Dahlgren"} DevFact={"I am a 25 year old software developer currently enrolled in the UCLA coding Bootcamp."} EmailDev={"mailto:dahlgren15@gmail.com"} DevEmail={"dahlgren15@gmail.com"} DevGit={"https://github.com/tylerdahl123"}/>
                                    <DevInfo DevPic={"https://avatars.githubusercontent.com/u/69021459?s=460&u=0864f5ffd1d6f54699f58544af63a9243375efc3&v=4"} DevName={"Alex Kelly"} DevFact={"Full Stack Web Developer, Lifelong Learner"} EmailDev={"mailto:itsalexkelly@gmail.com"} DevEmail={"itsalexkelly@gmail.com"} DevGit={"https://github.com/luvwitch"}/>
                                      
                                    </div>

                                    <div className= "row mt-4">
                                    <DevInfo DevPic={"https://avatars.githubusercontent.com/u/70187829?s=460&u=d32b9be03e9cd0a339e87ecb70cd573a554d62df&v=4"} DevName={"Tito Rivera"} DevFact={"Aspiring full-stack web developer currently attending UCLA's coding boot camp."} EmailDev={"mailto:titorivera0707@gmail.com"} DevEmail={"titorivera0707@gmail.com"} DevGit={"https://github.com/titorivera0707"}/>
                                    <DevInfo DevPic={"https://avatars.githubusercontent.com/u/72284343?s=460&u=900f7b4afc45e93392d8ef52791d93978a2c2653&v=4"} DevName={"Kyle Gibson"} DevFact={"I am currently learning full-stack web development at UCLAs coding boot camp program."} EmailDev={"mailto:kyle.gibson22@yahoo.com"} DevEmail={"kyle.gibson22@yahoo.com"} DevGit={"https://github.com/kyle-gibson"}/>
                        
                                    </div>

                                    <div className= "row mt-4">
                                    <DevInfo DevPic={"https://ca.slack-edge.com/T01C8L6GK9Q-U01CJ5GTL4T-799742d52139-512"} DevName={"Javier Caro"} DevFact={"I am currently learning full-stack web development at UCLAs coding boot camp program."} EmailDev={"mailto:Jcaro1993@gmail.com"} DevEmail={"Jcaro1993@gmail.com"} DevGit={"https://github.com/jcaro1993"}/>
                                    
                                    </div>
                                    

                                    </div>
                                </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
